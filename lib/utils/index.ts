// lib/utils/index.ts
import { DailyShift, ShiftData } from "@/lib/types";

const staffNames = [
  "田中",
  "佐藤",
  "鈴木",
  "高橋",
  "伊藤",
  "山本",
  "渡辺",
  "中村",
  "小林",
  "加藤",
];

// 1ヶ月分のモックシフトデータを生成する関数
export function generateMockShiftDataForMonth(
  year: number,
  month: number
): ShiftData {
  const shifts: ShiftData = {};
  const daysInMonth = new Date(year, month, 0).getDate();
  let lastDayClosers: [string, string] = ["", ""];

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    const dateString = date.toISOString().split("T")[0];

    // ランダムにスタッフを割り当て
    const shuffledStaff = [...staffNames].sort(() => 0.5 - Math.random());
    const openers: [string, string] = [shuffledStaff[0], shuffledStaff[1]];
    const closers: [string, string] = [shuffledStaff[2], shuffledStaff[3]];

    // ルールに基づき、前日の遅番と当日の早番が鍵を持つ
    let initialKeyHolders: string[] = [];
    if (lastDayClosers[0]) {
      // 前日の遅番のどちらかが鍵を持つ
      initialKeyHolders.push(lastDayClosers[Math.floor(Math.random() * 2)]);
    }
    // 当日の早番は両方が鍵を持つ
    initialKeyHolders.push(...openers);

    shifts[dateString] = {
      date: dateString,
      openers,
      closers,
      keyHolders: [...new Set(initialKeyHolders)], // 重複を削除
    };

    lastDayClosers = closers;
  }
  return shifts;
}
