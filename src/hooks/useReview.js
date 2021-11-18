import { useEffect, useState } from "react";

const useReview = () => {
  const [review, setReview] = useState([]);
  const [isLoadingReview, setIsLoadingReview] = useState(true);
  //''
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((resp) => resp.json())
      .then((data) => {
        setReview(data);
        //console.log(data);
        setIsLoadingReview(false);
      });
  }, []);

  return { review, isLoadingReview, setReview };
};
export default useReview;
