import {Dimensions, StyleSheet} from "react-native";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height


const styles = StyleSheet.create({
    root: {
        flex: 1,
        width: w,
        height: h,
        margin: 5,
        backgroundColor: '#5956E9',

    },
    elipse0: {
        marginTop: w * -0.1,
        marginLeft: w * 0.6

    },
    elipse1: {
        marginLeft: w * 0.15

    },
    elipse2: {
        marginBottom: w * 0.05,
        marginLeft: w * 0.8

    },
    textContainer: {
        marginLeft: w * 0.1,
        width: w * 0.7,
    },
    text: {
        fontSize: 65,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Raleway_800ExtraBold',

    },
    loginContainer: {
        backgroundColor: '#fff',
        height: h,
        width: w,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center'
    },

    login: {
        fontWeight: 'bold',
        fontSize: 18,
        width: w * 0.8,
        fontFamily: 'Raleway_700Bold',
        lineHeight: 21,
        margin: 40,
    },
    emailContainer: {
        width: w * 0.8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    email: {
        marginLeft: 10,
        fontSize: 15,
        color: '#868686',
        fontFamily: 'Raleway_600SemiBold',
    },
    textInput1: {
        margin: 10,
        marginBottom: 20,
        fontSize: 20,
        borderColor: '#C9C9C9',
        height: 30,
        width: w * 0.8,
        borderBottomWidth: 1,
        fontFamily: 'Raleway_600SemiBold'
    },

    textInput2: {
        margin: 15,
        marginBottom: 20,
        fontSize: 20,
        borderColor: '#C9C9C9',
        height: 30,
        width: w * 0.8,
        borderBottomWidth: 1,
        fontFamily: 'Raleway_600SemiBold'
    },

    passwordContainer: {
        width: w * 0.8,
        alignItems: 'center',
        flexDirection: 'row',
    },

    password: {
        fontSize: 15,
        color: '#868686',
        fontFamily: 'Raleway_600SemiBold',

    },
    showPassContainer: {
        width: w * 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },

    textButton: {
        marginRight: w * 0.5,
        alignItems: 'center',
        justifyContent: 'center',

    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainer: {
        margin: 5,
        marginTop: 60,
        alignItems: 'center'
    },
    createAccContainer: {
        alignItems: 'center',
        marginLeft: 20,
        width: w * 0.4,
    }
});
export default styles
