import { Button } from "@material-ui/core"
import React from "react"
import { auth, provider } from "../firebase"
import { LoginContainer, LoginInnerContainer } from "./styled/Login"

function Login(props) {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => alert(e.message))
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
        />
        <h1>Sign in to Slack</h1>
        <p>slack-clone-112233.web.app</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  )
}

export default Login
