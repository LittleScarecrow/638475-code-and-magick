'use strict'

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ', 'Вашингтон '];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];


var wizards = [
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: COAT_COLOR[i],
    eyesColor: EYES_COLOR[i]
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: COAT_COLOR[i],
    eyesColor: EYES_COLOR[i]
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: COAT_COLOR[i],
    eyesColor: EYES_COLOR[i]
  },
  {
    name: WIZARD_NAMES[i] + WIZARD_SURNAMES[i],
    coatColor: COAT_COLOR[i],
    eyesColor: EYES_COLOR[i]
  }
];

for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;

  similarListElement.appendChild(wizardElement);
};
