$.get('delta.csv', function(csv) {

Highcharts.chart('chart', {
  data: {
    csv: csv,
  },
  title: {
    text: '历年拍牌数据',
  },
  subtitle: {
    text: '数据来源：51hupai.org',
  },
  yAxis: {
    title: {
      text: '警示价差值',
    },
  }
});

});
