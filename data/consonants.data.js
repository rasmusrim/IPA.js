/**
 * The object that fetches information about the various IPA characters. By default, this is fetched from a hard-coded array, but this class could be overridden to get the information from a database instead. For compatibility, this class returns Consonant objects.
*/
data = {};


/** 
 * Finds a consonant with a specific IPA number.
 * @param {integer} IPANumber - The IPA number of the consonant to return
*/
data.getConsonant = function(IPANumber) 
{
	var consonants = this._getRawConsonants();

	for(i =0; i < consonants.length; i++) 
	{
		if(consonants[i].IPANumber == IPANumber)
		{
			return this._consonantFactory(consonants[i]);
		}
	}

	throw "IPA number not found: " + IPANumber;

}

/** 
 * Returns an array consisting of all consonants as Consonant objects. 
*/
data.getAllConsonants = function()
{
	var consonants = this._getRawConsonants();
	var consArray = new Array();

	for(i =0; i < consonants.length; i++) 
	{
		consArray.push(this._consonantFactory(consonants[i]));
	}
	

	return consArray;

}

/**
 * Converts the raw consonant object used only within the data object to a object of the Consonant class.
*/
data._consonantFactory = function(rawConsonant) 
{
	return new Consonant(rawConsonant.IPANumber, rawConsonant.column, rawConsonant.row, rawConsonant.voiced,rawConsonant.unicode);

}

