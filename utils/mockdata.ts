import {
  EnableGameRoomColumn,
  DiabledGameRoomColumn,
  TableData,
} from "./types";

export const enableGameRoomColumnList = [
  "gameid",
  "limit",
  "entryfee",
  "no.of players",
  "date created",
];

export const disabledGameRoomColumnList = [
  "gameid",
  "limit",
  "winner",
  "amount Won",
  "date Ended",
];

export const enableGameRoomTableData: TableData<EnableGameRoomColumn> = {
  columns: enableGameRoomColumnList,
  data: [
    {
      gameId: 28,
      limit: 2,
      entryFee: "0.5 ETH",
      playerNo: 0,
      dateCreated: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      entryFee: "0.5 ETH",
      playerNo: 0,
      dateCreated: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      entryFee: "0.5 ETH",
      playerNo: 0,
      dateCreated: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      entryFee: "0.5 ETH",
      playerNo: 0,
      dateCreated: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      entryFee: "0.5 ETH",
      playerNo: 0,
      dateCreated: "04/04/2022",
    },
  ],
};

export const diabledGameRoomTableData: TableData<DiabledGameRoomColumn> = {
  columns: disabledGameRoomColumnList,
  data: [
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103429",
      amountWon: "0.003ETH",
      dateEnded: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103430",
      amountWon: "0.004ETH",
      dateEnded: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103431",
      amountWon: "0.005ETH",
      dateEnded: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103432",
      amountWon: "0.006ETH",
      dateEnded: "04/04/2022",
    },
    {
      gameId: 28,
      limit: 2,
      winner: "Ox449...103433",
      amountWon: "0.007 ETH",
      dateEnded: "04/04/2022",
    },
  ],
};
