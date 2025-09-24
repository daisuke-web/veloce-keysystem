// components/SidePanel/index.tsx
"use client";
import { DailyShift, ShiftData } from "@/lib/types";

interface SidePanelProps {
  selectedDate: string | null;
  shiftData: ShiftData;
  onUpdateKeyHolders: (date: string, newHolders: string[]) => void;
  // onAddEventClick: () => void; // (必要ならイベント追加ボタンもここに)
}

// 前日の日付文字列を取得するヘルパー関数
const getPreviousDateString = (dateStr: string): string => {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return date.toISOString().split("T")[0];
};

export default function SidePanel({
  selectedDate,
  shiftData,
  onUpdateKeyHolders,
}: SidePanelProps) {
  if (!selectedDate) {
    // 日付が選択されていないときはデフォルトの表示（イベント追加ボタンなど）
    return (
      <div className="col-span-2 ml-4 p-4 border rounded-lg h-full">
        <h2 className="font-bold text-lg text-center mb-4">情報パネル</h2>
        <p className="text-center text-gray-500">
          カレンダーの日付をクリックして鍵情報を表示します。
        </p>
      </div>
    );
  }

  const previousDate = getPreviousDateString(selectedDate);
  const prevDayShift = shiftData[previousDate];
  const selectedDayShift = shiftData[selectedDate];

  if (!selectedDayShift) {
    return <div>シフト情報がありません。</div>;
  }

  // チェックボックスの状態を更新する関数
  const handleCheckboxChange = (holderName: string, isChecked: boolean) => {
    const currentHolders = selectedDayShift.keyHolders || [];
    let newHolders: string[];
    if (isChecked) {
      newHolders = [...new Set([...currentHolders, holderName])]; // 追加
    } else {
      newHolders = currentHolders.filter((name) => name !== holderName); // 削除
    }
    onUpdateKeyHolders(selectedDate, newHolders);
  };

  return (
    <div className="col-span-2 ml-4 p-4 border rounded-lg h-full bg-gray-50">
      <h2 className="font-bold text-xl text-center mb-4">{selectedDate}</h2>

      {/* --- 前日の遅番情報 --- */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 border-b pb-1 mb-2">
          前日 ({previousDate}) の遅番
        </h3>
        {prevDayShift ? (
          <ul className="space-y-1">
            {prevDayShift.closers.map((name) => (
              <li key={name}>・{name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">情報なし</p>
        )}
      </div>

      {/* --- 当日の早番情報 --- */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-700 border-b pb-1 mb-2">
          当日 ({selectedDate}) の早番
        </h3>
        <ul className="space-y-1">
          {selectedDayShift.openers.map((name) => (
            <li key={name}>・{name}</li>
          ))}
        </ul>
      </div>

      {/* --- 鍵保持者の管理 --- */}
      <div>
        <h3 className="font-semibold text-gray-700 border-b pb-1 mb-2">
          鍵保持者（チェックして更新）
        </h3>
        <div className="space-y-2">
          {[...selectedDayShift.openers, ...selectedDayShift.closers].map(
            (name) => (
              <label
                key={name}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedDayShift.keyHolders.includes(name)}
                  onChange={(e) => handleCheckboxChange(name, e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{name}</span>
              </label>
            )
          )}
        </div>
      </div>
    </div>
  );
}
