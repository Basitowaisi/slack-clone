import {
  FiberManualRecord,
  Create,
  Inbox,
  InsertComment,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons"
import React from "react"
import SidebarOption from "./SidebarOption"
import { useCollection } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "../firebase"
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./styled/Sidebar"

function Sidebar() {
  const [channels] = useCollection(db.collection("rooms"))
  const [user] = useAuthState(auth)
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mention &amp; reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People &amp; user groups" />
      <SidebarOption Icon={FileCopy} title="File browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels?.docs.map((doc) => (
        <SidebarOption title={doc.data().name} id={doc.id} key={doc.id} />
      ))}
    </SidebarContainer>
  )
}

export default Sidebar
