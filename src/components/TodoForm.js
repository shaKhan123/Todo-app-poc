import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { DispatchContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";
import { ADD_TODO } from "../actions/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginLeft: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },

  btn: {
    backgroundColor: "black",
    color: "white",
    marginLeft: theme.spacing(1),
    fontSize: 21,
    fontWeight: "bold",
  },
}));

const TodoForm = () => {
  const classes = useStyles();
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, clearValue] = useInputState("");

  const handleOnClick = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, task: value });
    clearValue();
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="write a task ..."
        variant="outlined"
        value={value}
        onChange={handleChange}
      />
      <Button
        size="large"
        className={classes.btn}
        edge="end"
        onClick={handleOnClick}
        disabled={!value}
        style={{
          backgroundColor: !value ? "gray" : "black",
        }}
      >
        {" "}
        +{" "}
      </Button>
    </form>
  );
};

export default TodoForm;
