import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
  position: sticky;
  top: -5px;
  z-index: 9999;
  .paper {
    padding: 5px 10px 10px 10px;
  }
  .form {
    width: 350px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    .input {
      width: 250px;
      margin-right: 10px;
    }
    .button {
      margin-top: 7px;
      width: 110px;
    }
  }
`;

export default Wrapper;
