import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAlgorithm } from "../../redux/slices/sortSlice";

const links = {
  0: "/bubble-sort",
  1: "selection-sort",
};
const Home = () => {
  const { alogrithms } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClick = (index) => {
    dispatch(setAlgorithm(index));
    navigate(links[index]);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
          marginTop: (theme) => theme.spacing(10),
        }}
      >
        <Typography variant="h1">Sortify</Typography>
        <Typography variant="body1">v2</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "center",
        }}
      >
        {alogrithms.map((algo, index) => (
          <Button
            variant="outlined"
            key={algo.key}
            onClick={() => handleOnClick(index)}
            sx={{
              color: "#1db954",
              borderColor: "#1db954",
              margin: "8px",
              borderRadius: "16px",
              "&:hover": {
                borderColor: "#4ac776",
                color: "#4ac776",
              },
            }}
          >
            {algo.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
