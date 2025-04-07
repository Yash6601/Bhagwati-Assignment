import { useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const clients = [
  { id: 1, name: "Client 1", image: "img.png" },
  { id: 2, name: "Client 2", image: "img.png" },
  { id: 3, name: "Client 3", image: "img.png" },
];

export default function SelectUser() {
  const [selectedClient, setSelectedClient] = useState(clients[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-300 hover:bg-gray-50 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src={selectedClient.image}
          alt={selectedClient.name}
          className="w-6 h-6 rounded-full"
        />
        <span className="font-semibold text-gray-700">
          {selectedClient.name}
        </span>
        <FaChevronDown
          className={`text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
          {clients.map((client) => (
            <button
              key={client.id}
              onClick={() => {
                setSelectedClient(client);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-100 transition"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-6 h-6 rounded-full mr-2"
              />
              {client.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
