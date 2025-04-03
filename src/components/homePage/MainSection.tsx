import { Box, CardMedia, Stack, Typography } from "@mui/material";

const MainSection = () => {
  const BigScreen = () => {
    return (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          gap: 3,
          p: 2,
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Box>
          <Typography
            alignSelf="start"
            fontFamily="sans-serif"
            color="primary"
            fontWeight={900}
            sx={{
              fontSize: 20,
            }}
          >
            Hello, my name is Adel Saad
          </Typography>
          <Typography
            fontFamily="sans-serif"
            color="primary"
            fontWeight={900}
            sx={{
              fontSize: 55,
            }}
          >
            Full stack &
          </Typography>
          <Typography
            fontFamily="sans-serif"
            color="primary"
            fontWeight={900}
            sx={{
              fontSize: 55,
            }}
          >
            Computer Vision developer
          </Typography>
        </Box>
        <Box height="500" width="380">
          <CardMedia
            component="img"
            image="./assets/my-image.png"
            sx={{ borderRadius: 5 }}
          />
        </Box>
      </Stack>
    );
  };
  const SmallScreen = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ display: { xs: "flex", sm: "none" }, p: 2, gap: 3 }}
        >
          <Box width="100%" display="flex" justifyContent="center">
            <Box width="50%" height="25%">
              <CardMedia
                component="img"
                image="./assets/my-image.png"
                sx={{ borderRadius: 50 }}
              />
            </Box>
          </Box>
          <Stack direction="column">
            <Box>
              <Typography
                alignSelf="start"
                fontFamily="sans-serif"
                color="primary"
                fontWeight={900}
                sx={{
                  fontSize: 14,
                }}
              >
                Hello, my name is Adel Saad
              </Typography>
              <Typography
                fontFamily="sans-serif"
                color="primary"
                fontWeight={900}
                sx={{
                  fontSize: 50,
                }}
              >
                Full stack &
              </Typography>
              <Typography
                fontFamily="sans-serif"
                color="primary"
                fontWeight={900}
                sx={{
                  fontSize: 50,
                }}
              >
                Computer Vision developer
              </Typography>
            </Box>
          </Stack>
        </Box>
      </>
    );
  };
  return (
    <>
      <Box
        bgcolor="background.default"
        display="flex"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        height={"80vh"}
        p={2}
      >
        <BigScreen />
        <SmallScreen />
      </Box>
    </>
  );
};

export default MainSection;
