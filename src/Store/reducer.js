import {
  ADD_INVENTORY,
  ADD_SALES,
  DELETE_INVENTORY,
  FAILED_OPERATION,
  FETCH_INVENTORY,
  FETCH_SALES,
  UPDATE_INVENTORY,
} from "../utils";

const initialState = {
  inventoryData: [],
  salesData: [],
  error: "",
};
const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY: {
      return { ...state, inventoryData: action.payload };
    }
    case FETCH_SALES: {
      return { ...state, salesData: action.payload };
    }
    case ADD_INVENTORY: {
      return {
        ...state,
        inventoryData: [...state.inventoryData, action.payload],
      };
    }
    case ADD_SALES: {
      return { ...state, salesData: [...state.salesData, action.payload] };
    }
    case DELETE_INVENTORY: {
      const updatedInevntory = state.inventoryData.filter(
        (data) => data._id !== action.payload._id
      );
      return { ...state, inventoryData: updatedInevntory };
    }
    case UPDATE_INVENTORY: {
      const updatedInevntory = state.inventoryData.map((data) =>
        data._id === action.payload._id ? action.payload : data
      );
      return { ...state, inventoryData: updatedInevntory };
    }
    case FAILED_OPERATION: {
      return { ...state, error: "Error occurs while doing operation" };
    }
    default:
      return state;
  }
};

export default inventoryReducer;
