import React from "react";
import { Stack } from "@mui/material";
import { categories, Categories } from "../utils/constants";
const selectedCategory = "New";
const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => {
      return (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "White",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight:'15px'
            }}
          >
            {category.icon}
          </span>
          <span style={{opacity:category.name === selectedCategory ? '1':'.8'}}>{category.name}</span>
        </button>
      );
    })}
  </Stack>
);

export default Sidebar;
