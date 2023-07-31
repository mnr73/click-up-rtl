(() => {
	chrome.runtime.onMessage.addListener((obj, sender, response) => {
		console.log('new styles applied');
		if(document.querySelector('style[name="click-up-rtl-custom-style"]') == null){
			document.head.insertAdjacentHTML("beforeend", `<style name='click-up-rtl-custom-style'>
			ql-rendered-list-container,
			cu-slash-command,
			cu-task-editor .ql-block,
			.cu-task-row-main__link-text-inner,
			.cu-panel-board__clickable-name
			{direction:rtl;unicode-bidi:isolate}
			</style>`)
		}

	})
})();