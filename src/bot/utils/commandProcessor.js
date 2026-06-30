export async function processCommand(sock, jid, text) {
  const [cmd, ...args] = text.slice(1).split(' ');

  switch (cmd) {
    case 'status':
      // Fetching dari API kita sendiri
      const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/telemetry`);
      const data = await res.json();
      await sock.sendMessage(jid, { text: `[SYS_STATUS] ${data.data.serverStatus}\nUptime: ${data.data.uptime.toFixed(2)}s` });
      break;
      
    case 'ping':
      await sock.sendMessage(jid, { text: 'PONG // Ω∞' });
      break;

    default:
      await sock.sendMessage(jid, { text: 'Command tidak dikenali.' });
  }
}
