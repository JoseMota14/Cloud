import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import UploadBox from "../components/UploadBox";
import { useFileStore } from "../store/useFileStore";

export default function UploadPage() {
  const addFile = useFileStore((state) => state.addFile);
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return;
    addFile(file);
    setFile(null);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => e.target.files && setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
}
