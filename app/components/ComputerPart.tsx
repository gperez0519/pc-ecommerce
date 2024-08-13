import React from "react";
import Image from "next/image";
import { ComputerPartParams } from "../types/RigTypes";

const ComputerPart = ({
  containerName,
  className,
  src = "#",
  width = 48,
  height = 48,
  alt,
  partDetail,
}: ComputerPartParams) => {
  return (
    <div className={className}>
      <div className={`${containerName} flex flex-nowrap items-center gap-2`}>
        <div>
          <Image src={src} width={width} height={height} alt={alt} />
        </div>
        <div>{partDetail}</div>
      </div>
    </div>
  );
};

export default ComputerPart;
