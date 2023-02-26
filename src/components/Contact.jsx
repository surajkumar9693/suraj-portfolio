import React from "react";
import vg from "../assets/vg.png";
import { motion } from "framer-motion";

const Contact = () => {

  return (
    <div id="contact">
      <section>
        <form>
          <div>
            <label>Name</label>
            <input type="text" required placeholder="Suraj_kumar" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" required placeholder="surajkumargt7262@gmail.com" />
          </div>
          <div>
            <label>Message</label>
            <input
              type="text"
              required
              placeholder="Tell us about query..."
            />
          </div>
          <motion.button
            type="submit"
          >
            Send
          </motion.button>
        </form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
