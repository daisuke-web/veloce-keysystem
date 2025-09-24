// lib/utils.ts
import { KeyStatus } from './types';

const randomNames = ["田中", "佐藤", "鈴木", "高橋", "伊藤", "山本", "渡辺", "中村"];

export function generateRandomKeyStatus(): KeyStatus[] {
  const selectedNames = [...randomNames].sort(() => 0.5 - Math.random()).slice(0, 6);
  return Array.from({ length: 6 }, (_, i) => ({
    number: i + 1,
    holder: selectedNames[i] || '店', // In case slice returns less than 6
  }));
}