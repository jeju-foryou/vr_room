var APP_DATA = {
  "scenes": [
    {
      "id": "0-vr--",
      "name": "vr 룸 입장",
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
        "yaw": 0.005406083658167304,
        "pitch": 0.04290314947574103,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -0.3890668163480697,
          "pitch": 0.22220537778677496,
          "rotation": 0,
          "target": "1-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-1-",
      "name": "1층 현관",
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
          "yaw": 2.594682259899413,
          "pitch": 0.029767983492378747,
          "rotation": 0,
          "target": "2-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.584452001473146,
          "pitch": -0.33127299063121995,
          "title": "중문 동작감지센서",
          "text": "자동중문"
        }
      ]
    },
    {
      "id": "2-1-",
      "name": "1층 신발장",
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
          "yaw": -0.5263817208291321,
          "pitch": 0.10761532994987277,
          "rotation": 0,
          "target": "3-1-"
        },
        {
          "yaw": 2.6394306354721504,
          "pitch": 0.10498892585668429,
          "rotation": 0,
          "target": "1-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.33909165402808306,
          "pitch": -0.7548592992368626,
          "title": "자동중문 동작감지센서",
          "text": "<span style=\"font-size: 16px;\">외부는 센서로 인식해 열리고 내부는 스위치로 열림</span>"
        }
      ]
    },
    {
      "id": "3-1-",
      "name": "1층 중문앞",
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
          "yaw": -0.05552943685074041,
          "pitch": -0.039722438323366305,
          "rotation": 0,
          "target": "2-1-"
        },
        {
          "yaw": -1.0712633304765316,
          "pitch": 0.026573092062937675,
          "rotation": 1.5707963267948966,
          "target": "4-1-"
        },
        {
          "yaw": -2.2628599704453976,
          "pitch": -0.0004013304950145624,
          "rotation": 4.71238898038469,
          "target": "6-1-"
        },
        {
          "yaw": -1.6027576421972185,
          "pitch": 0.07986728567403212,
          "rotation": 1.5707963267948966,
          "target": "8-1-"
        },
        {
          "yaw": -1.7853791692469159,
          "pitch": -0.054394763999120244,
          "rotation": 4.71238898038469,
          "target": "11-1-_1"
        },
        {
          "yaw": 1.4920256949789188,
          "pitch": 0.10531282079283066,
          "rotation": 0,
          "target": "5-1--"
        },
        {
          "yaw": 2.3097165186626345,
          "pitch": -0.056021937281913736,
          "rotation": 4.71238898038469,
          "target": "12-1-_2"
        },
        {
          "yaw": 2.9952694264898536,
          "pitch": -0.24849695703225905,
          "rotation": 0,
          "target": "13--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.728820191663228,
          "pitch": 0.21119659190657813,
          "title": "붙박이장",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">붙박이장</span>"
        },
        {
          "yaw": -0.07681253983534653,
          "pitch": -0.3326082549548097,
          "title": "자동중문",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">자동중문</span>"
        },
        {
          "yaw": -0.6241553904189754,
          "pitch": 0.15467634647144557,
          "title": "자동중문 스위치",
          "text": "<div><span style=\"font-size: 16px;\">외부는 센서로 인식해 열리고 내부는 스위치로 열림</span></div>"
        }
      ]
    },
    {
      "id": "4-1-",
      "name": "1층 거실",
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
        "yaw": 3.101916957601027,
        "pitch": 0.06901811002620661,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 3.0196696138456414,
          "pitch": 0.08206362961902691,
          "rotation": 0,
          "target": "6-1-"
        },
        {
          "yaw": -2.678545256041261,
          "pitch": 0.04715891795965632,
          "rotation": 0,
          "target": "11-1-_1"
        },
        {
          "yaw": -2.548128195501068,
          "pitch": -0.07759212631540535,
          "rotation": 1.5707963267948966,
          "target": "8-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.027249354285135752,
          "pitch": -0.6570699217386338,
          "title": "시스템 에어컨",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">시스템 에어컨</span><br>"
        }
      ]
    },
    {
      "id": "5-1--",
      "name": "1층 거실 화장실",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-1-",
      "name": "1층 주방",
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
        "yaw": -2.9529918901037018,
        "pitch": 0.11430929517220001,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 0.2953896913891647,
          "pitch": 0.04159741332469302,
          "rotation": 0,
          "target": "7-1-"
        },
        {
          "yaw": -3.022448449426065,
          "pitch": 0.026046193660572925,
          "rotation": 0,
          "target": "4-1-"
        },
        {
          "yaw": 2.434072909610382,
          "pitch": 0.08303158159795387,
          "rotation": 1.5707963267948966,
          "target": "8-1-"
        },
        {
          "yaw": 2.2099963129466893,
          "pitch": -0.07002223401335428,
          "rotation": 4.71238898038469,
          "target": "11-1-_1"
        },
        {
          "yaw": -2.0634223730785095,
          "pitch": 0.01814275961615941,
          "rotation": 3.141592653589793,
          "target": "3-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.14305390268359552,
          "pitch": 0.18672430766375037,
          "title": "인덕션(포함)",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">인덕션(포함)</span>"
        },
        {
          "yaw": -1.4046739322118977,
          "pitch": 0.4856431097430445,
          "title": "식기세척기(포함)",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">식기세척기(포함)</span>"
        },
        {
          "yaw": -3.0207249554540887,
          "pitch": -0.1341684374869967,
          "title": "시스템 에어컨(포함)",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">시스템 에어컨(포함)</span>"
        }
      ]
    },
    {
      "id": "7-1-",
      "name": "1층 세탁실",
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
          "yaw": 0.015542825651550629,
          "pitch": -0.11932708644705592,
          "rotation": 0,
          "target": "6-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-1-",
      "name": "1층 안방",
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
        "yaw": 1.0533834709911094,
        "pitch": 0.024443476006505094,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 0.18753492689923768,
          "pitch": -0.03934069017775066,
          "rotation": 0,
          "target": "4-1-"
        },
        {
          "yaw": 1.7154255320291636,
          "pitch": 0.029888862594006582,
          "rotation": 0,
          "target": "9-1--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.0413361451454133,
          "pitch": -0.3813120148110958,
          "title": "시스템 에어컨(포함)",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">시스템 에어컨(포함)</span>"
        }
      ]
    },
    {
      "id": "9-1--",
      "name": "1층 안방 화장대",
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
        "yaw": -1.4522451215843972,
        "pitch": -0.015101892991888022,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -1.3832644667791936,
          "pitch": -0.015423201086738558,
          "rotation": 1.5707963267948966,
          "target": "8-1-"
        },
        {
          "yaw": 1.943365231094491,
          "pitch": 0.10680698990454474,
          "rotation": 0,
          "target": "10-1--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-1--",
      "name": "1층 안방 화장실",
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
        "yaw": -1.5420585260792041,
        "pitch": 0.0746141730013008,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -1.39277292299127,
          "pitch": 0.09519056335243548,
          "rotation": 3.141592653589793,
          "target": "9-1--"
        },
        {
          "yaw": -1.399243405938476,
          "pitch": -0.07064983745356201,
          "rotation": 1.5707963267948966,
          "target": "8-1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-1-_1",
      "name": "1층 작은방_1",
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
        "yaw": 2.453202324799066,
        "pitch": 0.11745476071427596,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": 2.7676799294256007,
          "pitch": 0.048388230031289226,
          "rotation": 0,
          "target": "4-1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5845929090982978,
          "pitch": 0.0026913077453656342,
          "title": "다용도실",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">다용도실</span>"
        }
      ]
    },
    {
      "id": "12-1-_2",
      "name": "1층 작은방_2",
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
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "13--",
      "name": "복층 계단",
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
          "yaw": 1.8638808486168976,
          "pitch": 0.6063031044014071,
          "rotation": 3.141592653589793,
          "target": "3-1-"
        },
        {
          "yaw": 0.1784700585593022,
          "pitch": 0.19696927408338638,
          "rotation": 0,
          "target": "14--"
        },
        {
          "yaw": -1.6400020819329075,
          "pitch": 0.010485203894369022,
          "rotation": 4.71238898038469,
          "target": "15--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14--",
      "name": "복층 작은방",
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
          "yaw": -0.47472089632173464,
          "pitch": 0.2205691726981236,
          "rotation": 0,
          "target": "13--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15--",
      "name": "복층 거실",
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
          "yaw": 0.06270592531503638,
          "pitch": 0.021242351752327693,
          "rotation": 0,
          "target": "18--"
        },
        {
          "yaw": -1.3753784653713197,
          "pitch": 0.03862247533363394,
          "rotation": 0,
          "target": "17--"
        },
        {
          "yaw": -1.1383721181017812,
          "pitch": -0.046268663733743054,
          "rotation": 1.5707963267948966,
          "target": "13--"
        },
        {
          "yaw": 1.094608054584679,
          "pitch": 0.04958408556205285,
          "rotation": 0,
          "target": "16--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16--",
      "name": "복층 안쪽방",
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
        "yaw": -1.1912548313360887,
        "pitch": 0.01668247058493222,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -1.1026453368917402,
          "pitch": 0.021040710219020653,
          "rotation": 0,
          "target": "15--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17--",
      "name": "복층 화장실",
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
        "yaw": -0.6418099970981483,
        "pitch": 0.07834488165136477,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -0.5301396791413033,
          "pitch": -0.027400934751021566,
          "rotation": 1.5707963267948966,
          "target": "15--"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18--",
      "name": "복층 테라스",
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
        "yaw": -0.028369206745388453,
        "pitch": -0.059852658048470175,
        "fov": 1.3635740115987254
      },
      "linkHotspots": [
        {
          "yaw": -1.7746266678386746e-9,
          "pitch": 0.015542793063135107,
          "rotation": 0,
          "target": "15--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.01380715548687661,
          "pitch": -0.6461292937221081,
          "title": "어닝(포함)",
          "text": "<span style=\"font-size: 16px; background-color: rgba(103, 115, 131, 0.8);\">어닝(포함)</span>"
        }
      ]
    }
  ],
  "name": "도남위더스빌",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
