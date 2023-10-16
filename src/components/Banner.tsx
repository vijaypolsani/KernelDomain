"use client";
import Slider from "react-slick";
import bannerone from "@/images/bannerone.jpg";
import bannertwo from "@/images/bannertwo.jpg";
import bannerthree from "@/images/bannerthree.jpg";
import bannerfour from "@/images/bannerfour.jpg";
import bannerfive from "@/images/bannerfive.jpg";
import bannersix from "@/images/bannersix.jpg";
import bannerseven from "@/images/bannerseven.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import Image from "next/image";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-screen h-screen relative">
          <Image
            src={bannerone}
            alt="bannerone"
            className="w-screen h-screen relative"
            priority
          />
          <BannerText title="Tech Strategy and Cloud design for Azure, Multi-Cloud & On-Premise" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannertwo}
            alt="bannertwo"
            className="w-screen h-screen relative"
          />
          <BannerText title="Databricks Analytics Accelerators & Optimized platform" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
