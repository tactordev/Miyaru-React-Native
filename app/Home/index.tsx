import { View, Image, StyleSheet, Dimensions, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import * as Font from 'expo-font';
import { useEffect } from 'react';

type RootStackParamList = {
  index: undefined;
  report: undefined;
  sighting: undefined;
};

export default function HomeScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  function changeScreen(id: string) {
    if (id === "sighting") {
      console.log("sighting")
      navigation.navigate('sighting');
    } else {
      console.log("alert")
      console.log(id)
      Alert.alert('Error: Form not chosen.');
    }
  }

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.ttf'),
      });
    }
    loadFonts();
  }, []);

  return (
    <View>
      <View>
        <Image source={require('@/assets/images/miyaru/homeBackground.png')} style={styles.backgroundImage} />
      </View>
      <Header />
      <View style={styles.titleContainer}>
        <Text style={{color: "#fff", fontSize: 25, fontWeight: 700, margin: 30, textAlign: 'center', alignItems: 'center', fontFamily: 'Poppins-Medium', lineHeight: 45, height: 100, marginTop: 35,}}>Welcome to the Miyaru Shark App!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.changeScreenButton} onPress={() => changeScreen('sighting')}>
          <Text nativeID="sighting" style={[styles.button, {fontFamily: 'Poppins-Medium', fontWeight: 600, fontSize: 15}]}>Submit Sighting</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    marginTop: 100,
  },
  button: {
    fontWeight: 500,
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 20,
  },
  changeScreenButton: { 
    display: 'flex',
    backgroundColor: '#00c2ff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: Dimensions.get('window').width / 1.25,
    marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width / 1.25)) / 2  ,
    borderRadius: 20,
    boxShadow: '0px  5px 15px rgba(0, 0, 0, 1)',
  },
  backgroundImage: {
    display: 'flex',
    width: Dimensions.get('window').width / 1,
    height: Dimensions.get('window').height / 1.25,
    position: 'absolute',
    top: 130,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -100,
    marginTop: 5,
  },
  titleContainer: {
    backgroundColor: '#010932',
    color: '#120021',
    zIndex: 10,
    marginTop: Dimensions.get('window').height / 9,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 6.5,
    fontWeight: 900,
  }
});