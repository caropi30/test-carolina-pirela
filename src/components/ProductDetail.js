import { View, Text, Image, StyleSheet } from 'react-native'

const ProductDetail = ({ item }) => (
    <View>
        <Image
            style={styles.image}
            source={{
                uri: item.image,
            }}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>$ {item.price}</Text>
    </View>
)

export default ProductDetail

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        marginVertical: 10,
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
    },
})
