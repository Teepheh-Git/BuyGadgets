import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    myProfileCon: {
        marginVertical: 30,
        width: w * 0.8,
        height: h * 0.085,
        justifyContent: "center"

    },
    myProfile: {
        fontWeight: 'bold',
        fontSize: 45,
    },
    dataContainer: {
        width: w * 0.9,
        height: h * 0.25,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
    },
    image: {
        height: h * 0.1,
        width: w * 0.2,
        borderRadius: w * 0.8,
        resizeMode: "contain",
        marginTop: -30

    },
    text: {
        marginVertical: 15,
        fontSize: 24,
        fontWeight: 'bold',
    },

    addressCon: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    buttonContainer: {
        marginVertical: 25,
    },
    address: {
        width: w * 0.6,
        fontSize: 28,
        fontWeight: 'normal',
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical: 5,
    }
});
export default styles
