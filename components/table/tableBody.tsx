import React from "react";
import { EnableGameRoomColumn } from "../../utils/types";

interface PropType {
  data: any[];
  isEnable: boolean;
}

export const TableBody = (props: PropType) => {
  const cellClassName = "w-[15%] text-[#535353] text-[14px] font-semibold";
  const basicJoinButtonClassName =
    "text-white leading-[32px] py-[4px] rounded-[8px] w-[125px] ml-[16px] text-[12px] mb-2";
  const basicSpecButtonClassName =
    "text-blue2 bg-white leading-[32px] py-[4px] rounded-[8px] w-[125px] ml-[16px] border-2 border-blue2 text-[12px] mb-2";

  const disabledButtonClassName = props.isEnable
    ? " bg-blue2"
    : " bg-[#BFBFBF]";

  return (
    <div>
      {props.data &&
        props.data.length &&
        props.data.map((item, index) => (
          <div
            key={index}
            className='flex flex-row pt-[26px] pb-[20px] border-b-[1px] border-b-[#F2F2F2] pl-[40px] pr-[31px]'
          >
            <p className={cellClassName}>{item.gameId}</p>
            <p className={cellClassName}>{item.limit}</p>
            <p className={cellClassName}>
              {props.isEnable ? item.entryFee : item.winner}
            </p>
            <p className={cellClassName}>
              {props.isEnable ? item.playerNo : item.amountWon}
            </p>
            <p className={cellClassName}>
              {props.isEnable ? item.dateCreated : item.dateEnded}
            </p>
            <div>
              <button
                className={basicJoinButtonClassName + disabledButtonClassName}
              >
                Request to join
              </button>
              <button className={basicSpecButtonClassName}>Spectate</button>
            </div>
          </div>
        ))}
    </div>
  );
};
