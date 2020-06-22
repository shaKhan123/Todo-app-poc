import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import TodoForm from "./TodoForm";

import TodoList from "./TodoList";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { CLEAR_TODO } from "../actions/actions";
import { DispatchContext } from "../contexts/todos.context";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    maxWidth: 850,
    padding: 50,
    paddingBottom: 0,
  },
  card: {
    minHeight: 300,
  },
  title: {
    fontSize: 14,
  },
  form: {
    paddingLeft: 6,
  },
  btn: {
    backgroundColor: "black",
    color: "white",
    marginTop: theme.spacing(2),
  },
}));

export default function OutlinedCard() {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Grid container className={classes.container} spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card className={classes.card} elevation={0}>
              <Box
                display="flex"
                height={300}
                alignItems="center"
                justifyContent="center"
              >
                <CardContent>
                  <Typography variant="h5" component="h2" align="left">
                    KHALON
                  </Typography>
                  <Typography variant="body2" component="p" align="left">
                    We create cutting edge tech for human collaboration
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} alignItems="center">
            <Card className={classes.card} variant="outlined">
              <CardContent className={classes.actions}>
                <Typography variant="h5" component="h2">
                  Task List
                </Typography>
                <Button
                  size="small"
                  className={classes.btn}
                  edge="end"
                  onClick={() => dispatch({ type: CLEAR_TODO})}
                >
                  Clear
                </Button>
                <TodoList />
              </CardContent>
              <CardActions className={classes.actions}>
                <TodoForm className={classes.form} />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
