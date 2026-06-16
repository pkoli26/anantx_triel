import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  IconButton,
  Badge
} from "@mui/material";

import {
  Link,
  useNavigate
} from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Navbar({
  darkMode,
  setDarkMode
}) {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("token");

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );  

    navigate("/login");

    window.location.reload();
  };

  return (

    <AppBar
  position="sticky"
  sx={{

    background:
      "rgba(2,6,23,0.95)",

    backdropFilter:
      "blur(15px)",

    borderBottom:
      "1px solid rgba(245,158,11,0.15)",

    color: "#ffffff",

    boxShadow:
      "0 8px 30px rgba(0,0,0,0.35)"
  }}
>

      <Toolbar>

        {/* LOGO */}

        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit"
          }}
        >

          <StorefrontIcon
            sx={{
              color: "#f59e0b",
              mr: 1
            }}
          />

          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "#f59e0b"
            }}
          >
            ANANTBUY
          </Typography>

        </Box>

        {/* SEARCH */}

        <Box
          sx={{
            flexGrow: 1,
            mx: 4,
            position: "relative"
          }}
        >

          <TextField
            size="small"
            fullWidth
            placeholder="Search products..."
            sx={{
              background:
                darkMode
                  ? "#1e293b"
                  : "#f8fafc",

              borderRadius: 3,

              "& .MuiOutlinedInput-root": {
                borderRadius: 3
              }
            }}
          />

          <SearchIcon
            sx={{
              position: "absolute",
              right: 12,
              top: 9,
              color: "gray"
            }}
          />

        </Box>

        {/* MENU */}

        <Button
          component={Link}
          to="/"
          color="inherit"
        >
          Home
        </Button>

        <Button
          component={Link}
          to="/products"
          color="inherit"
        >
          Products
        </Button>

        {/* CART */}

        <IconButton
          component={Link}
          to="/cart"
          color="inherit"
        >

          <Badge
            badgeContent={0}
            color="error"
          >
            <ShoppingCartIcon />
          </Badge>

        </IconButton>

        {/* LOGIN STATE */}

        {
          !token
            ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  variant="contained"
                  sx={{
                    ml: 2,
                    background:
                      "#f59e0b"
                  }}
                >
                  Login
                </Button>

                <Button
                  component={Link}
                  to="/register"
                  variant="outlined"
                  sx={{
                    ml: 1,
                    borderColor:
                      "#f59e0b",
                    color:
                      "#f59e0b"
                  }}
                >
                  Register
                </Button>
              </>
            )
            : (
              <>
                <Typography
                  sx={{
                    mx: 2,
                    fontWeight: 600
                  }}
                >
                  Welcome 👋
                </Typography>

                <Button
                  color="error"
                  variant="outlined"
                  onClick={
                    handleLogout
                  }
                >
                  Logout
                </Button>
              </>
            )
        }

        {/* DARK MODE */}

        <IconButton
          color="inherit"
          onClick={() =>
            setDarkMode(
              !darkMode
            )
          }
          sx={{
            ml: 1
          }}
        >

          {
            darkMode
              ? (
                <LightModeIcon />
              )
              : (
                <DarkModeIcon />
              )
          }

        </IconButton>

      </Toolbar>

    </AppBar>
  );
}

export default Navbar;