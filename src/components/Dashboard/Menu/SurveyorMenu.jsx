
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdHomeWork } from "react-icons/md";
import { BsGraphUp } from 'react-icons/bs'
import { MdOutlineManageHistory } from 'react-icons/md'
import MenuItem from "../Sidebar/MenuItem";


const SurveyorMenu = () => {
  return (
    <>
     

      {/* Menu Items */}
      <MenuItem
        icon={BsFillHouseAddFill}
        label="Add Survey"
        address="/dashboard/add-survey"
      />
      <MenuItem
        icon={MdHomeWork}
        label="Survey List"
        address="/dashboard/survey-list"
      />
      <MenuItem
        icon={MdOutlineManageHistory}
        label="Survey Response"
        address="survey-response"
      />
    </>
  );
};

export default SurveyorMenu;