const e = require('express')
const express = require('express')
const { renameSync } = require('fs-extra')
const router = express.Router()

// Add your routes here - above the module.exports line

//EVENT NOTIFICATIONS --> 


const events = [
    {
        eventTitle: "Manchester AAN regional meet-up",
        type: "In person",
        format: "Meeting",
        date: "27th October 2022",
        time: "19:00-21:00",
        eventDetail: "Join regional AAN colleagues at Manchester Town Hall to share your recent activity within the network.",
        summary1: "Fellow ambassadors will talk about their experience at recent events. There will be an insight sharing session, guest speakers and an opportunity to network with colleagues who are new to the network.", 
        summary2: "For those wishing to present, please contact Sam Kershaw prior to Tuesday 25 October outlining your case studies and how long you need allocating in the agenda.",
        summary3: "*please note: this session will be recorded for those who are unable to attend.", 
        eventLocation: "north-west",
        eventBuilding: "Manchester Town Hall, Albert square, M2 5DB",
        start: "19:00",
        end: "21:00",
        contact: "rebecca.morrell@aan.com",
        industry: "care-services",
        eventId: 1
    },
    {
        eventTitle: "Clifton High School apprenticeship event",
        type:"Hybrid",
        format:"School event",
        date: "31st October 2022",
        time: "17:00-19:30",
        eventDetail: "An opportunity to champion apprenticeships and talk to students about your own journey as an apprentice.",
        summary1: "An opportunity to champion apprenticeships and talk to students at Clifton High School about your own journey as an apprentice.", 
        summary2: "Share the biggest challenges you have faced, your success stories and inspire those who are considering an apprenticeship as the next step in their career.",
        eventLocation: "south-west",
        eventBuilding: "Clifton High School, College Road, Clifton, Bristol, BS8 3JD",
        start: "17:00",
        end: "19:30",
        contact: "rebecca.morrell@aan.com",
        industry: "creative-and-design",
        eventId: 2
    },
    {
        eventTitle: "AAN Online Case Study Session",
        type: "Online",
        format: "Case study",
        time: "13:00-14:30",
        date: "1st November 2022",
        eventDetail: "Share your own case studies with colleagues across the region.",
        summary1: "Share your current case studies with AAN colleagues across your region and stay up to date with recent activity within the network.", 
        summary2: "For those wishing to present, please contact Sam Kershaw prior to Tuesday 25 October outlining your case studies and how long you need allocating in the agenda.",
        summary3: "*please note: this session will be recorded for those who are unable to attend.", 
        eventLocation: "north-east",
        eventBuilding: "Join event online via Zoom or Teams",
        start: "13:00",
        end: "14:30",
        contact: "sam.kershaw@aan.com",
        industry: "construction",
        eventId: 3
    }, 
    {
        eventTitle: "Event 4",
        type:"Hybrid",
        format: "School event",
        date: "21st December 2022",
        time: "19:00-20:30",
        time: "19:00-21:00",
        eventDetail: "West Midlands meetup",
        eventLocation: "west-midlands",
        industry: "business-and-administration",
        eventId: 4
    },
    {
        eventTitle: "Event 5",
        type: "In person",
        format: "Case study",
        date: "22nd November 2022",
        time: "18:00-20:00",
        eventDetail: "Bristol schools event",
        eventLocation: "south-west",
        industry: "care-services",
        eventId: 5
    }, 
    {
        eventTitle: "London online event",
        type:"Hybrid",
        format: "Meeting",
        date: "7th November 2022",
        time: "13:00-14:30",
        eventDetail: "an online monthly catch up ",
        eventLocation: "london",
        industry: "business-and-administration",
        eventId: 6
    }, 
    {
        eventTitle: "Manchester hybrid event",
        type:"Hybrid",
        format: "Meeting",
        date: "5th December 2022",
        time: "15:00-16:30",
        eventDetail: "an online monthly catch up ",
        eventLocation: "north-west",
        industry: "creative-and-design",
        eventId: 7
    }, 
    {
        eventTitle: "Newcastle hybrid event",
        type: "In person",
        format: "School Event",
        date: "25th November 2022",
        time: "13:00-14:30",
        eventDetail: "an online monthly catch up ",
        eventLocation: "north-east",
        industry: "creative-and-design",
        eventId: 8
    }, 
]

// Events 

