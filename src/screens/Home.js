import React from 'react';
import {
    StyleSheet, 
    Text,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DocumentReaderButton from '../components/DocumentReaderButton';

const Home = () => {
    const navigation = useNavigation();

    const buttonCB = (data) => {
        navigation.navigate("Book", { data })    
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>KindleLike</Text>
            </View>
            <View style={styles.buttonContainer}>
                <DocumentReaderButton 
                    name={"Select File"}
                    buttonCB={buttonCB}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})