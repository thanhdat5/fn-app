import { IToken } from './token.model';

export interface ITicket {
	ordinal: number;
	ticketNumber: string;
}

export interface IMyTicket {
	gameId: string;
	date: string;
	data: ITicket[];
}

export interface IUser {
	walletAddress: string;
	tokens: IToken[];
	totalTickets: number;
	totalWinningTickets: number;
	totalPrizeWon: string;
}
