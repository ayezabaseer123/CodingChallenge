import profile from "../images/profile1.png";
import profile2 from "../images/profile2.png";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 7 }}></div>
          <div style={{ flex: 1 }}>
            <button className="addProperty-button">+Add Property</button>
          </div>
          <div className="profile">
            <div>
              <img src={profile} alt="profile" />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <img width="30px" height="30px" src={profile2} alt="profile" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
