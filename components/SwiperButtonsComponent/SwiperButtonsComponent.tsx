import { useSwiper } from 'swiper/react';
import styled from 'styled-components';
import { HiArrowSmLeft, HiArrowSmRight } from 'react-icons/hi';

const StyledBtnBox = styled.div`
  margin:12px 0;
  & button {
      margin-right:7px;
      border-radius: 50%;
      width:30px;
      border:none;
      height: 30px;
      background-color: ${props => props.theme.body};
      border: 1px solid ${props=>props.theme.lightGray};
      cursor: pointer;
      line-height: 0;
      transition: .5s;

      & > svg {
          color: ${props => props.theme.fontColor};
          font-size: 1.3rem;
      }

      &:hover {
          background-color:${props=>props.theme.bodyHover} ;
      }
  }
`

export const SwiperButtonsComponent = () => {
    const swiper = useSwiper();
    return (
    <StyledBtnBox>
    <button onClick={() => swiper.slidePrev()}><HiArrowSmLeft/></button>
    <button onClick={() => swiper.slideNext()}><HiArrowSmRight/></button>
    </StyledBtnBox>
    )
  };