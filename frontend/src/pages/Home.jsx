import {
  Box,
  Typography,
  Button
} from "@mui/material";

function Home({ darkMode }) {

  return (

    <Box
      sx={{
        minHeight: "450px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        background: darkMode
          ? "linear-gradient(135deg,#111827,#1f2937)"
          : "linear-gradient(135deg,#f8fafc,#e2e8f0)",

        color: darkMode
          ? "#ffffff"
          : "#111827",

        transition: "all 0.3s ease"
      }}
    >

      <Typography
        variant="h2"
        sx={{
          fontWeight: 700,
          mb: 2
        }}
      >
        Shop Smarter With AnantBuy
      </Typography>

      <Typography
        variant="h5"
        sx={{
          opacity: 0.9
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
        SHOP NOW
      </Button>

    </Box>

  );
}

export default Home;