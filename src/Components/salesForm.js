import { useState } from "react";
import styles from "./salesForm.module.css";
import { useDispatch } from "react-redux";
import { addSalesData } from "../Store/action";

export default function SalesForm({ handleShowSales }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ name: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSalesData(formData));
    setFormData({ name: "", amount: "" });
  };

  console.log(formData);
  return (
    <div className={styles.salesForm}>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          handleShowSales(false);
        }}
      ></div>
      <form className={styles.addModal}>
        <div className={styles.modalText}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className={styles.modalText}>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
          />
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
