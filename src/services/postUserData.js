import Config from 'react-native-config';

const postUserData = async (data) => {
    const response = await fetch(`https://fakestoreapi.com/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    return response.json()
};

export default postUserData;