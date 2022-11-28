import React from "react";
import { TableData } from "../../utils/types";
import { TableBody } from "./tableBody";
import { TableHeader } from "./tableHeader";

interface PropType {
  isEnable: boolean;
  data?: TableData<any>;
}

export const Table = (props: PropType) => {
  return (
    <div>
      <div className='pt-[26px]'>
        {props.data && props.data.data.length > 0 && (
          <div>
            <TableHeader headerItems={props.data?.columns} />
            <TableBody isEnable={props.isEnable} data={props.data?.data} />
          </div>
        )}
      </div>
    </div>
  );
};
