import styled, { css } from "styled-components";


type StyledSlideProps = {
    image: string,
    active?: boolean
}

export const StyledSlide = styled.div<StyledSlideProps>`
  width:100%;
  height: 330px;
  border-radius: 15px;
  padding: 20px;
  color: ${(props) => props.theme.white};
  position: relative;
  overflow: hidden;

  ${(props) => props.active && css`
         border:3px solid ${props=>props.theme.primary};
     `}

  &::before {
      position: absolute;
      content:"";
      width:100%;
      height: 100%;
      top:0;
      left:0;
      background-image: url(${props => props.image});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      z-index:-1;
      transition: 3s;
      ${(props) => props.active && css`
        animation: zoomSlide 15s 0.5s linear forwards;
        @keyframes zoomSlide {
            100% {
                transform: scale(1.25);
            }
        }
     `}
  }
  ${(props) => props.active === false && css`
         &:hover::before {
           transform: scale(1.2);
         }
     `}


  &> p {
    text-transform: capitalize;

  }
  &>h3 {
      font-size: 1.8rem;
  }
  &> button {
      position: absolute;
      bottom: 25px;
  }
  &>div {
      position: absolute;
      bottom: 25px;
      font-weight: 600;
      right:25px;
      p {
          font-size:0.8rem;
      }
  }
`


