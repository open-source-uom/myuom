//start,end = null -> Κλειστά
export const LIBRARY_OPENING_HOURS = {
  on_weekdays: {
    start: "8:00",
    end: "20:00",
  },
  on_saturday: {
    start: "9:00",
    end: "15:00",
  },
  on_sunday: {
    start: null,
    end: null,
  },
};

export const LIBRARY_PHONE_LIST = [
  "2310891751",
  "2310891752",
  "2310891118",
  "2310891137",
];

export const SOCIAL_MEDIA_URLS = {
  facebook: "https://www.facebook.com/OpenSourceUoM/",
  instagram: "https://www.instagram.com/opensourceuom/",
  youtube:
    "https://www.youtube.com/channel/UC98Ggzq6dl_nn5Y0BHb6SLA?sub_confirmation=1",
  twitter: "https://twitter.com/opensource_uom",
  LinkedIn: "https://www.linkedin.com/company/80766091/",
  gitlab: "https://gitlab.com/opensourceuom",
  discord: "https://discord.com/invite/XtxtM3ZHUm",
};

export const RESTAURANT_HOURS = {
  for_lunch: {
    on_weekdays: {
      start: {
        hours: 12,
        minutes: 30,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 13,
        minutes: 0,
      },
      end: {
        hours: 15,
        minutes: 30,
      },
    },
  },
  for_dinner: {
    on_weekdays: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 20,
        minutes: 0,
      },
    },
    on_weekend: {
      start: {
        hours: 18,
        minutes: 0,
      },
      end: {
        hours: 20,
        minutes: 0,
      },
    },
  },
  for_breakfast: {
    on_weekdays: {
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 9,
        minutes: 30,
      },
    },
    on_weekend: {
      start: {
        hours: 8,
        minutes: 0,
      },
      end: {
        hours: 9,
        minutes: 30,
      },
    },
  },
};

