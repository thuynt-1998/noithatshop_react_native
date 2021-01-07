import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: { paddingHorizontal: 20 },
  containerRoom: { paddingHorizontal: 20 },
  imageStyle: {
    height: 150,
    width: 150,
  },
  borderRadius100: {
    borderRadius: 100,
  },
  overlay: {
    borderRadius: 100,
    justifyContent: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  roomContainerText: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
  roomText: {
    color: "rgb(52,35,42)",
    textAlign: "center",
    marginTop: 5,
    paddingVertical: 5,
    fontSize: 14,
  },
  roomItem: {
    margin: 5,
  },
});
export default styles;
