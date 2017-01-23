$(document).click(function(loc) {
    //grabbing the click location.
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

var bio = {
    "name": "Scott Landes",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "541-610-8087",
        "email": "scott.landes@outlook.com",
        "github": "scottlandes1217",
        "location": "Bend, OR"
    },
    "biopic": "images/vega.jpg",
    "WelcomeMessage": "Currently working for G5 Search Marketing Inc.",
    "skills": ["JavaScript", "HTML", "CSS", "Photoshop", "SEO"]
};

var work = {
    "jobs": [{
            "employer": "IBEX Global",
            "title": "Senior Support Technician",
            "location": "Bend, OR",
            "dates": "August 2011 - December 2015",
            "description": "The highest level of technical support you can speak with. Other Job tasks included creating and presenting training materials to other employees as well as some managerial tasks."
        },
        {
            "employer": "G5 Search Marketing Inc.",
            "title": "Support Specialist",
            "location": "Bend, OR",
            "dates": "January 2016 - Current",
            "description": "Provided detailed Support to high-profile Clients for website maintenance and additions. Tasks included building & designing pages, domain troubleshooting  , implementing 3rd party JavaScript, as well as troubleshooting and diagnosing bugs within our platform."
        }
    ]
};

var education = {
    "schools": [{
        "name": "Summit High School",
        "degree": "Diploma",
        "majors": "Computer Applications",
        "dates": "2006-2010",
        "location": "Bend, OR",
        "url": "https://www.bend.k12.or.us/summit"
    }],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front-End Web Developer",
        "dates": "2016 - Current",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"

    }]
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "2016",
        "description": "Udacity Front-End Web Developer Project",
        "images": ["images/portfolio.png"],
        "url": "https://github.com/scottlandes1217/portfolio"
    }]
};

var places = {
    "location": "Eugene, OR"
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMessage = HTMLwelcomeMessage.replace("%data%", bio.WelcomeMessage);
var formattedContactInfo = [];
formattedContactInfo.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

if (formattedContactInfo.length > 0) {
  for (var i = 0; i < formattedContactInfo.length; i++) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
  }

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMessage);

}



work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedEmployerTitle + formattedLocation + formattedDates + formattedDescription);
    }

};


projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        projectTitle = projectTitle.replace("#", projects.projects[i].link);
        var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var projectImage = "";
        for (var j = 0; j < projects.projects[i].images.length; j++) {
            projectImage += HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
        }
        $(".project-entry:last").append(projectTitle + projectDates + projectDescription + projectImage);
    }
};


education.display = function() {
    for (var i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        schoolName = schoolName.replace("#", education.schools[i].url);
        var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var schoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var schoolMajors = HTMLschoolMajors.replace("%data%", education.schools[i].majors);
        $(".education-entry:last").append(schoolName + schoolDegree + schoolDates + schoolLocation + schoolMajors);
    }

    $("#education").append(HTMLonlineClasses);
    for (var j = 0; j < education.onlineCourses.length; j++) {
        $("#education").append(HTMLschoolStart);
        var onlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
        onlineTitle = onlineTitle.replace("#", education.onlineCourses[j].url);
        var onlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
        var onlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
        var onlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);
        $(".education-entry:last").append(onlineTitle + onlineSchool + onlineDates + onlineURL);
    }
};

education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);