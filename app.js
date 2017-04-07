var jsonDataBody = [
  {
    "header":["h1", "h4", "img", "hr"]
  },
  //if there is a class on the attribute, make it an object
];

// var entryOne = [
//   {
//     "div": {
//       "id": "first",
//       "class": "content",
//       [
//         "h2", 
//         "b", 
//         "span", 
//         "div": {
//           "class":"article",
//           [ 
//             "h3":{
//               "class":"header";
//             }, 
//             "p"
//           ]
//         }
//         "div": {
//           "class" : "article",
//           [
//             "h3", 
//             "p", 
//             "span": {
//               "class": "highlight"
//             }
//           ]
//         }
//       ]
//     }
//   }
// ];


var simplifiedJSON = [
  {
    "identification": {
      "id": "first",
      "class": "content"
    },
    "journalEntry": "1",
    "date": "August 15, 2016",
    "title": "My First Entry", 
    "article": {
      "h3": [
        {
          "class": "header",
          "content": "Why I took this class:"
        },
        {
          "class": "header",
          "content": "What I want to get out of this class:"
        }
      ],
      "p": [
        "I took this class because I want to learn how to program. I have a couple of friends that know some programming languages like HTML and Java. They were my inspiration to take this class because I aspire to reach or possibly exceed them in programming. This class would certainly be a big help. I also wanted to be one of the first people to take the class since this is the first time it is being offered to a public school in Hawai'i.", 
        "By the end of this school year, I want to be able to program fluently in at least two programming languages. I also want to be able to program a robot for First Robotics Competition (FRC) using Javascript. Doing so would allow me to utilize what I learned and make a contribution to my robotics team."
      ]
    }
    "img": undefined
  }
];

adf
