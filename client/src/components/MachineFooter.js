import React from "react";

const MachineFooter = ({ item }) => {
  return (
    <>
      {item.currentProdPlan ? (
        <>
          <div className="current-prod-plan">
            <div className="good-code">
              <span>Code</span>
              <span>{item.currentProdPlan?.goods?.code || 'unknown'}</span>
            </div>
            <div className="product-code">
              <span>Product Code</span>
              <span>{item.currentProdPlan?.goods?.product?.code || 'unknown'}</span>
            </div>
          </div>

          <div className="results">
            <div className="produced">
              <span>Produced</span>
              <div>{item.currentProdPlan?.goods?.current_produced || 'unknown'}</div>
            </div>
            <div className="targeted">
              <span>Targeted</span>
              <div>{item.currentProdPlan?.goods?.amount || 'unknown'}</div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default MachineFooter;
