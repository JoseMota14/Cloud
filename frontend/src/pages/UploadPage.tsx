import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import UploadBox from "../components/UploadBox";
import { useFileStore } from "../store/useFileStore";
import styled from "styled-components";

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px dashed ${({ theme }) => theme.colors.text};
  border-radius: 12px;
  padding: 2rem;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.background};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}22;
  }
`;

export const UploadIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const UploadText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const UploadButton = styled.button`
  margin-top: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`;
export default function UploadPage() {
  const addFile = useFileStore((state) => state.addFile);
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      Array.from(e.target.files).forEach((file) => addFile(file));
    }
  };

  const handleUpload = () => {
    if (!file) return;
    addFile(file);
    setFile(null);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <UploadContainer>
        <UploadIcon>☁️⬆️</UploadIcon>
        <UploadText>Drag and drop your file here</UploadText>
        <UploadButton>
          <label style={{ cursor: "pointer" }}>
            Browse files
            <input
              type="file"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </label>
        </UploadButton>
      </UploadContainer>
    </div>
  );
}
