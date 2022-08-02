import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-native";

const FullPost = () => {
  const { state } = useLocation();
  const { title, imageUrl, description } = state;
  return (
    <View style={styles.Container}>
      <ScrollView>
        <Text style={styles.Head}>{title}</Text>
        <Image style={styles.postImg} source={{ uri: imageUrl }} />
        <Text style={styles.postText}>{description}</Text>
        <Link to={'/'}>
          <Text style={styles.button}>
            Back to Home
          </Text>
        </Link>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  Container: {
    padding: 10,
    alignItems: 'center',
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