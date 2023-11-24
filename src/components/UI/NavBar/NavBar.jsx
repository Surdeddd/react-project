import React, { useState } from 'react';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import classes from './NavBar.module.css';
import '../../../styles/reset.css';
import logo from '../../../images/Group 9.svg';
import arrow from '../../../images/arrow-lang.svg';

const NavBar = (props) => {
    const { menuItems, number, locale, languageOptions } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [isRotated, setRotate] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(locale);
    const [languageOptionsList, setLanguageOptionsList] = useState(languageOptions);
    const [isBurgerClicked, setBurgerClicked] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [subMenuItems, setSubMenuItems] = useState([]);
    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
    const [arrowRotations, setArrowRotations] = useState({});

    const handleSubMenuToggleArrow = (index) => {
        const options = menuItems[index].options;

        setArrowRotations((prevRotations) => ({
            ...prevRotations,
            [index]: !prevRotations[index],
        }));

        if (options) {
            if (activeSubMenuIndex === index) {
                handleSubMenuClose();
            } else {
                handleSubMenuToggle(index, options);
            }
        } else {
            handleSubMenuClose();
        }
    };

    const handleArrowClick = () => {
        setExpanded(!isExpanded);
        setRotate(!isRotated);
        setShowSubMenu(false);
    };

    const handleLanguageClick = (index) => {
        const clickedLanguage = languageOptionsList[index];
        setLanguageOptionsList((prevLanguages) =>
            prevLanguages.map((lang, i) => (i === index ? selectedLanguage : lang))
        );
        setSelectedLanguage(clickedLanguage);
        setExpanded(false);
        setRotate(false);
    };

    const handleBurgerClick = () => {
        setBurgerClicked(!isBurgerClicked);
    };

    const handleSubMenuToggle = (index, options) => {
        if (options) {
            setActiveSubMenuIndex(index);
            setShowSubMenu(true);
            setSubMenuItems(options);
        }
    };

    const handleSubMenuClose = () => {
        setActiveSubMenuIndex(null);
        setShowSubMenu(false);
    };

    return (
        <div className={classes.Main}>
            <ul className={classes.container}>
                <div className={classes.containerItemMain}>
                    <img src={logo} alt="логотип" />
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={classes.containerItem}
                            onMouseEnter={() => {
                                handleSubMenuToggle(index, item.options);
                            }}
                            onMouseLeave={() => {
                                handleSubMenuClose();
                            }}
                        >
                            <a className={`${index === 0 ? classes.active : ''} ${item.options ? classes.withOptions : ''}`}>
                                {item.label}
                            </a>
                            <TransitionGroup>
                                {activeSubMenuIndex === index && item.options && (
                                    <CSSTransition
                                        in={showSubMenu}
                                        timeout={800}
                                        classNames={{
                                            enter: classes.subMenuEnter,
                                            exit: classes.subMenuExit,
                                        }}
                                    >
                                        <ul className={classes.subMenu}>
                                            {subMenuItems.map((subItem, subIndex) => (
                                                <li className={classes.subItem} key={subIndex}>
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </li>
                    ))}
                </div>
                <div className={classes.containerItemMain2}>
                    <li className={classes.Number}>{number}</li>
                    <li className={`${classes.locale} ${isExpanded ? classes.show : ''}`}>
                        {selectedLanguage}
                        <img
                            className={`${isRotated ? classes.rotate : ''} ${isRotated ? '' : classes.AgainRotate}`}
                            style={{ paddingLeft: '5px', cursor: 'pointer' }}
                            src={arrow}
                            alt="стрелка"
                            onClick={handleArrowClick}
                        />
                        <Transition in={isExpanded} timeout={200}>
                            {(state) => (
                                <ul className={`${classes.dropdownMenu} ${state === 'entered' ? classes.show : ''}`}>
                                    {languageOptionsList.map((lang, index) => (
                                        <li
                                            key={index}
                                            style={{
                                                pointerEvents: isExpanded ? 'auto' : 'none',
                                                transitionDelay: isExpanded ? `${0.2 * index}s` : `${0.2 * (languageOptionsList.length - index)}s`,
                                            }}
                                            onClick={() => handleLanguageClick(index)}
                                        >
                                            {lang}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </Transition>
                    </li>
                </div>
            </ul>
            <div className={classes.navBar}>
                <img style={{ paddingRight: '50px', zIndex: 3 }} src={logo} alt="логотип" />
                <li style={{ marginLeft: 'auto' }} className={`${classes.locale} ${isExpanded ? classes.show : ''}`}>
                    {selectedLanguage}
                    <img
                        className={`${isRotated ? classes.rotate : ''} ${isRotated ? '' : classes.AgainRotate}`}
                        style={{ paddingLeft: '5px', cursor: 'pointer' }}
                        src={arrow}
                        alt="стрелка"
                        onClick={handleArrowClick}
                    />
                    <Transition in={isExpanded} timeout={200}>
                        {(state) => (
                            <ul className={`${classes.dropdownMenu} ${state === 'entered' ? classes.show : ''}`}>
                                {languageOptionsList.map((lang, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            pointerEvents: isExpanded ? 'auto' : 'none',
                                            transitionDelay: isExpanded ? `${0.2 * index}s` : `${0.2 * (languageOptionsList.length - index)}s`,
                                        }}
                                        onClick={() => handleLanguageClick(index)}
                                    >
                                        {lang}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Transition>
                </li>
                <div className={classes.burger} onClick={handleBurgerClick}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={isBurgerClicked ? classes.burgerLinesActive : classes.burgerLines}></div>
                    ))}
                </div>
                <CSSTransition
                    in={isBurgerClicked}
                    timeout={{ enter: 800, exit: 800 }}
                    classNames={{
                        enterActive: classes.slideIn,
                        exitActive: classes.slideOut,
                    }}
                    unmountOnExit
                >
                    {(state) => (
                        <ul className={classes.TabletMenu}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={classes.containerItemTable}
                                    onClick={() => {
                                        handleSubMenuToggle(index, item.options);
                                    }}
                                >
                                    <a
                                        className={`${index === 0 ? classes.active : ''} ${item.options ? classes.withOptions : ''}`}
                                    >
                                        {item.label}
                                        {item.options && (
                                            <img
                                                className={`${arrowRotations[index] && activeSubMenuIndex === index ? classes.rotate : ''} ${arrowRotations[index] && activeSubMenuIndex === index ? '' : classes.AgainRotate}`}
                                                style={{ paddingLeft: '10px', paddingTop:'6px'}}
                                                src={arrow}
                                                alt="стрелка"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSubMenuToggleArrow(index);
                                                }}
                                            />
                                        )}
                                        <TransitionGroup>
                                        {activeSubMenuIndex === index && item.options && (
                                            <CSSTransition
                                                in={activeSubMenuIndex === index && showSubMenu && item.options}
                                                timeout={800}
                                                classNames={{
                                                    enter: classes.subMenuTableEnter,
                                                    exit: classes.subMenuTableExit,
                                                }}
                                            >
                                                <ul className={`${classes.subMenuTable}`}>
                                                    {subMenuItems.map((subItem, subIndex) => (
                                                        <li className={classes.subItemTable } key={subIndex}>
                                                            {subItem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CSSTransition>
                                        )}
                                            </TransitionGroup>
                                    </a>
                                </li>
                            ))}
                            <li className={classes.Number} style={{ paddingLeft: '5%' }}>
                                {number}
                            </li>
                        </ul>
                    )}
                </CSSTransition>
            </div>
        </div>
    );
};

export default NavBar;
