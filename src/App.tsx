import * as React from "react";
import { useEffect, useState } from "react";
import "./styles/Root.scss";
import "./styles/vendor.scss";
import "./styles/App.scss";
import "./styles/Mobile.scss";
import { projects } from "./data/projects";
import { otherTechnologies, skillGroups } from "./data/skills";
import { Bot, Brain, Calendar, CircleUserRound, Code, Mail, MapPin, Phone, Terminal, VenusAndMars } from "lucide-react";
//recharts
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";


const headerArr = [
  {
    title: "Home",
    id: "#hello",
  },
  {
    title: "About me",
    id: "#about",
  }, {
    title: "Work, Education & Skill",
    id: "#workAndEducationAndSkill",
  }, {
    title: "Projects",
    id: "#projects",
  }, {
    title: "Work with Ai Tools",
    id: "#aiTools",
  },
]
function App() {
  const [preloader, setPreloader] = useState<boolean>(true);
  const [hash, sethash] = useState("");

  useEffect(() => {
    const updateButtonColor = () => {
      const hash = window.location.hash;
      console.log(hash);
      sethash(hash);
    };

    // 监听 hash 变化
    window.addEventListener("hashchange", updateButtonColor);

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
        {/* <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div> */}
        {/* <!-- ## site header ================================================== --> */}
        <header
          className="s-header"
          style={{ transform: "translateY(0)", opacity: 1 }}
        >
          <div className="header-mobile">
            <span className="mobile-home-link">
              <a href="index.html">Derek Lau</a>
            </span>
            <a className="mobile-menu-toggle" href="#0">
              <span>Menu</span>
            </a>
          </div>

          <div className="row wide main-nav-wrap">
            <nav className="column lg-12 main-nav">
              <ul>
                {headerArr.map((hData) =>
                  <li className={`${hash == hData.id ? "current" : ""}`}>
                    <a href={hData.id} className="home-link smoothscroll">
                      {hData.title}
                    </a>
                  </li>)}
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
          <section id="hello" className="s-intro target-section">
            <div className="row intro-content wide">
              <div className="column">
                <div className="text-pretitle with-line">Hello</div>
                <h1 className="text-huge-title">
                  <p className="intro-text">
                    <span> Hi,</span>
                    <span> I am Derek Lau </span>
                    <span> Welcome to my</span>
                    <span> resume website.</span>
                  </p>
                </h1>
              </div>
              <div className="column my-contact">
                <span className="row theme-color-hover mailtoui">
                  <CircleUserRound size={32} />{"Lau Chun Leung (Derek)"}
                </span>
                <a className="row theme-color-hover mailtoui" href="mailto:lauchunleung1997@yahoo.com.hk">
                  <Mail size={32} />{"lauchunleung1997@yahoo.com.hk"}
                </a>
                <a className="row theme-color-hover" href="tel:+85263899598">
                  <Phone size={32} />{"+852-63899598"}
                </a>
                <span className="row theme-color-hover">
                  <Calendar size={32} />{"27 years old"}
                </span>
                <span className="row theme-color-hover">
                  <VenusAndMars size={32} />{"Male"}
                </span>
                <span className="row theme-color-hover">
                  <MapPin size={32} />{"Hong Kong, New Territories"}
                </span>
              </div>

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
          <hr className="hr-theme-style" />
          {/* <!-- end s-intro --> */}
          {/* <!-- ### about
            ================================================== --> */}
          <section id="about" className="target-section">
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
                      "I graduated with a Higher Diploma in Computer Engineering from the Hong Kong Institute of Vocational Education (IVE). After graduation, I worked as a technician at HKT for three years, focusing on network maintenance and setup. I then worked as a Full Stack Developer (Programmer) at Catomind, primarily working with SharePoint, is responsible for designing, developing, and implementing collaboration platforms, focusing on intranet portals and website solutions."
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
          </section >
          <hr className="hr-theme-style" />
          <section id="workAndEducationAndSkill" className="target-section">
            {/* <!-- end about-expertise --> */}
            <div className="row workAndEducationAndSkills">
              <div className="column about-timelines">
                <div className="column tab-12">
                  <h2 className="text-pretitle with-full-line">
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
                        {/* <p>{"--------------------------------"}</p> */}
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
                        {/* <p>{"--------------------------------"}</p> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- end timeline --> */}
                </div>
                {/* <!-- end column --> */}
                <div className="column tab-12">
                  <h2 className="text-pretitle with-full-line">
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
                        <ul>
                          <li> Requirement Gathering & Project Planning:Collaborate with stakeholders to gather requirements, define project scope, and outline functional specifications.</li>
                          <li>Development & Implementation:Utilize SharePoint, Azure, and other technologies to develop and deploy intranet solutions, including workflows, dashboards, and custom features to enhance user experience and process efficiency.</li>
                          <li>Maintenance & Support:Provide ongoing maintenance and technical support, troubleshooting issues, and implementing necessary updates.</li>
                        </ul>
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
                        <ul>
                          <li>Equipment Maintenance: Inspecting, troubleshooting, and repairing network and server hardware.</li>
                          <li>System Monitoring: Ensuring smooth operation of telecommunication systems, data servers, and cooling systems.</li>
                          <li>Network Support: Assisting with network configurations, cabling, and connectivity issues.</li>
                          <li>Security & Compliance: Following safety and security protocols to protect sensitive data and infrastructure.</li>
                          <li>Technical Assistance: Supporting engineers and clients with equipment setup and issue resolution.</li>
                        </ul>
                      </div>
                    </div>
                    <div className="timeline__block">
                      <span className="timeline__bullet" />
                      <div className="timeline__header">
                        <h4 className="timeline__title">
                          {"HKITE - SmartCard Solutions Limited"}
                        </h4>
                        <h5 className="timeline__meta">{"Technician intern"}</h5>
                        <p className="timeline__timeframe">
                          {"January 2019 - April 2019"}
                        </p>
                      </div>
                      <div className="timeline__desc">
                        <ul>
                          <li>System Installation: Setting up smart card readers, RFID systems, and related hardware.</li>
                          <li>Maintenance & Repair: Conducting regular inspections, troubleshooting, and repairing faulty equipment.</li>
                          <li>Technical Support: Assisting clients with system issues and providing on-site support.</li>
                          <li>Software & Hardware Configuration: Updating firmware, configuring devices, and ensuring system compatibility.</li>
                          <li>Testing & Quality Control: Conducting system tests to ensure proper functionality and security.</li>
                          <li>Documentation: Maintaining records of installations, repairs, and system upgrades.</li>
                        </ul>
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
                        <ul>
                          <li>
                            {"Handle customer service, cashier duties, stock replenishment, store cleanliness, and product arrangement."}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="timeline__block">
                      <span className="timeline__bullet" />
                      <div className="timeline__header">
                        <h4 className="timeline__title">{"McDonald's"}</h4>
                        <h5 className="timeline__meta">{"Staff"}</h5>
                        <p className="timeline__timeframe">
                          {"Dec 2015 - Apr 2016"}
                        </p>
                      </div>
                      <div className="timeline__desc">
                        <ul>
                          <li>{"handle customer service, food preparation, order taking, cashier duties, cleaning, and maintaining restaurant efficiency."}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end timeline --> */}
                </div>
                {/* <!-- end column --> */}

              </div>

              <div className="column skills">
                <div className="column lg-12">
                  {skillGroups.map((data) => <>
                    <h2 className="text-pretitle with-full-line">
                      {data.name}
                    </h2 >
                    <ResponsiveContainer className="responsiveContainer" width="100%" height={80 + (data.skillArr.length * 50)}>
                      <BarChart
                        data={data.skillArr}
                        layout="vertical" // 這行讓柱狀圖變成橫向的
                        margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
                      >
                        <CartesianGrid stroke="none" />
                        {/* <XAxis type="number" domain={[0, 'dataMax']} /> */}
                        <XAxis type="number" domain={[0, 10]} />
                        <YAxis dataKey="name" type="category" width={220} tick={{ fontSize: 18, fill: "var( --color-text-dark)", textAnchor: "end" }} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="var(--color-1)" barSize={20} radius={[5, 5, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                    {/* <ul className="skills-list">
                    {data.skillArr.map((skill) => <li>{skill.name}<StarRating rating={skill.value} /></li>)}
                  </ul> */}
                  </>)}
                </div>
                <h2 className="text-pretitle with-full-line">
                  Other Technologies
                </h2 >
                <div className="otherTechnologies">
                  {otherTechnologies.map((skill, index) => (
                    <div key={index} className="box">
                      <skill.icon className="w-8 h-8 mb-2" />
                      <p className="text-sm text-center">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- end about-timelines --> */}
          </section>
          <hr className="hr-theme-style" />
          {/* <!-- end s-about --> */}
          {/* <!-- ### works
            ================================================== --> */}
          <section id="projects" className="target-section">
            <div className="row">
              <div className="column lg-12">
                <h2 className="text-pretitle with-full-line">
                  My Recent Projects
                </h2>
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
                </ul>
                {/* <!-- end folio-list --> */}
              </div>
              {/* <!-- end column --> */}
              {/* <!-- Modal Templates Popup -------------------------------------------- --> */}
            </div>
            {/* <!-- end works-portfolio --> */}
          </section>
          <hr className="hr-theme-style" />
          <section id="aiTools" className="target-section">
            <div className="row">
              <div className="column">
                <div className="text-pretitle with-full-line">Ai Tools</div>
                <div className="row ai-tools-contaniner">
                  {aiTools.map((tool) => (
                    <div key={tool.name} className="ai-tools-card">
                      <div className="ai-tools-title">
                        <tool.icon size={32} />
                        <span className="text-xl font-semibold">{tool.name}</span>
                      </div>
                      <span className="ai-tools-description">{tool.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <hr className="hr-theme-style" />
        </main>
        {/* <!-- end s-content --> */}
        {/* <!-- ## footer
        ================================================== --> */}
        <footer className="s-footer">
          <div className="row">
            <div className="column ss-copyright">
              <span>© Copyright by Derek Lau @2025</span>
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
    </div >
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

const aiTools = [
  {
    name: "ChatGPT",
    description:
      "Conversational AI assistant capable of understanding and generating code, explaining complex concepts, and helping with debugging",
    icon: Bot,
  },
  {
    name: "V0.dev",
    description:
      "AI-powered UI development platform that converts natural language descriptions into production-ready React components",
    icon: Code,
  },
  {
    name: "Cursor",
    version: "3.0",
    description:
      "Next-generation code editor powered by AI, offering intelligent code completion and refactoring capabilities",
    icon: Terminal,
  },
  {
    name: "DeepSeek",
    description:
      "Specialized AI model for code generation and understanding, trained on extensive programming datasets",
    icon: Brain,
  },
]