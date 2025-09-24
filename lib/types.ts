// lib/types.ts

export interface Event {
  title: string;
  start: Date | string;
  allDay: boolean;
  id: number;
}

export type KeyStatus = {
  number: number; // 鍵の番号 1〜6
  holder: string; // 持ち主の名前 or "店"
};

export type KeyLog = {
  [date: string]: KeyStatus[]; // 例: "2025-05-31": [{number: 1, holder: "田中"}, ...]
};