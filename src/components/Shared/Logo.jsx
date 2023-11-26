
import { Link } from 'react-router-dom'
import { RiSurveyFill } from "react-icons/ri";

const Logo = () => {
  return (
    <Link to="/">
      <p className="flex items-center justify-center gap-1 ">
        {" "}
        <RiSurveyFill  /> <span className='text-2xl text-black '>POLLINATE</span>
      </p>
    </Link>
  );
}

export default Logo