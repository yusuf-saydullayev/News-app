import { View, FlatList, Text, StyleSheet } from "react-native";
import useSWR from "swr";
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import { fetcher } from "../hooks/fetcher";
import Post from "../Components/Post";

const Home = () => {
  let date = new Date().toISOString().split('T')[0];
  const { data, error } = useSWR(`https://newsapi.org/v2/everything?q=Apple&from=${date}&sortBy=popularity&apiKey=ae8ac9a3879a497e9edd659bdd79b09c`, fetcher, { refreshInterval: 5000 });
  if (error) return <Error />;
  if (!data) return <Loading />;
  return (
    <View>
      <Text style={styles.Header}>Top News</Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    color: '#F90000',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  }
})

export default Home;
