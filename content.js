setTimeout(async () => {
  const pwds = document.querySelectorAll('[type=password]');
  pwds.forEach(pwd => {
    pwd.setAttribute('type', 'text');
  });
  await chrome.runtime.sendMessage({pwds: pwds.length});
});
