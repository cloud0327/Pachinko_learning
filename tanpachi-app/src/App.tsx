import { Navigate, Route, Routes } from "react-router-dom";
import { Device } from "./components/Device";
import { Welcome } from "./pages/Welcome";
import { Home } from "./pages/Home";
import { Learn } from "./pages/Learn";
import { Correct } from "./pages/Correct";
import { PachinkoMode } from "./pages/PachinkoMode";
import { Rewards } from "./pages/Rewards";
import { Words } from "./pages/Words";
import { Records } from "./pages/Records";
import { MyPage } from "./pages/MyPage";
import { MenuPage } from "./pages/MenuPage";
import { BallHistory } from "./pages/BallHistory";

export default function App() {
  return (
    <Device>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/correct" element={<Correct />} />
        <Route path="/pachinko" element={<PachinkoMode />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/words" element={<Words />} />
        <Route path="/records" element={<Records />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/history" element={<BallHistory />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Device>
  );
}
