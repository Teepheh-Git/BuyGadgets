import React, {useRef, useState} from 'react';
import {Animated, Image, SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import Bag from '../../assets/images/Bag.png';
// @ts-ignore
import Buy from '../../assets/images/Buy.png'
// @ts-ignore
import Heart from '../../assets/images/Heart.png'
// @ts-ignore
import Profile from '../../assets/images/Profile.png'
// @ts-ignore
import menu from '../../assets/images/menu.png'
// @ts-ignore
import Setting from '../../assets/images/Setting.png';
// @ts-ignore
import Logout from '../../assets/images/Logout.png';
// @ts-ignore
import close from '../../assets/images/close.png'
import BottomTabNav from "./bottomTabNav";
import TabButton from "../components/tabButton";
import {FontAwesome} from "@expo/vector-icons";

const CustomDrawer = () => {
    const [currentTab, setCurrentTab] = useState("Profile");
    // To get the current Status of menu ...
    const [showMenu, setShowMenu] = useState(false);


    // Animated Properties...
    const offsetValue = useRef(new Animated.Value(0)).current;
    // Scale Initially must be One...
    const scaleValue = useRef(new Animated.Value(1)).current;
    const closeButtonOffset = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView style={styles.container}>

            <View style={{justifyContent: 'center', padding: 10}}>

                <FontAwesome style={{marginLeft: 200, marginTop: -70}} name="circle" size={125} color="#706EFD"/>
                <FontAwesome style={{marginLeft: 300}} name="circle-o" size={27} color="#706EFD"/>

                <View style={{flexGrow: 1, marginTop: 50}}>

                    {/* Tab Bar Buttons....*/}
                    {TabButton(currentTab, setCurrentTab, "Profile", Profile)}
                    {TabButton(currentTab, setCurrentTab, "My Orders", Buy)}
                    {TabButton(currentTab, setCurrentTab, "Favourites", Heart)}
                    {TabButton(currentTab, setCurrentTab, "Delivery", Bag)}
                    {TabButton(currentTab, setCurrentTab, "Settings", Setting)}
                </View>


                <FontAwesome style={{marginLeft: 150}} name="circle-o" size={27} color="#706EFD"/>
                <FontAwesome name="circle" size={100} color="#706EFD"/>

                <View>
                    {TabButton(currentTab, setCurrentTab, "Sign Out", Logout)}
                </View>
            </View>

            {/*Over lay View...*/}
            <Animated.View style={{
                flexGrow: 1,
                backgroundColor: '#e5e5e5',
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                borderRadius: showMenu ? 15 : 12,
                // Transforming View...
                transform: [
                    {scale: scaleValue},
                    {translateX: offsetValue}
                ]
            }}>

                {/*Menu Button...*/}
                <Animated.View style={{
                    // position:'absolute',
                    transform: [{
                        translateY: closeButtonOffset
                    }]
                }}>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress={() => {
                                          // Do Actions Here....
                                          // Scaling the view...
                                          Animated.timing(scaleValue, {
                                              toValue: showMenu ? 1 : 0.6,
                                              duration: 300,
                                              useNativeDriver: true
                                          }).start()

                                          Animated.timing(offsetValue, {
                                              // YOur Random Value...
                                              toValue: showMenu ? 0 : 230,
                                              duration: 300,
                                              useNativeDriver: true
                                          }).start()

                                          Animated.timing(closeButtonOffset,
                                              {
                                                  // YOur Random Value...
                                                  toValue: !showMenu ? -30 : 0,
                                                  duration: 300,
                                                  useNativeDriver: true
                                              }).start()
                                          setShowMenu(!showMenu);
                                      }}>


                        <Image source={showMenu ? close : menu}
                               style={{
                                   width: 25,
                                   height: 20,
                                   tintColor: '#000',
                                   marginTop: 50,
                                   marginLeft: 40,
                               }}>
                        </Image>

                    </TouchableOpacity>
                </Animated.View>

                <BottomTabNav/>
            </Animated.View>
        </SafeAreaView>
    );
}

export default CustomDrawer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#5359D1',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
});
