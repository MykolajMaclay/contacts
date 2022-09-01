import { Input } from "./InputField.styled";

export const InputField = () => {
  return (
    <Input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    />
  );
};