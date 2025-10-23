import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Ourusers from "../components/Ourusers";
import Howwork from "../components/Howwork";
import PerfectPlan from "@/components/Perfect_plan";
import Workflow from "@/components/Workflow";
// import Gallery from "@/components/Gallery";
// import Stats from "@/components/Stats";
// import Features from "@/components/Features";
// import Testimonials from "@/components/Testimonials";
// import Pricing from "@/components/Pricing";
// import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Ourusers />
      <Howwork />
      <PerfectPlan />
      <Workflow />
    </>
  );
}
