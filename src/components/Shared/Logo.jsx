
import { Link } from 'react-router-dom'
import { RiSurveyFill } from "react-icons/ri";

const Logo = () => {
  return (
    <Link to="/">
      <p className="flex items-center justify-center gap-1 ">
        {" "}
        <RiSurveyFill size={25} className='text-green-800' /> <span className='text-2xl font-semibold text-green-800 '>POLLINATE</span>
      </p>
    </Link>
  );
}

export default Logo