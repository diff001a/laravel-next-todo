import Wrapper from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Paper } from '@mui/material';

const TodoList = ({ todos, handleCheck, handleRemove, ...props }) => {
  if (!todos || todos.length === 0) {
    return <></>;
  }
  return (
    <Wrapper {...props}>
      <Paper className="paper">
        <ul>
          {todos?.map((todo, key) => {
            return (
              <li key={key}>
                <span
                  onClick={() => handleCheck(todo.id)}
                  className={`${todo.check ? 'checked' : ''} todo-content`}>
                  {todo.content}
                </span>
                <IconButton
                  type="button"
                  color="primary"
                  component="label"
                  onClick={() => handleRemove(todo.id)}>
                  <DeleteIcon className="delete-icon" />
                </IconButton>
              </li>
            );
          })}
        </ul>
      </Paper>
    </Wrapper>
  );
};

export default TodoList;
