import { create } from 'zustand';

const useStoreUserData = create((set) => ({
    userData: {},
    setUserData: (userData) => set({ userData }),
    clearUserData: () => set({ userData: {} }),
}));

export default useStoreUserData;