/** 
 * Returns an array of all consonant objects. Needs to be converted to proper Consonant class objects to be compatible with the rest of the script.
*/
data._getRawConsonants = function()
{

	return [

	{
		IPANumber: 101,
		column: 0,
		row: 0,
		voiced: 0,
		unicode: "&#112",
		char: "p",
	},

	{
		IPANumber: 102,
		column: 0,
		row: 0,
		voiced: 1,
		unicode: "&#98",
		char: "b",
	},

	{
		IPANumber: 103,
		column: 3,
		row: 0,
		voiced: 0,
		unicode: "&#116",
		char: "t",
	},

	{
		IPANumber: 104,
		column: 3,
		row: 0,
		voiced: 1,
		unicode: "&#100",
		char: "d",
	},

	{
		IPANumber: 105,
		column: 5,
		row: 0,
		voiced: 0,
		unicode: "&#648",
		char: "ʈ",
	},

	{
		IPANumber: 106,
		column: 5,
		row: 0,
		voiced: 1,
		unicode: "&#598",
		char: "ɖ",
	},

	{
		IPANumber: 107,
		column: 6,
		row: 0,
		voiced: 0,
		unicode: "&#99",
		char: "c",
	},

	{
		IPANumber: 108,
		column: 6,
		row: 0,
		voiced: 1,
		unicode: "&#607",
		char: "ɟ",
	},

	{
		IPANumber: 109,
		column: 7,
		row: 0,
		voiced: 0,
		unicode: "&#107",
		char: "k",
	},

	{
		IPANumber: 110,
		column: 7,
		row: 0,
		voiced: 1,
		unicode: "&#609",
		char: "ɡ",
	},

	{
		IPANumber: 111,
		column: 8,
		row: 0,
		voiced: 0,
		unicode: "&#113",
		char: "ⱱ",
	},

	{
		IPANumber: 112,
		column: 8,
		row: 0,
		voiced: 1,
		unicode: "&#610",
		char: "ɢ",
	},

	{
		IPANumber: 113,
		column: 10,
		row: 0,
		voiced: 1,
		unicode: "&#660",
		char: "ʔ",
	},

	{
		IPANumber: 114,
		column: 0,
		row: 1,
		voiced: 1,
		unicode: "&#109",
		char: "m",
	},

	{
		IPANumber: 115,
		column: 1,
		row: 1,
		voiced: 1,
		unicode: "&#625",
		char: "ɱ",
	},

	{
		IPANumber: 116,
		column: 3,
		row: 1,
		voiced: 1,
		unicode: "&#110",
		char: "n",
	},

	{
		IPANumber: 117,
		column: 5,
		row: 1,
		voiced: 1,
		unicode: "&#627",
		char: "ɳ",
	},

	{
		IPANumber: 118,
		column: 6,
		row: 1,
		voiced: 1,
		unicode: "&#626",
		char: "ɲ",
	},

	{
		IPANumber: 119,
		column: 7,
		row: 1,
		voiced: 1,
		unicode: "&#331",
		char: "ŋ",
	},

	{
		IPANumber: 120,
		column: 8,
		row: 1,
		voiced: 1,
		unicode: "&#628",
		char: "ɴ",
	},

	{
		IPANumber: 121,
		column: 0,
		row: 2,
		voiced: 1,
		unicode: "&#665",
		char: "ʙ",
	},

	{
		IPANumber: 122,
		column: 3,
		row: 2,
		voiced: 1,
		unicode: "&#114",
		char: "r",
	},

	{
		IPANumber: 123,
		column: 8,
		row: 2,
		voiced: 1,
		unicode: "&#640",
		char: "ʀ",
	},

	{
		IPANumber: 124,
		column: 1,
		row: 3,
		voiced: 1,
		unicode: "&#11377",
		char: "ⱱ",
	},

	{
		IPANumber: 125,
		column: 3,
		row: 3,
		voiced: 1,
		unicode: "&#638",
		char: "ɾ",
	},

	{
		IPANumber: 126,
		column: 5,
		row: 3,
		voiced: 1,
		unicode: "&#637",
		char: "ɽ",
	},

	{
		IPANumber: 127,
		column: 0,
		row: 4,
		voiced: 0,
		unicode: "&#632",
		char: "ɸ",
	},

	{
		IPANumber: 128,
		column: 0,
		row: 4,
		voiced: 1,
		unicode: "&#946",
		char: "β",
	},

	{
		IPANumber: 129,
		column: 1,
		row: 4,
		voiced: 0,
		unicode: "&#102",
		char: "f",
	},

	{
		IPANumber: 130,
		column: 1,
		row: 4,
		voiced: 1,
		unicode: "&#118",
		char: "v",
	},

	{
		IPANumber: 131,
		column: 2,
		row: 4,
		voiced: 0,
		unicode: "&#952",
		char: "θ",
	},

	{
		IPANumber: 132,
		column: 2,
		row: 4,
		voiced: 1,
		unicode: "&#240",
		char: "ð",
	},

	{
		IPANumber: 133,
		column: 3,
		row: 4,
		voiced: 0,
		unicode: "&#115",
		char: "s",
	},

	{
		IPANumber: 134,
		column: 3,
		row: 4,
		voiced: 1,
		unicode: "&#122",
		char: "z",
	},

	{
		IPANumber: 135,
		column: 4,
		row: 4,
		voiced: 0,
		unicode: "&#643",
		char: "ʃ",
	},

	{
		IPANumber: 136,
		column: 4,
		row: 4,
		voiced: 1,
		unicode: "&#658",
		char: "ʒ",
	},

	{
		IPANumber: 137,
		column: 5,
		row: 4,
		voiced: 0,
		unicode: "&#642",
		char: "ʂ",
	},

	{
		IPANumber: 138,
		column: 5,
		row: 4,
		voiced: 1,
		unicode: "&#656",
		char: "ʐ",
	},

	{
		IPANumber: 139,
		column: 6,
		row: 4,
		voiced: 0,
		unicode: "&#231",
		char: "ç",
	},

	{
		IPANumber: 140,
		column: 6,
		row: 4,
		voiced: 1,
		unicode: "&#669",
		char: "ʝ",
	},

	{
		IPANumber: 141,
		column: 7,
		row: 4,
		voiced: 0,
		unicode: "&#120",
		char: "x",
	},

	{
		IPANumber: 142,
		column: 7,
		row: 4,
		voiced: 1,
		unicode: "&#611",
		char: "ɣ",
	},

	{
		IPANumber: 143,
		column: 8,
		row: 4,
		voiced: 0,
		unicode: "&#967",
		char: "χ",
	},

	{
		IPANumber: 144,
		column: 8,
		row: 4,
		voiced: 1,
		unicode: "&#641",
		char: "ʁ",
	},

	{
		IPANumber: 145,
		column: 9,
		row: 4,
		voiced: 0,
		unicode: "&#295",
		char: "ħ",
	},

	{
		IPANumber: 146,
		column: 9,
		row: 4,
		voiced: 1,
		unicode: "&#661",
		char: "ʕ",
	},

	{
		IPANumber: 147,
		column: 10,
		row: 4,
		voiced: 0,
		unicode: "&#104",
		char: "h",
	},

	{
		IPANumber: 148,
		column: 10,
		row: 4,
		voiced: 1,
		unicode: "&#615",
		char: "ɧ",
	},

	{
		IPANumber: 149,
		column: 3,
		row: 5,
		voiced: 0,
		unicode: "&#620",
		char: "ɬ",
	},

	{
		IPANumber: 150,
		column: 3,
		row: 5,
		voiced: 1,
		unicode: "&#622",
		char: "ɮ",
	},

	{
		IPANumber: 151,
		column: 1,
		row: 6,
		voiced: 1,
		unicode: "&#651",
		char: "ʋ",
	},

	{
		IPANumber: 152,
		column: 3,
		row: 6,
		voiced: 1,
		unicode: "&#633",
		char: "ɹ",
	},

	{
		IPANumber: 153,
		column: 5,
		row: 6,
		voiced: 1,
		unicode: "&#635",
		char: "ɻ",
	},

	{
		IPANumber: 154,
		column: 6,
		row: 6,
		voiced: 1,
		unicode: "&#106",
		char: "j",
	},

	{
		IPANumber: 155,
		column: 7,
		row: 6,
		voiced: 1,
		unicode: "&#624",
		char: "ɰ",
	},

	{
		IPANumber: 156,
		column: 3,
		row: 7,
		voiced: 1,
		unicode: "&#108",
		char: "l",
	},

	{
		IPANumber: 157,
		column: 5,
		row: 7,
		voiced: 1,
		unicode: "&#621",
		char: "ɭ",
	},

	{
		IPANumber: 158,
		column: 6,
		row: 7,
		voiced: 1,
		unicode: "&#654",
		char: "ʎ",
	},

	{
		IPANumber: 159,
		column: 7,
		row: 7,
		voiced: 1,
		unicode: "&#671",
		char: "ʟ",
	}

	];

}
