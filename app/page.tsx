import HomeSectionWrapper from "@/components/hoc/HomeSectionWrapper";
import ResearchCenter from "@/components/home/ResearchCenter";
import KalariTraining from "@/components/home/KalariTraining";
import KalariDetails from "@/components/home/KalariDetails";
import ImageSlider from "@/components/home/ImageSlider";
import ServicesList from "@/components/ServicesList";
import AboutUs from "@/components/home/AboutUs";
import Centers from "@/components/home/Centers";
import { memo } from "react";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <ImageSlider />
      <KalariDetails />
      <AboutUs />
      <KalariTraining />
      <ResearchCenter />
      <HomeSectionWrapper>
        <ServicesList />
      </HomeSectionWrapper>
      <Centers />
    </main>
  );
};

export default memo(HomePage);
