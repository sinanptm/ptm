import AboutUs from "@/components/home/AboutUs";
import KalariDetails from "@/components/home/KalariDetails";
import ImageSlider from "@/components/home/ImageSlider";
import KalariTraining from "@/components/home/KalariTraining";
import Services from "@/components/home/Services";
import Centers from "@/components/home/Centers";

const Page = () => {
  return (
    <main className="min-h-screen">
      <ImageSlider />
      <KalariDetails />
      <AboutUs />
      <KalariTraining />
      <Services />
      <Centers />
    </main>
  );
};

export default Page;
