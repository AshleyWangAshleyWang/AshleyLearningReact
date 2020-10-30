import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./index.css";
import NaviContent from "./navigationUL";
// import App from './App';
import GiveContent from "./App";
import reportWebVitals from "./reportWebVitals";
import UploadFileBtnClickEvent from "./uploadFileButton";


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8fafb;
  user-select: none;
`;

const Banner = styled.div`
  position: fixed;
  width: 100%;
  height: 4px;
  background-color: #3266ff;
`;

const NavContainer = styled.div`
  height: 10%;
  display: flex;
  //justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
  z-index: 100;
  margin: 15px 1%;
  border-radius: 8px;
  background: #fff;
  // & > :nth-child(1) {
  //   font-size: 1.5rem;
  //   display: none;
  // }

  // & > div:nth-child(3) {
  //   ul {
  //     display: flex;
  //     margin: 0;
  //     padding: 0;
  //   }
  // }

  // @media (max-width: 1100px) {
  //   & > :nth-child(1) {
  //     display: block;
  //   }

  //   padding: 10px 1%;
  //   & > div:nth-child(3) {
  //     display: none;
  //   }
  }
`;

const ContentContainer = styled.div`
padding: 0.5% 0.5%;
  height: 100%;
  margin: 0 1% 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <Container>
      <Banner />
      <NavContainer>
        <NaviContent />
      </NavContainer>
      <ContentContainer>
        <UploadFileBtnClickEvent />
      </ContentContainer>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
