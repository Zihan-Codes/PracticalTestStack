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
    marginBottom25: {
        marginBottom: 25,
    },
    textGreen : {
        color: "green",
    },
    textRed : {
        color: "red",
        fontSize: 25,
        textAlign: 'center',
    },
    listItemText : {
        color: "green",
        fontSize: 25,
        textAlign: 'center'
    },
    listItemRow : {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    listItemButton : {
        borderRadius: 5,
        marginBottom: 5,
    },
    listHrLine : {
        borderBottomWidth: 1, 
        borderBottomColor: 'black', 
        width: '100%', 
        marginVertical: 10
    },
    loginInput : {
        fontSize: 25,  
        textAlign: 'center'
    },
});

export default GlobalStyle;