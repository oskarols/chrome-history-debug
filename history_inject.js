var historyItemDebug = function(type, historyItem) {
  if (type === "historyStateUpdate") {
    console.log('History API modified state of a frame:')
  } else if (type === "onBeforeNavigate") {
    console.log('On Before Navigation:')
  }

  console.log(historyItem);
};

var runTimeListener = function(request, sender, sendResponse) {
  var historyItem = request.historyItem,
      type = request.type;

  historyItemDebug(type, historyItem);
};

chrome.runtime.onMessage.addListener(historyItemDebug);
