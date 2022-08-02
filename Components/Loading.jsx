import { View, ActivityIndicator, Text, StyleSheet } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.Container}>
      <ActivityIndicator size="large" color="#F98C00" />
      <Text style={styles.Loading}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Loading: {
    color: "green",
    fontSize: 20,
  },
});

export default Loading