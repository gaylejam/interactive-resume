/*$("#main").append("Gayle James");*/
/*var name = "Gayle James";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);
var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);*/

/*var mobile = "972-999-9999";
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#header").append(formattedMobile);

var email = "gayleajames@sbcglobal.net";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#header").append(formattedEmail);*/

var bio = {
"name" : "Gayle James",
"role" : "Front End Web Developer",
"contacts" :{
   "mobile": "972-999-9999",
   "email": "gayle@gmail.com",
   "github": "gjam",
   "twitter": "@gjam",
   "location": "Plano"
   },
   "welcomeMessage": "Great to have an interactive resume",
   "skills": [
   "web developer", "Quality Assurance", "Application Support"
   ],
   "bioPic": "gayle122614.jpg"
 };
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
 
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile); 

var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail); 

var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGitHub); 
 
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedLocation= HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);


var formattedfooterMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#footerContacts").append(formattedfooterMobile); 

var formattedfooterEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#footerContacts").append(formattedfooterEmail); 

var formattedfooterGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#footerContacts").append(formattedfooterGitHub); 
 
var formattedfooterTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#footerContacts").append(formattedfooterTwitter);

var formattedfooterLocation= HTMLlocation.replace("%data%", bio.contacts.location);
$("#footerContacts").append(formattedfooterLocation);

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome)

/*$("#main").append(funThoughts);
var bio {
"name": "Gayle"
"role": "Front end web developer"
"contactinfo": 9729657451
"URL":"myphotourl"
}
*/

var education ={
 "schools":[
 {
   "name": "University of Texas El Paso",
   "location": "El Paso",
   "degree": "BBA",
   "major":["Computer Information Systems"]
 },
 {
   "name": "University of Phoenix",
   "location": "Phoenix",
   "degree": "Masters",
   "major": ["Information Systems"]
  }
 ]
 }

var work = {
  "jobs": [ 
     {
	   "employer": "Southwestern Bell Telephone",
	   "title": "Analyst",
	   "location":"St Louis",
	   "dates":"1990-1996",
	   "description": "Supported and coded an Error Correction System running on Mainframe.  I utilized COBOL and JCL to run jobs, write code and trouble-shoot"
	  },
	  { 
	   "employer": "Cingular Wireless",
	   "title": "Production support Analyst",
	   "location":"Richardson",
	   "dates":"2001-2006",
	   "description": "I supported the billing system using Unix and ORACLE to access file.  Wrote quick and dirty shell scripts to manipulate files . Used ORACLE to obtain and fix billing error.  This in turn enabled the calls to be billed and revenue brought into the company, preventing revenue loss"
	   
	   }
	]
}

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart)};
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);

function displayWork()
{

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace
	  ("%data%",work.jobs[job].employer);

	var formattedTitle = HTMLworkTitle.replace
	  ("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	 $(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace
	  ("%data%",work.jobs[job].dates);
	 $(".work-entry:last").append(formattedDates); 
	var formattedDescription = HTMLworkDescription.replace
      ("%data%",work.jobs[job].description);
	 $(".work-entry:last").append(formattedDescription);	 
	  
	 
}
	
}
displayWork();

function displayEducation()
{
for (school in education.schools) {
     $("#education").append(HTMLschoolStart);
	 var formattedschoolName= HTMLschoolName.replace
	 ("%data%",education.schools[school].name);
	 $(".education-entry:last").append(formattedschoolName);
	 var formattedschoolLocation= HTMLschoolLocation.replace
	 ("%data%",education.schools[school].location);
	 $(".education-entry:last").append(formattedschoolLocation);}
}
displayEducation();
//for (
$("#mapDiv").append(googleMap);	
/*$(document).click(function(loc) { // your code goes here });*/




	