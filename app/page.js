import Link from "next/link";
import Header from "./components/Header"
import ImageSlider from "./components/ImageSlider"
import Footer from "./components/Footer"
export default function Home() {
  const images = [
    '/components/images/photo1.png',
    '/components/images/photo2.jpeg',
    '/components/images/photo3.jpg',
  ];
  return (
    <div className="">
      <Header></Header>
      <ImageSlider images={images}/>

      <Footer></Footer>
    </div>
  );
}
