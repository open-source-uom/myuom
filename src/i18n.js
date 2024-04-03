import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enRestaurant from "./assets/locales/en/restaurant.js";
import enFreshmen from "./assets/locales/en/freshmen.js";
import enLibrary from "./assets/locales/en/library.js";
import enMaps from "./assets/locales/en/maps.js";
import enServices from "./assets/locales/en/services.js";
import enAcademicPersonel from "./assets/locales/en/academic_personel.js";
import enFaq from "./assets/locales/en/faq.js";
import enProjectMembers from "./assets/locales/en/project_members.js";
import enSettingsPage from "./assets/locales/en/settings_page.js";
import enAboutPage from "./assets/locales/en/about_page.js";
import enError404 from "./assets/locales/en/error404.js"

import elRestaurant from "./assets/locales/el/restaurant.js";
import elFreshmen from "./assets/locales/el/freshmen.js";
import elLibrary from "./assets/locales/el/library.js";
import elMaps from "./assets/locales/el/maps.js";
import elServices from "./assets/locales/el/services.js";
import elAcademicPersonel from "./assets/locales/el/academic_personel.js";
import elFaq from "./assets/locales/el/faq.js";
import elProjectMembers from "./assets/locales/el/project_members.js";
import elSettingsPage from "./assets/locales/el/settings_page.js";
import elAboutPage from "./assets/locales/el/about_page.js";
import elError404 from "./assets/locales/el/error404.js"

