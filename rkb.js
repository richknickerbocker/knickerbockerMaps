document.addEventListener("DOMContentLoaded", function(event) {
	createMap();
	toggleMapControlsMenu();

});

function toggleMapControlsMenu(){
	var mapMenuButton = document.getElementById("mapMenuButton");
	var mapMenuContainer = document.getElementById("mapMenuContainer");
	mapMenuButton.onclick = function(){
		mapMenuContainer.classList.toggle('open')
	}
};


function createMap(){
	mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWF6b3VsYWkiLCJhIjoiY2sxdGY1cWFqMDF1eTNucG1jYWRsYXRubCJ9.DNluSEycegu6JLC2N5A_mw';
	var mapElement = document.getElementById('map');
	var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/joeyazoulai/ckscf1y5c114v17n1ededa4d3',
        center: [-73.90716566228583, 40.89126099070171],
        zoom: 13.24256696422702,
        touchPitch: false,
        pitchWithRotate: false
	});
	mapIsLoaded(map);
}

function mapIsLoaded(map){
	var map = map;
	map.once('idle', function(){
		configureUserInteractions(map);
		displayMapMetadata(map);
		lockMapView(map);
		setMapView(map);
		addSourcesToMap(map);
	});
}

function configureUserInteractions(map){
	map.touchZoomRotate.disableRotation();

	map.on('zoom', function(){	
		map.dragPan.disable();
		map.dragRotate.disable();
	});

	map.on('zoomend', function(){
		map.dragPan.enable();
		map.dragRotate.enable();
	});
	
}

function displayMapMetadata(map){
	var map = map;
	var mapZoom = map.getZoom();
	var mapCenter = map.getCenter();
	var mapBearing = map.getBearing();
	var mapBounds = map.getBounds();
	var mapCenterLatitude = mapCenter.lat;
	var mapCenterLongitude = mapCenter.lng;

	console.log(mapBounds);
	document.getElementById('info').innerHTML = 'CENTER: ' +mapCenterLongitude+', '+mapCenterLatitude+ ' ZOOM: '+mapZoom + ' BEARING: '+mapBearing;

	map.on('move', function(){
		mapZoom = map.getZoom();
		mapCenter = map.getCenter();
		mapBearing = map.getBearing();
		mapBounds = map.getBounds();
		mapCenterLatitude = mapCenter.lat;
		mapCenterLongitude = mapCenter.lng;

		console.log(mapBounds);
		document.getElementById('info').innerHTML = 'CENTER: ' +mapCenterLongitude+', '+mapCenterLatitude+ ' ZOOM: '+mapZoom + ' BEARING: '+mapBearing;
	});

	document.getElementById('autoFillMapViewButton').onclick = function(){

		document.getElementById('xCoordinateInput').value = mapCenterLongitude;
		document.getElementById('yCoordinateInput').value = mapCenterLatitude;
		document.getElementById('zoomInput').value = mapZoom;
	}

}

function lockMapView(map){
	var map = map;
	document.getElementById('lockMapViewButton').onclick = function(){
		if(this.classList.contains('unlocked')){
			map.dragPan.disable()
			map.dragRotate.disable();
			map.touchZoomRotate.disable();
			map.boxZoom.disable();
			map.doubleClickZoom.disable();
			map.dragPan.disable();
			map.dragRotate.disable();
			map.keyboard.disable();
			map.scrollZoom.disable();
			this.innerHTML = 'unlock'
		}else{
			map.dragPan.enable();
			map.dragRotate.enable();
			map.touchZoomRotate.enable();
			map.boxZoom.enable();
			map.doubleClickZoom.enable();
			map.dragPan.enable();
			map.dragRotate.enable();
			map.keyboard.enable();
			map.scrollZoom.enable();
			this.innerHTML = 'lock'
		}
		this.classList.toggle('unlocked')
	}
};

