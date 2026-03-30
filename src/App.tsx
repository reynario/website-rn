import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomeV2 = lazy(() => import('./pages/HomeV2'));
const HomeV3 = lazy(() => import('./pages/HomeV3'));
const HomeV4 = lazy(() => import('./pages/HomeV4'));
const HomeV5 = lazy(() => import('./pages/HomeV5'));
const HomeV6 = lazy(() => import('./pages/HomeV6'));
const HomeV7 = lazy(() => import('./pages/HomeV7'));
const HomeV9 = lazy(() => import('./pages/HomeV9'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfUse = lazy(() => import('./pages/TermsOfUse'));

function RouteFallback() {
  return (
    <div className="min-h-screen bg-dark-bg" aria-busy="true" aria-live="polite" />
  );
}

export default function App() {
  return (
    <Router>
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<HomeV2 />} />
          <Route path="/v3" element={<HomeV3 />} />
          <Route path="/v4" element={<HomeV4 />} />
          <Route path="/v5" element={<HomeV5 />} />
          <Route path="/v6" element={<HomeV6 />} />
          <Route path="/v7" element={<HomeV7 />} />
          <Route path="/v9" element={<HomeV9 />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfUse />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
