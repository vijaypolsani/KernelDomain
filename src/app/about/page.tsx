import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[200px] flex flex-col items-center justify-center gap-y-5">
        <h1 className="text-brand-primary mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
          About
        </h1>
        <p className="text-left dark:prose-invert">
            Cloud Architecture and C-level Strategy execution expertise. 
            Cloud digital transformation, load migration, application modernization with integrated A.I powered actions. 
            Building efficeint systems and enables in Martech, Insuretech and Pharma domains.
          </p>
          <p className="text-lg">We are a small passionate team.</p>

        <Link
          href={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default AboutPage;
