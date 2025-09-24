// lib/types/index.ts
export interface Event {
  // ... (変更なし)
}

// 新しい日次シフト情報
export interface DailyShift {
  date: string; // '2025-09-24'
  openers: [string, string]; // 早番担当者2名
  closers: [string, string]; // 遅番担当者2名
  keyHolders: string[]; // その日の業務終了時点で鍵を持っている人
}

// アプリケーション全体で持つシフトデータの型
export type ShiftData = {
  [date: string]: DailyShift;
};