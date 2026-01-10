import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/common/Button";
import { sendEmail } from "../../services/email.service";
import { EMAIL_ADDRESS, SOCIAL_LINKS } from "../../utils/constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await sendEmail(formData);
      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message." });
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    width: "100%",
    padding: "0.75rem",
    borderRadius: "var(--radius)",
    border: "1px solid var(--input)",
    backgroundColor: "var(--background)",
    color: "var(--foreground)",
    marginBottom: "1rem",
    fontFamily: "inherit",
  };

  return (
    <div className="container section">
      <h2 className="section-title">Get In Touch</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
        }}
      >
        <div>
          <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
            Let's Talk
          </h3>
          <p style={{ marginBottom: "2rem", lineHeight: "1.7" }}>
            Open to new opportunities and collaborations. Feel free to reach out
            — I’d be happy to connect.
          </p>

          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--primary)" }}>
              Email
            </h4>
            <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
          </div>

          <div>
            <h4 style={{ marginBottom: "0.5rem", color: "var(--primary)" }}>
              Socials
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textTransform: "capitalize" }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyles}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyles}
              />
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ ...inputStyles, resize: "vertical" }}
              ></textarea>
            </div>

            {status && (
              <div
                style={{
                  marginBottom: "1rem",
                  padding: "0.75rem",
                  borderRadius: "var(--radius)",
                  backgroundColor:
                    status.type === "success" ? "#dcfce7" : "#fee2e2",
                  color: status.type === "success" ? "#166534" : "#991b1b",
                }}
              >
                {status.message}
              </div>
            )}

            <Button type="submit" style={{ width: "100%" }} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
