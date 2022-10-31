import React from 'react';
import { 
    Alert, 
    StyleSheet,
    Text, 
    TouchableOpacity
} from 'react-native';
import { pickFile } from '../utils/fileManagement'

const DocumentReaderButton = (props) => {
    const { name, buttonCB } = props;

    const onReadDocuments = async () => {
        const file = await pickFile();
        if(file) return buttonCB(file)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onReadDocuments}>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    );
};

export default DocumentReaderButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        width: '40%',
        backgroundColor: 'orange',
        alignItems: 'center',
        paddingVertical: 10
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15
    }
})