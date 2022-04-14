import React from "react";

const MachineCardRow = ({ title, row, average }) => {
  return (
    <div className="machine-card__item">
      <span>{ title }</span>
      {
          row?.map((item, index) => {
                return <div key={index} className="column">
                    <span>{ item.title }</span>
                    <span>{ item.content }</span>
                </div>
          })
      }
      <div className="average">{ average } %</div>
    </div>
  );
};

export default MachineCardRow;
