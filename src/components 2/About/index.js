import React from "react";
import img1 from "../../assets/d78df6_4517dc1e0b1545bf84dccd915203c870.webp";
import img2 from "../../assets/d78df6_9f4f79dd27814710b261e3acb931156e.webp";
import img3 from "../../assets/d78df6_24dc2b5011604bc7ada79cbd953a7c5a.webp";
import img4 from "../../assets/d78df6_394a136048754355ad8432b30522c761.webp";
import img5 from "../../assets/d78df6_3eea4c192eed4667a602ead5652459c5.webp";
import img6 from "../../assets/d78df6_914d12d64a57420c99737b9933ebe7fc.webp";
import img7 from "../../assets/d78df6_afe9335eb67640c988d648f7671308e5.webp";
import img8 from "../../assets/d78df6_b572be78b8984e2db58978eb21e433d7.webp";
import img9 from "../../assets/d78df6_b9747effc3074458a295cf5674f8c73c.webp";

import img11 from "../../assets/Screenshot 2022-12-27 164803.png";
import img12 from "../../assets/bfdf85_bb32704cfdf641b78b2207124c945fc8.webp";

import icon1 from "../../assets/8d2c2a4846503b9067e2fd2f590445c2.wix_mp";
import icon2 from "../../assets/f33e5c8ff44ad726a15419f6ff97b3fd.webp";
import icon3 from "../../assets/fe7017590fbd384c7502a64601c7b444.webp";
import icon4 from "../../assets/a0a5617532c029a9bcc4b6490606cc49.webp";
import { Box } from "@mui/material";

export const About = () => {
  return (
    <Box sx={{ textAlign: "center", background: "white", px: "20px" }}>
      <header>
        <div className="container">
          <h1>
            <a href="#">Олег Марков</a>
          </h1>
          <ul>
            <li>
              <a href="#main"> Главная</a>
            </li>
            <li>
              <a href="#me">Обо мне</a>
            </li>
            <li>
              <a href="#contact">Связаться</a>
            </li>
          </ul>
        </div>
      </header>
      <section id="#">
        <div className="container">
          <img src={img1} />
          <img src={img2} />
          <img src={img3} />
          <img src={img4} />
          <img src={img5} />
          <img src={img6} />
          <img src={img7} />
          <img src={img8} />
          <img src={img9} />
        </div>
      </section>
      <section id="me">
        <div className="containerMini">
          <div className="imag">
            <img src={img11} />
          </div>

          <h2>Обо мне</h2>
          <p>
            Это текст. Нажмите один раз и выберите «Редактировать текст» или
            просто кликните дважды, чтобы добавить свой текст и настроить шрифт.
            Вы можете переместить его в любое место на странице. Расскажите
            посетителям сайта о себе. Чтобы удалить этот текст, нажмите один раз
            и выберите значок «Корзина».
          </p>
        </div>
      </section>
      <section id="contact">
        <div className="containerMini">
          <img src={img12} />
          <h2>Свяжитесь мо мной</h2>
          <p>
            <span>info@mysite.com | Телефон: +7 (945) 000-00-00</span>
          </p>
          <form>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Эл.почта" />
            <input type="text" placeholder="Телефон" />
            <textarea
              id="story"
              name="story"
              rows="5"
              cols="33"
              placeholder="Добавьте сообщение..."
            ></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="containerMini">
          <p>
            © 2035 Олег Марков. Сайт создан на{" "}
            <a
              href="http://wix.com/?utm_campaign=vir_created_with"
              target="_blank"
              rel="noreferrer noopener"
            >
              Wix.com.
            </a>
          </p>
          <ul>
            <li>
              <a href="http://www.facebook.com" target="_blank">
                <img src={icon1} />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <img src={icon2} />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <img src={icon3} />
              </a>
            </li>
            <li>
              <a href="facebook.com">
                <img src={icon4} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </Box>
  );
};
