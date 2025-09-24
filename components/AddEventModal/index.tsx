// // components/AddEventModal.tsx
// "use client";

// import { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { CheckIcon } from "@heroicons/react/20/solid";
// import { Event } from "@/lib/types";

// interface AddEventModalProps {
//   show: boolean;
//   onClose: () => void;
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   newEvent: Event;
//   onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function AddEventModal({
//   show,
//   onClose,
//   onSubmit,
//   newEvent,
//   onHandleChange,
// }: AddEventModalProps) {
//   return (
//     <Transition.Root show={show} as={Fragment}>
//       <Dialog as="div" className="relative z-10" onClose={onClose}>
//         {/* ... (Transition.Child for overlay) ... */}
//         <div className="fixed inset-0 z-10 overflow-y-auto">
//           <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//             <Transition.Child
//               as={Fragment}
//               {
//                 ...{
//                   /* animation props */
//                 }
//               }
//             >
//               <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
//                 <div>
//                   <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
//                     <CheckIcon
//                       className="h-6 w-6 text-green-600"
//                       aria-hidden="true"
//                     />
//                   </div>
//                   <div className="mt-3 text-center sm:mt-5">
//                     <Dialog.Title
//                       as="h3"
//                       className="text-base font-semibold leading-6 text-gray-900"
//                     >
//                       Add Event
//                     </Dialog.Title>
//                     <form onSubmit={onSubmit}>
//                       <div className="mt-2">
//                         <input
//                           type="text"
//                           name="title"
//                           className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
//                           value={newEvent.title}
//                           onChange={onHandleChange}
//                           placeholder="Title"
//                         />
//                       </div>
//                       <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
//                         <button
//                           type="submit"
//                           className="inline-flex w-full justify-center rounded-md bg-violet-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:col-start-2 disabled:opacity-25"
//                           disabled={newEvent.title === ""}
//                         >
//                           Create
//                         </button>
//                         <button
//                           type="button"
//                           className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
//                           onClick={onClose}
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   );
// }
