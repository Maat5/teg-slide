Reveal.addEventListener( 'ready', function( event ) {
  // event.currentSlide, event.indexh, event.indexv

  var techRadarList;
  var techRadarGraph = Snap('#problema-techradar .stretch');
  var eeshiLogo = Snap('#eeshi-logo');
  var eeshiArc1 = eeshiLogo.path(),
      eeshiArc2 = eeshiLogo.path(),
      eeshiArc3 = eeshiLogo.path(),
      eeshiArc4 = eeshiLogo.path();
  var request = new XMLHttpRequest();
  var loaddedTrends = [];
  var colors = {
    'Platform': '#c46e29',
    'Language-Framework': '#911646',
    'Technique': '#0096a4',
    'Tool': '#6a9366'
  };

  // Listen to slide changes
  Reveal.addEventListener('slidechanged', function(event) {
    if(event.currentSlide.id === 'autores') {
      setTimeout(function() {
        Reveal.nextFragment();
      }, 2000);
    }

    if(event.currentSlide.id === 'final-chart-present') {
      fillFinalChart();
    }
  });

  // Listen to different fragments show events
  Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element

    if (event.fragment.name === 'techradar-in') {
      loadTrends(0, techRadarList, loaddedTrends, techRadarGraph);
    }

    if (event.fragment.name === 'techradar-out') {
      setTimeout(function() { hideTrends(loaddedTrends, techRadarGraph) }, 0);
      setTimeout(function() { hideTrends(loaddedTrends, techRadarGraph) }, 150);
      setTimeout(function() { hideTrends(loaddedTrends, techRadarGraph) }, 250);
    }

    if (event.fragment.name === 'eeshi-logo-in') {
      animateEeshiLogo('in');
    }

    if (event.fragment.name === 'eeshi-logo-out') {
      animateEeshiLogo('out', 'next');
    }

    if (event.fragment.id === 'idc-chart') {
      fillIdcChart();
    }

  });

  // Listen to different fragments hide events
  Reveal.addEventListener('fragmenthidden', function( event ) {
    // event.fragment = the fragment DOM element
    if (event.fragment.name === 'eeshi-logo-in') {
      animateEeshiLogo('out', 'prev');
    }

    if (event.fragment.name === 'eeshi-logo-out') {
      animateEeshiLogo('in');
    }
  });


  // Get Tech Radar list, put it into `techRadarList`
  request.open('GET', 'data/techradar.json', true);
  request.onload = function() {
    if (this.status >= 200 && this.status < 400){
      techRadarList = JSON.parse(this.response);
    }
  };
  request.send();

  // Make the trends appear on a SVG, recursively
  function loadTrends(i, trendsList, loaddedTrends, svg) {

    // ...until the end of the list
    if (i >= trendsList.length -1) { return null; }

    // Put it in a random cordinates on SVG
    var percent = i * 100 / trendsList.length,
        degrees = getRandomArbitrary(0,360),
        x = 50 + getRandomArbitrary(0,90) * Math.cos(Math.PI*(degrees) / 180),
        y = 50 + getRandomArbitrary(0,50) * Math.sin(Math.PI*(degrees) / 180),
        trend = svg.text(x, y, trendsList[i].name)
        .attr({ 'font-size': getRandomArbitrary(4,7) * ((100 - trendsList[i].name.length) / 100), 'text-anchor': 'middle', 'font-family': 'Open Sans', fill: colors[trendsList[i].type], opacity: 0 })
        .animate({ opacity: 1 }, 300, mina.easeinout);

    // Then push it into a list of loaded trends, we will use it to the hideTrends part
    loaddedTrends.push(trend);

    // Load the next trend after some milliseconds
    return setTimeout(function(){
      loadTrends(++i, trendsList, loaddedTrends, svg);
    }, 150);

  }

  // Make the trends hide from the SVG, recursively
  function hideTrends(loaddedTrends, svg) {

    // ...until there are no more loadded trends
    if (loaddedTrends.length === 0) {
      svg.clear();
      if (Reveal.getCurrentSlide().id === 'problema-techradar') { Reveal.next(); }
      return null;
    }

    // Nicely hide the trend
    loaddedTrends[0].animate({'font-size': 0, fill: '#000', opacity: 0 }, 300, mina.easein, deleteAndContinue);

    // Actualy delete the object and go for the next one
    function deleteAndContinue() {
      loaddedTrends.splice(0,1);
      hideTrends(loaddedTrends, svg);
    }
  }

  // Random number in min-max range
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  // IDC chart data
  var finalData = {
    labels: ["Habilidades reflejadas", "Habilidades no reflejadas"],
    datasets: [
    {
      label: 'Reflejadas',
      fillColor: 'rgba(31,119,180, 0.5)',
      strokeColor: 'rgba(31,119,180, 1)',
      pointColor: '#165683',
      pointStrokeColor: '#000',
      pointHighlightFill: '#000',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [53.85, 46.15]
      }
    ]
  };

  // Push FINAL data into chart
  function fillFinalChart() {
    var idcCtx = document.querySelector('#final-chart').getContext('2d');
    var idcChart = new Chart(idcCtx).Bar(finalData, {});
  }

  // IDC chart data
  var data = {
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
  };

  // Push IDC data into chart
  function fillIdcChart() {
    var idcCtx = document.querySelector('#idc-chart').getContext('2d');
    var idcChart = new Chart(idcCtx).Line(data, {
      legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
    });
    document.querySelector('#idc td:last-child').innerHTML = idcChart.generateLegend();
  }

  function createAnnularSector(center, innerRadius, outterRadius, degrees, rotate) {

    var innerArc = {},
        outterArc = {},
        largeArc = (degrees%360 > 180 || degrees%360 < -180) ? 1 : 0,
        sweep = (degrees < 0) ? 0 : 1,
        sector;

    function polarToRectangular(center, radius, degrees) {
      return {
        x: center.x + radius * Math.cos(Math.PI*(degrees) / 180),
        y: center.y + radius * Math.sin(Math.PI*(degrees) / 180)
      }
    }

    innerArc.start = polarToRectangular(center, innerRadius, rotate);
    innerArc.end = polarToRectangular(center, innerRadius, degrees + rotate);

    outterArc.start = polarToRectangular(center, outterRadius, degrees + rotate);
    outterArc.end = polarToRectangular(center, outterRadius, rotate);

    return [
      'M ' +innerArc.start.x+ ',' +innerArc.start.y,
      'A ' +innerRadius+ ',' +innerRadius+ ' 1 ' +largeArc+ ',' +sweep+ ' ' +innerArc.end.x+ ',' +innerArc.end.y,
      'L ' +outterArc.start.x+ ',' +outterArc.start.y,
      'A ' +outterRadius+ ',' +outterRadius+ ' 1 ' +largeArc+ ',' + +!sweep+ ' ' +outterArc.end.x+ "," +outterArc.end.y,
      'Z'
    ].join('\n');
  }


  function animateEeshiLogo(direction, trigger) {

    var animationDuration = 1000;
    var from = direction === 'in' ? 0 : 1;
    var to   = direction === 'in' ? 1 : 0;

    if (trigger === 'next') { setTimeout(Reveal.next, animationDuration); }
    if (trigger === 'prev') { setTimeout(Reveal.prev, animationDuration); }

    // Animate radius, degrees, and rotation for arc1
    Snap.animate(from, to, function (i) {
       var center = { x: 50, y: 50 },
           innerRadius = 0,
           outterRadius = 35,
           degrees = -28 * i,
           rotate = -22,
           arcAttr = {
             fill: '#ACBB66',
             stroke: '#ACBB66',
             strokeWidth: 0
           };

       // Remove previous path and draw a new one.
       // If you don't remove it, it will draw on top of the previus one.
       eeshiArc4.remove();
       eeshiArc4 = eeshiLogo.path(createAnnularSector(center, innerRadius, outterRadius, degrees, rotate)).attr(arcAttr);

    }, animationDuration, mina.easeinout);

    // Animate radius, degrees, and rotation for arc1
    Snap.animate(from, to, function (i) {
       var center = { x: 50, y: 50 },
           innerRadius = 35,
           outterRadius = 39,
           degrees = -145 * i,
           rotate = -22,
           arcAttr = {
             fill: '#FCCB56',
             stroke: '#FCCB56',
             strokeWidth: 0.1
           };

       // Remove previous path and draw a new one.
       // If you don't remove it, it will draw on top of the previus one.
       eeshiArc1.remove();
       eeshiArc1 = eeshiLogo.path(createAnnularSector(center, innerRadius, outterRadius, degrees, rotate)).attr(arcAttr);

    }, animationDuration, mina.easeinout);


    // Animate degrees, rortation and stroke width for arc2
    Snap.animate(from, to, function (i) {

      var center = { x: 50, y: 50 },
          innerRadius = 39,
          outterRadius = 45,
          degrees = -290 * i,
          rotate = -22,
          arcAttr = {
            fill: '#E8525B',
            stroke: '#E8525B',
            strokeWidth: 0.1
          };

      // Remove previous path and draw a new one.
      // If you don't remove it, it will draw on top of the previus one.
      eeshiArc2.remove();
      eeshiArc2 = eeshiLogo.path(createAnnularSector(center, innerRadius, outterRadius, degrees, rotate)).attr(arcAttr);

    }, animationDuration, mina.easeinout);

    // Animate degrees, rotation and ocpacity for arc3
    Snap.animate(from, to, function (i) {

      var center = { x: 50, y: 50 },
          innerRadius = 45,
          outterRadius = 45 + 4 * i,
          degrees = -245 * i,
          rotate = -22,
          arcAttr = {
            fill: 'rgba(23,163,165,1)',
            stroke: 'rgba(23,163,165,1)',
            strokeWidth: 0.1
          };

      // Remove previous path and draw a new one.
      // If you don't remove it, it will draw on top of the previus one.
      eeshiArc3.remove();
      eeshiArc3 = eeshiLogo.path(createAnnularSector(center, innerRadius, outterRadius, degrees, rotate)).attr(arcAttr);

    }, animationDuration, mina.easein);
  }

});