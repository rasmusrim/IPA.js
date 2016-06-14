var Consonant = function(IPANumber, column, row, voiced, HTMLRepresentation)
{
	this.setIPANumber(IPANumber);
	this.setColumn(column);
	this.setRow(row);
	this.setVoiced(voiced);
	this.setHTMLRepresentation(HTMLRepresentation);

}

Consonant.prototype.setIPANumber = function(IPANumber)
{
	this.IPANumber = IPANumber;
}

Consonant.prototype.getIPANumber = function()
{
	return this.IPANumber;
}


Consonant.prototype.setColumn = function(column)
{
	this.column = column;
}

Consonant.prototype.getColumn = function()
{
	return this.column;
}

Consonant.prototype.setRow = function(row)
{
	this.row = row;
}

Consonant.prototype.getRow = function()
{
	return this.row;
}

Consonant.prototype.setVoiced = function(voiced)
{
	this.voiced = voiced;
}

Consonant.prototype.getVoiced = function()
{
	return this.voiced;
}

Consonant.prototype.setHTMLRepresentation = function(HTMLRepresentation)
{
	this.HTMLRepresentation = HTMLRepresentation;
}

Consonant.prototype.getHTMLRepresentation = function()
{
	return this.HTMLRepresentation;
}


