import styled from '@emotion/styled';

export const ErrorWrapper = styled.div`
  line-height: 1.4em;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  .message {
    margin-bottom: 10px;
  }
`;

const AuthValidationErrors = ({ errors = [], ...props }) => {
  if (errors.length !== 0) {
    return (
      <ErrorWrapper>
        {errors.length > 0 && (
          <div {...props}>
            <div className="message">Whoops! Something went wrong.</div>
            <ul>
              {errors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </ErrorWrapper>
    );
  } else {
    return <></>;
  }
};

export default AuthValidationErrors;
