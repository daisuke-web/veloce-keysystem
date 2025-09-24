// // components/KeyManagementModal.tsx
// "use client";

// import { Dialog } from "@headlessui/react";
// // import { KeyLog } from "@/lib/types";

// interface KeyManagementModalProps {
//   show: boolean;
//   onClose: () => void;
//   date: string;
//   logs: KeyLog;
//   onUpdateHolder: (date: string, keyNumber: number, newHolder: string) => void;
// }

// export default function KeyManagementModal({
//   show,
//   onClose,
//   date,
//   logs,
//   onUpdateHolder,
// }: KeyManagementModalProps) {
//   return (
//     <Dialog
//       open={show}
//       onClose={onClose}
//       className="fixed z-10 inset-0 overflow-y-auto"
//     >
//       <div className="flex items-center justify-center min-h-screen">
//         <Dialog.Panel className="bg-white p-6 rounded shadow-md w-full max-w-md">
//           <Dialog.Title className="text-xl font-bold mb-4">
//             {date} の鍵管理
//           </Dialog.Title>
//           <div className="space-y-3">
//             {Array.from({ length: 6 }, (_, i) => {
//               const keyNum = i + 1;
//               const holder =
//                 logs[date]?.find((k) => k.number === keyNum)?.holder || "店";
//               return (
//                 <div key={keyNum} className="flex items-center gap-2">
//                   <span className="w-16">鍵 {keyNum}:</span>
//                   <input
//                     className="border p-1 flex-1 rounded"
//                     value={holder}
//                     onChange={(e) =>
//                       onUpdateHolder(date, keyNum, e.target.value)
//                     }
//                   />
//                 </div>
//               );
//             })}
//           </div>
//           <div className="mt-6 flex justify-end gap-4">
//             <button className="px-4 py-2 bg-gray-200 rounded" onClick={onClose}>
//               閉じる
//             </button>
//           </div>
//         </Dialog.Panel>
//       </div>
//     </Dialog>
//   );
// }
