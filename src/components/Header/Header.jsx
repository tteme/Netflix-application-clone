
import "./header.css"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import netflixLogo from "../../assets/images/netflixlogo.jpg";
const Header = () => {
  return (
    <>
      <section className="outer_header">
        <section className="header_container">
          <section className="header_left">
            <ul>
              <li>
                <img
                  src={netflixLogo}
                  alt="netflix logo"
                  className=""
                  width="100"
                />
              </li>
              <li>Home</li>
              <li>TVShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browes my Language</li>
            </ul>
          </section>
          <section className="header_right">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

export default Header