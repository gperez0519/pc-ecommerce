export interface RigTileParams {
  mainRigImage: string;
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  title: string;
  summary: string;
  price: number | string;
  previousPrice?: number;
  gpuDetail: string;
  cpuDetail: string;
}

export interface ComputerPartParams {
  containerName: string;
  className?: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  partDetail: string;
}

export type RigMockData = {
  id: number;
  mainImgSrc: string;
  thumbnail1Src: string;
  thumbnail2Src: string;
  thumbnail3Src: string;
  title: string;
  summary: string;
  price: number | string;
  previousPrice?: number;
  gpuDetail: string;
  cpuDetail: string;
};
