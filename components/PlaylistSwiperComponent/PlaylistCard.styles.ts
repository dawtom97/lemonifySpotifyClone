import styled from "styled-components";

export const StyledWrapper = styled.div`
    width:86%;
  margin:0 auto;
  & > div {
    display: flex;
    flex-direction: column-reverse;

    & > div {
        padding-bottom: 10px;
    }
  }
`

export const StyledPlaylistBox = styled.article`
   height: 180px;
   border: 1px solid ${props=>props.theme.lightGray};
   padding:13px;
   border-radius: 12px;
   display: flex;
   gap:16px;
   transition: 0.5s;
   cursor: pointer;
   :hover {
      box-shadow: 0px 4px 5px 1px ${props => props.theme.mainShadow};
    }

   p:first-child {
       margin-bottom: 10px;
   }
   p:last-child {
    position: absolute;
    bottom: 13px;
   }

   &> img {
       width: 110px;
       height: 100%;
       object-fit: cover;
       border-radius: 12px;
   }

   & svg {
    color: ${props=>props.theme.primary};
    font-size: 1rem;
    position: relative;
    top: 3px;
}
`