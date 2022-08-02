import { Text, Alert, StyleSheet, View } from 'react-native'
import { Link } from "react-router-native";

const Error = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Error}>Opss... Sorry</Text>
      <Link to={'/'}>
        <Text style={styles.button}>
          Back to Home
        </Text>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  button: {
    width: '70%',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
  }
});

export default Error