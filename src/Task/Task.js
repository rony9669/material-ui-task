import React from "react";
import { TextField } from "@mui/material";
import "./Task.css";

const Task = () => {
  return (
    <TextField
      sx={{ m: 5 }}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
    />
  );
};

export default Task;
