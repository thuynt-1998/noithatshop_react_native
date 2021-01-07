import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  itemProductContainer: {
    flex: 1,
    maxWidth: "49%",
    minWidth: "47%",
    position: "relative",
  },
  cartIconAgain: {
    textAlign: "center",
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: "rgb(190,149,81)",
    position: "absolute",
    right: "10%",
    bottom: "8%",
  },
});
export default styles;
