import { Button } from "@material-ui/core"
import React, { useState } from "react"
import { db, auth } from "../firebase"
import firebase from "firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { ChatInputContainer } from "./styled/ChatInput"

function ChatInput(props) {
  const { channelName, channelId, chatBottomRef } = props
  const [user] = useAuthState(auth)

  const [message, setMessage] = useState("")

  const sendMessage = (e) => {
    e.preventDefault()
    if (!channelId) {
      return false
    }

    if (message === "") {
      return false
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImage: user?.photoURL,
    })

    setMessage("")

    chatBottomRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }
  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          value={message}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  )
}

export default ChatInput
