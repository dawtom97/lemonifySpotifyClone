import { signOut } from "next-auth/react";
import { HiLogin } from "react-icons/hi";
import { StyledInfo, StyledLogout, StyledModal } from "./UserModal.styles";

export const UserModalComponent = ({ session,isUserModalVisible }: any) => {
 // console.log(session);
  return (
    <StyledModal isUserModalVisible={isUserModalVisible}>
      <div>
        <img width="40px" height="40px" src={session?.user.image} />
      </div>
      <StyledInfo>
        <p>{session?.user.email}</p>
        <p>{session?.user.name}</p>

        <StyledLogout onClick={() => signOut()}>
            <HiLogin />
            <span>Logout</span>
          </StyledLogout>
       
      </StyledInfo>
    </StyledModal>
  );
};
