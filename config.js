var mapViews = [{
		"mapName": "Riverdale Park Trail",
		"views": [{
				"center": [-73.91647723886805, 40.89489149871565],
				"zoom": 15.150488555069472,
				"pitch": 0,
				"bearing" : -73.60000000000072
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Spuyten Duyvil",
		"views": [{
				"center": [-73.92073480323454, 40.88241506371213],
				"zoom": 14.673412037291037,
				"pitch": 0,
				"bearing" : 0
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "District 11",
		"views": [{
				"center" : [-73.89481408304725, 40.889759472658426],
				"zoom" : 12.69320109863826,
				"pitch" : 0,
				"bearing" : 0
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	}
];

var sourceProperties = [
	{
		"sourceId" : "cityCouncilDistrictsSource",
		"layerId" : "cityCouncilDistrictsLayer",
		"dataVariable" : nycCityCouncilDistricts
	},
	{
		"sourceId" : "communityBoardDistrictsSource",
		"layerId" : "communityBoardDistrictsLayer",
		"dataVariable" : nycCommunityBoardDistricts
	},
	{
		"sourceId" : "neighborhoodsPediacitiesSource",
		"layerId" : "neighborhoodsPediacitiesLayer",
		"dataVariable" : nycNeighborhoodsPediacities
	},
	{
		"sourceId" : "walkingPathsSource",
		"layerId" : "walkingPathsLayer",
		"dataVariable" : walkingPaths
	}
];

var layerProperties = [
	{
		"layerId" : "cityCouncilDistrictsLayer",
		"layerType" : "line",
		"sourceId" : "cityCouncilDistrictsSource",
		"defaultPaint" : {
			"line-width" : ["match",["get", "coun_dist"],["11"],5,1],
			"line-color" : "#ff0000",
			"line-opacity" : 0
		} 
	},
	{
		"layerId" : "communityBoardDistrictsLayer",
		"layerType" : "line",
		"sourceId" : "communityBoardDistrictsSource",
		"defaultPaint" : {
			"line-width" : ["match",["get", "boro_cd"],["208"],5,1],
			"line-color" : "#0000ff",
			"line-opacity" : 0
		}
	},
	{
		"layerId" : "neighborhoodsPediacitiesLayer",
		"layerType" : "line",
		"sourceId" : "neighborhoodsPediacitiesSource",
		"defaultPaint" : {
			"line-width" : ["match",["get", "neighborhood"],["Spuyten Duyvil"],5,1],
			"line-color" : "#00ff00",
			"line-opacity" : 0
		}
	},
	{
		"layerId" : "walkingPathsLayer",
		"layerType" : "line",
		"sourceId" : "walkingPathsSource",
		"defaultPaint" : {
			"line-width" : 2,
			"line-color" : "#FFA500",
			"line-opacity" : 0
		}
	}
];


var layerModes = [
	{
		"switchId" : "waterSwitch",
		"switchLabel" : "Water",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "water",
				"uncheckedLayerStyle" : "fillOpaqueStyle",
				"checkedLayerStyle" : "fillTransparentStyle"
			}
		]
	},
	{
		"switchId" : "landSwitch",
		"switchLabel" : "Land",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "land",
				"uncheckedLayerStyle" : "backgroundOpaqueStyle",
				"checkedLayerStyle" : "backgroundTransparentStyle"
			}
		]
	},
	{
		"switchId" : "cityCouncilDistrictsSwitch",
		"switchLabel" : "City Council Districts",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "cityCouncilDistrictsLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "communityBoardSwitch",
		"switchLabel" : "Community Board Districts",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "communityBoardDistrictsLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "neighborhoodsPediacitiesSwitch",
		"switchLabel" : "Neighborhood Boundaries",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "neighborhoodsPediacitiesLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "SatelliteSwitch",
		"switchLabel" : "Satellite",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "satellite",
				"uncheckedLayerStyle" : "rasterTransparentStyle",
				"checkedLayerStyle" : "rasterOpaqueStyle"
			}
		]

	},
	{
		"switchId" : "allRoadsSwitch",
		"switchLabel" : "Show Roads",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-primary",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-secondary-tertiary",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-street",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-minor",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "roadPrimarySwitch",
		"switchLabel" : "Primary Roads",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-primary",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "roadSecondarySwitch",
		"switchLabel" : "Secondary Roads",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-secondary-tertiary",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "minorRoadsSwitch",
		"switchLabel" : "Minor Roads",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-minor",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "streetRoadsSwitch",
		"switchLabel" : "Street Roads",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-street",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	}
];
	var darkColor = '#000000';
	var lightColor = '';
	var cueColor = '#ff0000';
	var roadColor = '#ff0000';

var layerStyles = 
	{
		"rasterOpaqueStyle" : [
			{"property" : "raster-opacity", "propertyType" : "paint", "value" : 1}
		],
		"rasterTransparentStyle" : [
			{"property" : "raster-opacity", "propertyType" : "paint", "value" : 0}
		],
		"lineOpaqueStyle" : [
			{"property" : "line-opacity", "propertyType" : "paint", "value" : 1}
		],
		"lineTransparentStyle" : [
			{"property" : "line-opacity", "propertyType" : "paint", "value" : 0}
		],
		"fillOpaqueStyle" : [
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : 0}
		],
		"fillTransparentStyle" : [
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : 1}
		],
		"backgroundOpaqueStyle" : [
			{"property" : "background-opacity", "propertyType" : "paint", "value" : 0}
		],
		"backgroundTransparentStyle" : [
			{"property" : "background-opacity", "propertyType" : "paint", "value" : 1}
		],
		"lightMode" : [
			{"layerId" : "water", "property" : "fill-color", "propertyType" : "paint", "value" : "#000000"},
			{"layerId" : "land", "property" : "background-color", "propertyType" : "paint", "value" : "#ffffff"}
		],
		"darkMode" : [
			{"layerId" : "water", "property" : "fill-color", "propertyType" : "paint", "value" : "#ffffff"},
			{"layerId" : "land", "property" : "background-color", "propertyType" : "paint", "value" : "#000000"}
		],
		"emphasizeBoundary" : [
			{"property" : "line-color", "propertyType" : "paint", "value" : "#ff0000"},
			{"property" : "line-width", "propertyType" : "paint", "value" : 10}
		],
		"streetMode" : [
			{"road-primary" : {"color" : roadColor}},
			{"road-secondary-tertiary" : {"color" : roadColor}},
			{"road-street" : {"color" : roadColor}},
			{"road-minor" : {"color" : roadColor}},
			{"road-primary" : {"color" : roadColor}}
		]
	}