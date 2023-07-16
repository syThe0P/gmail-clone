import  IconButton  from "@material-ui/core/IconButton";
import  CheckBox  from "@material-ui/core/Checkbox";
import  LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import  StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import './EmailRow.css'
import {useNavigate} from "react-router-dom";

function EmailRow({id, title, description, subject, time}) {
    const navigate = useNavigate();
  return (
    <div onClick={()=> navigate("./Mail")} className="emailRow">
      <div className="emailRow_Options">
        <CheckBox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailRow_title">{title}</div>
      <div className="emailRow_message">
        <h4>{subject}{" "}
        <spam className="emailRow__Description">-{" "}
            {description}</spam></h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
