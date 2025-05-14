import axios from "axios";
import { setproducts, seterror, setLoading } from "../features/productSlicer";

// Function to fetch products
export const fetchProducts = () => async (dispatch) => {
  try {
    // Start loading
    dispatch(setLoading(true));
    
    // Fetch data from the API
    const response = await axios.get('https://api.escuelajs.co/api/v1/products');
    
    
    // Dispatch the products after successful fetch
    dispatch(setproducts(response.data));

  } catch (error) {
    // Handle error and dispatch error message
    dispatch(seterror(error.message));
  } finally {
    // Stop loading
    dispatch(setLoading(false));
  }
};
