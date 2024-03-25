import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(194, 46, 98)", "rgb(120, 97, 174)"];


export const info = {
    firstName: "Jeel",
    lastName: "Jadawala",
    initials: "jj", // the example uses first and last, but feel free to use three or more if you like.
    position: "A Full Stack Developer / Application Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [         {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Systems Engineer at Google"
        },
        {
            emoji: "📧",
            text: "jadawalaj@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://gmail.com",
            icon: "fa fa-envelope",
            label: 'gmail'
        }

    ],
    bio: "'Crafting Code, Creating Solutions' is how I would like to introduce myself. Passionate full-stack developer holding Oracle Certified Associate(OCA), Java Programmer certification, having 3+ years of experience building React, Angular, and Java-based applications.",
    skills:
        {
            proficientWith: ['java', 'python', 'c', 'javascript', 'd3.js', 'php', 'dart', 'sql', 'pl/sql', 'shell scripting',
            'mysql', 'postgresql', 'sql server', 'google firebase', 'mongodb',
            'html', 'css', 'bootstrap', 'javascript', 'react.js',
            'eclipse', 'android studio', 'vs code', 'apache tomcat', 'wamp', 'atlassian jira', 'postman',
            'git', 'github',
            'spring boot', 'flutter', 'node.js', 'express.js', 'junit',
            'microsoft excel', 'power bi', 'tableau', 'rapidminer'],
            exposedTo: ['sdlc', 'agile', 'waterfall', 'iterative', 'scrum', 'design patterns'
        ]
        }
    ,
    portfolio: [ 
        {
            title: "Employee Management System",
            technology: "",
          source: "https://github.com/jeeljadawala/Employee_mgmt_springboot_angular", 
            image: mock1
        },
        {
            title: "Web Search Engine",
            technology: "",
          source: "https://github.com/paytonjewell", 
            image: mock1
        },
        {
            title: "Gmail data analysis dashboard ",
            technology: "",
          source: "https://github.com/jeeljadawala/gmail_analysis", 
            image: mock1
        },
        {
            title: "Sales Insight Analysis ",
            technology: "",
          source: "https://github.com/jeeljadawala/Sales_insight", 
            image: mock1
        },
        {
            title: "Customer Segmentation for Targeted Marketing",
            technology: "",
            source: "https://colab.research.google.com/drive/1LM-RoQRsyop541194mY0wXcuBXiQlolL?usp=sharing",
            image: mock1
        },
        {
            title: "Senseware",
            technology: "",
            source: "https://github.com/jeeljadawala/Senseware_1",
            image: mock1
        },
        {
            title: "Indian Import Export Trade Analysis Dashboard",
            technology: "",
            source: "https://github.com/jeeljadawala/Indian_import-export-trade_Dashboard",
            image: mock1
        },
        {
            title: "My notes",
            technology: "",
            source: "https://github.com/jeeljadawala/Flask",
            image: mock1
        }
    ]
}