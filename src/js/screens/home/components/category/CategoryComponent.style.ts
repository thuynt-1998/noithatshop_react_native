import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  roomButton: {
    marginHorizontal: 5,
    marginVertical: 5,
    width: 80,
  },
  borderRadiusTwo: {
    borderRadius: 10,
  },
  roomImageBackground: {
    height: 80,
    flex: 1,
    resizeMode: "center",
  },
  content: {
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  textCategory: {
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
    color: "rgb(52,35,42)",
    minHeight: 30,
  },
});
export default styles;
