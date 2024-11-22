import { create } from 'zustand';

const useStoreProductList = create((set) => ({
    productList: [],
    setProductList: (productList) => set({ productList }),
    clearProducts: () => set({ productList: [] }),
}));

export default useStoreProductList;