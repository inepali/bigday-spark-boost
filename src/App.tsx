import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";

// Eager load only the home page for instant display
import Index from "./pages/Index";

// Lazy load all other pages for better performance
const Packages = lazy(() => import("./pages/Packages"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Booking = lazy(() => import("./pages/Booking"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Footer = lazy(() => import("./components/Footer"));

// Lazy load all blog posts
const SnowKissedSpringWedding = lazy(() => import("./pages/blog/SnowKissedSpringWedding"));
const BethanyAlexWedding = lazy(() => import("./pages/blog/BethanyAlexWedding"));
const PerfectDayGreer = lazy(() => import("./pages/blog/PerfectDayGreer"));
const UltimateGuideCharlotte = lazy(() => import("./pages/blog/UltimateGuideCharlotte"));
const ChoosingPhotographer = lazy(() => import("./pages/blog/ChoosingPhotographer"));
const TopVenuesCarolinas = lazy(() => import("./pages/blog/TopVenuesCarolinas"));
const WeddingTrends2025 = lazy(() => import("./pages/blog/WeddingTrends2025"));
const WeddingDayTimeline = lazy(() => import("./pages/blog/WeddingDayTimeline"));
const EngagementPhotoIdeas = lazy(() => import("./pages/blog/EngagementPhotoIdeas"));
const WeddingVideographyInvestment = lazy(() => import("./pages/blog/WeddingVideographyInvestment"));
const BridalPortraitSession = lazy(() => import("./pages/blog/BridalPortraitSession"));
const DroneWeddingPhotography = lazy(() => import("./pages/blog/DroneWeddingPhotography"));
const BestWeddingVenuesNC = lazy(() => import("./pages/blog/BestWeddingVenuesNC"));
const WeddingPhotographerRockHill = lazy(() => import("./pages/blog/WeddingPhotographerRockHill"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen">
          <Header />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/snow-kissed-spring-wedding-white-crow" element={<SnowKissedSpringWedding />} />
              <Route path="/blog/bethany-alex-wedding-day" element={<BethanyAlexWedding />} />
              <Route path="/blog/perfect-day-greer-capturing-love" element={<PerfectDayGreer />} />
              <Route path="/blog/ultimate-guide-wedding-photography-charlotte" element={<UltimateGuideCharlotte />} />
              <Route path="/blog/choosing-perfect-wedding-photographer-nc" element={<ChoosingPhotographer />} />
              <Route path="/blog/top-wedding-venues-carolinas" element={<TopVenuesCarolinas />} />
              <Route path="/blog/wedding-photography-trends-2025" element={<WeddingTrends2025 />} />
              <Route path="/blog/wedding-day-timeline-tips" element={<WeddingDayTimeline />} />
              <Route path="/blog/engagement-photo-ideas" element={<EngagementPhotoIdeas />} />
              <Route path="/blog/wedding-videography-investment" element={<WeddingVideographyInvestment />} />
              <Route path="/blog/bridal-portrait-session-tips" element={<BridalPortraitSession />} />
              <Route path="/blog/drone-wedding-photography" element={<DroneWeddingPhotography />} />
              <Route path="/blog/best-wedding-venues-north-carolina" element={<BestWeddingVenuesNC />} />
              <Route path="/blog/wedding-photographer-rock-hill-sc" element={<WeddingPhotographerRockHill />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
