﻿class POM_Class
{
	constructor(){
  	this.initiallizeLocators();
	}
	
	initiallizeLocators()
	{
		this.TestVariable = "Hello";
	}
	
	print(sMsg){
		try{
			Log.Message(sMsg);
		}
		catch(e)
		{
			throw new Error(e.message);
		}
	}
}

module.exports = POM_Class;