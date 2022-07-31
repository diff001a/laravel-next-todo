import styled from '@emotion/styled';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 370px;
  .links {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      margin-right: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default Wrapper;
