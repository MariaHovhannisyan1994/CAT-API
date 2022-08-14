import React from "react";
import classes from "./Sidebar.module.scss";
import {Link} from "react-router-dom";

const Index = ({ categoriesMenu }) => {
    return (
    <div>
      <div className={classes.sidebar}>
        {categoriesMenu.map((menuItem) => (
          <Link
            to={`/${menuItem.id}`}
            key={menuItem.id}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Index;