function setMapView(map){

	var mapViewsDropdown = document.getElementById('mapViewsDropdown');

	mapViews.forEach(function(mapView){
		var mapViewSelectElem = document.createElement('option');
		mapViewSelectElem.setAttribute('value', mapView.mapName);
		mapViewSelectElem.innerHTML = mapView.mapName;
		mapViewsDropdown.append(mapViewSelectElem);
	});

	mapViewsDropdown.onchange = function(){

		var currentDropdownValue = this.value;

		if(currentDropdownValue){

			function isMapView(mapView) {
				console.log(currentDropdownValue);
				return mapView.mapName === currentDropdownValue;
			}
			selectedMapView = mapViews.find(isMapView);
			console.log(selectedMapView);
		};
	};

	/*document.getElementById("setMapViewButton").onclick = function(){

		console.log('flyto');

		var xCoordinateInput = parseFloat(document.getElementById('xCoordinateInput').value);
		
		var yCoordinateInput = parseFloat(document.getElementById('yCoordinateInput').value);
		var userInputZoom = parseFloat(document.getElementById('zoomInput').value);

		var userInputCoordinates = [xCoordinateInput,yCoordinateInput];
		
		map.flyTo({center: userInputCoordinates, zoom: userInputZoom});
		map.flyTo({
			center: [0, 0],
			zoom: 9,
			pitch: 0,
			speed: 0.2,
			curve: 1,
			easing(t) {
			return t;
			}
		});

	}*/
};


function addSourcesToMap(map){

	sourceProperties.forEach(function(source){
		map.addSource(source.sourceId, {
			'type': 'geojson',
			'generateId' : true,	
			'data': source.dataVariable
		});
	});

	addLayersToMap(map);
};


function addLayersToMap(map){

	var map = map;

	layerProperties.forEach(function(layer){
		map.addLayer({
			'id': layer.layerId,
			'type': layer.layerType,
			'source': layer.sourceId,
			'layout' : {
				'visibility' : 'visible'
			},
			'paint': {
				'line-color': '#ff0000'
				}
		});
	});

	createLayerSwitches(map);
};


function createLayerSwitches(map){

	var map = map;

	var layerSwitchesContainer = document.getElementById('layerSwitchesContainer');

	layerModes.forEach(function(layerMode){

		var divElem = document.createElement('div')
		var labelElem = document.createElement('label');
		var inputElem = document.createElement('input');
		var spanSliderElem = document.createElement('span');
		var spanLabelElem = document.createElement('span');
		
		divElem.setAttribute('class','layerSwitchContainer');
		labelElem.setAttribute('class','switch');
		inputElem.setAttribute('class', 'layerSwitch');
		inputElem.setAttribute('type', 'checkbox');
		inputElem.setAttribute('id', layerMode.switchId);
		spanSliderElem.setAttribute('class','slider');
		spanLabelElem.setAttribute('class', 'slideLabel');

		var switchLabelElem = spanLabelElem.innerHTML = layerMode.switchLabel

		layerSwitchesContainer.append(divElem);
		divElem.append(labelElem);
		labelElem.append(inputElem);
		labelElem.append(spanSliderElem);
		divElem.append(switchLabelElem);
	});

	listenForLayerSwitches(map);
};




function listenForLayerSwitches(map){
	var map = map;

	var switchElements = document.getElementsByClassName('layerSwitch');
	var switchedLayerMode;


	for (let switchElement of switchElements) {
    	switchElement.addEventListener('click', function(e){

			function isLayerMode(layerMode) {
		  		return layerMode.switchId === switchElement.id;
			}

			switchedLayerMode = layerModes.find(isLayerMode);

			var switchedLayerId = switchedLayerMode.layerId

			if(this.checked === true){
				var switchedLayerStyleName = switchedLayerMode.checkedLayerStyle;
				findLayerStyle(map, switchedLayerId, switchedLayerStyleName);
				//console.log(switchedLayerMode.checkedLayerStyle);

			} else {
				var switchedLayerStyleName = switchedLayerMode.uncheckedLayerStyle;
				findLayerStyle(map, switchedLayerId, switchedLayerStyleName);
				//console.log(switchedLayerMode.uncheckedLayerStyle);
			}






		
    	});
	}

};


function findLayerStyle(map, switchedLayerId, switchedLayerStyleName){

	var map = map;
	var switchedLayerId = switchedLayerId;
	var switchedLayerStyleName = switchedLayerStyleName;

	var layerStyleArray = layerStyles[switchedLayerStyleName];
	console.log(switchedLayerStyleName)

	layerStyleArray.forEach(function(layerStyle){

		var layerStylePropertyType = layerStyle.propertyType;
		var layerStyleProperty = layerStyle.property;
		var layerStyleValue = layerStyle.value;

		if(layerStylePropertyType === 'layout') {

			map.setLayoutProperty(switchedLayerId, layerStyleProperty, layerStyleValue);

		} else if (layerStylePropertyType === 'paint'){

			map.setPaintProperty(switchedLayerId, layerStyleProperty, layerStyleValue);
			console.log(layerStyleValue)

		} else {

			console.log('missing property type');

		}
	});
};


