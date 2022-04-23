import Link from "next/link";
import { Component } from "react";
import { IconContext } from "react-icons";
import { StyledAnchor } from "./Link.styles";
import { LinkTypes } from "./Link.types";



export const LinkComponent = ({href,title,children}: LinkTypes) => {

   return (
    <Link href={href}>
        <StyledAnchor>
          {children}
          {title}
        </StyledAnchor>
    </Link>
   )
}