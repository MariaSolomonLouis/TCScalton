﻿var POM_Class = require("POM_Class");

function Test1(){
	try{
		pom_class = new POM_Class();
		
		var sMessage = pom_class.TestVariable;
		
		pom_class.print(sMessage);
	}
	catch(e)
	{
		Log.Message(e.message);
	}
}