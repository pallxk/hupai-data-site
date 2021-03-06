import './app.css';

Highcharts.setOptions({
  lang: {
    contextButtonTitle: '导出图表',
    downloadJPEG: '下载 JPEG 格式图像',
    downloadPDF: '下载 PDF 格式文档',
    downloadPNG: '下载 PNG 格式图像',
    downloadSVG: '下载 SVG 格式图像',
    printChart: '打印图表',
    resetZoom: '重置缩放',
    resetZoomTitle: '重置缩放比例为 1:1',

    thousandsSep: '',
  }
});

$.get('delta.csv', function(csv) {

Highcharts.chart('chart', {
  chart: {
    zoomType: 'x',
  },
  data: {
    csv: csv,
    complete: function(options) {
      var series = options.series;
      var n = series.length;

      // 最新数据排最前
      for (var i = 0; i < n; ++i) {
        series[i].index = n-1 - i;
      }
      // 默认展示最新三个月的数据
      for (var i = 0; i < 3 && n - i > 0; ++i) {
        series[n-1 - i].visible = true;
      }
      // 默认展示去年同月数据
      if (n - 12 >= 0) {
        series[n - 12].visible = true;
      }
    }
  },
  plotOptions: {
    line: {
      visible: false,
    },
  },
  subtitle: {
    text: '图表：https://hupai.tips 数据：http://51hupai.org',
  },
  title: {
    text: '历年拍牌数据',
  },
  tooltip: {
    shared: true,
    valuePrefix: '¥',
  },
  yAxis: [
    {
      min: 0,
      tickInterval: 100,
      title: {
        text: '最低可成交价与警示价差值',
      },
    },
    {
      linkedTo: 0,
      opposite: true,
      title: {
        text: '',
      },
    },
  ],
});

});
