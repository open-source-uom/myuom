import { Link, ListItem, Text } from "@chakra-ui/react";

export default function OpenEclassSignUpInfo() {
  return (
    <>
      <Text>
        Μεταβείτε στην ιστοσελίδα{" "}
        <Link href="https://openeclass.uom.gr/" color="teal.500">
          https://openeclass.uom.gr/
        </Link>
        .
      </Text>
      <ListItem>
        Στην αριστερή στήλη, πατήστε στον σύνδεσμο <b>Εγγραφή</b>.
      </ListItem>
      <ListItem>
        Επιλέξτε στο <b>Εκπαιδευόμενου</b> τη{" "}
        <b>Πιστοποίηση μέσω του Ιδρυματικού Λογαριασμού (URegister)</b>
      </ListItem>
      <ListItem>Εισάγετε το όνομα χρήστη και το συνθηματικό.</ListItem>
      <ListItem>
        Στην επόμενη οθόνη δηλώστε το τμήμα και ότι στοιχεία σας ζητήσει και
        πατήστε Εντάξει.
      </ListItem>
      <ListItem>
        Θα σας στείλει ένα mail που θα σας λέει ότι γραφτήκατε.
      </ListItem>
      <br></br>
      <Text>
        Στα Μαθήματα (αριστερή στήλη), θα πετακινηθείτε στο{" "}
        <b>
          Προπτυχιακά (Undergraduate) » Τμήμα Εφαρμοσμένης Πληροφορικής
          (Department of Applied Informatics)
        </b>
        . Εκεί θα επιλέξετε τα μαθήματα του εξαμήνου. Καλό θα ήταν να περιμένετε
        να κάνουμε το μάθημα, μήπως μας εξηγήσουν τίποτα οι καθηγητές μας.
      </Text>
    </>
  );
}
