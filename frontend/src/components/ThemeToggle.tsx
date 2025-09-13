import styled from "styled-components";

const ToggleButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  font-size: 0.9rem;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

type Props = {
  onToggle: () => void;
  currentTheme: "light" | "dark";
};

export default function ThemeToggle({ onToggle, currentTheme }: Props) {
  return (
    <ToggleButton onClick={onToggle}>
      {currentTheme === "light" ? "🌙 Dark" : "☀️ Light"}
    </ToggleButton>
  );
}
