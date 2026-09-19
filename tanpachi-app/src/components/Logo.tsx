import "./Logo.css";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className={`logo logo-${size}`}>
      <span className="logo-main brush">たんパチ</span>
      <span className="logo-sub">TANPACHI</span>
    </div>
  );
}
