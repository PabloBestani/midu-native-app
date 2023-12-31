import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";


const RepositoryItem = (props) => {
    return (
        <View key={props.id} style={styles.container}>
            <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
            <StyledText>{props.description}</StyledText>
            <StyledText>{props.language}</StyledText>
            <RepositoryStats { ...props } />
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 10, 
        paddingTop: 5
    }
})

export default RepositoryItem;