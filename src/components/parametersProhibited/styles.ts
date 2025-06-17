import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  body: {
    padding: 10,
    fontSize: 10,
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  header: {
    height:50,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  table: {
    display: "flex",
    width: "auto",
    borderColor: '#bfbfbf',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
   
  },
  tableCellHeader: {
  
    width:30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: '#9ae6b4',
    padding: 2,
    fontWeight: 'bold',
     textAlign:"center"
    
  },
  tableCellHeaderParams: {
  
    width:120,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderLeftWidth: 1,
    borderTopWidth: 0,
    backgroundColor: '#9ae6b4',
    padding: 2,
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
   
  },
  tableCell: {
    width:30,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 2,
   textAlign:"center"
  },
  tableCellParams: {
    width:120,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#bfbfbf',
    borderLeftWidth: 1,
    borderTopWidth: 0,
    padding: 2,
    whiteSpace: 'nowrap',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
    position: 'absolute',
    left: 3,
    top:2
  },
  date: {
    fontSize:14,
    position: 'absolute',
    right: 43,
    top:2
  }
});
