import AboutUs from "@/components/home/AboutUs";
import KalariDetails from "@/components/home/KalariDetails";
import ImageSlider from "@/components/home/ImageSlider";
import KalariTraining from "@/components/home/KalariTraining";
import Services from "@/components/home/Services";

const Page = () => {
  return (
    <main className="min-h-screen">
      <ImageSlider />
      <KalariDetails />
      <AboutUs />
      <KalariTraining />
      <Services />
    </main>
  );
};

export default Page;
