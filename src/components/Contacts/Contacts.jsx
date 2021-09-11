import React from "react";
import './Contacts.sass'
import Footer from "../Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faLinkedin, faVk} from "@fortawesome/free-brands-svg-icons";
import {Animated} from "react-animated-css";

const Contacts = () => {
    return (
        <>
            <Animated animationIn="fadeInRight" isVisible={true}>
                <section className='contacts page-wrap'>
                    <div className="contacts-header">
                        <h2 className="section__title">Мои контакты</h2>
                    </div>
                    <div className="contacts-wrap grid">
                        <div className="contacts-card">
                            <div className="contacts-card__icon">
                                <FontAwesomeIcon icon={faEnvelope}/>
                            </div>
                            <h5 className='contacts-card__title'>E-mail адрес:</h5>
                            <a href="mailto:avaraa@mail.ru" className="contacts-card__link contacts-card__text">
                                avaraa@mail.ru
                            </a>
                        </div>
                        <div className="contacts-card">
                            <div className="contacts-card__icon">
                                <FontAwesomeIcon icon={faPhone}/>
                            </div>
                            <h5 className='contacts-card__title'>Телефон:</h5>
                            <a href="tel:+79282630878" className="contacts-card__link contacts-card__text">
                                Мегафон: 8 (928) 263-08-78
                            </a>
                        </div>
                        <div className="contacts-card">
                            <div className="contacts-card__icon">
                                <FontAwesomeIcon icon={faComment}/>
                            </div>
                            <h5 className='contacts-card__title'>Социальные сети:</h5>
                            <div className="contacts-card__links">
                                <a className='contacts-card__link' target='_blank'
                                   href="https://www.facebook.com/profile.php?id=100058888450778"><FontAwesomeIcon
                                    icon={faFacebook}/> Facebook</a>
                                {/* <a className='contacts-card__link' target='_blank'
                                   href="https://www.linkedin.com/in/developpapa"><FontAwesomeIcon
                                    icon={faLinkedin}/> Linkedin</a> */}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </Animated>
        </>
    )
}

export default Contacts