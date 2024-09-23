/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import { Key, useState } from "react";
import styles from "./page.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub } from '@fortawesome/free-solid-svg-icons'
{/* <FontAwesomeIcon icon={faGithub} /> */}
import {
  FaPaperPlane,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Navbar from "../component/Navbar";

export default function Portfolio() {
  // const [activeTab, setActiveTab] = useState("skills");

  type tabs = [
    {
      id: string;
      label: string;
    }
  ];

  const tabs = [
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];
  type TabContent = {
    skills: string[];
    experience: { period: string; role: string }[];
    education: { period: string; institution: string }[];
  };
  // Use a union type for activeTab
  // const activeTab: TabKeys

  type TabKeys = keyof TabContent;
  const [activeTab, setActiveTab] = useState<TabKeys>("skills");

  const tabContent: TabContent = {
    skills: [
      "C",
      "C++",
      "Java",
      "Assembly",
      "Python",
      "PHP",
      "SQL",
      "HTML",
      "CSS",
      "SCSS",
      "Tailwind",
      "Bootstrap",
      "JavaScript",
      "React.js",
      "Next.js",
      "RxJS",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    experience: [{ period: "2024 - Current", role: "Inter as a Full Stack Developer" }],
    education: [
      { period: "2022 - Current", institution: "VIVEKANANDA MAHAVIDYALAYA" },
      { period: "2014-2022", institution: "Kinkarbati Agricultural Institution" },
    ],
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: " #212529",
          color: "white",
        }}
        className="container-fluid"
      >
        <Navbar />

        <header
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // background: "linear-gradient(to right, #8b5cf6, #ec4899)",
          }}
          className={styles.HeaderBody}
        >
          <div className={styles.containers}>
            <h1 className={styles.typewriterHeading}>Hello, I am Mainak</h1>
            <p className={styles.typewriterSubheading}>
              I am a full stack developer
            </p>
          </div>
        </header>

        <main
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "3rem 1rem" }}
        >
          <section id="about" style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              About Me
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <img
                src="/assets/pro.jpg"
                alt="About Me"
                style={{
                  borderRadius: "5rem",
                  width: "400px",
                  padding: "10px",
                }}
              />
              <div>
                <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
                  Hi, I`m Mainak Bandrui, a passionate{" "}
                  <span style={{ color: "#c81414" }}>
                    Computer Science student
                  </span>{" "}
                  with a strong focus on{" "}
                  <span style={{ color: "#c81414" }}>software development</span>{" "}
                  and <span style={{ color: "#c81414" }}>problem-solving</span>.
                  I have a deep interest in{" "}
                  <span style={{ color: "#c81414" }}>algorithms</span>,{" "}
                  <span style={{ color: "#c81414" }}>data structures</span>, and{" "}
                  <span style={{ color: "#c81414" }}>
                    full stack development
                  </span>
                  . My academic journey has also nurtured my skills in{" "}
                  <span style={{ color: "#c81414" }}>
                    Mobile Development, Web Development
                  </span>{" "}
                  and <span style={{ color: "#c81414" }}>cloud computing</span>,
                  where I strive to bridge technology with real-world solutions.
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {tabs.map((tab: any) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        padding: "0.5rem 1rem",
                        borderRadius: "0.25rem",
                        backgroundColor:
                          activeTab === tab.id ? "#c81414" : "#4a5568",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                  {tabContent[activeTab].map(
                    (
                      item:
                        | string
                        | {
                            period: string;
                            role?: string;
                            institution?: string;
                          },
                      index: Key | null | undefined
                    ) => (
                      <li key={index} style={{ marginBottom: "0.5rem" }}>
                        {typeof item === "string"
                          ? item
                          : `${item.period} - ${item.role || item.institution}`}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>

          <section id="services" style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              My Services
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                 {
                  title: "Full Stack Development",
                  icon: "fa-code",
                  description:
                    "Building responsive web applications using modern technologies like Next.js and React.",
                },
                {
                  title: "Mobile Development",
                  icon: "fa-mobile-alt",
                  description:
                    "Creating intuitive mobile applications for both iOS and Android platforms.",
                },
                {
                  title: "Database Management",
                  icon: "fa-database",
                  description:
                  "Managing and optimizing databases with MongoDB, MySQL, and PostgreSQL.",
                },
                {
                  title: "Data Analysis",
                  icon: "fa-chart-pie",
                  description:
                    "Utilizing Python and Excel for insightful data analysis and visualization.",
                },
               
              ].map((service, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#2d3748",
                    padding: "1.5rem",
                    borderRadius: "0.5rem",
                    transition: "transform 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <i
                    className={`fas ${service.icon}`}
                    style={{
                      fontSize: "1.875rem",
                      marginBottom: "1rem",
                      color: "#c81414",
                    }}
                  ></i>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ marginBottom: "1rem" }}>{service.description}</p>
                  <Link
                    href="#"
                    style={{ color: "#c81414", textDecoration: "none" }}
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section id="portfolio" style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              My Works
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  title: "Accounting Services",
                  description: "Managing financial records and statements...",
                },
                {
                  title: "Financial Analysis",
                  description:
                    "Evaluating financial data for informed decisions...",
                },
                {
                  title: "Content Writing",
                  description:
                    "Creating engaging content for various platforms...",
                },
              ].map((work, index) => (
                <div
                  key={index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "0.5rem",
                    transition: "transform 0.3s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                >
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${work.title}`}
                    alt={work.title}
                    width={400}
                    height={300}
                    style={{
                      width: "100%",
                      height: "16rem",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      padding: "1rem",
                      opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "600",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {work.title}
                    </h3>
                    <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                      {work.description}
                    </p>
                    <Link
                      href="#"
                      style={{ color: "#c81414", textDecoration: "none" }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  backgroundColor: "#c81414",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "9999px",
                  textDecoration: "none",
                  transition: "background-color 0.3s",
                }}
              >
                See More
              </Link>
            </div>
          </section>

          <section id="contact" style={{ marginBottom: "5rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Contact Me
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "3rem" }}
            >
              <div style={{ flex: "1 1 50%" }}>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <FaPaperPlane style={{ marginRight: "0.5rem" }} />{" "}
                  mainak407@gmail.com
                </p>
                <p
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <FaPhone style={{ marginRight: "0.5rem" }} /> 9831441777
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[
                    {
                      icons: <FaLinkedin />,
                      href: "https://www.linkedin.com/in/anuriya-roy-935b50317",
                    },
                    {
                      icons: <FaFacebook />,
                      href: "https://www.facebook.com/profile.php?id=61552314094836",
                    },
                    {
                      icons: <FaInstagram />,
                      href: "https://www.instagram.com/anuriya.roy",
                    },
                  //  {
                  //   icons: <FontAwesomeIcon icon={faGithub} /> ,
                  //   href: "https://github.com/VOYAGER441",
                  //  },
                    {
                      icons: <FaEnvelope />,
                      href: "mailto:anuriyaroy11@gmail.com",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      style={{
                        fontSize: "1.5rem",
                        color: "white",
                        transition: "color 0.3s",
                      }}
                    >
                      {social.icons}
                    </Link>
                  ))}
                </div>
                <Link
                  href="#"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#c81414",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    textDecoration: "none",
                    transition: "background-color 0.3s",
                  }}
                >
                  Download My CV
                </Link>
              </div>
              <form
                style={{
                  flex: "1 1 50%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#2d3748",
                    border: "none",
                    borderRadius: "0.25rem",
                    color: "white",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#2d3748",
                    border: "none",
                    borderRadius: "0.25rem",
                    color: "white",
                  }}
                />
                <textarea
                  name="Message"
                  rows={6}
                  placeholder="Your Message"
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    backgroundColor: "#2d3748",
                    border: "none",
                    borderRadius: "0.25rem",
                    color: "white",
                  }}
                ></textarea>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#c81414",
                    color: "white",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
        </main>

        <footer
          style={{
            backgroundColor: "#2d3748",
            padding: "1.5rem",
            textAlign: "center",
          }}
        >
          <p>Made with ❤️ by Mainak Banduri</p>
        </footer>
      </div>
    </>
  );
}
