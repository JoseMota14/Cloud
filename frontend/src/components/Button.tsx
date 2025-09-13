import styled from "styled-components";

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.muted};
    cursor: not-allowed;
  }
`;

export default Button;
