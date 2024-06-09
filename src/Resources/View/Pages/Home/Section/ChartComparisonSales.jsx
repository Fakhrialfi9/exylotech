import React from "react";

import "../../../../Style/Pages/Home/DashBoard.css";
import ComparisonSales from "../../../Components/Chart/ComparisonSales";

function ChartComparisonSalesDashBoard({ selectedProduct }) {
  return (
    <div className="ChartDailySalesDashBoard">
      <div className="ChartDailySalesDashBoardContainer">
        <div className="ChartDailySalesDashBoardContent">
          <div className="Box-ChartDailySalesDashBoard">
            <ComparisonSales selectedProduct={selectedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartComparisonSalesDashBoard;
