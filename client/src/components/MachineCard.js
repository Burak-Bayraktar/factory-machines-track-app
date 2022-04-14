import React from "react";
import MachineCardRow from "./MachineCardRow";
import MachineFooter from "./MachineFooter";
import MachineInfo from "./MachineInfo";

const MachineCard = ({ item, name, loading }) => {
  const rows = [
    {
      title: "Availability",
      columns: [
        { title: "Uptime", content: item.workDuration },
        { title: "Downtime", content: item.failureDuration },
      ],
      average: item.availability,
    },
    {
      title: "Performance",
      columns: [
        { title: "Ideal Cycle", content: item.idealCycle },
        { title: "Average Cycle", content: item.averageCycle },
      ],
      average: item.performance,
    },
    {
      title: "Quality",
      columns: [
        { title: "Produced", content: item.prodAmount },
        { title: "Defect", content: item.defectAmount },
      ],
      average: item.quality,
    },
  ];

  const RenderMachineCard = () => {
    if (loading) {
      return (
        <div className="spinner-container">
          <div class="orbit-spinner">
            <div class="orbit"></div>
            <div class="orbit"></div>
            <div class="orbit"></div>
          </div>
        </div>
      );
    } else {
      if (Object.keys(item).length) {
        return (
          <>
            <MachineInfo name={name} item={item} />
            {rows?.map((row, index) => {
              return (
                <MachineCardRow
                  key={index}
                  title={row.title}
                  row={row.columns}
                  average={row.average}
                />
              );
            })}
            <MachineFooter item={item} />
          </>
        );
      }

      return <div>Please select a machine first</div>;
    }
  };

  return <MachineCardWrapper>{RenderMachineCard()}</MachineCardWrapper>;
};

export default MachineCard;
const MachineCardWrapper = ({ children }) => (
  <div className="machine-card">{children}</div>
);
