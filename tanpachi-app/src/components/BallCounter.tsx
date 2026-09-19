import "./BallCounter.css";

type Props = {
  value: number;
  size?: "sm" | "md" | "lg";
  delta?: number;
};

export function BallCounter({ value, size = "md", delta }: Props) {
  return (
    <span className={`ball-counter ball-counter-${size}`}>
      <span className="ball" />
      <span className="num">{value.toLocaleString()}</span>
      <span className="unit">玉</span>
      {delta !== undefined && delta !== 0 && (
        <span className={`delta ${delta > 0 ? "plus" : "minus"}`}>
          ({delta > 0 ? "+" : ""}
          {delta})
        </span>
      )}
    </span>
  );
}
