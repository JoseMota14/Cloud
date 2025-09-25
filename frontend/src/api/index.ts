const API_BASE_URL = "http://localhost:5000/api"; // ou o host do container em prod

interface FileData {
  id: string;
  name: string;
  type: string;
  size: number;
  path: string;
  createdAt: string;
}

export async function getFiles(): Promise<FileData[]> {
  const res = await fetch(`${API_BASE_URL}/files`);
  if (!res.ok) throw new Error("Failed to fetch files");
  return res.json();
}

export async function uploadFile(file: File): Promise<FileData> {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE_URL}/files/upload`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Failed to upload file");
  return res.json();
}
