export interface TableData<Column> {
  columns: string[];
  data: Column[];
}

export interface EnableGameRoomColumn {
  gameId: number;
  limit: number;
  entryFee: string;
  playerNo: number;
  dateCreated: string;
}

export interface DiabledGameRoomColumn {
  gameId: number;
  limit: number;
  winner: string;
  amountWon: string;
  dateEnded: string;
}
