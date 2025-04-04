import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const BigScreen = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ gap: 2, display: { xs: "none", sm: "flex" } }}
        >
          <Button
            disableRipple
            sx={{ "&:hover": { bgcolor: "transparent" } }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography
              variant="h6"
              color="primary"
              fontFamily="sans-serif"
              fontWeight={900}
            >
              {" ADEL S."}
            </Typography>
          </Button>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="right"
          gap={2}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/projects");
            }}
            sx={{ textTransform: "none" }}
          >
            Projects
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/about");
            }}
            sx={{ textTransform: "none" }}
          >
            About
          </Button>
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/contact");
            }}
            sx={{ textTransform: "none" }}
          >
            Contact
          </Button>
        </Box>
      </>
    );
  };
  const SmallScreen = () => {
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          sx={{ gap: 2, display: { xs: "flex", sm: "none" } }}
        >
          <Button
            disableRipple
            sx={{ "&:hover": { bgcolor: "transparent" } }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography variant="h6" color="primary">
              {"A=>"}
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <MenuIcon color="primary" onClick={() => setOpen(true)} />
        </Box>
      </>
    );
  };
  return (
    <AppBar
      position="sticky"
      color="default"
      sx={{ bgcolor: "rgba(0 ,0, 0,0.9)" }}
    >
      <Toolbar>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <BigScreen />
          <SmallScreen />
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        <MenuItem
          onClick={() => {
            navigate("/projects");
            setOpen(false);
          }}
        >
          Projects
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/about");
            setOpen(false);
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            navigate("/contact");
            setOpen(false);
          }}
        >
          Contact
        </MenuItem>
      </Menu>
    </AppBar>
  );
}
export default Navbar;
