import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const styles = StyleSheet.create({
    ShippingInfoCon: {
        marginVertical: 5,
        width: w * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    ShippingInfo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    dataContainer: {
        width: w * 0.9,
        height: h * 0.23,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginVertical: 15,
        marginHorizontal: 15,
        justifyContent: 'center',
        borderRadius: 10,
    },
    nameContainer: {
        width: w * 0.9,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        justifyContent: 'center',
    },
    name: {
        width: w * 0.6,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,

    },
    address: {
        width: w * 0.6,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 18,

    },
    phone: {
        width: w * 0.6,
        marginHorizontal: 20,
        fontWeight: 'bold',
        fontSize: 20,

    },
    payMethodCon: {
        justifyContent: 'center',
        width: w * 0.9,
        height: 20,
        marginVertical: 15,
    },
    payMethod: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardsContainer: {
        width: w * 0.9,
        height: h * 0.25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 10
    },
    totalContainer: {
        width: w * 0.85,
        marginVertical: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    total: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#5956E9'
    },
    buttonContainer: {
        width: w * 0.8,
    }
})

export default styles
