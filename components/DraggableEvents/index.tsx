// components/DraggableEvents.tsx
"use client";

import { useEffect } from 'react';
import { Draggable } from '@fullcalendar/interaction';

interface DraggableEventsProps {
  events: { title: string; id: string }[];
}

export default function DraggableEvents({ events }: DraggableEventsProps) {
  useEffect(() => {
    let draggableEl = document.getElementById('draggable-el');
    if (draggableEl) {
      new Draggable(draggableEl, {
        itemSelector: ".fc-event",
        eventData: function (eventEl) {
          let title = eventEl.getAttribute("title");
          let id = eventEl.getAttribute("data");
          let start = eventEl.getAttribute("start");
          return { title, id, start };
        }
      });
    }
  }, []);

  return (
    <div id="draggable-el" className="ml-8 w-full flex flex-col lg:border-4 p-2 sm:text-1xl rounded-md mt-16 lg:h-1/2 bg-violet-50">
      <h1 className="font-bold text-sm lg:text-lg text-center">Drag Event</h1>
      {events.map(event => (
        <div
          className="fc-event border-2 p-1 m-2 w-full"
          title={event.title}
          key={event.id}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
}