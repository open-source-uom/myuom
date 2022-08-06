import React from 'react';
import {
  Text,
  ListItem,
  UnorderedList,
  Link,
  Divider,
} from '@chakra-ui/react';

const FirstYearInfo = [
  {
    title: 'Βιβλία από Εύδοξο',
    content: (
      <UnorderedList>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Βιβλία από Εύδοξο</Text>
        <Divider />
        <br></br>
        <ListItem>Μεταβείτε στην σελίδα <Link href="https://service.eudoxus.gr/student/" color="teal.500">Δήλωσης συγγραμάτων Εύδοξος</Link></ListItem>
        <ListItem>Επιλέξτε <b>'Πανεπιστήμιο Μακεδονίας'</b> & πατήστε επιβεβαίωση</ListItem>
        <ListItem>Συνδεθείτε με τον ιδρυματικό σας λογαριασμό</ListItem>
        <ListItem>Μεταβείτε στα δεξιά που λέει <b>'Δηλώσεις Συγγραμάτων'</b></ListItem>
        <ListItem>Επιλέξτε το τρέχον εξάμηνο & πατήστε <b>'Επισκόπηση'</b></ListItem>
        <ListItem>Επιλέξτε τα συγγράματα που σας ενδιαφέρουν & πατήστε συνέχεια</ListItem>
        <ListItem>Τέλος πατήστε <b>'Τελική Υποβολή'</b></ListItem>
        <br></br>
        <Text noOfLines={[1, 2, 3]} as="ins" fontSize="md">Για περαιτέρω πληροφορίες μεταβείτε <Link href="https://eudoxus.gr/files/User_Manual_Students.pdf" color="teal.500">εδώ</Link>.</Text>
      </UnorderedList>
    ),
    icon: '',
  },
  {
    title: 'Ακαδημαϊκή ταυτότητα',
    content:
      <UnorderedList>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Ακαδημαϊκή ταυτότητα</Text>
        <Divider />
        <br></br>
        <Text fontSize="md">Μπορείτε να ζητήσετε ακαδημαϊκή ταυτότητα από την διεύθυνση <Link href="https://academicid.minedu.gov.gr/" color="teal.500">https://academicid.minedu.gov.gr/</Link>.</Text>
        <br></br>
        <ListItem>Στην δεξιά στήλη, επάνω, έχει κουμπί Εγγραφή/Εισοδος. Πατήστε εκεί.</ListItem>
        <ListItem>Στην είσοδο, επιλέξτε προπτυχιακός φοιτητής και χρησιμοποιήστε το username του email του uom.edu.gr και τον κωδικό που μας δώσανε.</ListItem>
        <ListItem>Στην επόμενη οθόνη έχει μια σύνοψη τι θα σταλεί στην υπηρεσία: Ακαδημαϊκή Ταυτότητα. Εάν είστ ΟΚ πατήστε Αποδοχή. Αν όχι, επικοινωνήστε με γραμματεία.</ListItem>
        <ListItem>Διαβάστε τους όρους και πατήστε αποδοχή.</ListItem>
        <ListItem>Θα σας στείλουν στο mail σας, ένα επιβεβαιωτικό μήνυμα. Πατήστε επάνω στο σύνδεσμο που περιέχει για να επιβεβαιώσετε ότι είστε εσείς.</ListItem>
        <ListItem>Στη συνεχεια τσεκάρετε τα στοιχεία σας <b>(ως μήνα εισαγωγής οι περισσότεροι βάλαμε Οκτώβριο)</b>, εισάγετε και την φωτογραφία για την ακαδημαϊκή ταυτότητα.</ListItem>
        <ListItem>Δηλώνετε από που θέλετε να τσιμπίσετε την ταυτότητά σας.</ListItem>
        <ListItem>Μην ξεχάσετε να κάνετε υποβολή. Όταν κάνετε υποβολή, θα πάρετε ένα αριθμό καταχώρησης. Καλό είναι να τον σημειώσετε. Θα στείλει και στο mail ότι το λάβανε.</ListItem>
        <br></br>
        <Text noOfLines={[1, 2, 3]} fontSize="md">Μπορούμε να ζητήσουμε την ακαδημαϊκή ταυτότητα που χρησιμεύει και ως πάσο για το λεωφορείο. Επίσης να πάτε να αλλάξετε το τηλέφωνό σας σε φοιτητικό.</Text>
        <br></br>
        <Text noOfLines={[1, 2, 3]} fontSize="md">Τέλος πρέπει να δηλώσουμε τα μαθήματα στην διεύθυνση <Link href="https://services.uom.gr/unistudent/login.asp" color="teal.500">Υπηρεσία StudentsWeb</Link></Text>
      </UnorderedList>,
    icon: '',
  },
  {
    title: 'Εγγραφή στην Βιβλιοθήκη',
    content:
      <>
        <Text fontSize="2xl" fontWeight="bold">Εγγραφή στη βιβλιοθήκη</Text>
        <Divider />
        <br></br>
        <UnorderedList>
          <ListItem>Μεταβείτε στον σύδεσμο <Link color="teal.500" href='https://www.lib.uom.gr/index.php/el/forms'>https://www.lib.uom.gr/index.php/el/forms</Link>.</ListItem>
          <ListItem>Επιλέξετε το <Link color="teal.500" href='https://www.lib.uom.gr/index.php/el/new-user?view=form'>Αίτηση Εγγραφής στη Βιβλιοθήκη για Μέλη του Πανεπιστημίου</Link>.</ListItem>
          <ListItem><Text>Συμπληρώστε εκεί τα στοιχεία σας. </Text></ListItem>
          <br></br>
          <Text as="ins" fontSize="md">Για την ολοκλήρωση της εγγραφής σας, θα πρέπει να προσέλθετε στη Βιβλιοθήκη από την επόμενη εργάσιμη μέρα και μέσα σε ένα μήνα με την ακαδημαϊκή και την αστυνομική σας ταυτότητα, μετά από επικοινωνία για ραντεβού. </Text>
        </UnorderedList>
      </>,
    icon: '',
  },
  {
    title: 'Εγγραφή στο Open eClass',
    content:
      <UnorderedList>
        <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Εγγραφή στο openeclass</Text>
        <Divider />
        <br></br>
        <Text>Μεταβείτε στην ιστοσελίδα <Link href='https://openeclass.uom.gr/' color="teal.500">https://openeclass.uom.gr/</Link>.</Text>
        <ListItem>Στην αριστερή στήλη, πατήστε στον σύνδεσμο <b>Εγγραφή</b>.</ListItem>
        <ListItem>Επιλέξτε στο <b>Εκπαιδευόμενου</b> τη <b>Πιστοποίηση μέσω του Ιδρυματικού Λογαριασμού (URegister)</b></ListItem>
        <ListItem>Εισάγετε το όνομα χρήστη και το συνθηματικό.</ListItem>
        <ListItem>Στην επόμενη οθόνη δηλώστε το τμήμα και ότι στοιχεία σας ζητήσει και πατήστε Εντάξει.</ListItem>
        <ListItem>Θα σας στείλει ένα mail που θα σας λέει ότι γραφτήκατε.</ListItem>
        <br></br>
        <Text fontSize="md" noOfLines={[1, 2, 3]}>Στα Μαθήματα (αριστερή στήλη), θα πετακινηθείτε στο <b>Προπτυχιακά (Undergraduate) » Τμήμα Εφαρμοσμένης Πληροφορικής (Department of Applied Informatics)</b>. Εκεί θα επιλέξετε τα μαθήματα του εξαμήνου. Καλό θα ήταν να περιμένετε να κάνουμε το μάθημα, μήπως μας εξηγήσουν τίποτα οι καθηγητές μας.</Text>
      </UnorderedList>,
    icon: '',
  },
  {
    title: 'Εγγραφή στο Piazza',
    content: <UnorderedList>
      <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Εγγραφή στο Piazza</Text>
      <Divider />
      <br></br>
      <Text>Ένα μάθημα μέχρι τώρα το κάνουν στο <Link href='https://piazza.com/' color="teal.500">Piazza</Link>.</Text>
      <ListItem>Μεταβείτε στην διεύθυνση <Link color="teal.500" href="https://piazza.com/uom.gr/fall2020/inf302">https://piazza.com/uom.gr/fall2020/inf302</Link></ListItem>
      <ListItem>Επιλέξτε <b>Join as student</b> και πατήστε τον κωδικο <Text as="i">12357</Text></ListItem>
      <ListItem>Πιθανό να στείλουν ένα μήνυμα επιβεβαίωσης της διεύθυνσης. Δείτε στο mail σας.</ListItem>
      <ListItem>Συμπληρώστε τα στοιχεία σας εκεί. Ως ημερομηνία αποφοίτησης βάλτε όσο πιο μακρυά γίνεται.</ListItem>
      <ListItem>Είσοδο κάνετε με τα στοιχεία σας στο <Link href='https://piazza.com/' color="teal.500">https://piazza.com/</Link></ListItem>
    </UnorderedList>,
    icon: '',
  },
  {
    title: 'Πληροφορίες για σίτιση',
    content: <UnorderedList>
      <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Πληροφορίες για σίτιση 2020-2021</Text>
      <Divider />
      <br></br>
      <Text fontSize="md">Για όσους θα είναι Θεσσαλονίκη, θα χρειαστείτε και την κάρτα σίτισης. Αρχικά θα βρείτε όλα στην σελίδα του πανεπιστημίου <Link href='https://www.uom.gr/student-care/sitish' color="teal.500">εδώ</Link>.</Text>
      <Text fontSize="md">Έχει βγει <Link href='https://www.uom.gr/8883-anakoinosh-sitish-protoeton-foithton-akad-etoys-2020-2021' color="teal.500">ανακοίνωση</Link> ενώ σε μια παλιότερη ανακοίνωση θα βρείτε τα έγγραφα που χρειάζεστε (<Link href='https://www.uom.gr/8576-anakoinosh-sitish-foithton-akad-etoys-2020-2021' color="teal.500">παλιά ανακοίνωση</Link>).</Text>
      <br></br>
      <Text fontSize="md">Μεταβείτε στην διεύθυνση <Link color="teal.500" href="https://piazza.com/uom.gr/fall2020/inf302">https://piazza.com/uom.gr/fall2020/inf302</Link></Text>
      <br></br>
      <Text fontSize="md">Αυτό που μας ενδιαφέρει για τώρα είναι η πρόταση:</Text>
      <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300" > Oι πρωτοετείς φοιτητές ακαδ. έτους 2020-2021, θα υποβάλλουν ηλεκτρονικά την αίτηση, για χορήγηση κάρτας δωρεάν σίτισης μετά την ολοκλήρωση της εγγραφής – ταυτοποίησης στις Γραμματείες των Τμημάτων και την απόκτηση των στοιχείων του λογαριασμού τους.</Text>
      <Text fontSize="md">Οπότε πρέπει να μας κάνουνε ταυτοποίηση και στη συνέχεια να κάνουμε αίτηση για κάρτα σίτισης.</Text>
      <br></br>
      <Text fontSize="md">Η ανακοίνωση αναφέρει ότι θα είναι ανοικτή η φόρμα υποβολής δήλωσης από <b>Δευτέρα 19 Οκτωβρίου 2020 9:00 π.μ. έως και την Τρίτη 10 Νοεμβρίου 2020 και ώρα 9:00 π.μ.</b> και η δήλωση γίνεται ηλεκτρονικά στην <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfi1f6KH_Tm1aICa8amWDYnCKBKfvSQwUoZWAjeIFKnMhzAwQ/formrestricted" color="teal.500">φόρμα</Link> χρησιμοποιόντας τον ιδρυματικό σας λογαριασμό.</Text>
      <br></br>
      <Text fontSize="lg"><b>Διαβάστε και συμπληρώστε τα παρακάτω έγγραφα:</b></Text>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8576/7726-4618-dikaiologitika-sitisi-new-2020-21.docx' color="teal.500">ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ ΓΙΑ ΣΙΤΙΣΗ</Link></ListItem>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8576/7706-ypefthini-dilosi-sitisi-2020-2021.doc' color="teal.500">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ - ΣΙΤΙΣΗ</Link>: Αυτή μάλλον χρειάζεται και ΚΕΠ. Ρωτήστε</ListItem>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8576/7689-2413-fek-1965-18-06-2012-b.pdf' color="teal.500">ΦΕΚ (Αρ. Φύλλου 1965/18-6-2012), αριθμ. Φ5/68535/Β3/18-6-2012, που αφορά την παροχή δωρεάν σίτισης στους φοιτητές των Α.Ε.Ι., για το ακαδημαϊκό έτος 2020-2021</Link></ListItem>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8576/7776-7704-3886-oria-sitisis-2020-2021.docx' color="teal.500">ΟΡΙΑ ΕΙΣΟΔΗΜΑΤΟΣ ΔΩΡΕΑΝ ΣΙΤΙΣΗΣ ΑΚΑΔΗΜΑΪΚΟΥ ΕΤΟΥΣ 2020-2021</Link></ListItem>
    </UnorderedList>,
    icon: '',
  },
  {
    title: 'Πληροφορίες για στέγαση',
    content: <UnorderedList>
      <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Πληροφορίες για στέγαση 2020-2021</Text>
      <Divider />
      <br></br>
      <Text fontSize="md">Υπάρχει ανακοίνωση <Link href='https://www.uom.gr/8577-anakoinosh-stegash-foithton-akad-etoys-2020-2021' color="teal.500">διαθέσιμη εδώ</Link>.</Text>
      <br></br>
      <Text fontSize="md">Και εδώ ισχύει το εξής:</Text>
      <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300" > Oι πρωτοετείς φοιτητές ακαδ. έτους 2020-2021, θα υποβάλλουν ηλεκτρονικά την αίτηση, για την στέγαση μετά την ολοκλήρωση της εγγραφής – ταυτοποίησης στις Γραμματείες των Τμημάτων και την απόκτηση των στοιχείων του λογαριασμού τους. Οι ημερομηνίες για την υποβολή αίτησης θα ανακοινωθούν σύντομα.</Text>
      <br></br>
      <Text fontSize="lg"><b>Διαβάστε τα παρακάτω έγγραφα:</b></Text>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8577/7691-2414-kanonismos-estias-2012-fek.pdf' color="teal.500">Κανονισμός Φοιτητικής Εστίας (ΦΕΚ τεύχος Β,αρ.3191 - 30/11/2012)</Link></ListItem>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8577/7737-ypefthini-dilosi-estia.doc' color="teal.500">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ - ΣΤΕΓΑΣΗ</Link>: Αυτή μάλλον χρειάζεται και ΚΕΠ. Ρωτήστε</ListItem>
      <ListItem><Link href='https://www.uom.gr/assets/site/public/nodes/8577/7731-7697-dikaiologitika-stegasi-new-2020-21.docx' color="teal.500">ΔΙΚΑΙΟΛΟΓΗΤΙΚΑ ΓΙΑ ΤΗ ΣΤΕΓΑΣΗ ΦΟΙΤΗΤΩΝ ΓΙΑ ΤΟ ΑΚΑΔ. ΕΤΟΣ 2020-2021</Link></ListItem>
      <br></br>
      <Text as="ins" fontSize="md"> Η αίτηση θα γίνει <Link href='https://www.uom.gr/assets/site/public/nodes/8577/7731-7697-dikaiologitika-stegasi-new-2020-21.docx' color="teal.500">ηλεκτρονικά εδώ</Link>.</Text>
    </UnorderedList>,
    icon: '',
  },
  {
    title: 'Πληροφορίες για υγειονομική περίθαλψη',
    content: <UnorderedList>
      <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Υγειονομική περίθαλψη</Text>
      <Divider />
      <br></br>
      <Text backgroundColor="gray.300">
        <Text noOfLines={[1, 2, 3]}  >Ως φοιτητές δικαιούμαστε και υγειονομική περίθαλψη. Δείτε την <Link href='https://www.uom.gr/student-care/ygeionomikh-perithalpsh' color="teal.500">ιστοσελίδα εδώ</Link>. Αντιγράφω αυτό που λέει στην σελίδα (είναι μικρό)</Text>
        <br></br>
        <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300" >Ανασφάλιστοι Φοιτητές καλύπτονται όπως οι Ανασφάλιστοι πολίτες Οι προπτυχιακοί, μεταπτυχιακοί φοιτητές και οι υποψήφιοι διδάκτορες που δεν έχουν άλλη ιατροφαρμακευτική και νοσοκομειακή περίθαλψη δικαιούνται πλήρη ιατροφαρμακευτική και νοσοκομειακή περίθαλψη στο Εθνικό Σύστημα Υγείας (Ε.Σ.Υ.) με κάλυψη των σχετικών δαπανών από τον Εθνικό Οργανισμό Παροχής Υπηρεσιών Υγείας (Ε.Ο.Π.Υ.Υ.) σύμφωνα με τις διατάξεις του Ν. 4452/2017 (Α΄17) άρθρο 31 παρ.3.</Text>
        <br></br>
        <Text noOfLines={[1, 2, 3]} backgroundColor="gray.300" >Το Πανεπιστήμιο Μακεδονίας από 1/9/2017 παύει να παρέχει υγειονομική, ιατροφαρμακευτική και νοσοκομειακή περίθαλψη στους ανασφάλιστους φοιτητές, επομένως δεν εκδίδονται ούτε ανανεώνονται νέα Βιβλιάρια Υγείας.</Text>
      </Text>
      <br></br>
      <Text fontSize="lg" fontWeight="bold">Οι ανασφάλιστοι φοιτητές με τον ΑΜΚΑ τους απευθύνονται στις Δημόσιες Δομές Υγείας της παρ. 1 του άρθρου 33 του Ν. 4368/2016(Α΄21).</Text>
      <br></br>
      <Text fontSize="md"><Link color="teal.500" href='https://www.uom.gr/assets/site/public/nodes/5457/2415-img06112017_0001.pdf'>Σχετική εγκύκλιος αριθμ. Πρωτ. 171598/Ζ1/12-10-2017</Link></Text>
      <br></br>
      <Text fontSize="md">Μαζί με το παραπάνω κολλάει και η <Link color="teal.500" href='https://www.uom.gr/student-care/eyropaikh-karta-asfalishs-astheneias-e-k-a-a'>ΕΥΡΩΠΑΪΚΗ ΚΑΡΤΑ ΑΣΦΑΛΙΣΗΣ ΑΣΘΕΝΕΙΑΣ (Ε.Κ.Α.Α.)</Link> σε περίπτωση εξόδου από την χώρα σε κάποιο ταξίδι. Επειδή δεν είναι της παρούσης, μπορείτε να δείτε δικαιολογητικά.</Text>
    </UnorderedList>,
    icon: '',
  },
  {
    title: 'Επικοινωνία',
    content: <UnorderedList>
      <Text noOfLines={[1, 2, 3]} fontSize="2xl" fontWeight="bold">Επικοινωνία</Text>
      <br></br>
      <Text fontSize="xl" fontWeight="bold">Επικοινωνία με γραμματεία σχολής</Text>
      <Divider />
      <Text>Εάν θέλετε να επικοινωνήσετε με την γραμματεία:</Text>
      <ListItem>Με email στο <Link color="teal.500" href='mailto:daisecr@uom.edu.gr'>daisecr@uom.edu.gr</Link>.</ListItem>
      <ListItem>Τηλεφωνικά στα τηλέφωνα 2310.891217 και 2310.891323</ListItem>
      <br></br>
      <Text fontSize="md">Ιστοσελίδα: <Link color="teal.500" href='https://www.uom.gr/dai'>https://www.uom.gr/dai</Link></Text>
      <br></br>
      <Text fontSize="xl" fontWeight="bold">Επικοινωνία με μέριμνα (θέματα σίτισης, στέγασης)</Text>
      <Divider />
      <ListItem>Δείτε στην <Link color="teal.500" href='https://www.uom.gr/student-care'>ιστοσελίδα εδώ</Link>.</ListItem>
      <ListItem>Το τμήμα λειτουργεί για το κοινό τις ώρες: <b>ΔΕΥΤΕΡΑ - ΠΑΡΑΣΚΕΥΗ: 11.30 - 13.00</b></ListItem>
      <ListItem>Email: <Link color="teal.500" href="mailto:merimna@uom.gr">merimna@uom.gr</Link></ListItem>
      <br></br>
      <Text fontSize="md" as='ins'>Καλή επιτυχία!</Text>
    </UnorderedList>,
    icon: '',
  },
];
export default FirstYearInfo;
