import React from "react";
import './About.sass'
import Footer from "../Footer/Footer";
import {Animated} from "react-animated-css";

const About = () => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='about page-wrap'>
                    <div className="works-header">
                        <h2 className="section__title">О себе</h2>
                    </div>
                    <div className="about-wrap grid">
                        <div className="about-description">
                            <h2 className="about__title">Персональные данные:</h2>
                            <p className="about__text">
                                Полное имя: Рустам Багиров Мурадович

                            </p>
                            <p className="about__text">
                                День рождения: 30 июня 1986 г.
                            </p>
                            <p className="about__text">
                                Родной город: Тихорецк
        
                            </p>
                        </div>
                        <a href='https://github.com/Countryman23' target='_blank' className="about-avatar">
                        </a>
                        <div className="about-description">
                            <h2 className="about__title">Образование:</h2>
                            <div className='about-description__item'>
                                <p className="about__text">
                                Тюменский Государственный Нефтегазовый Университет
                                </p>
                                <p className="about__text">
                                    Специальность: Инженер по бурению
                                </p>
                            </div>
                            <div>
                                <p className="about__text">
                                    Онлайн курсы: Web-разработка
                                </p>
                                <p className="about__text">
                                    Период обучения: 5 месяцев
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default About