export type NavLink = {
  titleKey: "about" | "skills" | "experience" | "contact";
  path: string;
  closeMenu?: () => void;
};
