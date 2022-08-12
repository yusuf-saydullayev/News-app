import { FlatList, Text, StyleSheet, SafeAreaView } from "react-native";
import useSWR from "swr";
import { API_KEY } from "@env"
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import { fetcher } from "../hooks/fetcher";
import Post from "../Components/Post";

const Home = () => {
  let date = new Date().toISOString().split("T")[0];
  const { data, error } = useSWR(
    `https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=${API_KEY}`,
    fetcher,
    { refreshInterval: 5000 }
  );
  if (error) return <Error />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Header}>Top News</Text>
      {error && <Error />}
      {!data && <Loading />}
      {data && (
        <FlatList
          data={data.articles}
          renderItem={({ item }) => (
            <Post
              title={item.title}
              description={item.description}
              imageUrl={item.urlToImage}
              newsSource={item.source.name}
              id={item.source.id}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Header: {
    color: "#F90000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  container: {
    marginTop: 30,
  },
});

export default Home;
