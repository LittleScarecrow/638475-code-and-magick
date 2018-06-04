'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_GAP = 50;
var TEXT_Y = 260;
var TEXTBAR_X = 125;
var BAR_Y = 90;
var RESULT_Y = 85;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var bar = {
  BAR_PRIMARY_COLOR: 'rgba(255, 0, 0, 1)'
};

var renderCloud = function (ctx, x, y, color) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var getBlueColor = function () {
  var blueColor = 'rgba(0, 0, 255, ' + (Math.random() * (1 - 0.25) + 0.25) + ')';
  return blueColor;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXTBAR_X, 40);
  ctx.fillText('Cписок результатов:', TEXTBAR_X, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), TEXTBAR_X + (BAR_WIDTH + BAR_GAP) * i, RESULT_Y, (BAR_HEIGHT * times[i]) / maxTime);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], TEXTBAR_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillStyle = names[i] === 'Вы' ? bar.BAR_PRIMARY_COLOR : getBlueColor();
    ctx.fillRect(TEXTBAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT * times[i]) / maxTime);
  }
};

