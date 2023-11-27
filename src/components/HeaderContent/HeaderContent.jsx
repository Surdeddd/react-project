import React, {useEffect} from "react";
import classes from './HeaderContent.module.css'
import cup from '../../images/cup.png'
import Aos from 'aos'
import 'aos/dist/aos.css'


const HeaderContent = () => {
useEffect(()=>{
    Aos.init();
},[])
    return (
        <div className={classes.container}>
            <div className={classes.Text}>
                <h1 data-aos="fade-up"  data-aos-duration="1200">Поддержка сайтов на Drupal</h1>
                <p data-aos="fade-up"  data-aos-duration="1300" style={{opacity:'0.8'}}>Сопровождение и поддержка сайтов на CMS Drupal любых версий и запущенности</p>
                <a data-aos="fade-up" data-aos-duration="1400" >Тарифы</a>
            </div>
            <div className={classes.infoText}>
                <div data-aos="fade-up" data-aos-duration="1400" className={classes.item}>
                <div className={classes.itemHeader}>
                    <h1>#1</h1>
                    <img src={cup} alt="Cup"/>
                </div>
                    <p>Drupal-разработчик в России по версии Рейтинга Рунета</p>
            </div>
                <div data-aos="fade-up" data-aos-duration="1500" className={classes.item}>
                    <div className={classes.itemHeader}>
                        <h3>3+</h3>
                    </div>
                    <p>средний опыт специалистов более 3 лет</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1600" className={classes.item}>
                    <div className={classes.itemHeader}>
                        <h3>14</h3>
                    </div>
                    <p>лет опыта в сфере<br/>Drupal</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1700" className={classes.item}>
                    <div className={classes.itemHeader}>
                        <h3>200+</h3>
                    </div>
                    <p>Модулей и тем в формате DrupalGive</p>
                </div>
                <div data-aos="fade-up"  data-aos-duration="1800" className={classes.item}>
                    <div className={classes.itemHeader}>
                        <h3>35 000</h3>
                    </div>
                    <p>Часов поддержки<br/>сайтов на Drupal</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1900" className={classes.item}>
                    <div className={classes.itemHeader}>
                        <h3>200+</h3>
                    </div>
                    <p>Проектов<br/>на поддержке</p>
                </div>
            </div>
        </div>
    );
 }
export default HeaderContent;