import useSWR from 'swr';
import axios from '@/lib/axios';

export const useTodo = ({ user_id }) => {
  const { data: todos, error, mutate } = useSWR(`api/todos/${user_id}`, () =>
    axios
      .get(`api/todos/${user_id}`)
      .then(res => res.data)
      .catch(() => []),
  );

  const csrf = () => axios.get('/sanctum/csrf-cookie');

  const post = async ({ content }) => {
    await csrf();
    return axios
      .post('/api/todo/post', { user_id: user_id, content: content })
      .then(() => mutate())
      .catch(error => {
        throw error;
      });
  };

  const remove = async ({ id }) => {
    await csrf();
    return axios
      .post('/api/todo/delete', { id })
      .then(() => mutate())
      .catch(error => {
        throw error;
      });
  };

  const check = async ({ id }) => {
    await csrf();
    return axios
      .post('/api/todo/check', { id })
      .then(() => mutate())
      .catch(error => {
        throw error;
      });
  };

  return { todos, post, remove, check };
};
