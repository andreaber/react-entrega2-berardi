import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1- armar una referencia (sync)
    const productosRef = collection(db, "productos")
    const q = categoryId
                ? query(productosRef, where("category", "==", categoryId))
                : productosRef

    // 2- llamar a esa referencia (asyn)
    getDocs(q)
      .then((res) => {
        setProductos(res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        } ))
      })
      .finally(() => setLoading(false))
    
  }, [categoryId]);

  return (
    <div className="container my-5">
      {loading ? <Loader /> : <ItemList items={productos} />}
    </div>
  );
}

export default ItemListContainer;
