import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import Doctor from "../../components/doctor/doctor.jsx";
import Service from "../../components/service/service.jsx";
import icon from "../../constants/icon.js";

function Services() {
    return (
        <View style={styles.container}>

            <View style={styles.banner}>
                <Image source={icon.female} />
                <Text style={styles.name}>heber</Text>
                <Text style={styles.specialty}>Dermatologista</Text>
                
            </View>

            <FlatList
                data={doctors_services}
                keyExtractor={(serv) => serv.id_service}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    return < Service description={item.description}
                    price={item.price} />
                }} />
        </View>
    );
}

export default Services;
