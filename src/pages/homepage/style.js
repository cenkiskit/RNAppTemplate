import { deviceWidth } from "../../constants/constant_values";

export const style = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: deviceWidth * 0.06
    },
    button: {
        marginTop: deviceWidth * 0.05,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 5
    },
    buttonText: {
        fontSize: deviceWidth * 0.04
    },
    createdBy: {
        fontSize: deviceWidth * 0.03,
        fontStyle: 'italic'
    }
}