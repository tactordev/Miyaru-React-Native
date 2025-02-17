import { StyleSheet, Dimensions } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';

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
      backgroundColor: '#d9d9d9',
      padding: 10,
      boxShadow: '0px 5px 2.5px rgba(0, 0, 0, .25)',
      marginTop: 10,
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
      backgroundColor: '#d9d9d9',
      width: 25,
      borderRadius: 25,
      color: 'rgb(94, 94, 94)',
      textAlign: 'center',
      marginLeft: 12.5,
    },
    locationInput: {
      backgroundColor: '#d9d9d9',
      width: 125,
      marginLeft: 12.5,
      textAlign: 'center',
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
      marginLeft: -20,
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
      width: 25,
      height: 25,
      borderRadius: 5,
    },
    inputDateYear: {
      width: 50,
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
        borderTopColor: 'rgb(167, 167, 167)',
        borderTopWidth: 2.5,
        textIndent: '15px',
    },
    speciesDropdown: {
        backgroundColor: 'rgb(199, 199, 199)',
    },
    searchBar: {
      margin: 10,
      marginBottom: 0,
      padding: 10,
      color: 'black',
      outline: 'none',

    },
    disabledDropdownOption: {
      backgroundColor: 'rgb(199, 199, 199)',
      color: 'rgb(94, 94, 94)',
    },
    submitDropdownOption: {
      backgroundColor: 'rgb(199, 199, 199)',
      color: '#000',
      padding: 12,
    }
  });
  