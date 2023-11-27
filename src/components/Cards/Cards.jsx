import React, {useEffect} from "react"
import classes from "./Cards.module.css";
import icon1 from "../../images/icons2/support1.svg"
import icon2 from "../../images/icons2/pie-chart.svg"
import icon3 from "../../images/icons2/settings.svg"
import icon4 from "../../images/icons2/support4.svg"
import icon5 from "../../images/icons2/support5.svg"
import icon6 from "../../images/icons2/support6.svg"
import icon7 from "../../images/icons2/support7.svg"
import icon8 from "../../images/icons2/support8.svg"
import Aos from "aos";
const Cards = () =>{
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <div className={classes.main}>
            <div data-aos="fade-up" data-aos-duration="1400" className={classes.containerText}><h1>Поддержка<br/> от Drupal-coder</h1></div>
            <div className={classes.containerCards}>
                <div data-aos="flip-up" data-aos-duration="1400" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>01. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Постановка задачи по Email</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда
                            не теряются.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon1}
                        alt={icon1}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="1500" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>02. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Система Helpdesk – отчетность, прозрачность</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon2}
                        alt={icon2}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="1600" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>03. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Расширенная техническая поддержка</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon3}
                        alt={icon3}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="1700" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>04. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Персональный менеджер проекта</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon4}
                        alt={icon4}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="1800" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>05. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Удобные способы оплаты</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon5}
                        alt={icon5}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="1900" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>06. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Работаем с SLA и NDA</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Работа в рамках соглашений о конфиденциальности и об уровне качетсва работ.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon6}
                        alt={icon6}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="2000" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>07. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Штатные специалисты</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Надежные штатные специалисты, никаких фрилансеров.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon7}
                        alt={icon7}/>
                </div>
                <div data-aos="flip-up" data-aos-duration="2100" className={classes.Cards}>
                    <div className={classes.number}>
                        <p style={{opacity:"0.5"}}>08. </p>
                    </div>
                    <div className={classes.MainText}>
                        <p>Удобные каналы связи</p>
                    </div>
                    <div className={classes.CardsText}>
                        <p style={{opacity:"0.7"}}>Консультации по телефону, скайпу, в месенджерах.</p>
                    </div>
                    <img
                        style={{
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            zIndex:"-1"
                        }}
                        src={icon8}
                        alt={icon8}/>
                </div>
            </div>
        </div>
    );
};
export default Cards