import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  height: 70px;
  width: 91.2%;
  padding-left: 60px;
  padding-right: 60px;
  background-color: #1f633e;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AppNameAndNavBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 86%;
`;
const NavBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  max-width: 250px;
  min-width: 250px;
  padding-left: 50px;
  justify-content: space-between;
`;

const NavBtn = styled.span`
  cursor: pointer;
`;

const AppName = styled.span`
  font-size: 30px;
`;
const CartAndUserNameContainer = styled.div`
  width: 20%;
  max-width: 200px;
  min-width: 200px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20px;
  align-items: center;
`;

const CartIconContainer = styled.span`
  cursor: pointer;
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const headerStyle = {
  HeaderContainer,
  AppNameAndNavBtnContainer,
  NavBtnContainer,
  AppName,
  CartAndUserNameContainer,
  UserName,
  NavBtn,
  CartIconContainer,
};

export default headerStyle;
