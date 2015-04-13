Reveal.addEventListener( 'ready', function( event ) {


   // Listen to different fragments show events
  Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element

    if (event.fragment.id === 'idc-chart') {
      fillIdcChart();
    }
    if (event.fragment.id === 'un-chart') {
      fillUnChart();
    }

    if (event.fragment.id === 'bar-chart1'){
      barChart1();
    }
    if (event.fragment.id === 'dos-chart'){
      dosBars();
    }
    if (event.fragment.id === 'tres-chart'){
      tresCharts();
    }
    if (event.fragment.id === 'four-chart'){
      fourBars();
    }
    if (event.fragment.id === 'five-chart'){
      fiveBars();
    }
  });

  // IDC chart data
  var dataPie = [
    {
      value: 76,
      color:'#d32f2f',
      fillColor : '#d32f2f',
      highlight: '#d32f2f',
      label: "Herramientas"
    },
    {
      value: 24,
      color:'#1565c0',
      fillColor:'#1565c0' ,
      highlight:'#1565c0',
      label: "Juegos",
    },
  ];
// Push IDC data into chart
  function fillIdcChart() {
    var idcCtx = document.querySelector('#idc-chart').getContext('2d');
    var idcChart = new Chart(idcCtx).Pie(dataPie, {
      segmentShowStroke : true,
      segmentStrokeColor : "#fff",
      segmentStrokeWidth : 2,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#idc #legend-container').innerHTML = idcChart.generateLegend();
  }
  // Instatisfecho data
  var dataUnChart = [
    {
        value: 42,
        color:'#d32f2f',
        fillColor : '#d32f2f',
        highlight: '#d32f2f',
        label: "Si",
        labelColor : 'white',
        labelFontSize : '16'
    },
    {
        value: 58,
        color:'#1565c0',
        fillColor:'#1565c0' ,
        highlight:'#1565c0',
        label: "No",
        labelColor : 'white',
        labelFontSize : '16'
    },
  ];
  // fPush data to Unsatisfaction chart
  function fillUnChart() {
    var unCtx = document.querySelector('#un-chart').getContext('2d');
    var unChart = new Chart(unCtx).Pie(dataUnChart, {
      segmentShowStroke : true,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend \"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#item1 #legend-container').innerHTML = unChart.generateLegend();
  }

  // Bar Data chart
  var dataBar = {
    labels: [],
    datasets: [
    {
      label: 'Necesidades',
      fillColor: 'rgba(31,119,180, 0.5)',
      strokeColor: 'rgba(34,119,180,0.8)',
      pointColor: '#165683',
      pointStrokeColor: '#000',
      pointHighlightFill: '#000',
      pointHighlightStroke: 'rgba(31,119,180,)',
      data: [4,0,2,2,5,9,16,15,5,42]
    }
    ]
  };

  for(var i = 1 ; i <= 10; i++){
    dataBar.labels.push(i);
  }
  //push data in line chart # 1
  function barChart1() {
    var barChart1 = document.querySelector('#bar-chart1').getContext('2d');
    var dataChart = new Chart(barChart1).Bar(dataBar, {
      scaleBeginAtZero : true,
      scaleShowGridLines : true,
      scaleGridLineWidth : 1,
      scaleShowHorizontalLines: true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

    });
    document.querySelector('#interr #legend-container').innerHTML = dataChart.generateLegend();
  }
   // Bar Data chart
  var dosBar = {
    labels: ['¿Posee un dispositivo teléfono móvil inteligente?', '¿Usa su dispositivo móvil?', '¿Lo usa para seguir la información de la Universidad?', '¿Lo usa para utilizar la intranet?'],
    datasets: [
    {
      fillColor: '#1565c0',
      strokeColor: '#1565c0',
      data: [96,98,87,67]
    },
    {
      fillColor : '#d32f2f',
      strokeColor: '#d32f2f',
      data: [4,2,13,33]
    }
    ]
  };

  //push data in line chart # 1
  function dosBars() {
    var barChart1 = document.querySelector('#dos-chart').getContext('2d');
    var dataChart = new Chart(barChart1).Bar(dosBar, {
      scaleBeginAtZero : true,
      scaleShowGridLines : true,
      scaleGridLineWidth : 1,
      scaleShowHorizontalLines: true,
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].labels%><%}%></li><%}%></ul>"

    });
    //document.querySelector('#item3-6 #legend-container').innerHTML = dataChart.generateLegend();
  } 

  var dataTresChart = [
    {
        value: 85,
        color:'#d32f2f',
        fillColor : '#d32f2f',
        highlight: '#d32f2f',
        label: "Si",
        labelColor : 'white',
        labelFontSize : '16'
    },
    {
        value: 15,
        color:'#1565c0',
        fillColor:'#1565c0' ,
        highlight:'#1565c0',
        label: "No",
        labelColor : 'white',
        labelFontSize : '16'
    },
  ];
  function tresCharts(){
    var unCtx = document.querySelector('#tres-chart').getContext('2d');
    var unChart = new Chart(unCtx).Pie(dataTresChart, {
      segmentShowStroke : true,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#item7 #legend-container').innerHTML = unChart.generateLegend();
  }

  var functionColores = function(){
    var colores = ['orange', 'red', 'green'];
    for (var i = 0; i <= colores.length; i++){
      return colores[i];
    }
  };
  var randomColorGeneator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};
  var fourBar = {
    labels: ['Item 8'],
    datasets: [
    {
      label: 'Notas Evaluaciones',
      fillColor: '#388e3c',
      strokeColor: '#388e3c',
      data: [87]
    },
    {
      label: 'Mi Horario',
      fillColor: '#1976d2',
      strokeColor: '#1976d2',
      data: [76]
    },
    {
      label: 'Pre-Inscripcion Asignaturas',
      fillColor: '#d32f2f',
      strokeColor: '#d32f2f',
      data: [56]
    },
    {
      label: 'Recursos en linea',
      fillColor: '#f57c00',
      strokeColor: '#f57c00',
      data: [39],
    }
    ]
  };

 function fourBars() {
    var barChart1 = document.querySelector('#four-chart').getContext('2d');
    var dataChart = new Chart(barChart1).Bar(fourBar, {
      scaleBeginAtZero : true,
      scaleShowGridLines : true,
      scaleGridLineWidth : 1,
      scaleShowHorizontalLines: true,
      fillColor:functionColores(),
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%=' '%><%=''%><%}%></li><%}%></ul>"
    });
    document.querySelector('#item8 #legend-container').innerHTML = dataChart.generateLegend();
  }
  var fiveChart = [
    {
        value: 74,
        color:"#d32f2f",
        fillColor : "#d32f2f",
        highlight: "#d32f2f",
        label: "Si",
        labelColor : 'white',
        labelFontSize : '16'
    },
    {
        value: 26,
        color: "#1976d2",
        fillColor: "#1976d2",
        highlight: "r#1976d2",
        label: "No",
        labelColor : 'white',
        labelFontSize : '16'
    },
  ];
  function fiveBars() {
    var unCtx = document.querySelector('#five-chart').getContext('2d');
    var unChart = new Chart(unCtx).Pie(fiveChart, {
      segmentShowStroke : true,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#item12 #legend-container').innerHTML = unChart.generateLegend();   
  }

});