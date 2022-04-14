import React from "react";
import { STATUS } from "../helpers/constants";
import { getFullTime, getTimesLeadingZero } from "../helpers/helperFunctions";

const MachineInfo = ({ name, item }) => {
  const {
    hours: shiftStartHours,
    minutes: shiftStartMinutes,
    seconds: shiftStartSeconds,
  } = getFullTime(item.shift?.start);

  const {
    hours: shiftEndHours,
    minutes: shiftEndMinutes,
    seconds: shiftEndSeconds,
  } = getFullTime(item.shift?.end);

  const shiftStartFullTime = getTimesLeadingZero(shiftStartHours) + ":" + getTimesLeadingZero(shiftStartMinutes) + ":" + getTimesLeadingZero(shiftStartSeconds);
  const shiftEndFullTime = getTimesLeadingZero(shiftEndHours) + ":" + getTimesLeadingZero(shiftEndMinutes) + ":" + getTimesLeadingZero(shiftEndSeconds);

  return (
    <div className="machine__info">
      <div className="name">
        {name}
      </div>
      <div>
        <div className="status">
          <span>Status: </span>
          {item.status == 0 || item.status == 1
            ? STATUS[item.status]
            : STATUS["Other"]}
        </div>
        <div className="operator">
          Admin:
          {item.operator?.user
            ? ` ${item.operator?.user.first_name} ${item.operator?.user.last_name}`
            : " unknown"}
        </div>
        <div className="shift">
          {shiftStartFullTime} - {shiftEndFullTime}
        </div>
      </div>

      <div className="oee average">
        <span>OEE</span>
        <span>{item.oee} %</span>
      </div>
    </div>
  );
};

export default MachineInfo;
