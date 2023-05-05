/*
  MIT License

  Copyright (c) 2022 Open Source  UOM

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  Made by Open Source UoM (https://opensource.uom.gr)

  Project members:
    -Apostolidis
    -Davios
    -Iosifidis
    -Konstantinidis
    -Mpakalis
    -Nasis
    -Omiliades
    -Patsouras
    -Fakidis

*/
import i18n from "../i18n"
const FirstYearInfo = [
  {
    index: 1,
    tabOrder: 1,
    title: i18n.t("art1_title_"),
    content: [
      i18n.t("art1_sent1_"),
      i18n.t("art1_sent2_"),
      i18n.t("art1_sent3_"),
      i18n.t("art1_sent4_"),
      i18n.t("art1_sent5_"),
      i18n.t("art1_sent6_"),
      i18n.t("art1_sent7_"),
    ],
    links: ["https://eregister.it.minedu.gov.gr/"],
  },

  {
    index: 1,
    tabOrder: 2,
    title: i18n.t("art2_title_"),
    content: [
      i18n.t("art2_sent1_"),
      i18n.t("art2_sent2_"),
      i18n.t("art2_sent3_"),
      i18n.t("art2_sent4_"),
      i18n.t("art2_sent5_"),
      i18n.t("art2_sent6_"),
    ],
    links: ["https://www.uom.gr/register"],
  },
  {
    index: 2,
    tabOrder: 1,
    title: i18n.t("art3_title_"),
    content: [
      i18n.t("art3_sent1_"),
      i18n.t("art3_sent2_"),
      i18n.t("art3_sent3_"),
      i18n.t("art3_sent4_"),
      i18n.t("art3_sent5_"),
      i18n.t("art3_sent6_"),
      i18n.t("art3_sent7_"),
      i18n.t("art3_sent8_"),
      i18n.t("art3_sent9_"),
      i18n.t("art3_sent10_"),
      
    ],
    
    links: ["https://www.uom.gr/register", "https://www.photopea.com/"],
  },
  {
    index: 2,
    tabOrder: 2,
    title: i18n.t("art4_title_"),
    content: [
      i18n.t("art4_sent1_"),
      i18n.t("art4_sent2_"),
      i18n.t("art4_sent3_"),
      i18n.t("art4_sent4_"),
      i18n.t("art4_sent5_"),
      i18n.t("art4_sent6_"),
      i18n.t("art4_sent7_"),
      i18n.t("art4_sent8_"),
      i18n.t("art4_sent9_"),
      i18n.t("art4_sent10_"),
      i18n.t("art4_sent11_"),
      i18n.t("art4_sent12_"),
      i18n.t("art4_sent13_"),
    ],
    links: [
      "https://www.uom.gr/site/images/downloads/%CE%A5%CF%80%CE%B5%CF%8D%CE%B8%CF%85%CE%BD%CE%B7%20%CE%94%CE%AE%CE%BB%CF%89%CF%83%CE%B7%20%CE%9C%CE%B7%20%CE%B5%CE%B3%CE%B3%CF%81%CE%B1%CF%86%CE%AE%CF%82%20%CF%83%CE%B5%20%CE%AC%CE%BB%CE%BB%CE%B7%20%CE%A3%CF%87%CE%BF%CE%BB%CE%AE%20%CE%AE%20%CE%A4%CE%BC%CE%AE%CE%BC%CE%B1.pdf",
    ],
  },
  {
    index: 3,
    tabOrder: 1,
    title: i18n.t("art5_title_"),
    content: [
      i18n.t("art5_sent1_"),
      i18n.t("art5_sent2_"),
      i18n.t("art5_sent3_"),
      i18n.t("art5_sent4_"),
      i18n.t("art5_sent5_"),
      i18n.t("art5_sent6_"),
      i18n.t("art5_sent7_"),
      i18n.t("art5_sent8_"),
    ],
    links: ["https://uregister.uom.gr/", "https://mypassword.uom.gr/"],
  },
  {
    index: 3,
    tabOrder: 2,
    title: i18n.t("art6_title_"),
    content: [
      i18n.t("art6_sent1_"),
      i18n.t("art6_sent2_"),
      i18n.t("art6_sent3_"),
    ],
    links: ["https://myaccount.google.com/?pli=1&nlr=1"],
  },
  {
    index: 4,
    tabOrder: 1,
    title: "Ακαδημαϊκή Ταυτότητα",
    content: [
      "Μπορείτε να ζητήσετε ακαδημαϊκή ταυτότητα από την πρώτη διεύθυνση που θα βρείτε στους σχετικούς συνδέσμους.",
      "Στη δεξιά στήλη, επάνω, έχει κουμπί Εγγραφή/Είσοδος. Πατήστε εκεί.",
      "Στην είσοδο, επιλέξτε προπτυχιακός φοιτητής και χρησιμοποιήστε το username του email του uom.edu.gr και τον κωδικό που σας έδωσαν.",
      "Στην επόμενη οθόνη έχει μια σύνοψη τι θα σταλεί στην υπηρεσία: Ακαδημαϊκή Ταυτότητα.",
      "Εάν είστε ΟΚ πατήστε Αποδοχή. Εάν όχι, επικοινωνήστε με τη γραμματεία.",
      "Διαβάστε τους όρους και πατήστε αποδοχή.",
      "Θα σας στείλουν στο email σας ένα επιβεβαιωτικό μήνυμα.",
      "Πατήστε επάνω στον σύνδεσμο που περιέχει για να επιβεβαιώσετε ότι είστε εσείς.",
      "Στη συνέχεια ελέγξτε τα στοιχεία σας. Μήνα εισαγωγής επιλέξτε Οκτώβριο και εισάγετε τη φωτογραφία για την ακαδημαϊκή ταυτότητα.",
      "Δηλώστε από πού θέλετε να παραλάβετε την ταυτότητά σας.",
      "Μην ξεχάσετε να κάνετε υποβολή. Όταν κάνετε υποβολή θα πάρετε έναν αριθμό καταχώρησης.",
      "Καλό είναι να τον σημειώσετε. Θα στείλει και στο email ότι το λάβανε.",
      "Μπορείτε να ζητήσετε την ακαδημαϊκή ταυτότητα που χρησιμεύει και ως πάσο για το λεωφορείο.",
      "Επίσης να πάτε να αλλάξετε το τηλέφωνό σας σε φοιτητικό.",
      "Τέλος πρέπει να δηλώσετε τα μαθήματα στην Υπηρεσία StudentsWeb που θα βρείτε στον δεύτερο σύνδεσμο.",
      "Σχετικά Links:",
    ],
    links: [
      "https://academicid.minedu.gov.gr/",
      "https://services.uom.gr/unistudent/login.asp",
    ],
  },
  {
    index: 4,
    tabOrder: 2,
    title: "Βιβλία από Εύδοξο",
    content: [
      "Μεταβείτε στη σελίδα δήλωσης συγγραμμάτων Εύδοξος που θα βρείτε στον πρώτο σύνδεσμο.",
      "Επιλέξτε Πανεπιστήμιο Μακεδονίας & πατήστε επιβεβαίωση.",
      "Συνδεθείτε με τον ιδρυματικό σας λογαριασμό.",
      "Μεταβείτε στα δεξιά που λέει Δηλώσεις Συγγραμμάτων.",
      "Επιλέξτε το τρέχον εξάμηνο & πατήστε Επισκόπηση.",
      "Επιλέξτε τα συγγράμματα που σας ενδιαφέρουν & πατήστε συνέχεια.",
      "Τέλος πατήστε Τελική Υποβολή.",
      "Για περαιτέρω πληροφορίες μεταβείτε στον δεύτερο σύνδεσμο.",
      "Σχετικά Links:",
    ],
    links: [
      "https://service.eudoxus.gr/student/",
      "https://eudoxus.gr/files/User_Manual_Students.pdf",
    ],
  },
  {
    index: 5,
    tabOrder: 1,
    title: "Εγγραφή στη Βιβλιοθήκη",
    content: [
      "Μεταβείτε στον πρώτο σύνδεσμο.",
      "Επιλέξτε την Αίτηση Εγγραφής στη Βιβλιοθήκη για Μέλη του Πανεπιστημίου ή τον δεύτερο σύνδεσμο.",
      "Για την ολοκλήρωση της εγγραφής σας θα πρέπει να προσέλθετε στη Βιβλιοθήκη, από την επόμενη εργάσιμη μέρα",
      "και μέσα σε ένα μήνα, με την ακαδημαϊκή και την αστυνομική σας ταυτότητα μετά από επικοινωνία για ραντεβού.",
      "Σχετικά Links:",
    ],
    links: [
      "https://www.lib.uom.gr/index.php/el/forms",
      "https://www.lib.uom.gr/index.php/el/new-user?view=form",
    ],
  },
  {
    index: 5,
    tabOrder: 2,
    title: "Εγγραφή στο Open eClass",
    content: [
      "Μεταβείτε στην ιστοσελίδα του Open eClass που θα βρείτε στον πρώτο σύνδεσμο.",
      "Στην αριστερή στήλη πατήστε στον σύνδεσμο Εγγραφή.",
      "Επιλέξτε στον Εκπαιδευόμενο την Πιστοποίηση μέσω του Ιδρυματικού Λογαριασμού URegister.",
      "Εισάγετε το όνομα χρήστη και το συνθηματικό.",
      "Στην επόμενη οθόνη δηλώστε το τμήμα και ό,τι στοιχεία σας ζητήσει και πατήστε Εντάξει.",
      "Θα σας στείλει ένα email που θα σας λέει ότι γραφτήκατε.",
      "Στα Μαθήματα (αριστερή στήλη), μετακινηθείτε στο Προπτυχιακά (Undergraduate) » Τμήμα Εφαρμοσμένης Πληροφορικής (Department of Applied Informatics).",
      "Εκεί επιλέξτε τα μαθήματα του εξαμήνου σας.",
      "Καλό θα ήταν να περιμένετε να γίνει το μάθημα, μήπως εξηγήσουν περισσότερα οι καθηγητές.",
      "Σχετικά Links:",
    ],
    links: ["https://openeclass.uom.gr/index.php?logout=yes"],
  },
  {
    index: 6,
    tabOrder: 1,
    title: "Πληροφορίες για Σίτιση",
    content: [
      "Για όσους θα βρίσκονται Θεσσαλονίκη, θα χρειαστείτε και την κάρτα σίτισης.",
      "Αρχικά θα τα βρείτε όλα στη σελίδα του πανεπιστημίου στον πρώτο σύνδεσμο.",
      "Πρέπει να γίνει ταυτοποίηση και στη συνέχεια να κάνετε αίτηση για κάρτα σίτισης η οποία θα γίνει σε σχετική ανακοίνωση.",
      "Εισάγετε το όνομα χρήστη και το συνθηματικό.",
      "Στους σχετικούς συνδέσμους θα βρείτε έγγραφα και δικαιολογητικά που θα χρειαστείτε για τη σίτιση.",
      "Σχετικά Links:",
    ],
    links: [
      "https://www.uom.gr/student-care/sitish",
      "https://www.uom.gr/8883-anakoinosh-sitish-protoeton-foithton-akad-etoys-2020-2021",
      "https://www.uom.gr/8576-anakoinosh-sitish-foithton-akad-etoys-2020-2021",
      "https://www.uom.gr/assets/site/public/nodes/8576/7726-4618-dikaiologitika-sitisi-new-2020-21.docx",
      "https://www.uom.gr/assets/site/public/nodes/8576/7706-ypefthini-dilosi-sitisi-2020-2021.doc",
      "https://www.uom.gr/assets/site/public/nodes/8576/7689-2413-fek-1965-18-06-2012-b.pdf",
      "https://www.uom.gr/assets/site/public/nodes/8576/7776-7704-3886-oria-sitisis-2020-2021.docx",
    ],
  },
  {
    index: 6,
    tabOrder: 2,
    title: "Πληροφορίες για Στέγαση",
    content: [
      "Θα βρείτε στον πρώτο σύνδεσμο μία ανακοίνωση του ακαδημαϊκού έτους 2020-2021.",
      "Στους σχετικούς συνδέσμους θα βρείτε έγγραφα και δικαιολογητικά που θα χρειαστείτε για τη στέγαση.",
      "Πρέπει να γίνει ταυτοποίηση και στη συνέχεια να κάνετε αίτηση για τη στέγαση.",
      "Σχετικά Links:",
    ],
    links: [
      "https://www.uom.gr/8577-anakoinosh-stegash-foithton-akad-etoys-2020-2021",
      "https://www.uom.gr/assets/site/public/nodes/8577/7691-2414-kanonismos-estias-2012-fek.pdf",
      "https://www.uom.gr/assets/site/public/nodes/8577/7737-ypefthini-dilosi-estia.doc",
      "https://www.uom.gr/assets/site/public/nodes/8577/7731-7697-dikaiologitika-stegasi-new-2020-21.docx",
    ],
  },
  {
    index: 6,
    tabOrder: 3,
    title: "Πληροφορίες για Υγειονομική Περίθαλψη",
    content: [
      "Ως φοιτητές δικαιούστε και υγειονομική περίθαλψη. Θα βρείτε την ιστοσελίδα στον πρώτο σύνδεσμο.",
      "Οι ανασφάλιστοι φοιτητές καλύπτονται όπως οι ανασφάλιστοι πολίτες.",
      "Οι προπτυχιακοί και οι μεταπτυχιακοί φοιτητές καθώς και οι υποψήφιοι διδάκτορες που δεν έχουν άλλη ιατροφαρμακευτική και νοσοκομειακή περίθαλψη",
      "δικαιούνται πλήρη ιατροφαρμακευτική και νοσοκομειακή περίθαλψη στο Εθνικό Σύστημα Υγείας (Ε.Σ.Υ.) με κάλυψη των σχετικών δαπανών από",
      "τον Εθνικό Οργανισμό Παροχής Υπηρεσιών Υγείας (Ε.Ο.Π.Υ.Υ.) σύμφωνα",
      "με τις διατάξεις του Ν. 4452/2017 (Α΄17) άρθρο 31 παρ.3.",
      "Το Πανεπιστήμιο Μακεδονίας από 1/9/2017 παύει να παρέχει",
      "υγειονομική, ιατροφαρμακευτική και νοσοκομειακή περίθαλψη στους",
      "ανασφάλιστους φοιτητές, επομένως δεν εκδίδονται ούτε ανανεώνονται νέα Βιβλιάρια Υγείας.",
      "Οι ανασφάλιστοι φοιτητές με τον ΑΜΚΑ τους απευθύνονται στις Δημόσιες",
      "Δομές Υγείας της παρ. 1 του άρθρου 33 του Ν. 4368/2016(Α΄21).",
      "Σχετική εγκύκλιος αριθμ. Πρωτ. 171598/Ζ1/12-10-2017",
      "Στον τελευταίο σύνδεσμο θα βρείτε την Ευρωπαϊκή Κάρτα Ασφάλισης Ασθένειας (Ε.Κ.Α.Α.)",
      "Σχετικά Links:",
    ],
    links: [
      "https://www.uom.gr/student-care/ygeionomikh-perithalpsh",
      "https://www.uom.gr/assets/site/public/nodes/5457/2415-img06112017_0001.pdf",
      "https://www.uom.gr/student-care/eyropaikh-karta-asfalishs-astheneias-e-k-a-a",
    ],
  },
];
export default FirstYearInfo;
