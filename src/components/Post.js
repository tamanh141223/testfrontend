import React from "react";
import styled from "styled-components";
const PostStyled = styled.div`
  width: 100%;
  height: 252px;
  .post__img {
    float: left;
    shape-outside: inset();
  }
  .post__title {
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    padding-bottom: 10px;
  }
  .post__desc {
    font-size: 16px;
  }
`;
function Post() {
  return (
    <PostStyled>
      <div className="post__title">Lorem ipsum dolor sit amet</div>
      <div className="post_body">
        <img className="post__img" src="./html-icon.png" />
        <p className="post__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id.
        </p>
      </div>
    </PostStyled>
  );
}

export default Post;
