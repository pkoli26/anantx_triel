import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent
} from "@mui/material";

const products = [

  {
    name: "iPhone 16",
    price: "₹89,999"
  },

  {
    name: "MacBook Air",
    price: "₹1,09,999"
  },

  {
    name: "Sony Headphones",
    price: "₹14,999"
  }

];

function FeaturedProducts() {

  return (

    <Box
      sx={{
        py: 8,
        px: 5,
        background: "#020617"
      }}
    >

      <Typography
        variant="h4"
        align="center"
        sx={{
          color: "white",
          mb: 5,
          fontWeight: 700
        }}
      >
        Trending Products
      </Typography>

      <Grid
        container
        spacing={4}
      >

        {products.map((p) => (

          <Grid
            item
            xs={12}
            md={4}
            key={p.name}
          >

            <Card
              sx={{
                background:
                  "#0f172a",
                color: "white",
                borderRadius: 4
              }}
            >

              <CardContent>

                <Typography
                  variant="h5"
                >
                  {p.name}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color:
                      "#f59e0b"
                  }}
                >
                  {p.price}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}

export default FeaturedProducts;
