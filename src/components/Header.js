import React from "react"
import { AccessTime, HelpOutline, Search } from "@material-ui/icons"
import { auth } from "../firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {
  HeaderAvatar,
  HeaderCenter,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
} from "./styled/Header"

function Header() {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTime />
      </HeaderLeft>
      <HeaderCenter>
        <Search />
        <input type="text" placeholder="Search ..." />
      </HeaderCenter>
      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  )
}

export default Header
