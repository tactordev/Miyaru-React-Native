import { StyleSheet, Dimensions } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';
import { Keyframe } from 'react-native-reanimated';
import { Platform } from 'react-native';


export default StyleSheet.create({
    extras: {}, descriptionSelectors: {}, geographicalTime: {}, input: {}, sharkInformation: {}, speciesSelector: {}, sizeSelector: {}, behaviourSelector: {}, dropdownSelectorOption: {},
  
    headerText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      backgroundColor: "#090064",
      color: "#fff",
      padding: 5,
      borderRadius: 10,
      marginBottom: 5,
    },
    chooseSubmitTypeContainer: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
    }, 
    chooseSubmitType: {
      backgroundColor: 'rgb(199, 199, 199)',
      padding: 7.5,
      boxShadow: '0px 5px 2.5px rgba(0, 0, 0, 0.25)',
      borderBottomColor: 'rgb(167, 167, 167)',
      borderBottomWidth: 2.5,
    }, 
    dropdown: {},
    selector: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#d9d9d9',
      padding: 10,
      marginTop: 10,
      borderRadius: 10,
      height: 50,
      justifyContent: 'space-between',
      fontWeight: 800,
      width: Dimensions.get('window').width / 1.25,
      marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width / 1.25)) / 2 - 12.5,
    },
    chosenSelectorOption: {
      fontWeight: 600,
      fontSize: 17.5,
      marginTop: 2.5,
      marginLeft: 15,
    },
    dropdownArrow: {
      marginTop: 1.25,        
      fontSize: 20,
      marginRight: 10,
      fontWeight: 600,
      transform: [{rotate: '0deg'}],
      transitionProperty: 'transform',
      transitionDuration: '0.5s',
    },
    droppedDownArrow: {
      transform: [{rotate: '180deg'}]
    },
    dropdownOption: {
      padding: 10,      
    },
    mainContent: {
      marginLeft: 10,
      marginRight: 10,
    },        
    subHeaderText: {
      marginLeft: 10,
      fontWeight: 700,
      fontSize: 15,
    },
    page: {
      backgroundColor: "#fff",
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    },
    addHeight: {
      display: 'flex',
      height: 1000,
      backgroundColor: 'red',
      width: 100,
    },
    locationSeparator: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#d9d9d9',
      width: 25,
      borderRadius: 25,
      color: 'rgb(94, 94, 94)',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 12.5,
      paddingTop: 3,
    },
    locationInput: {
      backgroundColor: '#d9d9d9',
      width: 100,
      height: 25,
      marginLeft: 12.5,
      textAlign: 'center',
      borderRadius: 15,
    },
  
    minimalMarginLeftMover: {
      marginLeft: 5,
    },
    inputLocationContainer: {
      display: 'flex',
      flexDirection: 'row',
      textAlign: 'center',
    },
    inputTextContainer: {
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 7.5,
      marginLeft: -10,
      borderRadius: 10,
    },
    inputText: {
      padding: 5,
      width: Dimensions.get('window').width / 1.125,
      height: Dimensions.get('window').height / 7.5,
      backgroundColor: '#d9d9d9',
      borderRadius: 5,
    },
    separator: {
      color: "rgb(94, 94, 94)",
      marginLeft: 5,
    },
    marginLeftMover: {
      marginLeft: 12.5
    },
    inputNumberContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    inputNumber: {
      textAlign: 'center',
      backgroundColor: '#d9d9d9',
      width: 75,
      height: 25,
      borderRadius: 15,
    },
    inputDateYear: {
      width: 75,
    },
    submitButtonContainer: {
      width: Dimensions.get('window').width,
      display: 'flex',
      alignItems: 'center',
    },
    submitButton: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 20,
      backgroundColor: '#00c2ff',
      width: 250,
      padding: 10,
      borderRadius: 10,
      boxShadow: '0px 5px 2.5px rgba(0, 0, 0, .25)',
      marginBottom: Dimensions.get('window').height / 4,
    },
    placeholder: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      height: Dimensions.get('window').height*2,
      flexGrow: 1,
    }, 
    dropdownHeader: {
        fontWeight: 700,
        paddingTop: 10,
        marginTop: 10,
        marginBottom: 10,
        textIndent: '15px',
        paddingLeft: 10,
    },
    speciesDropdown: {
        display: 'flex',
        backgroundColor: '#d9d9d9',
        width: Dimensions.get('window').width / 1.25,
        marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width / 1.25)) / 2 - 12.5,
        top: (Platform.OS === 'web' ? 5 : 70),
        borderRadius: 10,

        position: (Platform.OS === 'web' ? 'relative' : 'absolute'),
        zIndex: 1000,
    },
    searchBar: {
      margin: 10,
      marginBottom: 0,
      padding: 10,
      paddingBottom: 15,
      color: 'black',
      outlineColor: 'transparent',
      borderBottomWidth: 1,
      borderBottomColor: 'rgb(183, 183, 183)',

    },
    disabledDropdownOption: {
      backgroundColor: 'rgb(199, 199, 199)',
      color: 'rgb(94, 94, 94)',
    },
    submitDropdownOption: {
      backgroundColor: 'rgb(199, 199, 199)',
      color: '#000',
      padding: 12,
    },
    inputs: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginRight: 10,
    },
    autoFiller: {
      backgroundColor: '#00c2ff',
      padding: 7.5,
      borderRadius: 10,
      color: 'black',
      textShadowColor: 'black',
      fontWeight: 700,
      textShadowOffset: { width: 0, height: 0 },
    },
    sharkIdentification: {

    },
    colourInput: {    
      width: 200,
      height: 25,
      borderRadius: 15,
      textAlign: 'center',
      backgroundColor: '#d9d9d9',
    },
    inputColour: {
      marginLeft: 20,
      marginBottom: 15,
      marginTop: 5,
    },
    inputScar: {
      marginLeft: 20,
      marginTop: 5,
    },
    dropdownList: {
      maxHeight: 200,
      borderRadius: 5,        
      padding: 5, 

    },
    addPhotoContainer: {

    },
    photoHeader: {
      backgroundColor: '#00c2ff',
      color: 'black'
    },
    addPhoto: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: Dimensions.get('window').width - 40,
      marginHorizontal: 10,
      backgroundColor: 'rgba(4,24,23,0.25)',
      borderRadius: 25,
      padding: 10,
      height: Dimensions.get('window').height / 4
    },
    addPhotoText: {},
    addPhotoPhoto: {
      width: Dimensions.get('window').width / 7.5,
      height: Dimensions.get('window').width / 7.5
    },
    touchableAddPhoto: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    } 
  });


  