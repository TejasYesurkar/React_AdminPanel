import React, { useState } from "react";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grouplist from './groupadd';
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import  GroupAdd  from "./grouplist";
import  Inventoryadd  from "./inventoryadd";
import Storeadd from "./companyadd";
import  Customerlist from "./customerlist";
import  Viewinventory from "./viewinventory";
import Approvalproduct from "./approvalproduct";
import Feedback from "./feedback";
import { Redirect  } from 'react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
const [fragment, setFragment] = useState("INVADD")
const loadFragment = () =>{
  
  switch(fragment){
    case "GROUP":
    return <Grouplist />
    case "GROUPV":
      return <GroupAdd />
      case "CUSTADD":
        return <Storeadd />
    case "INVADD":
      return <Inventoryadd />
    case "VIEWINV":
      return <Viewinventory />
    case "CUSTV":
      return <Customerlist />
    case "APPRV":
       return <Approvalproduct />
       case "FEEDBACK":
       return <Feedback />
      case "LOGOUT":
        
        return  <Redirect to="/login" />
    default:
      break;
  }
}

const [opend, setOpenG] = useState(false)

function handleClick() {
  setOpenG(!opend)
}

const [openI, setOpenI] = useState(false)

function handleClickI() {
  setOpenI(!openI)
}
const [openS, setOpenS] = useState(false)

function handleClickS() {
  setOpenS(!openS)
}


  return (
    <div className={classes.root} >
      <CssBaseline  />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{backgroundColor: "#EC3136"}}>
          <IconButton
            style={{color:"#fff"}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            DagduTeli Retail
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
      
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}  style={{backgroundColor: "#006CB5",color:"#fff"}}>
        <img src="http://dagduteli.com/images/logo.png" style={{ height:"60px",width:"200px" }}/>
          <IconButton onClick={handleDrawerClose} style={{color:"#fff"}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List  style={{backgroundColor: "#006CB5",color:"#fff",height:"100%"}}>
            
        
        <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon} style={{ color:"#fff"  }}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Group" />
        {opend ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={opend} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem} onClick={e=>setFragment("GROUP")}>
            <ListItemText inset primary="Add" />
          </ListItem>
          <ListItem button className={classes.menuItem}  onClick={e=>setFragment("GROUPV")}>
            <ListItemText inset primary="View" />
          </ListItem>
        </List>
      </Collapse>


          
        
      <ListItem button onClick={handleClickI} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon} style={{ color:"#fff"  }}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
        {openI ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={openI} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem} onClick={e=>setFragment("INVADD")}>
            <ListItemText inset primary="Add" />
          </ListItem>
          <ListItem button className={classes.menuItem}  onClick={e=>setFragment("VIEWINV")}>
            <ListItemText inset primary="View" />
          </ListItem>
          <ListItem button className={classes.menuItem}  onClick={e=>setFragment("APPRV")}>
            <ListItemText inset primary="Approve" />
          </ListItem>
        </List>
      </Collapse>

          
        
      <ListItem button onClick={handleClickS} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon} style={{ color:"#fff"  }}>
          <IconLibraryBooks />
        </ListItemIcon>
        <ListItemText primary="Customer" />
        {openS ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>
      <Collapse in={openS} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          <ListItem button className={classes.menuItem} onClick={e=>setFragment("CUSTADD")}>
            <ListItemText inset primary="Add" />
          </ListItem>
          <ListItem button className={classes.menuItem}  onClick={e=>setFragment("CUSTV")}>
            <ListItemText inset primary="View" />
          </ListItem>
         
        </List>
      </Collapse>

      <ListItem button onClick={e=>setFragment("FEEDBACK")} >
            <ListItemIcon className={classes.menuItemIcon} style={{ color:"#fff"  }}>
              <IconLibraryBooks />
            </ListItemIcon>
              {/* <ListItemIcon  style={{color:"#fff"}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary="Feedback" />
            </ListItem>    
        
      <ListItem button onClick={e=>setFragment("LOGOUT")} >
            <ListItemIcon className={classes.menuItemIcon} style={{ color:"#fff"  }}>
              <IconLibraryBooks />
            </ListItemIcon>
              {/* <ListItemIcon  style={{color:"#fff"}}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary="Log-out" />
            </ListItem>
        </List>


        <Divider />



        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <main
      
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {loadFragment()}
      </main>
    </div>
  );
}