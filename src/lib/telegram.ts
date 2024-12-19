import { projects } from '../data/projects';

const TELEGRAM_TOKEN = '7524426506:AAFN6OPVaIAvKeSAv_Y3mAUVot3gsaQUpNI';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const WEBSITE_URL = 'https://portfolio-five-coral-31.vercel.app';

export const sendTelegramMessage = async (chatId: number, text: string, webAppButton = false) => {
  try {
    console.log('Sending message:', { chatId, text, webAppButton }); // Debug log

    const message: any = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      reply_markup: webAppButton ? {
        keyboard: [[
          {
            text: "🌐 View Portfolio",
            web_app: { url: WEBSITE_URL }
          }
        ]],
        resize_keyboard: true,
        persistent: true
      } : undefined
    };

    console.log('Request body:', JSON.stringify(message, null, 2)); // Debug log

    const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    });

    const result = await response.json();
    console.log('Telegram API response:', result); // Debug log
    return result;
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return null;
  }
};

export const handleTelegramWebhook = async (update: any) => {
  try {
    console.log('Received webhook update:', JSON.stringify(update, null, 2)); // Debug log

    const message = update.message;
    if (!message || !message.text) {
      console.log('No message or text found in update'); // Debug log
      return;
    }

    let responseText = '';
    let showWebAppButton = false;

    // Handle different commands
    switch (message.text.toLowerCase()) {
      case '/start':
        responseText = `👋 Welcome to Kamrul's Portfolio Bot!\n\nUse these commands:\n\n🌐 /portfolio - View my portfolio\n📱 /projects - View my projects\n📧 /contact - Get contact info\n👨‍💻 /about - Learn about me`;
        showWebAppButton = true;
        break;

      case '/portfolio':
        responseText = '🌐 Here is my portfolio website:';
        showWebAppButton = true;
        break;

      case '/projects':
        responseText = '🚀 My Projects:\n\n' + 
          projects.map(p => `📱 ${p.title}\n${p.description}\n${p.demo ? `🔗 Demo: ${p.demo}\n` : ''}\n`).join('\n');
        break;

      case '/contact':
        responseText = `📫 Contact Information:\n\n🔗 LinkedIn: @kamrul-hasan-dev\n💻 GitHub: @Kallolx\n📧 Email: kallol.business.ds@gmail.com`;
        break;

      case '/about':
        responseText = `👨‍💻 About Me:\n\nI'm a Full Stack Developer specializing in React, Flutter, and Node.js. Currently exploring AI integration while pursuing Computer Science at BUBT.`;
        break;

      default:
        responseText = "❓ I don't understand that command. Try /start to see available commands.";
    }

    console.log('Preparing to send response:', { responseText, showWebAppButton }); // Debug log
    const result = await sendTelegramMessage(message.chat.id, responseText, showWebAppButton);
    console.log('Message sent result:', result); // Debug log

  } catch (error) {
    console.error('Error handling webhook:', error);
  }
}; 