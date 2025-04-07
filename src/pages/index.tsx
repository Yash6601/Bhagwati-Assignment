import Table from "@/components/Table";
import Sidebar from "@/components/Sidebar";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  return (
    <div className="w-full">
      <Sidebar />
      <div>
        <Searchbar />
        <Table />
      </div>

    </div>
  );
}
