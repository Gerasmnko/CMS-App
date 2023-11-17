import React from "react";
import { NavLink } from "react-router-dom";
import tabs from "../../../tabs.json";
import "./style.scss";

const TabSwitcher = () => {
  return (
    <div className="tabsSwitcher">
      {tabs
        .sort((a, b) => {
          if (a.order > b.order) {
            return 1;
          }
          if (a.order < b.order) {
            return -1;
          }
          return 0;
        })
        .map((tab) => {
          return (
            <NavLink to={`${tab.id}`} key={`${tab.id}`}>
              {({ isActive }) => (
                <span className={isActive ? "navLink-active" : "navLink"}>
                  {tab.title}
                </span>
              )}
            </NavLink>
          );
        })}
    </div>
  );
};

export default TabSwitcher;
