import React, {useEffect} from "react";
import classes from "./Services.module.css"
import bg from '../../images/icon-bg.svg'
import icon1 from "../../images/icons/1.svg"
import icon2 from "../../images/icons/2.svg"
import icon3 from "../../images/icons/3.svg"
import icon4 from "../../images/icons/4.svg"
import icon5 from "../../images/icons/5.svg"
import icon6 from "../../images/icons/6.svg"
import icon7 from "../../images/icons/7.svg"
import icon8 from "../../images/icons/8.svg"
import Aos from "aos";
const Services = ()=> {
    useEffect(()=>{
        Aos.init();
    },[])
    return(
        <div className={classes.services}>
            <div className={classes.container}>
                <div  data-aos="fade-up" data-aos-duration="1400" className={classes.main}>
                    <h1>13 лет совершенствуем компетенции в Drupal поддержке!</h1>
                    <p>Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн </p>
                </div>
                <div className={classes.iteam1}>
                    <div data-aos="fade-up" data-aos-duration="1400" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon1} alt={icon1}/>
                        <p style={{opacity:'0.7'}}>Добавление информации на сайт, создание новых разделов</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon2} alt={icon2}/>
                        <p style={{opacity:'0.7'}}>Разработка и оптимизация модулей сайта</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1600" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon3} alt={icon3}/>
                        <p style={{opacity:'0.7'}}>Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1700" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon4} alt={icon4}/>
                        <p style={{opacity:'0.7'}}>Любые доработки функционала и дизайна</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1800" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon5} alt={icon5}/>
                        <p style={{opacity:'0.7'}}>Аудит и мониторинг безопасности Drupal сайтов</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1900" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon6} alt={icon6}/>
                        <p style={{opacity:'0.7'}}>Миграция, импорт контента и апгрейд Drupal</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon7} alt={icon7}/>
                        <p style={{opacity:'0.7'}}>Оптимизация и ускорение Drupal-сайтов</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2100" className={classes.itemHeader}>
                        <img style={{marginLeft:"-50px"}} src={bg} alt={bg}/>
                        <img style={{marginLeft:"-70px" , marginTop:"-18px"} } src={icon8} alt={icon8}/>
                        <p style={{opacity:'0.7'}}>Веб-маркетинг, консультации и работы по SEO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;