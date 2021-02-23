import styled from "styled-components"
import { Avatar } from "@material-ui/core"

export const HeaderContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
  align-items: center;
`
export const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`
export const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`
export const HeaderCenter = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 3rem;
  color: gray;
  border: 1px solid gray;
  align-items: center;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
  }
`
export const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-end;
  > .MuiSvgIcon-root {
    margin-right: 20px;
  }
`
