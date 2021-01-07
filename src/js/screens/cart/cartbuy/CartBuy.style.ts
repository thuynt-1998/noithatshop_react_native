import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  flexDirectionRow: { flexDirection: "row" },
  viewProduct: {
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  delText: {
    textDecorationLine: "line-through",
    color: "rgb(187,187,188)",
    marginRight: 5,
  },
  positionBottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  positionBottomLeft: {
    flex: 1,
    alignItems: "center",
  },
  positionBottomRight: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    // backgroundColor: "red",
  },
  marginButton50: { marginBottom: 50 },
  paddingTop10: { paddingTop: 10 },
  paddingRight20: { paddingRight: 20 },
  height50: { height: 50 },
  height100: { height: 100 },
  infoProduct: {
    paddingHorizontal: 10,
    flex: 2,
  },
  priceText: { color: "rgb(200,149,81)", fontWeight: "bold" },
  marginLeft10: { marginLeft: 10 },
  colorsProduct: {
    marginVertical: 5,
  },
  nameProduct: {
    fontSize: 18,
  },
});
export default styles;
