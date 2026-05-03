export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const linksInfo = [
  { titleKey: "about" as const, path: "#about" },
  { titleKey: "skills" as const, path: "#skills" },
  { titleKey: "experience" as const, path: "#experience" },
  { titleKey: "contact" as const, path: "#contact" }
];

export interface SkillItem {
  file: string;
  name: string;
}

export const skillsData: SkillItem[] = [
  // AI4Sci & Research
  { file: "generative-ai.svg", name: "Generative AI" },
  { file: "super-resolution-microscopy.svg", name: "Super-Resolution" },
  { file: "biomedical-engineering.svg", name: "BioMed Eng." },
  { file: "agent-dev.svg", name: "Agent Dev" },
  { file: "vr-dev.svg", name: "VR Dev" },
  // AI Models & LLMs
  { file: "openai.svg", name: "OpenAI" },
  { file: "claude.svg", name: "Claude" },
  { file: "deepseek.svg", name: "DeepSeek" },
  { file: "gemini.svg", name: "Gemini" },
  { file: "qwen.svg", name: "Qwen" },
  { file: "grok.svg", name: "Grok" },
  { file: "x-ai.svg", name: "xAI" },
  { file: "perplexity.svg", name: "Perplexity" },
  { file: "doubao.svg", name: "Doubao" },
  { file: "moonshot-ai.svg", name: "Moonshot" },
  { file: "zhipu-color.svg", name: "Zhipu AI" },
  { file: "meta-color.svg", name: "Meta AI" },
  { file: "baai.svg", name: "BAAI" },
  { file: "ai2-color.svg", name: "AI2" },
  // AI Dev Tools
  { file: "cursor.svg", name: "Cursor" },
  { file: "githubcopilot.svg", name: "Copilot" },
  { file: "codex.svg", name: "Codex" },
  { file: "claudecode-color.svg", name: "Claude Code" },
  { file: "kilocode.svg", name: "Kilo Code" },
  { file: "manus.svg", name: "Manus" },
  { file: "midjourney.svg", name: "Midjourney" },
  { file: "model-context-protocol.svg", name: "MCP" },
  // AI Frameworks & Libraries
  { file: "pytorch.svg", name: "PyTorch" },
  { file: "tensorflow.svg", name: "TensorFlow" },
  { file: "keras.svg", name: "Keras" },
  { file: "huggingface.svg", name: "Hugging Face" },
  { file: "langgraph-color.svg", name: "LangGraph" },
  { file: "llamaindex-color.svg", name: "LlamaIndex" },
  { file: "openclaw.svg", name: "OpenClaw" },
  { file: "gradio.svg", name: "Gradio" },
  // AI Platforms
  { file: "bailian.svg", name: "Bailian" },
  { file: "siliconcloud-color.svg", name: "SiliconCloud" },
  { file: "modelscope-color.svg", name: "ModelScope" },
  { file: "monica.svg", name: "Monica" },
  { file: "lobehub.svg", name: "LobeHub" },
  { file: "newapi-color.svg", name: "NewAPI" },
  { file: "ollama.svg", name: "Ollama" },
  // Cloud
  { file: "alibabacloud-color.svg", name: "Alibaba Cloud" },
  { file: "tencentcloud-color.svg", name: "Tencent Cloud" },
  { file: "volcengine-color.svg", name: "Volcengine" },
  { file: "aws.svg", name: "AWS" },
  { file: "azure-color.svg", name: "Azure" },
  { file: "googlecloud-color.svg", name: "Google Cloud" },
  // Backend & Data
  { file: "python.svg", name: "Python" },
  { file: "fastapi.svg", name: "FastAPI" },
  { file: "docker.svg", name: "Docker" },
  { file: "conda.svg", name: "Conda" },
  { file: "linux.svg", name: "Linux" },
  { file: "nginx.svg", name: "Nginx" },
  { file: "mongodb.svg", name: "MongoDB" },
  { file: "mysql.svg", name: "MySQL" },
  { file: "matlab.svg", name: "MATLAB" },
  // Frontend & Dev Tools
  { file: "react.svg", name: "React" },
  { file: "typescript.svg", name: "TypeScript" },
  { file: "vue.svg", name: "Vue" },
  { file: "vite.svg", name: "Vite" },
  { file: "html.svg", name: "HTML" },
  { file: "css.svg", name: "CSS" },
  { file: "git.svg", name: "Git" },
  { file: "vscode.svg", name: "VS Code" },
  { file: "figma-color.svg", name: "Figma" },
  { file: "antigravity-color.svg", name: "Antigravity" }
];

export const experienceKeys = ["fullive", "bit", "zingspark", "csdn"] as const;

export type ExperienceKey = (typeof experienceKeys)[number];

export const experienceLogos: Record<ExperienceKey, string> = {
  fullive: "logo-fullive-black.svg",
  bit: "logo-bit_xulab-black.svg",
  zingspark: "logo-zingspark-black.svg",
  csdn: "CSDN_Blog.svg"
};

export const socialLinks = [
  {
    id: "linkedin",
    url: "https://www.linkedin.com/in/sylvanding/",
    icon: "linkedin.svg",
    label: "LinkedIn"
  },
  {
    id: "github",
    url: "https://github.com/sylvanding",
    icon: "github.svg",
    label: "GitHub"
  },
  {
    id: "orcid",
    url: "https://orcid.org/0009-0005-6009-3389",
    icon: "orcid.svg",
    label: "ORCID"
  },
  {
    id: "x",
    url: "https://x.com/sylvanding",
    icon: "x.svg",
    label: "X"
  },
  {
    id: "facebook",
    url: "https://facebook.com/sylvanding",
    icon: "facebook.svg",
    label: "Facebook"
  },
  {
    id: "wechat",
    url: "#",
    icon: "wechat-logo.svg",
    label: "WeChat",
    action: "qr-wechat"
  },
  {
    id: "telegram",
    url: "#",
    icon: "telegram-logo.svg",
    label: "Telegram",
    action: "qr-telegram"
  },
  {
    id: "gmail",
    url: "mailto:dingsylv@gmail.com",
    icon: "gmail.svg",
    label: "Gmail"
  }
];
