import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";

export default function Home() {
  const images = [
    "/components/images/photo1.png",
    "/components/images/photo2.jpeg",
    "/components/images/photo3.jpg",
  ];

  const links = [
    { href: "/Login", text: "Login" },
    { href: "/Login", text: "Sign Up" },
  ];

  return (
    <div>
      {/* Pass links correctly */}
      <Header links={links} />
      <ImageSlider images={images} />
      <Footer />
    </div>
  );
}
