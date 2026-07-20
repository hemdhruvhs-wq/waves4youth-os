// profession-catalog.js
// One entry per Future Studio profession. Each has 12 months x 4 tasks
// (Observe / Quiz / Build / Reflect). Add new professions here — the
// learn-profession.html template reads this file and needs no code changes
// to support a new profession once its content is added.

export const PROFESSION_CATALOG = {

  "engineer-technologist": {
    title: "Engineer & Technologist",
    icon: "⚙️",
    months: [
      { label: "What engineers actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "Engineered objects at home", desc: "Find 3 engineered objects in your home, list what problem each solves." },
        { type: "Quiz", icon: "📝", title: "Branches of engineering", desc: "Quiz on mechanical, civil, electrical, and software engineering." },
        { type: "Build", icon: "🔨", title: "Sketch & label", desc: "Sketch one everyday object and label its parts." },
        { type: "Reflect", icon: "💭", title: "Which branch calls to you?", desc: "Which branch of engineering matches your curiosity most, and why?" }
      ]},
      { label: "Problems before solutions", tasks: [
        { type: "Observe", icon: "🔭", title: "Spot a real problem", desc: "Spot a problem in your school or home that needs a fix." },
        { type: "Quiz", icon: "📝", title: "Good problem statements", desc: "Quiz on what makes a strong engineering problem statement." },
        { type: "Build", icon: "🔨", title: "Write the problem statement", desc: "Write a 1-paragraph problem statement for what you spotted." },
        { type: "Reflect", icon: "💭", title: "What would change?", desc: "What would change in your area if this got fixed?" }
      ]},
      { label: "How machines move", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch something move", desc: "Observe a fan, bicycle, or door hinge — describe the motion." },
        { type: "Quiz", icon: "📝", title: "Basic mechanisms", desc: "Quiz on levers, wheels, and gears." },
        { type: "Build", icon: "🔨", title: "Build a simple mechanism", desc: "Build a simple lever or pulley from household items, describe how it works." },
        { type: "Reflect", icon: "💭", title: "Where else?", desc: "Where else have you seen this mechanism used?" }
      ]},
      { label: "Circuits & electricity basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Electricity vs batteries", desc: "Find 3 things at home that use electricity vs batteries." },
        { type: "Quiz", icon: "📝", title: "Circuit basics", desc: "Quiz on open/closed circuits and series/parallel." },
        { type: "Build", icon: "🔨", title: "Draw a circuit", desc: "Draw a simple circuit diagram for a torch." },
        { type: "Reflect", icon: "💭", title: "Why electricity?", desc: "Why do you think electricity became so central to engineering?" }
      ]},
      { label: "Structures that don't fall", tasks: [
        { type: "Observe", icon: "🔭", title: "Look at a structure", desc: "Observe a bridge, tower, or building near you." },
        { type: "Quiz", icon: "📝", title: "Why triangles are strong", desc: "Quiz on why triangles are strong in structures." },
        { type: "Build", icon: "🔨", title: "Build a structure", desc: "Build a paper or straw structure that holds weight." },
        { type: "Reflect", icon: "💭", title: "Dream big", desc: "What's the tallest or strongest thing you could imagine building?" }
      ]},
      { label: "Coding as engineering", tasks: [
        { type: "Observe", icon: "🔭", title: "Apps that decide things", desc: "Notice 3 apps or devices that clearly \"decide\" things." },
        { type: "Quiz", icon: "📝", title: "What is an algorithm", desc: "Quiz on what an algorithm is, in plain terms." },
        { type: "Build", icon: "🔨", title: "Write instructions", desc: "Write step-by-step instructions for a simple task, like making tea." },
        { type: "Reflect", icon: "💭", title: "Is software engineering real engineering?", desc: "Is software engineering \"real\" engineering to you? Why?" }
      ]},
      { label: "India's engineering landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research a landmark project", desc: "Research one major Indian engineering project (metro, dam, bridge)." },
        { type: "Quiz", icon: "📝", title: "Facts about the project", desc: "Quiz on facts about that project." },
        { type: "Build", icon: "🔨", title: "Explain how it works", desc: "Write a short \"how it works\" explainer in your own words." },
        { type: "Reflect", icon: "💭", title: "Would you build at that scale?", desc: "Would you want to build something at that scale one day?" }
      ]},
      { label: "Design thinking", tasks: [
        { type: "Observe", icon: "🔭", title: "A poorly designed object", desc: "Observe a poorly designed everyday object and why it's annoying." },
        { type: "Quiz", icon: "📝", title: "Design thinking steps", desc: "Quiz on empathize, define, ideate, prototype, test." },
        { type: "Build", icon: "🔨", title: "Redesign it", desc: "Redesign that object on paper." },
        { type: "Reflect", icon: "💭", title: "What flaw would you fix?", desc: "What's a design flaw you'd love to personally fix?" }
      ]},
      { label: "Engineering + environment", tasks: [
        { type: "Observe", icon: "🔭", title: "A sustainability problem", desc: "Notice a sustainability problem in your area (waste, water, energy)." },
        { type: "Quiz", icon: "📝", title: "Renewable vs non-renewable", desc: "Quiz on renewable vs non-renewable, basic terms." },
        { type: "Build", icon: "🔨", title: "Sketch a solution", desc: "Sketch a simple solution concept." },
        { type: "Reflect", icon: "💭", title: "Whose responsibility?", desc: "Should engineers be responsible for environmental impact? Why?" }
      ]},
      { label: "Teams & real projects", tasks: [
        { type: "Observe", icon: "🔭", title: "How many engineers does it take?", desc: "Research how a product you use (phone, car) needed many engineer types." },
        { type: "Quiz", icon: "📝", title: "Matching engineers to products", desc: "Quiz matching engineering types to what they'd contribute." },
        { type: "Build", icon: "🔨", title: "Map your dream project", desc: "Map out which engineering types a dream project of yours would need." },
        { type: "Reflect", icon: "💭", title: "Specialize or broaden?", desc: "Would you rather specialize deeply or work broadly across types?" }
      ]},
      { label: "Path to becoming one", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an entrance path", desc: "Research one Indian engineering entrance path (JEE, state CET, diploma)." },
        { type: "Quiz", icon: "📝", title: "Facts about the pathway", desc: "Quiz on facts about that pathway." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to becoming an engineer." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your engineering identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your engineer summary", desc: "Build a one-page \"This is the engineer I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  }

  // --- PENDING: add remaining 14 professions here, same 12-month x 4-task shape ---
  // "ca-finance-investment": { title: "CA, Finance & Investment", icon: "📊", months: [...] },
  // "entrepreneur-founder": { title: "Entrepreneur & Founder", icon: "🚀", months: [...] },
  // "law-policy-justice", "scientist-researcher", "pilot-aviation", "space-astro-tech" (lite version),
  // "ai-coding-robotics", "gaming-esports", "film-animation-creator", "civil-services",
  // "architecture-design", "media-communication", "sports-personality", "hotel-management-chef",
  // "doctor-track" (lite version)
};
