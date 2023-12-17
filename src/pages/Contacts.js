import "./styles/cstyle.css";
import withLogger from "../components/lifecycleLogger/withLogger";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <h1 id="heading">&gt; My Contacts</h1>
      <h2 id="info">
        Phone Number: 8(707)121-24-03 <br />
        E-mail: smagzanoff@gmail.com <br />
        Or you can contact me via Telegram or Linkedin.
      </h2>

      <div className="console-form">
        <form action="/send-email" method="POST">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default withLogger(Contacts);
