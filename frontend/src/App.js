import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import dataContext from "./context/context";
import ROUTES from "./routes/routes";
import "./app.scss"
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

function App() {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [wish, setWish] = useState(localStorage.getItem('getWish') ? JSON.parse(localStorage.getItem('getWish')) : [])


  const router = createBrowserRouter(ROUTES)
  useEffect(() => {
    axios.get("http://localhost:8080/Murad").then(res => {
      setData(res.data)
      setSearchData(res.data)
    })
  }, [])

  const handleSearch = (e) => {
    const searching = e.target.value.trim().toLowerCase()
    if (searching == '') {
      setSearchData([...data])
    } else {
      const search = data.filter(item => item.name.trim().toLowerCase().includes(searching))
      setSearchData([...search])
    }
  }

  const addToWishlist = (item) => {
    const target = wish.find(prod => prod.id == item._id)
    if (target) {
      alert('item wishlistde var')
    } else {
      setWish([...wish, item])
      localStorage.setItem('getwish', JSON.stringify([...wish, item]))
    }
  }

  const deleteFromWishlist = (item) => {
    const target = wish.find(prod => prod.id == item._id)
    const indexOf = wish.indexOf(target)
    wish.splice(indexOf, 1)
    setWish([...wish])
    localStorage.setItem('getWish', JSON.stringify([...wish]))
  }
  const values = { data, setData, addToWishlist, handleSearch }
  return (
    <div className="App">
      <dataContext.Provider value={values}>
        <RouterProvider router={router} />
      </dataContext.Provider>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Fashe</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
      </div>
    </div>
  );
}

export default App;