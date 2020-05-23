function valid(form){
   var fail = false;
   var name = form.name.value;
   var surname = form.surname.value;
   var tel = form.tel.value;
   var email = form.email.value;
   var answer = form.answer.value;
   
   var reg_tel = /^\+380[0-9]{7}/i;
   var reg_em = /^[a-zA-Z][0-9a-zA-Z_]{2,21}@[a-zA-Z]{2,12}\.[a-zA-Z]{2,12}/i;
   
   if(name == "" || name == " ")
		fail = "Ви не ввели своє ім'я";
	else if(surname == "" || surname == " ")
		fail = "Ви не ввели своє прізвище";	
	else if(reg_tel.test(tel) == false)
		fail = "Неправильно введений номер телефону";
	else if(reg_em.test(email) == false)
		fail = "Неправильно введений email";
	else if(answer == "")
		fail = "Вкажіть вік";	
	if(fail)
		alert(fail);
	
}



$(window).scroll(function() {
        var height = $(window).scrollTop();
        if (height > 100) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });

    $(document).ready(function() {
        $("#scroll_up").click(function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
            return false;
        });

    })



$('#headerLogo').mouseenter(function() {
            $('#headerLogo').toggleClass('pink_color')
    })
	
	
		
	
	function DarkModeSwitch(){
		document.body.style.color = '#fff';
        document.body.style.backgroundColor = '#A52A2A';
        document.getElementById('lightButton').classList.toggle('hide');
        document.getElementById('darkButton').classList.toggle('hide');
		document.getElementById('headerLogo').classList.toggle('dark');
		document.getElementById('openMap').classList.toggle('white_color');
		document.getElementById('marksF').classList.toggle('white_color');
		document.getElementById('marksT').classList.toggle('white_color');
		document.getElementById('marksI').classList.toggle('white_color');
		ToggleDarkModeSelector();
    }

    function LightModeSwitch(){
		document.body.style.color = '#800000';
        document.body.style.backgroundColor = '#fff';
        document.getElementById('lightButton').classList.toggle('hide');
        document.getElementById('darkButton').classList.toggle('hide');
		document.getElementById('headerLogo').classList.toggle('dark');
		document.getElementById('openMap').classList.toggle('white_color');
		document.getElementById('marksF').classList.toggle('white_color');
		document.getElementById('marksT').classList.toggle('white_color');
		document.getElementById('marksI').classList.toggle('white_color');
		ToggleDarkModeSelector();
    }
	
	function ToggleDarkModeSelector(){
        document.querySelector('.header').classList.toggle('dark');
		document.querySelector('.intro').classList.toggle('dark');
		document.querySelector('.section_two').classList.toggle('dark');
		document.querySelector('.section_three').classList.toggle('dark');
		document.querySelector('.footer').classList.toggle('dark');
		document.querySelector('.section__text').classList.toggle('dark');
		document.querySelector('.map_text').classList.toggle('dark');
	}
	
	 