import { View, Text } from "react-native";
import Button from "../button/button.jsx";

function Service(props) {
    return <View>
        <View>
            <Text>{props.service}</Text>
            <Text>{props.price}</Text>
        </View>

        <View>
            <Button text="Agendar" />
        </View>
    </View>
}

export default Service;