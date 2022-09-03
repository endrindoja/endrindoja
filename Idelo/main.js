
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;
	var question19 = document.quiz.question19.value;
	var question20 = document.quiz.question20.value;
	var question21 = document.quiz.question21.value;
	var question22 = document.quiz.question22.value;
	var question23 = document.quiz.question23.value;
	var question24 = document.quiz.question24.value;
	var question25 = document.quiz.question25.value;
	var question26 = document.quiz.question26.value;
	var question27 = document.quiz.question27.value;
	var question28 = document.quiz.question28.value;
	var question29 = document.quiz.question29.value;
	var question30 = document.quiz.question30.value;
	var question31 = document.quiz.question31.value;
	var question32 = document.quiz.question32.value;
	var question33 = document.quiz.question33.value;
	var question34 = document.quiz.question34.value;
	var question35 = document.quiz.question35.value;
	var question36 = document.quiz.question36.value;
	var question37 = document.quiz.question37.value;
	var question38 = document.quiz.question38.value;
	var question39 = document.quiz.question39.value;
	var question40 = document.quiz.question40.value;
	var question41 = document.quiz.question41.value;
	var question42 = document.quiz.question42.value;
	var question43 = document.quiz.question43.value;
	var question44 = document.quiz.question44.value;
	var question45 = document.quiz.question45.value;
	var question46 = document.quiz.question46.value;
	var question47 = document.quiz.question47.value;
	var question48 = document.quiz.question48.value;
	var question49 = document.quiz.question49.value;
	var question50 = document.quiz.question50.value;
	var correct = 0;


	if (question1 == "ist abgefahren") {
		correct++;
}
	if (question2 == "hat angefangen") {
		correct++;
}	
	if (question3 == "ist angekommen") {
		correct++;
	}

	if (question4 == "hat angerufen") {
		correct++;
	}

	if (question5 == "ist aufgestand") {
		correct++;
	}

	if (question6 == "hat ausgesehen") {
		correct++;
	}

	if (question7 == "hat bekommen") {
		correct++;
	}

	if (question8 == "ist geblieben") {
		correct++;
	}

	if (question9 == "hat gebracht") {
		correct++;
	}

	if (question10 == "hat gedacht") {
		correct++;
	}

	if (question11 == "hat eingeladen") {
		correct++;
	}

	if (question12 == "hat gegessen") {
		correct++;
	}

	if (question13 == "ist gefahren") {
		correct++;
	}

	if (question14 == "hat ferngesehen") {
		correct++;
	}

	if (question15 == "hat gefunden") {
		correct++;
	}

	if (question16 == "ist geflogen") {
		correct++;
	}

	if (question17 == "hat gegeben") {
		correct++;
	}

	if (question18 == "hat gefallen") {
		correct++;
	}

	if (question19 == "ist gegangen") {
		correct++;
	}

	if (question20 == "hat gewonnen") {
		correct++;
	}

	if (question21 == "hat gehabt") {
		correct++;
	}

	if (question22 == "hat geheißen") {
		correct++;
	}

	if (question23 == "hat geholfen") {
		correct++;
	}

	if (question24 == "hat gekannt") {
		correct++;
	}

	if (question25 == "ist gekommen") {
		correct++;
	}

	if (question26 == "hat gekonnt") {
		correct++;
	}

	if (question27 == "ist gelaufen") {
		correct++;
	}

	if (question28 == "hat gelesen") {
		correct++;
	}

	if (question29 == "hat mitgebracht") {
		correct++;
	}

	if (question30 == "ist mitgefahren") {
		correct++;
	}

	if (question31 == "hat gemocht") {
		correct++;
	}

	if (question32 == "hat gemusst") {
		correct++;
	}

	if (question33 == "ist geritten") {
		correct++;
	}

	if (question34 == "hat geschlafen") {
		correct++;
	}

	if (question35 == "hat geschrieben") {
		correct++;
	}

	if (question36 == "ist geschwommen") {
		correct++;
	}

	if (question37 == "hat gesehen") {
		correct++;
	}

	if (question38 == "ist gewesen") {
		correct++;
	}

	if (question39 == "hat gesungen") {
		correct++;
	}

	if (question40 == "hat gesprochen") {
		correct++;
	}

	if (question41 == "ist gestanden") {
		correct++;
	}

	if (question42 == "hat getroffen") {
		correct++;
	}

	if (question43 == "hat getrunken") {
		correct++;
	}

	if (question44 == "ist umgestiegen") {
		correct++;
	}
	
	if (question45 == "hat vergessen") {
		correct++;
	}

	if (question46 == "hat verloren") {
		correct++;
	}

	if (question47 == "hat verstanden") {
		correct++;
	}

	if (question48 == "hat wehgetan") {
		correct++;
	}

	if (question49 == "hat gewusst") {
		correct++;
	}

	if (question50 == "hat gewollt") {
		correct++;
	}
	
	
	var messages = ["Great job!", "That's just okay", "You really need to do better"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 50) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	}
	
