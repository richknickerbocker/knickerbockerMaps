	/*

		function addDataToMap(map){
			map.addSource('national-park', {
				'type': 'geojson',
				'data': 'mapData/nyc_neighborhoods_pediacities.geojson'
			});
 
			map.addLayer({
				'id': 'park-boundary',
				'type': 'line',
				'source': 'national-park',
				'paint': {
					'line-color': '#AA4949',
					'line-width': 2
				}
			});
		}

	function getMapData(map){

			var map = map;
			var dataUrl = "mapData/nyc_neighborhoods_pediacities.geojson";

			fetch(dataUrl)
				.then(response => response.json())
				.then(data => {
					console.log(data);
			  		addDataToMap(map);
				})
				.catch(error => console.error(error));
		}

		function addDataToMap(map){
			map.addSource('national-park', {
				'type': 'geojson',
				'data': 'mapData/nyc_council_districts.geojson'
			});
 
			map.addLayer({
				'id': 'park-boundary',
				'type': 'line',
				'source': 'national-park',
				'paint': {
					'line-color': '#AA4949',
					'line-width': 2
				}
			});

		}

	function politicalBoundaryStyle(map){
		var map = map;
		var style = {
			'map' : map,
			'layerId' : 'HomeBoundaries',
			'propertyName' : 'fill-opacity',
			'dataUrl' : 'https://richknickerbocker.github.io/knickerbockerMaps/mapData/nyc_council_districts.geojson',
		};
		setLayerStyle(style);
	}


	function setLayerStyle(style){
		var style = style;
		console.log(style);
		var map = style.map;
		var layerId = style.layerId;
		var propertyName = style.propertyName;
		var dataUrl = style.dataUrl;

		fetch(dataUrl)
			.then(response => response.json())
			.then(data => {
	  			map.setPaintProperty(layerId, propertyName, data);
			})
			.catch(error => console.error(error));	
	}
*/


/* Unused functions
		function getMapData(map){

			var map = map;
			var dataUrl = "mapData/nyc_neighborhoods_pediacities.geojson";

			fetch(dataUrl)
				.then(response => response.json())
				.then(data => {
					console.log(data);
			  		addDataToMap(map);
				})
				.catch(error => console.error(error));
		}

		function addDataToMap(map){
			map.addSource('national-park', {
				'type': 'geojson',
				'data': 'mapData/nyc_neighborhoods_pediacities.geojson'
			});
 
			map.addLayer({
				'id': 'park-boundary',
				'type': 'line',
				'source': 'national-park',
				'paint': {
					'line-color': '#AA4949',
					'line-width': 2
				}
			});

		}

		function filterSources(data){
			var data = data;
			var features = data.features;

			//console.log(features[0].properties.name);

			for (let i = 0; i < data.features.length; i++) {
			  //console.log(features[i].properties.name);
			  if(features[i].properties.neighborhood == "Riverdale"){
			  	console.log(features[i]);
			  }
			}
		}

		function accessMapboxAPI(){
			var accessToken = 'pk.eyJ1Ijoiam9leWF6b3VsYWkiLCJhIjoiY2sxdGY1cWFqMDF1eTNucG1jYWRsYXRubCJ9.DNluSEycegu6JLC2N5A_mw';
			var mapboxClient = mapboxSdk({ accessToken: accessToken });

			var mapboxClientKeys = {
				'accessToken': accessToken,
				'mapboxClient': mapboxClient
			}
			getDatasets(mapboxClientKeys);
			console.log('mapbox api keys obtained');
		}

		function getDatasets(mapboxClientKeys){
			var mapboxClientKeys = mapboxClientKeys;
			var accessToken = mapboxClientKeys.ACCESSTOKEN;
			var mapboxClient = mapboxClientKeys.mapboxClient;
			var datasetsClient = mapboxClient.datasets;

			//getAllDatasets(datasetsClient);
			//getAllFeatures(datasetsClient);
			//getDatasetMetadata(datasetsClient);
		};

		function getAllDatasets(datasetsClient){
			
			datasetsClient.listDatasets()
			.send()
		  	.then(response => {
		  		const datasets = response.body;
		  		console.log(datasets);
		  	});
		}

		function getDatasetMetadata(datasetsClient){
			datasetsClient.getMetadata({
			  datasetId: 'ckr6daude04yg21o3fwbu9ijq'
			})
			.send()
			.then(response => {
				const datasetMetadata = response.body;
				console.log(datasetMetadata);
			})
		}

		function getAllFeatures(datasetsClient){
			
			datasetsClient.listFeatures({
				datasetId: 'ckr6daude04yg21o3fwbu9ijq'
			})
			.send()
		  	.then(response => {
		  		const features = response;
		  		console.log(features);
		  	});
		}

		function updateFeature(datasetsClient){
			datasetsClient.putFeature({
			  datasetId: 'dataset-id',
			  featureId: 'null-island',
			  feature: {
			    "type": "Feature",
			    "properties": { "name": "Null Island" },
			    "geometry": {
			      "type": "Point",
			      "coordinates": [0, 0]
			    }
			  }
			})
			  .send()
			  .then(response => {
			    const feature = response.body;
			  });
		}
unused functions */