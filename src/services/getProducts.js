
const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');

    if (!response.ok) {
        throw new Error('Problemas de error')
    }
    return response.json();
};

export default getProducts;