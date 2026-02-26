import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Technologies from './pages/Technologies';
import GlobalPresence from './pages/GlobalPresence';
import Portfolio from './pages/Portfolio';
import Insights from './pages/Insights';
import Career from './pages/Career';
import Apply from './pages/Career/Apply';
import Contact from './pages/Contact';
import Join from './pages/Join';
import ResourceDocumentPage from './pages/Resources';
import NotFound from './pages/NotFound';

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
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/global-presence" element={<GlobalPresence />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/career/apply" element={<Apply />} />
          <Route path="/join" element={<Join />} />
          <Route path="/resources/:resourceSlug" element={<ResourceDocumentPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
