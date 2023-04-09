import styles from "../components/Card.module.scss";
import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";

const Card = () => {
  const [objects, setObjects] = useState([]);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://64326fb1d0127730d2d258cb.mockapi.io/object"
      );
      setObjects(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.ff}>
        <h1>Только до 19.04!</h1>
        <button>Успей купить</button>
      </div>{" "}
      <ClipLoader
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {objects.map((object) => (
        <div className={styles.h}>
          <div className={styles.cart__wrapper}>
            <div className={styles.cart__top}>
              <img width={100} src={object.avatar} alt="Cart Item" />
            </div>
            <div className={styles.cart__bottom}>
              <div className={styles.cart__add}>
                <p>{object.price}</p>
                <del>{object.fakeprice}</del>
              </div>
              <h3 className={styles.cart__title}>{object.name}</h3>
              <p className={styles.cart__price}>В корзину</p>

              <div className={styles.cart__foot}>
                <p>{object.footername2}</p>
                <span>{object.footername1}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
