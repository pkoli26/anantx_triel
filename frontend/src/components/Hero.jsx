import {
  Box,
  Typography,
  Button,
  Stack
} from "@mui/material";

import {
  Link
} from "react-router-dom";

function Hero() {

  return (

    <Box
      sx={{
        minHeight: "75vh",

        background:
          "linear-gradient(135deg,#020617,#0f172a,#1e293b)",

        display: "flex",

        alignItems: "center",

        justifyContent: "space-between",

        px: {
          xs: 4,
          md: 12
        },

        py: 8
      }}
    >

      {/* LEFT SECTION */}

      <Box
        sx={{
          maxWidth: "600px"
        }}
      >

        <Typography
          sx={{
            color: "#f59e0b",
            fontWeight: 700,
            mb: 2,
            letterSpacing: 2
          }}
        >
          ANANTBUY 2026
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            mb: 3
          }}
        >
          Shop Smarter
          <br />
          With AnantBuy
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: "#cbd5e1",
            mb: 4,
            lineHeight: 1.8
          }}
        >
          Discover Electronics, Fashion,
          Accessories and Premium Products
          at unbeatable prices.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
        >

          <Button
            component={Link}
            to="/products"
            variant="contained"
            sx={{
              background: "#f59e0b",
              px: 4,
              py: 1.5,

              "&:hover": {
                background: "#d97706"
              }
            }}
          >
            Shop Now
          </Button>

          <Button
            component={Link}
            to="/products"
            variant="outlined"
            sx={{
              borderColor: "#f59e0b",
              color: "#f59e0b",

              "&:hover": {
                borderColor: "#d97706"
              }
            }}
          >
            Explore Products
          </Button>

        </Stack>

        <Stack
          direction="row"
          spacing={5}
          sx={{
            mt: 6
          }}
        >

          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#f59e0b",
                fontWeight: 700
              }}
            >
              1000+
            </Typography>

            <Typography
              color="#cbd5e1"
            >
              Products
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#f59e0b",
                fontWeight: 700
              }}
            >
              500+
            </Typography>

            <Typography
              color="#cbd5e1"
            >
              Customers
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="h4"
              sx={{
                color: "#f59e0b",
                fontWeight: 700
              }}
            >
              24/7
            </Typography>

            <Typography
              color="#cbd5e1"
            >
              Support
            </Typography>
          </Box>

        </Stack>

      </Box>

      {/* RIGHT SECTION */}

      <Box
        component="img"
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900"
        alt="hero"
        sx={{
          width: {
            xs: "0%",
            md: "40%"
          },

          borderRadius: "25px",

          boxShadow:
            "0 20px 50px rgba(0,0,0,0.5)"
        }}
      />

    </Box>
  );
}

export default Hero;