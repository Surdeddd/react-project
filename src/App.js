import React from 'react';
import './styles/App.css';
import './styles/reset.css';
import Header from './components/UI/Header/Header';
import InfoDrupal from "./components/Services/Services";
import services from "./components/Services/Services";
import Services from "./components/Services/Services";
import Cards from "./components/Cards/Cards";
import Support from "./components/Support/Support";


function App() {
    const headerData = [
        {
            menuItems: [
                { label: "ПОДДЕРЖКА DRUPAL", type: 'a' },
                { label: "АДМИНИСТРИРОВАНИЕ", type: 'a', options: ["МИГРАЦИЯ", "БЭКАПЫ", "АУДИТ БЕЗОПАСНОСТИ", "ОПТИМИЗАЦИЯ СКОРОСТИ", "ПЕРЕЕЗД НА HTTPS"] },
                { label: "ПРОДВИЖЕНИЕ", type: 'a' },
                { label: "РЕКЛАМА", type: 'a' },
                { label: "О НАС", type: 'a', options: ["КОМАНДА", "DRUPALGIVE", "БЛОГ", "КУРСЫ DRUPAL"] },
                { label: "ПРОЕКТЫ", type: 'a' },
                { label: "Контакты", type: 'a' }
            ],
            number: "8 800 222-26-73",
            locale: "RU",
            languageOptions: ["EN", "CH"]
        },
    ];

    return (
        <div>
            {headerData.map((data, index) => (
                <Header key={index} {...data} />
            ))}
           <Services/>
            <Cards/>
            <Support/>
        </div>
    );
}

export default App;