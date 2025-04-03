import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const ProjectsSection = () => {
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
        Projects
      </Typography>

      <List>
        <ListItem>
          <ListItemText primary="X project" secondary="" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="S project" secondary="" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="A project" secondary="" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="G project" secondary="" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default ProjectsSection;
