import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { FAFSAApplication } from '../types/fafsa';

interface User {
  id: string;
  role: 'student' | 'reviewer' | 'approver';
}

interface Store {
  applications: FAFSAApplication[];
  currentUser: User | null;
  addApplication: (application: FAFSAApplication) => void;
  updateApplication: (id: string, updates: Partial<FAFSAApplication>) => void;
  setCurrentUser: (user: User | null) => void;
  logout: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set) => ({
      applications: [],
      currentUser: null,
      addApplication: (application) =>
        set((state) => ({
          applications: [...state.applications, application],
        })),
      updateApplication: (id, updates) =>
        set((state) => ({
          applications: state.applications.map((app) =>
            app.id === id ? { ...app, ...updates } : app
          ),
        })),
      setCurrentUser: (user) => set({ currentUser: user }),
      logout: () => set({ currentUser: null }),
    }),
    {
      name: 'fafsa-storage',
    }
  )
);