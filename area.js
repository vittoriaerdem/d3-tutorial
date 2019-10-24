var dataArray = [14, 35, 56, 67, 99, 122, 150, 160, 233, 300, 322, 360]
var dataMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var height = 400;
var width = 1000;

var area = d3.area()
              .x(function(d, i){return i*20})
              .y0(height)
              .y1(function(d){return height-d; });

var svg = d3.select('body')
  .append('svg')
  .attr('height', '100%')
  .attr('width', '100%');

svg.append('path')
  .attr('fill', 'pink')
  .attr('d', area(dataArray)); 