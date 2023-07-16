import React from "react";
import "./sidebar.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import SidebarOptions from "./SidebarOptions";
import { IconButton } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { OpenSendMessage } from "./features/mailSlice";

const Sidebar = () => {
const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="larger" />}
        className="sidebar__compose"
        onClick={()=> dispatch(OpenSendMessage())}
      >
        COMPOSE
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title="inbox"
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title="Starred" number={54} />
      <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number={54} />
      <SidebarOptions Icon={LabelImportantIcon} title="Important" number={54} />
      <SidebarOptions Icon={NearMeIcon} title="Sent" number={54} />
      <SidebarOptions Icon={NoteIcon} title="Drafts" number={54} />
      <SidebarOptions Icon={ExpandMoreIcon} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
