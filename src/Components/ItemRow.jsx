import React, { useState } from "react";
import MissingProduct from "./MissingProduct";
import status from "./status";
import { useDispatch } from "react-redux";
import { handleStatus } from "../Redux/Order";
import itemListStyle from "../Style/ItemList.styled";
import { FaCheck } from "react-icons/fa6";
import { MdClear } from "react-icons/md";
import { Modal } from "@mui/material";

const { Approved } = status;

const { ItemImage, IconContainer, ItemStatus, EditText, ItemQty } =
  itemListStyle;

const ItemRow = (props) => {
  const { item } = props;
  const [missingProductModal, setMissingProductModal] = useState(false);

  const handleMissingProductModal = (value) => {
    setMissingProductModal(value);
  };

  const dispatch = useDispatch();

  const handleApprove = () => {
    let statusObj = { id: item.id, status: Approved };
    dispatch(handleStatus(statusObj));
  };

  return (
    <tr key={item.id}>
      <td>
        <ItemImage src={item.img} alt="avocodo" /> {item.name}
      </td>
      <td>{item.brand}</td>
      <td>${item.price} / 6+1LB</td>
      <td>
        <ItemQty>{item.quantity}</ItemQty> *6+1LB
      </td>
      <td>${Math.ceil(item.price * item.quantity)}</td>
      <td>
        <ItemStatus status={item.status}>{item.status}</ItemStatus>
      </td>
      <td>
        <IconContainer onClick={() => handleApprove()}>
          <FaCheck status={item.status} />
        </IconContainer>
        <IconContainer onClick={() => handleMissingProductModal(true)}>
          <MdClear status={item.status} />
        </IconContainer>
        <EditText>Edit</EditText>
      </td>

      <Modal open={missingProductModal}>
        <MissingProduct id={item.id} handleModal={handleMissingProductModal} />
      </Modal>
    </tr>
  );
};

export default ItemRow;
