
import { Link } from 'react-router-dom'
import { RiSurveyFill } from "react-icons/ri";

const Logo = () => {
  return (
    <Link to="/">
      <p className="w-[100px]">
        {" "}
        <RiSurveyFill /> <span className='text-black text-2xl '>POLLINATE</span>
      </p>
    </Link>
  );
}

export default Logo