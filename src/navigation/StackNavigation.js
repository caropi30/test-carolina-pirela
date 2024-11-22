import {
    LoginScreen,
    ProductDetailScreen,
    ProductListScreen,
    ErrorScreen,
} from '../container'
import routes from './routes'

export const onPressHeaderBackButton = (navigation) => () => {
    navigation.goBack()
}

const headerShown = {
    headerShown: false,
}

const StackMiPerfil = [
    {
        name: routes.LOGIN,
        component: LoginScreen,
        options: headerShown,
    },
    {
        name: routes.PRODUCT_LIST,
        component: ProductListScreen,
    },
    {
        name: routes.PRODUCT_DETAIL,
        component: ProductDetailScreen,
    },
     {
        name: routes.ERROR,
        component: ErrorScreen,
        options: headerShown,
    },
]

export default StackMiPerfil
