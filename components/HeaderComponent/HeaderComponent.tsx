
import Image from "next/image";
import { HiGlobeAlt, HiMenu, HiMusicNote } from "react-icons/hi";
import { checkDayTime } from "../../utils/checkDayTime";
import { TextComponent } from "../TextComponent/TextComponent";
import { TitleComponent } from "../TitleComponent/TitleComponent";
import { StyledHeader, StyledInnerWrapper, StyledUserButton } from "./Header.styles";
import { SessionProps } from "./Header.types";


export const HeaderComponent = ({ session, onClick }: SessionProps) => {

  return (
    <StyledHeader>
      <StyledInnerWrapper>
        <TitleComponent fontSize={"1.5rem"} primaryTitle={true}>
        <HiMusicNote/>
          lemonify
        </TitleComponent>

        <div>
          <TextComponent weight={700} size={"0.9rem"}>{checkDayTime()}</TextComponent>
          <HiGlobeAlt/>
          <StyledUserButton onClick={onClick}>
            <HiMenu />
            <img width="40px" height="40px" src={session?.user.image} />
          </StyledUserButton>
        </div>
      </StyledInnerWrapper>
    </StyledHeader>
  );
};
