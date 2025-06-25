// Botpress chat utility functions
let botpressInitialized = false;
let chatOpen = false;

export const initializeBotpress = () => {
  if (botpressInitialized) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const checkInterval = setInterval(() => {
      if (window.botpressWebChat) {
        clearInterval(checkInterval);
        botpressInitialized = true;
        
        // Register event listener only once
        window.botpressWebChat.onEvent((event) => {
          if (event.type === 'LIFECYCLE.LOADED') {
            console.log('Botpress WebChat loaded successfully');
          }
        }, ['LIFECYCLE.LOADED']);
        
        resolve();
      }
    }, 1000);

    // Timeout after 10 seconds
    setTimeout(() => {
      clearInterval(checkInterval);
      reject(new Error('Botpress initialization timeout'));
    }, 10000);
  });
};

export const openChat = () => {
  if (!botpressInitialized || !window.botpressWebChat) {
    throw new Error('Botpress not initialized');
  }

  if (chatOpen) {
    console.log('Chat is already open');
    return;
  }

  try {
    window.botpressWebChat.sendEvent({
      type: 'show'
    });
    chatOpen = true;
    return true;
  } catch (error) {
    console.error('Error opening chat:', error);
    throw error;
  }
};

export const closeChat = () => {
  if (!botpressInitialized || !window.botpressWebChat) {
    return;
  }

  try {
    window.botpressWebChat.sendEvent({
      type: 'hide'
    });
    chatOpen = false;
  } catch (error) {
    console.error('Error closing chat:', error);
  }
};

export const isChatOpen = () => {
  return chatOpen;
};

export const isBotpressReady = () => {
  return botpressInitialized && !!window.botpressWebChat;
}; 