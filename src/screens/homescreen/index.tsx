import React from "react";
import {Dimensions, Text, View, TextInput} from "react-native";
import TopBarNav from "../../routers/topBarNav";
import TextButton from "../../components/textButton";
import {AntDesign, Feather} from '@expo/vector-icons';
import styles from "./style";

const w = Dimensions.get("window").width
const h = Dimensions.get("window").height

// interface HeaderComponentProps {
//     searchValue: String;
//     setSearchValue: () => void;
// }

const HomeScreen = () => {
    return (
        <View style={styles.root}>

            {/*searchBar container*/}
            <View
                style={{
                    width: w * 0.7,
                    height: h * 0.07,
                    backgroundColor: '#fff',
                    marginBottom: 30,
                    marginRight: w * -0.15,
                    borderRadius: 30,
                    borderWidth: 1,
                    borderColor: '#c9b6b6',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>


                <Feather style={{margin: 5}} name={'search'} size={20}/>

                <TextInput
                    style={{
                        height: 40,
                        fontSize: 18,
                    }}
                    placeholder={" Search"}
                />
            </View>

            {/*order online text*/}
            <Text style={styles.text}>Order online collect in store</Text>

            {/*TopBar navigation container*/}
            <View>
                <TopBarNav/>
            </View>

            {/*see more section*/}
            <View style={styles.seeMore}>
                <TextButton text={'see more'} onPress={() => console.warn('see more')}/>
                <AntDesign name="arrowright" size={20} color="#5956E9"/>
            </View>

        </View>
    );
};
export default HomeScreen;