const feedbackForms = [
    {
        eventName: "AAN Manchester regional meet-up",
        eventTitle:  "AAN Manchester regional meet-up feedback form",
        description: "You attended the regional Manchester meet-up on 27 September 2022. Use the event feedback form link to provide feedback and add this event to your network stats table.",
        location: "Manchester Town Hall",
        date: "Wednesday 21st September",
        feedbackId: 1
    },
    {
        eventName: "Irlam High School apprenticeship event",
        eventTitle: "Irlam High School apprenticeship event feedback form",
        description: "You attended the Irlam High School apprenticeship event on 27 September 2022. Use the event feedback form link to provide feedback and add this event to your network stats table.",
        location: "Irlam High School",
        date: "Tuesday 13 September",
        feedbackId: 2
    }
]

const networkSettings = [
    {
        title: "Your notification preferences",
        details: "Set your notifications so the AAN only get in touch with relevant opportunties.",
        networkId: "notification-preferences"
    },
    {
        title: "Leave the network",
        details: "Complete a brief form to let AAN know you wish to leave the network.",
        networkId: "leave-network"
    }
]

let regions = [
    {
        value: "East of England",
        text: "East of England",
        selected: false
    },
    {
        value: "East midlands",
        text: "East midlands",
        selected: false
    },
    {
        value: "London",
        text: "London",
        selected: false
    },
    {
        value: "North east",
        text: "North east",
        selected: false
    },
    {
        value: "North west",
        text: "North west",
        selected: false
    },
    {
        value: "South east",
        text: "South east",
        selected: false
    },
    {
        value: "South west",
        text: "South west",
        selected: false
    },
    {
        value: "West midlands",
        text: "West midlands",
        selected: false
    },
    {
        value: "Yorkshire and The Humber",
        text: "Yorkshire and The Humber",
        selected: false
    }
  ]

let industries = [
    {
        value: "business-and-administration",
        text: "Business and administration",
        checked: false
      },
      {
        value: "creative-and-design",
        text: "Creative and design",
        checked: false
      },
      {
        value: "health-and-science",
        text: "Health and science",
        checked: false
      },
      {
        value: "care-services",
        text: "Care-services",
        checked: false
      },
      {
          value: "sales-marketing-and-procurement",
          text: "Sales, marketing and procurement",
          checked: false
      },
      {
          value: "transport-and-logistics",
          text: "Transport and logistics",
          checked: false
        },
      {
          value: "legal-finance-and-accounting",
          text: "Legal, finance and accounting",
          checked: false
      },
      {
          value: "protective-services",
          text: "Protective services",
          checked: false
      },
      {
          value: "catering-and-hospitality",
          text: "Catering and hospitality",
          checked: false
      },
      {
        value: "digital",
        text: "Digital",
        checked: false
        },
    {
        value: "engineering-and-manufacturing",
        text: "Engineering and manufacturing",
        checked: false
    },
    {
        value: "hair-and-beauty",
        text: "Hair and beauty",
        checked: false
    },
    {
        value: "agriculture-environmental-and-animal-care",
        text: "Agriculture, environmental and animal care",
        checked: false
    }, 
    {
        value: "construction",
        text: "Construction",
        checked: false
    }, 
    {
        value: "education-and-childcare",
        text: "Education and childcare",
        checked: false
    }
]

let dates = [
    {
        value: "filter-by-event-date",
        text: "Filter by event date",
        selected: false
    },
    {
        value: "this-week",
        text: "This week",
        selected: false
    },
    {
        value: "this-month",
        text: "This month",
        selected: false
    },
    {
        value: "next-3-months",
        text: "The Next 3 Months",
        selected: false
    }
]



let eventType = [
    {
        value: "Choose-event-type",
        text: "Choose event type",
        selected: false
    },
    {
        value: "ASK-event",
        text: "ASK event",
        selected: false
    },
    {
        value: "Training",
        text: "Training",
        selected: false
    },
    {
        value: "Meeting",
        text: "Meeting",
        selected: false
    },
    {
        value: "AAN-organised-event",
        text: "AAN organised event",
        selected: false
    },
    {
        value: "Social / Networking activity",
        text: "Social / Networking activity",
        selected: false
    },

]

let eventFormat = [
    {
        value: "choose-event-format",
        text: "Choose event format",
        selected: false
    },
    {
        value: "online",
        text: "Online",
        selected: false
    },
    {
        value: "in-person",
        text: "In person",
        selected: false
    },
    {
        value: "hybrid",
        text: "Hybrid",
        selected: false
    }
]


