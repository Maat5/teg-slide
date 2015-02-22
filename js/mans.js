Reveal.addEventListener( 'ready', function( event ) {


   // Listen to different fragments show events
  Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element

    if (event.fragment.id === 'idc-chart') {
      fillIdcChart();
    }

  });

  // IDC chart data
  /*var data = {
    labels: [2011, 2012, 2013, 2014, 2015],
    datasets: [
    {
      label: 'Demanda',
      fillColor: 'rgba(31,119,180, 0.5)',
      strokeColor: 'rgba(31,119,180, 1)',
      pointColor: '#165683',
      pointStrokeColor: '#000',
      pointHighlightFill: '#000',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [510000, 580000, 655000, 740000, 830000]
    },
    {
      label: 'Oferta',
      fillColor: 'rgba(180,92,31, 0.5)',
      strokeColor: 'rgba(180,92,31, 1)',
      pointColor: '#944c19',
      pointStrokeColor: '#999',
      pointHighlightFill: '#999',
      pointHighlightStroke: 'rgba(151,187,205,1)',
      data: [375000, 400000, 440000, 490000, 530000]
    }
    ]
  };*/

  var dataPie = [
    {
        value: 74,
        color:"rgba(247,70,74,1)",
        fillColor : "rgba(247,70,74,1)",
        highlight: "rgba(247,70,74,1)",
        label: "Herramientas"
    },
    {
        value: 20,
        color: "rgba(70,191,189,1)",
        fillColor: "rgba(70,191,189,1)",
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
});