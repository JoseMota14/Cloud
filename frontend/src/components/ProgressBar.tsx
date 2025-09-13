import styled from "styled-components";

export const ProgressBar = styled.div<{ progress: number }>`
  width: 100%;
  height: 10px;
  background: ${({ theme }) => theme.colors.muted}33;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: ${({ theme }) => theme.spacing(2)};
  overflow: hidden;

  &::after {
    content: "";
    display: block;
    height: 100%;
    width: ${({ progress }) => progress}%;
    background: ${({ theme }) => theme.colors.primary};
    transition: width 0.3s ease;
  }
`;