const resources = {
  en: {
    translation: {
      ...enRestaurant,
      ...enFreshmen,
      ...enLibrary,
      ...enMaps,
      ...enServices,
      ...enAcademicPersonel,
      ...enFaq,
      ...enProjectMembers,
      ...enSettingsPage,
      ...enAboutPage,
      ...enError404,
      //categories.js
      current_department: "Current Department: ",
      close: "Close",
      eudoxus: "Eudoxus",
      initial_page: "Home",
      course_schedule: "Course Schedules",
      restaurant: "Restaurant",
      library: "Library",
      exams_schedule: "Exams Schedule",
      academic_personnel: "Academic Personnel",
      map: "Maps",
      other_services: "Other Services",
      announcements: "Announcements",
      orkomosies: "Graduation",
      foititiki_merimna: "Student Care",
      freshmen_guides: "Freshmen",
      faq_title: "Frequently Asked",
      faq_subtitle: "You will find answers that might be of interest to you.",
      masters: "Masters",
      error_title: "No Department selected",
      error_description: "Please select Department from Settings",
      graduation_redirection_message:"Redirecting to section",
      graduation_description:"Please select Department from Settings"
      // //constants.js --> offices
      // // offices: "Offices",
      // // liaison_office: "Liason Office",
      // // internship_office: "Internship Office",
      // // alumni_office: "Alumni Office",
      // // erasmus_office: "Erasmus Office",
      // // physical_education_office: "Physical Education Office",
      // // environmental_management_office: "Environmental Policy Office",
      // //constants.js --> Student Teams
      // student_clubs: "Student Clubs",
      // erasmus_student_club: "Erasmus Student Club",
      // cybersecurity_student_club:
      //   "Cybersecurity Club of University of Macedonia",
      // //finance_student_club: "Finance Club",
      // //   aiesec_student_club:"AIESEC"
      // //constants.js --> Other Services
      // ethics_research_committee: "Committee on Research Ethics and Integrity",
      // student_advocate: "Student Advocate",
      // gender_eq_committee: "Gender Equality Committee",
    },
  },
  el: {
    translation: {
      ...elRestaurant,
      ...elFreshmen,
      ...elLibrary,
      ...elMaps,
      ...elServices,
      ...elAcademicPersonel,
      ...elFaq,
      ...elProjectMembers,
      ...elSettingsPage,
      ...elAboutPage,
      ...elError404,

      //categories.js
      current_department: "Έχεις επιλέξει: ",
      close: "Κλείσιμο",
      eudoxus: "Εύδοξος",
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
      freshmen_guides: "Πρωτοετείς",
      faq_title: "Συχνές Ερωτήσεις",
      faq_subtitle: "Εδώ θα βρείτε απαντήσεις σε ερωτήσεις που ενδέχεται να σας ενδιαφέρουν.",
      masters: "Μεταπτυχιακά",
      error_title: "Δεν έχει επιλεγεί τμήμα",
      error_description: "Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις",
      graduation_redirection_message:"Ανακατεύθυνση στο τμήμα",
      graduation_description:"Παρακαλώ επιλέξτε τμήμα από τις ρυθμίσεις."
      //constants.js
      // offices: "Γραφεία",
      // liaison_office: "Γραφείο Διασύνδεσης",
      // internship_office: "Γραφείο Πρακτικής",
      // alumni_office: "Γραφείο Αποφοίτων",
      // erasmus_office: "Γραφείο Erasmus",
      // physical_education_office: "Γραφείο Φυσικής Αγωγής",
      // environmental_management_office:
      //   "Γραφείο Περιβαλλοντικής Διαχείρισης ΠαΜακ",
      // cybersecurity_student_club:
      //   "Λέσχη Κυβερνοασφάλειας Πανεπιστημίου Μακεδονίας",
      // //constants.js --> Other Services
      // ethics_research_committee:
      //   "Επιτροπή Ηθικής και Δεοντολογίας της Έρευνας(Ε.Η.Δ.Ε.) του Πανεπιστημίου Μακεδονίας",
      // student_advocate: "Συνήγορος του Φοιτητή",
      // gender_eq_committee: "Επιτροπή Ισότητας Φύλων",
      // student_consulting_support_center:
      //   "Κέντρο Συμβουλευτικής και Στήριξης Φοιτητών",
      // accessibility_unit: "Μονάδα Προσβασιμότητας ΠΑΜΑΚ",
      // uni_publications: "Εκδόσεις Πανεπιστημίου Μακεδονίας",
      //depnames.js
      //questionsForFAQ.js

      //Μέρες εβδομάδας
      // monday: "ΔΕΥΤΕΡΑ",
      // tuesday: "ΤΡΙΤΗ",
      // wednesday: "ΤΕΤΑΡΤΗ",
      // thursday: "ΠΕΜΠΤΗ",
      // friday: "ΠΑΡΑΣΚΕΥΗ",
      // saturday: "ΣΑΒΒΑΤΟ",
      // sunday: "ΚΥΡΙΑΚΗ",
      // //Φαγητά
      // choiceOfSeasonalFruits: "Επιλογή από φρούτα εποχής",
      // choiceOfSeasonalSalads: "Επιλογή από σαλάτες εποχής",
      // gratedCheese: "Τυρί τριμμένο",
      // rizoto: "Ριζότο",
      // vegetarian: "Χορτοφαγικό (ιατρικοί λόγοι)",
      // porkBitesWithPeppersAndMushrooms:
      //   "Χοιρινές μπουκιές με πιπεριές & μανιτάρια,",
      // porkSteakWithMustard: "Χοιρινή μπριζόλα με σως μουστάρδας,",
      // xoirinoKokkinisto: "Χοιρινό κοκκινιστό σελινάτο,",
      // xoirinoSouvlaki: "Χοιρινό σουβλάκι,",
      // kototiganiaAlaKrem: " Κοτοτηγανιά αλά κρεμ",
      // mpiftekiLahanikon: "Μπιφτέκι λαχανικών",
      // fasoliaLadera: "Φασολάκια λαδερά,",
      // mpriam: " Μπριάμ,",
      // lahanorizo: " Λαχανόρυζο",
      // mpoutiKotLemonato: "Μπούτι κοτόπουλου ψητό λεμονάτο,",
      // moshariNouaMeNtomata: " Μοσχαράκι νουά με φρέσκια ντομάτα,",
      // mpiftekiKotMeMoustarda: " Μπιφτέκι κοτόπουλο με σως μουστάρδας,",
      // roloGalopoulas: " Ρολό γαλοπούλας",
      // gemistaLadera: "Γεμιστά λαδερά",
      // kritharakiIrizi: "Κριθαράκι ή ρύζι",
      // cheesepie: "Τυρόπιτα χωριάτικη",
      // spinachpie: "Σπανακόπιτα χωριάτικη",
      // mushroompieWithFyllo: "Μανιταρόπιτα νηστίσιμη με φύλλο κρούστας",
      // scrammbledEggs: "Στραπατσάδα με ντομάτα ή φέτα",
      // fetaCheese: "Τυρί φέτα",
      // fakes: "Φακές σούπα με καρότο & ντομάτα,",
      // fasolada: "Φασόλια πηλιορείτικα με χωριάτικο λουκάνικο,",
      // revithada: " Ρεβυθάδα λεμονάτη,",
      // fakorizo: " Φακόρυζο με ντομάτα & φρέσκο κρεμμυδάκι",
      // kolokithokeftedes: "Κολοκυθοκεφτέδες",
      // gliko: "Γλυκό",
      // makaroniaKarbonara: "Πέννες με κρέμα γάλακτος & μπέικον,",
      // makaroniaMeSaltsa: "Πέννες με σάλτσα μπολονέζ,",
      // makaroniaTrikolore: " Πέννες τρικολόρε με σάλτσα λαχανικών με κοτόπουλο",
      // makaronosalata: "Μακαρονοσαλάτα",
      // pastitsio: "Παστίτσιο,",
      // mpiftekiBeefMeKaseri: "Μπιφτέκι μόσχου με κασέρι,",
      // soutzoukakiaNtomata: "Σουτζουκάκια με σάλτσα ντομάτας,",
      // keftedakiaKotopoulo: "Κεφτεδάκια κοτόπουλου με βασιλικό & ντομάτα,",
      // xoirinoEksohiko: "Χοιρινό εξοχικό με φέτα & μανιτάρια",
      // spanakorizo: "Σπανακόρυζο",
      // frenchFries: "Πατάτες τηγανητές & ρύζι",
      // arakas: "Αρακάς με πατάτες & καρότα,",
      // patatesGiahni: "Πατάτες γιαχνί,",
      // gigantes: "Φασόλια γίγαντες με πιπεριές πολύχρωμες & βασιλικό,",
      // galeos: "Φέτες γαλεού φούρνου με σως μουστάρδας,",
      // soupies: "Σουπιές κρασάτες με πέννες τρικολόρε,",
      // kritharotoThalassinon: "Κριθαρότο θαλασσινών",
      // patatesFournou: "Ρύζι & πατάτες φούρνου",
      // pitsaSpecial: "Πίτσα σπέσιαλ με ζαμπόν,",
      // smokedTurkey: "μπέικον & καπνιστή γαλοπούλα,",
      // pitsaMesogeiaki: "Πίτσα Μεσογειακή με γκούντα,",
      // tiriKaiLahanika: "τυρί φέτα & λαχανικά,",
      // pitsaMeKima: "Πίτσα με κιμά & γκούντα,",
      // pitsaMeKotopoulo: "Πίτσα με κοτόπουλο & γκούντα",
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
const defaultLang = localStorage.getItem("preferred_language")
i18n.use(initReactI18next).init({
  // debug: true,
  resources,
  whitelist: ["en", "el"],
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
