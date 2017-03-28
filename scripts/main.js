addGreeting((user, response) => {
    response.sendText('📢 🤖')
})

newScript()
  .dialog((sessions, response) => {
    If (sessions.message.type === 'text') {
        switch (sessions.message.text) {
            // solved better with intents!
            case 'hello':
            case 'hi':
            case 'hey':
                return response.sendText('hello world');
            case 'echo':
                response.sendText(sessions.message.text);
                response.sendText(sessions.message.text);
                response.sendText(sessions.message.text);
                return;
            default:
                return response.sendText(sessions.message.text);
        }
    }
  });
  