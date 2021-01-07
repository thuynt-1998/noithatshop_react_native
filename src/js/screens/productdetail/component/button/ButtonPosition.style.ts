import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  positionBottom: {
    zIndex: 0,
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  containerButtonBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonBottom: {
    flex: 1,
    borderRadius: 0,
  },
  buttonBottomOne: {
    backgroundColor: "rgb(237,222,201)",
  },
  buttonBottomTwo: {
    backgroundColor: "rgb(200,149,81)",
  },
  heightButtonModal: { height: 50 },
});

export default styles;
