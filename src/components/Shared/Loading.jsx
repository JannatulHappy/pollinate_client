/* eslint-disable react/prop-types */

import { BounceLoader} from "react-spinners";

const Loading = () => {
  return (
    <div
      className="h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center "
    >
      <BounceLoader color="#006400" />
    </div>
  );
};

export default Loading;
