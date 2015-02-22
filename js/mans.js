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
  });

  // IDC chart data
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
  // Instatisfecho data
  var dataUnChart = [
    {
        value: 42,
        color:"rgba(247,70,74,1)",
        fillColor : "rgba(247,70,74,1)",
        highlight: "rgba(247,70,74,1)",
        label: "No"
    },
    {
        value: 58,
        color: "rgba(70,191,189,1)",
        fillColor: "rgba(70,191,189,1)",
        highlight: "rgba(70,191,189,1)",
        label: "Si",
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
});