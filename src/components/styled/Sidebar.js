import styled from "styled-components"

export const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #29274b;
  max-width: 260px;
  color: #fff;

  > hr {
    margin: 10px 0;
    border-bottom: #49274b;
  }
`

export const SidebarHeader = styled.header`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: #fff;
    border-radius: 9999px;
  }
`

export const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`
