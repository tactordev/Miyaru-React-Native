/* NOTES
-- Used numbers-and-punctuation since the go button doesn't autophocus on numeric or phone pad
-- 
*/

import { Image, StyleSheet, View, Dimensions, TouchableOpacity, TextInput, Text, ScrollView } from 'react-native';
import Header from '@/components/Header';
import React, { useRef, useState } from 'react';
import styles from '@/app/forms/sighting';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Footer from '@/components/Footer';
import AutoFiller from '@/components/AutoFiller';

type RootStackParamList = {
  index: undefined;
  report: undefined;
  sighting: undefined;
  Home: undefined;
};

export default function SimpleFormScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  let allSpeciesForDropdown: React.JSX.Element[] = [];
  const [extraInformation, setExtraInformation] = useState('');
  const [dd, setDD] = useState('');
  const [mm, setMM] = useState('');
  const [yyyy, setYYYY] = useState('');
  const [hh, setHH] = useState('');
  const [min, setMin] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [submitType, setSubmitType] = useState<'mongodb' | 'xano' | 'testing'>('mongodb'); 
  const [dropdownVisible, setDropdownVisible] = useState(false); 
  const [speciesDropdownOption, setSpecies] = useState('Species');
  const [sizeDropdownOption, setSize] = useState('Size');
  const [behaviourDropdownOption, setBehaviour] = useState('Behaviour');
  const [speciesDropdown, setSpeciesDropdown] = useState(false);
  const [sizeDropdown, setSizeDropdown] = useState(false);
  const [behaviourDropdown, setBehaviourDropdown] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const listOfSpecies:{ [key: string]: string[] } = {
    ReefSharks: ["Blacktip reef shark", "Whitetip reef shark", "Gray reef shark"],
    "Pelagic Sharks": ["Silky Shark", "Oceanic Whitetip Shark", "Tiger Shark", "Hammerhead Shark", "Whale Shark"],
    "Deepwater Sharks": ['Gulper Shark'],
    "Ground Sharks": ['Nurse Shark', 'Leopard Shark'],
    "Other Chondrichthyans": ['Rays', 'Chimaera'],
    "Guitar Fish": ['Giant Guitarfish', 'Bow Mouth Guitarfish']
  }
  const listOfSizes = [];

  const inputRef2 = useRef<TextInput>(null);
  const inputRef3 = useRef<TextInput>(null);
  const inputRef4 = useRef<TextInput>(null);
  const inputRef5 = useRef<TextInput>(null);
  const inputRef6 = useRef<TextInput>(null);

  function notNum(input: any) {
    if (! (/^[0-9]+$/.test(input) || input === 'Backspace' || input === 'Delete' || input === 'Enter' || input === "Shift" || input === "Tab")) {
      return true;
    } else {
      return false;
  
    }
  }

  function filterLetters(state: any) {
    state = state.replace(/[^0-9]/g, '');
    return state;
  }

  function loadSharkSpecies() {
    return Object.entries(listOfSpecies).map(([category, speciesList]) => (
      <View key={category}>
        <Text style={styles.dropdownHeader}>{category}</Text>
        {speciesList
          .filter(species => species.toLowerCase().includes(searchText.toLowerCase())) 
          .map((species, index) => (
            <TouchableOpacity
              key={index}
              style={{ display: 'flex' }}
              onPress={() => {
                setSpecies(species);
                setSearchText('');
                setTimeout(() => setSpeciesDropdown(false), 25);
              }}
            >
              <Text style={styles.dropdownOption}>{species}</Text>
            </TouchableOpacity>
          ))}
      </View>
    ));
  }
  const listOfBehaviours: string[] = [ 'Sleeping', 'Circling', 'Feeding' ];


  function loadBehaviours() {
    return listOfBehaviours.map((behaviour, index) => (
      <TouchableOpacity
        key={index}
        style={{ display: 'flex' }}
        onPress={() => {
          setBehaviour(behaviour);
          setSearchText('');
          setTimeout(() => setBehaviourDropdown(false), 25);
        }}
      >
        <Text style={styles.dropdownOption}>{behaviour}</Text>
      </TouchableOpacity>
    ));
  }

  return (
    <View style={styles.page}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.mainContent}>
          <View style={styles.geographicalTime}>
            <Text style={styles.headerText}>Geographical/Time</Text>
            <Text style={styles.subHeaderText}>Date</Text>
            <View style={[styles.date, styles.inputs]}>
              <View style={styles.inputNumberContainer} id="date">
                <TextInput
                  style={[styles.inputNumber, styles.marginLeftMover]}
                  onSubmitEditing={() => inputRef2.current?.focus()}
                  placeholder={"dd"}
                  onChangeText={(text) => {const filtered = filterLetters(text); setDD(filtered)}}
                  value={dd}
                  placeholderTextColor={'rgb(94, 94, 94)'}
                  keyboardType={'numbers-and-punctuation'}
                  maxLength={2}
                  returnKeyType="next"
                  onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                    event.preventDefault();
                  }}}
                />
                <Text style={styles.separator}>/</Text>
                <TextInput
                  ref={inputRef2}
                  style={[styles.inputNumber, styles.minimalMarginLeftMover]}
                  onSubmitEditing={() => inputRef3.current?.focus()}
                  onChangeText={(text) => {const filtered = filterLetters(text); setMM(filtered)}}
                  value={mm}
                  placeholder={"mm"}
                  placeholderTextColor={'rgb(94, 94, 94)'}
                  keyboardType={'numbers-and-punctuation'}
                  maxLength={2}
                  returnKeyType="next"
                  textContentType="birthdateMonth"
                  onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                    event.preventDefault();
                  }}}
                />
                <Text style={[styles.separator]}>/</Text>
                <TextInput
                  ref={inputRef3}
                  style={[styles.inputNumber, styles.inputDateYear, styles.minimalMarginLeftMover]}
                  onSubmitEditing={() => inputRef4.current?.focus()}
                  onChangeText={(text) => {const filtered = filterLetters(text); setYYYY(filtered)}}
                  value={yyyy}
                  placeholderTextColor={'rgb(94, 94, 94)'}
                  placeholder={"yyyy"}
                  onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                    event.preventDefault();
                  }}}
                  maxLength={4}
                  returnKeyType="next"
                  keyboardType={'numbers-and-punctuation'}
                />
              </View>
              <View style={styles.autoFiller}>
                <TouchableOpacity onPress={(event) => {
                  console.log(event)
                  setDD(new Date().getDate().toString());
                  setMM((new Date().getMonth() + 1).toString());
                  setYYYY(new Date().getFullYear().toString());
                }}>
                <Text>📅</Text>
                </TouchableOpacity>
              </View>
            </View>  
            
            <Text style={styles.subHeaderText}>Time</Text>
            <View style={[styles.time, styles.inputs]}>
              <View style={styles.inputNumberContainer} id="time">
                <TextInput
                  ref={inputRef4}
                  style={[styles.inputNumber, styles.marginLeftMover]}
                  onSubmitEditing={() => inputRef5.current?.focus()}
                  onChangeText={(text) => {const filtered = filterLetters(text); setHH(filtered)}}
                  value={hh}
                  placeholder={"hh"}
                  placeholderTextColor={'rgb(94, 94, 94)'}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType="next"
                  maxLength={2}
                  onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                    event.preventDefault();
                  }}}
                />
                <Text style={[styles.separator, styles.minimalMarginLeftMover]}>:</Text>
                <TextInput 
                  ref={inputRef5}
                  style={[styles.inputNumber, styles.minimalMarginLeftMover]}
                  onSubmitEditing={() => inputRef6.current?.focus()}
                  onChangeText={(text) => {const filtered = filterLetters(text); setMin(filtered)}}
                  value={min}
                  placeholder={"mm"}
                  placeholderTextColor={'rgb(94, 94, 94)'}
                  keyboardType="numbers-and-punctuation"
                  returnKeyType="next"
                  maxLength={2}
                  onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                    event.preventDefault();
                  }}}
                />
              </View>
              <View style={styles.autoFiller}>
                <TouchableOpacity onPress={(event) => {
                  setHH(new Date().getHours().toString());
                  setMin(new Date().getMinutes().toString() === '0' ? '00' : new Date().getMinutes().toString());
                }}>
                <Text>🕒</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.subHeaderText}>Location</Text>
            <View style={styles.inputLocationContainer} id="location">
              <TextInput
                ref={inputRef6}
                style={[styles.locationInput]}
                placeholder={'Longitude'}
                onChangeText={(text) => {const filtered = filterLetters(text); setLongitude(filtered)}}
                value={longitude}
                placeholderTextColor={'rgb(94, 94, 94)'}
                keyboardType="numbers-and-punctuation"
                returnKeyType="next"
                onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                  event.preventDefault();
                }}}
              />
              <Text style={styles.locationSeparator}>N</Text>
              <TextInput
                style={[styles.locationInput]}
                placeholder={'Latitude'}
                onChangeText={(text) => {const filtered = filterLetters(text); setLatitude(filtered)}}
                value={latitude}
                placeholderTextColor={'rgb(94, 94, 94)'}
                keyboardType="numbers-and-punctuation"
                returnKeyType="done"
                onKeyPress={(event) => {if (notNum(event.nativeEvent.key)) {
                  event.preventDefault();
                }}}
              />
              <Text style={styles.locationSeparator}>W</Text>
            </View>
          </View>
          <View style={styles.sharkInformation}>
            <Text style={styles.headerText}>Shark Information</Text>
            <TouchableOpacity style={[styles.speciesSelector, styles.selector]} onPress={() => setSpeciesDropdown(!speciesDropdown)}>
              <Text>{speciesDropdownOption}</Text>
            </TouchableOpacity>
            { speciesDropdown && (<View style={[styles.dropdown, styles.speciesDropdown]} id="speciesDropdown" >
              <TextInput style={styles.searchBar} placeholderTextColor={'rgb(112, 112, 112)'} placeholder={'Search...'} onChangeText={(text) => {setSearchText(text)}}/* onKeyPress={(event) => {
                for (const option of allSpeciesForDropdown) {
                  for (const species of option.props.children[1]) {
                    if  (!(species.props.children.props.children.includes(searchText))) {
                      

                    } else {
                      species.props.style = {display: 'flex'}
                    }
                  }
                  
                }
              }}*//>
              { loadSharkSpecies() }

            </View> ) }
            <TouchableOpacity style={[styles.sizeSelector, styles.selector]} onPress={() => setSizeDropdown(!sizeDropdown)}>
              <Text>Size</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.behaviourSelector, styles.selector]} onPress={() => setBehaviourDropdown(!behaviourDropdown)} >
              <Text>{behaviourDropdownOption}</Text>
            </TouchableOpacity>
            { behaviourDropdown && (<View style={[styles.dropdown, styles.speciesDropdown]} id="behaviourDropdown">
              <TextInput style={styles.searchBar} placeholderTextColor={'rgb(112, 112, 112)'} placeholder={'Search...'} onChangeText={(text) => {setSearchText(text)}}/>
             { loadBehaviours() }
            </View> ) }

          </View>
          <View style={styles.descriptionSelectors}></View>
          <View style={styles.extras}>
            <Text style={styles.headerText}>Extras</Text>
            <View style={styles.inputTextContainer} id="extraInformation">
              <TextInput
                style={styles.inputText}
                placeholder={"Please write any extra information here.\ne.g. scars\ne.g. surrounding flora/fauna"}
                placeholderTextColor={'rgb(94, 94, 94)'}
                multiline={true}
                keyboardType="default"
                onChangeText={setExtraInformation}
                value={extraInformation}
              />
            </View> 
          </View>
        </View>
        <View style={styles.chooseSubmitTypeContainer}>
          {/*<TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>        
            <Text style={styles.chooseSubmitType}>Choose Submit Type</Text>
          </TouchableOpacity>*/}
          {dropdownVisible && (
            <View style={styles.dropdown}>
              <TouchableOpacity onPress={() => {
                setSubmitType('mongodb')
              }}>
                <Text style={styles.submitDropdownOption}>MongoDB (Coded)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {
                setSubmitType('xano')
              }}>
                <Text style={styles.submitDropdownOption}>Xano (Backendless)</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              /*const apiLink: { [key in typeof submitType]: string } = {
                mongodb: 'https://sharkproject.tactor.dev/api/addShark',
                xano: 'https://x8ki-letl-twmt.n7.xano.io/api:2D0WNQvF/shark_data',
                testing: 'http://localhost:3000/',
              }*/
              /*fetch('http://localhost:3000/', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  date: `${dd}/${mm}/${yyyy}`,
                })
              }).then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));*/

              fetch("https://api.tactor.dev/miyaru/addShark/", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  date: `${dd}/${mm}/${yyyy}`,
                  time: `${hh}:${min}`,
                  extraInformation: extraInformation,
                  location: `${longitude}, ${latitude}`,
                  species: speciesDropdownOption !== "Species"? speciesDropdownOption : "Unset",
                  size: 'n/a',
                  behaviour: behaviourDropdownOption !== "Behaviour" ? behaviourDropdownOption : "Unset",
                }),
              })
              .then(response => response.json())
              .then(data => {
                console.log('Success:', data);
              })
              .catch((error) => {
                console.error('Error:', error);
                console.log(submitType)
              });

              
              navigation.navigate('Home');
            }}
            style={styles.submitButton}
          >
            <Text>Submit Form</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}
