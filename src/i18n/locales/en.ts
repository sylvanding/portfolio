import type { Translations } from "../types";

const en: Translations = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Journey",
    contact: "Contact",
    blog: "Blog"
  },
  hero: {
    greeting: "Hey, I'm",
    names: ["Sylvan Ding", "an Agent Architect", "an Algorithm Engineer", "a Researcher"],
    role1: "Full-Stack",
    role2: "Agent & Algorithm Engineer",
    based: "Based in",
    location: "Beijing.",
    intro:
      "Researcher by training, engineer by instinct. I build AI across microscopy algorithms and production agent systems — grounded in science, built to ship."
  },
  about: {
    title1: "About",
    title2: "Me",
    mbti: "ENTJ-A",
    mbtiLabel: "The Commander",
    p1: "At BIT (Beijing Institute of Technology), I build generative AI for super-resolution microscopy. My algorithms help scientists see biological structures at the single-molecule level. A biomedical engineering background gives me a different angle on what AI can do for science.",
    p2: "I also build agents for production. At Fullive.AI, I lead agent architecture for spatial intelligence. I founded Zingspark to deliver enterprise agents that automate complex workflows for real businesses.",
    p3: "I'd rather ship things that work than pitch things that might. Reliable systems, clean code, real impact.",
    hobby: {
      coffee: "Coffee Connoisseur",
      photo: "Photography",
      travel: "Globetrotter"
    }
  },
  skills: {
    title1: "My",
    title2: "Skills"
  },
  experience: {
    title1: "My",
    title2: "Journey",
    items: {
      fullive: {
        company: "Fullive.AI",
        role: "Agent Architect & Algorithm Engineer",
        description:
          "Leading agent architecture and algorithm development at a spatial AI startup backed by GL Ventures and Zhiyuan Robotics. Designing intelligent living spaces that adapt to human biological rhythms through agent interaction paradigms and recommendation systems.",
        url: "https://fullive.ai"
      },
      bit: {
        company: "BIT \u00B7 XuLab",
        role: "PhD Candidate, Computer Science",
        description:
          "Researching generative AI for single-molecule localization microscopy at XuLab. Cross-disciplinary foundation spanning biomedical engineering and computer science. Mentoring multiple graduate students on AI-driven imaging systems.",
        url: "https://www.xulab.cc"
      },
      zingspark: {
        company: "Zingspark.tech",
        role: "Founder & CEO",
        description:
          "Building enterprise agents that automate complex workflows. Seeclaw handles visual computer-use tasks, Omelette runs automated research pipelines. Partnering with multiple enterprises on real-world AI deployment.",
        url: "https://zingspark.tech"
      },
      csdn: {
        company: "Blogger",
        role: "Tech Blogger, 10K+ Followers",
        description:
          "Writing about AI, algorithms, and full-stack engineering. Running a curated developer community of 100+ members sharing hands-on technical insights.",
        url: "https://sylvan.blog.csdn.net/"
      }
    }
  },
  contact: {
    title1: "Contact",
    title2: "Me",
    heading: "Got an idea?",
    headingHighlight: "Let's",
    headingEnd: "make it real.",
    description:
      "Happy to chat about AI research, agent systems, or anything interesting. Drop me a line anytime.",
    email: "dingsylv@gmail.com",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Write your message",
      send: "Get In Touch",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Oops! Something went wrong. Please try again."
    }
  },
  footer: {
    copyright: "Sylvan Ding",
    icp: "ICP Filing No. Pending"
  },
  qr: {
    wechat: {
      title: "Add me on WeChat",
      copied: "WeChat ID copied to clipboard"
    },
    telegram: {
      title: "Find me on Telegram",
      copied: "Telegram username copied to clipboard"
    }
  }
};

export default en;
