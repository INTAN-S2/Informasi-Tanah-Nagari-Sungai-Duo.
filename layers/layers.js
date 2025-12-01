var wms_layers = [];

var format_SungaiDuoNilai_0 = new ol.format.GeoJSON();
var features_SungaiDuoNilai_0 = format_SungaiDuoNilai_0.readFeatures(json_SungaiDuoNilai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SungaiDuoNilai_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SungaiDuoNilai_0.addFeatures(features_SungaiDuoNilai_0);
var lyr_SungaiDuoNilai_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SungaiDuoNilai_0, 
                style: style_SungaiDuoNilai_0,
                popuplayertitle: 'Sungai Duo Nilai',
                interactive: true,
    title: 'Sungai Duo Nilai<br />\
    <img src="styles/legend/SungaiDuoNilai_0_0.png" /> <br />\
    <img src="styles/legend/SungaiDuoNilai_0_1.png" /> <br />\
    <img src="styles/legend/SungaiDuoNilai_0_2.png" /> Kakao<br />\
    <img src="styles/legend/SungaiDuoNilai_0_3.png" /> Karet<br />\
    <img src="styles/legend/SungaiDuoNilai_0_4.png" /> Kelapa Sawit<br />\
    <img src="styles/legend/SungaiDuoNilai_0_5.png" /> Kosong<br />\
    <img src="styles/legend/SungaiDuoNilai_0_6.png" /> Lain-lain<br />\
    <img src="styles/legend/SungaiDuoNilai_0_7.png" /> Padang<br />\
    <img src="styles/legend/SungaiDuoNilai_0_8.png" /> PERMUKIMAN<br />\
    <img src="styles/legend/SungaiDuoNilai_0_9.png" /> Tanah Kebun<br />\
    <img src="styles/legend/SungaiDuoNilai_0_10.png" /> Tanah Kosong<br />\
    <img src="styles/legend/SungaiDuoNilai_0_11.png" /> Tanah Perkampungan<br />\
    <img src="styles/legend/SungaiDuoNilai_0_12.png" /> Tanah Perkebunan<br />\
    <img src="styles/legend/SungaiDuoNilai_0_13.png" /> Tanah Persawahan<br />\
    <img src="styles/legend/SungaiDuoNilai_0_14.png" /> Tanah Pertanian<br />\
    <img src="styles/legend/SungaiDuoNilai_0_15.png" /> Tanah Perumahajn<br />\
    <img src="styles/legend/SungaiDuoNilai_0_16.png" /> Tanah Perumahan<br />\
    <img src="styles/legend/SungaiDuoNilai_0_17.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/SungaiDuoNilai_0_18.png" /> <br />' });

lyr_SungaiDuoNilai_0.setVisible(true);
var layersList = [lyr_SungaiDuoNilai_0];
lyr_SungaiDuoNilai_0.set('fieldAliases', {'TIPEHAK': 'TIPEHAK', 'NIB': 'NIB', 'PENGGUNAAN': 'PENGGUNAAN', 'RANGE_ZNT': 'RANGE_ZNT', });
lyr_SungaiDuoNilai_0.set('fieldImages', {'TIPEHAK': 'TextEdit', 'NIB': 'TextEdit', 'PENGGUNAAN': 'TextEdit', 'RANGE_ZNT': 'TextEdit', });
lyr_SungaiDuoNilai_0.set('fieldLabels', {'TIPEHAK': 'inline label - always visible', 'NIB': 'hidden field', 'PENGGUNAAN': 'inline label - always visible', 'RANGE_ZNT': 'inline label - always visible', });
lyr_SungaiDuoNilai_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});