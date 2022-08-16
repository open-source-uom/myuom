import { Link, ListItem } from "@chakra-ui/react";

export default function LibrarySignUpInfo() {
  return (
    <>
      <ListItem>
        Μεταβείτε στον σύδεσμο{" "}
        <Link color="teal.500" href="https://www.lib.uom.gr/index.php/el/forms">
          της Βιβλιοθήκης του Παμακ
        </Link>
        .
      </ListItem>
      <ListItem>
        Επιλέξετε το "Αίτηση Εγγραφής στη Βιβλιοθήκη για Μέλη του
        Πανεπιστημίου".
      </ListItem>
      <ListItem>Συμπληρώστε εκεί τα στοιχεία σας.</ListItem>
      <br></br>
      <ListItem>
        Για την ολοκλήρωση της εγγραφής σας, θα πρέπει να προσέλθετε στη
        Βιβλιοθήκη από την επόμενη εργάσιμη μέρα και μέσα σε ένα μήνα με την
        ακαδημαϊκή και την αστυνομική σας ταυτότητα, μετά από επικοινωνία για
        ραντεβού.
      </ListItem>
    </>
  );
}
