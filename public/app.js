(function () {

  window.unread = 0;

  window.check_mail = function()
  {
    var old = window.unread;

    if(typeof AAA === 'undefined') return false;
	
	//Attachments should just download!
	var downloads = AAA.EcK.getElementsByClassName("s-attachments-text");
	if(downloads.length)
	{
	  var links = downloads[0].children;
	  for(var i=0; i < links.length; i++)
	  {
		links[i].onclick = "";
		links[i].target = "_self";
	  }
	}

    inbox_ele = AAA.EcK.getElementById("e-mailoutline-row-($Inbox)1-elem-OUTLINEELEM5");    
    inbox_title = inbox_ele? inbox_ele.innerHTML : 'Inbox 0';
  
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
        macgap.growl.notify({ title: "Lotus iNotes", content: window.unread + " new email" + (window.unread > 1? "s" : "")});
    }
    return true;
  }
  window.setInterval("window.check_mail();",1000);

})();
