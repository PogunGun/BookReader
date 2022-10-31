import { Alert } from 'react-native';
import RNFS from 'react-native-fs';
import DocumentReader, { types } from 'react-native-document-picker';

const pickFile = async () => {
    try {
        const file = await DocumentReader.pickSingle({ type: types.plainText })
        if(file) return file
        else return Alert.alert("Warning", "Something went wrong.");
    } catch(e) {
        Alert.alert("Warning", "Something went wrong.")
    }
}

const readFile = async (data) => {
    const { uri } = data;

    try {
        const contents = await RNFS.readFile(uri, "utf8");
        if(contents) return contents;
        else Alert.alert("Warning", "Something went wrong.")
        } catch(e) {
        Alert.alert("Warning", "Something went wrong.")
    }
}

export {
    pickFile,
    readFile
}