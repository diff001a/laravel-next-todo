import { useState } from 'react';
import AppLayout from '@/components/Layouts/AppLayout';
import Meta from '@/components/Layouts/Meta';

import { useTodo } from '@/hooks/todo';
import { useAuth } from '@/hooks/auth';
import Loading from '@/components/Loading';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';

export default function Home() {
  const { user } = useAuth({
    middleware: 'auth',
  });
  const { todos, post, check, remove } = useTodo({ user_id: user?.id });

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [errors, setErrors] = useState([]);

  const onSubmit = async event => {
    if (value !== '') {
      setLoading(true);
      await post({ content: value });
      setValue('');
      setLoading(false);
    }
  };

  const handleCheck = async id => {
    setLoading(true);
    await check({ id });
    setLoading(false);
  };

  const handleRemove = async id => {
    setLoading(true);
    await remove({ id });
    setLoading(false);
  };

  if (user) {
    return (
      <AppLayout loading={loading}>
        <Meta />
        <TodoForm
          id={user?.id}
          onSubmit={onSubmit}
          value={value}
          setValue={setValue}
        />
        <TodoList
          todos={todos}
          handleCheck={handleCheck}
          handleRemove={handleRemove}
        />
      </AppLayout>
    );
  }
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Loading />
    </div>
  );
}
