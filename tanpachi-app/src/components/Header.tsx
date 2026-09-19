import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "./Icons";

type Props = {
  title: ReactNode;
  back?: boolean | string;
  right?: ReactNode;
  left?: ReactNode;
  className?: string;
};

export function Header({ title, back, right, left, className }: Props) {
  const navigate = useNavigate();
  return (
    <header className={`header ${className ?? ""}`}>
      <div>
        {left ??
          (back ? (
            <button
              className="back"
              onClick={() => (typeof back === "string" ? navigate(back) : navigate(-1))}
              aria-label="戻る"
            >
              <ChevronLeft size={20} />
              戻る
            </button>
          ) : null)}
      </div>
      <div className="title">{title}</div>
      <div className="right">{right}</div>
    </header>
  );
}
