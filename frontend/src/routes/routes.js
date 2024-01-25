import Wishlist from "../pages/Wishlist";

const { default: Add } = require("../pages/Add/Add");
const { default: Basket } = require("../pages/Basket");
const { default: Detail } = require("../pages/detail/Detail");
const { default: Home } = require("../pages/Home/Home");
const { default: SiteRoot } = require("../pages/SiteRoot");

const ROUTES = [{
    path: '/',
    element: <SiteRoot/>,
    children: [{
        path: '',
        element: <Home/>
    },{
        path: 'add',
        element: <Add/>
    },{
        path: 'basket',
        element: <Basket/>
    },{
        path: ':id',
        element: <Detail/>
    },{
        path: 'wishlist',
        element: <Wishlist/>
    }]
}]

export default ROUTES