import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

// let handleClick = (e) => {
//     return(
//     e.preventDefault(),
//     console.log('The link was clicked.')
//     )
// }

const Li = styled.li`
  display: list-item;
  list-style-type: none;
  margin: 5px;
  margin-left: 100%;
  margin-top: 8px;
  padding: 3px;
  border-radius: 34px;
  font-weight: bolder;
  font-size: 12px;
  line-height: 18.858px;
  width: 110px;
  height: 31px;
  position: relative;
  & :hover {
    background-color: #5c8aff;
    color: white;
    border-radius: 34px;
  }
`;

const PivotBtnStyle = styled.div`
  width: 90px;
  display: flex;
  align-items: flex-start;
  padding: 6px 12px;
`;

const NaviPivotImg = styled.img`
  margin-top: -10px;
  height: 30px;
  width: 30px;
`;

const NaviPivotText = styled.span`
width: 48px;
height: 16px;
font-size: 12px;
font-weight: bold;
line-height: 1.33;
margin-left: 12%;
align-items: center;
`;

let NaviItem = (props) => {
  return (
    <Li>
      <a href="#/ management" style={{textDecoration:"none", color:"black"}}>
        <PivotBtnStyle>
          <div>
            <NaviPivotImg src={props.path} alt={props.name}></NaviPivotImg>
          </div>
          <NaviPivotText >{props.name}</NaviPivotText>
        </PivotBtnStyle>
      </a>
    </Li>
  );
};

export default NaviItem;
