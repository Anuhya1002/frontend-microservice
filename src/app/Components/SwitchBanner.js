"use client";
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Image from "next/image";

export default function SwitchBanner() {
  const [isTechnical, setIsTechnical] = useState(true);

  const content = {
    technical: {
      title: "Use AI To build the website within minutes",
      subtitle: "Build → Iterate → Deploy.",
    },
    nonTechnical: {
      title: "Anyone can build the website using AI",
      subtitle: "Your expertise deserves better than waiting for engineers.",
    },
  };
  return (
    <section className="switchbanner">
      <Container>
        <div className="image-container">
          <Image src="/images/bannerimage.png" alt="switch banner" />
          <div className="hero-content">
            <div className="toggle-wrapper">
              <Form.Check
                type="switch"
                id="technical-switch"
                label="I'm technical"
                checked={isTechnical}
                onChange={() => setIsTechnical(!isTechnical)}
                className="custom-switch"
              />
            </div>
            <h1 className="hero-title">
              {isTechnical
                ? content.technical.title
                : content.nonTechnical.title}
            </h1>
            <p className="hero-subtitle">
              {isTechnical
                ? content.technical.subtitle
                : content.nonTechnical.subtitle}
            </p>
            <div className="button-group">
              <Button variant="dark" className="try-button">
                Try for free
                <svg
                  className="arrow-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Button>
              <Button variant="outline-light" className="demo-button">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
