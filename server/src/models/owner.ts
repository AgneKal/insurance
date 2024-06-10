import { RowDataPacket } from "mysql2";

export interface Owner extends RowDataPacket{
    id?: number;
    name: string;
    surname: number;
    phone: string;
    email: string;
    address: string;
}