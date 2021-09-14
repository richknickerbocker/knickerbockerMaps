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
		"switchLabel" : "Light Dark Mode"
		"paintMode" : ""
	},
	{
		"switchId" : "cityCouncilDistrictsSwitch",
		"switchLabel" : "City Council Districts",
		"switchType" : "visibility",
		"layerId" : "cityCouncilDistrictsLayer",
		"paintMode" : ""

	},
	{
		"switchId" : "communityBoardSwitch",
		"switchLabel" : "Community Board Districts",
		"switchType" : "visibility",
		"layerId" : "communityBoardDistrictsLayer",
		"paintMode" : ""

	},
	{
		"switchId" : "neighborhoodsPediacitiesSwitch",
		"switchLabel" : "Neighborhood Boundaries",
		"switchType" : "visibility",
		"layerId" : "neighborhoodsPediacitiesLayer",
		"paintMode" : ""

	}
];
	var darkColor = '#000000';
	var lightColor = '';
	var cueColor = '#ff0000';
	var roadColor = '#ff0000';

var mapStyles = 
	{
		"lightMode" : [
			{"layerId" : "water", "property" : "fill-color", "value" : "#000000"},
			{"layerId" : "land", "property" : "background-color", "value" : "#ffffff"}
		],
		"darkMode" : [
			{"layerId" : "water", "property" : "fill-color", "value" : "#ffffff"},
			{"layerId" : "land", "property" : "background-color", "value" : "#000000"}
		],
		"streetMode" : [
			{"road-primary" : {"color" : roadColor}},
			{"road-secondary-tertiary" : {"color" : roadColor}},
			{"road-street" : {"color" : roadColor}},
			{"road-minor" : {"color" : roadColor}},
			{"road-primary" : {"color" : roadColor}}
		]
	}