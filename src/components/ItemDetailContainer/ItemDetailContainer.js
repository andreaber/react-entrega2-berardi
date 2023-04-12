import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    // 1- armo la ref (sync)
    const docRef = doc(db, "productos", itemId)

    // 2- llamo a la ref (asyn)
    getDoc(docRef)
      .then((doc) => {
        setItem({
          id: doc.id,
          ...doc.data()
        })
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="container my-5">
      {loading ? <Loader /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
