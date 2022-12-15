ej.base.registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0diXH5bcnFVRGheVUw=');

const chart = new ej.charts.Chart({
  primaryXAxis: {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    labelStyle: {
      fontFamily: 'inherit',
    },
  },
  primaryYAxis: {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: {
      fontFamily: 'inherit',
    },
  },
  chartArea: {
    border: {
      width: 0,
    },
  },
  series: [
    {
      type: 'Line',
      dataSource: [
        { x: new Date(2005, 0, 1), y: 28 }, { x: new Date(2006, 0, 1), y: 44 },
        { x: new Date(2007, 0, 1), y: 48 }, { x: new Date(2008, 0, 1), y: 50 },
        { x: new Date(2009, 0, 1), y: 66 }, { x: new Date(2010, 0, 1), y: 78 }, { x: new Date(2011, 0, 1), y: 84 }
      ],
      xName: 'x',
      yName: 'y',
      width: 2,
      marker: {
        visible: true,
        width: 8,
        height: 8,
      },
      animation: {
        enable: false,
      },
    },
  ],
  palettes: ['#2196F3'],
  tooltip: {
    enable: true,
    format: '${point.x}: ${point.y}',
    enableAnimation: false,
    enableMarker: false,
    fadeOutDuration: 0,
    textStyle: {
      fontFamily: 'inherit',
    },
  },
  legendSettings: {
    position: 'Top',
  },
  background: '#00000000',
});

chart.appendTo('#temperature-efficiency');
