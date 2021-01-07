import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "white" },
  itemList: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(200,149,81)",
  },
  label: {
    paddingHorizontal: 20,
    paddingBottom: 5,
    paddingTop: 20,
    fontSize: 13,
  },
  position: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: {
    height: 50,
    backgroundColor: "rgb(200,149,81)",
    justifyContent: "center",
    borderRadius: 0,
  },
});
export default styles;
