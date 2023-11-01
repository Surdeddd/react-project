import React from 'react';
import classes from './NavBar1.module.css';
import logo from '../../../images/Group 9.png';
const NavBar1 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.containerIteam}> <img src={logo} alt="логотип"/>.</div>
            <div className={classes.containerIteam}>Поддержка сайтов</div>
            <div className={classes.containerIteam}>Тарифы</div>
            <div className={classes.containerIteam}>Наши работы</div>
            <div className={classes.containerIteam}>Отзывы</div>
            <div className={classes.containerIteam}>Контакты</div>
        </div>
    );
};

export default NavBar1;