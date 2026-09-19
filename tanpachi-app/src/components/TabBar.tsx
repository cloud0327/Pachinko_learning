import { NavLink } from "react-router-dom";
import { Book, Grid, Home, Menu, Pachinko } from "./Icons";

const TABS = [
  { to: "/home", label: "ホーム", Icon: Home },
  { to: "/learn", label: "学習", Icon: Book },
  { to: "/pachinko", label: "パチンコ", Icon: Pachinko },
  { to: "/words", label: "図鑑", Icon: Grid },
  { to: "/menu", label: "その他", Icon: Menu },
];

export function TabBar() {
  return (
    <nav className="tab-bar">
      {TABS.map(({ to, label, Icon }) => (
        <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
          <Icon size={22} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
