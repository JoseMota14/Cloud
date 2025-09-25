import styled from "styled-components";

const CardDiv = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Preview = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
  }
`;

const FileName = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
`;

const FileDate = styled.small`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.surface};
`;

type CardProps = {
  name: string;
  createdAt: string;
  type: string;
  url?: string; // optional for previews
};

export default function Card({ name, createdAt, type, url }: CardProps) {
  const isImage = type.startsWith("image/");

  let fallback = "📄 File";
  if (type.startsWith("video/")) fallback = "🎥 Video";
  if (type === "application/pdf") fallback = "📕 PDF";

  return (
    <CardDiv>
      <Preview>
        {isImage && url ? (
          <img src={url} alt={name} />
        ) : (
          <span>{fallback}</span>
        )}
      </Preview>
      <FileName>{name}</FileName>
      <FileDate>{new Date(createdAt).toLocaleDateString()}</FileDate>
    </CardDiv>
  );
}
