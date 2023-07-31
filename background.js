chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	// console.log(tabId, changeInfo, tab);
	if (changeInfo.status && changeInfo.status == 'complete' && tab.url && tab.url.includes('app.clickup.com')) {
		if (chrome.tabs.sendMessage) {
			chrome.tabs.sendMessage(tabId, {
				type: "new"
			})
		}
	}
})