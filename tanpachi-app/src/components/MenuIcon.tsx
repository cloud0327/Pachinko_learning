import {
  Bell,
  Doc,
  Help,
  Info,
  Mail,
  Palette,
  Shield,
  Target,
  User,
} from "./Icons";

const MAP = {
  bell: Bell,
  help: Help,
  faq: Help,
  mail: Mail,
  doc: Doc,
  shield: Shield,
  info: Info,
  user: User,
  target: Target,
  palette: Palette,
} as const;

export function MenuIcon({ name, size = 20 }: { name: string; size?: number }) {
  const Cmp = MAP[name as keyof typeof MAP] ?? Info;
  return <Cmp size={size} />;
}
