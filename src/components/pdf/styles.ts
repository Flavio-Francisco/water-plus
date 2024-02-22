import { StyleSheet } from "@react-pdf/renderer";
import { Thema } from "../../../thema";

export const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  body: {
    padding: 30,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    marginBottom: 10,
    marginLeft: "90%",
  },
  header: {
    flexDirection: "row",
    backgroundColor: Thema.Colors.blue1,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});
