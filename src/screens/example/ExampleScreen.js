import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../../globalStylesheet";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector, useDispatch } from 'react-redux'
import {EXAMPLE} from "./exampleAction"

export const ExampleScreen = () => {

    const exampleStore = useSelector(state => state.example);
    const exampleDispatch = useDispatch()

    return (
        <View style={globalStyles.fullScreen}>
            <View style={{alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                          backgroundColor: "#fff"}}>
                <Text>THIS IS AN EXAMPLE SCREEN</Text>
                    <Text>{exampleStore.exampleText}</Text>
                <TouchableOpacity
                    onPress={() => exampleDispatch({type: EXAMPLE, payload: "BROCCOLI"})}>
                    <Button
                    title={"Touch Me"} />
                </TouchableOpacity>
            </View>
        </View> 
    )
}