import type { Translations } from "../types";

const zh: Translations = {
  nav: {
    about: "关于",
    skills: "技能",
    experience: "旅程",
    contact: "联系",
    blog: "博客"
  },
  hero: {
    greeting: "嗨，我是",
    names: ["丁纪翔", "Agent 架构师", "算法工程师", "AI 研究者"],
    role1: "全栈",
    role2: "Agent & 算法工程师",
    based: "坐标",
    location: "北京.",
    intro:
      "做科研出身，骨子里是工程师。从纳米级显微成像 AI 到生产级 Agent 系统，既要学术扎实，也要真正落地。"
  },
  about: {
    title1: "关于",
    title2: "我",
    mbti: "ENTJ-A",
    mbtiLabel: "创造者",
    p1: "在北理工研究面向超分辨显微成像的生成式 AI，帮助科学家在单分子层面观察生物结构。生物医学工程的背景，让我对 AI 能为科研做什么有自己的理解。",
    p2: "也做面向生产的 Agent 系统。在福来数创主导空间智能 Agent 架构，创办了星跃智启，为企业构建真正能跑起来的 AI 自动化方案。",
    p3: "比起谈概念，更喜欢把东西做出来。系统要稳，代码要干净，效果看得见。",
    hobby: {
      coffee: "咖啡大师",
      photo: "摄影爱好者",
      travel: "旅行专家"
    }
  },
  skills: {
    title1: "我的",
    title2: "技能"
  },
  experience: {
    title1: "我的",
    title2: "旅程",
    items: {
      fullive: {
        company: "福来数创 · Fullive.AI",
        role: "Agent 架构师 / 算法工程师",
        description:
          "在高瓴创投、智元机器人投资的空间 AI 初创公司主导 Agent 架构和算法研发。设计能适应人体生物节律的智能居住空间，通过 Agent 交互范式和推荐系统实现空间智能。",
        url: "https://fullive.ai"
      },
      bit: {
        company: "北京理工大学 · XuLab",
        role: "计算机科学博士在读",
        description:
          "在 XuLab 研究面向单分子定位显微成像的生成式 AI。兼具生物医学工程与计算机科学背景。带领多位硕士生开展 AI 驱动成像系统研究。",
        url: "https://www.xulab.cc"
      },
      zingspark: {
        company: "星跃智启 · Zingspark.tech",
        role: "创始人 / CEO",
        description:
          "构建自动化复杂工作流的企业级 Agent。Seeclaw 负责视觉计算机操控，Omelette 负责自动化科研流水线。与多家企业合作，推动 AI 在真实业务中落地。",
        url: "https://zingspark.tech"
      },
      csdn: {
        company: "Blogger",
        role: "万粉技术博主",
        description:
          "深耕 AI、算法与全栈工程。运营精选开发者社群，100 余位成员，聚焦实战知识共享。",
        url: "https://sylvan.blog.csdn.net/"
      }
    }
  },
  contact: {
    title1: "联系",
    title2: "我",
    heading: "有想法？",
    headingHighlight: "来",
    headingEnd: "一起实现。",
    description: "关于 AI 研究、Agent 系统或者任何有趣的话题，欢迎随时找我聊。",
    email: "dingsylv@gmail.com",
    form: {
      name: "姓名",
      email: "邮箱",
      subject: "主题",
      message: "写下你的消息",
      send: "发送消息",
      sending: "发送中...",
      success: "消息发送成功！",
      error: "出了点问题，请重试。"
    }
  },
  footer: {
    copyright: "Jixiang Ding",
    icp: "ICP 备案号待定"
  },
  qr: {
    wechat: {
      title: "添加我的微信",
      copied: "微信号已复制到剪切板"
    },
    telegram: {
      title: "在 Telegram 找到我",
      copied: "Telegram 用户名已复制到剪切板"
    }
  }
};

export default zh;
