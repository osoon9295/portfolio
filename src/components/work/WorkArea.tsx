import React from "react";
import Placeholder from "./Placeholder";
import Plantree from "./Plantree";

const WorkArea = () => {
  return (
    <section
      aria-label="work"
      className="w-full h-fit flex flex-col items-center gap-10 p-20"
    >
      <h2 className="text-2xl">work</h2>
      <div className="flex flex-row gap-10">
        <Placeholder />
        <Plantree />
      </div>
    </section>
  );
};

export default WorkArea;
