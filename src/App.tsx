import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/vendor.scss";
import "./styles/App.scss";
import { projects } from "./data/projects";
import { skillGroups } from "./data/skills";
import { Mail, Phone } from "lucide-react";


function App() {
  const [preloader, setPreloader] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 900);
  }, []);

  return (
    <div id="top">
      {/* <!-- # preloader
    ================================================== --> */}
      <div id="preloader" style={{ display: preloader ? "" : "none" }}>
        <div id="loader"></div>
      </div>
      {/* <!-- # page wrap
    ================================================== --> */}
      <div className="s-pagewrap">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* <!-- ## site header ================================================== --> */}
        <header
          className="s-header"
          style={{ transform: "translateY(0)", opacity: 1 }}
        >
          <div className="header-mobile">
            <span className="mobile-home-link">
              <a href="index.html">Luther.</a>
            </span>
            <a className="mobile-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </div>

          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                <li>
                  <a href="index.html" className="home-link">
                    Home
                  </a>
                </li>
                <li className="current">
                  <a href="#intro" className="smoothscroll">
                    About me
                  </a>
                </li>
                <li>
                  <a href="#about" className="smoothscroll">
                    Skill
                  </a>
                </li>
                <li>
                  <a href="#works" className="smoothscroll">
                    Work Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" className="smoothscroll">
                    Project
                  </a>
                </li>
                <li>
                  <a href="#edcation" className="smoothscroll">
                    Edcation
                  </a>
                </li>
                <li>
                  <a href="#contact" className="smoothscroll">
                    {"My Contact"}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* <!-- end s-header --> */}
        {/* <!-- ## main content
        ==================================================- --> */}
        <main className="s-content">
          {/* <!-- ### intro
            ================================================== --> */}
          <section id="intro" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div className="text-pretitle with-line">Hello</div>

                <h1 className="text-huge-title">
                  <p>
                    My name is Lau Chun Leung, <br />
                    you can call me Derek Lau,
                    <br />
                    a full-stack developer <br />
                    & frontend developer based.
                    <br />
                  </p>
                </h1>
              </div>

              <ul className="intro-social">
                <li>
                  <a href="#0">Jobsdb</a>
                </li>
                <li>
                  <a href="#0">LinkedIn</a>
                </li>
                <li>
                  <a href="#0">GitHub</a>
                </li>
              </ul>
            </div>
            {/* <!-- end intro content --> */}
            <a href="#about" className="intro-scrolldown smoothscroll">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
              </svg>
            </a>
          </section>
          {/* <!-- end s-intro --> */}
          {/* <!-- ### about
            ================================================== --> */}
          <section id="about" className="s-about target-section">
            <div className="row about-info wide" data-animate-block>
              <div className="column lg-6 md-12 about-info__pic-block">
                <img
                  src={"/src/images/about-photo.jpg"}
                  srcSet="/src/images/about-photo.jpg 1x, /src/images/about-photo@2x.jpg 2x"
                  alt=""
                  className="about-info__pic"

                />
              </div>

              <div className="column lg-6 md-12">
                <div className="about-info__text">
                  <h2 className="text-pretitle with-line">
                    About Me
                  </h2>
                  <p className="attention-getter">
                    {
                      "I graduated with a Higher Diploma in Computer Engineering from the Hong Kong Institute of Vocational Education (IVE). After graduation, I worked as a technician at HKT for three years, focusing on network maintenance and setup. I then worked as a programmer at Catomind for three and a half years, specializing in web development."
                    }
                  </p>
                  {/* <a
                    href="#0"
                    className="btn btn--medium u-fullwidth"

                  >
                    Download CV
                  </a> */}
                </div>
              </div>
            </div>
            {/* <!-- about-info --> */}
            <div className="row my-skills" data-animate-block>
              <div className="column lg-12">
                <h2 className="text-pretitle with-full-line">
                  My Skills
                </h2>
                {skillGroups.map((data) => <><h4 className="text-pretitle with-line">
                  {data.title}
                </h4>
                  <ul className="skills-list h1">
                    {data.skillArr.map((skill) => <li>{skill.title}<StarRating rating={skill.star} /></li>)}
                  </ul></>)}
              </div>
            </div>
            {/* <!-- end about-expertise --> */}
            {/* <div className="row about-expertise">
              <div className="column lg-12">
                <h2 className="text-pretitle">
                  Expertise
                </h2>

                <ul className="skills-list h1">
                  <li>Visual Design</li>
                  <li>Branding Identity</li>
                  <li>UI Design</li>
                  <li>Product Design</li>
                  <li>Prototyping</li>
                  <li>Illustration</li>
                </ul>
              </div>
            </div> */}
            {/* <!-- end about-expertise --> */}
            <div className="row about-timelines">
              <div className="column lg-6 tab-12">
                <h2 className="text-pretitle with-line">
                  {"Working Experiences"}
                </h2>
                <div className="timeline">
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">{"Catomind"}</h4>
                      <h5 className="timeline__meta">
                        {"Programmer(Full stack developer)"}
                      </h5>
                      <p className="timeline__timeframe">
                        {"August 2021 - Jan 2025"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">{"HKT Limited"}</h4>
                      <h5 className="timeline__meta">{"Technician"}</h5>
                      <p className="timeline__timeframe">
                        {"August 2019 - August 2021"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        {"HKITE - SmartCard Solutions Limited"}
                      </h4>
                      <h5 className="timeline__meta">{"Technician"}</h5>
                      <p className="timeline__timeframe">
                        {"January 2019 - April 2019"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">{"PARKnSHOP"}</h4>
                      <h5 className="timeline__meta">{"Staff"}</h5>
                      <p className="timeline__timeframe">
                        {"May 2016 - Mar 2017"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>
                        Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex
                        in magna consectetur nisi cupidatat laboris esse eiusmod
                        deserunt aute do quis velit esse sed Ut proident
                        cupidatat nulla esse cillum laborum occaecat nostrud sit
                        dolor incididunt amet est occaecat nisi.
                      </p>
                    </div>
                  </div>
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">{"Mcdonald"}</h4>
                      <h5 className="timeline__meta">{"Staff"}</h5>
                      <p className="timeline__timeframe">
                        {"Dec 2015 - Apr 2016"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- end timeline --> */}
              </div>
              {/* <!-- end column --> */}
              <div className="column lg-6 tab-12">
                <h2 className="text-pretitle with-line">
                  {"Education"}
                </h2>
                <div className="timeline">
                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        {"Hong Kong Institute of Vocational Education(HKIVE)"}
                      </h4>
                      <h5 className="timeline__meta">
                        {"Higher Diploma of Computer Engineering"}
                      </h5>
                      <p className="timeline__timeframe">
                        {"Graduated: June 2020"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>

                  <div className="timeline__block">
                    <span className="timeline__bullet" />
                    <div className="timeline__header">
                      <h4 className="timeline__title">
                        {"Hong Kong Institute of Vocational Education(HKIVE)"}
                      </h4>
                      <h5 className="timeline__meta">
                        {"Foundation Diploma of Information Technology"}
                      </h5>
                      <p className="timeline__timeframe">
                        {"Graduated: June 2017"}
                      </p>
                    </div>
                    <div className="timeline__desc">
                      <p>{"--------------------------------"}</p>
                    </div>
                  </div>
                </div>
                {/* <!-- end timeline --> */}
              </div>
              {/* <!-- end column --> */}
            </div>
            {/* <!-- end about-timelines --> */}
          </section>
          {/* <!-- end s-about --> */}
          {/* <!-- ### works
            ================================================== --> */}
          <section id="projects" className="s-works target-section">
            <div className="row works-portfolio">
              <div className="column lg-12" data-animate-block>
                <h2 className="text-pretitle with-line">
                  Recent Projects
                </h2>
                <p className="h1">
                  {"All the projects I have participated in."}
                </p>
                <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                  {projects.map((data) => (
                    <li className="folio-list__item column">
                      <a
                        className="folio-list__item-link"
                        href={data.OfficialWebsite}
                        target="_blank"
                      >
                        <div className="folio-list__item-pic">
                          <img
                            src={data.logoUrl}
                            ///srcSet="/src/images/portfolio/fuji.jpg 1x, /src/images/portfolio/fuji@2x.jpg 2x"
                            alt=""
                          />
                        </div>
                        <div className="folio-list__item-text">
                          <div className="folio-list__item-cat">
                            {data.shortName}
                          </div>
                          <div className="folio-list__item-title">
                            {data.fullName}
                          </div>
                        </div>
                      </a>
                      <a
                        className="folio-list__proj-link"
                        href="#"
                        title="project link"
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  ))}

                  {projects.map((data) => (
                    <div className="mobile-project">
                      <div className="modal-popup">
                        <img src={data.logoUrl} alt="" />

                        <div className="modal-popup__desc">
                          <h5> {data.shortName}</h5>
                          <p>{data.fullName}</p>
                          <ul className="modal-popup__cat">
                            <li>Branding</li>
                            <li>Product Design</li>
                          </ul>
                        </div>

                        <a
                          href={data.OfficialWebsite}
                          className="modal-popup__details"
                        >
                          Project link
                        </a>
                      </div>
                    </div>
                  ))}
                </ul>
                {/* <!-- end folio-list --> */}
              </div>
              {/* <!-- end column --> */}
              {/* <!-- Modal Templates Popup -------------------------------------------- --> */}
            </div>
            {/* <!-- end works-portfolio --> */}
          </section>
          {/* <!-- end s-works --> */}
          {/* <!-- ### contact
            ================================================== --> */}
          <section id="contact" className="s-contact target-section">
            <div className="row contact-top">
              <div className="column lg-12">
                <h2 className="text-pretitle with-full-line">
                  My Contacts
                </h2>

                <p className="h2">
                  Please feel free to contact me using the following methods at your convenience. I look forward to hearing from you.
                </p>
              </div>
            </div>
            {/* <!-- end contact-top --> */}
            <div className="row contact-bottom">
              <div className="contact-details row">
                <span className="theme-color-hover">
                  <Mail />
                  <a href="mailto:sayhello@luther.com" className="mailtoui">
                    lauchunleung1997@yahoo.com.hk
                  </a>
                </span>
                <span className="theme-color-hover">
                  <Phone />
                  <a href="tel:+85263899598">+852-6389 9598</a>
                </span>
              </div>
              {/* <div className="column lg-4 md-12 contact-block">
                <a
                  href="mailto:sayhello@luther.com"
                  className="mailtoui btn btn--medium u-fullwidth contact-btn"
                >
                  Say Hello.
                </a>
              </div> */}
            </div>
            {/* <!-- end contact-bottom --> */}
          </section>
          {/* <!-- end contact --> */}
        </main>
        {/* <!-- end s-content --> */}
        {/* <!-- ## footer
        ================================================== --> */}
        <footer className="s-footer">
          <div className="row">
            <div className="column ss-copyright">
              <span>© Copyright by Derek Lau @2025</span>
              {/* <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span> */}
            </div>

            <div className="ss-go-top">
              <a className="smoothscroll" title="Back to Top" href="#top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
        {/* <!-- end s-footer --> */}
      </div>
      {/* <!-- end -s-pagewrap --> */}
    </div>
  );
}

export default App;


const StarRating = ({ rating }: any) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  return (
    <span className="stars">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="star">★</span>
      ))}
      {halfStar && <span className="star half-star">☆</span>}
    </span>
  );
};