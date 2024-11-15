"use client";
import React, { useEffect, useState } from "react";

// Move roles outside the component
const roles = [
  "Product Designer",
  "Senior Technical Lead",
  "Full Stack Developer",
  "Product Owner",
  "Content Developer Manager",
];

export default function Typewritertext() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isdeleting, setIsdeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const shouldDelete = isdeleting;
    const timeout = shouldDelete ? 50 : 100;

    const timer = setTimeout(() => {
      if (!shouldDelete && text === currentRole) {
        setTimeout(() => setIsdeleting(true), 1500);
        return;
      }

      if (shouldDelete && text === "") {
        setIsdeleting(false);
        setCurrentRoleIndex((current) => (current + 1) % roles.length);
        return;
      }

      const nextText = shouldDelete
        ? currentRole.substring(0, text.length - 1)
        : currentRole.substring(0, text.length + 1);

      setText(nextText);
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, currentRoleIndex, isdeleting]);

  return (
    <span className="typing-text">
      {text}
      <span className="cursor-blink">|</span>
    </span>
  );
}
