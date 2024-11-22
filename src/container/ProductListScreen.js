import React from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ProductListItem } from '../components'
import useProducts from '../hooks/useProducts'
import useStoreProductList from '../hooks/useStoreProductList'

const ProductList = () => {
    const { isLoading } = useProducts()
    const { productList } = useStoreProductList()
    const navigation = useNavigation()

    const goToPdp = (item) => navigation.navigate('ProductDetail', { item })

    const renderItem = ({ item }) => (
        <ProductListItem item={item} onPress={() => goToPdp(item)} />
    )

    const renderEmptyComponent = () => <Text>No hay productos disponibles</Text>

    return (
        <View style={styles.container}>
            {!isLoading ? (
                <FlatList
                    data={productList}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    ListEmptyComponent={renderEmptyComponent}
                />
            ) : (
                <Text>Cargando productos...</Text>
            )}
        </View>
    )
}

export default ProductList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
