import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions
} from "@mui/material";

function ProductCard({ product }) {
  return (
    <Card>

      <CardMedia
        component="img"
        height="200"
        image="https://picsum.photos/400/300"
      />

      <CardContent>

        <Typography variant="h6">
          {product.name}
        </Typography>

        <Typography>
          ₹ {product.price}
        </Typography>

      </CardContent>

      <CardActions>

        <Button
          variant="contained"
          fullWidth
        >
          Add To Cart
        </Button>

      </CardActions>

    </Card>
  );
}

export default ProductCard;