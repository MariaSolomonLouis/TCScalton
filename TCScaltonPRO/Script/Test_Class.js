﻿var POM_Class = require("POM_Class");

function Test1(){
	try{
		var pom_class = new POM_Class();
    
    var test = pom_class.MY_CONST;
		
		var sMessage = pom_class.TestVariable();
		
		pom_class.print(sMessage);
	}
	catch(e)
	{
		Log.Message(e.message);
	}
}