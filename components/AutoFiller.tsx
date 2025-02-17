import Geolocation from '@react-native-community/geolocation';


export default function AutoFiller({type}: {type: string}) {

    switch (type) {
        case "date":
            return (
                new Date().toLocaleDateString()
            )
        case "time":
            return (
                new Date().toLocaleTimeString()
            )
        case "location":
            return (
                Geolocation.getCurrentPosition(info => console.log(info))
            )
    }
}