import { useDispatch, useSelector } from "react-redux";
import styles from "./sales.module.css";
import { useEffect, useState } from "react";
import { fetchSalesData } from "../Store/action";
import SalesForm from "../Components/salesForm";

export default function SalesPage() {
  const [showSales, setShowSales] = useState(false);

  const dispatch = useDispatch();
  const sales = useSelector((state) => state.salesData);
  useEffect(() => {
    dispatch(fetchSalesData());
  }, [dispatch]);

  // console.log(sales);

  return (
    <div className={styles.salesPage}>
      <div className={styles.salesHeader}>
        <h1>Sales Page</h1>
        <button
          onClick={() => {
            setShowSales(true);
          }}
        >
          Add Sales
        </button>
      </div>

      <div className={styles.salesTable}>
        <table>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          <tbody>
            {sales.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showSales && <SalesForm handleShowSales={setShowSales} />}
    </div>
  );
}
