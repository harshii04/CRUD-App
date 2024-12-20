interface FormModalProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
import { XCircle } from "@phosphor-icons/react";
import React from "react";

const FormModal: React.FC<FormModalProps> = ({ setIsOpen }) => {
  //   const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <>
      <div className="fixed inset-0 bg-blueGray900 bg-opacity-10 backdrop-blur-sm flex items-center justify-center shadow-subtle overflow-clip">
        <div className="flex flex-col bg-[#fff] border border-blueGray200 rounded-lg w-1/3">
          <div className="flex items-center justify-between border-b border-blueGray200 bg-blueGray50 px-4 py-4">
            <span className="text-xl font-semibold text-blueGray700">
              Add transaction
            </span>
            <XCircle
              size={24}
              className="text-blueGray700 hover:cursor-pointer"
            />
          </div>
          <div className="px-4 py-6 w-full">
            <form className="flex flex-col gap-8">
              <div className=" flex flex-col items-start gap-2 ">
                <label className="font-medium text-sm text-blueGray700">
                  Enter you name
                </label>
                <input
                  placeholder="Enter the detail"
                  className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400 py-3 pl-4 pr-24 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-text w-full"
                />
              </div>
              <div className=" flex flex-col items-start gap-2 ">
                <label className="font-medium text-sm text-blueGray700">
                  Enter phone number
                </label>
                <input
                  placeholder="Enter your number"
                  className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400 py-3 pl-4 pr-24 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-text w-full"
                />
              </div>
              <div className=" flex flex-col items-start gap-2 ">
                <label className="font-medium text-sm text-blueGray700">
                  Enter your email
                </label>
                <input
                  placeholder="Enter your email..."
                  className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400 py-3 pl-4 pr-24 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-text w-full"
                />
              </div>
              <div className=" flex flex-col items-start gap-2 ">
                <label className="font-medium text-sm text-blueGray700">
                  Enter your date of birth
                </label>
                <input
                  placeholder="Enter date of birth..."
                  className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400 py-3 pl-4 pr-24 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-text w-full"
                />
              </div>
            </form>
          </div>
          <div className="flex items-end gap-2 px-4 py-6">
            <div className="flex gap-2 items-center justify-start py-2 px-8  rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-pointer">
              <button
                className="text-sm font-medium text-blueGray500"
                onClick={() => setIsOpen(false)} // Wrap setIsOpen in a function
              >
                Cancle
              </button>
            </div>
            <div className="flex gap-2 items-center justify-start py-2 px-8 rounded-lg bg-brandLightBlue shadow-subtle hover:bg-opacity-90 transition-colors duration-200 ease-in hover:cursor-pointer">
              <button className="text-sm font-medium text-[#fff]">
                Save details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormModal;

{
  /* <label>Enter you name</label>
<input
  placeholder="Enter the detail"
  className="focus:outline-none caret-blueGray400 text-blueGray700 placeholder:text-sm text-sm placeholder:text-blueGray400 py-3 px-4 rounded-lg  border border-blueGray200 shadow-subtle  hover:cursor-text"
/> */
}
