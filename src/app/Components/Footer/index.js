import React from "react";

const Footer = () => {
  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Blog", href: "/Blog" },
    { label: "Contact", href: "/Contact" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Fulfillment Policy", href: "#" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span className="footer-text">Pavan Gangireddy</span>
        </div>

        <div className="footer-main-links">
          {mainLinks.map((link) => (
            <a key={link.label} href={link.href} className="footer-link-text">
              {link.label}
              
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="copyright">
              © 2024 Pavang.tech All rights reserved.
            </span>
            <div className="legal-links">
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="social-links">
          <a href="https://www.linkedin.com/in/pavangangireddy" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://x.com/pavangangi" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.instagram.com/pavan_gangi" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube">
              <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

        .footer {
          background-color: black;
          color: white;
          padding: 4rem 2rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-logo {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .footer-main-links {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-main-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-main-links a:hover {
          color: white;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #333;
        }

        .footer-bottom-left {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .copyright {
          color: #888;
        }

        .legal-links {
          display: flex;
          gap: 2rem;
        }

        .legal-links a {
          color: #888;
          text-decoration: none;
          transition: color 0.3s;
        }

        .legal-links a:hover {
          color: white;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
        }

        .social-links a {
          color: #888;
          font-size: 20px;
          transition: color 0.3s;
        }

        .social-links a:hover {
          color: white;
        }

        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
          }

          .footer-bottom-left {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .footer-main-links {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .legal-links {
            flex-wrap: wrap;
            gap: 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
