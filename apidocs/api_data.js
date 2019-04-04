define({ "api": [
  {
    "type": "GET",
    "url": "/activities/scheduledactivity",
    "title": "Get All Scheduled Activities",
    "name": "GetScheduledActivity",
    "group": "Activities",
    "version": "0.0.0",
    "description": "<p>This is a API which designed for peeking activity instances.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pin",
            "description": "<p>Pin of the patient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Result",
            "description": "<p>Result of list of existing activities for the patient with the pin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on Success:",
          "content": "{\n    \"activities\": [\n        {\n            \"activityInstanceID\": \"625\",\n            \"nextDueAt\": \"Mon Mar 11 04:59:00 MST 2019\",\n            \"activityTitle\": \"Epilepsy Weekly Survey\",\n            \"description\": \"Weekly Activity To be completed for Epilepsy disease patients\",\n            \"state\": \"pending\",\n            \"sequence\": \"{\\\"sequence\\\":[\\\"PATTERNCOMPARISON\\\"],\\\"parentactivity\\\":\\\"PATTERNCOMPARISON\\\"}\"\n        }\n    ],\n    \"showEnhancedContent\": false,\n    \"status\": \"SUCCESS\",\n    \"message\": \"\",\n    \"pin\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The PIN is invalid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "JsonError",
            "description": "<p>The JSON is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response:",
          "content": "{\n \"developerMessage\": null,\n \"message\": \"The PIN is invalid\",\n \"code\": 0,\n \"status\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/ActivityInstance.java",
    "groupTitle": "Activities"
  },
  {
    "type": "GET",
    "url": "/activities/activityinstance/{activityInstanceId}",
    "title": "Get Specific Activity",
    "name": "GetSpecificActivityById",
    "group": "Activities",
    "version": "0.0.0",
    "description": "<p>This is a API which designed for peeking a activity instance.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityInstanceId",
            "description": "<p>activity instance's Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pin",
            "description": "<p>Pin of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of param:",
          "content": "{\"pin\": 1004}",
          "type": "JSON"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "Result",
            "description": "<p>Result of the activity</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on Success:",
          "content": "{\n    \"sequences\": [\n        \"PATTERNCOMPARISON\"\n    ],\n    \"activityName\": \"Epilepsy Weekly Survey\",\n    \"parentactivity\": \"625\",\n    \"startTime\": \"Sat Mar 09 22:05:17 MST 2019\",\n    \"endTime\": \"Mon Mar 11 04:59:00 MST 2019\",\n    \"state\": \"pending\",\n    \"activitySequence\": [\n        {\n            \"activityBlockId\": \"PATTERNCOMPARISON\"\n        }\n    ],\n    \"showGame\": false,\n    \"status\": \"SUCCESS\",\n    \"message\": \"\",\n    \"pin\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The PIN is invalid</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Pin parameter is mandatory</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "JsonError",
            "description": "<p>The JSON is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response:",
          "content": "{\n \"developerMessage\": null,\n \"message\": \"The PIN is invalid\",\n \"code\": 0,\n \"status\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/ActivityInstance.java",
    "groupTitle": "Activities"
  },
  {
    "type": "POST",
    "url": "/activities/activityinstanceresult/{activityInstanceId}",
    "title": "Submit a New Activity Result",
    "name": "PostActivityInstanceResult",
    "group": "Activity",
    "version": "0.0.0",
    "description": "<p>This is a API which designed for submitting a activity result.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "activityInstanceId",
            "description": "<p>activity instance's Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pin",
            "description": "<p>Pin of the patient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example of param:",
          "content": "{\"pin\": 4003}",
          "type": "JSON"
        }
      ]
    },
    "examples": [
      {
        "title": "Example of PATTERNCOMPARISON:",
        "content": "{\n    \"activityInstanceID\": 625,\n    \"timeStamp\": 1552196109000,\n    \"activityResults\": [\n        {\n            \"activityBlockId\": \"PATTERNCOMPARISON\",\n            \"screenWidth\": 1920,\n            \"screenHeight\": 1080,\n            \"timeTakenToComplete\": 11000,\n            \"answers\": [\n                {\n                    \"result\": true,\n                    \"timeTaken\": 6932,\n                    \"questionIndex\": 1,\n                    \"pattern\": \"11\"\n                },\n                {\n                    \"result\": false,\n                    \"timeTaken\": 2629,\n                    \"questionIndex\": 2,\n                    \"pattern\": \"01\"\n                },\n                {\n                    \"result\": true,\n                    \"timeTaken\": 1626,\n                    \"questionIndex\": 3,\n                    \"pattern\": \"11\"\n                },\n                {\n                    \"result\": false,\n                    \"timeTaken\": 2350,\n                    \"questionIndex\": 4,\n                    \"pattern\": \"01\"\n                },\n                {\n                    \"result\": true,\n                    \"timeTaken\": 12974,\n                    \"questionIndex\": 5,\n                    \"pattern\": \"00\"\n                }\n            ]\n        }\n    ]\n}",
        "type": "json"
      },
      {
        "title": "Example of FINGERTAPPING:",
        "content": "{\n    \"activityInstanceID\": 616,\n    \"timeStamp\": 1552973093474,\n    \"activityResults\": [\n        {\n            \"activityBlockId\": \"FINGERTAPPING\",\n            \"timeToTap\": 5,\n            \"screenWidth\": 1920,\n            \"screenHeight\": 1080,\n            \"timeTakenToComplete\": 11000,\n            \"answers\": [\n                {\n                    \"Trial\": \"t1\",\n                    \"operatingHand\": \"right\",\n                    \"tapNumber\": 11\n                },\n                {\n                    \"Trial\": \"t2\",\n                    \"operatingHand\": \"left\",\n                    \"tapNumber\": 3\n                }\n            ]\n        }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on Success:",
          "content": "{\n    \"status\": \"SUCCESS\",\n    \"message\": \"\",\n    \"pin\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The PIN is invalid</p>"
          }
        ],
        "Error 400": [
          {
            "group": "Error 400",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Pin parameter is mandatory</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "JsonError",
            "description": "<p>The JSON is invalid</p>"
          }
        ],
        "Error 409": [
          {
            "group": "Error 409",
            "optional": false,
            "field": "JsonError",
            "description": "<p>The Activity Instance ID is not for the given Patient Pin</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response:",
          "content": "{\n    \"message\": \"The Activity Instance ID is not for the given Patient Pin.\",\n    \"code\": 0,\n    \"status\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/ActivityInstance.java",
    "groupTitle": "Activity"
  },
  {
    "type": "POST",
    "url": "/activity/scheduleactivity",
    "title": "Create New Activity",
    "name": "ScheduleActivity",
    "group": "Activity",
    "version": "0.0.0",
    "description": "<p>This is a API which designed for activity instance creation.</p>",
    "examples": [
      {
        "title": "Example of body:",
        "content": "{\n   \"pin\":\"\",\n   \"parentactivity\":\"PATTERNCOMPARISON\",\n   \"trial_type\":\"EPILEPSY\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on Success:",
          "content": "{\n    \"status\": \"SUCCESS\",\n    \"message\": \"\",\n    \"pin\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The PIN is invalid</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "JsonError",
            "description": "<p>The JSON is invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error response:",
          "content": "{\n \"developerMessage\": null,\n \"message\": \"The PIN is invalid\",\n \"code\": 0,\n \"status\": 0\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Activity.java",
    "groupTitle": "Activity"
  },
  {
    "type": "DELETE",
    "url": "/patients",
    "title": "Delete All Patients",
    "name": "DeleteAllPatients",
    "group": "Patients",
    "version": "0.0.0",
    "deprecated": {
      "content": "Method not implemented"
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Patient.java",
    "groupTitle": "Patients"
  },
  {
    "type": "POST",
    "url": "/patients/enrollpatient",
    "title": "Enroll A New Patient",
    "name": "EnrollPatient",
    "group": "Patients",
    "version": "0.0.0",
    "description": "<p>This is a API which designed for patient enrollment.</p>",
    "examples": [
      {
        "title": "Example of body:",
        "content": "{\n    \"patientGroup\": \"adult\",\n    \"childPin\": \"2017\",\n    \"deviceType\": \"android\",\n    \"deviceVersion\": null,\n    \"hydroxureaTablets\": \"0\",\n    \"isChildOnMed\": \"1\",\n    \"medDetails\": [\n        {\n            \"medicine\": \"ACTH\",\n            \"prescribedDosage\": 2,\n            \"tablet\": 2\n        }\n    ]\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the operation.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on Success:",
          "content": "{\n    \"patientPIN\": \"4003\",\n    \"message\": \"SUCCESS\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Patient.java",
    "groupTitle": "Patients"
  },
  {
    "type": "GET",
    "url": "/patients",
    "title": "Get All Patient Information",
    "name": "GetAllPatientInfo",
    "group": "Patients",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "trial",
            "description": "<p>the trial of the patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "compliance",
            "description": "<p>the compliance of the patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "above",
            "description": "<p>the above of the patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "includeDeleted",
            "description": "<p>the includeDeleted of the patient</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stage",
            "description": "<p>the stage of the patient</p>"
          }
        ]
      }
    },
    "deprecated": {
      "content": "Method not implemented"
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Result",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Patient.java",
    "groupTitle": "Patients"
  },
  {
    "type": "GET",
    "url": "/patients/{pin}",
    "title": "Get Patient Information",
    "name": "GetPatientInfo",
    "group": "Patients",
    "version": "0.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "pin",
            "description": "<p>Pin of the patient</p>"
          }
        ]
      }
    },
    "deprecated": {
      "content": "Method not implemented"
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Result",
            "description": "<p>null</p>"
          }
        ]
      }
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Patient.java",
    "groupTitle": "Patients"
  },
  {
    "type": "PUT",
    "url": "/patients/{pin}",
    "title": "Update A Patient",
    "name": "UpdatePatient",
    "group": "Patients",
    "version": "0.0.0",
    "deprecated": {
      "content": "Method not implemented"
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the operation.</p>"
          }
        ]
      }
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/Patient.java",
    "groupTitle": "Patients"
  },
  {
    "type": "POST",
    "url": "/uilogger",
    "title": "Submit UI logger",
    "name": "SubmitLogger",
    "group": "UILogger",
    "version": "0.0.0",
    "examples": [
      {
        "title": "Example of body:",
        "content": "{\n    \"loggerResults\" : []\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "message",
            "description": "<p>The message of the operation.</p>"
          }
        ]
      }
    },
    "filename": "src/edu/asu/epilepsy/apiv30/resource/UILogger.java",
    "groupTitle": "UILogger"
  }
] });