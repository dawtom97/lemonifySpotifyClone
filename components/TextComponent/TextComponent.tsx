import styled from "styled-components";

type TextComponentProps = {
    size: string,
    weight: number
}

export const TextComponent = styled.p<TextComponentProps>`
    color: ${props => props.theme.fontColor};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
`