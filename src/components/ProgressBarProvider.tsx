// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const ProgressBarProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="40px"
        color="#ff8904"
        options={{ showSpinner: true }}
        shallowRouting
        // spinnerPosition="bottom-left"
      />
    </>
  );
};

export default ProgressBarProviders;
