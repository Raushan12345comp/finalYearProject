import React, { Suspense, lazy } from "react";

const Jumbo = lazy(() => import("../components/Home_Compo/Jumbo"));
const About = lazy(() => import("../components/Home_Compo/About"));

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div>
          
        </div>
      }
    >
      <Jumbo />
      <About />
    </Suspense>
  );
}
