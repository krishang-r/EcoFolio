import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Footer from "./components/Footer";
import Content from "./components/Homepage/Content"

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
      <Content />
      <Footer />
    </div>
  );
}
