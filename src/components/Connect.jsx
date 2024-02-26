import { useState, useRef } from "react";
import connectImg from "../assets/Img/connect3.png";
import emailjs from "@emailjs/browser";
const Connect = () => {
  const form = useRef();
  const notifcationLocation = useRef();

  const [notification, setNotification] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gcnzsk", "template_zpfb80j", form.current, {
        publicKey: "Lg5HfenxbMTxtruns",
      })
      .then(
        () => {
          setNotification(
            <div
              className="alert alert-success alert-dismissible fade show notification "
              role="alert"
            >
              پیام شما با موفقیت ارسال شد!
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
          );
        },
        (error) => {
          console.log(error);
          setNotification(
            <div
              className="alert alert-danger alert-dismissible fade show notification"
              role="alert"
            >
              مشکلی در ارسال پیام به وجود آمده. لطفا از راه های ارتباطی دیگر
              استفاده کنید!
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true"></span>
              </button>
            </div>
          );
        }
      );
    notifcationLocation.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="connect-container" id="connect">
      <div className="cotainer text-center text-white">
        <div className="section-header ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="bi bi-people"
            viewBox="0 0 16 16"
          >
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
          </svg>
          <h1>ارتباط</h1>
        </div>
        <div className="row align-items-center text-center ">
          <div className=" col-lg-6 ">
            <img className="fluid-img" src={connectImg}></img>
          </div>
          <div className=" col-10 col-lg-5">
            <form onSubmit={submitHandler} ref={form}>
              <div className="row flex-row-reverse">
                <div className="col col-5 px-1  ">
                  <input
                    className="connect-input"
                    dir="rtl"
                    type="text"
                    name="user_name"
                    placeholder="نام"
                  />
                </div>
                <div className="col col-5 px-1 ">
                  <input
                    className="connect-input"
                    dir="rtl"
                    type="email"
                    name="user_email"
                    placeholder="پست الکترونیکی"
                  />
                </div>
                <div className=" col-10 px-1 ">
                  <textarea
                    className="connect-input"
                    dir="rtl"
                    rows={8}
                    name="message"
                    placeholder="پیام شما ..."
                  ></textarea>
                </div>
                <input
                  className="formSubmitter col-10 px-1 "
                  type="submit"
                  value="ارسال"
                ></input>
              </div>
            </form>
          </div>
          <div className="row-12 mt-sm-5" ref={notifcationLocation}>
            {notification}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
