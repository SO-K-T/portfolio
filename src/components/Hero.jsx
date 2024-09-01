import "../global.css";

const Hero = () => {
  return (
    <section className="Hero-bg-Img" id="home">
      <div className="container d-flex flex-column  flex-lg-row   ">
        <div className="col col-12 col-lg-6 col-md-12 Personal-Img"></div>
        <div className="col col-12 col-lg-6 col-md-12 my-4  text-end Hero-Description position-relative">
          <span className="Main-Btn mb-6 mt-2">
            به وب سایت شخصی من خوش آمدید
          </span>
          <p className=" h1 hero-Description-header ">
            سلام من سهراب هستم، یک برنامه نویس فرانت اند
          </p>
          <p className="h5 Description-text  lh-base ">
            توسعه دهنده وب با بیش از ۲ سال سابقه در زمینه برنامه نویسی تخصصی با
            استفاده از تکنولوژي های React و Tailwind,Redux-Toolkit ,Next .
            آشنایی کامل به فرایند های متعددی از جمله رسپانسیو سازی و عیب یابی
            پروژ
            <br />
            <br /> آماده به همکاری در شهر تهران.
          </p>
          <a
            href="https://drive.google.com/file/d/1XLryWIj2EcK9Qd3usEiGz81oldC-hKlL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="Download-Btn text-white px-5 "
          >
            دانلود رزومه
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
