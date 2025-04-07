import React from "react";
import { MdDelete } from "react-icons/md";
import { FaFilePdf } from "react-icons/fa";
import ProgressBar from "@/components/ProgressBar";
import Tag from "@/components/Tag";
import TagCell from "@/components/TagCell";
import HoverDatePicker from "@/components/DatePicker";

export const tags = [
  { short: "A", full: "Apple", bgColor: "bg-red-400" },
  { short: "B", full: "Banana", bgColor: "bg-pink-400" },
  { short: "C", full: "Cherry", bgColor: "bg-green-300" },
  { short: "D", full: "Date", bgColor: "bg-lime-400" },
  { short: "E", full: "Elderberry", bgColor: "bg-blue-400" },
];
const data = [
  {
    id: 1,
    name: "John Doe",
    tags,
    start: "22-10-2024",
    progress: 1,
  },
  {
    id: 2,
    name: "Jason Doe",
    tags,
    start: "12-10-2024",
    progress: 2,
  },
  {
    id: 3,
    name: "Naman Martur",
    tags,
    start: "01-01-2021",
    progress: 3,
  },
];

function Table() {
  return (
    <div className="overflow-x-auto py-4 px-64">
      <table className="w-full border border-white">
        <thead className="bg-blue-300">
          <tr className="text-white">
            <th className="p-2 border border-gray-300">ID</th>
            <th className="p-2 border border-gray-300">NAME</th>
            <th className="p-2 border border-gray-300">TAGS</th>
            <th className="p-2 border border-gray-300">FILTER</th>
            <th className="p-2 border border-gray-300">EDIT TAGS</th>
            <th className="p-2 border border-gray-300">PDF</th>
            <th className="p-2 border border-gray-300 w-36">
              <HoverDatePicker text={"Start"} />
            </th>
            <th className="p-2 border border-gray-300">PROGRESS</th>
            <th className="p-2 border border-gray-300">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="p-4 border border-white">{row.id}</td>
              <td className="p-4 border border-white">{row.name}</td>
              <td className="p-4 flex gap-1 justify-center items-center">
                {tags.map((tag, index) => (
                  <Tag key={index} text={tag.short} bgColor={tag.bgColor} />
                ))}
              </td>
              <td className="p-4 border border-white"></td>
              <td className=" flex p-4 item-center justify-center min-w-80">
                <TagCell />
              </td>
              <td className="p-4 border border-white">
                <FaFilePdf />
              </td>
              <td className="p-4 border border-white">{row.start}</td>
              <td className="p-4 border border-white">
                <ProgressBar progress={row.progress} />
              </td>
              <td className="p-4 border border-white">
                <MdDelete color={"red"} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
