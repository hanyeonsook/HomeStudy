// 표준 입력의 스트림은 멈춰져 있는 상태가 기본 동작인데, resume() 실행으로 표준 입력에서 읽어들일 수 있다.
process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
	process.stdout.write('data: ' + chunk);
});

// 표준 입력이 종료될 때 end 이벤트가 발생한다. REPL에서 ctrl + D 실행 시
// ctrl + c 는 프로세스를 종료시키므로 실행 안됨
// 결론적으로, 윈도우에서는 process.stdin 에서 ctrl + D 로 종료 이벤트가 발생하지 않는다.
process.stdin.on('end', function(){
	process.stdout.write('end');
});