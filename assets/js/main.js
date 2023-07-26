var messages_content = $('.messages-content');
var greeting_intro = 0;
var response;
var main_data;

$(document).ready(function() {

	$.getJSON("https://api.countapi.xyz/hit/eni4sure.github.io/hngi-chatbot", function(view) {
		$("#page_view_no").html( view.value );
	});

	$.getJSON("https://disease.sh/v2/countries/NG", function(response) {
		main_data = response;
	});

});

$(window).load(function() {
	messages_content.mCustomScrollbar();
	setTimeout(function() {
		output_message();
	}, 100);
});

function updateScrollbar() {
	messages_content.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
		scrollInertia: 10,
		timeout: 0
	});
}

function insert_my_message() {
	msg = $('.message-input').val();
	if ($.trim(msg) == '') {
		return false;
	}
	$('<div class="message message-me">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
	updateScrollbar();
	setTimeout(function() {
		output_message();
	}, 1000 + (Math.random() * 20) * 100);
}

// On submit message
$('.message-submit').click(function() {
	insert_my_message();
});
$(window).on('keydown', function(e) {
	if (e.which == 13) {
		insert_my_message();
		return false;
	}
});

function output_message() {
	$('<div class="message loading new"><div class="avatar"><img src="assets/img/3(105).png" /></div><span></span></div>').appendTo($('.mCSB_container'));
	updateScrollbar();

	response = null;
	message_react_value = null;
	message_react_value = $('.message-input').val();
	$('.message-input').val(null);

	if ( greeting_intro == 0 ) {

		response = '<b>Hello there</b>, My name is <b>Matthew</b>. Can I meet you?';
	}

	if ( greeting_intro == 1 ) {

		response = 'Nice meeting you! <br> So, here are the records in my dataset. <br> <br> <b>0</b>: What is Covid-19 <br> <b>1</b>: Covid-19 updates <br> <b>2</b>: Covid-19 symptoms <br> <b>3</b>: How to Stay Safe? <br> <b>4</b>: Covid-19 prevention <br> <b>5</b>: Covid-19 helplines <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a>';
	}

	if ( greeting_intro > 1) {

		if ( message_react_value == "0" || message_react_value == "1" || message_react_value == "2" || message_react_value == "3" || message_react_value == "4" || message_react_value == "5" ) {

			if ( message_react_value == "0") {

				response = ` Coronaviruses are zoonotic, meaning they are normally transmitted between animals and people.<br> The coronavirus disease (COVID-19) is caused by a new strain of coronavirus (SARS-CoV-2) that has not been previously identified in humans. It was first reported to WHO on the 31st of December, 2019 in Wuhan, China. <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a> `;
			}

			if ( message_react_value == "1") {

				response = ` Here is the summary of COVID-19 Stats in Nigeria <br><br> New Confirmed: <b>`+main_data.todayCases+`</b> <br> Total Confirmed: <b style="color:blue;">`+main_data.cases+`</b> <br> New Death: <b>`+main_data.todayDeaths+`</b> <br> Total Death: <b style="color:red;">`+main_data.deaths+`</b> <br> New Recoveries: <b>`+main_data.todayRecovered+`</b> <br> Total Recovered: <b style="color:green;">`+main_data.recovered+`</b> <br><br> <b>Stay at Home, Stay Safe.</b> <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a> `;
			}

			if ( message_react_value == "2") {

				response = ` Some of the symptoms of the COVID-19 include: <br><br> - Cough <br> - Shivering /shaking (chills) <br> - Body pain <br> - Headache <br> - Sore throat <br> - Recent loss of taste or smell <br> - Difficulty in breathing/shortness of breath <br> - Diarrhoea/abdominal pain <br> - Runny nose/catarrh <br> - Fatigue (tiredness) <br><br> If you are experiencing any of these, please call the covid-19 toll free now ! <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a> `;
			}

			if ( message_react_value == "3") {

				response = ` <b>How to Stay Safe During the Covid-19 Lockdown?</b> <br><br> Coronavirus disease spreads through contact with an infected person when they cough or sneeze. <br> It also spreads when a person touches a surface or object that has the virus on it, then touches their eyes, nose, or mouth. <br> Time from exposure to onset of symptoms is generally between two and fourteen days, with an average of five days. <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a> `;
			}
			
			if ( message_react_value == "4") {

				response = ` Prevention tips for covid-19: <br><br> - <b>Wash Hands</b> regularly with soap and water or use alcohol-based sanitizers <br> - <b>Reduce the spreead</b> of Covid-19 through hugging, handshakes. <br> - <b>Maintain</b> at least 2 metres (5 feet) distance between yourself and anyone who is coughing or sneezing. <br> - <b>Stay at home</b> if you don't feel well with symptoms like fever, cough and difficulty in breathing. <br> - <b>Cover your nose</b>with tissue when sneezing or coughing.</a> <br> - <b>Cough or sneeze</b>into the sleeve of your elbow if no tissue is available.</a> <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a> `;
			}
			
			if ( message_react_value == "5") {

				response = ` Covid-19 official toll free helpline <br> ================== <br><br> I was designed by: <a href="https://linkedin.com/in/imatty10" target="_blank">Matthew A. Afolabi</a> `;
			}

		} else {

			response = 'I dont seem to understand that! <br> Like I said, Here are the records in my dataset: <br> <b>0</b>: for covid-19 helplines <br> <b>1</b>: for covid-19 updates <br> <b>2</b>: for covid-19 symptoms <br> <b>3</b>: for covid-19 prevention <br> <b>4</b>: Covid-19 prevention <br> <b>5</b>: Covid-19 helplines <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a>';
		}
	}

	if ( response == null ) {

		response = 'Nice meeting you! <br> So here are the records in my dataset <br> kindly Exit when done!<br><br> Here they are: <br> <b>0</b>: for covid-19 helplines <br> <b>1</b>: for covid-19 updates <br> <b>2</b>: for covid-19 symptoms <br> <b>3</b>: for covid-19 prevention <br> <b>4</b>: Covid-19 prevention <br> <b>5</b>: Covid-19 helplines <br><br> I was designed by: <a href="http://imatty.rf.gd" target="_blank">Matthew A.</a>';
	}

	greeting_intro++;

	setTimeout(function() {
		$('.message.loading').remove();
		$('<div class="message new"><div class="avatar"><img src="assets/img/3(105).png" /></div>' + response + '</div>').appendTo($('.mCSB_container')).addClass('new');
		updateScrollbar();
	}, 1000 + (Math.random() * 20) * 100);

}