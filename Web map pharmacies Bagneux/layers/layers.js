var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_IRISBagneuxiriscopie_1 = new ol.format.GeoJSON();
var features_IRISBagneuxiriscopie_1 = format_IRISBagneuxiriscopie_1.readFeatures(json_IRISBagneuxiriscopie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IRISBagneuxiriscopie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IRISBagneuxiriscopie_1.addFeatures(features_IRISBagneuxiriscopie_1);
var lyr_IRISBagneuxiriscopie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IRISBagneuxiriscopie_1, 
                style: style_IRISBagneuxiriscopie_1,
                popuplayertitle: 'IRIS Bagneux — iris copie',
                interactive: false,
                title: '<img src="styles/legend/IRISBagneuxiriscopie_1.png" /> IRIS Bagneux — iris copie'
            });
var format_Pharmacie_2 = new ol.format.GeoJSON();
var features_Pharmacie_2 = format_Pharmacie_2.readFeatures(json_Pharmacie_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacie_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacie_2.addFeatures(features_Pharmacie_2);
var lyr_Pharmacie_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacie_2, 
                style: style_Pharmacie_2,
                popuplayertitle: 'Pharmacie',
                interactive: true,
                title: '<img src="styles/legend/Pharmacie_2.png" /> Pharmacie'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_IRISBagneuxiriscopie_1.setVisible(true);lyr_Pharmacie_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_IRISBagneuxiriscopie_1,lyr_Pharmacie_2];
lyr_IRISBagneuxiriscopie_1.set('fieldAliases', {'fid': 'fid', 'dep': 'dep', 'insee_com': 'insee_com', 'nom_com': 'nom_com', 'iris': 'iris', 'code_iris': 'code_iris', 'nom_iris': 'nom_iris', 'typ_iris': 'typ_iris', });
lyr_Pharmacie_2.set('fieldAliases', {'Code Insee': 'Code Insee', 'Commune': 'Commune', 'Nom': 'Nom', 'Adresse': 'Adresse', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Site Internet': 'Site Internet', });
lyr_IRISBagneuxiriscopie_1.set('fieldImages', {'fid': 'TextEdit', 'dep': 'TextEdit', 'insee_com': 'TextEdit', 'nom_com': 'TextEdit', 'iris': 'TextEdit', 'code_iris': 'TextEdit', 'nom_iris': 'TextEdit', 'typ_iris': 'TextEdit', });
lyr_Pharmacie_2.set('fieldImages', {'Code Insee': 'Range', 'Commune': 'TextEdit', 'Nom': 'TextEdit', 'Adresse': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Site Internet': 'TextEdit', });
lyr_IRISBagneuxiriscopie_1.set('fieldLabels', {'fid': 'no label', 'dep': 'no label', 'insee_com': 'no label', 'nom_com': 'no label', 'iris': 'no label', 'code_iris': 'no label', 'nom_iris': 'no label', 'typ_iris': 'no label', });
lyr_Pharmacie_2.set('fieldLabels', {'Code Insee': 'hidden field', 'Commune': 'hidden field', 'Nom': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Site Internet': 'inline label - always visible', });
lyr_Pharmacie_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});