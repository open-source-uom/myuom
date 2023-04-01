import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      //categories.js
      initial_page: "Home",
      course_schedule: "Course Schedule",
      restaurant: "Restaurant",
      library: "Library",
      exams_schedule: "Exams Schedule",
      academic_personnel: "Academic Personnel",
      map: "Maps",
      other_services: "Other Services",
      announcements: "Announcements",
      orkomosies: "Inaugurations",
      foititiki_merimna: "Student Care",
      //constants.js --> offices
      offices: "Offices",
      liason_office: "Liason Office",
      internship_office: "Internship Office",
      alumni_office: "Alumni Office",
      erasmus_office: "Erasmus Office",
      physical_education_office: "Physical Education Office",
      environmental_management_office: "Environmental Policy Office",
      //constants.js --> Student Teams
      student_clubs: "Student Clubs",
      erasmus_student_club: "Erasmus Student Club",
      cybersecurity_student_club:
        "Cybersecurity Club of University of Macedonia",
      //finance_student_club: "Finance Club",
      //   aiesec_student_club:"AIESEC"
      //constants.js --> Other Services
      ethics_research_committee: "Committee on Research Ethics and Integrity",
      student_advocate: "Student Advocate",
      gender_eq_committee: "Gender Equality Committee",
    },
  },
  el: {
    translation: {
      //categories.js

      initial_page: "Αρχική",
      course_schedule: "Πρόγραμμα Μαθημάτων",
      restaurant: "Εστιατόριο",
      library: "Βιβλιοθήκη",
      exams_schedule: "Πρόγραμμα Εξετάσεων",
      academic_personnel: "Ακαδημαϊκό Προσωπικό",
      map: "Χάρτης",
      other_services: "Υπόλοιπες Υπηρεσίες",
      announcements: "Ανακοινώσεις",
      orkomosies: "Ορκομωσίες",
      foititiki_merimna: "Φοιτητική Μέριμνα",
      //constants.js
      offices: "Γραφεία",
      liason_office: "Γραφείο Διασύνδεσης",
      internship_office: "Γραφείο Πρακτικής",
      alumni_office: "Γραφείο Αποφοίτων",
      erasmus_office: "Γραφείο Erasmus",
      physical_education_office: "Γραφείο Φυσικής Αγωγής",
      environmental_management_office:
        "Γραφείο Περιβαλλοντικής Διαχείρισης ΠαΜακ",
      cybersecurity_student_club:
        "Λέσχη Κυβερνοασφάλειας Πανεπιστημίου Μακεδονίας",
      //constants.js --> Other Services
      ethics_research_committee:
        "Επιτροπή Ηθικής και Δεοντολογίας της Έρευνας(Ε.Η.Δ.Ε.) του Πανεπιστημίου Μακεδονίας",
      student_advocate: "Συνήγορος του Φοιτητή",
      gender_eq_committee: "Επιτροπή Ισότητας Φύλων",
      student_consulting_support_center:
        "Κέντρο Συμβουλευτικής και Στήριξης Φοιτητών",
      accessibility_unit: "Μονάδα Προσβασιμότητας ΠΑΜΑΚ",
      uni_publications: "Εκδόσεις Πανεπιστημίου Μακεδονίας",
      //depnames.js
      ess_deparment: "Διεθνών και Ευρωπαϊκών Σπουδών",
      bso_department: "Βαλκανικών, Σλαβικών & Ανατολικών Σπουδών",
      eco_department: "Οικονομικών Επιστημών",
      dai_department: "Εφαρμοσμένης Πληροφορικής",
      bas_department: "Οργάνωσης & Διοίκησης Επιχειρήσεων",
      fin_department: "Λογιστικής και Χρηματοοικονομικής",
      esp_deparment: "Εκπαιδευτικής & Κοινωνικής Πολιτικής",
      msa_department: "Μουσικής Επιστήμης & Τέχνης",
      //questionsForFAQ.js
      
    },
  },
  de: {
    translation: {
      initial_page: "Startseite",
      course_schedule: "Kursplan",
      restaurant: "Restaurant",
      library: "Bibliothek",
      announcements: "Ankündigungen",
      orkomosies: "Einweihungen",
      foititiki_merimna: "Studentenpflege",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  // fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
