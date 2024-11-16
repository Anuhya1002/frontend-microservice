import SpinningSkills from "../SpinningSkills";
import Typewritertext from "../Typewritertext";

export default function HeroBanner() {
  return (
    <section className="container herobanner">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="">
          <button className="hello-btn">Hello</button>
        </div>
        <h1 className="main-banner-text">I&apos;m Pavan Gangireddy,</h1>
        <Typewritertext />
        <SpinningSkills />
      </div>
    </section>
  );
}
