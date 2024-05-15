import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/context';
import styles from './header.module.scss';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { setAuthData } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout = async () => {
    try {
      localStorage.clear();
      setAuthData({
        isAuth: false,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <div className="darkheader">
        <div className="container" style={{ paddingBottom: '17px' }}>
          <div className="headerblockleft">
            <div className="logoaddblock">
              <Link to="/" className="mainlogo">
                <img
                  src="https://my.alatoo.edu.kg/images/logo_aiu.png"
                  style={{ maxWidth: '100%', maxHeight: '58px' }}
                  alt="American University of Central Asia - IAU - Alumni"
                />
              </Link>
            </div>
            <div className="logoblock">
              <a href="/">
                <img
                  src="https://media.licdn.com/dms/image/C4E03AQHibu7GEjIwLQ/profile-displayphoto-shrink_200_200/0/1663907068590?e=2147483647&v=beta&t=0HMXlE4a6cXVutTCpoBV8-spLVuwp31ErW8wJzGEfkw"
                  className="hidden-md hidden-sm hidden-xs"
                  style={{ maxWidth: '100%', maxHeight: '58px' }}
                  alt="American University of Central Asia - IAU - Alumni"
                />
                <img
                  src="../../templates/_sources/logomini.png"
                  className="visible-md visible-sm visible-xs"
                  style={{ maxHeight: '58px' }}
                  alt="American University of Central Asia - IAU - Alumni"
                />
              </a>
            </div>
          </div>
          <div className="headerblockright">
            <div className="headerbuttonsblock" style={{ marginTop: '17px' }}>
              <div>
                <a href="/directory_contacts/" className="headerlink">
                  University Directory
                </a>
                <a
                  href="/gethelp/"
                  className="headerlink ewinlink"
                  ewinoptions="width: '700px', height: '500px', type: 'ajax'"
                >
                  Get Help
                </a>
              </div>
            </div>

            <div
              className="headerbuttonsblock"
              style={{ marginTop: '12px', display: 'flex', justifyContent: 'space-between' }}
            >
              <form className="form" role="form" action="/search/" method="get">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search the site"
                    className="form-control inpsearch"
                    name="search"
                    defaultValue=""
                  />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary butsearch">
                      <span className="glyphicon glyphicon-search"></span>
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
