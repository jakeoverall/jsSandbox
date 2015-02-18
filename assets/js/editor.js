$(document).ready(function(){
	$('#userScript').codeblock({
		runButtonText: 'Test',
		consoleText: "You answer should show up here",
		editorTheme: "ace/theme/dawn"
	});

	$('body').on('click', '#next', function (e) {
		e.preventDefault();
		var answer = $('#userScript').codeblock('text');
		console.log(answer);
	});
});