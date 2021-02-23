import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons"
import React, { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import ChatInput from "./ChatInput"
import { selectRoomId } from "../features/appSlice"
import { useDocument, useCollection } from "react-firebase-hooks/firestore"
import { db } from "../firebase"
import Message from "./Message"

import {
  ChatBottom,
  ChatContainer,
  ChatHeader,
  ChatHeaderLeft,
  ChatHeaderRight,
  ChatMessages,
} from "./styled/Chat"

function Chat() {
  const roomId = useSelector(selectRoomId)

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  )

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  )

  const chatBottomRef = useRef(null)

  useEffect(() => {
    chatBottomRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <ChatHeader>
            <ChatHeaderLeft>
              <h4>
                <strong>#{roomDetails?.data().name}</strong>
                <StarBorderOutlined />
              </h4>
            </ChatHeaderLeft>
            <ChatHeaderRight>
              <p>
                <InfoOutlined /> Details
              </p>
            </ChatHeaderRight>
          </ChatHeader>
          <ChatMessages>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data()
              return (
                <Message
                  key={doc.id}
                  message={message}
                  user={user}
                  timestamp={timestamp}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatBottomRef} />
          </ChatMessages>
          <ChatInput
            chatBottomRef={chatBottomRef}
            channelId={roomId}
            channelName={roomDetails?.data().name}
          />
        </>
      )}
    </ChatContainer>
  )
}

export default Chat
