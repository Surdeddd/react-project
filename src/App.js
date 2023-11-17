import React, {useState} from 'react';
import './styles/App.css';
import  './styles/reset.css';
import Druplicon from './images/druplicon.svg';
import NavBar from "./components/UI/NavBar/NavBar";
import video from  './video/video .mp4'
function App() {

    const menuItemsArray = [
        { label: "ПОДДЕРЖКА DRUPAL", type: 'a' },
        { label: "АДМИНИСТРИРОВАНИЕ", type: 'a' ,options: [ "МИГРАЦИЯ", "БЭКАПЫ", "АУДИТ БЕЗОПАСНОСТИ", "ОПТИМИЗАЦИЯ СКОРОСТИ ","ПЕРЕЕЗД НА HTTPS"] },
        { label: "ПРОДВИЖЕНИЕ", type: 'a' },
        { label: "РЕКЛАМА", type: 'a'},
        { label:"О НАС", type: 'a', options: ["КОМАНДА","DRUPALGIVE","БЛОГ","КУРСЫ DRUPAL"]},
        { label: "ПРОЕКТЫ", type: 'a'},
        { label: "Контакты", type: 'a'}];

  return (
      <div>
          <div className='App'>
              <div className='Video'>
                  <video autoPlay={true} muted={true} loop={true} className="BackgroundVideo">
                      <source src={video} type="video/mp4" />
                  </video>

                  <img src={Druplicon} alt="description of image" className="OverlayImage" />
                  <div className='HelperHeader'>
                      <NavBar
                          menuItems= {menuItemsArray}
                          number="8 800 222-26-73"
                          locale="RU"
                          languageOptions={["EN","CH"]}
                      />
                  </div>
              </div>
          </div>
      </div>
  );

}

export default App;
