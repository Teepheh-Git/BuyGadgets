import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        width: w ,
        height: h * 0.98,
        backgroundColor:'#e5e5e5'

    },
    myProfileCon: {
        marginBottom: 15,
        width: w * 0.8,
        height: h * 0.085,
        justifyContent: "center"

    },
    myProfile: {
        fontWeight: 'bold',
        fontSize: 45,
    },
    dataContainer: {
        width: w * 0.85,
        height: h * 0.23,
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
        marginVertical: 15,
    },
    address: {
        width: w * 0.6,
        fontSize: 22,
        fontWeight: 'normal',
        textAlign: "center",
        marginHorizontal: 10,
        marginVertical: 5,
    }
});
export default styles
