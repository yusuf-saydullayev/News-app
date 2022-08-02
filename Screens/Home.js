import { View, FlatList, Text, StyleSheet } from "react-native";
import useSWR from "swr";
import { fetcher } from "../hooks/fetcher";
import Post from "../Components/Post";

const Home = () => {
  const { data, error } = useSWR(
    "https://62e80700249bb1284ea76a24.mockapi.io/Posts",
    fetcher
  );
  if (error) return <Text style={styles.Error}>Opss... Sorry</Text>;
  if (!data) return <Text style={styles.Loading}>Loading...</Text>;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Post
            title={item.title}
            createdAt={item.createdAt}
            imageUrl={item.imageUrl}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Error: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
  Loading: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
    marginTop: 50,
  },
});

export default Home;
