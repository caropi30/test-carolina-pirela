import { useQuery } from '@tanstack/react-query'
import getProducts from '../services/getProducts'
import useStoreProductList from './useStoreProductList'

const useProducts = () => {
    const { setProductList } = useStoreProductList()

    const handleSuccess = (data) => {
        setProductList(data)
    }

    const handleError = (error) => {
        throw new Error(error)
    }

    const { isFetching, data, refetch, error } = useQuery({
        queryFn: getProducts,
        queryKey: ['products'],
        fetchPolicy: 'no-cache',
        onSuccess: handleSuccess,
        onError: handleError,
    })

    const getProductList = async () => {
        const { productList: storeProducts } = useStoreProductList.getState();
        if (storeProducts.length) {
            handleSuccess(data)
            return
        }
        await refetch()
    };

    return {
        isLoading: isFetching,
        data,
        refetch,
        error,
        getProductList,
    }
}

export default useProducts
