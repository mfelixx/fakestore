import axios from "axios";
import { useCallback, useState } from "react";

export const useGetProductLimit = () => {
  const [loading, setLoading] = useState(false);
  const getProductLimit = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://fakestoreapi.com/products?limit=12"
      );
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, getProductLimit };
};

export const useGetAllProduct = () => {
  const [loading, setLoading] = useState(false);
  const getAllProduct = useCallback(async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  return { loading, getAllProduct };
};
