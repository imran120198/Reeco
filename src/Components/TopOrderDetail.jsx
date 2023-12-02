import TopOrder from "../Style/TopOrderDetail.styled";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const {
  OrderHeadingContainer,
  OrderHeadingText,
  OrderBtnTitleContainer,
  OrderId,
  OrderBtnContainer,
  BackButton,
  ApproveOrderBtn,
  Heading,
} = TopOrder;

const TopOrderDetail = () => {
  return (
    <OrderHeadingContainer>
      <OrderHeadingText>
        Order{" "}
        <IoIosArrowForward style={{ fontSize: "12px", margin: "0px 5px" }} />{" "}
        <OrderId>Order 32457ABC</OrderId>
      </OrderHeadingText>
      <OrderBtnTitleContainer>
        <Heading>Order 32457ABC</Heading>
        <OrderBtnContainer>
          <BackButton>Back</BackButton>
          <ApproveOrderBtn>Approve Order</ApproveOrderBtn>
        </OrderBtnContainer>
      </OrderBtnTitleContainer>
    </OrderHeadingContainer>
  );
};

export default TopOrderDetail;
