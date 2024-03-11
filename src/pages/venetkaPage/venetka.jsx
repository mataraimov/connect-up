import React, { useEffect, useState } from "react";
import styles from "./venetka.module.scss";

function VenetkaPage() {
  const [disSect2, setDisSect2] = useState("none");
  const [data, setData] = useState([]);
  const [detailData, setDetailData] = useState([]);

  const getStudents = async () => {
    try {
      const res = await fetch(
        "https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/lol"
      );
      if (!res.ok) {
        throw new Error("Ошибка при загрузке данных");
      }
      const response = await res.json();
      setData(response);
      console.log(response);
    } catch (error) {
      console.error("Ошибка:", error.message);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  const getDetail = async (id) => {
    try {
      const res = await fetch(
        "https://65c22d98f7e6ea59682accb7.mockapi.io/api/01/lol/" + id
      );
      if (!res.ok) {
        throw new Error("Ошибка при загрузке данных о деталях");
      }
      const response = await res.json();
      setDetailData(response);
      console.log(response);
    } catch (error) {
      console.error("Ошибка с деталями:", error.message);
    }
  };
  const handleItemClick = (id) => {
    setDisSect2("block");
    getDetail(id);
  };
  return (
    <main>
      <section className={styles.section1}>
        <h1>Группа номер 10</h1>
        <div className={styles.students_block}>
          {data.map((el, i) => {
            return (
              <div key={i} onClick={() => handleItemClick(el.id)}>
                <img src={el.image} alt="" />
                <blockquote>
                  <h2>{el.name}</h2>
                  <p>{el.quote}</p>
                </blockquote>
              </div>
            );
          })}
        </div>
      </section>
      <section className={styles.section2} style={{ display: disSect2 }}>
        <div>
          <blockquote>
            <img src={detailData.image} alt="" />
          </blockquote>
          <blockquote>
            <h1>Студент №{detailData.id}</h1>
            <h2>Имя: {detailData.name}</h2>
            <h2>Фамилия: {detailData.last_name}</h2>
            <h2>Работа: {detailData.employed ? "имеется" : "отсутствует"}</h2>
            <h2>Ссылка на LinkedIn: </h2>
            <h2><a href={detailData.linkedIn}>{detailData.linkedIn}</a></h2>
          </blockquote>
        </div>
      </section>
    </main>
  );
}

export default VenetkaPage;
