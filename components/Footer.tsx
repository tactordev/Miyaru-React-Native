import { View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

type RootStackParamList = {
    index: undefined;
    report: undefined;
    Home: undefined;
};

export default function Footer() {
    return (
            <LinearGradient 
            colors={['transparent', '#020a33', '#020a33', '#020a33']}
            style={styles.footer}
            >
                <View style={styles.footerImageContainer}>
                    <Image source={require('@/assets/images/miyaru/miyaruLogo.jpg')} style={styles.footerImage} />
                </View>
            </LinearGradient>
        
        
    )
}

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        height: Dimensions.get('window').width / 3,
        width: Dimensions.get('window').width,
        marginTop: Dimensions.get('window').height - (Dimensions.get('window').width / 3),
        zIndex: 10,
    },
    footerImage: {
        width: Dimensions.get('window').width / 3.5,
        height: Dimensions.get('window').width / 3.5,
        borderRadius: 100,
    },
    footerImageContainer: {
        display: 'flex',
        marginLeft: Dimensions.get('window').width - Dimensions.get('window').width / 2.75,
        bottom: 25,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width / 3,
        height: Dimensions.get('window').width / 3,
        backgroundColor: 'black',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
    }
})