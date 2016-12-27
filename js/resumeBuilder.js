$(document).click(function(loc){
    //grabbing the click location.
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

 var bio = {
    "name": "Scott Landes",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "scott.landes@outlook.com",
        "github": "scottlandes1217",
        "location": "Bend, OR"
    },
    "biopic": "images/vega.jpg",
    "welcomeMsg": "Currently working for G5 Search Marketing Inc.",
    "skills": ["JavaScript", "HTML", "CSS","Photoshop", "SEO"]
};

var work = {
    "jobs": [
        {
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
        "schools": [
        { "name": "Summit High School",
            "datesAttended": "2006-2010",
            "location": "Bend, OR"
        }
    ],
    "onlineCourses": [
        { "school": "Udacity",
            "title": "Front-End Web Developer",
            "dates": "2016",
            "degree": "Nanodegree"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Build a Portfolio Site",
            "dates": "2016",
            "description": "Udacity Front-End Web Developer Project",
            "images": ["images/portfolio.png"],
            "url": "https://github.com/scottlandes1217/portfolio"
        }
    ]
};

var places = {
    "location": "Covalis, OR"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for(i in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

for(i in formattedContactInfo) {
    $("#topContacts").append(formattedContactInfo[i]);
    $("#footerContacts").append(formattedContactInfo[i]);
}


work.display = function () {

    if(work.jobs.length > 0) {

        $("#workExperience").append(HTMLworkStart);

        for(i in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

            var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

            $(".work-entry:last").append(formattedEmployerWorkTitle);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkDescription);
        }

    }

}

work.display();


projects.display = function() {
    if(projects.projects.length > 0) {
        for(i in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);

            for(img in projects.projects[i].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
                $(".project-entry:last").append(formattedProjectImage);
            }


        }
    }
}

projects.display();

education.display = function() {
    if(education.schools.length > 0 || education.onlineCourses.length > 0) {
        for(i in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
        }


        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
            for(i in education.onlineCourses) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                var formattedOnlineClasses = HTMLonlineClasses.replace("%data%", education.onlineCourses[i].classes);
                var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

                $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
                $(".education-entry:last").append(formattedOnlineDates);
                $(".education-entry:last").append(formattedOnlineClasses);
            }
        }
    }
}

education.display();

$("#mapDiv").append(googleMap);







