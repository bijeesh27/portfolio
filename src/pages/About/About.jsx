import Card from "../../components/ui/Card";

const About = () => {
  return (
    <div className="container section" style={{ width: "100%" }}>
      <h2 className="section-title">About Me</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          gap: "clamp(2rem, 4vw, 3rem)",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <img
            src="/images/profile.jpg"
            alt="Profile"
            style={{
              borderRadius: "var(--radius)",
              width: "100%",
              maxWidth: "400px",
              margin: "0 auto",
            }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <Card>
            <h3
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                marginBottom: "1rem",
              }}
            >
              My Journey
            </h3>
            <p
              style={{
                marginBottom: "1rem",
                lineHeight: "1.7",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
              }}
            >
              I began my journey in web development with a strong interest in
              building reliable and scalable applications. Over time, I have
              gained hands-on experience working with modern web technologies to
              create efficient, user-focused solutions.
            </p>

            <p
              style={{
                lineHeight: "1.7",
                fontSize: "clamp(0.95rem, 2vw, 1rem)",
              }}
            >
              Beyond coding, I actively explore new tools, follow industry
              trends, and continuously improve my skills. I believe in lifelong
              learning and staying up to date with evolving technologies in the
              web ecosystem.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
