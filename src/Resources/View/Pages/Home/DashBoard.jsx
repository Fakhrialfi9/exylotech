import "../../../Style/Pages/Home/DashBoard.css";

import ChartDailySalesDashBoard from "./Section/ChartDailySales.jsx";
import ChartComparisonSalesDashBoard from "./Section/ChartComparisonSales.jsx";
import TableSalesDashboard from "./Section/TableSales.jsx";

function DashBoard({ selectedProduct }) {
  return (
    <main id="MainDashBoard">
      <section className="MainDashBoard">
        <div className="Dashboard">
          <div className="DashBoardContainer">
            <div className="DashBoardContent">
              {/* Start Navbar   */}

              {/* Start Sales Chart */}
              <section className="MainChartDailySalesDashBoard">
                <ChartDailySalesDashBoard selectedProduct={selectedProduct} />
              </section>
              {/* End Sales Chart */}

              {/* Start Sales Chart */}
              <section className="MainChartComparisonSalesDashBoard">
                <ChartComparisonSalesDashBoard selectedProduct={selectedProduct} />
              </section>
              {/* End Sales Chart */}

              {/* Start Sales Chart */}
              <section className="MainTableSalesDashboard">
                <TableSalesDashboard />
              </section>
              {/* End Sales Chart */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DashBoard;
