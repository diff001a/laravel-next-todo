import { useRef } from 'react';

const Form = ({ children, onSubmit, className, ...props }) => {
  const processing = useRef(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (processing.current) return;
    processing.current = true;
    onSubmit(e);
    setTimeout(() => {
      processing.current = false;
    }, 2000);
  };
  return (
    <form onSubmit={handleSubmit} className={className} {...props}>
      {children}
    </form>
  );
};

export default Form;
