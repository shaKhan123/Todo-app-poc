import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

import { DispatchContext, TodosContext } from "../contexts/todos.context";
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
  const todos = useContext(TodosContext);
  const [taskLimit, setTaskLimit] = useState(false);
  const [value, error, handleChange, clearValue] = useInputState("");

  const handleOnClick = (e) => {
    if (todos.length > 3) {
      setTaskLimit(true);
      return;
    }
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
        disabled={taskLimit || error || !value}
        style={{
          backgroundColor: taskLimit || error || !value ? "gray" : "black",
        }}
      >
        {" "}
        +{" "}
      </Button>
      {error && (
        <Alert severity="error">Can't add more than 30 characters!</Alert>
      )}
      {taskLimit && (
        <Alert severity="error">Can't add more thn 4 tasks <br/> Too much work is bad for health! </Alert>
      )}
    </form>
  );
};

export default TodoForm;
