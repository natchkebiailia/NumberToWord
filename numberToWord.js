var a=['ნული','ერთი','ორი','სამი','ოთხი','ხუთი','ექვსი','შვიდი','რვა','ცხრა','ათი','თერთმეტი','თორმეტი','ცამეტი','თოთხმეტი','თხუთმეტი','თექვსმეტი','ჩვიდმეტი','თვრამეტი','ცხრამეტი','ოცი'];
var twenties=['ოცდა','','ორმ','სამ','ოთხმ','ოცი'];
var hundreds=['ას','','ორ','სამ','ოთხ','ხუთ','ექვს','შვიდ','რვა','ცხრა','ასი'];
var thousands=['ათას','ათასი'];
var millions=['მილიონ','მილიონი'];
var billions=['მილიარდ','მილიარდი'];
var trillions=['ტრილიონ','ტრილიონი'];
var quadrillions=['კვადრილიონ','კვადრილიონი'];

function till20(n){
	return a[n];
}
function till100(n){
	if(n<=20)
		return till20(n);
	if(n==100)
		return hundreds[10];
	if(n%20==0)
		return twenties[Math.floor(n/20)]+twenties[5];
	return twenties[Math.floor(n/20)]+twenties[0]+till20(n-Math.floor(n/20)*20);
}
function till1000(n){
	if(n<=pow(2))
		return till100(n);
	if(n%pow(2)==0 && n<=9*pow(2))
		return hundreds[Math.floor(n/pow(2))]+" "+hundreds[10];
	if(n==pow(3))
		return thousands[1];
	return hundreds[Math.floor(n/pow(2))]+hundreds[0]+" "+till100(n-Math.floor(n/pow(2))*pow(2));
}
function tillMillion(n){
	if(n<=pow(3))
		return till1000(n);
	if(n%pow(3)==0 && n<=9*pow(5))
		return till1000(Math.floor(n/pow(3)))+" "+thousands[1];
	if(n==pow(6))
		return millions[1];
	if(Math.floor(n/pow(3))>1)
		return till1000(Math.floor(n/pow(3)))+" "+thousands[0]+" "+till1000(n-Math.floor(n/pow(3))*pow(3));
	else
		return thousands[0]+" "+till1000(n-Math.floor(n/pow(3))*pow(3));
}
function tillBillion(n){
	if(n<=pow(6))
		return tillMillion(n);
	if(n%pow(6)==0 && n<=9*pow(8))
		return till1000(Math.floor(n/pow(6)))+" "+millions[1];
	if(n==pow(9))
		return billions[1];
	return till1000(Math.floor(n/pow(6)))+" "+millions[0]+" "+tillMillion(n-Math.floor(n/pow(6))*pow(6));
}
function tillTrillion(n){
	if(n<=pow(9))
		return tillBillion(n);
	if(n%pow(9)==0 && n<=9*pow(11))
		return till1000(Math.floor(n/pow(9)))+" "+billions[1];
	if(n==pow(12))
		return trillions[1];
	return till1000(Math.floor(n/pow(9)))+" "+billions[0]+" "+tillBillion(n-Math.floor(n/pow(9))*pow(9));
}
function tillQuadrillion(n){
	n=parseInt(n);
	if(n<=pow(12))
		return tillTrillion(n);
	if(n%pow(12)==0 && n<=9*pow(14))
		return till1000(Math.floor(n/pow(12)))+" "+trillions[1];
	if(n==pow(15))
		return quadrillions[1];
	if(n>pow(15))
		return "More Than Quadrillion C'mon Dude :D";
	return till1000(Math.floor(n/pow(12)))+" "+trillions[0]+" "+tillTrillion(n-Math.floor(n/pow(12))*pow(12));
}
function pow(n){
	return Math.pow(10,n);
}
function numberToWord(num){
	if(parseInt(num)>-1)
		return tillQuadrillion(parseInt(num));
	return "Not Valid Number";
}