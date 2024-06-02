import axios from "axios";
import { useEffect, useState } from "react";

const Skill = () => {
  const [data, setData] = useState([]);

  const getData = async (url) => {
    const response = await axios(url);

    setData(response?.data);
  };

  useEffect(() => {
    getData(
      "https://api.mockfly.dev/mocks/3d9d738f-51c5-48bc-925a-2824ab9f1c45/skills-data"
    );
  }, []);

  return (
    <section className="skills-bg" id="skills">
      <div className="container text-center  ">
        <div className="section-header ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="#fff"
            className="bi bi-laptop"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5" />
          </svg>
          <h1 className="">مهارت</h1>
        </div>
        <div className="skills-main d-flex flex-column justify-content-center text-center align-items-center ">
          <h2 className="mb-5 skills-header">Programming / برنامه نویسی </h2>
          <div className="row row-12 position-relative text-center justify-content-center align-items-center skills-container gap-4   ">
            {console.log(data)}
            {data &&
              data?.map((e) => (
                <>
                  {e.catagory === "Programming" ? (
                    <div className="skills-card col-2 " key={e.id}>
                      <div
                        className="dot"
                        style={{
                          "--color": `${e.color}`,
                          "--value": `${e.percent}`,
                        }}
                      ></div>
                      <div
                        className="percent"
                        style={{
                          "--color": `${e.color}`,
                          "--value": `${e.percent}`,
                        }}
                      >
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="69" cy="69" r="69"></circle>
                        </svg>
                        <div className="skills-details">
                          <h3 className="num">
                            {e.percent} <span>%</span>
                          </h3>
                          <p className="txt">{e.name}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
          </div>
          <h2 className="mt-5 skills-header">Language / زبان </h2>
          <div className="row row-12 position-relative text-center justify-content-center align-items-center skills-container gap-4 mt-5   ">
            {data &&
              data?.map((e) => (
                <>
                  {e.catagory === "Langauge" ? (
                    <div className="skills-card col-2 " key={e.id}>
                      <div
                        className="dot"
                        style={{
                          "--color": `${e.color}`,
                          "--value": `${e.percent}`,
                        }}
                      ></div>
                      <div
                        className="percent"
                        style={{
                          "--color": `${e.color}`,
                          "--value": `${e.percent}`,
                        }}
                      >
                        <svg>
                          <circle cx="70" cy="70" r="70"></circle>
                          <circle cx="69" cy="69" r="69"></circle>
                        </svg>
                        <div className="skills-details">
                          <h3 className="num">
                            {e.percent} <span>%</span>
                          </h3>
                          <p className="txt">{e.name}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
