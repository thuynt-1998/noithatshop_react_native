import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  infoProduct: {
    padding: 10,
    backgroundColor: "white",
  },
  titleProduct: {
    textTransform: "uppercase",
    fontSize: 20,
    marginBottom: 10,
  },
  priceText: { color: "rgb(200,149,81)", fontSize: 16 },
  textLine: { textDecorationLine: "line-through" },
  containerDetail: {
    backgroundColor: "white",
    marginVertical: 10,
  },
  textDetail: {
    paddingVertical: 15,
    fontWeight: "bold",
    fontSize: 16,
  },
  paddingHorizontal10: {
    paddingHorizontal: 10,
  },
  paddingVertical10: { paddingVertical: 10 },
  containerItemDettail: { flexDirection: "row", padding: 10 },
  flexOne: { flex: 1 },
});
export default styles;
