interface ExperienceItemTranslation {
  company: string;
  role: string;
  description: string;
  url: string;
}

interface QRTranslation {
  title: string;
  copied: string;
}

export interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    contact: string;
    blog: string;
  };
  hero: {
    greeting: string;
    names: string[];
    role1: string;
    role2: string;
    based: string;
    location: string;
    intro: string;
  };
  about: {
    title1: string;
    title2: string;
    mbti: string;
    mbtiLabel: string;
    p1: string;
    p2: string;
    p3: string;
    hobby: {
      coffee: string;
      photo: string;
      travel: string;
    };
  };
  skills: {
    title1: string;
    title2: string;
  };
  experience: {
    title1: string;
    title2: string;
    items: {
      fullive: ExperienceItemTranslation;
      bit: ExperienceItemTranslation;
      zingspark: ExperienceItemTranslation;
      csdn: ExperienceItemTranslation;
    };
  };
  contact: {
    title1: string;
    title2: string;
    heading: string;
    headingHighlight: string;
    headingEnd: string;
    description: string;
    email: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
    };
  };
  footer: {
    copyright: string;
    icp: string;
  };
  qr: {
    wechat: QRTranslation;
    telegram: QRTranslation;
  };
}
