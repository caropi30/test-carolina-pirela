import { useMutation } from '@tanstack/react-query'
import { useNavigation } from '@react-navigation/native'
import postUserData from '../services/postUserData'
import useStoreUserData from './useStoreUserData'
import routes from '../navigation/routes'
import useProducts from './useProducts'

const useLogin = () => {
    const { setUserData } = useStoreUserData()
    const { getProductList } = useProducts()
    const navigation = useNavigation()

    const handleSuccess = (data) => {
        setUserData(data)
        getProductList()
        navigation.navigate(routes.PRODUCT_LIST)
    }

    const handleError = (error) => {
        if (error) {
            navigation.navigate(routes.ERROR)
        }
    }

    const { mutate, isLoading, data, isSuccess, error } = useMutation({
        mutationFn: postUserData,
        onSuccess: handleSuccess,
        onError: handleError,
    })

    const login = async (data) => {
        const token = await mutate(data)

        if (token) {
            handleSuccess(toke)
        }

        if (error) {
            handleError(error)
        }
    }

    return {
        login,
        data,
        isLoading,
        isSuccess,
    }
}

export default useLogin
