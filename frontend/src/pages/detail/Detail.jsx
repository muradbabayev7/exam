import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./detail.scss"

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/Murad/${id}`).then((res) => {
      setDetail(res.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {detail ? (
          <div className="detailCard col-3">
            <div className="detailDiv__img">
              <img src={detail.image} alt="" />
            </div>
            <div className="card__content">
              <p>{detail.title}</p>
              <p>${detail.price}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Detail;
