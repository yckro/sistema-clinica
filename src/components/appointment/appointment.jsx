import { Text, View } from "react-native";
import { styles } from "./appointment.style.js";
import icon from "../../constants/icon.js";
import { Image } from "react-native";
import Button from "../../components/button/button.jsx";

function Appointment(props) {
    return (
        <View style={styles.appointment}>
            <Text style={styles.name}>
                {props.service} - {props.doctor}
            </Text>
            <Text style={styles.specialty}>{props.specialty}</Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}>
                        <Image style={styles.icon} source={icon.calendar} />
                        <Text style={styles.bookingDate} >15/07/2021</Text>
                    </View>

                    <View style={styles.booking}>
                        <Image style={styles.icon} source={icon.clock} />
                        <Text style={styles.bookingHour}>15:22h</Text>
                    </View>

                </View>

                <View style={styles.containerButton}> 
                        <Button text="Cancelar Reserva" />
                    </View>
                    
            </View>
        </View>
    );
}

export default Appointment;
