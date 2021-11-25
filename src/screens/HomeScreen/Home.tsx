import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { Button } from '../../components/Button/Button';
import { AuthContext } from '../../context/authContext';

export const HomeScreen = () => {

    const {user, token, logOut} = useContext(AuthContext);

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home</Text>

            <Button
                title="Logout"
                onPress={() => {}}
            />

            <Text>
                { JSON.stringify(user, null, 5)}
            </Text>
        </View>
    )
}
