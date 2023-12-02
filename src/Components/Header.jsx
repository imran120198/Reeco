import React from "react";
import headerStyle from "../Style/Header.styled";
import { FaAngleDown } from "react-icons/fa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const {
  HeaderContainer,
  AppNameAndNavBtnContainer,
  NavBtnContainer,
  AppName,
  CartAndUserNameContainer,
  UserName,
  NavBtn,
  CartIconContainer,
} = headerStyle;

const Header = () => {
  return (
    <HeaderContainer>
      <AppNameAndNavBtnContainer>
        <AppName>Reeco</AppName>
        <NavBtnContainer>
          <NavBtn>Store</NavBtn>
          <NavBtn>Orders</NavBtn>
          <NavBtn>Analytics</NavBtn>
        </NavBtnContainer>
      </AppNameAndNavBtnContainer>
      <CartAndUserNameContainer>
        <CartIconContainer>
          <ShoppingCartIcon />
        </CartIconContainer>
        <UserName>
          Hello, James{" "}
          <span>
            <FaAngleDown height={"40px"} />
          </span>
        </UserName>
      </CartAndUserNameContainer>
    </HeaderContainer>
  );
};

export default Header;
