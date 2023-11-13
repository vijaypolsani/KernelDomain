import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

export default function FirstPost(){
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-2xl font-bold">
          Technology Articles, Whitepapers & Industry trends 
        </h2>
        <p className="text-md font-bold text-slate-500">
          Content from STRAPI CMS
        </p>
        <Link
          href={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  )
}
