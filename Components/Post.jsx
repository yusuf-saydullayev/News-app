import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-dom"

const Post = ({ title, imageUrl, id, newsSource, description }) => {
  const navigate = useNavigate();
  const pressHander = () => {
    navigate(`/fullpost/${id}`, { state: { title, imageUrl, description } })
  }
  return (
    <TouchableOpacity onPress={pressHander}>
      <View style={styles.Container}>
        <Image style={styles.Picture} source={{ uri: imageUrl }} />
        <View style={styles.PostText}>
          <Text numberOfLines={2} style={styles.Title}>
            {title}
          </Text>
          <Text style={styles.source}>{newsSource}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    flexDirection: "row",
    backgroundColor: "#0017F9",
    borderRadius: 16,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  Picture: {
    width: 100,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },
  Title: {
    fontSize: 12,
    fontWeight: "700",
    color: "white",
  },
  PostText: {
    flex: 1,
    justifyContent: "center",
  },
  date: {
    fontSize: 10,
    marginTop: 5,
    fontWeight: "100",
    color: "white",
  },
  source: {
    fontSize: 10,
    color: 'red',
  }
});

export default Post;
