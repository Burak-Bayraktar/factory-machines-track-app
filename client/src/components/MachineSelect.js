import React, { useEffect, useState } from "react";
import { getData } from "../helpers/apiRequests";

const MachineSelect = ({ handleChange }) => {
  const [machines, setMachines] = useState([]);

  useEffect(() => {
    getData().then((res) => setMachines([...res]));
  }, []);

  return (
    <MachineSelectWrapper>
      {machines?.length ? (
        <select defaultValue={"Select"} onChange={(e) => handleChange(e)}>
          <option disabled>Select</option>
          {machines?.map((item) => (
            <option pk={item.id} key={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      ) : (
        <div style={{ marginTop: '30px'}}>
          <div class="orbit-spinner">
            <div class="orbit"></div>
            <div class="orbit"></div>
            <div class="orbit"></div>
          </div>
        </div>
      )}
    </MachineSelectWrapper>
  );
};

export default MachineSelect;

const MachineSelectWrapper = ({ children }) => {
  return <div className="select-wrapper">{children}</div>;
};
