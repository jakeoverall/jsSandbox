$(document).ready(function(){
	$('#userScript').codeblock({
		runButtonText: 'Test',
		consoleText: "console output",
		editorTheme: "ace/theme/bcw"
	});

	$('body').on('click', '#next', function (e) {
		e.preventDefault();
		var answer = $('#userScript').codeblock('text');
		console.log(answer);
	});
});