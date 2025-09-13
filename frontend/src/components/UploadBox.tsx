import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

const DropArea = styled.div<{ isDragging: boolean }>`
  border: 2px dashed ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing(4)};
  text-align: center;
  background: ${({ isDragging, theme }) =>
    isDragging ? theme.colors.surface : "transparent"};
  transition: background 0.2s ease;
`;

type Props = {
  onUpload: (files: FileList) => void;
};

export default function UploadBox({ onUpload }: Props) {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files.length) {
      onUpload(e.dataTransfer.files);
    }
  };

  return (
    <DropArea
      isDragging={dragging}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <p>Arraste os ficheiros aqui ou escolha</p>
      <input
        type="file"
        multiple
        onChange={(e) => e.target.files && onUpload(e.target.files)}
        style={{ display: "none" }}
        id="file-input"
      />
      <label htmlFor="file-input">
        <Button>Selecionar ficheiros</Button>
      </label>
    </DropArea>
  );
}
