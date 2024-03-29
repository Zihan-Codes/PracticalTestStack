import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const GlobalStyle = StyleSheet.create({
    container: {
        padding: 10,
    },
    header: {
        width: deviceWidth,
        // textAlign: 'center',
        backgroundColor: 'gold'
    },
    taskHeader : {
        width: deviceWidth,
        backgroundColor: '#BF9B30'
    },
    textCenter : {
        textAlign: 'center'
    },
    textBlue: {
        color: 'blue',
    },
    marginTop5px : {
        marginTop: 10,
    },
    marginTop25px : {
        marginTop: 25,
    },
    marginTop50px : {
        marginTop: 50,
    },
    alignCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    marginBottom10 : {
        marginBottom: 10,
    },
    marginBottom50: {
        marginBottom: 50,
    },
    textGreen : {
        color: "green",
    },
});

export default GlobalStyle;