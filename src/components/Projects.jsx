// import * from 'https://ibb.co/Dk5Qg0M'
import img1 from "../assets/Img/4Khone.png";
import img2 from "../assets/Img/vpn.png";
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
                      src={img1}
                      alt="image"
                      border="0"
                      className="img-size"
                    />
                  </a>
                  <div className="card-body  ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-1  align-content-center">
                      <h5 className="">پیشرفته</h5>
                      <h5 className="mt-1">Local Host</h5>
                      <h4 className="card-title">CharKhone</h4>
                    </div>
                    <div className="position-relative d-flex flex-column justify-content-between">
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
                    href="https://www.e3ketab.ir"
                    rel="noreferrer"
                    target="_blank"
                    className="bject-fit-cover"
                  >
                    <img
                      src="https://s32.picofile.com/file/8478181292/E3Ketab_Img.png"
                      alt="image"
                      border="0"
                      className="  img-size"
                    />
                  </a>
                  <div className="card-body  ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-1  align-content-center">
                      <h5 className="">پیشرفته</h5>
                      <h5 className="mt-1 ">Online</h5>
                      <h4 className="card-title">E3Ketab</h4>
                    </div>
                    <div className="position-relative   d-flex flex-column justify-content-between">
                      {" "}
                      <p className="card-text " style={{ direction: "rtl" }}>
                        این پروژه با استفاده از RTK ,Toolkit-Redux ,Tailwind
                        ,React و Formik به همراه YUP پیاده سازی شده است. از
                        مهمترین قابلیت های این وب سایت می توان به سیستم جستجوی
                        پیشرفته، لیست دانلود و عالقمندی های حساب کازبری اشاره
                        کرد.
                      </p>
                      <a
                        href="https://www.e3ketab.ir"
                        target="_blank"
                        rel="noreferrer"
                        className="Redirect-Btn text-white  "
                      >
                        صفحه وب سایت
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
                      src={img2}
                      alt="image"
                      border="0"
                      className="img-size"
                    />
                  </a>
                  <div className="card-body ">
                    <div className="d-flex justify-content-between mx-4 py-2 mb-1  align-content-center">
                      <h5 className="">مبتدی</h5>
                      <h5 className="mt-1">Local Host</h5>
                      <h4 className="card-title">PersiaVpn</h4>
                    </div>
                    <div className="position-relative d-flex flex-column justify-content-between">
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
