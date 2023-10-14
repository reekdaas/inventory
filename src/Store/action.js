import axios from "axios";
import {
  ADD_INVENTORY,
  ADD_SALES,
  DELETE_INVENTORY,
  FAILED_OPERATION,
  FETCH_INVENTORY,
  FETCH_SALES,
  UPDATE_INVENTORY,
} from "../utils";

export const fetchInventoryData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment18.rittikdaas.repl.co/inventory"
    );
    const inventoryData = await response.data.allData;
    dispatch({ type: FETCH_INVENTORY, payload: inventoryData });
  } catch (error) {
    console.log("Error occurs while fetching inventory data");
    dispatch({ type: FAILED_OPERATION });
  }
};

export const fetchSalesData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://assignment18.rittikdaas.repl.co/sales"
    );
    const salesData = await response.data.allSales;
    dispatch({ type: FETCH_SALES, payload: salesData });
  } catch (error) {
    console.log("Error occurs while fetching sales data");
    dispatch({ type: FAILED_OPERATION });
  }
};

export const addInventoryData = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment18.rittikdaas.repl.co/inventory",
      data
    );
    const newData = await response.data.inventoryPost;
    dispatch({ type: ADD_INVENTORY, payload: newData });
  } catch (error) {
    console.log("Error occurs while add inventory data");
    dispatch({ type: FAILED_OPERATION });
  }
};

export const addSalesData = (data) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://assignment18.rittikdaas.repl.co/sales",
      data
    );
    const newData = await response.data.postSales;
    dispatch({ type: ADD_SALES, payload: newData });
  } catch (error) {
    console.log("Error occurs while add sales data");
    dispatch({ type: FAILED_OPERATION });
  }
};

export const deleteInventory = (inventoryID) => async (dispatch) => {
  try {
    const response = await axios.delete(
      `https://assignment18.rittikdaas.repl.co/inventory/${inventoryID}`
    );
    const deletedData = await response.data.deletedData;
    // console.log(deletedData);
    dispatch({ type: DELETE_INVENTORY, payload: deletedData });
  } catch (error) {
    console.log("Error occurs while delete inventory data");
    dispatch({ type: FAILED_OPERATION });
  }
};

export const updatedInevntory =
  (inventoryID, inventoryData) => async (dispatch) => {
    try {
      const response = await axios.post(
        `https://assignment18.rittikdaas.repl.co/inventory/${inventoryID}`,
        inventoryData
      );
      const updatedInevntoryData = await response.data.updatedData;
      console.log(updatedInevntoryData);
      dispatch({ type: UPDATE_INVENTORY, payload: updatedInevntoryData });
    } catch (error) {
      console.log("Error occurs while update inventory data");
      dispatch({ type: FAILED_OPERATION });
    }
  };
