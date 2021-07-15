import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: w,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#e5e5e5'
    },
    text: {
        width: w * 0.6,
        height: h * 0.09,
        letterSpacing: 1.2,
        fontWeight: 'bold',
        fontSize: 34,
        marginBottom: 40,
        marginLeft: w * -0.2

    },
    seeMore: {
        width: w * 0.9,
        height: h * 0.03,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
});

export default styles
