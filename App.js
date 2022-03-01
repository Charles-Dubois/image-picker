import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import React from "react";

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri });
  };
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri }} style={styles.img} />
        <TouchableOpacity style={styles.btn} onPress={openImagePickerAsync}>
          <Text style={styles.btnText}>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Image source={require("./assets/default.JPEG")} style={styles.img} />
        <TouchableOpacity style={styles.btn} onPress={openImagePickerAsync}>
          <Text style={styles.btnText}>Click me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    margin: 40,
    backgroundColor: "darkgrey",
    borderRadius: 500,
    borderWidth: 3,
    borderColor: "grey",
  },
  btnText: { fontSize: 40, padding: 5, color: "red" },
  img: {
    width: 500,
    height: 500,
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "green",
  },
});
// https://docs.expo.dev/tutorial/image-picker/

// Une fois que vous avez (à peu près) compris, initialisez un nouveau projet React Native.

// Nous allons simuler un réseau social qui demande une photo de profil à son utilisateur.

// Au milieu de l'écran, affichez un cercle vide et en dessous, un bouton TouchableOpacity.
// Quand on clique sur le bouton, cela nous amène dans la librairie de notre téléphone pour sélectionner une photo.
// Une fois sélectionnée,cette dernière sera affichée à la place du cercle vide
