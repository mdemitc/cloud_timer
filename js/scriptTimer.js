document.addEventListener('DOMContentLoaded', function(){
	var addButton = document.getElementById('addTr');

	addButton.addEventListener('click', myTimer.addTableRow);
});


myTimer = {
	click: function(e, elem) {
		if(elem.value == 'start') {
			elem.value = 'stop';
			this.startTimer(e, elem);
		} else {
			elem.value = 'start';
			this.stopTimer(elem);
			myTimer.fullTime();
		}
	},
	startTimer: function(e, elem) {
		var myObject = e.target,
			whereTimer = elem.parentNode.parentNode.children[1];

		if (!myObject.hours && !myObject.minutes && !myObject.seconds) {
			myObject.hours = 0;
			myObject.minutes = 0;
			myObject.seconds = 0;
		}

		elem.myTimerObj = setInterval(function(){

			if (myObject.seconds < 59)
				myObject.seconds++; 
			else if (myObject.minutes < 59){
				myObject.minutes++;
				myObject.seconds = 0;
			} else {
				myObject.hours++;
				myObject.minutes = 0;
				myObject.seconds = 0;
			}

			//00:00:00 this format
			var h,m,s;
			(myObject.hours < 10) ? h = ('0' + myObject.hours).toString(): h = myObject.hours;
			(myObject.minutes < 10) ? m = ('0' + myObject.minutes).toString(): m = myObject.minutes;
			(myObject.seconds < 10) ? s = ('0' + myObject.seconds).toString(): s = myObject.seconds;

			whereTimer.innerHTML = h + ':' + m + ':' + s;
		}, 1000);
	},
	stopTimer: function(elem) {
		clearInterval(elem.myTimerObj);
	},
	deleteTableRow: function(elem) {
		var takeRow = elem.parentNode.parentNode;

		takeRow.parentNode.removeChild(takeRow);
	},
	addTableRow: function() {
		var enterName = document.getElementById('enterName').value,
			enterTime = '00:00:00',
			enterGoal = '---',
			enterProgress = ' ';

			$('.table tbody tr:nth-child(2)').before("<tr><td>" 
								+ enterName + "</td><td class='timer'>" 
								+ enterTime + "</td><td>" 
								+ enterGoal  + "</td><td>"
								+ enterProgress + "</td><td>"
								+ "<input type='button' value='start' class='start btn btn-default' onclick='myTimer.click(event, this)'>"
								+ "<input type='button' value='X' class='btn btn-default' onclick='myTimer.deleteTableRow(this)'>"
								+ "</td></tr>");
	},
	//Not finished
	fullTime: function(elem) {
		var whereTimer = document.getElementsByClassName('timer');
		
		for(var i = 0; i < whereTimer.length; i++) {
			var getNumbers = whereTimer[i].innerHTML.split(':'),
				total = 0;
				//getH = + getNumbers[0] + getH;
				//getM = + getNumbers[1] + getM;
				//getS = + getNumbers[2] + getS;

				//total = getH + ':' + getM + ':' + getS;

			//console.log(getS);
		}
	}
}