<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">myUoM - The Students' Application</h3>

  <p align="center">
    ALl your university's services in one place.
    <br />
    <a href="https://gitlab.com/opensourceuom/myUoM"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/github_username/repo_name">View Demo</a> -->
    ·
    <a href="https://gitlab.com/opensourceuom/myUoM/-/issues">Report Bug</a>
    ·
    <a href="https://gitlab.com/opensourceuom/myUoM/-/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#development-model">Development model</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Η εφαρμογή αυτή είναι δημιουργία της Ομάδας Ανάπτυξης της Ομάδας Ανοιχτού Λογισμικού του Πανεπιστημίου Μακεδονίας. Το εγχείρημα αυτό, ξεκίνησε στις 20 Ιουλίου του 2022 όπου και η ομάδα ξεκίνησε να κατασκευάζει την εφαμοργή.
Στην εφαρμογή γίνεται η συλλογή όλων των ψηφιακών και μη υπηρεσιών του πανεπιστημίου, και παρουσιάζεται με έναν πολύ απλό και εύκολο τρόπο στο κινητό του κάθε φοιτητή που τη χρησιμοποιεί.
Η εφαρμογή θα ενημερώνεται συνεχώς και θα αναβαθμίζεται με νέα features.

Το ιδιαίτερο στην υλοποίηση της εφαρμογής αυτής είναι ότι η ομάδα μας προσπάθησε να τυποποιήσει όλους τους τρόπους με τους οποίους γίνεται η συλλογή πληροφορίας, έτσι ώστε άλλες ομάδες φοιτητών να την προσαρμόσουν στο δικό τους πανεπιστήμιο.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Development model

Η ανάπτυξη και οι αναβαθμίσεις της εφαρμογής θα λαμβάνουν μέρος στο Gitlab.
Το εργαλείο που χρησιμοποίησε όλη ομάδα για το version control είναι το Gitkraken το οποίο μπορείτε να κατεβάσετε [εδώ](gitkraken.link/geoapos) και το GitLens σαν πρόσθετο του VS Code, που μπορείτε να κατεβάσετε [εδώ](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

Για να είμαστε όλοι συντονισμένοι ακολουθήσαμε το παρακάτω μοντέλο:

0. Θέσαμε τους υπευθύνους σε κάθε τομέα ανάπτυξης (Front-end, Back-end, Operations etc)
1. Γράψαμε όλα τα issues στο Gitlab και κατηγοριοποιήσαμε τα θέματα που μπορεί να μας προκύψουν.
2. Θέσαμε priorites στα issues για να γνωρίζει η ομάδα ποια πρέπει να γίνουν άμεσα και ποια μπορούν να καθυστερήσουν. Γενικά η ομάδα λειτουργεί με το ΚΑΝΒΑΝ μοντέλο.
3. Αποφασίσαμε ότι όλες μας οι μεταβλητές θα είναι camelCase και στην περίπτωση της React, τα components θα είναι functions.
4. Για την επίλυση ενός issue, δημιουργούμε ένα branch από το main με τον αριθμό του issue τον οποίο δίνει αυτόματα το Gitlab, λύνουμε το συγκεκριμένο issue, ακόμα και αν αποτελεί feature, και όταν τελειώσουμε, κάνουμε push το branch στο origin/ονομα_branch , και στέλνουμε pull request μέσω Gitkraken με τίτλο Fixes #αριθμός_issue. Να σημειώσουμε εδώ, ότι τα issues θα λύνονται από την νεότερη έκδοση του main και **ΑΠΑΓΟΡΕΥΕΤΑΙ** αυτός που είναι author του issue, να κάνει approve και merge στο main. Φυσικά, σε αυτόν που ανατίθεται να κάνει merge ένα issue, θα πρέπει να το έχει τεστάρει locally στο δικό του μηχάνημα και να κάνει delete source branch.
5. Το branch deployment είναι αυτό στο οποίο θα ανεβαίνουν τα διάφορα versions του project, ενώ στο main θα φαίνεται η πορεία ανάπτυξης του έργου.
6. Για pair programming χρησιμοποιούμε το [LiveShare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) extension.

<p align="right">(<a href="#top">back to top</a>)</p>

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/opensourceuom/myUoM.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start your server
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

Version 1

- Γραφεία Καθηγητών και ώρες συνεργασίας
- Μενού του εστιατορίου
- Υπηρεσίες Εύδοξου
- Πρόγραμμα μαθημάτων και εξετάσεων όλων των σχολών
- Υπηρεσίες Βιβλιοθήκης
- Πληροφορίες για την εγγραφή των πρωτοετών
- Πληροφορίες για ορκωμοσίες
- Εκδόσεις Πανεπιστημίου
- Φοιτητική Μέριμνα, OpenEclass, StudentsWeb

See the [open issues](https://gitlab.com/opensourceuom/myUoM/-/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Open Source UoM - [@twitter_handle](https://twitter.com/opensource_uom) - linux-team@uom.edu.gr

Project Link: [https://gitlab.com/opensourceuom/myUoM/](https://gitlab.com/opensourceuom/myUoM/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Ευχαριστούμε πολύ τους καθηγητές που μας βοήθησαν στη πορεία της ανάπτυξης του έργου αυτού και συγκεκριμένα:

- Τον επιστημονικό υπεύθυνο της ομάδας και του project κ. [Άγγελο Σιφαλέρα](http://sites.uom.gr/sifalera/)
- Τον κοσμήτορα και υποστηρικτή οποιαδήποτε κίνησης μας κ. [Αλέξανδρο Χατζηγεωργίου](https://www.uom.gr/achat)

<p align="right">(<a href="#top">back to top</a>)</p>
