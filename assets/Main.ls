{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "width": 1920,
  "height": 1080,
  "autoDestroyAtClosed": true,
  "_$comp": [
    {
      "_$type": "19b4c531-a871-4be7-9eb5-a1fd8dfceb37",
      "scriptPath": "../src/scripts/GameManager.ts",
      "scorePanel": {
        "_$ref": "tx5rn9d8"
      },
      "txt_countDown": {
        "_$ref": "wncizme1"
      },
      "gameOverPanel": {
        "_$ref": "w2lc1d60"
      },
      "pausePanel": {
        "_$ref": "wte4nz1h"
      },
      "btn_pause": {
        "_$ref": "fp1z73u0"
      }
    }
  ],
  "_$child": [
    {
      "_$id": "twcmqgl6",
      "_$type": "Image",
      "name": "SkyBackground",
      "width": 1920.6095791001449,
      "height": 614.5950653120456,
      "skin": "res://f25cdc2e-adb2-4a14-9bca-9562b48dbf28",
      "color": "#ffffff"
    },
    {
      "_$id": "jagnu2oz",
      "_$type": "Image",
      "name": "StadiumBackground",
      "width": 1921.3126270013106,
      "height": 685.9086078394669,
      "skin": "res://b14510ea-77a3-4bb5-ae89-7dd9368b9927",
      "color": "#ffffff"
    },
    {
      "_$id": "q9qpx3t0",
      "_$type": "Image",
      "name": "fieldBackground",
      "y": 686,
      "width": 1921.1698864001019,
      "height": 215.70021179641878,
      "skin": "res://5ed952d0-a206-4507-949c-0a8b9419bed7",
      "color": "#ffffff"
    },
    {
      "_$id": "siuvay03",
      "_$type": "Image",
      "name": "ButtonHolderBackground",
      "y": 901,
      "width": 1923.3058505555625,
      "height": 232.8212345409378,
      "skin": "res://763da51f-cecc-4ab1-8c0a-90fba9ebfe03",
      "color": "#ffffff"
    },
    {
      "_$id": "q0d3qw2f",
      "_$type": "Image",
      "name": "middlePole",
      "x": 952,
      "y": 634,
      "width": 14,
      "height": 208,
      "skin": "res://b0a44fda-6da7-4870-8116-867d7e00c645",
      "useSourceSize": true,
      "color": "#ffffff",
      "_$comp": [
        {
          "_$type": "RigidBody",
          "type": "static"
        },
        {
          "_$id": "i2qu",
          "_$type": "BoxCollider",
          "width": 14,
          "height": 208
        }
      ]
    },
    {
      "_$id": "tx5rn9d8",
      "_$type": "Image",
      "name": "ScorePanel",
      "x": 968,
      "y": 117,
      "width": 612,
      "height": 204,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "skin": "res://37d83897-40da-4ea3-a6dd-e0608961938b",
      "color": "#ffffff",
      "_$comp": [
        {
          "_$type": "17535e28-7d79-486a-b11e-05ff711d4894",
          "scriptPath": "../src/scripts/ScorePanel.ts",
          "txt_TimeCount": {
            "_$ref": "j242v9ed"
          },
          "txt_MyScore": {
            "_$ref": "2edf6cki"
          },
          "txt_AIScore": {
            "_$ref": "soak4omh"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "j242v9ed",
          "_$type": "Text",
          "name": "txt_TimeCount",
          "x": 239,
          "y": 64,
          "width": 131,
          "height": 114,
          "text": "90",
          "fontSize": 80,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "2edf6cki",
          "_$type": "Text",
          "name": "txt_MyScore",
          "x": 27,
          "y": 72,
          "width": 153,
          "height": 97,
          "text": "0",
          "fontSize": 60,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "soak4omh",
          "_$type": "Text",
          "name": "txt_AIScore",
          "x": 425,
          "y": 72,
          "width": 153,
          "height": 97,
          "text": "0",
          "fontSize": 60,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "3wco5bnt",
          "_$type": "Text",
          "name": "txt_PlayerName",
          "x": 24,
          "y": 4,
          "width": 264,
          "height": 52,
          "text": "Player",
          "fontSize": 30,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "5dacfzxi",
          "_$type": "Text",
          "name": "txt_AIName",
          "x": 322,
          "y": 6,
          "width": 259,
          "height": 47,
          "text": "AI",
          "fontSize": 30,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        }
      ]
    },
    {
      "_$id": "v1xllx3f",
      "_$type": "Image",
      "name": "btn_left",
      "x": 236,
      "y": 902,
      "width": 153,
      "height": 153,
      "skin": "res://61356888-f1af-4bca-b201-9a364eb95021",
      "color": "#ffffff"
    },
    {
      "_$id": "ikxar72p",
      "_$type": "Image",
      "name": "btn_right",
      "x": 577,
      "y": 902,
      "width": 153,
      "height": 153,
      "skin": "res://e8468aef-6475-463a-8513-cf74b8ea83e9",
      "color": "#ffffff"
    },
    {
      "_$id": "zu18zyr1",
      "_$type": "Image",
      "name": "btn_jump",
      "x": 1400,
      "y": 902,
      "width": 153,
      "height": 153,
      "skin": "res://c0460b47-743c-4be7-b84a-22cf981f4345",
      "color": "#ffffff"
    },
    {
      "_$id": "r0ymlppq",
      "_$type": "Sprite",
      "name": "MyPlayer",
      "x": 694,
      "y": 699.5,
      "width": 126,
      "height": 163,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_$comp": [
        {
          "_$type": "2c1d05f7-aaa5-4a18-9259-354d9d23e03a",
          "scriptPath": "../src/scripts/MyPlayerController.ts",
          "shoe": {
            "_$ref": "awmxl0qp"
          },
          "btn_left": {
            "_$ref": "v1xllx3f"
          },
          "btn_right": {
            "_$ref": "ikxar72p"
          },
          "btn_jump": {
            "_$ref": "zu18zyr1"
          }
        },
        {
          "_$type": "RigidBody",
          "gravityScale": 3,
          "allowSleep": false,
          "allowRotation": false
        },
        {
          "_$id": "h6nr",
          "_$type": "CircleCollider",
          "x": -1,
          "y": -17,
          "friction": 0.8,
          "radius": 63
        }
      ],
      "_$child": [
        {
          "_$id": "nij8ahoq",
          "_$type": "Image",
          "name": "head",
          "x": 62,
          "width": 124,
          "height": 124,
          "anchorX": 0.5,
          "skin": "res://bcd7364e-6387-4aca-b0c8-2541dac0f092",
          "color": "#ffffff"
        },
        {
          "_$id": "awmxl0qp",
          "_$type": "Image",
          "name": "Shoe",
          "x": 69,
          "y": 129,
          "width": 114,
          "height": 68,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "skin": "res://024c9615-166e-49e4-8f00-1fd878cf0d49",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "n5uqtxle",
      "_$type": "Sprite",
      "name": "AIPlayer",
      "x": 1263,
      "y": 702,
      "width": 126,
      "height": 163,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "_$comp": [
        {
          "_$type": "RigidBody",
          "gravityScale": 3,
          "allowSleep": false,
          "allowRotation": false
        },
        {
          "_$id": "h6nr",
          "_$type": "CircleCollider",
          "x": -1,
          "y": -17,
          "friction": 0.8,
          "radius": 63
        },
        {
          "_$type": "71396ae3-463f-42d1-a298-d6b3ac6b556d",
          "scriptPath": "../src/scripts/AIPlayerController.ts",
          "ball": {
            "_$ref": "7m04tfa7"
          },
          "shoe": {
            "_$ref": "el971jwd"
          }
        }
      ],
      "_$child": [
        {
          "_$id": "cfcm6lj5",
          "_$type": "Image",
          "name": "head",
          "x": 62,
          "width": 124,
          "height": 124,
          "anchorX": 0.5,
          "scaleX": -1,
          "skin": "res://bcd7364e-6387-4aca-b0c8-2541dac0f092",
          "color": "#ffffff"
        },
        {
          "_$id": "el971jwd",
          "_$type": "Image",
          "name": "Shoe",
          "x": 69,
          "y": 129,
          "width": 114,
          "height": 68,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "scaleX": -1,
          "skin": "res://024c9615-166e-49e4-8f00-1fd878cf0d49",
          "color": "#ffffff"
        }
      ]
    },
    {
      "_$id": "dwultic0",
      "_$type": "Sprite",
      "name": "Border",
      "y": -56,
      "width": 1920,
      "height": 1136,
      "_$child": [
        {
          "_$id": "85ljrxwk",
          "_$type": "Sprite",
          "name": "GroundCollider",
          "y": 871,
          "width": 1920,
          "height": 16,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "7kyj",
              "_$type": "BoxCollider",
              "friction": 0.5,
              "density": 100,
              "width": 1920,
              "height": 16
            }
          ]
        },
        {
          "_$id": "1d8gwug5",
          "_$type": "Sprite",
          "name": "LeftAirWall",
          "x": 260,
          "y": 56,
          "width": 16,
          "height": 1080,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "rqdb",
              "_$type": "BoxCollider",
              "width": 16,
              "height": 1080
            }
          ]
        },
        {
          "_$id": "uwl9gcjy",
          "_$type": "Sprite",
          "name": "RightAirWall",
          "x": 1740,
          "width": 16,
          "height": 1080,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "rqdb",
              "_$type": "BoxCollider",
              "width": 16,
              "height": 1080
            }
          ]
        },
        {
          "_$id": "5cc0cl5e",
          "_$type": "Sprite",
          "name": "TopCollider",
          "y": 56,
          "width": 1920,
          "height": 16,
          "_$comp": [
            {
              "_$type": "RigidBody",
              "type": "static"
            },
            {
              "_$id": "7kyj",
              "_$type": "BoxCollider",
              "friction": 0.8,
              "density": 100,
              "width": 1920,
              "height": 16
            }
          ]
        }
      ]
    },
    {
      "_$id": "7m04tfa7",
      "_$type": "Image",
      "name": "Ball",
      "x": 826,
      "y": 369,
      "width": 82,
      "height": 82,
      "anchorX": 0.5,
      "anchorY": 0.5,
      "skin": "res://cdbce709-d547-4ab2-8360-8499dbee4265",
      "color": "#ffffff",
      "_$comp": [
        {
          "_$type": "RigidBody",
          "type": "static"
        },
        {
          "_$id": "vxec",
          "_$type": "CircleCollider",
          "restitution": 0.9,
          "density": 8,
          "radius": 41
        },
        {
          "_$type": "474cd075-e063-4572-ba1d-7242e2bfba1c",
          "scriptPath": "../src/scripts/Ball.ts"
        }
      ]
    },
    {
      "_$id": "wncizme1",
      "_$type": "Text",
      "name": "txt_CountDown",
      "width": 1920,
      "height": 1200,
      "text": "3",
      "fontSize": 400,
      "color": "rgba(0, 255, 61, 1)",
      "bold": true,
      "align": "center",
      "valign": "middle",
      "leading": 2
    },
    {
      "_$id": "fp1z73u0",
      "_$type": "Button",
      "name": "btn_pause",
      "x": 35,
      "y": 28,
      "width": 182,
      "height": 182,
      "visible": false,
      "_mouseState": 2,
      "stateNum": 1,
      "skin": "res://269fabd8-a321-4972-b3d7-56a248b6032a",
      "label": "",
      "labelSize": 20,
      "labelAlign": "center",
      "labelVAlign": "middle"
    },
    {
      "_$id": "w2lc1d60",
      "_$type": "Sprite",
      "name": "GameOverPanel",
      "width": 1920,
      "height": 1080,
      "visible": false,
      "_mouseState": 2,
      "_$child": [
        {
          "_$id": "pnhucssr",
          "_$type": "Image",
          "name": "Bg",
          "width": 1920,
          "height": 1080,
          "alpha": 0.8,
          "skin": "res://8daa4e1f-cba7-4117-b0d3-eb5c7ad9eefa",
          "sizeGrid": "13,11,12,11,0",
          "color": "#ffffff"
        },
        {
          "_$id": "gun5pe5l",
          "_$type": "Text",
          "name": "Txt_title",
          "x": 379,
          "y": 146,
          "width": 1162,
          "height": 307,
          "text": "GAME OVER",
          "fontSize": 200,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "ike7mclj",
          "_$type": "Text",
          "name": "txt_result",
          "x": 379,
          "y": 419,
          "width": 1162,
          "height": 307,
          "text": "YOU WIN",
          "fontSize": 200,
          "color": "rgba(229, 49, 49, 1)",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "zqxflusd",
          "_$type": "Button",
          "name": "btn_menu",
          "x": 800,
          "y": 800,
          "width": 221,
          "height": 82,
          "anchorX": 0.5,
          "_mouseState": 2,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "菜单",
          "labelSize": 50,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "8tovgwam",
          "_$type": "Button",
          "name": "btn_again",
          "x": 1120,
          "y": 800,
          "width": 221,
          "height": 82,
          "anchorX": 0.5,
          "_mouseState": 2,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "再玩一次",
          "labelSize": 50,
          "labelAlign": "center",
          "labelVAlign": "middle"
        }
      ]
    },
    {
      "_$id": "wte4nz1h",
      "_$type": "Sprite",
      "name": "PausePanel",
      "width": 1920,
      "height": 1080,
      "visible": false,
      "_mouseState": 2,
      "_$child": [
        {
          "_$id": "6uo7ke37",
          "_$type": "Image",
          "name": "Bg",
          "width": 1920,
          "height": 1080,
          "alpha": 0.8,
          "skin": "res://8daa4e1f-cba7-4117-b0d3-eb5c7ad9eefa",
          "sizeGrid": "13,11,12,11,0",
          "color": "#ffffff"
        },
        {
          "_$id": "dfkcmvp3",
          "_$type": "Text",
          "name": "Txt_title",
          "x": 379,
          "y": 146,
          "width": 1162,
          "height": 307,
          "text": "PAUSE",
          "fontSize": 200,
          "color": "#FFFFFF",
          "bold": true,
          "align": "center",
          "valign": "middle",
          "leading": 2
        },
        {
          "_$id": "jzwz29v1",
          "_$type": "Button",
          "name": "btn_menu",
          "x": 800,
          "y": 540,
          "width": 221,
          "height": 82,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "_mouseState": 2,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "菜单",
          "labelSize": 50,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "n2j5zke1",
          "_$type": "Button",
          "name": "btn_resume",
          "x": 1120,
          "y": 540,
          "width": 221,
          "height": 82,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "_mouseState": 2,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "继续",
          "labelSize": 50,
          "labelAlign": "center",
          "labelVAlign": "middle"
        },
        {
          "_$id": "mk0tn6yg",
          "_$type": "Button",
          "name": "btn_restart",
          "x": 959,
          "y": 921,
          "width": 305,
          "height": 134,
          "anchorX": 0.5,
          "anchorY": 0.5,
          "_mouseState": 2,
          "skin": "res://d4cfd6a8-0d0a-475b-ac93-d85eaa646936",
          "label": "重新开始",
          "labelSize": 50,
          "labelAlign": "center",
          "labelVAlign": "middle"
        }
      ]
    }
  ]
}