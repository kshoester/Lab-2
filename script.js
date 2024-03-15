mapboxgl.accessToken = 'pk.eyJ1Ijoia3Nob2VzdGVyIiwiYSI6ImNsdG9jOXN3djBoMnYyaW1zYnRuZ3VkYzYifQ.Z976OphNTmOc_8gG7O6khQ';

const map = new mapboxgl.Map({
    container: 'my-map',
    style: 'mapbox://styles/kshoester/clts4o6wx00b301qs7j1sd8pn', /* Mapbox style created using Toronto census tracts data */
    center: [-79.39, 43.66], /* starting position */
    zoom: 12,
});

map.on('load', () => {

/* Adding ice rinks data (geojson) to map */
    /* add source */
    map.addSource('rinks-data',{ /* source id */
        type: 'geojson',
        data: 'https://kshoester.github.io/Lab-2/indoor-ice-rinks-data.geojson' /* link to data; be sure to publish repository first */
    });
    /* add layer */
    map.addLayer({
        'id': 'indoor-ice-rinks', /* layer id */
        'type': 'circle',
        'source': 'rinks-data', /* source id */
        'paint': {
            'circle-radius': 4.5,
            'circle-color': '#6388bf'
        }
    });

/* Adding green spaces data (vector tileset) to map */
    /* add source */
    map.addSource('gspaces-data', {  /* source id */
        type: 'vector',
        url: 'mapbox://kshoester.5iice3d4' /* mapbox tileset id; mapbox://username.xxxx (copy from tileset id) */
    });
    /* add layer */
    map.addLayer({
        'id': 'green-spaces', /* layer id */
        'type': 'fill',
        'source': 'gspaces-data', /* source id*/
        'paint': {
            'fill-color': '#8fc492',
            'fill-opacity': 0.4,
            'fill-outline-color': 'black'
        },
        'source-layer': 'Green_Spaces-21rd0u' /* tileset name (!!!) one shown on tileset homepage */
    },
        'indoor-ice-rinks' /* drawing order; places this layer below ice rinks */
    );

});