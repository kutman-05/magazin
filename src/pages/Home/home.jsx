import React, { useRef, useState } from "react";
import "./home.css";
import { IoSearchSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

const Home = () => {
  function sc() {
    window.scrollTo(0, 2000);
  }
  return (
    <div id="header">
      <div
        style={{
          background:
            "url(https://pracedo.s3.eu-west-2.amazonaws.com/wp-content/uploads/2023/11/20095811/1200-x-900-Featured-Blog-Post-Image.png)no-repeat center/cover",
          height: "35pc",
        }}
        className="header"
      >
        <div className="bg"></div>

        <div className="container">
          <div className="home1">
            <NavLink>Все категории</NavLink>
            <NavLink>Подборки рекомендуемых товаров </NavLink>
            <NavLink>Trade Assurance</NavLink>
            <NavLink to={"alai"}>Членство Alai.com</NavLink>
            <NavLink>Центр покупателей</NavLink>
            <NavLink>Справочный центр</NavLink>
            <NavLink>Скачать приложение</NavLink>
            <NavLink>Стать поставщиком</NavLink>
          </div>
          <div className="home">
            <h2>У нас есть весь товар</h2>
            <input type="text" placeholder="search..." />
            <button>
              <IoSearchSharp />
              Поиск
            </button>
          </div>
        </div>
      </div>
      <section
        style={{
          backgroundColor: "mediumblue",
          height: "38pc",
        }}
      >
        <div className="section1">
          <div onClick={() => sc()} className="block">
            <img
              src="//s.alicdn.com/@img/imgextra/i3/O1CN01IqRqQr1UYmu3AOqmF_!!6000000002530-2-tps-96-96.png"
              alt=""
            />
            <h2>
              Миллионы бизнес- <br />
              предложений
            </h2>
            <p>
              Выбирайте нужных <br />
              поставщиков и товары для
              <br /> своего бизнеса из миллионов <br /> предложений со всего
              мира.
            </p>
          </div>
          <div className="block1">
            <img
              src="https://s.alicdn.com/@img/imgextra/i1/O1CN01yTM8EE1GOLFPjalEn_!!6000000000612-2-tps-96-96.png"
              alt=""
            />
            <h2>
              Гарантированное <br />
              качество и <br /> надежность <br />
              транзакций
            </h2>
            <p>
              Для уверенности в качестве <br />
              товара заказывайте у <br /> проверенных поставщиков с <br />{" "}
              защитой своих заказов от <br /> оплаты до доставки.
            </p>
          </div>
          <div className="block2">
            <img
              src="https://s.alicdn.com/@img/imgextra/i3/O1CN01TFyXvb261lkMrez96_!!6000000007602-2-tps-96-96.png"
              alt=""
            />
            <h2>
              Комплексное <br />
              торговое решение
            </h2>
            <p>
              Заказывайте без проблем: от <br />
              поиска товара/поставщика <br /> до управления заказами, <br />{" "}
              оплаты и контроля <br />
              выполнения.
            </p>
          </div>
          <div className="block3">
            <img
              src="https://s.alicdn.com/@img/imgextra/i4/O1CN01xIFSCp1DYT9tsnHfj_!!6000000000228-2-tps-96-96.png"
              alt=""
            />
            <h2>
              Торговля с учетом <br />
              индивидуальных <br />
              особенностей
            </h2>
            <p>
              Получите такие особые <br />
              преимущества, как <br />
              эксклюзивные скидки,
              <br /> расширенная защита и <br />
              дополнительная поддержка. <br /> Это поможет вам развивать <br />
              свой бизнес на каждом этапе <br /> сотрудничества.
            </p>
          </div>
        </div>
        <div className="section2">
          <div className="page">
            <h1>
              Ознакомьтесь с миллионами <br />
              предложений, способных <br />
              удовлетворить индивидуальные...
            </h1>
            <div className="left1">
              <span className="divNow">
                <div className="borderr"></div>
                <div className="">
                  <h2>
                    Более 200 <br />
                    млн
                  </h2>
                  <p>товары</p>
                </div>
              </span>
              <span className="divnow">
                <div
                  style={{
                    marginTop: "1.2pc",
                  }}
                  className="borderr"
                ></div>
                <div className="">
                  <h3>5900</h3>
                  <p>категории товаров</p>
                </div>
              </span>
              <div className="left2">
                <span className="divnow1">
                  <div className="borderr"></div>

                  <div className="">
                    <h4>
                      Более 200 <br />
                      000
                    </h4>
                    <p>поставщики</p>
                  </div>
                </span>
                <span className="divnow2">
                  <div
                    style={{
                      marginTop: "2pc",
                    }}
                    className="borderr"
                  ></div>

                  <div className="">
                    <h5>200+</h5>
                    <p>страны и регионы</p>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section3">
          <div className="category">
            <NavLink to={"dress"}>
              <div className="part1">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Si2Chv1URSNSZI3w2_!!6000000002514-2-tps-200-200.png"
                  alt=""
                />
                <p>Одежда</p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part2">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i1/O1CN012sGbIl1o81tW54KPo_!!6000000005179-2-tps-200-200.png"
                  alt=""
                />
                <p>
                  Часы, <br /> ювелирные...
                </p>
              </div>
            </NavLink>
            <NavLink to={"sport"}>
              <div className="part3">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2738/2738884.png"
                  alt=""
                />
                <p>Спорт и развлечения</p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part4">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i1/O1CN01Ybvy8D1SCgMy5CYuG_!!6000000002211-2-tps-200-199.png"
                  alt=""
                />
                <p>
                  Сельское <br />
                  хозяйство
                </p>
              </div>
            </NavLink>
            <NavLink to={"accsessory"}>
              {" "}
              <div className="part5">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i3/O1CN018aGwXj1YidrbjBVAY_!!6000000003093-2-tps-200-200.png"
                  alt=""
                />
                <p>
                  Автомобильные <br /> аксессуары,...
                </p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part10">
                <img
                  // style={{
                  //   width: "6pc",
                  //   height: "6pc",
                  // }}
                  src="https://cdn1.vectorstock.com/i/1000x1000/25/00/text-book-silhouette-isolated-icon-vector-13502500.jpg"
                  alt=""
                />
                <p
                  style={{
                    marginTop: "1pc",
                  }}
                >
                  Книги
                </p>
              </div>
            </NavLink>
          </div>
          <div className="category2">
            <NavLink>
              <div className="part6">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i2/O1CN01pq9lU028SRrrtj79B_!!6000000007931-2-tps-200-200.png"
                  alt=""
                />
                <p>Мебель</p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part7">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i2/O1CN01lTlEA71idHDZyDnE1_!!6000000004435-2-tps-200-200.png"
                  alt=""
                />
                <p>
                  Бытовая <br /> элоктроника
                </p>
              </div>
            </NavLink>
            <NavLink>
              {" "}
              <div className="part8">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i3/O1CN01gRUkNN1sW5HWJb8Me_!!6000000005773-2-tps-200-200.png"
                  alt=""
                />
                <p>Красота</p>
              </div>
            </NavLink>
            <NavLink>
              {" "}
              <div className="part9">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i2/O1CN01kxhWs527Gi6Fzc3zF_!!6000000007770-2-tps-200-200.png"
                  alt=""
                />
                <p>Машины</p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part10">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i4/O1CN01VAlsfc1P9zBujbtCk_!!6000000001799-2-tps-200-200.png"
                  alt=""
                />
                <p>Бытовая техника</p>
              </div>
            </NavLink>
            <NavLink>
              <div className="part10">
                <img
                  src="https://s.alicdn.com/@img/imgextra/i2/O1CN01wmYqD51WrDtOCBmav_!!6000000002841-2-tps-200-200.png"
                  alt=""
                />
                <p>Строительство и...</p>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
      <section>
        <div
          style={{
            marginTop: "4pc",
            backgroundColor: "grey",
          }}
          className="section4"
        >
          <div className="shops">
            <h1>
              <span>Лучшие промокоды</span> Все скидки И предложения
            </h1>
          </div>
          <div className="swipers">
            <div className="swipers1">
              <Swiper
                style={{
                  width: "30%",
                  height: "450px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "3pc",
                  paddingTop: "40px",
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://static.tildacdn.com/tild3835-6632-4666-a566-303265653064/70dark-haired-woman-.jpeg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://kartinki.pics/pics/uploads/posts/2022-08/thumbs/1660639576_34-kartinkin-net-p-fon-dlya-reklami-odezhdi-krasivo-36.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://fainaidea.com/wp-content/uploads/2019/08/2.1.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://fainaidea.com/wp-content/uploads/2019/08/2.1.jpg"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i0.wp.com/static.insales-cdn.com/r/g5mfxSAOqFs/rs:fit:1408:0:1/q:100/plain/files/1/3922/15658834/original/beli_16c1d4a2d1510c51c066e1f5e8a82134.jpg?ssl=1"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cojo.ru/wp-content/uploads/2023/01/liudi-s-pokupkami-1.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cojo.ru/wp-content/uploads/2023/01/liudi-s-pokupkami-1.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://cojo.ru/wp-content/uploads/2023/01/liudi-s-pokupkami-1.webp"
                    alt=""
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://klike.net/uploads/posts/2022-09/1662891984_g-15.jpg"
                    alt=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
