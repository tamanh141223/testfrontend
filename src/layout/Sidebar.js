import React from "react";
import styled from "styled-components";
const menus = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Services",
  },
  {
    id: 3,
    title: "News",
  },
  {
    id: 4,
    title: "Blog",
  },
  {
    id: 5,
    title: "Contact",
  },
];
const SidebarStyled = styled.div`
  width: 150px;
  background: #191718;
  height: 100vh;
  .menu__item {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    padding: 14px 16px;
    border-bottom: 1px solid #5c5c5c;
  }
`;
function Sidebar() {
  return (
    <SidebarStyled>
      {menus.length > 0 &&
        menus.map((item) => (
          <div key={item.id} className="menu__item">
            {item.title}
          </div>
        ))}
    </SidebarStyled>
  );
}

export default Sidebar;
