import Link from "next/link";
import Header from "./components/Header"
import PhotoSlide from "./components/PhotoSlide"
export default function Home() {
  return (
    <div className="">
      <Header></Header>
      <PhotoSlide></PhotoSlide>
    </div>
  );
}
