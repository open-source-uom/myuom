import { Link, ListItem } from "@chakra-ui/react";

export default function RestaurantSignUpInfo() {
  return (
    <>
      <ListItem>
        Για όσους θα είναι Θεσσαλονίκη, θα χρειαστείτε και την κάρτα σίτισης.
        Αρχικά θα βρείτε όλα στην σελίδα του πανεπιστημίου{" "}
        <Link href="https://www.uom.gr/student-care/sitish" color="teal.500">
          εδώ
        </Link>
        .
      </ListItem>
      <ListItem>
        Έχει βγει{" "}
        <Link
          href="https://www.uom.gr/8883-anakoinosh-sitish-protoeton-foithton-akad-etoys-2020-2021"
          color="teal.500"
        >
          ανακοίνωση
        </Link>{" "}
        ενώ σε μια παλιότερη ανακοίνωση θα βρείτε τα έγγραφα που χρειάζεστε (
        <Link
          href="https://www.uom.gr/8576-anakoinosh-sitish-foithton-akad-etoys-2020-2021"
          color="teal.500"
        >
          παλιά ανακοίνωση
        </Link>
        ).
      </ListItem>

      <ListItem>
        Μεταβείτε στην διεύθυνση{" "}
        <Link color="teal.500" href="https://piazza.com/uom.gr/fall2020/inf302">
          https://piazza.com/uom.gr/fall2020/inf302
        </Link>
      </ListItem>

      <ListItem>Αυτό που μας ενδιαφέρει για τώρα είναι η πρόταση:</ListItem>
      <ListItem backgroundColor="gray.300">
        Oι πρωτοετείς φοιτητές ακαδ. έτους 2020-2021, θα υποβάλλουν ηλεκτρονικά
        την αίτηση, για χορήγηση κάρτας δωρεάν σίτισης μετά την ολοκλήρωση της
        εγγραφής – ταυτοποίησης στις Γραμματείες των Τμημάτων και την απόκτηση
        των στοιχείων του λογαριασμού τους.
      </ListItem>
      <ListItem>
        Οπότε πρέπει να μας κάνουνε ταυτοποίηση και στη συνέχεια να κάνουμε
        αίτηση για κάρτα σίτισης.
      </ListItem>

      <ListItem>
        Η ανακοίνωση αναφέρει ότι θα είναι ανοικτή η φόρμα υποβολής δήλωσης από{" "}
        <b>
          Δευτέρα 19 Οκτωβρίου 2020 9:00 π.μ. έως και την Τρίτη 10 Νοεμβρίου
          2020 και ώρα 9:00 π.μ.
        </b>
        και η δήλωση γίνεται ηλεκτρονικά στην
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfi1f6KH_Tm1aICa8amWDYnCKBKfvSQwUoZWAjeIFKnMhzAwQ/formrestricted"
          color="teal.500"
        >
          φόρμα
        </Link>{" "}
        χρησιμοποιόντας τον ιδρυματικό σας λογαριασμό.
      </ListItem>

      <ListItem fontSize="lg">
        <b>Διαβάστε και συμπληρώστε τα παρακάτω έγγραφα:</b>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8576/7726-4618-dikaiologitika-sitisi-new-2020-21.docx"
          color="teal.500"
        >
          ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ ΓΙΑ ΣΙΤΙΣΗ
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8576/7706-ypefthini-dilosi-sitisi-2020-2021.doc"
          color="teal.500"
        >
          ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ - ΣΙΤΙΣΗ
        </Link>
        : Αυτή μάλλον χρειάζεται και ΚΕΠ. Ρωτήστε
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8576/7689-2413-fek-1965-18-06-2012-b.pdf"
          color="teal.500"
        >
          ΦΕΚ (Αρ. Φύλλου 1965/18-6-2012), αριθμ. Φ5/68535/Β3/18-6-2012, που
          αφορά την παροχή δωρεάν σίτισης στους φοιτητές των Α.Ε.Ι., για το
          ακαδημαϊκό έτος 2020-2021
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8576/7776-7704-3886-oria-sitisis-2020-2021.docx"
          color="teal.500"
        >
          ΟΡΙΑ ΕΙΣΟΔΗΜΑΤΟΣ ΔΩΡΕΑΝ ΣΙΤΙΣΗΣ ΑΚΑΔΗΜΑΪΚΟΥ ΕΤΟΥΣ 2020-2021
        </Link>
      </ListItem>
    </>
  );
}
