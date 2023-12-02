import React from "react";
import ItemList from "./ItemList";
import itemListStyle from "../Style/ItemList.styled";
import PrintIcon from "@mui/icons-material/Print";
import SearchIcon from '@mui/icons-material/Search';

const {
  TableContainer,
  InputBtnContainer,
  InputContainer,
  SearchInput,
  BtnsContainer,
  NewItemBtn,
  SearchIconContainer,
} = itemListStyle;

const Item = () => {
  return (
    <TableContainer>
      <InputBtnContainer>
        <InputContainer>
          <SearchInput placeholder="Search.." />
          <SearchIconContainer>
            <SearchIcon fontSize="small" />
          </SearchIconContainer>
        </InputContainer>
        <BtnsContainer>
          <NewItemBtn>Add Item</NewItemBtn>
          <PrintIcon fontSize="large" />
        </BtnsContainer>
      </InputBtnContainer>
      <ItemList />
    </TableContainer>
  );
};

export default Item;
