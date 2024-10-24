import { COLORS, FONT_SIZES } from "../../constants/theme.js";

export const styles = {

    container: {
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: 20,
    },
    item: {
        borderWidth:1,
        borderRadius: 6,
        borderColor: COLORS.gray4,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15,
        
    },
    title: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },
    text: {
        fontSize: FONT_SIZES.md,
        color: COLORS.gray1,
    }
}