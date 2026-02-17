chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes("app.intercom.com")) {
    chrome.tabs.sendMessage(tab.id, { action: "togglePanel" });
  }
});
