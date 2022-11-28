import Image from "next/image";
import React from "react";

interface ModalProps {
  displayModal: boolean;
  onOk: () => void;
  closeModal: () => void;
}

export default function CreateRoomModal({
  displayModal,
  onOk,
  closeModal,
}: ModalProps): JSX.Element {
  return displayModal ? (
    <div className='w-screen h-screen fixed top-0 flex items-center justify-center bg-slate-400/40 transition-opacity duration-1000'>
      <div className='bg-white rounded-xl p-7 flex flex-col items-center'>
        <div>
          <p className='text-[18px] font-bold mb-7'>Create New Room</p>
          <div className='mb-7'>
            <p className='font-bold text-[14px] mb-2'>Entry Fee</p>
            <div className='flex flex-row rounded-lg border-2 border-[#E7E7E7] p-2'>
              <input placeholder='0.003 ETH' className='border-none' />
              <div className='relative right-0 flex flex-row'>
                <p className='mr-1'>ETH</p>
                <Image
                  src={"/assets/images/Stroke.svg"}
                  width={9}
                  height={5}
                  alt='metamask'
                ></Image>
              </div>
            </div>
          </div>
          <div className='mb-7'>
            <p className='font-bold text-[14px] mb-2'>Room Privacy</p>
            <select className='p-2 rounded-lg border-2 border-[#E7E7E7] w-full'>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
        </div>
        <div className='flex flex-row justify-end w-full'>
          <button
            className='text-[#929292] mt-5 px-5 py-1 rounded-md border-2 border-[#929292] mr-2'
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className='bg-blue2 mt-5 px-5 py-1 rounded-md text-white'
            onClick={onOk}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
