import React from 'react';
import NavBar from "../NavBar/NavBar";
import Druplicon from '../../../images/druplicon.svg';
import video from '../../../video/video .mp4';
import '../../../styles/reset.css';
import classes from './Header.module.css';
import HeaderContent from "../../HeaderContent/HeaderContent";

const Header = (props) => {
    const { menuItems, number, locale, languageOptions } = props;

    return (
        <div className={classes.Header}>
            <div className={classes.Video}>
                <video autoPlay={true} muted={true} loop={true} className={classes.BackgroundVideo}>
                    <source src={video} type="video/mp4" />
                </video>
                <img src={Druplicon} alt="description of image" className={classes.OverlayImage}/>
                <div className={classes.HelperHeader}>
                    <NavBar
                        menuItems={menuItems}
                        number={number}
                        locale={locale}
                        languageOptions={languageOptions}
                    />
                    <HeaderContent/>
                </div>
            </div>

        </div>
    );
}

export default Header;