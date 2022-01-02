{
  "__inputs": [
    {
      "name": "DS_STIEBELELTRON",
      "label": "stiebeleltron",
      "description": "",
      "type": "datasource",
      "pluginId": "influxdb",
      "pluginName": "InfluxDB"
    }
  ],
    "__requires": [
      {
        "type": "grafana",
        "id": "grafana",
        "name": "Grafana",
        "version": "8.2.3"
      },
      {
        "type": "datasource",
        "id": "influxdb",
        "name": "InfluxDB",
        "version": "1.0.0"
      },
      {
        "type": "panel",
        "id": "stat",
        "name": "Stat",
        "version": ""
      },
      {
        "type": "panel",
        "id": "timeseries",
        "name": "Time series",
        "version": ""
      }
    ],
      "annotations": {
    "list": [
      {
        "builtIn": 1,
        "datasource": "-- Grafana --",
        "enable": true,
        "hide": true,
        "iconColor": "rgba(0, 211, 255, 1)",
        "name": "Annotations & Alerts",
        "target": {
          "limit": 100,
          "matchAny": false,
          "tags": [],
          "type": "dashboard"
        },
        "type": "dashboard"
      }
    ]
  },
  "description": "Charts displaying various metrics such as power, load, autonomy and energy",
    "editable": true,
      "fiscalYearStartMonth": 0,
        "gnetId": null,
          "graphTooltip": 0,
            "id": null,
              "iteration": 1641139741081,
                "links": [],
                  "liveNow": false,
                    "panels": [
                      {
                        "collapsed": false,
                        "datasource": null,
                        "gridPos": {
                          "h": 1,
                          "w": 24,
                          "x": 0,
                          "y": 0
                        },
                        "id": 25,
                        "panels": [],
                        "title": "Temperatures",
                        "type": "row"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "description": "",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineStyle": {
                                "fill": "solid"
                              },
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 1
                        },
                        "id": 23,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_room_temperature_heating_circuit\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc1\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "room temperature actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_room_temperature_heating_circuit\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc1\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "room temperature target"
                          }
                        ],
                        "title": "Room Temperature HC 1",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "description": "",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineStyle": {
                                "fill": "solid"
                              },
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 12,
                          "y": 1
                        },
                        "id": 26,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_room_temperature_heating_circuit\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc2\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "HC 2, Actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_room_temperature_heating_circuit\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc2\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "HC 2, Target"
                          }
                        ],
                        "title": "Room Temperature HC 2",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 9
                        },
                        "id": 28,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc1\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "Actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc1\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "Target"
                          }
                        ],
                        "title": "Heating Temperature HC 1",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 12,
                          "y": 9
                        },
                        "id": 29,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc2\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "Actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.circuit == \"hc2\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "Target"
                          }
                        ],
                        "title": "Heating Temperature HC 2",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 17
                        },
                        "id": 37,
                        "interval": null,
                        "maxDataPoints": null,
                        "options": {
                          "legend": {
                            "calcs": [
                              "min",
                              "max",
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_outside_temperature\" and\r\n    r.site == \"${site}\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\": r._value, _time: r._time}))\r\n",
                            "refId": "Outside temp"
                          }
                        ],
                        "title": "Outside Temperature",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 12,
                          "y": 17
                        },
                        "id": 35,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_domestic_hotwater_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "Actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_domestic_hotwater_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "Target"
                          }
                        ],
                        "title": "Domestic Hotwater Temperature",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 25
                        },
                        "id": 38,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_general_temperature_condenser\" and\r\n    r.site == \"${site}\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "Actual"
                          }
                        ],
                        "title": "Condenser Temperature",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "description": "",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 12,
                          "y": 25
                        },
                        "id": 34,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_buffer_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Actual\":r._value, _time:r._time}))\r\n",
                            "refId": "Actual"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_buffer_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.state == \"target\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Target\":r._value, _time:r._time}))\r\n",
                            "refId": "Target"
                          }
                        ],
                        "title": "Buffer Temperature",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "celsius"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 33
                        },
                        "id": 31,
                        "options": {
                          "legend": {
                            "calcs": [
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_flow_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.type == \"heatpump\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Heatpump\":r._value, _time:r._time}))\r\n",
                            "refId": "Heatpump"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_flow_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.type == \"reheating\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Reheating\":r._value, _time:r._time}))\r\n",
                            "refId": "Reheating"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_heating_flow_temperature\" and\r\n    r.site == \"${site}\" and\r\n    r.type == \"preflow\" and\r\n    r.state == \"actual\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Pre-Flow\":r._value, _time:r._time}))\r\n",
                            "refId": "Pre-Flow"
                          }
                        ],
                        "title": "Flow Temperature",
                        "type": "timeseries"
                      },
                      {
                        "collapsed": false,
                        "datasource": null,
                        "gridPos": {
                          "h": 1,
                          "w": 24,
                          "x": 0,
                          "y": 41
                        },
                        "id": 44,
                        "panels": [],
                        "title": "Pump Stats",
                        "type": "row"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "percentunit"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 42
                        },
                        "id": 46,
                        "options": {
                          "legend": {
                            "calcs": [
                              "max",
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_general_output_activity_ratio\" and\r\n    r.site == \"${site}\" and\r\n    r.pump == \"heat\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Heat Pump\":r._value, _time:r._time}))\r\n",
                            "refId": "Heatpump"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_general_output_activity_ratio\" and\r\n    r.site == \"${site}\" and\r\n    r.pump == \"water\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Water Pump\":r._value, _time:r._time}))\r\n",
                            "refId": "Water Pump"
                          }
                        ],
                        "title": "Pump Activity",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "pressurebar"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 12,
                          "y": 42
                        },
                        "id": 47,
                        "options": {
                          "legend": {
                            "calcs": [
                              "min",
                              "max",
                              "mean"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_general_heating_circuit_pressure\" and\r\n    r.site == \"${site}\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Pressure\":r._value, _time:r._time}))\r\n",
                            "refId": "Heatpump"
                          }
                        ],
                        "title": "Circuit Pressure",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 0,
                              "drawStyle": "line",
                              "fillOpacity": 0,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "linear",
                              "lineWidth": 1,
                              "pointSize": 5,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "auto",
                              "spanNulls": false,
                              "stacking": {
                                "group": "A",
                                "mode": "none"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "s"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 50
                        },
                        "id": 48,
                        "options": {
                          "legend": {
                            "calcs": [
                              "max"
                            ],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_process_data_compressor_delay_counter\" and\r\n    r.site == \"${site}\"\r\n  )\r\n  |> group(columns: [\"site\"])\r\n  |> aggregateWindow(every: v.windowPeriod, fn: mean, createEmpty: false)\r\n  |> map(fn: (r) => ({\"Compressor Duration Timer\":r._value, _time:r._time}))\r\n",
                            "refId": "Heatpump"
                          }
                        ],
                        "title": "Compressor Duration Timer",
                        "type": "timeseries"
                      },
                      {
                        "collapsed": false,
                        "datasource": null,
                        "gridPos": {
                          "h": 1,
                          "w": 24,
                          "x": 0,
                          "y": 58
                        },
                        "id": 13,
                        "panels": [],
                        "title": "Energy",
                        "type": "row"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "palette-classic"
                            },
                            "custom": {
                              "axisLabel": "",
                              "axisPlacement": "auto",
                              "barAlignment": 1,
                              "drawStyle": "bars",
                              "fillOpacity": 10,
                              "gradientMode": "none",
                              "hideFrom": {
                                "legend": false,
                                "tooltip": false,
                                "viz": false
                              },
                              "lineInterpolation": "stepBefore",
                              "lineWidth": 1,
                              "pointSize": 18,
                              "scaleDistribution": {
                                "type": "linear"
                              },
                              "showPoints": "never",
                              "spanNulls": true,
                              "stacking": {
                                "group": "A",
                                "mode": "normal"
                              },
                              "thresholdsStyle": {
                                "mode": "off"
                              }
                            },
                            "mappings": [],
                            "min": 0,
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                },
                                {
                                  "color": "red",
                                  "value": 80
                                }
                              ]
                            },
                            "unit": "watth"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 12,
                          "x": 0,
                          "y": 59
                        },
                        "id": 10,
                        "options": {
                          "legend": {
                            "calcs": [],
                            "displayMode": "list",
                            "placement": "bottom"
                          },
                          "tooltip": {
                            "mode": "single"
                          }
                        },
                        "pluginVersion": "8.2.3",
                        "targets": [
                          {
                            "groupBy": [
                              {
                                "params": [
                                  "$__interval"
                                ],
                                "type": "time"
                              },
                              {
                                "params": [
                                  "null"
                                ],
                                "type": "fill"
                              }
                            ],
                            "orderByTime": "ASC",
                            "policy": "default",
                            "query": "import \"strings\"\r\nimport \"date\"\r\n\r\ndividyByX = (x, tables=<-) =>\r\n  tables\r\n    |> map(fn: (r) => ({\r\n        r with\r\n        _value: r._value / x\r\n      })\r\n    )\r\n\r\nfrom(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_energy_heating_total\" and\r\n    r.site == \"${site}\" and\r\n    r.compressor == \"heating\" and\r\n    r.timeframe == \"day\"\r\n  )\r\n  |> drop(columns: [\"url\", \"host\", \"timeframe\"])\r\n  |> window(every: 24h)\r\n  |> max()\r\n  |> group(columns: [\"site\"])\r\n  |> dividyByX(x: 3600.0)\r\n  |> map(fn: (r) => ({\"Compressor\": r._value, _time: date.truncate(t: r._time, unit: 1d)}))",
                            "refId": "Heating",
                            "resultFormat": "time_series",
                            "select": [
                              [
                                {
                                  "params": [
                                    "value"
                                  ],
                                  "type": "field"
                                },
                                {
                                  "params": [],
                                  "type": "mean"
                                }
                              ]
                            ],
                            "tags": []
                          },
                          {
                            "groupBy": [
                              {
                                "params": [
                                  "$__interval"
                                ],
                                "type": "time"
                              },
                              {
                                "params": [
                                  "null"
                                ],
                                "type": "fill"
                              }
                            ],
                            "hide": false,
                            "orderByTime": "ASC",
                            "policy": "default",
                            "query": "import \"strings\"\r\nimport \"date\"\r\n\r\ndividyByX = (x, tables=<-) =>\r\n  tables\r\n    |> map(fn: (r) => ({\r\n        r with\r\n        _value: r._value / x\r\n      })\r\n    )\r\n\r\nfrom(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_energy_heating_total\" and\r\n    r.site == \"${site}\" and\r\n    r.compressor == \"domestic_hotwater\" and\r\n    r.timeframe == \"day\"\r\n  )\r\n  |> drop(columns: [\"url\", \"host\", \"timeframe\"])\r\n  |> window(every: 24h)\r\n  |> max()\r\n  |> group(columns: [\"site\"])\r\n  |> dividyByX(x: 3600.0)\r\n  |> map(fn: (r) => ({\"Domestic Hotwater\": r._value, _time: date.truncate(t: r._time, unit: 1d)}))",
                            "refId": "Domestic Hotwater",
                            "resultFormat": "time_series",
                            "select": [
                              [
                                {
                                  "params": [
                                    "value"
                                  ],
                                  "type": "field"
                                },
                                {
                                  "params": [],
                                  "type": "mean"
                                }
                              ]
                            ],
                            "tags": []
                          }
                        ],
                        "timeFrom": null,
                        "timeShift": null,
                        "title": "Total Energy per day",
                        "type": "timeseries"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "thresholds"
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                }
                              ]
                            },
                            "unit": "watth"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 8,
                          "w": 2,
                          "x": 12,
                          "y": 59
                        },
                        "id": 36,
                        "options": {
                          "colorMode": "value",
                          "graphMode": "area",
                          "justifyMode": "auto",
                          "orientation": "vertical",
                          "reduceOptions": {
                            "calcs": [
                              "lastNotNull"
                            ],
                            "fields": "",
                            "values": true
                          },
                          "text": {},
                          "textMode": "auto"
                        },
                        "pluginVersion": "8.2.3",
                        "targets": [
                          {
                            "groupBy": [
                              {
                                "params": [
                                  "$__interval"
                                ],
                                "type": "time"
                              },
                              {
                                "params": [
                                  "null"
                                ],
                                "type": "fill"
                              }
                            ],
                            "orderByTime": "ASC",
                            "policy": "default",
                            "query": "dividyByX = (x, tables=<-) =>\r\n  tables\r\n    |> map(fn: (r) => ({\r\n        r with\r\n        _value: r._value / x\r\n      })\r\n    )\r\n\r\nfrom(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_energy_heating_total\" and\r\n    r.site == \"${site}\" and\r\n    r.timeframe == \"day\"\r\n  )\r\n  |> pivot(\r\n    rowKey: [\"_time\"],\r\n    columnKey: [\"compressor\"],\r\n    valueColumn: \"_value\"\r\n  )\r\n  |> map(fn: (r) => (\r\n    {_value: r.domestic_hotwater + r.heating, _time: r._time}\r\n  ))\r\n  |> window(every: 24h)\r\n  |> max()\r\n  |> drop(columns: [\"_start\", \"_stop\"])\r\n  |> mean()\r\n  |> dividyByX(x: 3600.0)",
                            "refId": "Energy per day",
                            "resultFormat": "time_series",
                            "select": [
                              [
                                {
                                  "params": [
                                    "value"
                                  ],
                                  "type": "field"
                                },
                                {
                                  "params": [],
                                  "type": "mean"
                                }
                              ]
                            ],
                            "tags": []
                          }
                        ],
                        "title": "Average Energy per day",
                        "type": "stat"
                      },
                      {
                        "collapsed": false,
                        "datasource": null,
                        "gridPos": {
                          "h": 1,
                          "w": 24,
                          "x": 0,
                          "y": 67
                        },
                        "id": 40,
                        "panels": [],
                        "title": "Runtime",
                        "type": "row"
                      },
                      {
                        "datasource": "${DS_STIEBELELTRON}",
                        "description": "",
                        "fieldConfig": {
                          "defaults": {
                            "color": {
                              "mode": "thresholds"
                            },
                            "mappings": [],
                            "thresholds": {
                              "mode": "absolute",
                              "steps": [
                                {
                                  "color": "green",
                                  "value": null
                                }
                              ]
                            },
                            "unit": "s"
                          },
                          "overrides": []
                        },
                        "gridPos": {
                          "h": 5,
                          "w": 6,
                          "x": 0,
                          "y": 68
                        },
                        "id": 42,
                        "options": {
                          "colorMode": "none",
                          "graphMode": "none",
                          "justifyMode": "auto",
                          "orientation": "auto",
                          "reduceOptions": {
                            "calcs": [
                              "lastNotNull"
                            ],
                            "fields": "",
                            "values": false
                          },
                          "text": {},
                          "textMode": "auto"
                        },
                        "pluginVersion": "8.2.3",
                        "targets": [
                          {
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_runtime_compressor\" and\r\n    r.site == \"${site}\" and\r\n    r.compressor == \"heating\"\r\n  )\r\n  |> last()\r\n  |> map(fn: (r) => ({\"Heating\": r._value}))\r\n",
                            "refId": "Heating"
                          },
                          {
                            "hide": false,
                            "query": "from(bucket: \"${bucket}\")\r\n  |> range(start: v.timeRangeStart, stop: v.timeRangeStop)\r\n  |> filter(fn:(r) =>\r\n    r._measurement == \"stiebeleltron_runtime_compressor\" and\r\n    r.site == \"${site}\" and\r\n    r.compressor == \"domestic_hotwater\"\r\n  )\r\n  |> last()\r\n  |> map(fn: (r) => ({\"Domestic Hotwater\": r._value}))\r\n",
                            "refId": "Domestic Hotwater"
                          }
                        ],
                        "title": "Total Runtime",
                        "type": "stat"
                      }
                    ],
                      "refresh": false,
                        "schemaVersion": 31,
                          "style": "dark",
                            "tags": [],
                              "templating": {
    "list": [
      {
        "current": {
          "selected": false,
          "text": "stiebeleltron",
          "value": "stiebeleltron"
        },
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": false,
        "label": "Data source",
        "multi": false,
        "name": "datasource",
        "options": [],
        "query": "influxdb",
        "queryValue": "",
        "refresh": 1,
        "regex": "/.*stiebeleltron.*/",
        "skipUrlSync": false,
        "type": "datasource"
      },
      {
        "allValue": null,
        "current": {},
        "datasource": "${DS_STIEBELELTRON}",
        "definition": "buckets()\r\n  |> filter(fn: (r) => r.name != \"_monitoring\" and r.name != \"_tasks\")",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": false,
        "label": "Bucket",
        "multi": false,
        "name": "bucket",
        "options": [],
        "query": "buckets()\r\n  |> filter(fn: (r) => r.name != \"_monitoring\" and r.name != \"_tasks\")",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      },
      {
        "allValue": null,
        "current": {},
        "datasource": "${DS_STIEBELELTRON}",
        "definition": "import \"influxdata/influxdb/v1\"\r\nv1.tagValues(\r\n    bucket: \"${bucket}\",\r\n    tag: \"site\",\r\n    predicate: (r) => true,\r\n    start: -180d\r\n)",
        "description": null,
        "error": null,
        "hide": 0,
        "includeAll": false,
        "label": "Site",
        "multi": false,
        "name": "site",
        "options": [],
        "query": "import \"influxdata/influxdb/v1\"\r\nv1.tagValues(\r\n    bucket: \"${bucket}\",\r\n    tag: \"site\",\r\n    predicate: (r) => true,\r\n    start: -180d\r\n)",
        "refresh": 1,
        "regex": "",
        "skipUrlSync": false,
        "sort": 0,
        "tagValuesQuery": "",
        "tagsQuery": "",
        "type": "query",
        "useTags": false
      }
    ]
  },
  "time": {
    "from": "now-24h",
      "to": "now"
  },
  "timepicker": { },
  "timezone": "",
    "title": "Stiebel Eltron",
      "uid": "8yehZtTnz",
        "version": 17
}
