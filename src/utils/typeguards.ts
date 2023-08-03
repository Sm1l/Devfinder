import { IUser } from "../interfaces";

export const isIUser = (user: any): user is IUser => "id" in user;
