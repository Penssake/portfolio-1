'use strict'

var resumeArr = [];

//Constructor function
function Resume(resumeDataObj) {
  this.name = resumeDataObj.name;
  this.location = resumeDataObj.location;
  this.dates = resumeDataObj.dates;
  this.position = resumeDataObj.position;
  this.description = resumeDataObj.description;
}

Resume.prototype.aboutMe = function() {
var newAbout = $('article.template').clone();

newAbout.find('h1').html(this.name);
newAbout.find('#locationId').html(this.location);
newAbout.find('#datesId').html(this.dates);
newAbout.find('#positionId').html(this.position);
newAbout.find('article-body').html(this.description);
}

resumeRawData.forEach(function(resumeObject){
  resumeArr.push(new Resume(resumeObject));
});

resumeArr.forEach(function(resume) {
  $('.data').append(resume.aboutMe());
});