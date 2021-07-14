import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const styles = StyleSheet.create({
    root: {
        flex: 1,
        height: h * 0.95,
        alignItems: 'center',

    },
    contentContainer: {
        width: w,
        height: h * 0.75,
        padding: 10,
        alignItems: 'center',
    },
    delivery: {
        fontSize: 13,
        fontWeight: 'bold'
    },
    notification: {
        width: w * 0.75,
        height: h * 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: h * 0.08,
        backgroundColor: '#D3F2FF',
        borderRadius: 10

    },
    totalContainer: {
        width: w * 0.85,
        marginVertical: 30,
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
        alignItems: 'center',
    }
});
export default styles
