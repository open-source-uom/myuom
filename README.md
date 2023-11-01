<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Forks][forks-shield]](https://gitlab.com/opensourceuom/myUoM/-/forks)
[![Stargazers][stars-shield]](https://gitlab.com/opensourceuom/myUoM/-/starrers)
[![Issues][issues-shield]](https://gitlab.com/opensourceuom/myUoM/-/issues)
[![MIT License][license-shield]](https://gitlab.com/opensourceuom/myUoM/-/blob/main/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/company/80766091)

<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="src/assets/myUOMLogo.png" alt="Logo" width="80" height="80">
  <h3 align="center">myUoM</h3>

  <p align="center">
    The official University of Macedonia Student application
    <br />
    <a href="https://gitlab.com/opensourceuom/myUoM"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://my.uom.gr/">View the Project</a>
    ·
    <a href="https://gitlab.com/opensourceuom/myUoM/-/issues/new">Report Bug</a>
    ·
    <a href="https://gitlab.com/opensourceuom/myUoM/-/issues/82">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#Bring-this-App-to-your-University">Bring this App to Your University:</a></li>
      </ul>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The myUoM app is a project of the Open Source Team of Applied Informatics, University of Macedonia (https://opensource.uom.gr).
It was designed to facilitate students' daily interactions with the university. This is a project that is part of our effort to establish myUni as a national application for each Greek University. We are open to your ideas regarding the integration and architecture of it to make it easier to be widely accepted and implemented. You can join our [discord server](https://discord.gg/nzMjpRYxp6) and tell us about them and give us feedback(we have a channel dedicated solely to the development of MyUoM).

It has been adopted by the [University of Western Attica](iam.uniwa.gr), and another implementation is now being worked by the [Internation Western University of Greece](https://www.ihu.gr). Also, [University of Crete](https://en.uoc.gr/) has shown interest in adopting it and we are cooperating to begin their journey.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Bring this App to your University
This app is great both for newcomers and more senior students. For newcomers it serves as a way to get to know the university and for seniors it is an easy way to be reminded of trivial information such as timetables for various university services.

It does not need more than a few people. 
Two technical people and someone who will be in charge of communicating with the University is more than enough.
Data entry might be a bit tedious,but with the help of the community(and also for feedback) and a good CMS it can be made easier.

Also to make the app officially recognised by the University, it needs to be communicated with the Dean of the University(a submission preferrable done by a professor or prominent University Stuff in order to be given attention sooner).

The app is a simple website built with [React-Next.js](https://nextjs.org/), [Chakra-UI](https://chakra-ui.com/) and [Sanity](sanity.io) as a CMS solution(the free tier is more than enough for such project).

The customization includes the following things:
1. Changing the data for the University(optionally, do translations)
2. Theming (using the university colors)
3. Additional Changes-Customization

#### 1. Data Gathering
For this part it is recommended to get in touch with university stuff(a professor the team is close with is ideal), in order to obtain the data fast and in a structured way. 

Otherwise collecting it from a university website, using a scraping tool or manually is also possible.

The data used in this app are:

- University Stuff Data(Title, Office Phone Number,Email,Building of Office and Office Number)
- Student Restaurant Schedule
- The departments of the University
- Links for the Course Schedules for each department
- Links for the Exams Schedules for each department
- Links for External Services(e.g. a Student Portal, the library website)
- Map data
  - Photos of the floor Plans(emergency maps can also be used with a little bit of editing)
  - For those photos, for each place in the floor x,y positions should be made and associated with that specific place(to draw an indicator).
  - Categories of the places found in the University(e.g. Student Clubs, Sport Facilities etc. etc.)
- Services offered by the University(e.g Internship Office, Advisory Services,Erasmus Office, Alumni Office)
- Freshmen Guides([Markdown](https://en.wikipedia.org/wiki/Markdown) Files for convenience)
- FAQ
- Student Clubs

#### 2. Theming

We are using Chakra-UI as a frontend component framework, and theming works like [this](https://chakra-ui.com/docs/components/accordion/theming#theming) in Chakra-UI.

Changing the colors and fonts is enough to customise it in terms of theming, responsiveness and other properties do not need necessarily change.

#### 3. Extra Customisation

To get an idea of how customising would look like someone can see how the [University of Western Attica](iam.uniwa.gr) customised it.
For example, for Universities with multiple buildings(UoM has only one building with multiple sub-buildings so it was not needed for us), the Map can be configured to be enabled only when the user has selected his department.

If you made it this far, you might be interested in reading the documentation we have carefully crafted for you. You can find it in the /docs folder. Any comments you have regarding the documentation, submit it as an issue, so we can improve it and make it easier for other people to follow along. 

### Built With

- [![React][react.js]][react-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**. To assist you for your first contribution we will be glad to hear from you and support you. Find us on our [discord server](https://discord.gg/nzMjpRYxp6) and send a message and expect help from the friendly Community of Open Source UoM.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See [`LICENSE`](https://gitlab.com/opensourceuom/myUoM/-/blob/main/LICENSE) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Open Source UoM - [@opensource_uom](https://twitter.com/opensource_uom) - linux-team@uom.edu.gr - https://opensource.uom.gr/

Project Link: [https://gitlab.com/opensourceuom/myUoM](https://gitlab.com/opensourceuom/myUoM)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/gitlab/contributors/opensourceuom/myUoM?style=for-the-badge
[forks-shield]: https://img.shields.io/gitlab/forks/opensourceuom/myUoM?style=for-the-badge
[stars-shield]: https://img.shields.io/gitlab/stars/opensourceuom/myUoM?style=for-the-badge
[issues-shield]: https://img.shields.io/gitlab/issues/open/opensourceuom/myUoM?style=for-the-badge
[license-shield]: https://img.shields.io/gitlab/license/opensourceuom/myUoM?style=for-the-badge
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
