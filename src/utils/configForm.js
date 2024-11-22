import * as Yup from 'yup'

const configForm = (isDependiente, defaultValues, identificador) => {
    const { username, password } = defaultValues
    return {
        initialValues: {
            username,
            password,
        },
        validationSchema: Yup.object().shape({
            username: Yup.string()
                .required('Debe ingresar un nombre de usuario')
                .length(8, 'El nombre de usuario debe tener 8 caracteres')
                .ensure()
                .lowercase()
            password: Yup.string().required('Debe ingresar una contraseña'),
        }),
    }
}

export default configForm
