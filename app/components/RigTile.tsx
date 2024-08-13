"use client";
import Image from "next/image";
import { useState } from "react";
import { RigTileParams } from "../types/RigTypes";
import ComputerPart from "./ComputerPart";

const RigTile = ({
  mainRigImage = "#",
  thumbnail1 = "#",
  thumbnail2 = "#",
  thumbnail3 = "#",
  title = "",
  summary,
  price,
  previousPrice,
  gpuDetail,
  cpuDetail,
}: RigTileParams) => {
  const [mainImg, setMainImg] = useState<string>("");
  return (
    <div className="border-4 border-sky-500 p-5 rounded-xl space-y-1 fade-up-2">
      <Image
        src={mainImg ? mainImg : mainRigImage}
        alt="PC Rig"
        width={150}
        height={150}
        className="pc-rig-main-image mx-auto"
        priority
      />
      <div className="flex flex-nowrap gap-1">
        <Image
          src={thumbnail1}
          alt="PC Thumbnail 1"
          width={30}
          height={30}
          className="pc-rig-thumbnail-1 rounded-lg cursor-pointer hover:border-white hover:border-2"
          onMouseOver={() => {
            setMainImg(thumbnail1);
          }}
          onMouseLeave={() => {
            setMainImg("");
          }}
        />
        <Image
          src={thumbnail2}
          alt="PC Thumbnail 2"
          width={30}
          height={30}
          className="pc-rig-thumbnail-2 rounded-lg cursor-pointer hover:border-white hover:border-2"
          onMouseOver={() => {
            setMainImg(thumbnail2);
          }}
          onMouseLeave={() => {
            setMainImg("");
          }}
        />
        <Image
          src={thumbnail3}
          alt="PC Thumbnail 3"
          width={30}
          height={30}
          className="pc-rig-thumbnail-3 rounded-lg cursor-pointer hover:border-white hover:border-2"
          onMouseOver={() => {
            setMainImg(thumbnail3);
          }}
          onMouseLeave={() => {
            setMainImg("");
          }}
        />
      </div>
      <h3 className="pc-title bg-purple-500 p-2 rounded-lg">{title}</h3>
      <div>{summary}</div>
      <div className="price-container flex gap-2 text-xl">
        <div className="current-price font-bold">
          {typeof price === "string" ? price.toUpperCase() : `$${price}`}
        </div>
        {previousPrice && (
          <div className="prior-price line-through text-gray-400">
            ${previousPrice}
          </div>
        )}
      </div>
      <div className="pc-component-detail">
        <ComputerPart
          containerName="gpu-detail"
          partDetail={gpuDetail}
          src="/images/gpuIcon.png"
          width={48}
          height={48}
          alt="Graphic card icon"
        />
        <ComputerPart
          containerName="cpu-detail"
          partDetail={cpuDetail}
          src="/images/cpuIcon.png"
          width={48}
          height={48}
          alt="processor icon"
        />
      </div>
    </div>
  );
};

export default RigTile;
