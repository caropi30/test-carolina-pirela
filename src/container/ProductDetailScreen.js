import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SquareButton, ProductDetail } from '../components'

const ProductDetailScreen = () => {
    const { goBack } = useNavigation()
    const route = useRoute()
    const { item } = route.params

    return (
        <View style={styles.container}>
            <ProductDetail item={item} />
            <SquareButton title="Volver" onPress={goBack} />
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
})