/*function routeLayerSwitches(map, switchedLayerMode){

	var map = map;
	var switchedLayerMode = switchedLayerMode;
	var layerId = switchedLayerMode.layerId;

	console.log(switchedLayerMode);

	if(switchedLayerMode.switchType != undefined && switchedLayerMode.switchType == 'visibility') {
		toggleLayerVisibility(map, layerId);
	} else {
		console.log('other')
	}

};*/


function toggleLayerVisibility(map, layerId){

	var map = map;
	var layerId = layerId;
	var visibility = map.getLayoutProperty(layerId, 'visibility');

	if (visibility === 'visible') {
		map.setLayoutProperty(layerId, 'visibility', 'none');
		this.className = '';
	} else {
		this.className = 'active';
		map.setLayoutProperty(
			layerId,
			'visibility',
			'visible'
		);
	}
};

function setLayerPaintProperty(map){

	var map = map;

	
	var mapStyleSwitchLDM = document.getElementById('switchLightDarkMode');


	var mapStyle;

	mapStyleSwitchLDM.onclick = function(){
		if(this.checked == true){
			mapStyle = layerStyles.darkMode;
			mapStyle.forEach(function(style){
				map.setPaintProperty(style.layerId, style.property, style.value);
			});
		}	
		else {
			mapStyle = layerStyles.lightMode;
			mapStyle.forEach(function(style){
				map.setPaintProperty(style.layerId, style.property, style.value);
			});	
		}
	};


	/*for(let i=0; i < styles.length; i++){
		map.setPaintProperty(mapLayers[i].id, mapLayers[i].id.layerProprties[i].property, style);
		map.setPaintProperty('nycCityCouncilDistrictsLineLayer','line-width', ["match",["get", "coun_dist"],["11"],10,1]);
	}*/
};

	
/*
	var switchIDs = {

	}

	var white = '#ff0000';

	var colors = {
		'black' : '#000000',
		'white' : '#ffffff',
		'red'	: '#ff0000'
	}

	var layers = [
		'water',
		'land'
	]

	var layerProperties = [
		'fill' : ['fill-color', 'line-width']
		'line' : ['line-color',]
	]





	LayerSwitch.onclick = function(){
		if(LayerSwitch.onclick.checked == true ) {
			map.setPaintProperty(layer.layerId,layerProperties.property, );
		} else {
			map.setPaintProperty(layer.layerId,layerProperties.property,'line-width', styles.style);
		}
	}



map.addLayer({
	'id': 'nycCityCouncilDistrictsLineLayer',
	'type': 'line',
	'source': 'nycCityCouncilDistrictsSource',
	'layout' : {
		'visibility' : 'visible'
	},
	'paint': {
		'line-color': '#ff0000'
		}
});
map.addLayer({
	'id': 'nycCommunityBoardDistrictsLineLayer',
	'type': 'line',
	'source': 'nycCommunityBoardDistrictsSource',
	'layout' : {
		'visibility' : 'visible'
	},
	'paint': {
		'line-color': '#ff0000'
		}
});
map.addLayer({
	'id': 'nycNeighborhoodsPediacitiesLineLayer',
	'type': 'line',
	'source': 'nycNeighborhoodsPediacitiesSource',
	'layout' : {
		'visibility' : 'visible'
	},
	'paint': {
		'line-color': '#ff0000'
		}
});

var primaryRoads = map.getLayer('road-primary');
console.log(primaryRoads)

var nycCityCouncilDistrictsLineLayerSwitch = document.getElementById("nycCityCouncilDistrictsLineLayerToggle");
var nycCommunityBoardDistrictsLineLayerSwitch = document.getElementById("nycCommunityBoardDistrictsLineLayerToggle");
var nycNeighborhoodsPediacitiesLineLayerSwitch = document.getElementById("nycNeighborhoodsPediacitiesLineLayerToggle");


nycCityCouncilDistrictsLineLayerSwitch.onclick = function(){

		if(nycCityCouncilDistrictsLineLayerSwitch.checked == true ) {
			map.setPaintProperty('nycCityCouncilDistrictsLineLayer','line-width', ["match",["get", "coun_dist"],["11"],10,1]);
		} else {
			map.setPaintProperty('nycCityCouncilDistrictsLineLayer','line-width', ["match",["get", "coun_dist"],["11"],1,1]);
		}
}



map.setPaintProperty('nycCommunityBoardDistrictsLineLayer','line-width', ["match",["get", "boro_cd"],["208"],10,1]);

map.setPaintProperty('nycNeighborhoodsPediacitiesLineLayer','line-width', ["match",["get", "neighborhood"],["Spuyten Duyvil"],10,1]);	

};*/