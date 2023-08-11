import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Loading = () => {
  return (
    <div className="loading">
      <h1 style={{ color: " #10b981" }}>Loading...</h1>
      <Box>
        <CircularProgress color="success" />
      </Box>
    </div>
  );
};

export default Loading;
