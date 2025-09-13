import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import UploadBox from "../components/UploadBox";

export default function UploadPage() {
  const [progress, setProgress] = useState(0);

  const handleUpload = (files: FileList) => {
    // Simula progresso
    let fakeProgress = 0;
    const interval = setInterval(() => {
      fakeProgress += 10;
      setProgress(fakeProgress);
      if (fakeProgress >= 100) clearInterval(interval);
    }, 200);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Upload</h1>
      <UploadBox onUpload={handleUpload} />
      {progress > 0 && <ProgressBar progress={progress} />}
    </div>
  );
}
