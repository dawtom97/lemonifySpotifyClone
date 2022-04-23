import { Dispatch, MouseEventHandler, SetStateAction } from "react"

export type StyledAsideTypes = {
    showMenu:boolean
  }

export type SidebarTypes = {
  onClick: MouseEventHandler<HTMLDivElement>,
  isMenuVisible: boolean
}