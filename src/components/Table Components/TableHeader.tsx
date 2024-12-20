import { FunnelSimple, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import FormModal from "../modal/FormModal";
import React from "react";

const TableHeader = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-semibold text-lg text-blueGray700">
            Sales Invoice
          </h1>
        </div>
        {/* remember this can be made into my input field for future use.*/}
        <div className="flex gap-2">
          <div className="flex gap-2 items-center justify-start py-2 rounded-lg pl-3 pr-4 border border-blueGray200 shadow-subtle ">
            <MagnifyingGlass size={16} className="text-blueGray400" />
            <input
              placeholder="Search..."
              className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400"
            />
          </div>
          <div className="flex gap-2 items-center justify-start py-1 px-3 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-pointer">
            <FunnelSimple size={18} className="text-blueGray500" />
            <span className="text-sm font-medium text-blueGray500">Filter</span>
          </div>
          <button
            className="flex gap-2 items-center bg-brandLightBlue text-[#fff] font-normal text-sm rounded-lg px-3 hover:cursor-pointer hover:bg-opacity-95 transition-colors duration-200 ease-in ring-brandBlue shadow-subtle"
            onClick={handleClick}
          >
            Add Transaction
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "visible" : "invisible"}`}>
        <FormModal setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default TableHeader;
