import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image, ScrollView  } from 'react-native'
import styles from './styles';
import { auth } from '../firebase';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {

    const handleSignOut = () => {
        auth
          .signOut()
          .then(() =>  {
            navigation.navigate('auth')
          })
          .catch(error => alert(error.message))
      }
      
    return(
        
      <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleBar}>
              <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
              <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
          </View>

          <View style={{ alignSelf: "center" }}>
              <View style={styles.profileImage}>
                  <Image source={require("../../assets/esa.jpg")} style={styles.image} resizeMode="center"></Image>
              </View>
              <View style={styles.dm}>
                  <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
              </View>
              <View style={styles.active}></View>
              <View style={styles.add}>
                  <Ionicons name="ios-add" size={48} color="#DFD8C8" style={{ marginTop: 6, marginLeft: 2 }}></Ionicons>
              </View>
          </View>

          <View style={styles.infoContainer}>
              <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>LYNNEN</Text>
              <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>Onironauta</Text>
          </View>

          <View style={styles.statsContainer}>
              <View style={styles.statsBox}>
                  <Text style={[styles.text, { fontSize: 24 }]}>483</Text>
                  <Text style={[styles.text, styles.subText]}>Posts</Text>
              </View>
              <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                  <Text style={[styles.text, { fontSize: 24 }]}>45,844</Text>
                  <Text style={[styles.text, styles.subText]}>Seguidores</Text>
              </View>
              <View style={styles.statsBox}>
                  <Text style={[styles.text, { fontSize: 24 }]}>302</Text>
                  <Text style={[styles.text, styles.subText]}>Siguiendo</Text>
              </View>
          </View>

          <View style={{ marginTop: 32 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("../../assets//media1.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("../../assets//media2.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("../../assets//media3.jpg")} style={styles.image} resizeMode="cover"></Image>
                  </View>
                  <View style={styles.mediaImageContainer}>
                      <Image source={require("../../assets//y4.png")} style={styles.image} resizeMode="cover"></Image>
                  </View>
              </ScrollView>
              <View style={styles.mediaCount}>
                  <Text style={[styles.text, { fontSize: 24, color: "#DFD8C8", fontWeight: "300" }]}>70</Text>
                  <Text style={[styles.text, { fontSize: 12, color: "#DFD8C8", textTransform: "uppercase" }]}>Media</Text>
              </View>
          </View>
          <Text style={[styles.subText, styles.recent]}>Actividad reciente</Text>
          <View style={{ alignItems: "center" }}>
              <View style={styles.recentItem}>
                  <View style={styles.activityIndicator}></View>
                  <View style={{ width: 250 }}>
                      <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                          Empezo a seguir a <Text style={{ fontWeight: "400" }}>Loyd04</Text> y <Text style={{ fontWeight: "400" }}>Adam foster</Text>
                      </Text>
                  </View>
              </View>

              <View style={styles.recentItem}>
                  <View style={styles.activityIndicator}></View>
                  <View style={{ width: 250 }}>
                      <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                          Empezo a seguir a<Text style={{ fontWeight: "400" }}>IvanAnyladevereck</Text>
                      </Text>
                  </View>
              </View>
              <View style={styles.container}>
                <Text>Email: {auth.currentUser?.email}</Text>
              <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
              >
              <Text style={styles.buttonText}>Cerrar Sesion </Text>
              </TouchableOpacity>
              </View>
          </View>
      </ScrollView>
  </SafeAreaView>
);
}

export default AccountScreen;
