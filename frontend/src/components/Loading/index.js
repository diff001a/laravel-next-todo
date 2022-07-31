import { CircularProgress } from '@mui/material';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
`;

const Loading = ({ loading = false, className, ...props }) => {
  if (loading) {
    return (
      <Wrapper className={`${className}`} {...props}>
        <CircularProgress />
      </Wrapper>
    );
  } else {
    return <></>;
  }
};

export default Loading;
