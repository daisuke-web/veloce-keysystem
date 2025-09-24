// components/Header.tsx

export default function Header() {
  return (
    <>
      <nav className="flex justify-between mb-12 border-b border-violet-100 p-4">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <div className="mx-8 mr-23 bg-red-500 w-full h-full">
        <h1 className="font-extrabold mr-20 text-white justify-center text-center">veloce</h1>
      </div>
    </>
  );
}