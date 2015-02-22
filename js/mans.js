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
  });

  // IDC chart data
  var dataPie = [
    {
        value: 74,
        color:"rgba(247,70,74,1)",
        fillColor : "rgba(247,70,74,0.5)",
        highlight: "rgba(247,70,74,1)",
        label: "Herramientas"
    },
    {
        value: 20,
        color: "rgba(70,191,189,1)",
        fillColor: "rgba(70,191,189,0.5)",
        highlight: "rgba(70,191,189,1)",
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
      percentageInnerCutout : 50,
      animationSteps : 100,
      animationEasing : "easeOutBounce",
      animateRotate : true,
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#idc td:last-child').innerHTML = idcChart.generateLegend();
  }
  // Instatisfecho data
  var dataUnChart = [
    {
        value: 42,
        color:"rgba(247,70,74,1)",
        fillColor : "rgba(247,70,74,0.5)",
        highlight: "rgba(247,70,74,1)",
        label: "No"
    },
    {
        value: 58,
        color: "rgba(70,191,189,1)",
        fillColor: "rgba(70,191,189,0.5)",
        highlight: "rgba(70,191,189,1)",
        label: "Si",
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
     legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%=': '%><%=segments[i].value%><%='%'%><%}%></li><%}%></ul>"
    });
    document.querySelector('#problem td:last-child').innerHTML = unChart.generateLegend();
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
  

  
});