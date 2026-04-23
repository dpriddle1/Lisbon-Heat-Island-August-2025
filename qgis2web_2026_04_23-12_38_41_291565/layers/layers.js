var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RVI_1 = new ol.format.GeoJSON();
var features_RVI_1 = format_RVI_1.readFeatures(json_RVI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RVI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RVI_1.addFeatures(features_RVI_1);
var lyr_RVI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RVI_1, 
                style: style_RVI_1,
                popuplayertitle: 'RVI',
                interactive: true,
    title: 'RVI<br />\
    <img src="styles/legend/RVI_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/RVI_1_1.png" /> 2 - 3<br />\
    <img src="styles/legend/RVI_1_2.png" /> 3 - 4<br />\
    <img src="styles/legend/RVI_1_3.png" /> 4 - 4<br />\
    <img src="styles/legend/RVI_1_4.png" /> 4 - 6<br />\
    <img src="styles/legend/RVI_1_5.png" /> 6 - 8<br />\
    <img src="styles/legend/RVI_1_6.png" /> 8 - 12<br />\
    <img src="styles/legend/RVI_1_7.png" /> 12 - 312<br />' });
var format_TemperatureCelcius_2 = new ol.format.GeoJSON();
var features_TemperatureCelcius_2 = format_TemperatureCelcius_2.readFeatures(json_TemperatureCelcius_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TemperatureCelcius_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TemperatureCelcius_2.addFeatures(features_TemperatureCelcius_2);
var lyr_TemperatureCelcius_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TemperatureCelcius_2, 
                style: style_TemperatureCelcius_2,
                popuplayertitle: 'Temperature (Celcius)',
                interactive: true,
    title: 'Temperature (Celcius)<br />\
    <img src="styles/legend/TemperatureCelcius_2_0.png" /> 18 - 26<br />\
    <img src="styles/legend/TemperatureCelcius_2_1.png" /> 26 - 28<br />\
    <img src="styles/legend/TemperatureCelcius_2_2.png" /> 28 - 29<br />\
    <img src="styles/legend/TemperatureCelcius_2_3.png" /> 29 - 30<br />\
    <img src="styles/legend/TemperatureCelcius_2_4.png" /> 30 - 31<br />\
    <img src="styles/legend/TemperatureCelcius_2_5.png" /> 31 - 31<br />\
    <img src="styles/legend/TemperatureCelcius_2_6.png" /> 31 - 32<br />\
    <img src="styles/legend/TemperatureCelcius_2_7.png" /> 32 - 33<br />\
    <img src="styles/legend/TemperatureCelcius_2_8.png" /> 33 - 35<br />\
    <img src="styles/legend/TemperatureCelcius_2_9.png" /> 35 - 44<br />' });
var lyr_RGB_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'RGB<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RGB_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1033120.462159, 4676876.797770, -1007180.790366, 4696373.817088]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_RVI_1.setVisible(true);lyr_TemperatureCelcius_2.setVisible(true);lyr_RGB_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RVI_1,lyr_TemperatureCelcius_2,lyr_RGB_3];
lyr_RVI_1.set('fieldAliases', {'RVI': 'RVI', });
lyr_TemperatureCelcius_2.set('fieldAliases', {'Temperatur': 'Temperatur', });
lyr_RVI_1.set('fieldImages', {'RVI': 'Range', });
lyr_TemperatureCelcius_2.set('fieldImages', {'Temperatur': 'Range', });
lyr_RVI_1.set('fieldLabels', {'RVI': 'header label - always visible', });
lyr_TemperatureCelcius_2.set('fieldLabels', {'Temperatur': 'header label - always visible', });
lyr_TemperatureCelcius_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});