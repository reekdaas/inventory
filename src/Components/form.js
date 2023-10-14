import { createPortal } from "react-dom";
import styles from "./form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInventoryData, updatedInevntory } from "../Store/action";

export default function ModalForm({
  handleShowModal,
  editedId,
  handleEditedID,
}) {
  const dispatch = useDispatch();
  const inventoryData = useSelector((state) => state.inventoryData);

  const data = inventoryData.find((data) => data._id === editedId);
  console.log(editedId);

  const [formData, setFormData] = useState(
    editedId
      ? {
          name: data.name,
          price: data.price,
          quantity: data.quantity,
        }
      : {
          name: "",
          price: "",
          quantity: "",
        }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editedId && data) {
      setFormData({ name: "", price: "", quantity: "" });
      dispatch(updatedInevntory(editedId, formData));
    } else {
      if (
        formData.name.length > 0 &&
        formData.price.length > 0 &&
        formData.quantity.length > 0
      ) {
        dispatch(addInventoryData(formData));
      }
      setFormData({ name: "", price: "", quantity: "" });
    }
    handleShowModal(false);
    handleEditedID(undefined);
  };

  // console.log(formData);
  return createPortal(
    <div className={styles.modal}>
      <div
        className={styles.modalOverlay}
        onClick={() => {
          handleShowModal(false);
          handleEditedID(undefined);
        }}
      ></div>

      <form className={styles.modalForm}>
        <div className={styles.modalText}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.modalText}>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            placeholder="Price"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.modalText}>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            id="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>,
    document.getElementById("modal")
  );
}
