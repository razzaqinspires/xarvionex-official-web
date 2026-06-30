import { processCommand } from '../utils/commandProcessor.js';

export async function handleMessage(sock, message) {
  const remoteJid = message.key.remoteJid;
  const text = message.message?.conversation || message.message?.extendedTextMessage?.text;

  if (!text) return;

  console.log(`[EVENT] Received: ${text} from ${remoteJid}`);

  // Route to Command Processor
  if (text.startsWith('/')) {
    await processCommand(sock, remoteJid, text);
  } else {
    // Default reply or AI hook
    await sock.sendMessage(remoteJid, { text: 'Sistem XARVIONEX Ω∞ aktif. Gunakan /help untuk instruksi.' });
  }
}
