import React from "react";
import styled from "styled-components";
import Sidebar from "../layout/Sidebar";
import MainContent from "../layout/MainContent";
import Footer from "../layout/Footer";
const HomePageStyled = styled.div`
  width: 100%;
  display: flex;
  .right {
    width: calc(100% - 150px);
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
`;

function HomePage() {
  return (
    <HomePageStyled>
      <Sidebar></Sidebar>
      <div className="right">
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    </HomePageStyled>
  );
}

export default HomePage;
