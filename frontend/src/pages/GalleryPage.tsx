import React from "react";
import FileCard from "../components/FileCard";

const mockFiles = [
  { name: "foto1.jpg", date: "2025-08-28" },
  { name: "video.mp4", date: "2025-08-20" },
  { name: "document.pdf", date: "2025-08-15" },
];

export default function GalleryPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Galeria</h1>
      {mockFiles.map((f, i) => (
        <FileCard key={i} file={f} />
      ))}
    </div>
  );
}
