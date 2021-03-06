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
		"mapName": "Manhattan",
		"views": [
			{
				"center" : [-73.98006646462507, 40.79731141532304],
				"zoom" : 10.859652518297729,
				"pitch" : 0,
				"bearing" : 120,
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "New York City",
		"views": [
			{
				"center" : [-73.94760374673925, 40.71987834205498],
				"zoom" : 9.978052176095312,
				"pitch" : 0,
				"bearing" : 120
			}
		]
	},
	{
		"mapName": "Spuyten Duyvil Trail End",
		"views": [
			{
				"center" : [-73.91957740634719, 40.8766567303318],
				"zoom" : 18.68467954939521,
				"pitch" : 0,
				"bearing" : -133.1321799307957
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Harlem River Shipping Canal",
		"views": [
			{
				"center" : [-73.92579593430054, 40.878279723598894],
				"zoom" : 14.190953176720289,
				"pitch" : 0,
				"bearing" : -132.00000000000003
			}
		]
	},
	{
		"mapName": "Elm Tree",
		"views": [
			{
				"center" : [-73.91924555250007, 40.8775260170556],
				"zoom" : 21.0435353932869,
				"pitch" : 0,
				"bearing" : -132.00000000000003
			}
		]
	},
	{
		"mapName": "Spuyten Duyvil Shorefront Park 2",
			"views": [
			{
				"center" : [-73.9216460092592, 40.878176184105456],
				"zoom" : 17.16461513995972,
				"pitch" : 0,
				"bearing" : -132.00000000000003
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
	},
	{
		"mapName": "Spuyten Duyvil Shorefront Park Old",
			"views": [
			{
				"center" : [-73.9208, 40.8782],
				"zoom" : 17.5,
				"pitch" : 0,
				"bearing" : -132.00
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Henry Hudson Bridge",
			"views": [
			{
				"center" : [-73.92523296419908, 40.875938727446595],
				"zoom" : 14.469937886670298,
				"pitch" : 0,
				"bearing" : -132.00000000000003
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Inwood Hill Park",
			"views": [
			{
				"center" : [-73.92770430019756, 40.87400004918919],
				"zoom" : 15.102961323052842,
				"pitch" : 0,
				"bearing" : -132.00000000000003
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Harlem River",
			"views": [
			{
				"center" : [-73.9318257554201, 40.87842092754943],
				"zoom" : 14.258456202138976,
				"pitch" : 0,
				"bearing" : -132.00000000000003
			},
			{
				"center": [0, 0],
				"zoom": 9,
				"pitch": 0
			}
		]
	},
	{
		"mapName": "Manhattan Inset",
			"views": [
			{
				"center" : [-74.1180793559383, 41.14434992256494],
				"zoom" : 9.850060822797825,
				"pitch" : 0,
				"bearing" : -132.00000000000003
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
		"sourceId" : "boroughBoundariesSource",
		"layerId" : "boroughBoundariesLayer",
		"dataVariable" : nycBoroughBoundaries
	},
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
		"layerId" : "boroughBoundariesLayer",
		"layerType" : "line",
		"sourceId" : "boroughBoundariesSource",
		"defaultPaint" : {
			"line-width" : 5,
			"line-color" : "#000000",
			"line-opacity" : 1
		} 
	},
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
			"line-width" : ["interpolate",["exponential", 1.5],["zoom"],13,0.5,14,1,15,1,18,4],
			"line-color" : "#ffffff",
			"line-opacity" : 1,
			"line-dasharray" : ["step",["zoom"],["literal", [5, 0.5]],15,["literal", [4, 0.5]],16,["literal", [4, 0.45]]]
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
				"uncheckedLayerStyle" : "backgroundTransparentStyle",
				"checkedLayerStyle" : "backgroundOpaqueStyle"
			},
			{
				"layerId" : "hillshade",
				"uncheckedLayerStyle" : "hillshadeTransparentStyle",
				"checkedLayerStyle" : "hillshadeOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "parksSwitch",
		"switchLabel" : "Parks",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "pitch-outline",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "landuse",
				"uncheckedLayerStyle" : "fillTransparentStyle",
				"checkedLayerStyle" : "fillOpaqueStyle"
			},
			{
				"layerId" : "rkb-polygons",
				"uncheckedLayerStyle" : "fillTransparentStyle",
				"checkedLayerStyle" : "fillOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "pathsSwitch",
		"switchLabel" : "Paths",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "road-pedestrian-polygon-pattern",
				"uncheckedLayerStyle" : "fillTransparentStyle",
				"checkedLayerStyle" : "fillOpaqueStyle"
			},
			{
				"layerId" : "road-pedestrian-polygon-fill",
				"uncheckedLayerStyle" : "fillTransparentStyle",
				"checkedLayerStyle" : "fillOpaqueStyle"
			},
			{
				"layerId" : "road-pedestrian",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-steps",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-path",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-path-cycleway-piste",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-path-trail",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-steps-bg",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-path-bg",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "walkingPathsLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "buildingExtrudedSwitch",
		"switchLabel" : "Buildings",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "building-extrusion",
				"uncheckedLayerStyle" : "extrusionTransparentStyle",
				"checkedLayerStyle" : "extrusionOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "boundariesSwitch",
		"switchLabel" : "Boundaries",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "boroughBoundariesLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "cityCouncilDistrictsLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "communityBoardDistrictsLayer",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
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
		"switchLabel" : "Roads",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "road-motorway-trunk",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "bridge-motorway-trunk",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "bridge-motorway-trunk-2",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
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
				"layerId" : "bridge-primary-secondary-tertiary",
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
			},
			{
				"layerId" : "bridge-street-minor",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "transitSwitch",
		"switchLabel" : "Transit",
		"isChecked" : true,
		"switchedLayers" : [
			{
				"layerId" : "aeroway-line",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "aeroway-polygon",
				"uncheckedLayerStyle" : "fillTransparentStyle",
				"checkedLayerStyle" : "fillOpaqueStyle"
			},
			{
				"layerId" : "ferry-auto",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "ferry",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-rail-tracks",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			},
			{
				"layerId" : "road-rail",
				"uncheckedLayerStyle" : "lineTransparentStyle",
				"checkedLayerStyle" : "lineOpaqueStyle"
			}
		]
	},
	{
		"switchId" : "labelsSwitch",
		"switchLabel" : "Labels",
		"isChecked" : false,
		"switchedLayers" : [
			{
				"layerId" : "road-label",
				"uncheckedLayerStyle" : "textTransparentStyle",
				"checkedLayerStyle" : "textOpaqueStyle"
			},
			{
				"layerId" : "road-path-pedestrian-label",
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
			{"property" : "raster-opacity", "propertyType" : "paint", "value" : .5}
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
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : 1}
		],
		"fillTransparentStyle" : [
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : 0}
		],
		"backgroundOpaqueStyle" : [
			{"property" : "background-opacity", "propertyType" : "paint", "value" : 1}
		],
		"backgroundTransparentStyle" : [
			{"property" : "background-opacity", "propertyType" : "paint", "value" : 0}
		],
		"extrusionOpaqueStyle" : [
			{"property" : "fill-extrusion-opacity", "propertyType" : "paint", "value" : .3}
		],
		"extrusionTransparentStyle" : [
			{"property" : "fill-extrusion-opacity", "propertyType" : "paint", "value" : 0}
		],
		"textOpaqueStyle" : [
			{"property" : "text-opacity", "propertyType" : "paint", "value" : 1}
		],
		"textTransparentStyle" : [
			{"property" : "text-opacity", "propertyType" : "paint", "value" : 0}
		],
		"hillshadeOpaqueStyle" : [
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : ["match",["get", "level"],[67, 56],0.1,[89, 78],0.07,0.15]}
		],
		"hillshadeTransparentStyle" : [
			{"property" : "fill-opacity", "propertyType" : "paint", "value" : 0}
		] 
	}