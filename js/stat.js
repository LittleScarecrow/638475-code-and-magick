'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_GAP = 10;
var BAR_GAP = 50;
var TEXT_Y = 260;
var TEXTBAR_X = 125;
var TEXTBAR_Y = 40;
var BAR_Y = 240;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;

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
  var blueColor = 'rgba(0, 0, 255, ' + Math.random();
  return blueColor;
};

var writeText = function (ctx) {
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TEXTBAR_X, TEXTBAR_Y);
  ctx.fillText('Cписок результатов:', TEXTBAR_X, TEXTBAR_Y + 20);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_GAP, CLOUD_Y + CLOUD_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  writeText(ctx);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {

    var positionX = TEXTBAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var randomHeight = (BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), positionX, (BAR_Y - 5) + randomHeight);

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], positionX, TEXT_Y);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getBlueColor();
    ctx.fillRect(positionX, BAR_Y, BAR_WIDTH, randomHeight);
  }
};

