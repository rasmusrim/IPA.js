var ConsonantTable = function() 
{
	this.consonants = new Array();

}

/**
 * Adds a consonant to the table.
 * @param {Consonant object} consonant - An instance of the Consonant class representing the consonant to add.
*/
ConsonantTable.prototype.addConsonant = function(consonant)
{
	if(consonant.constructor.name != 'Consonant')
	{
		throw "First argument is not Consonant object";
	}

	this.consonants.push(consonant);

}

/**
 * Removes a consonant from the table.
 * @param {integer} IPANumber - The IPA number of the consonant to remove.
*/
ConsonantTable.prototype.removeConsonant = function(IPANumber)
{
	if(typeof IPANumber != 'number')
	{
		throw "Expected integer as first argument. Given: " + IPANumber;
	}

	for(i = 0; i < this.consonants.length; i++)
	{
		if(this.consonants[i].getIPANumber() == IPANumber)
		{
			this.consonants.splice(i, 1);
			return true;
		}

	}

	throw "IPA number " + IPANumber + " not found."

}