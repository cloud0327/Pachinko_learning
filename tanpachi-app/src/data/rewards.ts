import type { MenuItem, Reward } from "../types";

export const REWARDS: Reward[] = [
  { id: "theme-sakura", name: "テーマ変更（桜ver.）", cost: 500, category: "item", icon: "sakura" },
  { id: "premium-fx", name: "プレミア演出解放", cost: 1000, category: "item", icon: "premium" },
  { id: "title-master", name: "称号「英語マスター」", cost: 2000, category: "item", icon: "title" },
  { id: "bonus-double", name: "獲得玉2倍（24時間）", cost: 800, category: "bonus", icon: "premium" },
  { id: "bonus-hint", name: "ヒントチケット×5", cost: 300, category: "bonus", icon: "title" },
  { id: "custom-theme-night", name: "テーマ変更（夜桜ver.）", cost: 700, category: "custom", icon: "theme" },
  { id: "custom-sound", name: "サウンドパック「和太鼓」", cost: 600, category: "custom", icon: "sound" },
];

export const MENU_ITEMS: MenuItem[] = [
  { label: "お知らせ", badge: 3, icon: "bell" },
  { label: "使い方", icon: "help" },
  { label: "よくある質問", icon: "faq" },
  { label: "お問い合わせ", icon: "mail" },
  { label: "利用規約", icon: "doc" },
  { label: "プライバシーポリシー", icon: "shield" },
  { label: "アプリ情報", trailing: "Ver. 1.0.0", icon: "info" },
];

export const MYPAGE_ITEMS: MenuItem[] = [
  { label: "プロフィール編集", icon: "user" },
  { label: "目標設定", icon: "target" },
  { label: "通知設定", icon: "bell" },
  { label: "デザイン変更", icon: "palette" },
  { label: "ヘルプ", icon: "help" },
];
