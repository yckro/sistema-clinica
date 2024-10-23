import { Text, View } from "react-native";
import { styles } from "./appointment.style.js";

function Appointment(props) {
    return <View style={styles.container}>
        <Text>{props.service} - {props.doctor}</Text>
        <Text>{props.specialty}</Text>
    </View>;
}

export default Appointment;