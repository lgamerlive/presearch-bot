const search_button = document.querySelector('#search_button');

search_button.addEventListener('click', () => {
    chrome.runtime.sendMessage({ text: 'uid' }, function (rsp) {});
});
