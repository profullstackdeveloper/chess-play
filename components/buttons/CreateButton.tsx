import Image from "next/image";
import React from "react";
import CreateRoomModal from "../modals/CreateRoomModal";

export const CreateButton = ({ ...props }) => {
  return (
    <button className='rounded-lg ' onClick={props.onClick}>
      <div className='flex px-3 items-center bg-blue2 py-2 rounded-lg '>
        <Image
          src={"/assets/images/Vector.svg"}
          width={12}
          height={12}
          alt='create'
        ></Image>
        <div className='w-full text-center leading-[30px] font-semibold ml-2 text-white'>
          Create New Button
        </div>
      </div>
    </button>
  );
};
