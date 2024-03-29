import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.scss";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./home.scss";
import dataContext from "../../context/context";
import { Link } from "react-router-dom";

const Home = () => {
  const { data, setData, addToWishlist } = useContext(dataContext);
  return (
    <div>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/master-slide-02.jpg.webp"
              alt=""
            />
            <div className="swiper__div">
              <p>Women Collection 2018</p>
              <h1>NEW ARRIVALS</h1>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/master-slide-03.jpg"
              alt=""
            />
            <div className="swiper__div">
              <p>Women Collection 2018</p>
              <h1>NEW ARRIVALS</h1>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://preview.colorlib.com/theme/fashe/images/master-slide-04.jpg"
              alt=""
            />
            <div className="swiper__div">
              <p>Women Collection 2018</p>
              <h1>NEW ARRIVALS</h1>
              <button>SHOP NOW</button>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="featured__products">
        <h1>FEATURED PRODUCTS</h1>
        <div className="container">
          <div className="row">
            {data.map((item, index) => {
              return (
                <div className="card col-3" key={index}>
                  <Link to={`/${item._id}`}>
                  <div>
                  <div className="div__img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="card__content">
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                  </div></Link>
                  <button className="btn btn-primary"
                  onClick={()=>{
                    addToWishlist()
                  }}>Add to wishlist</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section1">
        <section class="banner2 bg5 p-t-55 p-b-55 snipcss0-0-0-1 snipcss-pFaY2">
          <div class="container snipcss0-1-1-2">
            <div class="row snipcss0-2-2-3">
              <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15 snipcss0-3-3-4">
                <div class="hov-img-zoom pos-relative snipcss0-4-4-5">
                  <img
                    src="https://preview.colorlib.com/theme/fashe/images/banner-08.jpg"
                    alt="IMG-BANNER"
                    class="snipcss0-5-5-6"
                  />
                  <div class="ab-t-l sizefull flex-col-c-m p-l-15 p-r-15 snipcss0-5-5-7">
                    <span class="m-text9 p-t-45 fs-20-sm snipcss0-6-7-8">
                      The Beauty
                    </span>
                    <h3 class="l-text1 fs-35-sm snipcss0-6-7-9">Lookbook</h3>
                    <a href="#" class="s-text4 hov2 p-t-20 snipcss0-6-7-10">
                      View Collection
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-10 col-md-8 col-lg-6 m-l-r-auto p-t-15 p-b-15 snipcss0-3-3-11">
                <div class="bgwhite hov-img-zoom pos-relative p-b-20per-ssm snipcss0-4-11-12">
                  <img
                    src="https://preview.colorlib.com/theme/fashe/images/shop-item-09.jpg"
                    alt="IMG-BANNER"
                    class="snipcss0-5-12-13"
                  />
                  <div class="ab-t-l sizefull flex-col-c-b p-l-15 p-r-15 p-b-20 snipcss0-5-12-14">
                    <div class="t-center snipcss0-6-14-15">
                      <a
                        href="product-detail.html"
                        class="dis-block s-text3 p-b-5 snipcss0-7-15-16"
                      >
                        Gafas sol Hawkers one
                      </a>
                      <span class="block2-oldprice m-text7 p-r-5 snipcss0-7-15-17">
                        $29.50
                      </span>
                      <span class="block2-newprice m-text8 snipcss0-7-15-18">
                        $15.90
                      </span>
                    </div>
                    <div class="flex-c-m p-t-44 p-t-30-xl snipcss0-6-14-19">
                      <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5 snipcss0-7-19-20">
                        <span class="m-text10 p-b-1 days snipcss0-8-20-21">
                          69
                        </span>
                        <span class="s-text5 snipcss0-8-20-22">days</span>
                      </div>
                      <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5 snipcss0-7-19-23">
                        <span class="m-text10 p-b-1 hours snipcss0-8-23-24">
                          12
                        </span>
                        <span class="s-text5 snipcss0-8-23-25">hrs</span>
                      </div>
                      <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5 snipcss0-7-19-26">
                        <span class="m-text10 p-b-1 minutes snipcss0-8-26-27">
                          53
                        </span>
                        <span class="s-text5 snipcss0-8-26-28">mins</span>
                      </div>
                      <div class="flex-col-c-m size3 bo1 m-l-5 m-r-5 snipcss0-7-19-29">
                        <span class="m-text10 p-b-1 seconds snipcss0-8-29-30">
                          57
                        </span>
                        <span class="s-text5 snipcss0-8-29-31">secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="section2">
        <section class="blog bgwhite p-t-94 p-b-65 snipcss-4qGsP">
          <div class="container">
            <div class="sec-title p-b-52">
              <h3 class="m-text5 t-center">Our Blog</h3>
            </div>
            <div class="row">
              <div class="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                <div class="block3">
                  <a
                    href="blog-detail.html"
                    class="block3-img dis-block hov-img-zoom"
                  >
                    <img
                      src="https://preview.colorlib.com/theme/fashe/images/blog-01.jpg"
                      alt="IMG-BLOG"
                    />
                  </a>
                  <div class="block3-txt p-t-14">
                    <h4 class="p-b-7">
                      <a href="blog-detail.html" class="m-text11">
                        Black Friday Guide: Best Sales &amp; Discount Codes
                      </a>
                    </h4>
                    <span class="s-text6">By</span>
                    <span class="s-text7">Nancy Ward</span>
                    <span class="s-text6">on</span>
                    <span class="s-text7">July 22, 2017</span>
                    <p class="s-text8 p-t-16">
                      Duis ut velit gravida nibh bibendum commodo. Sus-pendisse
                      pellentesque mattis augue id euismod. Inter-dum et
                      malesuada fames
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                <div class="block3">
                  <a
                    href="blog-detail.html"
                    class="block3-img dis-block hov-img-zoom"
                  >
                    <img
                      src="https://preview.colorlib.com/theme/fashe/images/blog-02.jpg"
                      alt="IMG-BLOG"
                    />
                  </a>
                  <div class="block3-txt p-t-14">
                    <h4 class="p-b-7">
                      <a href="blog-detail.html" class="m-text11">
                        The White Sneakers Nearly Every Fashion Girls Own
                      </a>
                    </h4>
                    <span class="s-text6">By</span>
                    <span class="s-text7">Nancy Ward</span>
                    <span class="s-text6">on</span>
                    <span class="s-text7">July 18, 2017</span>
                    <p class="s-text8 p-t-16">
                      Nullam scelerisque, lacus sed consequat laoreet, dui enim
                      iaculis leo, eu viverra ex nulla in tellus. Nullam nec
                      ornare tellus, ac fringilla lacus. Ut sit ame
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-10 col-md-4 p-b-30 m-l-r-auto">
                <div class="block3">
                  <a
                    href="blog-detail.html"
                    class="block3-img dis-block hov-img-zoom"
                  >
                    <img
                      src="https://preview.colorlib.com/theme/fashe/images/blog-03.jpg"
                      alt="IMG-BLOG"
                    />
                  </a>
                  <div class="block3-txt p-t-14">
                    <h4 class="p-b-7">
                      <a href="blog-detail.html" class="m-text11">
                        New York SS 2018 Street Style: Annina Mislin
                      </a>
                    </h4>
                    <span class="s-text6">By</span>
                    <span class="s-text7">Nancy Ward</span>
                    <span class="s-text6">on</span>
                    <span class="s-text7">July 2, 2017</span>
                    <p class="s-text8 p-t-16">
                      Proin nec vehicula lorem, a efficitur ex. Nam vehicula
                      nulla vel erat tincidunt, sed hendrerit ligula porttitor.
                      Fusce sit amet maximus nunc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
