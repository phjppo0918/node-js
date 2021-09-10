process.on('exit', function (code) {
    console.log("goodbye")
})

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

process.exit();

process.emit('exit');
process.emit('exit');

console.log('프로그램 실행 중');