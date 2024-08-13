import React from "react";

const PageHeader = ({
  title,
  size,
}: {
  title: string;
  size:
    | "text-sm"
    | "text-md"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-4xl"
    | "text-6xl";
}) => {
  return (
    <div className="z-10 px-2 fade-down-2 bg-white" id="message-container">
      <span
        className={`absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl ${size} from-blue-500 via-teal-500 to-pink-500 bg-clip-text box-content font-extrabold text-transparent text-center select-none`}
      >
        <span className="p-3">{title}</span>
      </span>
      <h1
        className={`bg-white relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center ${size} from-blue-500 via-teal-500 to-pink-500 bg-clip-text font-extrabold text-transparent text-center select-auto`}
      >
        {title}
      </h1>
    </div>
  );
};

export default PageHeader;
