addGreeting((user, response) => {
    response.sendText('📢 🤖')
})

newScript()
  .dialog((session, response) => {
    if (session.message.type === 'text') {
        switch (session.message.text) {
            // solved better with intents!
            case 'hello':
            case 'hi':
            case 'hey':
                return response.sendText('hello world');
            case 'echo':
                response.sendText(session.message.text);
                response.sendText(session.message.text);
                response.sendText(session.message.text);
                return;
            default:
                return response.sendText(session.message.text);
        }
    }
  });
  