let industrySelect = [
    {
        value: "business-and-administration",
        text: "Business and administration",
        selected: false
      },
      {
        value: "creative-and-design",
        text: "Creative and design",
        selected: false
      },
      {
        value: "health-and-science",
        text: "Health and science",
        selected: false
      },
      {
        value: "care-services",
        text: "Care-services",
        selected: false
      },
      {
          value: "sales-marketing-and-procurement",
          text: "Sales, marketing and procurement",
          selected: false
      },
      {
          value: "transport-and-logistics",
          text: "Transport and logistics",
          selected: false
        },
      {
          value: "legal-finance-and-accounting",
          text: "Legal, finance and accounting",
          selected: false
      },
      {
          value: "protective-services",
          text: "Protective services",
          selected: false
      },
      {
          value: "catering-and-hospitality",
          text: "Catering and hospitality",
          selected: false
      },
      {
        value: "digital",
        text: "Digital",
        selected: false
        },
    {
        value: "engineering-and-manufacturing",
        text: "Engineering and manufacturing",
        selected: false
    },
    {
        value: "hair-and-beauty",
        text: "Hair and beauty",
        selected: false
    },
    {
        value: "agriculture-environmental-and-animal-care",
        text: "Agriculture, environmental and animal care",
        selected: false
    }, 
    {
        value: "construction",
        text: "Construction",
        selected: false
    }, 
    {
        value: "education-and-childcare",
        text: "Education and childcare",
        selected: false
    }
]

let apprentices = [
    {
        value: "choose-region",
        text: "Choose a Region",
        selected: false
      },
      {
        value: "Current",
        text: "Current Apprentice",
        selected: false
      },
      {
        value: "Former",
        text: "Former Apprentice",
        selected: false
      }
]

let profiles = [
    {
        name: "Rob Stark",
        location: "South west",
        region: "south-west",
        city: "Bristol",
        appr: "Former",
        events: 2,
        date: "17th August 2022",
        industry: "business-and-administration",
        id: 1,
        src: "/public/images/Julian.jpg",
        email: "apprentice@gov.uk",
        role: "Business administrator",
        employer: "City Sprint"
    },
    {
        name: "Leslie Knope",
        location: "North west",
        region: "north-west",
        city: "Manchester",
        appr: "Current",
        events: 5,
        date: "17th February 2022",
        industry: "care-services",
        id: 2,
        src: "/public/images/Amy.jpg",
        email: "apprentice@gov.uk",
        role: "Care worker",
        employer: "St Johns Uk"
    },
    {
        name: "Dave Grohl",
        location: "London",
        region: "london",
        city: "London",
        appr: "Current",
        events: 0,
        date: "26th May 2022",
        industry: "creative-and-design",
        id: 3,
        src: "/public/images/Steve.jpg",
        email: "apprentice@gov.uk",
        role: "Leather Craftsperson",
        employer: "Denmons Services"

    },
    {
        name: "Sarah Thompson",
        location: "South West",
        region: "south-west",
        city: "Bristol",
        appr: "Former",
        events: 3,
        date: "26th September 2022",
        industry: "hair-and-beauty",
        id: 4,
        src: "/public/images/Etta.jpg",
        email: "apprentice@gov.uk",
        role: "Advanced and creative hair professional",
        employer: "Celly's Unisex Hair Salon"

    },
    {
        name: "Fiona Smith",
        location: "West Midlands",
        region: "west-midlands",
        city: "Birmingham",
        appr: "Current",
        events: 3,
        date: "26th September 2022",
        industry: "construction",
        id: 4,
        src: "/public/images/fiona.jpg",
        email: "apprentice@gov.uk",
        role: "Chartered surveyor",
        employer: "Mace Ltd"
    },
    {
        name: "David Attenborough",
        location: "North East",
        region: "north-east",
        city: "Barnard Castle",
        appr: "Current",
        events: 7,
        date: "5th June 2019",
        industry: "agriculture-environmental-and-animal-care",
        id: 5,
        src: "/public/images/david.jpg",
        email: "apprentice@gov.uk",
        role: "Equine groom",
        employer: "Karen Roberts Ltd"

    },
    {
        name: "Christopher Long",
        location: "Yorkshire and Humber",
        region: "yorkshire-and-humber",
        city: "York",
        appr: "Former",
        events: 7,
        date: "21st March 2021",
        industry: "business-and-administration",
        id: 6,
        src: "/public/images/Christopher.jpg",
        email: "apprentice@gov.uk",
        role: "Business administrator",
        employer: "Reynolds Porter"
    },
    {
        name: "Kevin Parker",
        location: "East of England",
        region: "east-of-england",
        city: "Norfolk",
        appr: "Current",
        events: 1,
        date: "1st September 2020",
        industry: "creative-and-design",
        id: 7,
        src: "/public/images/Kevin.jpg",
        email: "apprentice@gov.uk",
        role: "Spectacle Maker",
        employer: "Specsavers"
    },
    {
        name: "Christina Green",
        location: "South West",
        region: "south-west",
        city: "Bristol",
        appr: "Current",
        events: 0,
        date: "31st November 2021",
        industry: "health-and-science",
        id: 8,
        src: "/public/images/christina.jpg",
        email: "apprentice@gov.uk",
        role: "Dental Nurse",
        employer: "The Dental Touch"
    },
    {
        name: "Annie Macmanus",
        location: "North East",
        region: "north-east",
        city: "Newcastle",
        appr: "Current",
        events: 1,
        date: "31st January 2022",
        industry: "hair-and-beauty",
        id: 9,
        src: "/public/images/annie.jpg",
        email: "apprentice@gov.uk",
        role: "Beauty Therapist",
        employer: "Kimmys Nails"
        
    }
]

