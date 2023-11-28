import { FaUserCog } from 'react-icons/fa';
import MenuItem from '../Sidebar/MenuItem';

const AdminMenu = () => {
    return (
      <>
        <MenuItem
          icon={FaUserCog}
          label="Manage Users"
          address="/dashboard/manage-users"
        />
        <MenuItem
          icon={FaUserCog}
          label="All Payments"
          address="/dashboard/all-payments"
        />

        <MenuItem
          icon={FaUserCog}
          label="Surveys"
          address="/dashboard/all-surveys"
        />

        <MenuItem
          icon={FaUserCog}
          label="Survey Response"
          address="/dashboard/user-survey-response"
        />
      </>
    );
};

export default AdminMenu;