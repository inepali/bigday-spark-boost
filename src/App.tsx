import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import Booking from "./pages/Booking";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import SnowKissedSpringWedding from "./pages/blog/SnowKissedSpringWedding";
import BethanyAlexWedding from "./pages/blog/BethanyAlexWedding";
import PerfectDayGreer from "./pages/blog/PerfectDayGreer";
import UltimateGuideCharlotte from "./pages/blog/UltimateGuideCharlotte";
import ChoosingPhotographer from "./pages/blog/ChoosingPhotographer";
import TopVenuesCarolinas from "./pages/blog/TopVenuesCarolinas";
import WeddingTrends2025 from "./pages/blog/WeddingTrends2025";
import WeddingDayTimeline from "./pages/blog/WeddingDayTimeline";
import EngagementPhotoIdeas from "./pages/blog/EngagementPhotoIdeas";
import WeddingVideographyInvestment from "./pages/blog/WeddingVideographyInvestment";
import BridalPortraitSession from "./pages/blog/BridalPortraitSession";
import DroneWeddingPhotography from "./pages/blog/DroneWeddingPhotography";

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
            <Route path="/faq" element={<FAQ />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
