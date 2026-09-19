import { useMemo } from "react";
import "./Fx.css";

type Props = {
  sparkles?: number;
  petals?: number;
  rays?: boolean;
  hall?: boolean;
};

function seeded(n: number) {
  let s = n * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function Fx({ sparkles = 24, petals = 0, rays = false, hall = false }: Props) {
  const items = useMemo(() => {
    const r = seeded(sparkles + petals * 7);
    return {
      sparkles: Array.from({ length: sparkles }, (_, i) => ({
        id: i,
        x: r() * 100,
        y: r() * 100,
        s: 2 + r() * 4,
        d: r() * 3,
        gold: r() > 0.4,
      })),
      petals: Array.from({ length: petals }, (_, i) => ({
        id: i,
        x: r() * 100,
        d: r() * 8,
        dur: 7 + r() * 6,
        s: 8 + r() * 8,
      })),
    };
  }, [sparkles, petals]);

  return (
    <div className="fx" aria-hidden>
      {hall && <div className="fx-hall" />}
      {rays && <div className="fx-rays" />}
      {items.sparkles.map((s) => (
        <span
          key={s.id}
          className={`fx-sparkle ${s.gold ? "gold" : ""}`}
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.s,
            height: s.s,
            animationDelay: `${s.d}s`,
          }}
        />
      ))}
      {items.petals.map((p) => (
        <span
          key={p.id}
          className="fx-petal"
          style={{
            left: `${p.x}%`,
            width: p.s,
            height: p.s * 0.8,
            animationDelay: `${p.d}s`,
            animationDuration: `${p.dur}s`,
          }}
        />
      ))}
    </div>
  );
}
