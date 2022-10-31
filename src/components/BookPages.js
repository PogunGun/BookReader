import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View  } from 'react-native';
import PagerView from 'react-native-pager-view';

const fontSize = 25;

const BookPages = (props) => {
    const [charVertically, setCharVertically] = useState(0);
    const [charHorizontally, setCharHorizontal] = useState(0);
    const [content, setContent] = useState();

    useEffect(() => {
        setContent(props.content)
    }, [props.content]);

    const getPages = () => {
        if(charHorizontally && charVertically) { 
            const calculatedWordPerPage = Math.round(content.length / (charHorizontally + charVertically));

            const splitedContent = content?.split(" ") || [];
            const arrayOfText = [];
            let arrayOfTextIndex = 0;
            let lastIndex = calculatedWordPerPage;

            splitedContent.map((text, textIndex) => {
                let newText = arrayOfText[arrayOfTextIndex];

                if((textIndex + 1) > lastIndex) {
                    arrayOfTextIndex+=1;
                    lastIndex += calculatedWordPerPage;
                    newText = arrayOfText[arrayOfTextIndex];
                }

                newText = newText ? newText += `${text} ` : `${text} `;

                arrayOfText[arrayOfTextIndex] = newText;
            });

            return arrayOfText.map((text, index) => {
                return (
                    <View style={styles.pageContainer} key={index}>
                        <Text style={[styles.pageText]}>{text.trim()}</Text>
                    </View>
                )
            })
        }
    }

    const onLayout = (event) => {
        const { height, width } = event.nativeEvent.layout;
        const vertical = Math.round((height) / fontSize);
        const horizontal = Math.round((width) / fontSize);
        setCharVertically(vertical + fontSize);
        setCharHorizontal(horizontal + fontSize);
    }

    return (
        <View style={styles.container} onLayout={onLayout}>
            <PagerView style={styles.pagerView} initialPage={0}>
                {getPages()}
            </PagerView>
        </View>
    )
}

export default BookPages

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pageContainer: {
        flex: 1, 
        paddingHorizontal: 10, 
        paddingVertical: 10
    },
    pageText: {
        fontSize: fontSize,
        textAlign: 'justify'
    },
    pagerView: {
        flex: 1
    }
})