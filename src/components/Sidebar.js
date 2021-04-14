


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';


import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import mysiteLogo from "./Mysite.png";
import ProjectIcon from "./project.png";
import BusinessIcon from "./business.png";

import {Link} from "react-router-dom";
import Safety from "./safty.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  drawer: {

    width: drawerWidth,
    flexShrink: 0,
      
  },

  Access : {

position:'absolute',
width: "7px",
height: "48px",
// left: "9px",
top: "172px",

/* secondary 3 */

background: "#673AB7",
  }, 


  }));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        
        <Link to="/"><h2><img src={mysiteLogo} alt="logo"></img></h2></Link>
        <Divider />
        <List>
          {['Projects', 'Organisation Profile'].map((text, index) => (
            <ListItem button key={text}>
             
                 <ListItemIcon>{index === 0 ?<img src={ProjectIcon} Alt="logo" /> : <img src={BusinessIcon} Alt="logo"/> }</ListItemIcon>


              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
         <div className={classes.Access}></div>
        <List >
          {['Access Control'].map((text, index) => (
            
            <ListItem  button key={text}>
             
                 <ListItemIcon>{index === 0 ?  <img src={Safety} alt="logo"/>  : null }</ListItemIcon>


              <ListItemText primary={text} />
            </ListItem>
            
          ))}
        </List>
        
        
         
      </Drawer>
      
    </div>
  );
}

