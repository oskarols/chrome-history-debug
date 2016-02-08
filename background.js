chrome.webNavigation.onBeforeNavigate.addListener(function(historyItem) {
  var tabID = details.tabId;

  chrome.tabs.sendMessage(tabID, {
    "type": "onBeforeNavigate",
    "historyItem": details
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  var tabID = details.tabId;

  chrome.tabs.sendMessage(tabID, {
    "type": "historyStateUpdate",
    "historyItem": details
  });
});
