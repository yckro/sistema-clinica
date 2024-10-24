import { COLORS, FONT_SIZES } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORS.white,
        flex: 1,
    },
    banner: {
        backgroundColor: COLORS.blue,
        paddinTop: 10,
        paddingBottom: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: FONT_SIZES.md,
        color: COLORS.white,
        fontWeight: "bold",
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.white,
        marginTop: 3
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    text: {
        fontSize: FONT_SIZES.md,
        Color: COLORS.gray1,
        marginBottom: 15,
        textAlign: "center"
    }
}