(function(newsBlock, news){
  var _newsBlock = newsBlock;
  _newsBlock.style.width = "440px";
  _newsBlock.style.height = "100px";
  
  function createNewsItemBlock(news){
    var _news = news;
    var _newsItemBlock = document.createElement("div");
    _newsItemBlock.style.width = "440px";
    _newsItemBlock.style.height = "100px"; 
    
    var _newsImageBlock = document.createElement("div");
    _newsImageBlock.style.width = "100px";
    _newsImageBlock.style.height = "100px";
    _newsImageBlock.style.float = "left";
    _newsImageBlock.style.backgroundImage = "url('" + news.image + "')";
    _newsImageBlock.style.backgroundRepeat = "no-repeat";
    _newsImageBlock.style.backgroundSize = "auto 100%";


    
    _newsItemBlock.appendChild(_newsImageBlock);
    
    var _contentBlock = document.createElement("div");
    _contentBlock.style.width = "340px";
    _contentBlock.style.height = "100px";
    _contentBlock.style.float = "left";
    
    var _tagsBlock = document.createElement("div");
    _tagsBlock.innerText = _news.tags;
    _contentBlock.appendChild(_tagsBlock);
    
    var _titleBlock = document.createElement("div");
    _titleBlock.innerText = _news.title.substring(0,40) + "...";;
    _contentBlock.appendChild(_titleBlock);
    
    var _newsSourceBlock = document.createElement("div");
    _newsSourceBlock.innerText = _news.source;
    _contentBlock.appendChild(_newsSourceBlock);
    
    var _annotationBlock = document.createElement("div");
    _annotationBlock.innerText = _news.annotation.substring(0,80) + "...";
    _contentBlock.appendChild(_annotationBlock);
    
    _newsItemBlock.appendChild(_contentBlock);
    
    return _newsItemBlock;
  }
  
  function createNewsItemListBlock(newsList) {
    var _newsItemListBlock = document.createElement("div");
    for(var i in newsList) {
      _newsItemListBlock.appendChild(createNewsItemBlock(newsList[i]));
    }
    return _newsItemListBlock;
  }
  
  _newsBlock.appendChild(createNewsItemListBlock(news));
})(document.querySelector("#news"), [
  {
    image: "https://s.yimg.com/uu/api/res/1.2/V0W9_f5asL.tt_hdUysFvA--/Zmk9c3RyaW07aD0xMjM7cHlvZmY9MDtxPTgwO3c9MjIwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/the_drive_165/5eee8539d184ab9f07199f3ed3a8ca04",
    tags:"tags",
    source: "source",
    title: "On The Road With The 2017 Lexus GX 460",
    annotation: "A few years ago, the second-generation Lexus GX 460 received an aggressive and necessary facelift. The updated, bold front fascia truly transformed the lackluster Lexus into a crossover with some serious bite. For my annual Thanksgiving excursion, I took the Lexus GX 460 on the road from Atlanta to Chicago to truly test its travel talents, daily use and overall appeal. Thankfully, Lexus saved a few cool points with the rear glass’s ability to open separately with a touch of a button."    
  },
  {
    image: "https://s.yimg.com/uu/api/res/1.2/R_ERinQF_uZKy8ZgkMI25Q--/Zmk9c3RyaW07aD0xOTM7cHlvZmY9MDtxPTgwO3c9MjIwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en_us/News/ap_webfeeds/c360ad23654c4aa5956a89329092b461.jpg.cf.jpg",
    tags:"tags",
    source: "source",
    title: "Recent developments surrounding the South China Sea",
    annotation: "EDITOR'S NOTE: This is a weekly look at the latest key developments in the South China Sea, home to several territorial conflicts that have raised tensions in the region. China's government-backed institute for the South China Sea has released a report detailing an increase in U.S. military activities in the region, saying they threaten China's national security and undermine trust between Washington and Beijing. According to the National Institute for South China Sea Studies , based on Hainan island province, the U.S. military has carried out more than 700 naval and aerial patrols in the region last year, deployed more advanced reconnaissance aircraft, drones, electronic surveillance ships and satellites as well as nuclear submarines and aircraft carriers."    
  }
]);