import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Deck, MapView } from '@deck.gl/core';
import { TileLayer, TripsLayer } from '@deck.gl/geo-layers';
import {
  BitmapLayer,
  PathLayer,
  GeoJsonLayer,
  ArcLayer,
} from '@deck.gl/layers';

@Component({
  selector: 'app-mymap',
  templateUrl: './mymap.component.html',
  styleUrls: ['./mymap.component.scss'],
})
export class MymapComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => { this.renderMap(); }, 1000);
    // this.renderMap();
  }

  renderMap() { 
    const AIR_PORTS =
      'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson';
    const INITIAL_VIEW_STATE = {
      latitude: 47.65,
      longitude: 7,
      zoom: 4.5,
      maxZoom: 20,
      maxPitch: 89,
      bearing: 0,
    };
    const showBorder = false,
      onTilesLoad = null;
    const devicePixelRatio =
      (typeof window !== 'undefined' && window.devicePixelRatio) || 1;

    function getTooltip({ tile }) {
      return tile && `tile: x: ${tile.x}, y: ${tile.y}, z: ${tile.z}`;
    }

    const tileLayer = new TileLayer({
      // https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames#Tile_servers
      data: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ],

      // Since these OSM tiles support HTTP/2, we can make many concurrent requests
      // and we aren't limited by the browser to a certain number per domain.
      maxRequests: 20,

      pickable: true,
      onViewportLoad: onTilesLoad,
      autoHighlight: showBorder,
      highlightColor: [60, 60, 60, 40],
      // https://wiki.openstreetmap.org/wiki/Zoom_levels
      minZoom: 0,
      maxZoom: 19,
      tileSize: 512 / devicePixelRatio,

      renderSubLayers: (props) => {
        const {
          bbox: { west, south, east, north },
        } = props.tile;

        return [
          new BitmapLayer(props, {
            data: null,
            image: props.data,
            bounds: [west, south, east, north],
          }),
          showBorder &&
            new PathLayer({
              id: `${props.id}-border`,
              data: [
                [
                  [west, north],
                  [west, south],
                  [east, south],
                  [east, north],
                  [west, north],
                ],
              ],
              getPath: (d) => d,
              getColor: [255, 0, 0],
              widthMinPixels: 4,
            }),
        ];
      },
    });


    

    const deckgl = new Deck({
      initialViewState: INITIAL_VIEW_STATE,
      controller: true,
      views: new MapView({ repeat: true }),
      canvas: "yesmine",
      style: {
        top:10
      },
      // getTooltip: getTooltip,
      // width: 200,
      // height: 200,
      layers: [
        tileLayer,
        new GeoJsonLayer({
          id: 'airports',
          data: AIR_PORTS,
          // Styles
          filled: true,
          pointRadiusMinPixels: 2,
          pointRadiusScale: 2000,
          getRadius: (f) => 11 - f.properties.scalerank,
          getFillColor: [200, 0, 80, 180],
          // Interactive props
          pickable: true,
          autoHighlight: true,
          onClick: (info) =>
            info.object &&
            alert(
              `${info.object.properties.name} (${info.object.properties.abbrev})`
            ),
        }),
        new ArcLayer({
          id: 'arcs',
          data: AIR_PORTS,
          dataTransform: (d) =>
            d.features.filter((f) => f.properties.scalerank < 4),
          // Styles
          getSourcePosition: (f) => [-0.4531566, 51.4709959], // London
          getTargetPosition: (f) => f.geometry.coordinates,
          getSourceColor: [0, 128, 200],
          getTargetColor: [200, 0, 80],
          getWidth: 1,
        }),
      ],
    });

    setTimeout(() => { 
      // deckgl.setProps({
      //   width: 300,
      //   height: 300,
        
      // });

      // deckgl.finalize();

    }, 2000);

  }
}
