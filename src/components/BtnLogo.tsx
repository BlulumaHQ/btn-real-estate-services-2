import btnLogoSrc from "@/assets/btn-logo-main.svg";

interface Props {
  className?: string;
  height?: number;
}

const BtnLogo = ({ className = "", height = 40 }: Props) => (
  <img
    src={btnLogoSrc}
    alt="BTN Hospitality Consultancy"
    height={height}
    style={{ height: `${height}px`, width: "auto" }}
    className={className}
  />
);

export default BtnLogo;
