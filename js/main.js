'use strict';

const newHomeworkContainer = document.querySelector('.newHomerwork__container');
const moreHomeworkButton = document.querySelector('.button__add');
const addHomeworkButton = document.querySelector('.newHomerwork__button');
const homeworksContainer = document.querySelector('.list__chores');
function showNewHomeworkContainer() {
  newHomeworkContainer.classList.toggle('hidden');
}
function paintHomework() {
  const newHomework = document.querySelector('.newHomerwork__input').value;
  var homework = '<li class="item"><input type="checkbox" class="checkbox"><h1>'+ newHomework +'</h1></li>';
  homeworksContainer.innerHTML += homework;
  newHomeworkContainer.classList.add('hidden');
  document.querySelector('.newHomerwork__input').value = "";
  console.log(newHomework)

}
moreHomeworkButton.addEventListener('click', showNewHomeworkContainer);
addHomeworkButton.addEventListener('click', paintHomework);
