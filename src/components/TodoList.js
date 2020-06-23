import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";

import { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";
import { TOGGLE_TODO, REMOVE_TODO } from "../actions/actions";

import { DispatchContext } from "../contexts/todos.context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const TodoList = () => {
  const todos = useContext(TodosContext);
  const dispatch = useContext(DispatchContext);

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    dispatch({ type: TOGGLE_TODO, value });
  };

  return (
    <List className={classes.root}>
      {(todos || []).map((todo, index) => {
        const id = todo.id;
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={id}
            role={undefined}
            dense
            button
            onClick={handleToggle(id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(id) !== -1}
                style={{
                  textDecoration: todo.completed ? "line-through" : "",
                }}
                onClick={() => dispatch({ type: TOGGLE_TODO, id })}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={todo.task}
              style={{
                textDecoration: todo.completed ? "line-through" : "",
                color: todo.completed ? "#bdc3c7" : "#34495e",
              }}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: REMOVE_TODO, id });
                }}
              >
                <ClearIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
};

export default TodoList;
