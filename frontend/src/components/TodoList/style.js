import styled from '@emotion/styled';

const Wrapper = styled.ul`
  .paper {
    padding: 10px;
  }
  li {
    width: 350px;
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    align-items: center;
    border-bottom: 1px dashed var(--border);
    line-height: 1.4em;
    span,
    svg {
      cursor: pointer;
    }
    .todo-content {
      text-align: left;
      margin-right: 10px;
      padding: 5px 0;
      &.checked {
        text-decoration: line-through;
        color: var(--gray);
      }
    }
    .delete-icon {
      font-size: 20px;
    }
    &:last-child {
      border-bottom: none;
    }
  }
`;

export default Wrapper;
