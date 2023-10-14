import { useEffect, useState } from "react";
import styles from "./inventory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteInventory, fetchInventoryData } from "../Store/action";
import ModalForm from "../Components/form";

export default function InventoryPage() {
  const [showModal, setShowmodal] = useState(false);
  const [editedId, setEditedId] = useState(undefined);
  const dispatch = useDispatch();
  const inventoryData = useSelector((store) => store.inventoryData);

  useEffect(() => {
    dispatch(fetchInventoryData());
  }, [dispatch]);

  const handleDelete = (id) => {
    // console.log(id);
    dispatch(deleteInventory(id));
  };

  // console.log(inventoryData);
  return (
    <div className={styles.inventoryPage}>
      <div className={styles.inventoryHeader}>
        {" "}
        <h1> Inventory Page</h1>
        <button
          onClick={() => {
            setShowmodal(true);
          }}
        >
          Add Inventory
        </button>
      </div>

      <div className={styles.inventoryTable}>
        <table>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
          <tbody>
            {inventoryData.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      setShowmodal(true);
                      setEditedId(data._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDelete(data._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal && (
        <ModalForm
          handleShowModal={setShowmodal}
          editedId={editedId}
          handleEditedID={setEditedId}
        />
      )}
    </div>
  );
}
