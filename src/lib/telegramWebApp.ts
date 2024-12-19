declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready(): void;
        expand(): void;
        close(): void;
      };
    };
  }
}

export const initTelegramWebApp = () => {
  if (window.Telegram?.WebApp) {
    // Initialize Telegram WebApp
    window.Telegram.WebApp.ready();
    
    // Expand the WebApp to full height
    window.Telegram.WebApp.expand();
  }
}; 