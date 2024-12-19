import { projects } from '../data/projects';

const TELEGRAM_TOKEN = '7524426506:AAFN6OPVaIAvKeSAv_Y3mAUVot3gsaQUpNI';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;
const WEBSITE_URL = 'https://portfolio-five-coral-31.vercel.app';

export const sendTelegramMessage = async (chatId: number, text: string) => {
  try {
    const message: any = {
      chat_id: chatId,
      text: text,
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [[
          {
            text: "📱 Open in Telegram",
            web_app: { url: WEBSITE_URL }
          }
        ]],
        resize_keyboard: true
      }
    };

    const response = await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    });

    return await response.json();
  } catch (error) {
    console.error('Error sending Telegram message:', error);
    return null;
  }
};

export const handleTelegramWebhook = async (update: any) => {
  try {
    const message = update.message;
    if (!message || !message.text) return;

    let responseText = '';

    // Handle different commands
    switch (message.text.toLowerCase()) {
      case '/start':
        responseText = `👋 Welcome to Kamrul's Portfolio Bot!\n\nClick the button below to view my interactive portfolio, or try these commands:\n\n📱 /portfolio - Open portfolio\n🚀 /projects - View projects\n📧 /contact - Contact info\n👨‍💻 /about - About me`;
        break;

      case '/portfolio':
        responseText = '🌐 Click below to open my portfolio:';
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

    await sendTelegramMessage(message.chat.id, responseText);
  } catch (error) {
    console.error('Error handling webhook:', error);
  }
}; 