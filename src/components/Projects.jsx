// import * from 'https://ibb.co/Dk5Qg0M'
const Projects = () => {
  return (
    <section className=" Projects-bg-Img" id="projects">
      <div className="container text-center section-container  ">
        <div className="section-header ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-card-image"
            viewBox="0 0 16 16"
          >
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z" />
          </svg>
          <h1 className="">نمونه کار</h1>
        </div>
        <div className="skills-main d-flex flex-column justify-content-center text-center align-items-center ">
          <div className="row row-12 position-relative text-center justify-content-center align-items-center skills-container gap-3   ">
            <div className="row row-cols-1 row-cols-md-4 justify-content-center g-4">
              <div className="col-7 col-md-6 col-lg-4">
                <div className="card h-100">
                  <a
                    href="https://github.com/SO-K-T/CharKhone-Messenger"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src="https://i.ibb.co/DVncwvL/image.png"
                      alt="image"
                      border="0"
                    />
                  </a>
                  <div className="card-body  ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-1  align-content-center">
                      <h5 className="">پیشرفته</h5>
                      <h5 className="mt-1">Local Host</h5>
                      <h4 className="card-title">CharKhone</h4>
                    </div>
                    <div className="position-relative">
                      {" "}
                      <p className="card-text " style={{ direction: "rtl" }}>
                        یک برنامه پیامرسان به همراه تماس تصوری و به اشتراک
                        گزاشتن تصویر با WebRTC , React , Redux
                      </p>
                      <a
                        href="https://github.com/SO-K-T/CharKhone-Messenger"
                        target="_blank"
                        rel="noreferrer"
                        className="Redirect-Btn text-white "
                      >
                        Github صفحه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-6 col-lg-4 mt-lg-4   ">
                <div className="card h-100  ">
                  <a
                    href="https://github.com/SO-K-T/ShopKhone-Ecommerce"
                    rel="noreferrer"
                    target="_blank"
                    className="bject-fit-cover"
                  >
                    <img
                      src="https://i.ibb.co/MnktV3M/Shop-Khone.png"
                      alt="image"
                      border="0"
                      className="mt-md-4 mt-lg-4 object-fit-cover "
                    />
                  </a>
                  <div className="card-body ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-3 mb-lg-4 align-content-center">
                      <h5 className="">متوسط</h5>
                      <h5 className="mt-1">Local Host</h5>
                      <h4 className="card-title">ShopKhone</h4>
                    </div>
                    <div className="position-relative">
                      {" "}
                      <p className="card-text " style={{ direction: "rtl" }}>
                        یک وب سایت تجارت الکترونیک B2C که به همراه React و Redux
                        و Boostrap پیاده سازی شده است.
                      </p>
                      <a
                        href="https://github.com/SO-K-T/ShopKhone-Ecommerce"
                        target="_blank"
                        rel="noreferrer"
                        className="Redirect-Btn text-white  "
                      >
                        Github صفحه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-7 col-md-6 col-lg-4 ">
                <div className="card h-100">
                  <a
                    href="https://github.com/SO-K-T/PersiaVPN"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      src="https://i.ibb.co/9NpDrss/image.png"
                      alt="image"
                      border="0"
                    />
                  </a>
                  <div className="card-body ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-1  align-content-center">
                      <h5 className="">مبتدی</h5>
                      <h5 className="mt-1">Local Host</h5>
                      <h4 className="card-title">PersiaVpn</h4>
                    </div>
                    <div className="position-relative">
                      {" "}
                      <p className="card-text " style={{ direction: "rtl" }}>
                        قالب یک وب سایت با استفاده از Bootstrap به همراه Sass
                        برای ایجاد تغییرات در کلاس های Bootstrap
                      </p>
                      <a
                        href="https://github.com/SO-K-T/PersiaVPN"
                        target="_blank"
                        rel="noreferrer"
                        className="Redirect-Btn text-white  "
                      >
                        Github صفحه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
