import { handleTelegramWebhook } from '../src/lib/telegram';

export default async function handler(req, res) {
  console.log('Webhook received:', req.method, JSON.stringify(req.body, null, 2)); // Debug log

  if (req.method !== 'POST') {
    console.log('Invalid method:', req.method); // Debug log
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await handleTelegramWebhook(req.body);
    res.status(200).json({ message: 'OK' });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
} 