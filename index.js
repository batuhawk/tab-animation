tabTextAnimation = () => {
    let tabAvailable = false;
    let oldTitle = document.title;
  
    /*If we are in another tab*/
    window.onblur = () => {
      let title = " Take care yourself! ";
      let position = 0;
      
      tabAvailable = false;
  
      animatetitle = () => {
          if(tabAvailable == true) return
  
          document.title = title.substring(position, title.length) + title.substring(0, position); position++;
  
          if (position > title.length) 
              position = 0
              window.setTimeout(animatetitle, 100);
      }
      animatetitle();
    };
  
    /*If we are in our tab*/
    window.onfocus = () => {
      tabAvailable = true;
  
      if(tabAvailable == true) document.title = oldTitle;
    }
  } 
  
  tabTextAnimation();