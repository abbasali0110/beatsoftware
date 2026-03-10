import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalPresence from "./pages/GlobalPresence";
import Portfolio from "./pages/Portfolio";
import Insights from "./pages/Insights";
import Apply from "./pages/Career/Apply";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import ResourceDocumentPage from "./pages/Resources";
import NotFound from "./pages/NotFound";
import DesignSystem from "./pages/design-system/DesignSystem";
import IndustryPage from "./pages/Industries/IndustryPage";
import TechnologyPage from "./pages/Technologies/TechnologyPage";
import ServicePage from "./pages/Services/ServicePage";
import SolutionPage from "./pages/Solutions/SolutionPage";
import CareerPage from "./pages/Career/CareerPage";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/solutions" element={<SolutionPage />} />
          <Route path="/industries" element={<IndustryPage />} />
          <Route path="/technologies" element={<TechnologyPage />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/career/apply" element={<Apply />} />
          <Route path="/join" element={<Join />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route
            path="/resources/:resourceSlug"
            element={<ResourceDocumentPage />}
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
