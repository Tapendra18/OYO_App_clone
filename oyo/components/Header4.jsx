"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex my-14">
      <div className="flex items-center border border-gray-300 p-2 w-full">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full"
        />
        <div className="flex justify-between items-center w-full">
          <div className="text-xl">
            <p className="font-bold">Get access to exclusive deals</p>
            <p>Only the best deals reach your inbox</p>
          </div>
          <div className="flex gap-3">
            <input
              type="email"
              className="px-4 py-2 w-88 rounded-lg outline-none border border-gray-300"
              placeholder="e.g. john@gmail.com"
            />
            <button
              type="submit"
              className="w-24 h-14 py-2 bg-red-500 text-xl text-white cursor-pointer rounded-full"
            >
              Notify{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header4;
