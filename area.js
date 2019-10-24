var dataArray = [14, 35, 56, 67, 99, 122, 150, 160, 233, 300, 322, 360]
var dataMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var crvTypes = [d3.curveCardinal, d3.curveBasis, d3.curveLinear, d3.curveStep, d3.curveNatural, d3.curveBundle];

var height = 400;
var width = 1000;

var parseMonth = d3.timeParse('%m');

var svg = d3.select('body')
  .append('svg')
  .attr('height', '100%')
  .attr('width', '100%');

var y = d3.scaleLinear()
    .domain([0,400])
    .range([height, 100]);

var x = d3.scaleTime()
    .domain([
      d3.min(dataMonths, function(d){return parseMonth(d);}),
      d3.max(dataMonths, function(d){return parseMonth(d);})])
    .range([0,width]); 

var yAxis= d3.axisLeft(y).ticks(3).tickPadding(5).tickSize(10);
var xAxis= d3.axisBottom(x); 

for (var t=0;t<1;t++){
    var area = d3.area()
                  .x(function(d, i){return x(parseMonth(dataMonths[i]))})
                  .y0(height)
                  .y1(function(d){return y(d); })
                  .curve(crvTypes[t]);

    var grp = svg.append('g')
      .attr('class', 'grp'+t)
      .attr('transform', 'translate('+((t*270)+50)+',50)');
  
    grp.append('g').attr('class', 'axis y').call(yAxis);
    grp.append('g').attr('class', 'axis x').attr('transform', 'translate(0,'+height+')').call(xAxis);

    grp.append('path')
      .attr('fill', 'none')
      .attr('stroke', 'black')
      .attr('stroke-width', '1')
      .attr('d', area(dataArray));    

    grp.selectAll('circle.grpcircle'+t)
      .data(dataArray)
      .enter()
      .append('circle')
      .attr('class', function(d, i){return "grpcircle"+i;})
      .attr('cx', function(d, i) {return x(parseMonth(dataMonths[i]))})
      .attr('cy', function(d){return y(d); })
      .attr('r', '2');

}