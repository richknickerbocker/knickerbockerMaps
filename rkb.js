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
        zoom: 13.24256696422702
	});
	mapIsLoaded(map);
}

function mapIsLoaded(map){
	var map = map;
	map.once('idle', function(){
		configureUserInteractions(map);
		//addDataToMap(map);
		displayMapMetadata(map);
		lockMapView(map);
		setMapView(map);
		getMapData(map);
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
	var mapCenterLatitude = mapCenter.lat;
	var mapCenterLongitude = mapCenter.lng;
	
	document.getElementById('info').innerHTML = 'CENTER: ' +mapCenterLongitude+', '+mapCenterLatitude+ ' ZOOM: '+mapZoom;

	map.on('move', function(){
		mapZoom = map.getZoom();
		mapCenter = map.getCenter();
		mapCenterLatitude = mapCenter.lat;
		mapCenterLongitude = mapCenter.lng;

		document.getElementById('info').innerHTML = 'CENTER: ' +mapCenterLongitude+', '+mapCenterLatitude+ ' ZOOM: '+mapZoom;
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

document.getElementById("setMapViewButton").onclick = function(){

	console.log('flyto');

	var xCoordinateInput = parseFloat(document.getElementById('xCoordinateInput').value);
	
	var yCoordinateInput = parseFloat(document.getElementById('yCoordinateInput').value);
	var userInputZoom = parseFloat(document.getElementById('zoomInput').value);

	var userInputCoordinates = [xCoordinateInput,yCoordinateInput];
	
	map.flyTo({center: userInputCoordinates, zoom: userInputZoom});

}


};

function getMapData(map){

nycNeighborhoodsPediacities
nycCityCouncilDistricts
nycCommunityBoardDistricts

map.addSource('nycCityCouncilDistrictsSource', {
	'type': 'geojson',
	'generateId' : true,
	'data': nycCityCouncilDistricts
});
map.addSource('nycCommunityBoardDistrictsSource', {
	'type': 'geojson',
	'generateId' : true,
	'data': nycCommunityBoardDistricts
});
map.addSource('nycNeighborhoodsPediacitiesSource', {
	'type': 'geojson',
	'generateId' : true,
	'data': nycNeighborhoodsPediacities
});

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

var nycCityCouncilDistrictsLineLayerToggle = document.getElementById("nycCityCouncilDistrictsLineLayerToggle");

nycCityCouncilDistrictsLineLayerToggle.onclick = function(){

		if(nycCityCouncilDistrictsLineLayerToggle.checked == true ) {
			map.setPaintProperty('nycCityCouncilDistrictsLineLayer','line-width', ["match",["get", "coun_dist"],["11"],10,1]);
		} else {
			map.setPaintProperty('nycCityCouncilDistrictsLineLayer','line-width', ["match",["get", "coun_dist"],["11"],1,1]);
		}
}



map.setPaintProperty('nycCommunityBoardDistrictsLineLayer','line-width', ["match",["get", "boro_cd"],["208"],10,1]);

map.setPaintProperty('nycNeighborhoodsPediacitiesLineLayer','line-width', ["match",["get", "neighborhood"],["Spuyten Duyvil"],10,1]);	

};