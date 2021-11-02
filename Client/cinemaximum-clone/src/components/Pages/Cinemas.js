import React from "react";

const Cinemas = () => {
  return (
    <div className="page-container">
      <div className="theatre-page theatre-page-list">
        <div
          className="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url('https://www.cinemaximum.com.tr/Assets/Cgv/assets/images/theatre/list_bg.jpg')",
            height: 150,
          }}
        >
          <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="display-6">Sinemalar</h1>
                <div style={{ width: "1100px" }}>
                  <input
                    type="text"
                    placeholder="Gitmek istediğin sinemayı yaz"
                    style={{
                      width: "100%",
                      color: "#000",
                      padding: "10px 20px",
                    }}
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cinemas;
