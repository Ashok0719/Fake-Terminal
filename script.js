const input = document.getElementById('commandInput');
const output = document.getElementById('output');

const commands = {
  help: "Available commands:\n- help\n- whoami\n- scan\n- clear",
  whoami: "You are an ethical hacker 🚀",
  scan: "Scanning network...\nPort 80 - OPEN\nPort 443 - OPEN\nPort 22 - CLOSED",
};

function printOutput(text) {
  output.innerText += text + '\n';
  document.getElementById('terminal').scrollTop = output.scrollHeight;
}

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    printOutput(`user@localhost:$ ${cmd}`);
    if (cmd === 'clear') {
      output.innerText = '';
    } else if (commands[cmd]) {
      setTimeout(() => printOutput(commands[cmd]), 200);
    } else {
      setTimeout(() => printOutput(`Command not found: ${cmd}`), 200);
    }
    input.value = '';
  }
});
