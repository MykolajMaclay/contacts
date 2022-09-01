import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h2`  
  // text-align: center;
  margin: 0 0 15px 0;

  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 700;
  font-size: 24px;
`;

export const Button = styled.button`
  width: 125px;
  height: 44px;
  padding: 12px 15px;
  text-align: center;
  
  font-family: ${props => `${props.theme.fontFamily}, sans-serif`};
  font-weight: 600;
  font-size: 20px;

  color: #FFFFFF;
  background-color: #2E86C1;
  border-radius: 5px;
  border: 0px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #2E86C1;
    background-color: #FFFFFF;
    border: 2px solid #2E86C1;
  }
`;