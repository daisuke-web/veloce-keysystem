// // components/Sidebar/hook.ts
// import { useEffect } from 'react';
// import { Draggable } from '@fullcalendar/interaction';

// export const useSidebar = () => {
//   useEffect(() => {
//     const draggableEl = document.getElementById('draggable-el');
//     if (draggableEl) {
//       new Draggable(draggableEl, {
//         itemSelector: ".fc-event",
//         eventData: (eventEl) => {
//           return {
//             title: eventEl.getAttribute("title"),
//             id: eventEl.getAttribute("data-id"), // Use data-id for custom attributes
//           };
//         }
//       });
//     }
//     // Cleanup function if component unmounts
//     return () => {
//       const el = document.getElementById('draggable-el');
//       // This is a simplified cleanup. A real implementation might need to call a `destroy` method on the Draggable instance.
//       if (el && (el as any).isDraggable) {
//         // Draggable doesn't have a public destroy method, so this is illustrative
//       }
//     };
//   }, []);
// };