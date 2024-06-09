import React from "react";

import "../../../../Style/Pages/Home/DashBoard.css";
import ChartDailySales from "../../../Components/Chart/ChartDailySales";

function ChartChartDailySalesDashBoard({ selectedProduct }) {
  return (
    <div className="ChartDailySalesDashBoard">
      <div className="ChartDailySalesDashBoardContainer">
        <div className="ChartDailySalesDashBoardContent">
          <div className="Box-ChartDailySalesDashBoard">
            <ChartDailySales selectedProduct={selectedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartChartDailySalesDashBoard;
