import { Box, CardMedia, Paper, Stack, Typography } from "@mui/material";

const TechSection = () => {
  const techIconsList = [
    "./assets/tech-icons/javaScript.png",
    "./assets/tech-icons/typeScript.png",
    "./assets/tech-icons/reactJS.png",
    "./assets/tech-icons/express.png",
    "./assets/tech-icons/mongo-DB.png",
    "./assets/tech-icons/python.png",
    "./assets/tech-icons/openCV.png",
  ];

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h5"
        fontFamily="sans-serif"
        fontWeight={900}
        sx={{
          fontSize: 20,
        }}
      >
        Tech
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-around"
        spacing={2}
        sx={{ padding: 2 }}
      >
        {techIconsList.map((icon) => {
          return (
            <Paper elevation={5} sx={{ width: "70px", borderRadius: 3 }}>
              <Box>
                <CardMedia component="img" src={icon} />
              </Box>
            </Paper>
          );
        })}
      </Stack>
    </Box>
  );
};

export default TechSection;
