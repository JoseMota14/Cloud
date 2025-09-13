import { create } from "zustand";

// 🔹 Tipos
export interface FileItem {
  id: string;
  name: string;
  date: string;
  type: string; // "image" | "video" | "doc" | etc.
  size?: number;
}

interface FileStore {
  files: FileItem[];
  addFile: (file: FileItem) => void;
  removeFile: (id: string) => void;
  setFiles: (files: FileItem[]) => void;
}

// 🔹 Store Zustand
export const useFileStore = create<FileStore>((set) => ({
  files: [],

  addFile: (file) =>
    set((state) => ({
      files: [...state.files, file],
    })),

  removeFile: (id) =>
    set((state) => ({
      files: state.files.filter((f) => f.id !== id),
    })),

  setFiles: (files) => set(() => ({ files })),
}));
