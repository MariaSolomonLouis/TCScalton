class POM_Class
{   
	constructor(){
		this.initiallizeLocators();
  }
    
  get MY_CONST() { return 'mystring'; } 
  
  getObject(){
    var test =  function(){
      return "Hello";
    }
    
    return test;
  }
  
	initiallizeLocators()
	{
		this.TestVariable = this.getObject();
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