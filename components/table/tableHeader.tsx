import React from "react";

interface PropType {
  headerItems?: string[];
}

export const TableHeader = (props: PropType) => {
  return (
    <div className='flex flex-row uppercase pl-[40px] pr-[31px]'>
      {props.headerItems &&
        props.headerItems.length > 0 &&
        props.headerItems.map((item, index) => (
          <p className='w-[15%]  text-[#929292]' key={index}>
            {item}
          </p>
        ))}
    </div>
  );
};
