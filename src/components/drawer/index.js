import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    name: "Comprar",
    icon: InboxIcon,
    nav: "/pedidos",
  },
  {
    id: 2,
    name: "Negociações",
    icon: ShoppingCartIcon,
    nav: "/produtos",
  },
  {
    id: 3,
    name: "Pedidos",
    icon: ShoppingBasketIcon,
    nav: "/usuarios",
  },
];

const drawerWidth = 280;

export default function MiniDrawer() {
  const classes = useStyles();
  // const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [expandMoreInfoUser, setExpandMoreInfoUser] = useState(false);

  const handleDrawerOpenClose = () => {
    setOpen(!open);
    setExpandMoreInfoUser(false);
  };

  const handleExpandUserInfo = () => {
    setExpandMoreInfoUser(!expandMoreInfoUser);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Typography component="div" className={classes.containToolbar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpenClose}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Bem vindo, Leandro
            </Typography>
          </Toolbar>
          <Typography variant="h6" noWrap>
            <div
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "15px",
                backgroundColor: "#bababa",
              }}
            />
          </Typography>
        </Typography>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <Typography
          component="div"
          className={classes.toolbar}
          style={{ height: open ? "100px" : "50px" }}
        >
          <Typography component="div" className={classes.company}>
            <Typography variant="h4">MINING</Typography>
          </Typography>
        </Typography>
        <Divider />
        <Typography
          component="div"
          className={classes.userConected}
          style={{ height: expandMoreInfoUser ? "20%" : "10%" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={open && handleExpandUserInfo}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: open ? "15px" : "0",
                }}
              >
                <div
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "15px",
                    marginRight: "5px",
                    backgroundColor: "#bababa",
                  }}
                />
                {open && <Typography variant="h6">Wesley Leandro</Typography>}
              </div>
              {open ? (
                expandMoreInfoUser ? (
                  <ExpandMoreIcon />
                ) : (
                  <ExpandLessIcon />
                )
              ) : null}
            </div>
            {open && expandMoreInfoUser && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "10%",
                  padding: "10%",
                  borderRadius: "5px",
                  backgroundColor: "rgba(211, 211, 211, .2)",
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontWeight: 400, fontSize: 14 }}
                >
                  Saldo: R$1800,00
                </Typography>
                <Typography
                  variant="h6"
                  style={{ fontWeight: 400, fontSize: 14, color: "#cc9900" }}
                >
                  Nível: 5
                </Typography>
              </div>
            )}
          </div>
        </Typography>
        <Divider />
        <List>
          {menu.map((item) => (
            <Link to={item.nav} className={classes.nav}>
              <ListItem button key={item.id}>
                <ListItemIcon>
                  <item.icon size="20" color="black" />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "#1e1e24",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    marginRight: 14,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  containToolbar: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "1%",
  },
  company: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  nav: {
    color: "inherit",
    textDecoration: "inherit",
  },
  userConected: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
  },
}));
