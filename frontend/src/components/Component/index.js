import Wrapper from './style';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, ...props }) => {
  return (
    <Wrapper {...props}>
      {todos?.map((todo, key) => {
        return (
          <li key={key} className="flex center">
            <span
              onClick={() => handleCheck(todo.id)}
              className={`${todo.check ? 'checked' : ''}`}>
              {todo.content}
            </span>
            <DeleteIcon
              className="delete-icon"
              onClick={() => handleRemove(todo.id)}
            />
          </li>
        );
      })}
    </Wrapper>
  );
};

export default TodoList;
