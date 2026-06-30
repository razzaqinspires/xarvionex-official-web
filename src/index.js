import { startBot } from './bot/client.js';

console.log('[SYS_BOOT] Inisiasi XARVIONEX WhatsApp Agent...');

try {
  startBot().then(() => {
    console.log('[SYS_BOOT] Bot Service Online.');
  });
} catch (error) {
  console.error('[SYS_CRITICAL] Bot failed to initialize:', error);
  process.exit(1);
}
