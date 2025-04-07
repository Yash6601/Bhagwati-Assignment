import React, { useState } from "react";
import { RiMenu2Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { MdOutlineDashboard } from "react-icons/md";
import { BsTable } from "react-icons/bs";
import { CiShoppingTag } from "react-icons/ci";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
    <div className="flex">
      <div
        className={`fixed top-0 left-0 h-screen bg-white text-black flex flex-col p-4 shadow-lg transition-[width] duration-300 ease-in-out ${isOpen ? "w-60" : "w-20"}`}
      >
        <button onClick={toggleSidebar} className="mb-4 px-2">
          {isOpen ? <ImCross size={24} /> : <RiMenu2Line size={24} />}
        </button>
        <div className="space-y-4">
          <SidebarItem
            icon={<MdOutlineDashboard size={24} />}
            text="Dashboard"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<BsTable size={24} />}
            text="Profile"
            isOpen={isOpen}
          />
          <SidebarItem
            icon={<CiShoppingTag size={24} />}
            text="Tags"
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
}
interface SidebarProps {
  text: string;
  isOpen: boolean;
  icon: React.ReactNode;
}
const SidebarItem = (props: SidebarProps) => {
  const { text, isOpen, icon } = props;
  return (
    <div
      className={`flex items-center p-2 hover:bg-gray-700 hover:text-white rounded-lg transition-all duration-300`}
    >
      <span className="transition-transform duration-300">{icon}</span>
      {isOpen && (
        <span className={`transition-all duration-400 px-4`}>{text}</span>
      )}
    </div>
  );
};

export default Sidebar;
