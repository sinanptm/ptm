import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getYears = ()=>{
  const currentYear = new Date().getFullYear();
  const startYear = 1994;
  return currentYear - startYear;
}