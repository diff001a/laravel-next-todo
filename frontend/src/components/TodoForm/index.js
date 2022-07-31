import Wrapper from './style';
import Form from '../Form';
import { TextField, Button, Paper } from '@mui/material';

const TweetForm = ({ value, setValue, onSubmit, ...props }) => {
  return (
    <Wrapper {...props}>
      <Paper className="paper">
        <Form onSubmit={onSubmit} className="flex form">
          <TextField
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
            label="Tweet"
            margin="normal"
            className="input"
          />
          <Button type="submit" className="button">
            SUBMIT
          </Button>
        </Form>
      </Paper>
    </Wrapper>
  );
};

export default TweetForm;
