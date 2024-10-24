import { COLORS, FONT_SIZES } from "../../constants/theme";


export const styles = {
    service: {
        backgroundColor: COLORS.white,
        flex: 1,
        flexDirection: "row",
        padding: 12,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: COLORS.gray4,
    },
    containerText: {
        flex: 1
    },
    containerButton: {
        marginTop: 5
    },
    description: {
        fontSize: FONT_SIZES.md,
        color: COLORS.gray3,
        marginTop: 5
    },
    specialty: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3,
        marginTop: 3
    },
    price: {
        fontSize: FONT_SIZES.md,
        color: COLORS.blue,
        marginTop: 3
    }
}