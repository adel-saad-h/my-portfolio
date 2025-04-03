import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <Box justifySelf="center" maxWidth={"60em"} sx={{ mt: -5 }}>
      <Card
        sx={{
          maxWidth: "90%",
          boxShadow: 7,
          borderRadius: 5,
          justifySelf: "center",
        }}
      >
        <CardActions>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              fontFamily="sans-serif"
              fontWeight={900}
              sx={{
                fontSize: 20,
              }}
            >
              About
            </Typography>
            <Typography
              fontFamily="sans-serif"
              fontWeight={900}
              sx={{
                fontSize: 15,
                color: "text.secondary",
              }}
              variant="body2"
            >
              A dedicated developer with hands-on experience in web development
              and Computer vision. Utilizing my expertise in web technologies
              and collaborative teamwork, I consistently made high-quality
              projects. Enthusiastic about exploring new technological frontiers
              to make significant contributions to innovative projects.
            </Typography>
          </CardContent>
        </CardActions>
        <CardActions>
          <Box display="flex" justifyContent="end" width="100%">
            <Button
              size="small"
              color="primary"
              onClick={() => {
                navigate("/about");
              }}
            >
              More
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default AboutSection;
