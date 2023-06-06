import React from "react";
import "./controller-sidebar.css";
import loginPageLogo from "../../resources/images/logo-new.png";

export default function SideNavBar() {
  return (
    <div>
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <img id="sidebar-logo" src={loginPageLogo} alt="" />
          </div>

          <div id="menu">
            <ul class="list-unstyled components">
              <li class="active">
                <a href="#">
                  <span className="p-left">Company Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#pageSubmenu1"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle submenu"
                >
                  <span className="p-left">AI Management</span>
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu1">
                  <li>
                    <a href="#">Create AI Prompts</a>
                  </li>
                  <li>
                    <a href="#">Manage AI Prompts</a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="#pageSubmenu2"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle submenu"
                >
                  <span className="p-left">Account Details</span>
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu2">
                  <li>
                    <a href="#">Setting</a>
                  </li>
                  <li>
                    <a href="#">Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>

        <div id="content"></div>
      </div>
    </div>
  );
}
