import styled, { css } from "styled-components";
import { StyledAsideTypes } from "./Sidebar.types";

export const StyledAside = styled.aside<StyledAsideTypes>`
  background-color: ${(props) => props.theme.primary};
  width:250px;
  min-height: 100vh;
  position: fixed;
  top:0;
  clip-path: circle(50px at 10px 10px);
  border-radius: 0px 0px 90px 0px;
  overflow: hidden;
  transition: .5s;
  z-index:999;

  ${props => props.showMenu && css`
    clip-path: circle(102vh at 65px 0px);
    border-radius: 0;
  `}
`

export const StyledMenuWrapper = styled.div`
  color: ${(props) => props.theme.white};
  padding: 25px;
  font-weight: 400;
  margin-top: 35px;

`

export const StyledMenuBtn = styled.div`
  padding: 10px;
  position: fixed;
  color: ${(props) => props.theme.white};
  font-size: 32px;
  cursor: pointer;
`
export const StyledAppShadowOverlay = styled.div<StyledAsideTypes>`
  position: fixed;
  width:100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  top:0;
  left:0;
  z-index:-1;
  visibility:hidden;
  transition: opacity 1s, visibility 1s;
  ${props => props.showMenu && css`
    opacity: 0.7;
    visibility: visible;
    z-index:998;
  `}
`

export const StyledLogout = styled.div`
   display: flex;
   align-items: center;
   gap:7px;
   cursor: pointer;
   margin:9px 0;
`