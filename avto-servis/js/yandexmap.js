ymaps.ready(init);
 
function init () {
    var width = $('html').width();
    var myMap = new ymaps.Map("map", {
        // Центр карты, указываем коордианты
        center: width < 480 ? [55.599468, 37.508050] : [ 55.635092, 37.500046],
        // Масштаб, тут все просто
        zoom: 11,
        // Отключаем все элементы управления
        controls: ['zoomControl']

    }); 
             
    var myGeoObjects = [];
     
    // Наша метка, указываем коордианты
    myGeoObjects = new ymaps.Placemark([55.599468, 37.508050],{
                    balloonContentBody: 'PitLine - автосервис №1',
                    },{
                    iconLayout: 'default#image',
                    // Путь до нашей картинки
                    iconImageHref: './img/maplogo.png', 
                    // Размер по ширине и высоте
                    iconImageSize: [334, 108],
                    // Смещение левого верхнего угла иконки относительно
                    // её «ножки» (точки привязки).
                    iconImageOffset: [-167, -108]
    });           
    var clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });
     
    clusterer.add(myGeoObjects);
    myMap.geoObjects.add(clusterer); 
    myMap.behaviors.disable("scrollZoom");
}
