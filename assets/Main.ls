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
          "name": "Head",
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
          "name": "Head",
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
          "_$type": "RigidBody"
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
    }
  ]
}