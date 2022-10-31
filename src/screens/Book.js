import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { readFile } from '../utils/fileManagement';
import BookPages from '../components/BookPages';

const Book = (props) => {
    const { route } = props;

    const navigation = useNavigation();

    const [content, setContent] = useState(null);

    useEffect(() => {
        setTitle();
        getFile();
    }, []);

    const setTitle = () => {
        const { name } = route.params.data;

        navigation.setOptions({ title: name });
    }

    const getFile = async () => {
        const file = await readFile(route.params.data);
        if(file) {
            setContent(file);
        }
    }

    return (
        <View style={styles.container}>
            <BookPages 
                content={content}
            />
        </View>
    );
};

export default Book;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})