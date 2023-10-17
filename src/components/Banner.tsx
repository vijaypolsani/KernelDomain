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
            alt="Tech Strategy and Cloud Design"
            className="w-screen h-screen relative"
            priority
          />
          <BannerText title="Tech Strategy and Cloud design for Azure, Multi-Cloud & On-Premise" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannertwo}
            alt="Databricks"
            className="w-screen h-screen relative"
          />
          <BannerText title="Databricks Analytics Accelerators & Optimized platform" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannerthree}
            alt="Snowflake"
            className="w-screen h-screen relative"
          />
          <BannerText title="Snowflake Warehouse Accelerators & Solutions" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannerfour}
            alt="MongoDB"
            className="w-screen h-screen relative"
          />
          <BannerText title="MongoDB powered infrastructure and application managed services" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannerfive}
            alt="CESB"
            className="w-screen h-screen relative"
          />
          <BannerText title="Composite Enteprise Service Bus [CESB]" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannersix}
            alt="AMP"
            className="w-screen h-screen relative"
          />
          <BannerText title="Adaptive metadata driven data pipelines [AMP]" />
        </div>
        <div className="w-screen h-screen relative">
          <Image
            src={bannerseven}
            alt="OP-CUDA"
            className="w-screen h-screen relative"
          />
          <BannerText title="GPU optimized processing design and engineering solutions [OP-CUDA]" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
