'use server';

import NodeMailerService from "@/lib/NodeMailerService";

type ValidationError = {
  field: string;
  message: string;
};

type ValidationResult = {
  success: boolean;
  errors?: ValidationError[];
};

const validateName = (name: string): string | null => {
  if (!name || typeof name !== 'string') return "Name is required";
  const trimmed = name.trim();
  if (trimmed.length < 2) return "Name must be at least 2 characters";
  if (trimmed.length > 100) return "Name cannot exceed 100 characters";
  if (!/^[a-zA-Z\s-']+$/.test(trimmed)) return "Name contains invalid characters";
  return null;
};

const validateEmail = (email: string | undefined): string | null => {
  if (!email) return null;
  if (typeof email !== 'string') return "Email must be a string";
  const trimmed = email.trim();
  if (trimmed.length > 254) return "Email cannot exceed 254 characters";
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(trimmed)) return "Invalid email format";
  return null;
};

const validatePhone = (phone: string | undefined): string | null => {
  if (!phone) return null;
  if (typeof phone !== 'string') return "Phone must be a string";
  const cleaned = phone.replace(/\s+/g, '');
  if (cleaned.length > 15) return "Phone number cannot exceed 15 digits";
  if (!/^\+?[1-9]\d{1,14}$/.test(cleaned)) return "Invalid phone number format";
  return null;
};

const validateMessage = (message: string): string | null => {
  if (!message || typeof message !== 'string') return "Message is required";
  const trimmed = message.trim();
  if (trimmed.length < 10) return "Message must be at least 10 characters";
  if (trimmed.length > 1000) return "Message cannot exceed 1000 characters";
  return null;
};

const validateContactInfo = (email?: string, phone?: string): string | null => {
  if (!email && !phone) return "Either email or phone must be provided";
  return null;
};


const sanitizeContent = (content: string): string => {
  return content
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s@.,!?-]/g, '')
    .trim();
};

export const submitMessage = async (
  name: string,
  email: string | undefined,
  phone: string | undefined,
  content: string
) => {
  try {

    const errors: ValidationError[] = [];

    const nameError = validateName(name);
    if (nameError) errors.push({ field: 'name', message: nameError });

    const emailError = validateEmail(email);
    if (emailError) errors.push({ field: 'email', message: emailError });

    const phoneError = validatePhone(phone);
    if (phoneError) errors.push({ field: 'phone', message: phoneError });

    const messageError = validateMessage(content);
    if (messageError) errors.push({ field: 'message', message: messageError });

    const contactError = validateContactInfo(email, phone);
    if (contactError) errors.push({ field: 'contact', message: contactError });

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const sanitizedContent = sanitizeContent(content);

    const nodemailer = new NodeMailerService();
    await nodemailer.sendMail(
      name.trim(),
      email?.trim() || '',
      phone?.trim() || '',
      sanitizedContent
    );


  } catch (error) {
    console.error('Message submission error:', error);
    return {
      success: false,
      errors: [{
        field: 'form',
        message: 'Failed to send message. Please try again later.'
      }]
    };
  }
};