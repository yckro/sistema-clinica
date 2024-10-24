import icon from "../../constants/icon.js";
import { COLORS, FONT_SIZES } from "../../constants/theme.js";

export const styles = {
    appointment: {
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 12,
        borderColor: COLORS.gray4,
        borderWidth: 1,
        borderRadius: 6,
    },
    name: {
        fontSize: FONT_SIZES.md,
        color: COLORS.gray1,
        marginBottom: 2,
    },
    specialty: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3,
        marginBottom: 4,
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 5,
    },
    bookingDate: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3,
        marginTop: 3,
    },
    bookingHour: {
        fontSize: FONT_SIZES.sm,
        color: COLORS.gray3,
        marginTop: 3,
    },
    booking: {
        flexDirection: "row",
    },
    containerBooking: {
        flex: 1,
    },
    containerButton: {
        marginTop: 5
    },
    container: {
        flexDirection: "row",
    }   
};
