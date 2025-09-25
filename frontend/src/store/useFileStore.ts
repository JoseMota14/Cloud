import { create } from "zustand";
import { getFiles, uploadFile } from "../api";

interface FileData {
  id: string;
  name: string;
  type: string;
  size: number;
  path: string;
  createdAt: string;
}

interface FileStore {
  files: FileData[];
  loading: boolean;
  error?: string;
  fetchFiles: () => Promise<void>;
  addFile: (file: File) => Promise<void>;
}

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  loading: false,
  fetchFiles: async () => {
    set({ loading: true, error: undefined });
    try {
      const files = await getFiles();
      set({ files });
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
  addFile: async (file: File) => {
    set({ loading: true, error: undefined });
    try {
      const newFile = await uploadFile(file);
      set((state) => ({ files: [newFile, ...state.files] }));
    } catch (e: any) {
      set({ error: e.message });
    } finally {
      set({ loading: false });
    }
  },
}));
