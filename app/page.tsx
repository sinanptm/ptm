import AboutUs from "@/components/home/AboutUs";
import KalariDetails from "@/components/home/KalariDetails";
import ImageSlider from "@/components/home/ImageSlider";
import KalariTraining from "@/components/home/KalariTraining";
import Centers from "@/components/home/Centers";
import ServicesList from "@/components/ServicesList";
import HomeSectionWrapper from "@/components/hoc/HomeSectionWrapper";
import { memo } from "react";
import ResearchCenter from "@/components/home/ResearchCenter";

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
