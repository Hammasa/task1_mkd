$('.toggle-menu').click(function () {
	$('.navbar').addClass('show')
	$(this).addClass('opened');
});

$('.menu').click(function () {
	$('.navbar').removeClass('show');
	$('.toggle-menu').removeClass('opened');
});