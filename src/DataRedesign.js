export var data = {
  tech: {
    languages: {
      python: {
        name: "Python"
      },
      javascript: {
        name: "Javascript"
      },
      swift: {
        name: "Swift"
      },
      ruby: {
        name: "Ruby"
      },
      r: {
        name: "R"
      },
      cplusplus: {
        name: "C++"
      },
      php: {
        name: "PHP"
      },
      html: {
        name: "HTML5"
      },
      css: {
        name: "CSS3"
      },
      sass: {
        name: "SASS"
      }
    },
    frameworks: {
      node: {
        name: "Node.js"
      },
      express: {
        name: "Express.js"
      },
      uikit: {
        name: "UIKit"
      },
      ror: {
        name: "Ruby on Rails"
      },
      flask: {
        name: "Flask"
      },
      vapor: {
        name: "Vapor"
      },
      elixir: {
        name: "Elixir"
      },
      react: {
        name: "React"
      },
      reactnative: {
        name: "React Native"
      },
      spritekit: {
        name: "SpriteKit"
      },
      ionic: {
        name: "Ionic"
      },
      angular: {
        name: "Angular.js"
      },
      angular2: {
        name: "Angular 2"
      },
      scenekit {
        name: "SceneKit"
      }
    },
    toolsAndLibraries: {
      jquery: {
        name: "jQuery"
      },
      chartsjs: {
        name: "Charts.js"
      },
      reactrouter: {
        name: "React Router"
      },
      mapkit: {
        name: "MapKit"
      },
      bootstrap: {
        name: "Bootstrap"
      },
      materialize: {
        name: "Materialize CSS"
      },
      skeleton: {
        name: "Skeleton"
      },
      mixpanel: {
        name: "Mixpanel"
      },
      gamecenter: {
        name: "Game Center"
      }
    },
    databasesAndORMs: {
      postgresql: {
        name: "PostgreSQL"
      },
      mongodb: {
        name: "MongoDB"
      },
      sqlite: {
        name: "SQLite"
      },
      activerecord: {
        name: "Active Record"
      },
      mongoose: {
        name: "Mongoose"
      },
      fluent: {
        name: "Fluent"
      }
    },
    other: {
      git: {
        name: "Git"
      },
      github: {
        name: "Github"
      },
      bash: {
        name: "bash"
      },
      regex: {
        name: "RegEx"
      },
      scrum: {
        name: "Scrum"
      },
      tdd: {
        name: "TDD"
      },
      xcodeprofiler: {
        name: "Xcode Profiler"
      },
      heroku: {
        name: "Heroku"
      },
      photoshop: {
        name: "Photoshop"
      },
      illustrator: {
        name: "Illustrator"
      },
      sketch: {
        name: "Sketch"
      }
    }
  }
  contractors: [
    {
      firstName: "Tassos",
      lastName: "Lambrou",
      title: "Full-Stack Web, iOS Engineer, and Web Designer",
      bio: "I am a passionate and charismatic full stack web and iOS software engineer with a penchant for solving problems by creating robust and impactful tech.  I was the founder and lead frontend developer for pullPixel Media and serviced clients needing web development and design for over 6 years.",
      tech: {
        languages: [
          {
            ref: this.tech.languages.python,
            level: 78
          },
          {
            ref: this.tech.languages.javascript,
            level: 86
          },
          {
            ref: this.tech.languages.swift,
            level: 81
          },
          {
            ref: this.tech.languages.ruby,
            level: 69
          },
          {
            ref: this.tech.languages.r,
            level: 31
          },
          {
            ref: this.tech.languages.cplusplus,
            level: 28
          },
          {
            ref: this.tech.languages.php,
            level: 33
          },
          {
            ref: this.tech.languages.html,
            level: 89
          },
          {
            ref: this.tech.languages.css,
            level: 86
          },
          {
            ref: this.tech.languages.sass,
            level: 83
          }
        ],
        frameworks: [
          {
            ref: this.tech.frameworks.node,
            level: 87
          },
          {
            ref: this.tech.frameworks.express,
            level: 89
          },
          {
            ref: this.tech.frameworks.uikit,
            level: 79
          },
          {
            ref: this.tech.frameworks.ror,
            level: 69
          },
          {
            ref: this.tech.frameworks.flask,
            level: 37
          },
          {
            ref: this.tech.frameworks.vapor,
            level: 72
          },
          {
            ref: this.tech.frameworks.react,
            level: 88
          },
          {
            ref: this.tech.frameworks.reactnative,
            level: 83
          },
          {
            ref: this.tech.frameworks.spritekit,
            level: 86
          },
          {
            ref: this.tech.frameworks.ionic,
            level: 48
          }
        ],
        toolsAndLibraries: [ "jQuery", "React Router", "Charts.js", "MapKit", "Bootstrap", "Materialize CSS", "Skeleton", "Mixpanel", "Game Center"],
        databasesAndORMs: [ "PostgreSQL", "MongoDB", "SQLite 3", "Active Record", "Mongoose", "Fluent" ],
        other: [ "git", "github", "bash", "RegEx", "Scrum", "TDD", "Xcode Profiler", "Heroku", "Photoshop", "Illustrator", "Sketch" ]
      },
      skills: {
        technical: [
          "Full Stack Web Development",
          "Backend Web Development",
          "Frontend Web Development",
          "Mobile iOS Development (Swift)",
          "Data Structures & Algorithms",
          "Product Design and Growth Strategies",
          "Graphic Design",
          "Git/Github Source/Version Control",
          "Test-Driven Development",
          "2D iOS Game Development (SpriteKit)",
          "Web Scraping",
          "Web Analytics",
          "Bash & Command Line Tools",
          "Content Managment Systems"
        ],
        nonTechnical: [
          "Excellent communication skills, written and verbal",
          "Emotionally intelligent",
          "Ability to collaborate with teams, large and small",
          "Self-directed and goal-oriented",
          "Open to new experiences and comfortable in new environments",
          "Excellent time/task-management and calendaring skills",
          "Agile Processes/SCRUM",
          "SMART goal-setting",
          "Conflict resolution and non-violent communication"
        ]
      },
      photoURL: "/img/profiles/tassos.jpg"
    },
    {
      firstName: "Fiona",
      lastName: "Carty",
      title: "iOS Engineer, Product Designer, Maker",
      bio: "Currently developing iOS, Ruby on Rails, and IoT products. I also study Product Development, Design-Thinking, and User Experience at Make School. I’ve been heavily involved in diversity and education in tech. In addition to organizing hackathons, I teach iOS workshops in the hackathons around the nation. In the past, I’ve partnered with Chimera Maker Space & the Human Rights Department of Sonoma County to teach girls how to code. I’m alumni of Girls Who Code and NCWiT.",
      tech: {
        languages: [ "Python", "Java", "Javascript", "Swift", "Ruby", "C++", "HTML5", "CSS3" ],
        frameworks: [ "UIKit", "Ruby on Rails" ],
        toolsAndLibraries: [ "Bootstrap" ],
        databasesAndORMs: [ "PostgreSQL", "MongoDB", "SQLite 3", "Active Record" ],
        other: [ "git", "github", "bash", "Scrum", "Heroku", "Photoshop", "Sketch" ]
      },
      skills: {
        technical: [
          "Web Development",
          "Mobile iOS Development (Swift)",
          "Product Design",
          "Graphic Design",
          "Git/Github Source/Version Control",
          "Social Media",
          "Bash & Command Line Tools",
        ],
        nonTechnical: [
          "Excellent communication skills, written and verbal",
          "Emotionally intelligent",
          "Ability to collaborate with teams, large and small",
          "Public speaking",
          "Leadership",
          "Excellent time/task-management and calendaring skills",
          "Agile Processes/SCRUM",
          "SMART goal-setting",
          "Conflict resolution and non-violent communication"
        ]
      },
      photoURL: "/img/profiles/fiona.jpg"
    },
    {
      firstName: "Michael",
      lastName: "Loubier",
      title: "Full-Stack Web, iOS Engineer, and Web Designer",
      bio: "I am an entrepreneur and technical specialist turned software developer that enjoys learning new skills, and working with new frameworks and technologies. Over the past 9 years, I’ve run my own businesses, worked for a startup in the smart home sphere, run a team of sales and support specialists, and worked full-time in hardware and software technical support and sales. I have a knack for solving problems and dealing with conflict that I'm not afraid to employ. I love to be involved with every step of the process of bringing new ideas to life, from validation, to design, to development, to growth and marketing, and beyond.",
      tech: {
        languages: [ "Python", "Javascript", "Swift", "Ruby", "R", "C++", "PHP", "HTML5", "CSS3", "Sass" ],
        frameworks: [ "Node.js", "Express.js", "UIKit", "Ruby on Rails", "Flask", "Vapor", "React", "React Native", "SpriteKit", "Ionic", "Joomla"],
        toolsAndLibraries: [ "jQuery", "React Router", "Charts.js", "MapKit", "Bootstrap", "Materialize CSS", "Skeleton", "Mixpanel", "Game Center"],
        databasesAndORMs: [ "PostgreSQL", "MongoDB", "SQLite 3", "Active Record", "Mongoose", "Fluent" ],
        other: [ "git", "github", "bash", "RegEx", "Scrum", "TDD", "Xcode Profiler", "Heroku", "Photoshop", "Illustrator", "Sketch" ]
      },
      skills: {
        technical: [
          "Virtual Reality Development with Unity",
          "Game Development with Unity/C#",
          "Mobile Development in iOS and Android with Xcode, Android Studio, React Native, and Cordova",
          "Web Development in HTML, CSS, Javascript, jQuery, React, and Ruby on Rails",
          "Hardware Development with Arduino",
          "Data Structures & Algorithms",
          "Product Design with Sketch, Adobe Photoshop",
          "Graphic Design",
          "Git Source Control",
          "Test-Driven Development",
          "2D iOS Game Development (SpriteKit)"
        ],
        nonTechnical: [
          "Excellent communication skills, written and verbal",
          "Emotionally intelligent",
          "Ability to collaborate with teams, large and small",
          "Self-directed and goal-oriented",
          "Open to new experiences and comfortable in new environments",
          "Excellent time/task-management and calendaring skills",
          "Agile Processes/SCRUM",
          "SMART goal-setting",
          "Conflict resolution"
        ]
      },
      photoURL: "/img/profiles/michael.jpg"
    },
    {
      firstName: "Corey",
      lastName: "Harrilal",
      title: "Full-Stack Web, iOS Engineer, and Web Designer",
      bio: "I'm currently a full stack web developer at Make School in San Francisco with a deep passion for education technology.",
      tech: {
        languages: [ "Python", "Javascript", "Swift", "Ruby", "R", "C++", "PHP", "HTML5", "CSS3", "Sass" ],
        frameworks: [ "Node.js", "Express.js", "UIKit", "Ruby on Rails", "Flask", "Vapor", "React", "React Native", "SpriteKit", "Ionic", "Joomla"],
        toolsAndLibraries: [ "jQuery", "React Router", "Charts.js", "MapKit", "Bootstrap", "Materialize CSS", "Skeleton", "Mixpanel", "Game Center"],
        databasesAndORMs: [ "PostgreSQL", "MongoDB", "SQLite 3", "Active Record", "Mongoose", "Fluent" ],
        other: [ "git", "github", "bash", "RegEx", "Scrum", "TDD", "Xcode Profiler", "Heroku", "Photoshop", "Illustrator", "Sketch" ]
      },
      skills: {
        technical: [
          "Virtual Reality Development with Unity",
          "Game Development with Unity/C#",
          "Mobile Development in iOS and Android with Xcode, Android Studio, React Native, and Cordova",
          "Web Development in HTML, CSS, Javascript, jQuery, React, and Ruby on Rails",
          "Hardware Development with Arduino",
          "Data Structures & Algorithms",
          "Product Design with Sketch, Adobe Photoshop",
          "Graphic Design",
          "Git Source Control",
          "Test-Driven Development",
          "2D iOS Game Development (SpriteKit)"
        ],
        nonTechnical: [
          "Excellent communication skills, written and verbal",
          "Emotionally intelligent",
          "Ability to collaborate with teams, large and small",
          "Self-directed and goal-oriented",
          "Open to new experiences and comfortable in new environments",
          "Excellent time/task-management and calendaring skills",
          "Agile Processes/SCRUM",
          "SMART goal-setting",
          "Conflict resolution"
        ]
      },
      photoURL: "/img/profiles/corey.jpg"
    },
  ]
}

export default data
