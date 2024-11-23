import React from "react";

const SpinningSkills = () => {
  const circleData = {
    circle1: {
      items: [
        "Kora",
        "Stella",
        "Dacher",
        "Whimsy",
        "Aura",
        "Ito",
        "Dacher",
        "Whimsy",
        "Kora",
        "Stella",
        "Dacher",
        "Whimsy",
        "Aura",
      ],
      angle: 27.692307692307693,
      translateY: -462.5,
      rotationClass: "rotate-140s",
    },
    circle2: {
      items: [
        "Expressivity",
        "Femininity",
        "Speed",
        "Pitch",
        "Accent",
        "Extroversion",
        "Raspiness",
        "Formality",
        "Rhythm",
        "Enunciation",
        "Expressivity",
        "Femininity",
        "Speed",
      ],
      angle: 27.692307692307693,
      translateY: -386.5,
      rotationClass: "rotate-130s",
    },
    circle3: {
      items: [
        "Hume LLM",
        "Web Search",
        "Tool Use",
        "External LLM",
        "Custom LLM",
        "TTS Injection",
        "Hume LLM",
        "Web Search",
        "Tool Use",
        "External LLM",
        "Custom LLM",
        "TTS Injection",
        "Hume LLM",
      ],
      angle: 27.692307692307693,
      translateY: -310.5,
      rotationClass: "rotate-120s",
    },
    circle4: {
      items: [
        "NPC",
        "Assistant",
        "Coach",
        "Agent",
        "Tutor",
        "Clinician",
        "App UI",
        "NPC",
        "Assistant",
        "Coach",
      ],
      angle: 36,
      translateY: -234.5,
      rotationClass: "rotate-110s",
    },
    circle5: {
      items: [
        "Twilio",
        "Typescript",
        "Python",
        "React",
        "API",
        "Twilio",
        "Typescript",
        "Python",
        "React",
      ],
      angle: 40,
      translateY: -158.5,
      rotationClass: "rotate-100s",
    },
  };

  const renderCircle = (
    items,
    angle,
    translateY,
    rotationClass,
    circleNumber
  ) => (
    <div className={`circle circle-${circleNumber}`}>
      <div className={`circle-content ${rotationClass}`}>
        {items.map((item, index) => (
          <div
            key={index}
            className="text-item"
            style={{
              transform: `translate(-50%, -50%) rotate(${
                index * angle
              }deg) translateY(calc(${translateY}px + 50% + 8px))`,
            }}
          >
            <p className="text-label">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="circles-container">
      {Object.entries(circleData).map(([key, data], index) =>
        renderCircle(
          data.items,
          data.angle,
          data.translateY,
          data.rotationClass,
          index + 1,
          key={key}
        )
      )}
    </div>
  );
};

export default SpinningSkills;
