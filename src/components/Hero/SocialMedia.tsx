import { useState, type ComponentType, type SVGProps } from "react";
import SocialCard from "./SocialCard";
import { socialLinks } from "../../constants";
import QRCodeModal from "../UI/QRCodeModal";

const socialIcons = import.meta.glob("../../assets/social/*.svg", {
  eager: true,
  query: "?react",
  import: "default"
}) as Record<string, ComponentType<SVGProps<SVGSVGElement>>>;

function getIcon(filename: string): ComponentType<SVGProps<SVGSVGElement>> | null {
  const key = Object.keys(socialIcons).find((k) => k.endsWith(filename));
  return key ? socialIcons[key] : null;
}

export default function SocialMedia() {
  const [qrModal, setQrModal] = useState<"wechat" | "telegram" | null>(null);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {socialLinks.map((link) => {
          const Icon = getIcon(link.icon);
          return (
            <SocialCard
              key={link.id}
              path={link.url}
              label={link.label}
              onClick={
                link.action
                  ? (e) => {
                      e.preventDefault();
                      setQrModal(link.action === "qr-wechat" ? "wechat" : "telegram");
                    }
                  : undefined
              }
            >
              {Icon && <Icon className="h-5 w-5 md:h-8 md:w-8" />}
            </SocialCard>
          );
        })}
      </div>
      <QRCodeModal type={qrModal} onClose={() => setQrModal(null)} />
    </>
  );
}
