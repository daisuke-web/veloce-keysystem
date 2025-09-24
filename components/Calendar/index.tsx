// components/CalendarWrapper.tsx
"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { EventSourceInput } from "@fullcalendar/core/index.js";
import { Event } from "@/lib/types";

interface CalendarWrapperProps {
  events: Event[];
  onDateClick: (arg: { date: Date }) => void;
  onEventClick: (data: { event: { id: string } }) => void;
}

export default function CalendarWrapper({
  events,
  onDateClick,
  onEventClick,
}: CalendarWrapperProps) {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek",
      }}
      events={events as EventSourceInput}
      nowIndicator={true}
      editable={true}
      selectable={true}
      selectMirror={true}
      dateClick={onDateClick}
      eventClick={onEventClick}
    />
  );
}
