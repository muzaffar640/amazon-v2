import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { useStateValue } from "../../StateProvider";

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: "Helvetica-Oblique",
  },
});

const BillTo = ({ invoice }) => {
  console.log("bill to===>");
  // const [{ basket, user }] = useStateValue();
  // console.log("USER===>", user);
  // console.log("USER===>", basket);

  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.billTo}>Bill To:</Text>
        <Text>{invoice.company}</Text>
        <Text>{invoice.address}</Text>
        <Text>{invoice.phone}</Text>
        <Text>{invoice.email}</Text>
      </View>
    </>
  );
};

export default BillTo;
