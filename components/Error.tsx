import { Text } from 'react-native';

export default function Error({error}: {error: string}) {
    return (
        <Text>Error: An error has occured: {error} .</Text>
    );
}