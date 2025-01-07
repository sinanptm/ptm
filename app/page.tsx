import AboutUs from "@/components/home/AboutUs";
import KalariDetails from "@/components/home/KalariDetails";
import ImageSlider from "@/components/home/ImageSlider";

const Page = () => {
  return (
    <main className="min-h-screen">
      <ImageSlider />
      <KalariDetails />
      <AboutUs />
    </main>
  );
};

export default Page;
