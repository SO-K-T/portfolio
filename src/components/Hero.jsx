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
            {" "}
            سلام من سهراب هستم، یک برنامه نویس فرانت اند جونیور
          </p>
          <p className="h5 Description-text  lh-base ">
            {" "}
            در دوران تحصیل به دلیل علاقه بسیار به زمینه طراحی وب سایت، دوره های
            بین المللی بسیاری دیده ام و تجربیات متفاوتی کسب کردم. همچنین پروژه
            های متعددی در ابعاد مختلف و در زمینه هایی چون پیام رسان و تجارت
            الکترونیک پیاده سازی کرده ام.
            <br />
            <br /> آماده به همکاری در شهر تهران.{" "}
          </p>
          <a
            href="https://drive.google.com/file/d/1AzxCdSJR_WHub0o_BlUqngriusWWUQgY/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="Download-Btn text-white "
          >
            {" "}
            دانلود رزومه
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;