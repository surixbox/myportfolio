const config = {
  title: "Suryakiran U | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Suryakiran U, a full-stack developer and Computer Science Engineering student specializing in React, Angular, Django, and NestJS. Discover my latest work including a Billing Management System, Student Record Manager, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Suryakiran U, a full-stack developer building modern web applications with React, Angular, and Django.",
  },
  keywords: [
    "Suryakiran",
    "Suryakiran U",
    "portfolio",
    "full-stack developer",
    "web development",
    "React",
    "Angular",
    "Django",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "Python",
    "PostgreSQL",
    "REST API",
    "frontend developer",
    "CSE student",
  ],
  author: "Suryakiran U",
  email: "devpytech@gmail.com",
  site: "https://suryakiranportfolio.vercel.app",

  // for github stars button — update if you fork the repo
githubUsername: "surixbox",
githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
social: {
  twitter: "",
  linkedin: "https://www.linkedin.com/in/devpytech",
  instagram: "https://www.instagram.com/ft.suri",
  facebook: "",
  github: "https://github.com/surixbox",
},
};
export { config };