import {
  Box,
  Typography
} from "@mui/material";

function WhyChooseUs() {

  return (

    <Box
      sx={{
        py: 8,
        textAlign: "center",
        background: "#0f172a"
      }}
    >

      <Typography
        variant="h4"
        sx={{
          color: "white",
          mb: 5
        }}
      >
        Why Choose AnantBuy?
      </Typography>

      <Typography
        sx={{
          color: "#cbd5e1",
          mb: 2
        }}
      >
        ✓ Fast Delivery
      </Typography>

      <Typography
        sx={{
          color: "#cbd5e1",
          mb: 2
        }}
      >
        ✓ Secure Payments
      </Typography>

      <Typography
        sx={{
          color: "#cbd5e1",
          mb: 2
        }}
      >
        ✓ Premium Products
      </Typography>

      <Typography
        sx={{
          color: "#cbd5e1"
        }}
      >
        ✓ 24x7 Support
      </Typography>

    </Box>
  );
}

export default WhyChooseUs;
