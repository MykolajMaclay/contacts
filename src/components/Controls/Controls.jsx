import { InputField } from "../Input/InputField";
import { Wrapper, Name, Button } from "./Controls.styled";

export const Controls = () => {
  return (
    <Wrapper>
      <Name>Name:</Name>
      <InputField />
      <Button>Add</Button>
    </Wrapper>
  );
};