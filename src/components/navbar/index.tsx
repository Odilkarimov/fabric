import Logo from "../../assets/logo.png";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
type Anchor = "top" | "left" | "bottom" | "right";
import MenuIcon from "../../assets/menu.png";
import Clos from "../../assets/close.png";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
const Navbar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <div className="mt-[10px]">
        <div className="flex items-start justify-end px-[10px] cursor-pointer"><img width={30} src={Clos} alt="" /></div>
          <ul className="flex items-center gap-[20px] flex-col">
            <NavLink to={"/"}>
            <li className="font-bold">Uy</li> 
            </NavLink>
            <NavLink to={"/shop"}>
            <li className="font-bold">To'plam</li>
            </NavLink>
            <NavLink to={"/about"}>
            <li className="font-bold">Biz haqimizda</li>
            </NavLink>
            <NavLink to={"/contact"}>
            <li className="font-bold">kontanktlar</li>
            </NavLink>
          </ul>
        </div>
      </List>
    </Box>
  );

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="container-box flex items-center justify-between gap-[30px] py-[20px]">
      <div className="flex gap-[20px]">
        <div>
          <img
            className="cursor-pointer"
            onClick={() => navigate("/")}
            width={133}
            src={Logo}
            alt="icon"
          />
        </div>
        <div>
          <ul className="flex items-center gap-[40px] max-md:hidden">
            <NavLink to={"/"}>
            <li>Uy</li> 
            </NavLink>
            <NavLink to={"/shop"}>
            <li>To'plam</li>
            </NavLink>
            <NavLink to={"/about"}>
            <li>Biz haqimizda</li>
            </NavLink>
            <NavLink to={"/contact"}>
            <li>kontanktlar</li>
            </NavLink>
          </ul>
        </div>
      </div>

      <div className="hidden">
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor} </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="flex gap-[20px] items-center">
        <button
          className="border border-black px-[5px] rounded-md h-[30px]"
          onClick={handleClick}
        >
          o'zbekcha
        </button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            "aria-labelledby": "demo-customized-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            o'zbekcha
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            Русскый
          </MenuItem>
        </StyledMenu>
      <div>
        <img src={MenuIcon} alt="" onClick={toggleDrawer("right", true)}  className="cursor-pointer w-[40px] h-[40px] hidden max-lg:block" />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
