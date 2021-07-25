import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text>User Profile Coming Soon</Text>
        </View>
    )
}

export default UserProfileScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
    }
})
