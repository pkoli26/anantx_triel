import {
  Box,
  Typography,
  Button
} from "@mui/material";

function Hero({ darkMode }) {

  return (

    <Box
      sx={{
        height: 450,

        background: darkMode
          ? "linear-gradient(135deg,#111827,#1f2937)"
          : "linear-gradient(135deg,#f8fafc,#e2e8f0)",

        color: darkMode
          ? "white"
          : "#111827",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >

      <Typography
        variant="h2"
        sx={{
          fontWeight: 700
        }}
      >
        Shop Smarter With AnantBuy
      </Typography>

      <Typography
        variant="h6"
        sx={{
          mt: 2
        }}
      >
        Discover Electronics, Fashion & More
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          background: "#f59e0b",

          "&:hover": {
            background: "#d97706"
          }
        }}
      >
        Shop Now
      </Button>

    </Box>

  );
}

export default Hero;