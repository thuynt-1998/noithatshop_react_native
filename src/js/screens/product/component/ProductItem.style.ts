import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  product: {
    flex: 1,
    backgroundColor: "white",
    margin: 5,
    paddingVertical: 10,
  },
  imageProduct: { width: "100%", height: 150 },
  titleProduct: { fontSize: 16, paddingHorizontal: 10 },
  priceProduct: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  textPrice: {
    fontSize: 16,
    color: "rgb(200,149,81)",
    flex: 5,
    marginRight: 5,
  },
});
export default styles;
