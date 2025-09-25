import React, { useEffect } from "react";
import FileCard from "../components/FileCard";
import { useFileStore } from "../store/useFileStore";
import Card from "../components/Card";
import styled from "styled-components";

const CardGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* default mobile: 1 column */
  gap: 16px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* desktop: 2 columns */
  }
`;

export default function GalleryPage() {
  const { files, fetchFiles, loading } = useFileStore();

  useEffect(() => {
    fetchFiles();
  }, [fetchFiles]);

  if (loading) return <p>Loading...</p>;

  return (
    <CardGallery>
      {files.map((file) => (
        <Card
          key={file.id}
          name={file.name}
          createdAt={file.createdAt}
          type={"pdf"}
        />
      ))}
    </CardGallery>
  );
}
