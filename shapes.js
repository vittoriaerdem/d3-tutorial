var dataArray = [2, 13, 15, 20, 24, 12, 17];

var svg = 
  d3.select("body").append("svg")
    .attr('height', '100%')
    .attr('width', '100%');

svg.selectAll('rect')
    .data(dataArray)
    .enter()
    .append('rect')
    .attr('height', function(d, i) {return d*10;})
    .attr('width', '70')
    .attr('fill', 'darkred')
    .attr('x', function(d, i) {return 80*i;})
    .attr('y', function(d, i) {return 350-(d*10)});

var fixedX=600;
svg.selectAll('circle.groupa')
    .data(dataArray)
    .enter()
    .append('circle')
    .attr('circle', 'groupa')
    .attr('fill', 'blue')
    .attr('cx', function(d, i){fixedX+=(d*3)+(i*30); return fixedX;})
    .attr('cy','150')
    .attr('r', function(d, i) {return d*1.5;})


var fixedX=1200;
svg.selectAll('ellipse')
    .data(dataArray)
    .enter()
    .append('ellipse')
    .attr('cx', function(d, i){fixedX+=(d*2)+(i*30); return fixedX;})
    .attr('cy','150')
    .attr('rx', function(d, i) {return d*1.5;})
    .attr('ry', '70')


var fixedX=0;
svg.selectAll('line')
    .data(dataArray)
    .enter()
    .append('line')
    .attr('x1', fixedX)
    .attr('y1', function(d, i) {return 400 + (i*20);})
    .attr('x2', function(d) {return fixedX+(d*20);})
    .attr('y2', function(d, i) {return 400 + (i*20);})

var textArray = ['one', 'two', 'three'];
var fixedX = 500;


svg.append('text').selectAll('tspan')
    .data(textArray)
    .enter()
    .append('tspan')
    .attr('x', fixedX)
    .attr('y', function(d,i){return 400 +(50*i)})
    .attr('stroke','red')
    .attr('stroke-width','2')
    .attr('text-anchor','start')
    .attr('dominate-baseline', 'middle')
    .attr('font-size', 50)
    .text(function(d){return d;});
