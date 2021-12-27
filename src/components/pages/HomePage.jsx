import React, { Suspense, lazy } from "react";

const Jumbo = lazy(() => import("../Home_Compo/Jumbo"));
const About = lazy(() => import("../Home_Compo/About"))


export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div>
          <div uk-spinner></div>
        </div>
      }
    >

      <Jumbo />
      <About />
    </Suspense>
  );
}
