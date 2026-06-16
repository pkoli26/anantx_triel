import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

import {
  useNavigate
} from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  const categories = [{ name: "Electronics", image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" }, { name: "Laptops", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" }, { name: "Audio", image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg" }, { name: "Watches", image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg" }, { name: "Gaming", image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" }, { name: "Fashion", image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg" }]; 
  const featuredProducts = [{ name: "iPhone 16 Pro", price: "₹1,29,999", image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" }, { name: "MacBook Air", price: "₹89,999", image: "https://images.pexels.com/photos/18105/pexels-photo.jpg" }, { name: "Sony Headphones", price: "₹12,999", image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg" }, { name: "Gaming Controller", price: "₹5,999", image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg" }];

  return (

    <Box
      sx={{
        background:
          "linear-gradient(180deg,#020617,#0f172a,#111827)",
        minHeight: "100vh"
      }}
    >

      {/* HERO */}

      <Box
        sx={{
          minHeight: "85vh",

          background:

            `radial-gradient(
          circle at top left,
          rgba(37,99,235,.25),
          transparent 35%
        ),

        radial-gradient(
          circle at top right,
          rgba(245,158,11,.15),
          transparent 30%
        ),

        linear-gradient(
          135deg,
          #020617,
          #081028,
          #0f172a
        )`,


          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          px: {
            xs: 4,
            md: 12
          },

          flexWrap: "wrap"
        }}
      >

        <Box
          sx={{
            maxWidth: "600px"
          }}
        >

          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 900,
              mb: 2
            }}
          >
            Next Generation
            Shopping Platform
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#94a3b8",
              mb: 4
            }}
          >
            Secure E-Commerce Platform
            Powered By AnantX Security
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mr: 2,
              background: "#f59e0b"
            }}
            onClick={() =>
              navigate("/products")
            }
          >
            Shop Now
          </Button>

          <Button
            variant="outlined"
            size="large"
            sx={{
              color: "#f59e0b",
              borderColor: "#f59e0b"
            }}
            onClick={() =>
              navigate("/register")
            }
          >
            Join Now
          </Button>

          <Box
            sx={{
              display: "flex",
              gap: 6,
              mt: 6
            }}
          >

            <Box>

              <Typography
                variant="h3"
                sx={{
                  color: "#f59e0b",
                  fontWeight: 700
                }}
              >
                500+
              </Typography>

              <Typography color="white">
                Products
              </Typography>

            </Box>

            <Box>

              <Typography
                variant="h3"
                sx={{
                  color: "#f59e0b",
                  fontWeight: 700
                }}
              >
                100+
              </Typography>

              <Typography color="white">
                Users
              </Typography>

            </Box>

            <Box>

              <Typography
                variant="h3"
                sx={{
                  color: "#f59e0b",
                  fontWeight: 700
                }}
              >
                24/7
              </Typography>

              <Typography color="white">
                Support
              </Typography>

            </Box>

          </Box>

        </Box>

        <Box
          component="img"
          src="https://unsplash.com"
          sx={{
            width: {
              xs: "100%",
              md: "500px"
            },

            borderRadius: "30px",

            mt: {
              xs: 6,
              md: 0
            },

            boxShadow:
              "0 30px 60px rgba(0,0,0,.45)"
          }}
        />

      </Box>

      {/* CATEGORIES */}

      <Container sx={{ py: 10 }}>

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 6
          }}
        >
          Shop By Category
        </Typography>

        <Grid container spacing={4}>

          {categories.map((category) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={category.name}
            >

              <Card
                onClick={() =>
                  navigate("/products")
                }
                sx={{
                  cursor: "pointer",

                  position: "relative",

                  overflow: "hidden",

                  borderRadius: 5,

                  transition: ".4s",

                  "&:hover": {

                    transform:
                      "translateY(-10px)",

                    boxShadow:
                      "0 20px 40px rgba(245,158,11,.25)"
                  }
                }}
              >

                <CardMedia
                  component="img"
                  height="300"
                  image={category.image}
                />

                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",

                    background:
                      "linear-gradient(transparent, rgba(0,0,0,.95))"
                  }}
                >

                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      fontWeight: 700
                    }}
                  >
                    {category.name}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

      {/* FEATURED PRODUCTS */}

      <Container sx={{ py: 10 }}>

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "white",
            fontWeight: 700,
            mb: 6
          }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={4}>

          {featuredProducts.map((item) => (

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.name}
            >

              <Card
                sx={{
                  background: "#1e293b",

                  color: "white",

                  borderRadius: 5,

                  transition: ".3s",

                  cursor: "pointer",

                  "&:hover": {

                    transform:
                      "translateY(-10px)",

                    boxShadow:
                      "0 20px 40px rgba(245,158,11,.25)"
                  }
                }}
              >

                <CardMedia
                  component="img"
                  height="240"
                  image={item.image}
                />

                <CardContent>

                  <Typography
                    variant="h6"
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#f59e0b",
                      mt: 1,
                      fontWeight: 700
                    }}
                  >
                    {item.price}
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      background: "#f59e0b"
                    }}
                  >
                    Add To Cart
                  </Button>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>

    </Box>

  );
}

export default Home;
