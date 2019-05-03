// JavaScript
function parallax(){
	var container1 = document.getElementById('container');
	//very big bubbles
	var parBig1 = document.getElementById('bubble_big1');
	var parBig2 = document.getElementById('bubble_big2');
	var parBig3 = document.getElementById('bubble_big3');
	//big bubbles
	var par1 = document.getElementById('bubble_1');
	var par2 = document.getElementById('bubble_2');
	var par3 = document.getElementById('bubble_3');
	var par4 = document.getElementById('bubble_4');
	var par5 = document.getElementById('bubble_5');
	var par6 = document.getElementById('bubble_6');
	var par7 = document.getElementById('bubble_7');
	var par8 = document.getElementById('bubble_8');
	var par9 = document.getElementById('bubble_9');
	var par10 = document.getElementById('bubble_10');
	var par11 = document.getElementById('bubble_11');
	//small bubbles
	var parSmall1 = document.getElementById('bubble_sm1');
	var parSmall2 = document.getElementById('bubble_sm2');
	var parSmall3 = document.getElementById('bubble_sm3');
	var parSmall4 = document.getElementById('bubble_sm4');
	var parSmall5 = document.getElementById('bubble_sm5');
	var parSmall6 = document.getElementById('bubble_sm6');
	var parSmall7 = document.getElementById('bubble_sm7');
	var parSmall8 = document.getElementById('bubble_sm8');
	var parSmall9 = document.getElementById('bubble_sm9');
	var parSmall10 = document.getElementById('bubble_sm10');
	var parSmall11 = document.getElementById('bubble_sm11');
	//very small bubbles
	var parVS1 = document.getElementById('bubble_vsm1');
	var parVS2 = document.getElementById('bubble_vsm2');
	var parVS3 = document.getElementById('bubble_vsm3');
	var parVS4 = document.getElementById('bubble_vsm4');
	var parVS5 = document.getElementById('bubble_vsm5');
	var parVS6 = document.getElementById('bubble_vsm6');
	var parVS7 = document.getElementById('bubble_vsm7');
	var parVS8 = document.getElementById('bubble_vsm8');
	var parVS9 = document.getElementById('bubble_vsm9');
	var parVS10 = document.getElementById('bubble_vsm10');
	var parVS11 = document.getElementById('bubble_vsm11');

	//container
	container1.style.top = -(window.pageYOffset / 5.8) + 'px';

	parBig1.style.top = -(window.pageYOffset / 5) + 'px';
	parBig2.style.top = -(window.pageYOffset / 6) + 'px';
	parBig3.style.top = -(window.pageYOffset / 5.5) + 'px';

	par1.style.top = -(window.pageYOffset / 4) + 'px';
	par2.style.top = -(window.pageYOffset / 6) + 'px';
	par3.style.top = -(window.pageYOffset / 2.5) + 'px';
	par4.style.top = -(window.pageYOffset / 5) + 'px';
	par5.style.top = -(window.pageYOffset / 4) + 'px';
	par6.style.top = -(window.pageYOffset / 5) + 'px';
	par7.style.top = -(window.pageYOffset / 3) + 'px';
	par8.style.top = -(window.pageYOffset / 4) + 'px';
	par9.style.top = -(window.pageYOffset / 2.5) + 'px';
	par10.style.top = -(window.pageYOffset / 3.5) + 'px';
	par11.style.top = -(window.pageYOffset / 3.5) + 'px';

	parSmall1.style.top = -(window.pageYOffset / 3) + 'px';
	parSmall2.style.top = -(window.pageYOffset / 4) + 'px';
	parSmall3.style.top = -(window.pageYOffset / 5) + 'px';
	parSmall4.style.top = -(window.pageYOffset / 2) + 'px';
	parSmall5.style.top = -(window.pageYOffset / 2.5) + 'px';
	parSmall6.style.top = -(window.pageYOffset / 3) + 'px';
	parSmall7.style.top = -(window.pageYOffset / 4.5) + 'px';
	parSmall8.style.top = -(window.pageYOffset / 2) + 'px';
	parSmall9.style.top = -(window.pageYOffset / 2.5) + 'px';
	parSmall10.style.top = -(window.pageYOffset / 4) + 'px';
	parSmall11.style.top = -(window.pageYOffset / 3.5) + 'px';

	parVS1.style.top = -(window.pageYOffset / 4.5) + 'px';
	parVS2.style.top = -(window.pageYOffset / 5.5) + 'px';
	parVS3.style.top = -(window.pageYOffset / 3.5) + 'px';
	parVS4.style.top = -(window.pageYOffset / 3) + 'px';
	parVS5.style.top = -(window.pageYOffset / 4.5) + 'px';
	parVS6.style.top = -(window.pageYOffset / 4) + 'px';
	parVS7.style.top = -(window.pageYOffset / 3.5) + 'px';
	parVS8.style.top = -(window.pageYOffset / 3.9) + 'px';
	parVS9.style.top = -(window.pageYOffset / 5) + 'px';
	parVS10.style.top = -(window.pageYOffset / 3.5) + 'px';
	parVS11.style.top = -(window.pageYOffset / 3.5) + 'px';
}
window.addEventListener("scroll", parallax, false);