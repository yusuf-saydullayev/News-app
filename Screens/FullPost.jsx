import { Text, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";

const FullPost = ({ route, navigation }) => {

  const { title, imageUrl, description } = route.params
  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <Text style={styles.Head}>{title}</Text>
        <Image style={styles.postImg} source={{ uri: imageUrl }} />
        <Text style={styles.postText}>{description}</Text>
        <Text style={styles.button} onPress={() => navigation.goBack()} >
          Back to Home
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  Container: {
    padding: 10,
    alignItems: 'center',
    marginTop: 35,
  },
  Head: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  postImg: {
    borderRadius: 10,
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  postText: {
    color: 'black',
    fontWeight: '300',
    fontSize: 15,
    padding: 5,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  }
});

export default FullPost