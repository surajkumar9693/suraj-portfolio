import React from "react";
import me from "../assets/suraj.jpeg";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Abhishek" />
        <h2>Suraj kumar</h2>
        <p>Self Motivation and Hard working person.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.facebook.com/suraj.yadavanshi.7568" target={"blank"}>
            <AiFillFacebook />
          </a>
          <a href="https://www.instagram.com/yadavanshi_suraj/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/suraj-kumar-yadav-63a880246/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/surajkumar9693" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
