import AppearedAt from "@/components/AppearedAt";
import BusinessSuccess from "@/components/BusinessSuccess";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Testimonial from "@/components/Testimonial";
import WhatWillYouLearn from "@/components/WhatWillYouLearn";
import WorkShop from "@/components/WorkShop";

export default function Home() {
  return (
    <main className="w-full max-w-[1600px] relative">
      <Hero />

      <WorkShop />

      <AppearedAt />

      <BusinessSuccess />

      <Testimonial />

      <TargetAudience />

      <WhatWillYouLearn />
    </main>
  );
}
