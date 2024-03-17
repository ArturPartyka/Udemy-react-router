import React from 'react';
import Article from '../components/Article';


const articles = [
    {
        id: 1,
        title: 'Wpływ Epoki Lodowcowej 2 na wychowanie dzieci',
        author: 'Maja Partyka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, optio vel debitis sint dignissimos sit dolore recusandae illo sunt eius, vitae exercitationem repellendus quaerat provident minus, cupiditate et sequi fugit!'
    },
    {
        id: 2,
        title: 'Styl zycia a zdrowie',
        author: 'Artur Partyka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, optio vel debitis sint dignissimos sit dolore recusandae illo sunt eius, vitae exercitationem repellendus quaerat provident minus, cupiditate et sequi fugit!'
    },
    {
        id: 3,
        title: 'Kolory w domu',
        author: 'Aleksandra Partyka',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, optio vel debitis sint dignissimos sit dolore recusandae illo sunt eius, vitae exercitationem repellendus quaerat provident minus, cupiditate et sequi fugit!'
    }

]
const HomePage = () => {
    const artList = articles.map(article => (
        <Article key={article.id} {...article} />

    ))

    return (
        <div className='homePage'>
            {artList}
        </div>
    );
}

export default HomePage;