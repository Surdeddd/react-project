import React, {useEffect} from "react";
import classes from "./Support.module.css";
import bg from "../../images/icons3/лицо.svg"
import laptop from "../../images/icons3/laptop.svg"
import Aos from "aos";
const Support = () =>{
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className={classes.Main}>
            <img src={bg} alt={bg} className={classes.MainSvg}/>
            <div className={classes.Container}>
                <img src={laptop} alt={laptop} className={classes.laptop}/>
            </div>
            <div className={classes.ContainerText}>
                <h data-aos="fade-up" data-aos-duration="1400">Экспертиза в Drupal, опыт 14 лет!</h>
                <div className={classes.infoGrid}>
                    <div data-aos="fade-up" data-aos-duration="1500" className={classes.info}>
                        <p style={{opacity: 0.7}}>Только системный подход – контроль версий, резервирование и тестирование!</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1600" className={classes.info}>
                        <p style={{opacity: 0.7}}>Только Drupal сайты, не берем на поддержку сайты на других CMS!</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1700" className={classes.info}>
                        <p style={{opacity: 0.7}}>Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабоатывем <span>свои мудули Drupal </span></p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1800" className={classes.info}>
                        <p style={{opacity: 0.7}}>Поддерживаем сайты на Drupal 5, 6, 7 и 8</p>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default Support;