"use client";
export const  runtime = "edge";

import Welcome from "@/components/markdown/welcome.mdx";
export default function Page() {
  return (
    <div className=" flex items-center justify-center ">
      <div>
        <Welcome />
      </div>
    </div>
  );
}
