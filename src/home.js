import React from 'react'
import {Dimensions, Image, TouchableOpacity, View} from 'react-native'
import Images from './images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <View>
            {
                Images.map((images, index) => (
                    <TouchableOpacity key={index} onPress={() => {}}>
                        <Image source={Images.url} style={{
                            height: deviceHeight/3, 
                            width: deviceWidth/3,
                            borderRadius: 10,
                            margin: 2
                        }}/>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}