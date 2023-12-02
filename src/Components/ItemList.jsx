import React from "react";
import { useSelector } from "react-redux";
import itemListStyle from "../Style/ItemList.styled";
import ItemRow from "./ItemRow";

const { ListContainer, Table } = itemListStyle;

const ItemList = () => {
  const { orders } = useSelector((state) => state.orderApp);

  return (
    <ListContainer>
      <Table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item) => (
            <ItemRow item={item} />
          ))}
        </tbody>
      </Table>
    </ListContainer>
  );
};

export default ItemList;
