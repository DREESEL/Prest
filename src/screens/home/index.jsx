import React from "react";
import { View, Text/*, TextInput, ScrollView */} from "react-native";
import styles from './styles';
/*import Icon from 'react-native-vector-icons/FontAwesome';*/
/*import { COLORS } from '../../constants/theme';*/
/*import Restaurent from "../../components/restaurent";*/
/*import DATA from "../../data/data.json";*/

const HomeScreen = () => {

    // filtro por tipo de precio
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    )
        
}

export default HomeScreen;

/*const filterData = (price) => (DATA.restaurents).filter((result) => result.price === price );
    return(
        <View>
            <View style={styles.top}>
                <View style={styles.searchBox}>
                    <Icon name="search" size={25} color={COLORS.grey} />
                    <TextInput placeholder="what you like to eat?" style={styles.search} />
                </View>
            </View>
            <ScrollView>
                <Restaurent title="Cost Effective" data={filterData('$')} />
                <Restaurent title="Bit Pricer" data={filterData('$$')} />
                <Restaurent title="Big Spender" data={filterData('$$$')} />
                <View style={{ height: 80 }}/>
            </ScrollView>
        </View>
    )*/