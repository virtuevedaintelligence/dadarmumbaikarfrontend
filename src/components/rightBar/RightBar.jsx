import "./rightBar.scss";
import DP from "../../assets/display-picture.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Best Restaurants in Dadar</span>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />
              <span>Visawa Hotel</span>
            </div>
            <div className="buttons">
              <button>FB</button>
              <button>IG</button>
              <button>TW</button>
              <button>YT</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />
              <span>Sujata Hotel</span>
            </div>
            <div className="buttons">
              <button>FB</button>
              <button>IG</button>
              <button>TW</button>
              <button>YT</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Best Cafe in Dadar</span>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <p>
                <span>Fullyloaded</span> Was added just now
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <p>
                <span>Mumbai Bistro</span> Was added just now
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <p>
                <span>Roadside Pickup</span> Was added just now
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <p>
                <span>Advertsment 3</span> Was added just now
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Best Authentic Food in Dadar</span>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashok Vada Pav.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ramashrya Hotel.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={DP} alt="" />

              <div className="online" />
              <span>Ashutosh K.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBar;