export const servicesData = [
  {
    tabName: "Γραφεία",
    index: 1,
    services: [
      {
        title: "Γραφείο Διασύνδεσης",
        url: "https://www.uom.gr/career-office",
        imgUrl:
          "https://www.uom.gr/assets/site/public/nodes/11869/13503-GrafeioDiasyndesis-2.jpg",
      },
      {
        title: "Γραφείο Πρακτικής",
        url: "http://practice.uom.gr/",

        imgUrl:
          "https://www.uom.gr/assets/site/public/nodes/8621/7799-praktikiaskisikyriafoto-4.jpg",
      },
      {
        title: "Γραφείο Αποφοίτων",
        url: "https://www.uom.gr/apofitoi",

        imgUrl:
          "https://www.uom.gr/assets/site/content/alumni/ALUMNI_LOGO_GR.PNG",
      },
      {
        title: "Γραφείο Erasmus",
        url: "https://www.uom.gr/erasmus-office",
        imgUrl:
          "https://www.uom.gr/assets/site/public/nodes/4228/2644-erasmus-header-2.jpg",
      },
      {
        title: "Γραφείο Φυσικής Αγωγής",
        url: "https://www.uom.gr/gym-office",

        imgUrl: "https://pbs.twimg.com/media/C5WlRPKWcAIJ90T.jpg",
      },
      {
        title: "Γραφείο Περιβαλλοντικής Διαχείρισης ΠαΜακ ",
        url: "http://www.perivpamak.gr/",

        imgUrl:
          "https://1.bp.blogspot.com/-t4PMium6v6g/X2x6Sz0aAFI/AAAAAAAAD4A/bJNjlS_kYr4lXGQdQBAD4mMdmrWEJ0qjgCNcBGAsYHQ/s2048/Logo%2B%25CE%25A0%25CE%25B5%25CF%2581%25CE%25B9%25CE%25B2%25CE%25B1%25CE%25BB%25CE%25BB%25CE%25BF%25CE%25BD%25CF%2584%25CE%25B9%25CE%25BA%25CE%25AE%25CF%2582.png",
      },
    ],
  },
  {
    tabName: "Φοιτητικοί σύλλογοι",
    index: 2,
    services: [
      {
        title: "Σύλλογος Φοιτητών Erasmus",
        url: "http://afroditi.uom.gr/erasmusp",
        imgUrl: "https://opensource.uom.gr/myuom_images/esnuom.png",
      },
      {
        title: "Σύλλογος Φοιτητών ΠΑΜΑΚ",
        url: "https://www.facebook.com/sfpamak/",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiD8KP64gxKFvyW4kbF-NK5Ao--9oSq9Fziw&usqp=CAU",
      },
      {
        title: "TedxUniversityofMacedonia",
        url: "https://tedxuniversityofmacedonia.com/",
        imgUrl:
          "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/b9772e1f6046e2a400bd049d39e2b30f~c5_100x100.jpeg?x-expires=1662890400&x-signature=RL58sc0MrQ%2Frls37bxGYeUbkaGk%3D",
      },
      {
        title: "AIESEC",
        url: "https://www.uom.gr/aiesec",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/4a/AIESEC-New-Logo1.png",
      },
      {
        title: "Finance Club",
        url: "https://www.financeclubuom.org/",
        imgUrl:
          "https://yt3.ggpht.com/ytc/AKedOLQ86pDFLPNZTJulIeWRCJajirV5WYsCiapFivo0=s900-c-k-c0x00ffffff-no-rj",
      },
      {
        title:
          "Άλικο ΚΘΒΕ-ΠΑΜΑΚ (πρώην Πολυφωνικά Αναλόγια) & Θεατρικό Εργαστήρι ΚΘΒΕ-ΠΑΜΑΚ",
        url: "https://www.uom.gr/aliko-kthbe-pamak-prohn-polyfonika-analogia-theatriko-ergasthri-kthbe-pamak",
        imgUrl:
          "https://www.uom.gr/assets/site/public/nodes/6799/4531-aliko-theatrikoergastiri-kthvepamak-4.jpg",
      },
      {
        title: "Open Source UoM",
        url: "https://opensourceuom.gitlab.io/",
        imgUrl: "https://opensourceuom.gitlab.io/assets/img/team/avatar.png",
      },
      {
        title: "Λέσχη Κυβερνοασφάλειας Πανεπιστημίου Μακεδονίας",
        url: "https://csc.uom.gr/",
        imgUrl:
          "https://csc.uom.gr/wp-content/uploads/2021/02/Myrmidones_02.jpg",
      },
    ],
  },
  {
    tabName: "Ύπόλοιπες υπηρεσίες",
    index: 3,
    services: [
      {
        title:
          "Επιτροπή Ηθικής και Δεοντολογίας της Έρευνας (Ε.Η.Δ.Ε.) του Πανεπιστημίου Μακεδονίας",
        url: "https://www.uom.gr/ethics",
        imgUrl: "https://www.uom.gr/assets/site/public/nodes/4013/10348-7.png",
      },
      {
        title: "Συνήγορος του Φοιτητή",
        url: "https://www.uom.gr/synhgoros-toy-foithth-2021-2022",
        imgUrl:
          "https://foititisonline.gr/wp-content/uploads/2018/08/sinigoros-tou-foititi-3.jpg",
      },
      {
        title: "Επιτροπή Ισότητας Φύλων",
        url: "https://www.uom.gr/eif",
        imgUrl:
          "https://www.uom.gr/assets/site/public/nodes/8310/9033-EIFLOGO.jpg",
      },
      {
        title: "Κέντρο Συμβουλευτικής και Στήριξης Φοιτητών",
        url: "https://www.uom.gr/student-support",
        imgUrl: "https://opensource.uom.gr/myuom_images/kssf.jpeg",
      },
      {
        title: "Μονάδα Προσβασιμότητας ΠΑΜΑΚ",
        url: "https://www.uom.gr/accessibility",
        imgUrl:
          "https://scontent.fskg1-2.fna.fbcdn.net/v/t1.6435-9/162199791_193459489248515_2795892316391728468_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IluJohFv1-8AX9OpJ8G&_nc_ht=scontent.fskg1-2.fna&oh=00_AT8_DZhdnm_-2p642TAReo8lDCKoUQupcujQ0FhiBmKgRg&oe=632D228D",
      },
      {
        title: "Εκδόσεις Πανεπιστημίου Μακεδονίας",
        url: "https://www.uompress.gr/index.php/el/#",
        imgUrl: "https://www.uompress.gr/images/stories/logo_uom_v.png",
      },
    ],
  },
];
