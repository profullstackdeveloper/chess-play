import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { CreateButton } from "../components/buttons/CreateButton";
import { DateRangePickerButton } from "../components/buttons/DatePickerButton";
import RoundedButton from "../components/buttons/RoundedButton";
import CreateRoomModal from "../components/modals/CreateRoomModal";
import { Table } from "../components/table/table";
import { getData } from "../utils/api";
import { TableData } from "../utils/types";

export default function GameList() {
  const [tableData, setTableData] = useState<TableData<any>>();
  const [isEnable, setIsEnable] = useState(true);
  const [displayModal, setDisplayModal] = useState(false);

  const basicTabClassName =
    "text-[18px] leading-[32px] pb-[12px] pr-[18px] mr-[16px] cursor-pointer ";

  const enabledTabClassName = isEnable ? "border-b-black border-b-2" : "";
  const disabledTabClassName = isEnable ? "" : "border-b-black border-b-2";
  useEffect(() => {
    const data = getData(isEnable);
    setTableData(data);
  }, [isEnable]);

  return (
    <div className='w-[90%] h-fit pt-3 mb-10 m-auto mt-4'>
      <div className='flex flex-row justify-end w-full mb-8'>
        <DateRangePickerButton className='mr-3' />
        <CreateButton onClick={() => setDisplayModal(true)} />
      </div>
      <div className='bg-[#FBFBFB]'>
        <div className='flex flex-row'>
          <p
            className={basicTabClassName + enabledTabClassName}
            onClick={() => setIsEnable(true)}
          >
            Available Games
          </p>
          <p
            className={basicTabClassName + disabledTabClassName}
            onClick={() => setIsEnable(false)}
          >
            Unavailable Games
          </p>
        </div>
        <Table isEnable={isEnable} data={tableData} />
      </div>
      <CreateRoomModal
        displayModal={displayModal}
        closeModal={() => setDisplayModal(false)}
        onOk={() => setDisplayModal(false)}
      />
    </div>
  );
}
