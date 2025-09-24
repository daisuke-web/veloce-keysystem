// app/page.tsx
"use client";
import { useCalendarManager } from '@/hooks/useCalendarManager';

import Header from '@/components/Header';
// import Sidebar from '@/components/Sidebar';
// CalendarWrapper, Modals... などのインポート
// (前の回答の `CalendarWrapper` や各モーダルコンポーネントを流用します)
import CalendarWrapper from '@/components/Calendar/index';
import AddEventModal from '@/components/AddEventModal';
import DeleteEventModal from '@/components/DeleteEventModal';
import KeyManagementModal from '@/components/KeyManagementModal';

export default function Home() {
  const { states, handlers } = useCalendarManager();

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="grid grid-cols-10 w-full">
          <div className="col-span-8">
            <CalendarWrapper
              events={states.allEvents}
              onDateClick={handlers.handleDateClick}
              onEventClick={handlers.handleDeleteModal}
            />
          </div>
          {/* <Sidebar onAddEventClick={handlers.handleAddEventClick} /> */}
        </div>
      </main>

      {/* Modals are rendered conditionally based on state from the manager hook */}
      {states.modalState.showKey && states.selectedDate && (
        <KeyManagementModal
          show={states.modalState.showKey}
          onClose={handlers.closeModal}
          date={states.selectedDate}
          logs={states.keyLogs}
          onUpdateHolder={handlers.updateKeyHolder}
        />
      )}
      <AddEventModal
        show={states.modalState.showAdd}
        onClose={handlers.closeModal}
        onSubmit={handlers.handleSubmit}
        newEvent={states.newEvent}
        onHandleChange={handlers.handleNewEventChange}
      />
      <DeleteEventModal
        show={states.modalState.showDelete}
        onClose={handlers.closeModal}
        onDelete={handlers.handleDelete}
      />
    </>
  );
}