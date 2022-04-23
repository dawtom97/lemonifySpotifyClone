import styled, { css } from "styled-components";
import { StyledAsideTypes } from "./Main.types";


export const StyledWrapper = styled.div`
  background-color: ${props => props.theme.body};
`
export const StyledInnerWrapper = styled.div`
  width:85%;
  margin:0 auto;
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