let members = [
    {
        name: "Amy",
        src: "/public/images/Amy.jpg"
    },
    {
        name: "Etta",
        src: "/public/images/Etta.jpg"
    },
    {
        name: "John",
        src: "/public/images/david.jpg"
    },
    {
        name: "Julian",
        src: "/public/images/Julian.jpg"
    },
    {
        name: "Steve",
        src: "/public/images/Steve.jpg"
    },
    {
        name: "Susan",
        src: "/public/images/Susan.jpg"
    },
    {
        name: "Kevin",
        src: "/public/images/Kevin.jpg"
    }
]

let selectedEvent = null

router.get('/aanApplication', (req, res) => {
    const errors = req.query.e
    console.log(errors, "got query parameter")

    if (errors){

    }

    res.render('aanApplication',  {regions, industrySelect} )
})

router.get('/region', (req, res) => {

    res.render('region',  {regions} )
})

// event notifications page - to display list of cards

router.get('/event-notifications', (req, res) => {
    res.render('event-notifications', { events } )
    
})

// Direct event number to template page and fill with data

router.get('/event-notifications/:eventid', (req, res) => {
    let id = parseFloat(req.params.eventid)
    console.log(id)
  
     selectedEvent = events.find(item => {
        return item.eventId == id
      })

      let newProfiles = [...profiles]

      let attendees = newProfiles.map(item => {
        return [
            {
                html: `<img class="profile" src="${item.src}"/>`,
                classes: 'profile'
            },
            {
                html: `<a href="#">${item.name}</a>`
            }
        ]
    })  

      console.log(selectedEvent)

      if(selectedEvent){
          res.render('event-detail-template', { selectedEvent, members, attendees })
      }
      else {
          res.send("sorry no event details")
      }
    },


// success confirmation page using selected event variable from event notifications

router.get('/success-manage-event', function (req, res) {
    res.render('success-manage-event', { selectedEvent })
}),


// SEARCH EVENT

// filter with query string 

router.get('/event-search', (req, res) => {
    let filterR = req.query.r
    let filterI = req.query.i

    let filteredEvents = [...events]

    if ((filterR == undefined || filterR == 'choose-region') && (filterI == undefined || filterI == 'choose-industry')){
       filteredEvents = [...events]
    }
    else {
        if(filterR && filterR !== 'choose-region') {
            filteredEvents = filteredEvents.filter(event => {
                return event.eventLocation === filterR
            })
        }
        if(filterI && filterI !== 'choose-industry'){
            filteredEvents = filteredEvents.filter(event => {
                console.log(filteredEvents)
                return event.industry == filterI
            })
        }
    }

    let selectedRegions = regions.map(region => {
       if(region.value === filterR){
        return {...region, selected: true}
       }
       else {
           return region
       }
    })
    let selectedIndustry = industries.map(industry => {
        if(industry.value === filterI){
         return {...industry, selected: true}
        }
        else {
            return industry
        }
     })

    res.render('event-search', { events, filterR, filterI, selectedRegions, filteredEvents, selectedIndustry, dates, eventType, eventFormat })
    
}),

// MANAGE EVENTS 
router.get('/manage-event', (req, res) => {
    res.render('manage-event', { feedbackForms }  )    
}),

router.get('/manage-event/:id', (req, res) => {
    let id = parseFloat(req.params.id)
    let selectedForm = feedbackForms.find(form => {
       return form.feedbackId == id   
    })
    if(selectedForm){
        res.render('feedback-template', { selectedForm })
    }
    else {
        res.send("Sorry no feedback forms")
    }
}),

router.get('/remove-event', (req, res) => {
    res.render('remove-event', { members, events })
}),

router.get('/eventSearchNew', (req, res) => {
    let filterR = req.query.r
    console.log(filterR)

    let filterI = req.query.i

    let filteredEvents = [...events]

    if ((filterR == undefined || filterR == 'choose-region') && (filterI == undefined || filterI == 'choose-industry')){
       filteredEvents = [...events]
    }
    else {
        if(filterR && filterR !== 'choose-region') {
            filteredEvents = filteredEvents.filter(event => {
                return event.eventLocation === filterR
            })
        }
        if(filterI && filterI !== 'choose-industry'){
            filteredEvents = filteredEvents.filter(event => {
                console.log(filteredEvents)
                return event.industry == filterI
            })
        }
    }

    let selectedRegions = regions.map(region => {
       if(region.value === filterR){
        return {...region, checked: true}
       }
       else {
           return region
       }
    })
    let selectedIndustry = industries.map(industry => {
        if(industry.value === filterI){
         return {...industry, selected: true}
        }
        else {
            return industry
        }
     })

    res.render('eventSearchNew', { events, filterR, filterI, selectedRegions, filteredEvents, selectedIndustry, dates })
    
}),


// PROFILE SETTINGS 

router.get('/profile-settings', (req, res) => {
    res.render('profile-settings', { networkSettings }  )    
}),


//Network Directory --> filtering via Region

router.get('/network-directory', (req, res) => {

    let filterR = req.query.r
    let filterI = req.query.i
    let filterA = req.query.a

    console.log(filterR)
    
    let filteredProfiles = [...profiles]

    if((filterR == undefined || filterR == 'choose-region') && (filterI == undefined || filterI == 'choose-industry')){
        filteredProfiles = [...profiles]
    }
    else { 
        if(filterR && filterR !== 'choose-region'){
            filteredProfiles = filteredProfiles.filter(profile => {
            return profile.region == filterR
            })
        }
        if(filterI && filterI !== 'choose-industry'){
            filteredProfiles = filteredProfiles.filter(profile => {
                return profile.industry == filterI
            })
        }
        console.log(filteredProfiles )
    }
    

    console.log(filteredProfiles)

    let profileRows = filteredProfiles.map(profile => {
        return [ 
            {   
                html: `<a href="profile/${profile.id}">${profile.name}</a>`,
                classes: "govuk-link"
            },
            {
                text: profile.location
            },
            {
                text: profile.events
            },
            {
                text: profile.date
            }  
        ]
    })
   
    let selectedRegions = regions.map(region => {
        if(region.value === filterR){
         return {...region, selected: true}
        }
        else {
            return region
        }
     })

     let selectedIndustry = industries.map(industry => {
        if(industry.value === filterI){
         return {...industry, selected: true}
        }
        else {
            return industry
        }
     })
     console.log(selectedIndustry)

     let selectedApprentice = apprentices.map(apprentice => {
         if (apprentice.value === filterA){
             return {...apprentice, selected: true}
         }
         else {
             return apprentice
         }
     })


    res.render('network-directory', { profileRows, selectedRegions, selectedIndustry, selectedApprentice } )
}),

router.get('/profile/:id', (req, res) => {
    let id = parseFloat(req.params.id)

    let selectedProfile = profiles.find(profile => {
        return profile.id == id
    })
    if (selectedProfile) {
        res.render('profile-template', { selectedProfile })
    }
    
    else {
        res.send("Sorry cannot find profile")
    }
}),



router.get('/event-detail', function (req, res) {
    let page = req.query.number

    let newProfiles = [...profiles]

    let attendeeRows = newProfiles.map(profile => {
        return [
            {
                text: "hello"
            },
            {
                text: profile.name
            }
        ]
    })  
    res.render('event-detail', { page, attendeeRows })
}),

module.exports = router
)
