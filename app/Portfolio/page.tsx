"use client";

import Image from "next/image";
import Link from "next/link";
import { Key, useState } from "react";
import {
  FaPaperPlane,
  FaPhone,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Portfolio() {
  // const [activeTab, setActiveTab] = useState("skills");

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
const [activeTab, setActiveTab]= useState<string>('skills');

  const tabContent: TabContent = {
    skills: [
      "Financial statement analysis",
      "Budgeting and financial planning",
      "QuickBooks, SAP, Tally",
      "Economic data analysis",
      "Digital marketing and social media marketing",
      "Project management and leadership",
      "Data analysis using Excel, SPSS",
      "Verbal and written communication",
      "Critical thinking and problem-solving",
      "Microsoft Office (Excel, Word, PowerPoint)",
    ],
    experience: [{ period: "2020 - Current", role: "Internship as a Teacher" }],
    education: [
      { period: "2024 - Current", institution: "Raja Peary Mohan College" },
      { period: "2022-2024", institution: "Konnagar Hindu Girl's High School" },
    ],
  };
  

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#1a202c", color: "white" }}
    >
      <nav style={{ backgroundColor: "transparent", padding: "1rem" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            listStyle: "none",
          }}
        >
          {["Blogs", "Coding", "Skills", "Gallery", "Extras", "Contact"].map(
            (item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontSize: "1.25rem",
                    color: "white",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <header
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
        }}
      >
        <div style={{ textAlign: "center", animation: "fadeIn 0.8s ease-out" }}>
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Hello, I am Mainak
          </h1>
          <p style={{ fontSize: "1.875rem" }}>I am a full stack developer</p>
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
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="About Me"
              width={400}
              height={400}
              style={{ borderRadius: "0.5rem" }}
            />
            <div>
              <p style={{ fontSize: "1.125rem", marginBottom: "1.5rem" }}>
                Hi, I`m Anuriya Roy, a dedicated{" "}
                <span style={{ color: "#ec4899" }}>commerce student</span> with
                a passion for
                <span style={{ color: "#ec4899" }}> finance</span> and{" "}
                <span style={{ color: "#ec4899" }}>business management</span>.
                My academic journey has been marked by a keen interest in
                <span style={{ color: "#ec4899" }}> economics</span> and{" "}
                <span style={{ color: "#ec4899" }}>accounting</span>, where I
                have developed a strong foundation in analyzing financial data
                and understanding market dynamics.
              </p>
              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      padding: "0.5rem 1rem",
                      borderRadius: "0.25rem",
                      backgroundColor:
                        activeTab === tab.id ? "#ec4899" : "#4a5568",
                      border: "none",
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem' }}>
    {tabContent[activeTab].map((item: string | { period: string; role?: string; institution?: string }, index: Key | null | undefined) => (
      <li key={index} style={{ marginBottom: '0.5rem' }}>
        {typeof item === 'string' ? item : `${item.period} - ${item.role || item.institution}`}
      </li>
    ))}
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
                title: "Financial Analysis",
                icon: "fa-magnifying-glass-chart",
                description:
                  "Evaluating financial data to help businesses make informed decisions.",
              },
              {
                title: "Accounting Services",
                icon: "fa-calculator",
                description:
                  "Managing financial records, bookkeeping, and preparing financial statements.",
              },
              {
                title: "Tax Consultation",
                icon: "fa-money-check-dollar",
                description:
                  "Assisting with tax preparation, planning, and compliance.",
              },
              {
                title: "Content Writing",
                icon: "fa-pen",
                description:
                  "Creating engaging and informative content for various platforms.",
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
                    color: "#ec4899",
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
                  style={{ color: "#ec4899", textDecoration: "none" }}
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
                  style={{ width: "100%", height: "16rem", objectFit: "cover" }}
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
                    style={{ color: "#ec4899", textDecoration: "none" }}
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
                backgroundColor: "#ec4899",
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
                anuriyaroy11@gmail.com
              </p>
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <FaPhone style={{ marginRight: "0.5rem" }} /> 9831440777
              </p>
              <div
                style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
              >
                {[
                  {
                    icon: <FaLinkedin />,
                    href: "https://www.linkedin.com/in/anuriya-roy-935b50317",
                  },
                  {
                    icon: <FaFacebook />,
                    href: "https://www.facebook.com/profile.php?id=61552314094836",
                  },
                  {
                    icon: <FaInstagram />,
                    href: "https://www.instagram.com/anuriya.roy",
                  },
                  {
                    icon: <FaEnvelope />,
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
                    {social.icon}
                  </Link>
                ))}
              </div>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  backgroundColor: "#ec4899",
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
                  backgroundColor: "#ec4899",
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
  );
}