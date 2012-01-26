(function () {
  
  window.unread = 0;
  
  window.check_mail = function()
  {
    var old = window.unread;
    
    if(AAA == undefined) return false;
    
    inbox_ele = AAA.EcK.getElementById("e-mailoutline-row-($Inbox)1-elem-OUTLINEELEM5");    
    inbox_title = inbox_ele.innerHTML;
  
    new_count = inbox_title.substr(7, inbox_title.length - 8);
  
    if( new_count )
    {
        macgap.dock.badge = new_count;
        window.unread = new_count;
    }else
    {
        macgap.dock.badge = "";
        window.unread = 0;
    }
    
    if( window.unread > old )
    {
        //macgap.sound.playSystem("blow");
        macgap.growl.notify({ title: "Lotus iNotes", content: window.unread + " new email(s)"});
    }
    return true;
  }
  window.setInterval("window.check_mail();",1000);
  
})();