/* eslint-disable react/prop-types */

import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div
      className="h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center "
    >
      <RingLoader size={100} color="#36d7b7" />;
    </div>
  );
};

export default Loading;
