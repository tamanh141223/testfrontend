import React from "react";
import styled from "styled-components";
import Post from "../components/Post";
const MainContentStyled = styled.div`
  width: 100%;
  padding: 0 100px;
  .header_logo {
    text-align: center;
    padding: 20px;
  }
  .group_1 {
    padding: 30px 0;
    text-align: center;
    background: #efefef;
  }
  .group_1__content {
    display: inline-block;
    width: 910px;
  }
  .group_1__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    padding-bottom: 10px;
  }
  .posts {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    padding-top: 30px;
  }
`;
function MainContent() {
  return (
    <MainContentStyled>
      <div className="header_logo">
        <img src="./logo.png" />
      </div>
      <div className="group_1">
        <h3 className="group_1__title">Lorem ipsum dolor sit asmet?</h3>
        <p className="group_1__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className="posts">
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </MainContentStyled>
  );
}

export default MainContent;
