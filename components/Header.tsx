import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    index: undefined;
    report: undefined;
};

export default function Header() {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const homeRedirect = () => {
        navigation.navigate('index');
    }
    return (
       <TouchableOpacity onPress={homeRedirect}>
            <View style={styles.header}>
            <Image source={require('@/assets/images/miyaru/miyaruTextLogo.png')} style={styles.headerImage} className={'headerImage'}  />
            </View>
        </TouchableOpacity> 
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        backgroundColor: "#00c2ff",
        height: Dimensions.get('window').width / 2.5,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, .75)',
        zIndex: 10,
    },
    headerImage: {
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 11,
        top: 15,
    }
})