function modalWindow(url,args,width, height){
	  var sURL = url
	  var sFeatures = "dialogWidth:" + width + "px; dialogHeight:" + height + "px; "
	                + "help:no; scroll:yes; center:yes; status:no;resizable:yes";
	  var returnValue = window.showModalDialog(sURL, args, sFeatures);
	  if(returnValue!=null){
			for(var i=0;i<returnValue.length;i++){
				if(i==0){
					document.find.handler.value=returnValue[i];
				}
				if(i==1){
					document.find.protocolno.value=returnValue[i];
				}
				if(i==2){
					document.find.comm_rate.value=returnValue[i];
				}
				if(i==3){
					document.getElementById("min_rate").innerText="����:"+returnValue[i];
				}
				if(i==4){
					document.getElementById("max_rate").innerText="����"+returnValue[i];
				}
			}
		}
}

