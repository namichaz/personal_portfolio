import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const pages = ["profile", "skills"];

function Header() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSelectMenu = (event: React.MouseEvent<HTMLElement>) => {
    const path = event.currentTarget.textContent;
    console.log(path);

    navigate(`/${path}`);
  };
  const handleSelectMenu2 = (event: React.MouseEvent<HTMLElement>) => {
    const path = event.currentTarget.textContent;
    navigate(`/${path}`);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "lightgray",
        borderBottom: "0.1rem solid",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <motion.div whileHover={{ scale: 1.3 }}>
            <ContentCutIcon
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                  color: "#FFFF9E",
                },
                mr: 1,
              }}
            />
          </motion.div>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/personal_portfolio/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#FFFF9E",
              textDecoration: "none",
            }}
          >
            Tatsuya Namikawa
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleSelectMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <ContentCutIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/personal_portfolio/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Tatsuya's HP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleSelectMenu2}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
