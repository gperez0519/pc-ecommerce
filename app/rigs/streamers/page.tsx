import PageHeader from "@/app/components/PageHeader";
import RigTile from "@/app/components/RigTile";
import { rigMockData } from "@/app/mockData/rigMockData";
import React from "react";

const StreamerRigPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 relative p-5">
      <PageHeader size="text-4xl" title="For Streamers" />
      <div
        id="rig-container"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 auto-rows-fr"
      >
        {rigMockData.map((rig) => {
          return (
            <RigTile
              key={rig.id}
              mainRigImage={rig.mainImgSrc}
              thumbnail1={rig.thumbnail1Src}
              thumbnail2={rig.thumbnail2Src}
              thumbnail3={rig.thumbnail3Src}
              title={rig.title}
              summary={rig.summary}
              price={rig.price}
              previousPrice={rig.previousPrice}
              gpuDetail={rig.gpuDetail}
              cpuDetail={rig.cpuDetail}
            />
          );
        })}
      </div>
    </main>
  );
};

export default StreamerRigPage;
