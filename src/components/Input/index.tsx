import { InputHTMLAttributes } from "react";
import { Container } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label?: string;
}

const Input = ({ label, placeholder, ...rest }: InputProps) => {
  return (
    <Container>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} {...rest} />
    </Container>
  );
};

export default Input;
