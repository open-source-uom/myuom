import React, { useRef, useEffect } from "react";
import {
  Flex,
  Text,
  chakra,
  ButtonGroup,
  IconButton,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

export default function FirstYearInfoPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const articleComponents = [
    EudoxusInfo,
    StudentIdInfo,
    LibrarySignUpInfo,
    OpenEclassSignUpInfo,
    RestaurantSignUpInfo,
    HousingRequestInfo,
    ContactUomInfo,
  ];
  return (
    <Flex direction={"column"} position="relative" maxW="100%">
      <Text
        as="h3"
        fontSize="2rem"
        textAlign="center"
        fontWeight="bold"
        noOfLines={[2]}
      >
        Πληροφορίες για πρωτοετείς
      </Text>
      <TableOfContents />
      {/* --Article Guides-- */}
      <Flex flexDirection={"column"} rowGap={"3rem"} marginRight={"1rem"}>
        {articleComponents.map((ArticleComponent, index) => {
          return (
            <ArticleComponent
              key={`firstyear-articles-${index}`}
              id={`firstyear-articles-${index}`}
            />
          );
        })}
      </Flex>
      <ScrollToTopArrow />
    </Flex>
  );
}

function TableOfContents() {
  const articlesTitles = [
    "Βιβλία από Εύδοξο",
    "Ακαδημαϊκή Ταυτότητα",
    "Εγγραφή στην Βιβλιοθήκη",
    "Εγγραφή στο Open eClass",
    // "Εγγραφή στο Piazza",
    "Πληροφορίες σίτισης",
    "Πληροφορίες στέγασης",
    // "Πληροφορίες υγειονομικής περίθαλψης",
    "Επικοινωνία",
  ];

  function ContentLink({ title, indexToAnchor }) {
    const ref = useRef(null);

    return (
      <chakra.a
        marginBottom={"1rem"}
        //gia to scroll sto article
        href={`#firstyear-articles-${indexToAnchor}`}
        border={"solid 2px"}
        ref={ref}
        // xreiazotan kati ligotero apo 1/5
        flex={"0 0 19%"}
        borderRadius={"0.5rem"}
        padding={"0.5rem"}
        width={"max-content"}
        color="yellow.400"
        _visited={{ color: "purple" }}
      >
        {title}
      </chakra.a>
    );
  }

  return (
    <Flex
      flexDirection={{ base: "column" }}
      marginTop={"1rem"}
      mx={"1rem"}
      alignItems="center"
    >
      <Text
        as="p"
        fontSize="1.4rem"
        borderBottom={"solid 2px"}
        marginBottom="1rem"
        textAlign={"center"}
        width={"max-content"}
      >
        Περιεχόμενα
      </Text>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        columnGap={{ base: "0", lg: "0.5rem" }}
        flexWrap={"wrap"}
        alignItems={"flex-start"}
      >
        {articlesTitles.map((title, index) => {
          return (
            <ContentLink
              key={`links-to-articles-${index}`}
              title={title}
              indexToAnchor={index}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

function ScrollToTopArrow() {
  //i can hide it and show it when i want if desired
  const START_SHOWING_SCROLL_TO_TOP_BTN = 0;

  return (
    <ButtonGroup
      border={"solid 0.125rem green"}
      borderRadius={"0.25rem"}
      size="lg"
      isAttached
      variant="outline"
      position={"fixed"}
      bottom="1rem"
      right="1rem"
      backgroundColor={"transparent"}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <IconButton aria-label="Scroll to top" icon={<ArrowUpIcon />} />
    </ButtonGroup>
  );
}

function EudoxusInfo({ id }) {
  return (
    <UnorderedList
      id={id}
      spacing={"0.75rem"}
      listStyleType="none"
      wordBreak={"break-all"}
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Βιβλία από Εύδοξο
      </Text>

      <br></br>
      <ListItem wordBreak={"break-all"}>
        Μεταβείτε στην σελίδα{" "}
        {/* <Link
          href="https://service.eudoxus.gr/student/"
          color="teal.500"
          wordBreak={"break-word"}
        > */}
        Δήλωσης συγγραμάτων Εύδοξος
        {/* </Link> */}
      </ListItem>
      <ListItem wordBreak={"break-word"}>
        Επιλέξτε <b>'Πανεπιστήμιο Μακεδονίας'</b> & πατήστε επιβεβαίωση
      </ListItem>
      <ListItem>Συνδεθείτε με τον ιδρυματικό σας λογαριασμό.</ListItem>
      <ListItem>
        Μεταβείτε στα δεξιά που λέει <b>'Δηλώσεις Συγγραμάτων'.</b>
      </ListItem>
      <ListItem>
        Επιλέξτε το τρέχον εξάμηνο & πατήστε <b>'Επισκόπηση'.</b>
      </ListItem>
      <ListItem>
        Επιλέξτε τα συγγράματα που σας ενδιαφέρουν & πατήστε συνέχεια.
      </ListItem>
      <ListItem>
        Τέλος πατήστε <b>'Τελική Υποβολή'.</b>
      </ListItem>
      <br></br>
      <Text noOfLines={[1, 2, 3]} as="ins" fontSize="md">
        Για περαιτέρω πληροφορίες μεταβείτε{" "}
        <Link
          href="https://eudoxus.gr/files/User_Manual_Students.pdf"
          color="teal.500"
        >
          εδώ
        </Link>
        .
      </Text>
    </UnorderedList>
  );
}

function StudentIdInfo({ id }) {
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Ακαδημαϊκή ταυτότητα
      </Text>
      <br></br>
      <Text fontSize="md">
        Μπορείτε να ζητήσετε ακαδημαϊκή ταυτότητα από την διεύθυνση{" "}
        <Link href="https://academicid.minedu.gov.gr/" color="teal.500">
          https://academicid.minedu.gov.gr/
        </Link>
        .
      </Text>
      <br></br>
      <ListItem>
        Στην δεξιά στήλη, επάνω, έχει κουμπί Εγγραφή/Εισοδος. Πατήστε εκεί.
      </ListItem>
      <ListItem>
        Στην είσοδο, επιλέξτε προπτυχιακός φοιτητής και χρησιμοποιήστε το
        username του email του uom.edu.gr και τον κωδικό που μας δώσανε.
      </ListItem>
      <ListItem>
        Στην επόμενη οθόνη έχει μια σύνοψη τι θα σταλεί στην υπηρεσία:
        Ακαδημαϊκή Ταυτότητα. Εάν είστ ΟΚ πατήστε Αποδοχή. Αν όχι, επικοινωνήστε
        με γραμματεία.
      </ListItem>
      <ListItem>Διαβάστε τους όρους και πατήστε αποδοχή.</ListItem>
      <ListItem>
        Θα σας στείλουν στο mail σας, ένα επιβεβαιωτικό μήνυμα. Πατήστε επάνω
        στο σύνδεσμο που περιέχει για να επιβεβαιώσετε ότι είστε εσείς.
      </ListItem>
      <ListItem>
        Στη συνεχεια τσεκάρετε τα στοιχεία σας{" "}
        <b>(ως μήνα εισαγωγής οι περισσότεροι βάλαμε Οκτώβριο)</b>, εισάγετε και
        την φωτογραφία για την ακαδημαϊκή ταυτότητα.
      </ListItem>
      <ListItem>
        Δηλώνετε από που θέλετε να τσιμπίσετε την ταυτότητά σας.
      </ListItem>
      <ListItem>
        Μην ξεχάσετε να κάνετε υποβολή. Όταν κάνετε υποβολή, θα πάρετε ένα
        αριθμό καταχώρησης. Καλό είναι να τον σημειώσετε. Θα στείλει και στο
        mail ότι το λάβανε.
      </ListItem>
      <br></br>
      <Text fontSize="md">
        Μπορούμε να ζητήσουμε την ακαδημαϊκή ταυτότητα που χρησιμεύει και ως
        πάσο για το λεωφορείο. Επίσης να πάτε να αλλάξετε το τηλέφωνό σας σε
        φοιτητικό.
      </Text>
      <br></br>
      <Text noOfLines={[1, 2, 3]} fontSize="md">
        Τέλος πρέπει να δηλώσουμε τα μαθήματα στην διεύθυνση{" "}
        <Link
          href="https://services.uom.gr/unistudent/login.asp"
          color="teal.500"
        >
          Υπηρεσία StudentsWeb.
        </Link>
      </Text>
    </UnorderedList>
  );
}

function LibrarySignUpInfo({ id }) {
  // noOfLines={[1, 2, 3]}
  //       fontSize="2xl"
  //       fontWeight="bold"
  //       borderBottom={"solid 0.125rem"}
  //       paddingBottom={"0.5rem"}
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Εγγραφή στη βιβλιοθήκη
      </Text>

      <br></br>

      <ListItem>
        Μεταβείτε στον σύδεσμο{" "}
        <Link color="teal.500" href="https://www.lib.uom.gr/index.php/el/forms">
          https://www.lib.uom.gr/index.php/el/forms
        </Link>
        .
      </ListItem>
      <ListItem>
        Επιλέξετε το{" "}
        <Link
          color="teal.500"
          href="https://www.lib.uom.gr/index.php/el/new-user?view=form"
        >
          Αίτηση Εγγραφής στη Βιβλιοθήκη για Μέλη του Πανεπιστημίου
        </Link>
        .
      </ListItem>
      <ListItem>
        <Text>Συμπληρώστε εκεί τα στοιχεία σας. </Text>
      </ListItem>
      <br></br>
      <Text as="ins" fontSize="md">
        Για την ολοκλήρωση της εγγραφής σας, θα πρέπει να προσέλθετε στη
        Βιβλιοθήκη από την επόμενη εργάσιμη μέρα και μέσα σε ένα μήνα με την
        ακαδημαϊκή και την αστυνομική σας ταυτότητα, μετά από επικοινωνία για
        ραντεβού.{" "}
      </Text>
    </UnorderedList>
  );
}

function OpenEclassSignUpInfo({ id }) {
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Εγγραφή στο openeclass
      </Text>

      <br></br>
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
      <Text fontSize="md">
        Στα Μαθήματα (αριστερή στήλη), θα πετακινηθείτε στο{" "}
        <b>
          Προπτυχιακά (Undergraduate) » Τμήμα Εφαρμοσμένης Πληροφορικής
          (Department of Applied Informatics)
        </b>
        . Εκεί θα επιλέξετε τα μαθήματα του εξαμήνου. Καλό θα ήταν να περιμένετε
        να κάνουμε το μάθημα, μήπως μας εξηγήσουν τίποτα οι καθηγητές μας.
      </Text>
    </UnorderedList>
  );
}

function RestaurantSignUpInfo({ id }) {
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Πληροφορίες για σίτιση 2020-2021
      </Text>

      <br></br>
      <Text fontSize="md">
        Για όσους θα είναι Θεσσαλονίκη, θα χρειαστείτε και την κάρτα σίτισης.
        Αρχικά θα βρείτε όλα στην σελίδα του πανεπιστημίου{" "}
        <Link href="https://www.uom.gr/student-care/sitish" color="teal.500">
          εδώ
        </Link>
        .
      </Text>
      <Text fontSize="md">
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
      </Text>
      <br></br>
      <Text fontSize="md">
        Μεταβείτε στην διεύθυνση{" "}
        <Link color="teal.500" href="https://piazza.com/uom.gr/fall2020/inf302">
          https://piazza.com/uom.gr/fall2020/inf302
        </Link>
      </Text>
      <br></br>
      <Text fontSize="md">
        Αυτό που μας ενδιαφέρει για τώρα είναι η πρόταση:
      </Text>
      <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300">
        {" "}
        Oι πρωτοετείς φοιτητές ακαδ. έτους 2020-2021, θα υποβάλλουν ηλεκτρονικά
        την αίτηση, για χορήγηση κάρτας δωρεάν σίτισης μετά την ολοκλήρωση της
        εγγραφής – ταυτοποίησης στις Γραμματείες των Τμημάτων και την απόκτηση
        των στοιχείων του λογαριασμού τους.
      </Text>
      <Text fontSize="md">
        Οπότε πρέπει να μας κάνουνε ταυτοποίηση και στη συνέχεια να κάνουμε
        αίτηση για κάρτα σίτισης.
      </Text>
      <br></br>
      <Text fontSize="md">
        Η ανακοίνωση αναφέρει ότι θα είναι ανοικτή η φόρμα υποβολής δήλωσης από{" "}
        <b>
          Δευτέρα 19 Οκτωβρίου 2020 9:00 π.μ. έως και την Τρίτη 10 Νοεμβρίου
          2020 και ώρα 9:00 π.μ.
        </b>{" "}
        και η δήλωση γίνεται ηλεκτρονικά στην{" "}
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfi1f6KH_Tm1aICa8amWDYnCKBKfvSQwUoZWAjeIFKnMhzAwQ/formrestricted"
          color="teal.500"
        >
          φόρμα
        </Link>{" "}
        χρησιμοποιόντας τον ιδρυματικό σας λογαριασμό.
      </Text>
      <br></br>
      <Text fontSize="lg">
        <b>Διαβάστε και συμπληρώστε τα παρακάτω έγγραφα:</b>
      </Text>
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
    </UnorderedList>
  );
}

function HousingRequestInfo({ id }) {
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Πληροφορίες για στέγαση 2020-2021
      </Text>

      <br></br>
      <Text fontSize="md">
        Υπάρχει ανακοίνωση{" "}
        <Link
          href="https://www.uom.gr/8577-anakoinosh-stegash-foithton-akad-etoys-2020-2021"
          color="teal.500"
        >
          διαθέσιμη εδώ
        </Link>
        .
      </Text>
      <br></br>
      <Text fontSize="md">Και εδώ ισχύει το εξής:</Text>
      <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300">
        {" "}
        Oι πρωτοετείς φοιτητές ακαδ. έτους 2020-2021, θα υποβάλλουν ηλεκτρονικά
        την αίτηση, για την στέγαση μετά την ολοκλήρωση της εγγραφής –
        ταυτοποίησης στις Γραμματείες των Τμημάτων και την απόκτηση των
        στοιχείων του λογαριασμού τους. Οι ημερομηνίες για την υποβολή αίτησης
        θα ανακοινωθούν σύντομα.
      </Text>
      <br></br>
      <Text fontSize="lg">
        <b>Διαβάστε τα παρακάτω έγγραφα:</b>
      </Text>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8577/7691-2414-kanonismos-estias-2012-fek.pdf"
          color="teal.500"
        >
          Κανονισμός Φοιτητικής Εστίας (ΦΕΚ τεύχος Β,αρ.3191 - 30/11/2012)
        </Link>
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8577/7737-ypefthini-dilosi-estia.doc"
          color="teal.500"
        >
          ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ - ΣΤΕΓΑΣΗ
        </Link>
        : Αυτή μάλλον χρειάζεται και ΚΕΠ. Ρωτήστε
      </ListItem>
      <ListItem>
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8577/7731-7697-dikaiologitika-stegasi-new-2020-21.docx"
          color="teal.500"
        >
          ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ ΓΙΑ ΤΗ ΣΤΕΓΑΣΗ ΦΟΙΤΗΤΩΝ ΓΙΑ ΤΟ ΑΚΑΔ. ΕΤΟΣ 2020-2021
        </Link>
      </ListItem>
      <br></br>
      <Text as="ins" fontSize="md">
        {" "}
        Η αίτηση θα γίνει{" "}
        <Link
          href="https://www.uom.gr/assets/site/public/nodes/8577/7731-7697-dikaiologitika-stegasi-new-2020-21.docx"
          color="teal.500"
        >
          ηλεκτρονικά εδώ
        </Link>
        .
      </Text>
    </UnorderedList>
  );
}

function ContactUomInfo({ id }) {
  return (
    <UnorderedList id={id} spacing={"0.75rem"} listStyleType="none">
      <Text
        noOfLines={[1, 2, 3]}
        fontSize="2xl"
        fontWeight="bold"
        borderBottom={"solid 0.125rem"}
        paddingBottom={"0.5rem"}
      >
        Επικοινωνία
      </Text>
      <br></br>
      <Text
        fontSize="lg"
        fontWeight="bold"
        width="max-content"
        borderBottom={"solid 0.125rem"}
      >
        Επικοινωνία με γραμματεία σχολής
      </Text>
      <Text>Εάν θέλετε να επικοινωνήσετε με την γραμματεία:</Text>
      <ListItem>
        Με email στο{" "}
        <Link color="teal.500" href="mailto:daisecr@uom.edu.gr">
          daisecr@uom.edu.gr
        </Link>
        .
      </ListItem>
      <ListItem>Τηλεφωνικά στα τηλέφωνα 2310.891217 και 2310.891323</ListItem>
      <br></br>
      <Text fontSize="md">
        Ιστοσελίδα:{" "}
        <Link color="teal.500" href="https://www.uom.gr/dai">
          https://www.uom.gr/dai
        </Link>
      </Text>
      <br></br>
      <Text
        fontSize="lg"
        fontWeight="bold"
        // width={"max-content"}
        borderBottom={"solid 0.125rem"}
      >
        Επικοινωνία με μέριμνα (θέματα σίτισης, στέγασης)
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
      <br></br>
      <Text fontSize="md" as="ins">
        Καλή επιτυχία!
      </Text>
    </UnorderedList>
  );
}
