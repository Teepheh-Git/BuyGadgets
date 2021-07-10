import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

// the whole styling for the splashscreen
const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: w,
        height: h,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#5956E9'
    },
    buttonContainer: {
        width: w * 0.9,
        height: h * 0.15,
        justifyContent: "center",
        alignItems: "center",
    },
    textContainer: {
        width: w * 0.7,
        height: h * 0.15,
    },
    text: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#fff',
        letterSpacing: 3
    },
    image: {
        width: w,
        height: h * 0.6,
        resizeMode: "cover",
    },

})

export default styles
