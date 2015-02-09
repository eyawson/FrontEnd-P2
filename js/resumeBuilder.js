var bio = {
	"name" : "Ebow Yawson",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "(+233) 262 220931",
		"email" : "ebow.yawson@gmail.com",
		"twitter" : "@e_yawson",
		"github" : "eyawson",
		"plus" : "+EbowYawson",
		"location" : "Cape Coast, Ghana"
	},
	"bioPic" : "images/fry.jpg",
	"welcomeMessage" : "Welcome to the most awesome resume on the web!!!",
	"skills" : ["html", "css", "JS", "python", "teaching", "distance learning"]
};

var work = {
	"jobs" : [
	{
		"employer": "St. Theresa's School",
		"title": "Head Coach: Basketball",
		"location": "Accra, Ghana",
		"dates": "1999-2001",
		"description": "Taught them how to be good basketball players and above " +
		"all excellent students. Won the only national championship sponsored by Samsung"
	},
	{
		"employer": "Oiada International Ghana",
		"title": "Chief Information Officer",
		"location": "Cape Coast, Ghana",
		"dates": "2001-2009",
		"description": "Responsible for daily event planning, scheduling, outreach " +
		"programs, communication with press and partners"
	},
	{
		"employer": "Akoma Ntoso Cultural Center",
		"title": "Director",
		"location": "Cape Coast, Ghana",
		"dates": "2009-present",
		"description": "Using Polycom equipment the center connects students all " +
		"over the world to students in Ghana. Thousands of students annually " +
		"connect from places like Canada, Taiwan, South Korea, Brazil, Russia, " +
		"Germany and several states in the US. The center has since its inception " +
		"hosted presidents, first ladies, politicians, doctors, musicians, teachers " +
		"and people who are changing the world around them positively"
	}
	]
};

var education = {
	"schools" : [
	{
		"name": "Mfantsipim School",
		"location": "Cape Coast, Ghana",
		"degree": "Certificate",
		"major": ["Arts"],
		"dates": "1989-1994",
		"url": "http://www.mfantsipim.com/"
	},
	{
		"name": "St. Michael's Information Technology",
		"location": "Accra, Ghana",
		"degree": "Diploma, Management of Information Systems",
		"major": ["Networking", " Communication"],
		"dates": "1998-2000",
		"url": " "
	},
	{
		"name": "NIIT",
		"location": "Accra, Ghana",
		"degree": "Certificate",
		"major": ["html", " MS office"],
		"dates": "2000-2001",
		"url": "http://www.bluecrest.edu.gh/"
	}
	],
	"onlineCourses" : [
	{
		"title": "Front-end Nanodegree",
		"school": "Udacity",
		"dates": "2014-2015",
		"url": "https://www.udacity.com/course/nd001"
	},
	{
		"title": "Programming for Everybody (Python)",
		"school": "Coursera",
		"dates": "2014",
		"url": "https://www.coursera.org/course/pythonlearn"
	},
	{
		"title": "Intro to Point and Click App Development",
		"school": "Udacity",
		"dates": "2013",
		"url": "https://www.udacity.com/course/viewer#!/c-ud162"
	}
	]
};

var projects = {
	"projects" : [
	{
		"title": "mock up project",
		"dates": "2014",
		"description": "built a single page website based on a given image",
		"images": ["images/mock.png", "images/fry.jpg"]
	}
	]
};


bio.display = function() {
	var formattedRole = 
HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = 
HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile =
HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);
$("#footerContacts").append(formattedMobile);

var formattedEmail =
HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);
$("#footerContacts").append(formattedEmail);

var formattedTwitter =
HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);
$("#footerContacts").append(formattedTwitter);

var formattedGithub =
HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);
$("#footerContacts").append(formattedGithub);

var formattedPlus =
HTMLplus.replace("%data%", bio.contacts.plus);
$("#topContacts").append(formattedPlus);
$("#footerContacts").append(formattedPlus);

var formattedLocation =
HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);
$("#footerContacts").append(formattedLocation);

var formattedBioPic =
HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMessage =
HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#topContacts").append(formattedWelcomeMessage);

	if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	var formattedSkill = 
	HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
}
};

bio.display();


work.display = function() {
	for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = 
	HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = 
	HTMLworkTitle.replace("%data%", work.jobs[job].title);
	
	var formattedEmployerTitle = 
	formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = 
	HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = 
	HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = 
	HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
};

work.display();


projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = 
		HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = 
		HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = 
		HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {

				var formattedImage = 
				HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		};

	}
};

projects.display();


education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = 
		HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = 
		HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = 
		HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = 
		HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = 
		HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);
	}
	$("#education").append(HTMLonlineClasses);
	
	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		
		var formattedonlineTitle = 
		HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedonlineTitle);

		var formattedonlineSchool = 
		HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedonlineSchool);

		var formattedonlineDate = 
		HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedonlineDate);

		var formattedURL = 
		HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
};

education.display();


//click function
$(document).click(function(loc) {
  // your code goes here
	var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});


//string manipulation
function inName(name){
	name = bio.name.trim().split(" ");
	//console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
};

inName(name);


$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);