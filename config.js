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
		"dataVariable" : nycCommunityBoardDistricts
	}
];

var layerProperties = [
	{
		"layerId" : "cityCouncilDistrictsLayer",
		"layerType" : "line",
		"sourceId" : "cityCouncilDistrictsSource"

	},
	{
		"layerId" : "communityBoardDistrictsLayer",
		"layerType" : "line",
		"sourceId" : "communityBoardDistrictsSource"
	},
	{
		"layerId" : "neighborhoodsPediacitiesLayer",
		"layerType" : "line",
		"sourceId" : "neighborhoodsPediacitiesSource"
	}
];


var layerModes = [
	{
		"switchId" : "switchLightDarkMode",
		"switchLabel" : "Light Dark Mode",
		"layerStyle" : ""
	},
	{
		"switchId" : "cityCouncilDistrictsSwitch",
		"switchLabel" : "City Council Districts",
		"layerId" : "cityCouncilDistrictsLayer",
		"uncheckedLayerStyle" : "lineOpaqueStyle",
		"checkedLayerStyle" : "lineTransparentStyle"

	},
	{
		"switchId" : "communityBoardSwitch",
		"switchLabel" : "Community Board Districts",
		"layerId" : "communityBoardDistrictsLayer",
		"uncheckedLayerStyle" : "lineOpaqueStyle",
		"checkedLayerStyle" : "lineTransparentStyle"

	},
	{
		"switchId" : "neighborhoodsPediacitiesSwitch",
		"switchLabel" : "Neighborhood Boundaries",
		"layerId" : "neighborhoodsPediacitiesLayer",
		"uncheckedLayerStyle" : "lineOpaqueStyle",
		"checkedLayerStyle" : "lineTransparentStyle"
	},
	{
		"switchId" : "SatelliteSwitch",
		"switchLabel" : "Satellite",
		"layerId" : "satellite",
		"uncheckedLayerStyle" : "rasterOpaqueStyle",
		"checkedLayerStyle" : "rasterTransparentStyle"
	},
	{
		"switchId" : "templateSwitch",
		"switchLabel" : "Template Switch",
		"layerId" : "templateLayer",
		"layerStyle" : "templateStyle"
	}
];
	var darkColor = '#000000';
	var lightColor = '';
	var cueColor = '#ff0000';
	var roadColor = '#ff0000';

var layerStyles = 
	{
		"rasterOpaqueStyle" : [
			{"property" : "raster-opacity", "propertyType" : "paint", "value" : 0}
		],
		"rasterTransparentStyle" : [
			{"property" : "raster-opacity", "propertyType" : "paint", "value" : 1}
		],
		"lineOpaqueStyle" : [
			{"property" : "line-opacity", "propertyType" : "paint", "value" : 0}
		],
		"lineTransparentStyle" : [
			{"property" : "line-opacity", "propertyType" : "paint", "value" : 1}
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