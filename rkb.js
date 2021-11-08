document.addEventListener("DOMContentLoaded", function(event) {
	createMap();
	toggleMapControlsMenu(map);

});

function toggleMapControlsMenu(map){
	var map = map;
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
        hash: true
        //touchPitch: false
        //pitchWithRotate: false
	});
	mapIsLoaded(map);
}

function mapIsLoaded(map){
	var map = map;
	
	toggleMapControls(map);



	map.once('idle', function(){
		configureUserInteractions(map);
		displayMapMetadata(map);
		lockMapView(map);
		setMapView(map);
		addSourcesToMap(map);
	});
}

function toggleMapControls(map){
	var map = map;
	var navControl = new mapboxgl.NavigationControl({
		showZoom: false
	});
	var geoControl = new mapboxgl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true
		},
		trackUserLocation: true,
		showUserHeading: true
	})

	map.addControl(navControl, 'bottom-right');
	map.addControl(geoControl, 'bottom-right');

	document.getElementById('toggleMapControls').onclick = function(){
		if(map.hasControl(navControl)){
			map.removeControl(navControl);
		} else {
			map.addControl(navControl,'bottom-right');
		}

		if(map.hasControl(geoControl)){
			map.removeControl(geoControl);
		} else {
			map.addControl(geoControl, 'bottom-right');
		}
	};


};

function configureUserInteractions(map){
	//map.touchZoomRotate.disableRotation();

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
	var mapViewPosition =	'"center" : ' + '[' +mapCenterLongitude + ', ' + mapCenterLatitude + '], ' +
							'"zoom" : '	+ mapZoom + ', ' +
							'"pitch" : ' + 0 + ', ' +
							'"bearing" : ' + mapBearing;
	var copyMapPositionButton = document.getElementById('copyMapPositionButton');

	copyMapPositionButton.onclick = function(){
		navigator.clipboard.writeText(mapViewPosition);
	};
	
	map.on('move', function(){
		mapZoom = map.getZoom();
		mapCenter = map.getCenter();
		mapBearing = map.getBearing();
		mapBounds = map.getBounds();
		mapCenterLatitude = mapCenter.lat;
		mapCenterLongitude = mapCenter.lng;
		mapViewPosition =	'"center" : ' + '[' +mapCenterLongitude + ', ' + mapCenterLatitude + '], ' +
							'"zoom" : '	+ mapZoom + ', ' +
							'"pitch" : ' + 0 + ', ' +
							'"bearing" : ' + mapBearing;
	});
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
	var map = map;
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
				return mapView.mapName === currentDropdownValue;
			}
			selectedMapView = mapViews.find(isMapView);
			changeMapView(map, selectedMapView);
		};
	};
};

function changeMapView(map, selectedMapView){

	var map = map;
	var firstSelectedMapView = selectedMapView.views[0];
	var mapCenter = selectedMapView.views[0].center;
	var mapZoom = selectedMapView.views[0].zoom;
	var mapBearing = selectedMapView.views[0].bearing;
	var mapPitch = selectedMapView.views[0].pitch;

	map.flyTo({
		center: mapCenter,
		zoom: mapZoom,
		pitch: mapPitch,
		bearing: mapBearing,
		speed: 1.2,
		curve: 1,
		easing(t) {
			return t;
		}
	});


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
			'paint': layer.defaultPaint
		});
	});

	createLayerSwitches(map);
};


function createLayerSwitches(map){

	var map = map;

	var layerSwitchesContainer = document.getElementById('layerSwitchesContainer');

	layerModes.forEach(function(layerMode){

		var layerModeIsChecked = layerMode.isChecked;


		var divElem = document.createElement('div')
		var labelElem = document.createElement('label');
		var inputElem = document.createElement('input');
		var spanSliderElem = document.createElement('span');
		var spanLabelElem = document.createElement('span');


		if(layerModeIsChecked == true) {
			inputElem.checked = true;
		} else if (layerModeIsChecked == false){
			inputElem.checked = false;
		} else {
			('could not set switch')
		}


		
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
	var switchedLayerIsChecked;

	for (let switchElement of switchElements) {
    	switchElement.addEventListener('click', function(e){

			function isLayerMode(layerMode) {
		  		return layerMode.switchId === switchElement.id;
			}

			switchedLayerMode = layerModes.find(isLayerMode);


    		if(this.checked == true){

    			switchedLayerMode.isChecked = true;
    			console.log(switchedLayerMode.isChecked);
			} else {
    			switchedLayerMode.isChecked = false;
				console.log(switchedLayerMode.isChecked);
			}
			findLayerStyle(map, switchedLayerMode);
    	});
	}
};


function findLayerStyle(map, switchedLayerMode){

	var map = map;
	var switchedLayerMode = switchedLayerMode;
	var switchedLayerIsChecked = switchedLayerMode.isChecked;
	var switchedLayers = switchedLayerMode.switchedLayers

	switchedLayers.forEach(function(switchedLayer){

		var switchedLayerId = switchedLayer.layerId;
		var switchedLayerStyleName;
		var layerStyleArray = layerStyles;
		var switchedLayerStyleName;

		if(switchedLayerIsChecked == true){
			switchedLayerStyleName = switchedLayer.checkedLayerStyle;
		} else if (switchedLayerIsChecked == false) {
			switchedLayerStyleName = switchedLayer.uncheckedLayerStyle;
		} else {
			console.log(switchedLayer);
		}

		var layerStylesCollection = layerStyles[switchedLayerStyleName];
		
		checkPropertyType(switchedLayer, layerStylesCollection)

	});

	function checkPropertyType(switchedLayer, layerStylesCollection){

		var switchedLayer = switchedLayer;
		var layerStylesCollection = layerStylesCollection;

		layerStylesCollection.forEach(function(layerStyle){
			

			var switchedLayerId = switchedLayer.layerId;
			var layerStylePropertyType = layerStyle.propertyType;
			var layerStyleProperty = layerStyle.property;
			var layerStyleValue = layerStyle.value;
			
			if(layerStylePropertyType === 'layout') {

				map.setLayoutProperty(switchedLayerId, layerStyleProperty, layerStyleValue);

			} else if (layerStylePropertyType === 'paint'){

				map.setPaintProperty(switchedLayerId, layerStyleProperty, layerStyleValue);

			} else {

				console.log('missing property type');
			}
		});
	};
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