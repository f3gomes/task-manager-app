import { FaClipboardList } from "react-icons/fa";

export function Header() {
  return (
    <div className="bg-tm-gray-700 w-full h-[12.5rem] flex justify-center items-center gap-2">
      <FaClipboardList size={28} className="pointer-events-none" />
      <h1 className="text-4xl font-bold flex gap-2">
        <span className="text-tm-blue-100">Task</span>
        <span className="text-tm-purple-100">Manager</span>
      </h1>
    </div>
  );
}
