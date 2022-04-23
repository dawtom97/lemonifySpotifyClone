import styled from "styled-components";

type TitleComponentProps = {
    primaryTitle?: boolean,
    fontSize: string
}

export const TitleComponent = styled.h2<TitleComponentProps>`
    color: ${props => props.primaryTitle ? props.theme.primary : props.theme.fontColor};
    font-size: ${props => props.fontSize};
    font-weight: 700;
    display: flex;
    align-items: center;
    gap:1px;
    svg {
        font-size: 27px;
    }

`