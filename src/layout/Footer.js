import React from "react";
import styled from "styled-components";
const FooterStyled = styled.div`
  margin-top: auto;
  padding: 20px 100px;
  border-top: 1px solid #dedede;
`;
function Footer() {
  return (
    <FooterStyled>
      <p>Copyright © 2021</p>
    </FooterStyled>
  );
}

export default Footer;
