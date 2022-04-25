import { MouseEventHandler } from "react";

export type SessionProps = {
    session: any;
    onClick:MouseEventHandler<HTMLDivElement>
  };
  type UserSessionProps = {
    user: UserInfoProps;
  };
  type UserInfoProps = {
    name: string;
    email: string;
    image: string;
  };