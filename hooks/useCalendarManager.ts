// hooks/useCalendarManager.ts
"use client";

import { useState, useEffect, useCallback } from "react";
import { Event, ShiftData } from "@/lib/types";
import { generateMockShiftDataForMonth } from "@/lib/utils";

export const useCalendarManager = () => {
  const [shiftData, setShiftData] = useState<ShiftData>({});
  const [allEvents, setAllEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    // 起動時に今月分のモックデータを生成
    const today = new Date();
    setShiftData(
      generateMockShiftDataForMonth(today.getFullYear(), today.getMonth() + 1)
    );
    // ここでSupabaseからイベントやシフトデータをフェッチする
  }, []);

  // 日付クリック時の挙動を更新
  const handleDateClick = useCallback((arg: { date: Date }) => {
    const dateStr = arg.date.toISOString().split("T")[0];
    // 同じ日付をクリックしたら選択解除
    setSelectedDate((prev) => (prev === dateStr ? null : dateStr));
  }, []);

  // 鍵保持者を更新するロジック
  const updateKeyHolders = useCallback((date: string, newHolders: string[]) => {
    setShiftData((prev) => ({
      ...prev,
      [date]: {
        ...prev[date],
        keyHolders: newHolders,
      },
    }));
    // ここでSupabaseに更新を送信する
  }, []);

  // ... (その他のイベント追加・削除ロジックは変更なし or 必要に応じて実装) ...

  return {
    states: { shiftData, allEvents, selectedDate },
    handlers: {
      handleDateClick,
      updateKeyHolders,
      // ... other handlers
    },
  };
};
