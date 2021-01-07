import { StyleSheet } from "react-native";

export const color = "rgb(200,149,81)";
const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  textHeader: {
    textAlign: "center",
    marginTop: 5,
    textTransform: "uppercase",
    color: "rgb(52,35,42)",
    fontSize: 18,
  },
  underlineTitle: {
    width: 40,
    backgroundColor: "rgb(200,149,81)",
    height: 2,
    marginTop: 10,
  },
});
export default styles;
