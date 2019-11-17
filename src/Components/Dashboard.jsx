import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "50px",
    padding: theme.spacing(3, 2)
  },
  flex: {
    display: "flex"
  },
  topicsWindow: {
    width: "30%",
    height: "300px",
    borderRight: "1px solid grey"
  },
  chatWindow: {
    width: "70%",
    height: "300px"
  },
  chatBox: {
    width: "85%"
  },
  button: {
    width: "15%"
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="h3" component="h3">
        mini-messaging
      </Typography>
      <Typography variant="h5" component="h5">
        topic placeholder...
      </Typography>
      <div className={classes.flex}>
        <div className={classes.topicsWindow}>
          <List>
            {["javaScript"].map(topic => (
              <ListItem key={topic} button>
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
        </div>
        <div className={classes.chatWindow}>
          {[{ from: "user", msg: "hello" }].map((chat, idx) => (
            <div key={idx} className={classes.flex}>
              <Chip label="Basic Chip" className={classes.chip} />
            </div>
          ))}
        </div>
      </div>
      <div className={classes.flex}></div>
    </Paper>
  );
};

export default Dashboard;
