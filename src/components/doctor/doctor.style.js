import { COLORS, FONT_SIZES } from "../../constants/theme.js";

export const styles = {
    doctor: {
        flex:1,
        flexDirection: "row",
        blackgroundColor: COLORS.white,
        padding: 8,
        borderWidth: 1,
        borderColor: COLORS.gray4,
        marginTop:3,
        marginBottom:3,
        borderRadius: 6
    },
    name: {
        fontSize: FONT_SIZES.md,
        color: COLORS.gray1,
        marginTop:3
    },
    specialty: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 10
    }
}