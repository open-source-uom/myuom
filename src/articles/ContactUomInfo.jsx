import { Link, ListItem, Text } from "@chakra-ui/react";

export default function ContactUomInfo() {
  return (
    <>
      <Text
        fontWeight="bold"
        width="max-content"
        borderBottom={"solid 0.125rem"}
      >
        Επικοινωνία με γραμματεία σχολής
      </Text>
      <ListItem>Εάν θέλετε να επικοινωνήσετε με την γραμματεία:</ListItem>
      <ListItem>
        Με email στο{" "}
        <Link color="teal.500" href="mailto:daisecr@uom.edu.gr">
          daisecr@uom.edu.gr
        </Link>
        .
      </ListItem>
      <ListItem>Τηλεφωνικά στα τηλέφωνα 2310.891217 και 2310.891323</ListItem>
      <ListItem>
        Ιστοσελίδα:{" "}
        <Link color="teal.500" href="https://www.uom.gr/dai">
          https://www.uom.gr/dai
        </Link>
      </ListItem>
      <br></br>
      <Text borderBottom={"solid 0.125rem"}>
        <b>Επικοινωνία με μέριμνα (θέματα σίτισης, στέγασης)</b>
      </Text>
      <ListItem>
        Δείτε στην{" "}
        <Link color="teal.500" href="https://www.uom.gr/student-care">
          ιστοσελίδα εδώ
        </Link>
        .
      </ListItem>
      <ListItem>
        Το τμήμα λειτουργεί για το κοινό τις ώρες:{" "}
        <b>ΔΕΥΤΕΡΑ - ΠΑΡΑΣΚΕΥΗ: 11.30 - 13.00</b>
      </ListItem>
      <ListItem>
        Email:{" "}
        <Link color="teal.500" href="mailto:merimna@uom.gr">
          merimna@uom.gr
        </Link>
      </ListItem>

      <ListItem>Καλή επιτυχία!</ListItem>
    </>
  );
}
