import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrder = () => {
  const { token, user, isLoading } = useAuth();
  const [orders, setOrders] = useState([]);
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);

  useEffect(() => {
    if (!isLoading && token) {
      fetch(`http://localhost:5000/myOrder?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //data holds all orders of a user [array]
          console.log(data);
          let newArr = [];
          for (const iterator of data) {
            //iterator holds single order of a user [obj]
            //here we have one item per order but we can search multiple using below link
            const ids = [iterator.product];
            //console.log('ids ', ids);
            axios
              .post("http://localhost:5000/service/byId", ids)
              .then((res) => {
                iterator.items = res.data;
              });
            newArr.push(iterator);
          }
          setOrders(newArr);
          setIsLoadingOrder(false);
        });
    }
  }, [user.email, token, isLoading]);

  return { isLoadingOrder, orders, setOrders };
};
export default useOrder;
