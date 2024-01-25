import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useContext } from "react";
import dataContext from "../../context/context";
import "./add.scss"

const Add = () => {
  const { data, setData, handleSearch } = useContext(dataContext);
  const formik = useFormik({
    initialValues: {
      image: "",
      title: "",
      price: "",
    },
    validationSchema: Yup.object({
      image: Yup.string().required("Required"),
      title: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      axios.post("http://localhost:8080/Murad", values).then((res) => {
        setData([...data, res.data]);
      });
      resetForm();
    },
  });
  return (
    <div className="form p-5">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="image">Image</label>
        <input id="image" type="text" {...formik.getFieldProps("image")} />
        {formik.touched.image && formik.errors.image ? (
          <div>{formik.errors.image}</div>
        ) : null}

        <label htmlFor="title">Title</label>
        <input id="title" type="text" {...formik.getFieldProps("title")} />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="price">Price</label>
        <input id="price" type="price" {...formik.getFieldProps("price")} />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
      <input type="text" style={{padding: '10px'}} placeholder="Search..." onChange={()=>{
        handleSearch()
      }}/>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    style={{ width: "70px", height: "100px" }}
                    alt=""
                  />
                </td>
                <td>{item.title}</td>
                <td>${item.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>{

                  }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Add;
