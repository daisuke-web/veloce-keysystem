// // components/Sidebar/index.tsx
// "use client";
// import { useSidebar } from './hook';

// const staticEvents = [
//   { title: "Meeting", id: "101" },
//   { title: "Lunch", id: "102" },
//   { title: "Project", id: "103" },
// ];

// interface SidebarProps {
//   onAddEventClick: () => void;
// }

// export default function Sidebar({ onAddEventClick }: SidebarProps) {
//   useSidebar(); // Initialize Draggable logic

//   return (
//     <div className="col-span-2">
//       <div className="ml-6 mb-4">
//         <button className="bg-red-500 text-white font-bold py-2 px-4 rounded w-full" onClick={onAddEventClick}>
//           ADD EVENT
//         </button>
//       </div>
//       <div id="draggable-el" className="ml-8 w-full flex flex-col border-4 p-2 rounded-md bg-violet-50">
//         <h2 className="font-bold text-lg text-center">Drag Event</h2>
//         {staticEvents.map(event => (
//           <div
//             className="fc-event border-2 p-1 m-2 w-full cursor-grab"
//             title={event.title}
//             data-id={event.id}
//             key={event.id}
//           >
//             {event.title}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }