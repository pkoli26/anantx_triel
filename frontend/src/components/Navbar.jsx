import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  IconButton
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar({
  darkMode,
  setDarkMode
}) {

  return (

    <AppBar
      position="sticky"
      sx={{
        background: darkMode
          ? "#111827"
          : "#ffffff",

        color: darkMode
          ? "#ffffff"
          : "#111827",
        boxShadow:
          "0 4px 20px rgba(0,0,0,0.15)"
      }}
    >

      <Toolbar>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            cursor: "pointer"
          }}
        >
          AnantBuy
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            mx: 4
          }}
        >

          <TextField
            size="small"
            fullWidth
            placeholder="Search products..."
            variant="outlined"
            sx={{
              background: "white",
              borderRadius: 2,

              "& .MuiOutlinedInput-root": {
                borderRadius: 2
              }
            }}
          />

        </Box>

        <Button
          color="inherit"
          sx={{
            mx: 1,
            fontWeight: 600
          }}
        >
          Products
        </Button>

        <Button
          color="inherit"
          sx={{
            mx: 1,
            fontWeight: 600
          }}
        >
          Cart
        </Button>

        <Button
          variant="contained"
          sx={{
            mx: 1,
            background: "#f59e0b",

            "&:hover": {
              background: "#d97706"
            }
          }}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          sx={{
            mx: 1,
            color: "white",
            borderColor: "white",

            "&:hover": {
              borderColor: "#f59e0b",
              color: "#f59e0b"
            }
          }}
        >
          Register
        </Button>

        <IconButton
          color="inherit"
          onClick={() =>
            setDarkMode(!darkMode)
          }
          sx={{
            ml: 1
          }}
        >
          {
            darkMode
              ? <LightModeIcon />
              : <DarkModeIcon />
          }
        </IconButton>

      </Toolbar>

    </AppBar>

  );
}

export default Navbar;