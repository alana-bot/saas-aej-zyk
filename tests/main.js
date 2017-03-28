test('hello world', function() {
    return newTest()
        .expectText('📢 🤖')
        .sendText('hello')
        .expectText('hello world')
        .run();
})