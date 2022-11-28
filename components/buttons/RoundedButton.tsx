import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<unknown> {
  icon?: React.ReactElement;
  content: string;
}

export default function RoundedButton({
  icon,
  content,
  className,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className={"rounded-full " + className} {...props}>
      <div className='flex px-11 items-center'>
        {icon}
        <div className='w-full text-center leading-[30px] font-semibold'>
          {content}
        </div>
      </div>
    </button>
  );
}
