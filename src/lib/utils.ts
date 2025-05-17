import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatError(error: any): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;
  return '不明なエラーが発生しました';
}
