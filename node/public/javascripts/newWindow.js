function (){
		if(copiedPredId && copiedPredId.length > 0){
			var docUrl = showServer+"/document.do?p_id="+copiedPredId+"&a_t=EDIT_DOCUMENT";//No I18N	
			if(ticket && ticket.length > 0 && ticket != "null"){
				docUrl = docUrl+"&ticket="+ticket;
			}
			var sWidth = screen.width-5;
			var sHeight = screen.height-90;
			var newWindowParam = "toolbar=no,location=no,directories=no,status=no,menubar=no,"+"scrollbars=no,width="+sWidth+",height="+sHeight+",left=0,top=0";//No I18N
			window.open(docUrl, "", newWindowParam);
		}
	}
	
	// copied from zoho.com to make new window = monitor size 