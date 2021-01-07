import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "column", width: "100%" },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  flex1: { flex: 1 },
  overlayImage: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "rgba(134,104,48,0.4)",
  },
  //
  containerContent: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    width: "100%",
    padding: 20,
  },
  //
  marginVertical20: {
    marginVertical: 20,
  },
  //
  containerlink: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  labelLink: {
    marginLeft: 0,
    fontWeight: "normal",
    letterSpacing: 0,
    textTransform: "none",
  },
  //

  header: { marginVertical: 25 },
  textHeader: {
    textTransform: "uppercase",
    fontSize: 22,
    textAlign: "center",
  },
  colorOne: { color: "rgb(120,120,120)" },
  textInput: {
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 30,
    borderBottomColor: "rgb(150,150,150)",
  },

  textButton: {
    textAlign: "center",
    color: "white",
  },
});
