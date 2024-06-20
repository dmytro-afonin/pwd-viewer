chrome.action.onClicked.addListener(async (tab) => {
  await chrome.scripting.executeScript({
    target: {tabId: tab.id, allFrames: true},
    files: ['content.js']
  });
});

chrome.runtime.onMessage.addListener(async (request) => {
  await chrome.action.setBadgeText({
    text: `${+request.pwds}`
  });
});
