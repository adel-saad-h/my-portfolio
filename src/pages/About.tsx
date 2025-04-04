import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import WorkTimeline from "../components/WorkTimeline";

const information = {
  ExecutiveSummary: `I am eager to embrace a new opportunity where I can apply my
                expertise in full-stack web development and computer vision to
                drive innovation and efficiency. With a strong technical
                foundation and a results-driven mindset, I am committed to
                supporting the organization's project milestones, optimizing
                development processes, and contributing to revenue growth. By
                leveraging cutting-edge technologies and best practices, I aim
                to deliver impactful solutions that align with the
                organization’s strategic objectives.`,
  About: `A dedicated developer with hands-on experience in web
                  development and Computer vision. Utilizing my expertise in web
                  technologies and collaborative teamwork, I consistently made
                  high-quality projects. Enthusiastic about exploring new
                  technological frontiers to make significant contributions to
                  innovative projects.`,
  Education: `Alexandria University
September 2005 - May 2008
Bachelor of Commerce - BCom, Accounting
`,
};

const card = (title: string, body: string) => {
  return (
    <Box
      padding={"min(9em,2%)"}
      minHeight={"10em"}
      display="flex"
      justifyContent="center"
    >
      <Card sx={{ maxWidth: "90%", boxShadow: 7, borderRadius: 5 }}>
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
              {title}
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
              {body}
            </Typography>
          </CardContent>
        </CardActions>
      </Card>
    </Box>
  );
};

const About = () => {
  return (
    <Box>
      <Container fixed>
        <Box pt={2} justifyItems={"center"} width={"100%"}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="sans-serif"
            fontWeight={900}
            sx={{
              fontSize: 40,
              boxShadow: 10,

              borderRadius: 5,
              p: 2,
            }}
          >
            About me
          </Typography>
        </Box>
        <Box>{card("", information.About)}</Box>
        <Box>{card("Executive Summary", information.ExecutiveSummary)}</Box>

        <Box
          margin={2}
          sx={{
            border: 1,
            padding: 2,
            boxShadow: 10,
            borderColor: "secondary.main",
            borderRadius: 5,
            bgcolor: "white",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="sans-serif"
            fontWeight={900}
            sx={{
              fontSize: 20,
              p: 2,
            }}
          >
            Work history
          </Typography>
          <WorkTimeline />
        </Box>

        <Box>{card("Education", information.Education)}</Box>
      </Container>
    </Box>
  );
};

export default About;
