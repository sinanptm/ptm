import AboutUs from "@/components/home/AboutUs";
import Details from "@/components/home/Details";
import ImageSlider from "@/components/home/ImageSlider";

const Page = () => {
  return (
    <main className="min-h-screen">
      <ImageSlider />
      <AboutUs />
      <Details />
    </main>
  );
};

export default Page;
