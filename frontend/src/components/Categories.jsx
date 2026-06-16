import {
  Box,
  Typography,
  Grid,
  Paper
} from "@mui/material";

const categories = [
  "📱 Electronics",
  "💻 Laptops",
  "🎧 Audio",
  "⌚ Watches",
  "🎮 Gaming",
  "👕 Fashion"
];

function Categories() {

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
        Shop By Category
      </Typography>

      <Grid
        container
        spacing={3}
      >

        {categories.map((cat) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={cat}
          >

            <Paper
              elevation={0}
              sx={{
                p: 4,
                textAlign: "center",
                background: "#0f172a",
                color: "white",
                borderRadius: 4,
                cursor: "pointer",

                "&:hover": {
                  transform:
                    "translateY(-8px)",
                  transition: ".3s",
                  border:
                    "1px solid #f59e0b"
                }
              }}
            >
              <Typography
                variant="h6"
              >
                {cat}
              </Typography>

            </Paper>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
}

export default Categories;
