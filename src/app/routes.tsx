import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import MobileDev from "./pages/MobileDev";
import DesktopDev from "./pages/DesktopDev";
import AI from "./pages/AI";
import Robotics from "./pages/Robotics";
import Automation from "./pages/Automation";
import Design from "./pages/Design";
import Electronics from "./pages/Electronics";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "web", Component: WebDev },
      { path: "mobile", Component: MobileDev },
      { path: "desktop", Component: DesktopDev },
      { path: "ai", Component: AI },
      { path: "robotics", Component: Robotics },
      { path: "automation", Component: Automation },
      { path: "design", Component: Design },
      { path: "electronics", Component: Electronics },
      { path: "*", Component: NotFound },
    ],
  },
]);
