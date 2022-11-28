import { diabledGameRoomTableData, enableGameRoomTableData } from "./mockdata";

export const getData = (isEnable: boolean) => {
  return isEnable ? enableGameRoomTableData : diabledGameRoomTableData;
};
