import React, { Dispatch, SetStateAction } from "react"

export type LinkTypes = {
    href: string,
    title: string,
    children: React.ReactElement,
    onClick?:any,
}