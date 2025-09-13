import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const Nav = styled.nav`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Links = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};
`;

type Props = {
  onToggleTheme: () => void;
  currentTheme: "light" | "dark";
};

export default function Navbar({ onToggleTheme, currentTheme }: Props) {
  return (
    <Nav>
      <Links>
        <Link to="/upload">Upload</Link>
        <Link to="/gallery">Galeria</Link>
      </Links>
      <ThemeToggle onToggle={onToggleTheme} currentTheme={currentTheme} />
    </Nav>
  );
}
