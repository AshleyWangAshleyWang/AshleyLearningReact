import React from "react";
import styled from "styled-components";
import NaviItem from "./navigationBar";
import UserInfo from "./userInfo";
import DentallHisLogo from "./images/DentallHisLogo.svg";
import RegistrationPageLogo from "./images/icon-book-open.svg";
import AppointmentPageLogo from "./images/icon-calendar.svg";
import SMSPageLogo from "./images/message-circle.svg";
import PatientLogo from "./images/people.svg";
import ManagementFormLogo from "./images/file-text.svg";
import DefaultUserPic from "./images/Default.png";

const NavUl = styled.ul`
  margin-left: 15%;
  display: flex;
  justify-content: space-between;
  width: 15px;
  height: 8.625px;
  position: relative;
  bottom: 20px;
`;

const HisLogo = styled.img`
  box-sizing: border-box;
  cursor: pointer;
  height: 23px;
  width: 146px;
  vertical-align: baseline;
  float: left;
`;

let NaviContent = (props) => {
  return (
    <>
      <a href="#/">
        <HisLogo id="HisLogo" src={DentallHisLogo} alt="dentallHis" />
      </a>
      <NavUl>
        <NaviItem name="就診列表" path={RegistrationPageLogo} />
        <NaviItem name="約診排程" path={AppointmentPageLogo} />
        <NaviItem name="SMS" path={SMSPageLogo} />
        <NaviItem name="病患中心" path={PatientLogo} />
        <NaviItem name="管理表" path={ManagementFormLogo} />
      </NavUl>
      <UserInfo userName="tester 2" userRole="訪客" path={DefaultUserPic} />
    </>
  );
};

export default NaviContent;
