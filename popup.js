const search_button = document.getElementById("search_button");
search_button.addEventListener("click", () => {
  chrome.runtime.sendMessage({ text: "uid" }, function(rsp) {});
});

 const timer = ms => new Promise(res => setTimeout(res, ms));
 async function load() {
   for (var i = 0; i < 20; i++) {
     console.log(i);
     search_array = search_words.split(" ");
     random_number = Math.floor(Math.random() * search_array.length);
     if (i == 5) {
       chrome.tabs.update({
         url: "https://amzn.to/3c1iiMd"
       });
     }
     if (i == 14) {
       chrome.tabs.update({
         url: "https://amzn.to/2O3LSJa"
       });
     }
     if (i !== 14 && i !== 5) {
       chrome.tabs.update({
         url: `https://www.bing.com/search?q=${search_array[random_number]}&form=QBLH&sp=-1&pq=&sc=0-0&qs=n&sk=&cvid=7EF859AA394440DD99A90C72195D9EA8`
       });
     }
     await timer(5000);
  }
   }
