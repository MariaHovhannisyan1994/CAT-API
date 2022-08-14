import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./App.module.scss";
import { fetchCategories } from "./store/services/categories";
const Gallery = React.lazy(() => import('./Pages/Gallery'));
const SideBar = React.lazy(() => import('./components/SideBar'));



function App() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
          <div className={classes.App}>
            <SideBar categoriesMenu={categories} />
            <Gallery/>
          </div>
  );
}

export default App;


