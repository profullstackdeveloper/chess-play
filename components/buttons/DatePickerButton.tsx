import Image from "next/image";
import React from "react";

export const DateRangePickerButton = ({ ...props }) => {
  return (
    <div
      className={
        "flex flex-row rounded-lg border-2 border-[#E1E1E1] py-2 px-3 text-[14px] items-center " +
        props.className
      }
    >
      <Image
        src={"/assets/images/Calendar.svg"}
        width={24}
        height={24}
        alt='metamask'
      ></Image>
      <p className='mx-[10px]'>May18 - May24</p>
      <Image
        src={"/assets/images/Stroke.svg"}
        width={9}
        height={5}
        alt='metamask'
      ></Image>
    </div>
  );
};
