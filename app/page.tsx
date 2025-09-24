// app/page.tsx
"use client";

import { useCalendarManager } from '@/hooks/useCalendarManager';
import Header from '@/components/Header';
import CalendarWrapper from '@/components/Calendar/index';
import SidePanel from '@/components/SidePanel';
// (Add/Deleteモーダルは必要に応じて残す)

export default function Home() {
  const { states, handlers } = useCalendarManager();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-4 md:p-12 lg:p-24">
        <div className="grid grid-cols-1 lg:grid-cols-10 w-full gap-4">
          <div className="lg:col-span-8">
            <CalendarWrapper
              events={states.allEvents}
              onDateClick={handlers.handleDateClick}
              onEventClick={() => { /* イベントクリックの処理 */ }}
            />
          </div>
          
          <div className="lg:col-span-2">
            <SidePanel
              selectedDate={states.selectedDate}
              shiftData={states.shiftData}
              onUpdateKeyHolders={handlers.updateKeyHolders}
            />
          </div>
        </div>
      </main>
      
      {/* ... (Add/Delete Event Modals if needed) ... */}
    </>
  );
}