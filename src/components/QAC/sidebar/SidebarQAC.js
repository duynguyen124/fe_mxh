import style from "../../QAM/sidebar/SidebarQA.module.css";
import { Link } from "react-router-dom";

import {
  ACCESS_TOKEN,
  ACCOUNT_ID,
  ROLE,
  PROFILE_INFORMATION,
} from "../../../constants/constants";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function SidebarQAC() {
  const navigate = useNavigate();
  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(ACCOUNT_ID);
    localStorage.removeItem(ROLE);
    localStorage.removeItem(PROFILE_INFORMATION);
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className={style.qacLeft}>
        <div className={style.Leftcontainer}>
          <div className={style.nameqac}>
            <img
              src="https://cdn-icons-png.flaticon.com/128/3234/3234972.png"
              className={style.qacimg}
              alt="logo QAC"
            />
            <label className={style.qacName}>
              Quality Assurance Coordinator
            </label>
          </div>
          <hr className={style.line} />

          <div className={style.lcategore}>
          <i class="fa fa-home" aria-hidden="true"></i>
            <label className={style.dbName}>
              <Link to="/qualityAssuranceCoordinator">
                <span className={style.linkCategory}>View</span>
              </Link>
            </label>
          </div>
          <div className={style.lcategore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-fire"
              viewBox="0 0 16 16"
            >
              <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
            </svg>
            <label className={style.dbName}>
              <Link to="/topTrending">
                <span className={style.linkCategory}>Top Trending</span>
              </Link>
            </label>
          </div>
          <h1 className={style.accountPages}>ACCOUNT PAGES</h1>
          <div className={style.lcategore}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <label className={style.dbName}>
              <Link to="/profileQAC">
                <span className={style.linkCategory}>Profile</span>
              </Link>
            </label>
          </div>

          <div className={style.lcategore}>
            <i className="fa fa-sign-out" aria-hidden="true"></i>
            <label className={style.dbName} onClick={logout}>
              Logout
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
export default SidebarQAC;
