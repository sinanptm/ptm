'use server';

import NodeMailerService from "@/lib/NodeMailerService";

const nodemailer = new NodeMailerService();

export const submitMessage = async (name: string, email: string, phone:number, content: string) => {
    try {
        await nodemailer.sendMail(name, email, phone, content);
    } catch (error) {
        console.log(error);
    }
}