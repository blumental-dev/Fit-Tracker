import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CustomCardContent = () => {
  return (
    <CardContent>
      <CardMedia
        component="img"
        height="200"
        width="150"
        image="./public/vite.svg"
        alt="Paella dish"
      />
      <Typography variant="body2" color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Typography>
    </CardContent>
  );
};
export default CustomCardContent;
