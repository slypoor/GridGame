  function randomizeBoard() {
	  var numbers = [-1, 0, 1]
	  var totalItems = document.getElementsByClassName('calc');
	  for (var i = 0; i < totalItems.length; i++) {
		  totalItems[i].innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
		  var number = totalItems[i].innerHTML;
		  determineBackgroundColour(number, totalItems[i]);
	  }
	  calculateScore();
  }
  
  function determineBackgroundColour(number, item) {
	  if (number == 1) {
		  item.style.backgroundColor = "green";
	  } else if (number == 0) { 
		  item.style.backgroundColor = "white";
	  } else if (number == -1) {
		  item.style.backgroundColor = "red";
	  }
  }
  
  function calculateScore() {
	  var totalItems = document.getElementsByClassName('calc');
	  var result = 0;
	  for (var i = 0; i < totalItems.length; i++) {
		  var number = parseInt(totalItems[i].innerHTML, 10);
		  result = result + number;
	  }
	  var score = document.getElementById('score');
	  var bestScore = document.getElementById('best-score');
	  score.innerHTML = result;
	  if (parseInt(score.innerHTML) > parseInt(bestScore.innerHTML)) {
		  bestScore.innerHTML = score.innerHTML;
	  }
  }
  
  function addToRow(row) {
	  var items = document.getElementsByClassName(row);
	  addToItems(items);
  }
  
  function addToColumn(column) {
	  var items = document.getElementsByClassName(column);
	  addToItems(items);
  }
   
  function addToItems(items) {
	  for (var i = 0; i < items.length; i++) {
		  var number = items[i].innerHTML;
		  if (number == 1) {
			  number = -2;
		  }
		  number++;
		  determineBackgroundColour(number, items[i]);
		  items[i].innerHTML = number;
	}
	calculateScore();
}
