var onUncaughtException = function (error) {
    console.log('예외 발생!');

    process.removeListener('uncaughtException', onUncaughtException);
}

process.on('uncaughtException', onUncaughtException);

var test = function() {
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test, 2000);