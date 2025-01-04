var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "방1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7272821499044344,
          "pitch": 0.1758647838185894,
          "rotation": 3.141592653589793,
          "target": "1-2"
        },
        {
          "yaw": -1.114258935055771,
          "pitch": 0.15800293290777923,
          "rotation": 3.141592653589793,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2",
      "name": "방2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.768330942204278,
          "pitch": 0.2454670747230132,
          "rotation": 3.141592653589793,
          "target": "0-1"
        },
        {
          "yaw": -1.3056508246854577,
          "pitch": 0.2833746999881086,
          "rotation": 3.141592653589793,
          "target": "2-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3",
      "name": "방3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2906238147631974,
          "pitch": 0.28849745402988525,
          "rotation": 3.141592653589793,
          "target": "1-2"
        },
        {
          "yaw": 0.34638082239657564,
          "pitch": 0.150980161432825,
          "rotation": 3.141592653589793,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "노형모던테라스_22.4",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
