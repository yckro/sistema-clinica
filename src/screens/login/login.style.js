import { COLORS, FONT_SIZES } from "../../constants/theme.js";

export const styles = {
    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 70,
        justifyContent: "space-between"
    },
    containerLogo: {
        alignItems: "center"
    },
    logo: {
        width: 100,
        height: 23
    },
    containerInput: {
        marginBottom: 15
    },
    input: {
        backgroundColor: COLORS.gray5,
        padding: 10,
        borderRadius: 6
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    footerLink: {
        color: COLORS.blue
    }

}