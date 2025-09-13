import styled from "styled-components";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

type FileProps = {
  file: {
    name: string;
    date: string;
  };
};

export default function FileCard({ file }: FileProps) {
  return (
    <Card>
      <p>
        <strong>{file.name}</strong>
      </p>
      <small>{file.date}</small>
    </Card>
  );
}
