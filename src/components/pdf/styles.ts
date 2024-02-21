import { StyleSheet } from "@react-pdf/renderer";
import { Thema } from "../../../thema";

export const styles = StyleSheet.create({
  document: {
    width: "80%",
    height: "80%",
  },
  page: {
    flexDirection: "row",
    backgroundColor: Thema.Colors.white,
    width: "30%",
    height: "20%",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
