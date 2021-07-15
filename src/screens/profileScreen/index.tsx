import React from 'react';
import ProfileButton from "../../components/profileButton";
import {Image, Text, View} from "react-native";
import {Feather} from '@expo/vector-icons';

import styles from "../profileScreen/styles";

export let props = {
    name: "Onifoleyin Atanda",
    image: 'https://i.im.ge/2021/07/05/uG4KY.jpg',
    address: '43, Oxford Road M13 4GR Manchester, UK',
    phone: '+234 8105950857'
};

const ProfileScreen = () => {
    return (
        <View style={styles.root}>

            {/*my profile text*/}
            <View style={styles.myProfileCon}>
                <Text style={styles.myProfile}>My profile</Text>
            </View>

            {/*container holding users data and image*/}
            <View style={styles.dataContainer}>
                <Image source={{uri: props.image}} style={styles.image}/>

                <Text style={styles.text}> {props.name}</Text>

                <View style={styles.addressCon}>
                    <Feather name="map-pin" size={35} color="black"/>
                    <Text style={styles.address}>Address: {props.address}</Text>
                </View>
            </View>

            {/*buttons container*/}
            <View style={styles.buttonContainer}>
                <ProfileButton text={"Edit Profile"} onPress={() => console.warn("edit profile")}/>
                <ProfileButton text={"Shopping address"} onPress={() => console.warn("Shopping address")}/>
                <ProfileButton text={"Order history"} onPress={() => console.warn("Order history")}/>
                <ProfileButton text={"Cards"} onPress={() => console.warn("Cards")}/>
                <ProfileButton text={"Notifications"} onPress={() => console.warn("Notifications")}/>
            </View>
        </View>
    );
};

export default ProfileScreen;
