import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  positionBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  flexDirectionRow: { flexDirection: "row" },
  positionBottomRight: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  height50: { height: 50 },
  paddingRight20: { paddingHorizontal: 20 },
  priceText: { color: "rgb(200,149,81)", fontWeight: "bold" },
  marginLeft10: { marginLeft: 10 },
  containerInfo: {
    backgroundColor: "white",
    marginTop: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  marginBottom70: {
    marginBottom: 70,
  },
  textInfo: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  text: {
    color: "black",
    fontSize: 12,
  },
});

export default styles;
