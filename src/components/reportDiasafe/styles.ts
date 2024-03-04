import { StyleSheet } from "@react-pdf/renderer";
import { Thema } from "../../../thema";

export const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  signature: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  body: {
    padding: 50,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    marginBottom: 30,
    marginLeft: "75%",
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  h1: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  line: {
    width: "35%",
    height: 1,
    marginTop: -10,
    backgroundColor: Thema.Colors.black,
    marginBottom: 30,
  },
  line1: {
    width: "60%",
    height: 1,
    marginTop: -10,
    backgroundColor: Thema.Colors.black,
  },
  lineSignature: {
    width: "60%",
    height: 1,
    marginBottom: 2,
    marginTop: 50,
    backgroundColor: Thema.Colors.black,
  },
  p: {
    fontSize: 12,
    textAlign: "justify",
    textIndent: 40,
    marginTop: 20,
    lineHeight: 1.5,
  },
  p1: {
    fontSize: 12,
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 1.5,
  },
  pSignature: {
    fontSize: 12,
    textAlign: "justify",
    lineHeight: 1.5,
  },
  space: {
    marginTop: 30,
    marginBottom: 30,
  },
});
