import React from "react";
import styled from "styled-components";

const UserInfoStyle = styled.div`
  margin-left: 63%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 160px;
  height: 40px;
  &> div: nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
  }
  &> div: nth-child(2) {
    display: flex;
    align-items: flex-start;
  }
`;

const UserInfoSpan = styled.span`
  text-align: center;
  width: 100px;
  height: 18px;
  box-sizing: border-box;
  line-height: 18.858px;
`;

const UserInfoPic = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

let UserInfo = (props) => {
  return (
    <UserInfoStyle>
      <div>
        <UserInfoSpan style={{fontWeight:"bold"}}>{props.userName}</UserInfoSpan>
        <UserInfoSpan style={{color:"gray", padding:2}}>{props.userRole}</UserInfoSpan>
      </div>
      <div>
        <UserInfoPic id="userLogo" src={props.path} alt="userLogo" />
      </div>
    </UserInfoStyle>
  );
};

export default UserInfo;
