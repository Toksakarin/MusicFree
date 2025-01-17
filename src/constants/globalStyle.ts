import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
    /** flex 1 */
    flex1: {
        flex: 1,
    },
    /** 满宽度 flex1 */
    fwflex1: {
        width: '100%',
        flex: 1,
    },
    /** 居中 */
    fullCenter: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
} as const);

export default globalStyle;
