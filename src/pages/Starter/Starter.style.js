import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innercontainer: {
        position: 'absolute',
        top: 100,
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',        
    },
    linear: {
        width: 400,
        height: 400,
        borderRadius: 200,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
    },
    titletext: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'cursive',
        position: 'absolute',
        top: 80,
    },
    button: {
        backgroundColor: 'orange',
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        position: 'absolute',
        bottom: -80,
        borderWidth: 2,
        borderColor: 'white',
    },
    buttontext: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
});