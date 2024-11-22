import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { SquareButton, Input } from '../components'
import useStoreUserData from '../hooks/useStoreUserData'
import useLogin from '../hooks/useLogin'
import constants from '../constants/constants'

const {
    LABELS: {
        LOGIN: { USUARIO, CONTRASENA, BTN_INGRESAR },
    },
} = constants

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login, isLoading } = useLogin()
    const { userData } = useStoreUserData()
    const handleOnChangeUser = (text) => setUsername(text)
    const handleOnChangePass = (text) => setPassword(text)

    const goToProductList = async () => {
        await login({ username, password })
        return userData
    }


    return (
        <View style={styles.container}>
            <Input
                title={USUARIO.title}
                placeholder={USUARIO.placeholder}
                value={username}
                onChangeText={handleOnChangeUser}
            />
            <Input
                title={CONTRASENA.title}
                placeholder={CONTRASENA.placeholder}
                value={password}
                onChangeText={handleOnChangePass}
                secureTextEntry
            />
            <SquareButton
                title={isLoading ? BTN_INGRESAR.loading : BTN_INGRESAR.title}
                onPress={goToProductList}
                style={styles.btn}
            />
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    btn: {
        marginTop: 20,
        width: '50%',
        height: 40,
    },
})
