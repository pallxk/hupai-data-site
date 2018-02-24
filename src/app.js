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
  credits: {
    href: 'http://51hupai.org/',
    text: '数据来源：51hupai.org'
  },
  data: {
    csv: csv,
  },
  title: {
    text: '历年拍牌数据',
  },
  subtitle: {
    text: 'https://hupai.tips',
  },
  tooltip: {
    shared: true,
    valuePrefix: '¥',
  },
  yAxis: {
    min: 0,
    tickInterval: 100,
    title: {
      text: '警示价差值',
    },
  },
});

});
