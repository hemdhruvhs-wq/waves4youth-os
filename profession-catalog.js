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
  },

  "ca-finance-investment": {
    title: "CA, Finance & Investment",
    icon: "📊",
    months: [
      { label: "What finance professionals actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "Money moving around you", desc: "Notice 3 places money changes hands in your day (shop, app, family)." },
        { type: "Quiz", icon: "📝", title: "CA vs banker vs investor", desc: "Quiz on the difference between a CA, a banker, and an investor." },
        { type: "Build", icon: "🔨", title: "Track a week of spending", desc: "Write down everything spent in your house for a week, in categories." },
        { type: "Reflect", icon: "💭", title: "What surprised you?", desc: "What surprised you about where money actually goes?" }
      ]},
      { label: "Reading a simple budget", tasks: [
        { type: "Observe", icon: "🔭", title: "A household budget", desc: "Ask a family member what the biggest monthly expense is." },
        { type: "Quiz", icon: "📝", title: "Income vs expense", desc: "Quiz on income, expense, and savings basics." },
        { type: "Build", icon: "🔨", title: "Build a simple budget", desc: "Make a one-page budget for a pretend ₹10,000 monthly allowance." },
        { type: "Reflect", icon: "💭", title: "Hardest part?", desc: "What was the hardest part about making the budget balance?" }
      ]},
      { label: "Saving vs investing", tasks: [
        { type: "Observe", icon: "🔭", title: "Where does saved money sit?", desc: "Ask a family member where their savings actually are (bank, gold, etc)." },
        { type: "Quiz", icon: "📝", title: "Saving vs investing", desc: "Quiz on the real difference between saving and investing." },
        { type: "Build", icon: "🔨", title: "Compare 2 options", desc: "Compare putting ₹1,000 in a savings account vs a simple investment, on paper." },
        { type: "Reflect", icon: "💭", title: "Which matches you?", desc: "Are you more of a saver or a risk-taker? Why?" }
      ]},
      { label: "How a business makes money", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch a local shop", desc: "Observe a shop or stall — what do they sell, what must they pay for?" },
        { type: "Quiz", icon: "📝", title: "Revenue vs profit", desc: "Quiz on revenue, cost, and profit." },
        { type: "Build", icon: "🔨", title: "Estimate their profit", desc: "Roughly estimate that shop's monthly profit, with your reasoning." },
        { type: "Reflect", icon: "💭", title: "Would you run it?", desc: "Would you want to run a business like that? Why or why not?" }
      ]},
      { label: "What is a share, really", tasks: [
        { type: "Observe", icon: "🔭", title: "A company you know", desc: "Pick a company you use often that's listed on the stock market." },
        { type: "Quiz", icon: "📝", title: "What owning a share means", desc: "Quiz on what it actually means to own a share of a company." },
        { type: "Build", icon: "🔨", title: "Why would people buy it?", desc: "Write 3 reasons someone might want to own a share of that company." },
        { type: "Reflect", icon: "💭", title: "Ownership vs lending", desc: "How is owning a share different from lending someone money?" }
      ]},
      { label: "Why taxes exist", tasks: [
        { type: "Observe", icon: "🔭", title: "Find a tax around you", desc: "Find a receipt or bill that shows tax added to a price." },
        { type: "Quiz", icon: "📝", title: "What taxes pay for", desc: "Quiz on what taxes are actually used for." },
        { type: "Build", icon: "🔨", title: "Design a fair tax", desc: "If you designed one tax rule for your town, what would it be and why?" },
        { type: "Reflect", icon: "💭", title: "Fair or not?", desc: "Do you think taxes are fair as they are? Why or why not?" }
      ]},
      { label: "India's financial landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research UPI or RBI", desc: "Research how UPI payments work, or what the RBI actually does." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned to someone younger, in your own words." },
        { type: "Reflect", icon: "💭", title: "Why it matters", desc: "Why do you think this matters for India's economy?" }
      ]},
      { label: "Risk and return", tasks: [
        { type: "Observe", icon: "🔭", title: "A risky decision", desc: "Think of a risky decision an adult in your life has made with money." },
        { type: "Quiz", icon: "📝", title: "Risk vs return basics", desc: "Quiz on why higher potential return usually means higher risk." },
        { type: "Build", icon: "🔨", title: "Rank 3 options by risk", desc: "Rank saving cash, buying gold, and buying shares from safest to riskiest, with reasons." },
        { type: "Reflect", icon: "💭", title: "How much risk would you take?", desc: "How much risk would you be comfortable taking with your own money?" }
      ]},
      { label: "Planning for a goal", tasks: [
        { type: "Observe", icon: "🔭", title: "Something you want to save for", desc: "Pick something real you'd like to save up for." },
        { type: "Quiz", icon: "📝", title: "Short vs long-term goals", desc: "Quiz on short-term vs long-term financial goals." },
        { type: "Build", icon: "🔨", title: "Build a savings plan", desc: "Write a simple month-by-month plan to save for that goal." },
        { type: "Reflect", icon: "💭", title: "What might get in the way?", desc: "What's most likely to make you break this plan, and how would you handle it?" }
      ]},
      { label: "Careers in finance", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 finance careers", desc: "Research what a CA, an investment banker, and a financial analyst each actually do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching finance careers to what they do day-to-day." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most and explain why in your own words." },
        { type: "Reflect", icon: "💭", title: "Numbers or people?", desc: "Do you enjoy working with numbers alone, or numbers plus people? Why?" }
      ]},
      { label: "Path to becoming a CA", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the CA path", desc: "Research what it actually takes to become a Chartered Accountant in India." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on the CA exam structure and timeline." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a finance career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your financial identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your finance summary", desc: "Build a one-page \"This is the finance professional I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "entrepreneur-founder": {
    title: "Entrepreneur & Founder",
    icon: "🚀",
    months: [
      { label: "What founders actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A business you admire", desc: "Pick a company or app you admire and notice what problem it solves." },
        { type: "Quiz", icon: "📝", title: "Founder vs employee", desc: "Quiz on how a founder's role differs from an employee's." },
        { type: "Build", icon: "🔨", title: "Write its origin story", desc: "Write a short guess at how that company might have started." },
        { type: "Reflect", icon: "💭", title: "Would you want that life?", desc: "Does the founder lifestyle appeal to you? Why or why not?" }
      ]},
      { label: "Spotting a real problem", tasks: [
        { type: "Observe", icon: "🔭", title: "An everyday annoyance", desc: "Notice something mildly annoying in your daily life that no one's fixed." },
        { type: "Quiz", icon: "📝", title: "Problem vs idea", desc: "Quiz on the difference between having an idea and solving a real problem." },
        { type: "Build", icon: "🔨", title: "Write the problem clearly", desc: "Write a 1-paragraph problem statement for what you noticed." },
        { type: "Reflect", icon: "💭", title: "Who else has this problem?", desc: "Who else do you think shares this exact problem?" }
      ]},
      { label: "Who's your customer", tasks: [
        { type: "Observe", icon: "🔭", title: "Ask 3 people", desc: "Ask 3 people if they'd care about the problem you picked last month." },
        { type: "Quiz", icon: "📝", title: "Customer basics", desc: "Quiz on what makes someone a real potential customer." },
        { type: "Build", icon: "🔨", title: "Describe your customer", desc: "Write a short description of exactly who you'd build this for." },
        { type: "Reflect", icon: "💭", title: "What did you learn?", desc: "What surprised you from actually asking people?" }
      ]},
      { label: "How would it make money", tasks: [
        { type: "Observe", icon: "🔭", title: "How similar products earn", desc: "Research how a similar product or app actually makes money." },
        { type: "Quiz", icon: "📝", title: "Business model basics", desc: "Quiz on simple business models (subscription, one-time, ads, commission)." },
        { type: "Build", icon: "🔨", title: "Pick your model", desc: "Decide how your idea would make money, and write why." },
        { type: "Reflect", icon: "💭", title: "Would you pay for it?", desc: "Would you personally pay for this, at the price you chose?" }
      ]},
      { label: "Building a first version", tasks: [
        { type: "Observe", icon: "🔭", title: "A simple version of something big", desc: "Find an example of a big company's very first, simple version." },
        { type: "Quiz", icon: "📝", title: "What is an MVP", desc: "Quiz on what a Minimum Viable Product actually means." },
        { type: "Build", icon: "🔨", title: "Sketch your MVP", desc: "Sketch the simplest possible version of your idea that could still work." },
        { type: "Reflect", icon: "💭", title: "What did you cut?", desc: "What did you leave out, and why was that okay for a first version?" }
      ]},
      { label: "Telling people about it", tasks: [
        { type: "Observe", icon: "🔭", title: "An ad that worked on you", desc: "Notice an ad or post that actually made you want something." },
        { type: "Quiz", icon: "📝", title: "Marketing basics", desc: "Quiz on why that ad worked — what made it effective." },
        { type: "Build", icon: "🔨", title: "Write your own pitch", desc: "Write a 3-sentence pitch for your idea that would make someone curious." },
        { type: "Reflect", icon: "💭", title: "Read it aloud", desc: "How did it feel to pitch your own idea out loud?" }
      ]},
      { label: "India's startup stories", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian startup", desc: "Research the origin story of an Indian startup you've heard of." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on key facts from that startup's early days." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain their early struggle in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of their story stuck with you most?" }
      ]},
      { label: "Failure and resilience", tasks: [
        { type: "Observe", icon: "🔭", title: "A time something didn't work", desc: "Think of a time a plan of yours didn't work out." },
        { type: "Quiz", icon: "📝", title: "Why founders fail often", desc: "Quiz on why most startups don't succeed on the first try." },
        { type: "Build", icon: "🔨", title: "What would you do differently", desc: "Write what you'd change if you tried that plan again." },
        { type: "Reflect", icon: "💭", title: "How do you handle setbacks?", desc: "How do you usually react when something you tried doesn't work?" }
      ]},
      { label: "Money to get started", tasks: [
        { type: "Observe", icon: "🔭", title: "Research funding", desc: "Research what \"funding\" or \"investment\" means for a new company." },
        { type: "Quiz", icon: "📝", title: "Bootstrapping vs funding", desc: "Quiz on the difference between bootstrapping and raising money." },
        { type: "Build", icon: "🔨", title: "Estimate your starting cost", desc: "Roughly estimate what it would cost to build the first version of your idea." },
        { type: "Reflect", icon: "💭", title: "Would you take investment?", desc: "Would you want outside money, or build slowly on your own? Why?" }
      ]},
      { label: "Who you'd build with", tasks: [
        { type: "Observe", icon: "🔭", title: "A strong team you know of", desc: "Think of a team (sports, project, company) that worked really well together." },
        { type: "Quiz", icon: "📝", title: "Founding team roles", desc: "Quiz on common early roles in a founding team." },
        { type: "Build", icon: "🔨", title: "Who would you recruit?", desc: "List 2-3 skills you'd want in a co-founder, and why." },
        { type: "Reflect", icon: "💭", title: "What would you bring?", desc: "What would you personally bring to a founding team?" }
      ]},
      { label: "Path to becoming a founder", tasks: [
        { type: "Observe", icon: "🔭", title: "Research young founders", desc: "Research a founder who started young, in India or elsewhere." },
        { type: "Quiz", icon: "📝", title: "Facts about their path", desc: "Quiz on what you learned about how they got started." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to trying your first idea." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and starting something today?" }
      ]},
      { label: "Your founder identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your founder summary", desc: "Build a one-page \"This is the founder I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "law-policy-justice": {
    title: "Law, Policy & Justice",
    icon: "⚖️",
    months: [
      { label: "What lawyers and policymakers do", tasks: [
        { type: "Observe", icon: "🔭", title: "A rule you follow daily", desc: "Notice a rule or law that affects your daily life." },
        { type: "Quiz", icon: "📝", title: "Lawyer vs judge vs policymaker", desc: "Quiz on the different roles in the justice system." },
        { type: "Build", icon: "🔨", title: "Where did that rule come from?", desc: "Research where the rule you noticed actually comes from." },
        { type: "Reflect", icon: "💭", title: "Is it a fair rule?", desc: "Do you think that rule is fair? Why or why not?" }
      ]},
      { label: "Rights and duties", tasks: [
        { type: "Observe", icon: "🔭", title: "A right you have", desc: "Think of one right you have as an Indian citizen." },
        { type: "Quiz", icon: "📝", title: "Fundamental Rights basics", desc: "Quiz on India's Fundamental Rights, in simple terms." },
        { type: "Build", icon: "🔨", title: "Rights and duties pair", desc: "Write one right and the duty that comes along with it." },
        { type: "Reflect", icon: "💭", title: "Which right matters most to you?", desc: "Which right feels most important to you personally, and why?" }
      ]},
      { label: "How a dispute gets resolved", tasks: [
        { type: "Observe", icon: "🔭", title: "A disagreement you saw", desc: "Think of a disagreement (real or fictional) that needed resolving." },
        { type: "Quiz", icon: "📝", title: "Courts basics", desc: "Quiz on how a basic case moves through a court." },
        { type: "Build", icon: "🔨", title: "Write both sides", desc: "Write a short argument for each side of that disagreement." },
        { type: "Reflect", icon: "💭", title: "What would be fair?", desc: "What outcome do you think would be fair, and why?" }
      ]},
      { label: "Making an argument", tasks: [
        { type: "Observe", icon: "🔭", title: "A debate topic", desc: "Pick a topic people in your class disagree about." },
        { type: "Quiz", icon: "📝", title: "What makes an argument strong", desc: "Quiz on what makes a legal or debate argument convincing." },
        { type: "Build", icon: "🔨", title: "Argue a side", desc: "Write a short, convincing argument for one side of that topic." },
        { type: "Reflect", icon: "💭", title: "Could you argue the opposite?", desc: "Could you argue the other side just as well? Try it in one sentence." }
      ]},
      { label: "How laws get made", tasks: [
        { type: "Observe", icon: "🔭", title: "A law in the news", desc: "Find a law or policy that's been in the news recently." },
        { type: "Quiz", icon: "📝", title: "How a bill becomes law", desc: "Quiz on the basic steps a law goes through in India." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what that law does, in your own words." },
        { type: "Reflect", icon: "💭", title: "Who does it affect most?", desc: "Who do you think this law affects the most, and how?" }
      ]},
      { label: "A landmark Indian case", tasks: [
        { type: "Observe", icon: "🔭", title: "Research a landmark case", desc: "Research one famous Indian court case or judgment." },
        { type: "Quiz", icon: "📝", title: "Facts about the case", desc: "Quiz on the key facts of that case." },
        { type: "Build", icon: "🔨", title: "Explain why it mattered", desc: "Write why this case was important for India." },
        { type: "Reflect", icon: "💭", title: "Would you have decided the same?", desc: "If you were the judge, would you have decided the same way?" }
      ]},
      { label: "Building debate skills", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch a debate or argument", desc: "Watch or read a real debate on a topic you find interesting." },
        { type: "Quiz", icon: "📝", title: "Debate structure basics", desc: "Quiz on how a formal debate is usually structured." },
        { type: "Build", icon: "🔨", title: "Write an opening statement", desc: "Write a 30-second opening statement for a topic of your choice." },
        { type: "Reflect", icon: "💭", title: "How did it feel?", desc: "How did it feel putting your opinion into a structured argument?" }
      ]},
      { label: "Different types of law", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 types of law", desc: "Research criminal law, civil law, and corporate law — one line each." },
        { type: "Quiz", icon: "📝", title: "Matching cases to type", desc: "Quiz matching real-life examples to the right type of law." },
        { type: "Build", icon: "🔨", title: "Which interests you?", desc: "Pick the type that interests you most and explain why." },
        { type: "Reflect", icon: "💭", title: "Protecting people or businesses?", desc: "Do you feel drawn more to protecting people or to business and contracts?" }
      ]},
      { label: "Is justice the same as law", tasks: [
        { type: "Observe", icon: "🔭", title: "A law that felt unfair", desc: "Think of a rule or law, anywhere, that you've felt was unfair even if legal." },
        { type: "Quiz", icon: "📝", title: "Law vs justice", desc: "Quiz on the difference between something being legal and something being just." },
        { type: "Build", icon: "🔨", title: "Write your view", desc: "Write your view on why laws and fairness don't always match." },
        { type: "Reflect", icon: "💭", title: "Who should decide?", desc: "Who do you think should have the power to fix an unfair law?" }
      ]},
      { label: "Careers in law", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 legal careers", desc: "Research what a litigator, a corporate lawyer, and a judge each actually do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching legal careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Courtroom or policy?", desc: "Do you picture yourself more in a courtroom, or shaping policy behind the scenes?" }
      ]},
      { label: "Path to becoming a lawyer", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the CLAT path", desc: "Research what CLAT is and how the path to law school works in India." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on the law school entrance path." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a legal career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your justice identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your justice summary", desc: "Build a one-page \"This is the legal mind I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "scientist-researcher": {
    title: "Scientist & Researcher",
    icon: "🧪",
    months: [
      { label: "What scientists actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A scientific discovery you use", desc: "Notice something you use daily that exists because of scientific research." },
        { type: "Quiz", icon: "📝", title: "Fields of science", desc: "Quiz on the major branches of science, in simple terms." },
        { type: "Build", icon: "🔨", title: "Trace it back", desc: "Write a short guess at how that discovery might have first been found." },
        { type: "Reflect", icon: "💭", title: "What field pulls you in?", desc: "Which field of science are you naturally most curious about?" }
      ]},
      { label: "Asking a good question", tasks: [
        { type: "Observe", icon: "🔭", title: "A question you've wondered", desc: "Notice a \"why\" or \"how\" question about the world you've genuinely wondered about." },
        { type: "Quiz", icon: "📝", title: "The scientific method", desc: "Quiz on the basic steps of the scientific method." },
        { type: "Build", icon: "🔨", title: "Turn it into a testable question", desc: "Rewrite your question as something you could actually test or observe." },
        { type: "Reflect", icon: "💭", title: "How would you start?", desc: "What's the very first thing you'd do to explore this question?" }
      ]},
      { label: "Observation and data", tasks: [
        { type: "Observe", icon: "🔭", title: "Track something for 3 days", desc: "Pick something simple (weather, plant growth, sleep) and observe it for 3 days." },
        { type: "Quiz", icon: "📝", title: "Why data matters", desc: "Quiz on why scientists record data instead of just remembering." },
        { type: "Build", icon: "🔨", title: "Record your observations", desc: "Write down what you observed each day, clearly." },
        { type: "Reflect", icon: "💭", title: "Any pattern?", desc: "Did you notice any pattern? What might explain it?" }
      ]},
      { label: "Designing a simple experiment", tasks: [
        { type: "Observe", icon: "🔭", title: "A cause-and-effect you've noticed", desc: "Notice something you believe causes something else (e.g. more water, faster plant growth)." },
        { type: "Quiz", icon: "📝", title: "Variables basics", desc: "Quiz on what a variable is, and controlling for fairness in an experiment." },
        { type: "Build", icon: "🔨", title: "Design the experiment", desc: "Write out how you'd test your cause-and-effect idea fairly." },
        { type: "Reflect", icon: "💭", title: "What could go wrong?", desc: "What could make your experiment's result misleading?" }
      ]},
      { label: "Different fields of science", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 fields", desc: "Research what a biologist, a physicist, and an environmental scientist actually study." },
        { type: "Quiz", icon: "📝", title: "Matching questions to fields", desc: "Quiz matching real questions to the right field of science." },
        { type: "Build", icon: "🔨", title: "Pick your field", desc: "Pick the field that excites you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Lab or outdoors?", desc: "Do you picture yourself more in a lab, or out in the field? Why?" }
      ]},
      { label: "A famous Indian scientist", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian scientist", desc: "Research one Indian scientist's discovery or contribution." },
        { type: "Quiz", icon: "📝", title: "Facts about them", desc: "Quiz on what you learned about their work." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain their discovery in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of their story or work stuck with you most?" }
      ]},
      { label: "Why science is trusted", tasks: [
        { type: "Observe", icon: "🔭", title: "A scientific claim in the news", desc: "Find a scientific claim reported in the news recently." },
        { type: "Quiz", icon: "📝", title: "Peer review basics", desc: "Quiz on why scientists check each other's work before trusting it." },
        { type: "Build", icon: "🔨", title: "Would you trust this claim?", desc: "Write what would make you trust or doubt that claim." },
        { type: "Reflect", icon: "💭", title: "How do you spot bad science?", desc: "What's one warning sign that a scientific claim might not be reliable?" }
      ]},
      { label: "An unsolved question in science", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an open mystery", desc: "Research one thing scientists still don't fully understand." },
        { type: "Quiz", icon: "📝", title: "Facts about the mystery", desc: "Quiz on what's known and unknown about it." },
        { type: "Build", icon: "🔨", title: "Your own theory", desc: "Write your own guess at an explanation, even if you're not sure." },
        { type: "Reflect", icon: "💭", title: "Does not-knowing bother you?", desc: "Does it excite you or frustrate you that this isn't solved yet?" }
      ]},
      { label: "Science and technology together", tasks: [
        { type: "Observe", icon: "🔭", title: "A tech built on science", desc: "Pick a piece of technology and trace the science behind it." },
        { type: "Quiz", icon: "📝", title: "Science vs engineering", desc: "Quiz on how scientific discovery differs from turning it into technology." },
        { type: "Build", icon: "🔨", title: "Explain the chain", desc: "Write the chain from the scientific discovery to the technology you use." },
        { type: "Reflect", icon: "💭", title: "Discover or build?", desc: "Would you rather discover new knowledge, or build things from existing knowledge?" }
      ]},
      { label: "Careers in research", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 research careers", desc: "Research what a PhD researcher, an ISRO scientist, and a lab technician each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching research careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Alone or in a team?", desc: "Do you picture research as more solo work, or team-based? Why?" }
      ]},
      { label: "Path to becoming a researcher", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research what it takes to become a research scientist in India (degrees, institutes)." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on the research career pathway." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a research career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your researcher identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your researcher summary", desc: "Build a one-page \"This is the researcher I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "pilot-aviation": {
    title: "Pilot & Aviation",
    icon: "✈️",
    months: [
      { label: "What pilots actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A flight you've noticed", desc: "Notice a plane in the sky or think of a flight you've taken." },
        { type: "Quiz", icon: "📝", title: "Pilot vs crew roles", desc: "Quiz on the different roles in a flight crew." },
        { type: "Build", icon: "🔨", title: "What does a pilot check?", desc: "Research what a pilot checks before takeoff." },
        { type: "Reflect", icon: "💭", title: "Does flying excite you?", desc: "What about flying appeals to you most?" }
      ]},
      { label: "A flight you've experienced", tasks: [
        { type: "Observe", icon: "🔭", title: "Think of a real flight", desc: "Recall a flight you've taken or seen, and notice one moment that stood out." },
        { type: "Quiz", icon: "📝", title: "Phases of a flight", desc: "Quiz on takeoff, cruising, and landing — the basic phases of a flight." },
        { type: "Build", icon: "🔨", title: "Describe the whole journey", desc: "Write out a flight from check-in to landing, in your own words." },
        { type: "Reflect", icon: "💭", title: "What moment stood out?", desc: "What part of a flight do you find most fascinating?" }
      ]},
      { label: "How planes actually fly", tasks: [
        { type: "Observe", icon: "🔭", title: "A bird or fan blade", desc: "Observe a bird's wing shape or a fan blade closely." },
        { type: "Quiz", icon: "📝", title: "Lift, basics", desc: "Quiz on what lift is, in simple terms." },
        { type: "Build", icon: "🔨", title: "Explain lift simply", desc: "Explain in your own words why a heavy plane can fly." },
        { type: "Reflect", icon: "💭", title: "What still confuses you?", desc: "What part of flight still feels a bit magical or unclear to you?" }
      ]},
      { label: "Weather and flying", tasks: [
        { type: "Observe", icon: "🔭", title: "Today's weather", desc: "Check today's weather and think about how it might affect a flight." },
        { type: "Quiz", icon: "📝", title: "Weather hazards basics", desc: "Quiz on weather conditions pilots must watch for." },
        { type: "Build", icon: "🔨", title: "Plan around weather", desc: "Write how a pilot might change plans due to bad weather." },
        { type: "Reflect", icon: "💭", title: "Could you handle the pressure?", desc: "How do you think you'd handle making a weather call under pressure?" }
      ]},
      { label: "Finding the way", tasks: [
        { type: "Observe", icon: "🔭", title: "How you navigate", desc: "Notice how you find your way somewhere new (maps, landmarks)." },
        { type: "Quiz", icon: "📝", title: "Navigation basics", desc: "Quiz on how pilots navigate without visible roads." },
        { type: "Build", icon: "🔨", title: "Plan a simple route", desc: "Plan a route between two Indian cities, noting key waypoints." },
        { type: "Reflect", icon: "💭", title: "Trust in instruments", desc: "How comfortable would you be trusting instruments over your own eyes?" }
      ]},
      { label: "Airports and air traffic control", tasks: [
        { type: "Observe", icon: "🔭", title: "An airport you know", desc: "Think about an airport you've seen or visited — what did you notice happening?" },
        { type: "Quiz", icon: "📝", title: "ATC basics", desc: "Quiz on what air traffic control actually does." },
        { type: "Build", icon: "🔨", title: "Why so many rules?", desc: "Write why you think airports need so many strict rules." },
        { type: "Reflect", icon: "💭", title: "Order under pressure", desc: "Do you work well with strict routines and checklists? Why or why not?" }
      ]},
      { label: "India's aviation landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research India's first flight", desc: "Research India's first commercial flight or a major Indian airline's history." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "Why it matters", desc: "Why do you think aviation mattered for a country as large as India?" }
      ]},
      { label: "Safety and checklists", tasks: [
        { type: "Observe", icon: "🔭", title: "A checklist in daily life", desc: "Notice a checklist you or someone else follows regularly." },
        { type: "Quiz", icon: "📝", title: "Why checklists save lives", desc: "Quiz on why pilots rely on checklists instead of memory." },
        { type: "Build", icon: "🔨", title: "Write your own checklist", desc: "Write a short checklist for something important in your own life." },
        { type: "Reflect", icon: "💭", title: "Discipline or restriction?", desc: "Does following a strict checklist feel freeing or restrictive to you?" }
      ]},
      { label: "Types of pilot careers", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 pilot paths", desc: "Research commercial, cargo, and defence pilot careers." },
        { type: "Quiz", icon: "📝", title: "Matching paths", desc: "Quiz matching pilot career types to what they involve." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Passengers or cargo or defence?", desc: "Which appeals to you more — flying people, cargo, or serving the country?" }
      ]},
      { label: "Teamwork in the cockpit", tasks: [
        { type: "Observe", icon: "🔭", title: "A team decision you were part of", desc: "Think of a time you had to make a quick decision as part of a team." },
        { type: "Quiz", icon: "📝", title: "Crew resource management", desc: "Quiz on why cockpit crews are trained to communicate clearly under pressure." },
        { type: "Build", icon: "🔨", title: "Write a clear instruction", desc: "Write a clear, calm instruction you'd give a teammate in an urgent moment." },
        { type: "Reflect", icon: "💭", title: "Leader or supporter?", desc: "In a crisis, do you tend to take charge or support whoever does?" }
      ]},
      { label: "Path to becoming a pilot", tasks: [
        { type: "Observe", icon: "🔭", title: "Research pilot training", desc: "Research how someone in India actually becomes a commercial pilot." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on flying school and license requirements." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a pilot's license." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your aviation identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your pilot summary", desc: "Build a one-page \"This is the pilot I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "space-astro-tech": {
    title: "Space & Aerospace",
    icon: "🛰️",
    months: [
      { label: "What space professionals do", tasks: [
        { type: "Observe", icon: "🔭", title: "Something in the sky", desc: "Look up at the night sky and notice a star, planet, or satellite." },
        { type: "Quiz", icon: "📝", title: "Roles in space missions", desc: "Quiz on the different roles behind a space mission." },
        { type: "Build", icon: "🔨", title: "What makes it possible?", desc: "Research one skill required to send something into space." },
        { type: "Reflect", icon: "💭", title: "What pulls you to space?", desc: "What about space exploration excites you most?" }
      ]},
      { label: "Observing the night sky", tasks: [
        { type: "Observe", icon: "🔭", title: "Look up properly", desc: "Spend 10 minutes actually looking at the night sky and note what you see." },
        { type: "Quiz", icon: "📝", title: "Stars vs planets vs satellites", desc: "Quiz on how to tell stars, planets, and satellites apart in the sky." },
        { type: "Build", icon: "🔨", title: "Sketch what you saw", desc: "Sketch or describe what you observed, labelling anything you could identify." },
        { type: "Reflect", icon: "💭", title: "What made you curious?", desc: "What made you want to look closer or learn more?" }
      ]},
      { label: "Gravity and orbits", tasks: [
        { type: "Observe", icon: "🔭", title: "Something falling", desc: "Drop something and notice how gravity pulls it down." },
        { type: "Quiz", icon: "📝", title: "Orbits basics", desc: "Quiz on why satellites don't just fall to Earth." },
        { type: "Build", icon: "🔨", title: "Explain an orbit simply", desc: "Explain in your own words why the Moon stays in orbit." },
        { type: "Reflect", icon: "💭", title: "What still feels strange?", desc: "What about gravity or orbits still feels counter-intuitive to you?" }
      ]},
      { label: "How rockets work", tasks: [
        { type: "Observe", icon: "🔭", title: "A balloon released", desc: "Notice what happens when you release an inflated balloon." },
        { type: "Quiz", icon: "📝", title: "Rocket basics", desc: "Quiz on the basic principle that makes a rocket move." },
        { type: "Build", icon: "🔨", title: "Explain thrust simply", desc: "Explain in your own words how a rocket pushes itself forward." },
        { type: "Reflect", icon: "💭", title: "What would you launch?", desc: "If you could launch one thing into space, what would it be and why?" }
      ]},
      { label: "India's space missions", tasks: [
        { type: "Observe", icon: "🔭", title: "Research a mission", desc: "Research Chandrayaan or Mangalyaan's journey." },
        { type: "Quiz", icon: "📝", title: "Facts about the mission", desc: "Quiz on key facts from that mission." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what that mission achieved, in your own words." },
        { type: "Reflect", icon: "💭", title: "What moment stood out?", desc: "What part of that mission's story stood out to you most?" }
      ]},
      { label: "Satellites and their uses", tasks: [
        { type: "Observe", icon: "🔭", title: "Something satellites help with", desc: "Notice something in your daily life that relies on satellites (GPS, weather, TV)." },
        { type: "Quiz", icon: "📝", title: "Types of satellites", desc: "Quiz on different uses of satellites." },
        { type: "Build", icon: "🔨", title: "Design a satellite's job", desc: "Design (on paper) a satellite for one specific purpose you'd want." },
        { type: "Reflect", icon: "💭", title: "Which use matters most?", desc: "Which satellite use do you think matters most for India, and why?" }
      ]},
      { label: "ISRO's landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research ISRO's history", desc: "Research one major milestone in ISRO's history." },
        { type: "Quiz", icon: "📝", title: "Facts about ISRO", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain its importance", desc: "Write why this milestone mattered for India." },
        { type: "Reflect", icon: "💭", title: "What's next for ISRO?", desc: "What do you think ISRO should aim for next?" }
      ]},
      { label: "Life in space", tasks: [
        { type: "Observe", icon: "🔭", title: "A daily task, in space", desc: "Pick a normal daily task and imagine doing it with no gravity." },
        { type: "Quiz", icon: "📝", title: "Astronaut life basics", desc: "Quiz on how astronauts eat, sleep, and move in space." },
        { type: "Build", icon: "🔨", title: "Design a space routine", desc: "Design a simple daily routine for an astronaut on a space station." },
        { type: "Reflect", icon: "💭", title: "Could you live there?", desc: "Could you imagine living in space for months? Why or why not?" }
      ]},
      { label: "Careers beyond astronaut", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 space careers", desc: "Research what a space engineer, a space scientist, and a mission controller each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching space careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Space or ground control?", desc: "Would you rather go to space, or be the one guiding it from the ground?" }
      ]},
      { label: "Space is a team effort", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an international mission", desc: "Research a space mission that involved more than one country." },
        { type: "Quiz", icon: "📝", title: "Why countries collaborate", desc: "Quiz on why space missions often involve international teamwork." },
        { type: "Build", icon: "🔨", title: "Explain the benefit", desc: "Write why you think countries choose to work together on space." },
        { type: "Reflect", icon: "💭", title: "Competition or cooperation?", desc: "Should space exploration be more about competition between nations, or cooperation? Why?" }
      ]},
      { label: "Path to a space career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research how someone joins ISRO or a space-related career (JEE, IIST, aerospace engineering)." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on the space career pathway." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a space career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your space identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your space summary", desc: "Build a one-page \"This is the space professional I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "ai-coding-robotics": {
    title: "AI, Coding & Robotics",
    icon: "🤖",
    months: [
      { label: "What this field actually involves", tasks: [
        { type: "Observe", icon: "🔭", title: "AI or code around you", desc: "Notice one app or device that seems to \"think\" or \"decide\" something." },
        { type: "Quiz", icon: "📝", title: "AI vs coding vs robotics", desc: "Quiz on how these three fields differ and connect." },
        { type: "Build", icon: "🔨", title: "How does it decide?", desc: "Write your best guess at how that app makes its decision." },
        { type: "Reflect", icon: "💭", title: "Which pulls you in most?", desc: "Which of AI, coding, or robotics interests you the most right now?" }
      ]},
      { label: "What is data", tasks: [
        { type: "Observe", icon: "🔭", title: "Data you generate daily", desc: "Notice one piece of data you create just by using your phone today (steps, searches, messages)." },
        { type: "Quiz", icon: "📝", title: "What data actually is", desc: "Quiz on what counts as \"data\" in the world of AI and coding." },
        { type: "Build", icon: "🔨", title: "List your own data", desc: "List 5 different types of data an app might collect about you." },
        { type: "Reflect", icon: "💭", title: "How do you feel about this?", desc: "How do you feel knowing this much data gets collected about you daily?" }
      ]},
      { label: "What is an algorithm", tasks: [
        { type: "Observe", icon: "🔭", title: "A recipe or instructions", desc: "Find a recipe or instruction manual and notice its step-by-step structure." },
        { type: "Quiz", icon: "📝", title: "Algorithm basics", desc: "Quiz on what an algorithm actually is." },
        { type: "Build", icon: "🔨", title: "Write your own algorithm", desc: "Write step-by-step instructions for a simple daily task, like tying a shoelace." },
        { type: "Reflect", icon: "💭", title: "Where else do you see this?", desc: "Where else in your life do you follow an \"algorithm\" without realizing it?" }
      ]},
      { label: "How robots sense and act", tasks: [
        { type: "Observe", icon: "🔭", title: "A machine that reacts", desc: "Notice a machine that reacts to something (auto door, motion light)." },
        { type: "Quiz", icon: "📝", title: "Sensors basics", desc: "Quiz on how a robot senses its surroundings." },
        { type: "Build", icon: "🔨", title: "Design a simple robot", desc: "Design (on paper) a simple robot that solves one problem at home." },
        { type: "Reflect", icon: "💭", title: "What would it need to know?", desc: "What would your robot need to sense to work properly?" }
      ]},
      { label: "If-then thinking", tasks: [
        { type: "Observe", icon: "🔭", title: "A daily 'if-then'", desc: "Notice a decision you made today that followed an \"if this, then that\" pattern." },
        { type: "Quiz", icon: "📝", title: "Conditional logic basics", desc: "Quiz on how if-then logic works in code." },
        { type: "Build", icon: "🔨", title: "Write 3 if-then rules", desc: "Write 3 if-then rules for a simple game or app idea." },
        { type: "Reflect", icon: "💭", title: "Where could it go wrong?", desc: "What could break if one of your if-then rules was slightly wrong?" }
      ]},
      { label: "India's AI and robotics landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian AI/robotics story", desc: "Research an Indian company or project doing notable AI or robotics work." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "Why it matters for India", desc: "Why do you think this matters for India specifically?" }
      ]},
      { label: "AI and fairness", tasks: [
        { type: "Observe", icon: "🔭", title: "An unfair outcome you've heard of", desc: "Think of a time you've heard AI got something wrong or unfair." },
        { type: "Quiz", icon: "📝", title: "Bias in AI, basics", desc: "Quiz on why AI systems can end up unfair or biased." },
        { type: "Build", icon: "🔨", title: "Suggest a fix", desc: "Write one idea for how that kind of unfairness could be reduced." },
        { type: "Reflect", icon: "💭", title: "Who's responsible?", desc: "Who do you think is responsible when an AI system makes an unfair decision?" }
      ]},
      { label: "Building something small", tasks: [
        { type: "Observe", icon: "🔭", title: "A problem worth solving", desc: "Pick a small, real problem you could imagine solving with code." },
        { type: "Quiz", icon: "📝", title: "Flowcharts basics", desc: "Quiz on how a flowchart represents a program's logic." },
        { type: "Build", icon: "🔨", title: "Draw your flowchart", desc: "Draw a simple flowchart or write pseudo-code for your solution." },
        { type: "Reflect", icon: "💭", title: "What was tricky?", desc: "What part of planning this out was harder than you expected?" }
      ]},
      { label: "Careers in this field", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 tech careers", desc: "Research what an AI engineer, a software developer, and a robotics engineer each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching tech careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Software or hardware?", desc: "Are you more drawn to writing code, or building physical machines?" }
      ]},
      { label: "AI and the future of jobs", tasks: [
        { type: "Observe", icon: "🔭", title: "A job AI is changing", desc: "Think of a job you know of that AI is already changing." },
        { type: "Quiz", icon: "📝", title: "Automation basics", desc: "Quiz on which kinds of tasks AI tends to automate first." },
        { type: "Build", icon: "🔨", title: "Write your view", desc: "Write your view on how that job might look in 2040." },
        { type: "Reflect", icon: "💭", title: "Excited or worried?", desc: "Does AI's growth make you more excited or more worried about the future? Why?" }
      ]},
      { label: "Path to a tech career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research how someone becomes an AI engineer or roboticist in India." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on relevant degrees and entry points." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a tech career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your tech identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your tech summary", desc: "Build a one-page \"This is the technologist I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "gaming-esports": {
    title: "Gaming & Esports",
    icon: "🎮",
    months: [
      { label: "What this field actually involves", tasks: [
        { type: "Observe", icon: "🔭", title: "A game you love", desc: "Pick a game you play often and notice what keeps you playing." },
        { type: "Quiz", icon: "📝", title: "Roles in gaming/esports", desc: "Quiz on player, designer, developer, analyst, and creator roles." },
        { type: "Build", icon: "🔨", title: "List what makes it fun", desc: "Write 3 specific things that make your favourite game enjoyable." },
        { type: "Reflect", icon: "💭", title: "Which role appeals most?", desc: "Which role in gaming appeals to you most right now, and why?" }
      ]},
      { label: "Different game genres", tasks: [
        { type: "Observe", icon: "🔭", title: "Compare 2 different games", desc: "Compare a fast-action game to a slow, strategic game you've played." },
        { type: "Quiz", icon: "📝", title: "Genre basics", desc: "Quiz on common game genres and what makes each distinct." },
        { type: "Build", icon: "🔨", title: "List what each does well", desc: "Write what each of your two games does well, and for whom." },
        { type: "Reflect", icon: "💭", title: "Which genre is really you?", desc: "Which genre do you find yourself drawn back to again and again, and why?" }
      ]},
      { label: "Basics of game design", tasks: [
        { type: "Observe", icon: "🔭", title: "Rules of a simple game", desc: "Notice the rules of a simple game (even a childhood game like tag)." },
        { type: "Quiz", icon: "📝", title: "Rules, goals, feedback", desc: "Quiz on the basic ingredients every game needs." },
        { type: "Build", icon: "🔨", title: "Design a tiny game", desc: "Design a very simple game with clear rules and a goal." },
        { type: "Reflect", icon: "💭", title: "What made it hard to design?", desc: "What was harder than expected about making the rules clear?" }
      ]},
      { label: "What esports competition takes", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch a competitive match", desc: "Watch part of an esports match or tournament." },
        { type: "Quiz", icon: "📝", title: "Esports basics", desc: "Quiz on what makes esports a real competitive sport." },
        { type: "Build", icon: "🔨", title: "What skills did you notice?", desc: "Write 3 skills the players clearly needed beyond just knowing the game." },
        { type: "Reflect", icon: "💭", title: "Could you compete?", desc: "Do you see yourself competing at that level one day? Why or why not?" }
      ]},
      { label: "India's gaming and esports scene", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian gaming story", desc: "Research an Indian esports player, team, or gaming company." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of their story or work stood out to you?" }
      ]},
      { label: "Streaming and content basics", tasks: [
        { type: "Observe", icon: "🔭", title: "A streamer or content creator", desc: "Watch part of a gaming stream or video and notice what keeps you watching." },
        { type: "Quiz", icon: "📝", title: "What makes content engaging", desc: "Quiz on what makes gaming content fun to watch." },
        { type: "Build", icon: "🔨", title: "Plan your own video idea", desc: "Plan a short gaming video or stream idea you'd want to make." },
        { type: "Reflect", icon: "💭", title: "Playing or entertaining?", desc: "Do you enjoy playing more, or entertaining others while playing? Why?" }
      ]},
      { label: "Design your own game concept", tasks: [
        { type: "Observe", icon: "🔭", title: "A game genre you enjoy", desc: "Pick a game genre (puzzle, action, strategy) that you enjoy most." },
        { type: "Quiz", icon: "📝", title: "Genre basics", desc: "Quiz on what defines that genre." },
        { type: "Build", icon: "🔨", title: "Sketch your game idea", desc: "Sketch a simple concept for a game in that genre — characters, goal, one twist." },
        { type: "Reflect", icon: "💭", title: "What makes it yours?", desc: "What makes your idea different from games you've already played?" }
      ]},
      { label: "Careers in gaming and esports", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 gaming careers", desc: "Research what a game designer, a game developer, and an esports analyst each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching gaming careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Building or playing?", desc: "Would you rather build games, or compete in them?" }
      ]},
      { label: "Passion vs profession", tasks: [
        { type: "Observe", icon: "🔭", title: "A hobby that became work for someone", desc: "Think of someone who turned a hobby into their actual job." },
        { type: "Quiz", icon: "📝", title: "Balance basics", desc: "Quiz on what changes when a hobby becomes a career." },
        { type: "Build", icon: "🔨", title: "Write your view", desc: "Write your view on whether gaming as a job would still feel fun to you." },
        { type: "Reflect", icon: "💭", title: "What would you protect?", desc: "What would you want to protect about gaming if it became your job?" }
      ]},
      { label: "Careers beyond playing", tasks: [
        { type: "Observe", icon: "🔭", title: "A non-player gaming job", desc: "Research a gaming industry job that doesn't involve competing (marketing, QA testing, community management)." },
        { type: "Quiz", icon: "📝", title: "Facts about that role", desc: "Quiz on what that job actually involves." },
        { type: "Build", icon: "🔨", title: "Would this interest you?", desc: "Write whether this role interests you and why." },
        { type: "Reflect", icon: "💭", title: "Many paths, one industry", desc: "Does knowing about this role change how you think about a career in gaming?" }
      ]},
      { label: "Path to a gaming career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research how someone in India gets into game design, development, or esports professionally." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on relevant courses and entry points." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a gaming career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your gaming identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your gaming summary", desc: "Build a one-page \"This is the gaming professional I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "film-animation-creator": {
    title: "Film, Animation & Creator",
    icon: "🎬",
    months: [
      { label: "What creators actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A story that moved you", desc: "Think of a film, video, or show that made you feel something strongly." },
        { type: "Quiz", icon: "📝", title: "Roles in film/creation", desc: "Quiz on the different roles behind a film or video (writer, director, editor)." },
        { type: "Build", icon: "🔨", title: "Why did it work?", desc: "Write what specifically made that story affect you." },
        { type: "Reflect", icon: "💭", title: "Which role calls to you?", desc: "Which part of creating — writing, filming, editing — appeals to you most?" }
      ]},
      { label: "What makes an audience care", tasks: [
        { type: "Observe", icon: "🔭", title: "A character you cared about", desc: "Think of a character from any story who you genuinely cared about." },
        { type: "Quiz", icon: "📝", title: "Why we connect to characters", desc: "Quiz on what makes an audience emotionally invest in a character." },
        { type: "Build", icon: "🔨", title: "Describe your own character", desc: "Describe a simple character of your own that people might care about." },
        { type: "Reflect", icon: "💭", title: "What makes them relatable?", desc: "What about your character makes them feel real?" }
      ]},
      { label: "Storytelling basics", tasks: [
        { type: "Observe", icon: "🔭", title: "A story's structure", desc: "Notice the beginning, middle, and end of a story you know well." },
        { type: "Quiz", icon: "📝", title: "Story structure basics", desc: "Quiz on basic story structure (setup, conflict, resolution)." },
        { type: "Build", icon: "🔨", title: "Outline your own story", desc: "Write a 3-line outline for a story idea of your own." },
        { type: "Reflect", icon: "💭", title: "Where did it come from?", desc: "What inspired your story idea?" }
      ]},
      { label: "How a video is put together", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch a video closely", desc: "Watch a short video and notice where the cuts (scene changes) happen." },
        { type: "Quiz", icon: "📝", title: "Editing basics", desc: "Quiz on why editors choose specific cuts and pacing." },
        { type: "Build", icon: "🔨", title: "Plan your own cuts", desc: "Plan out 3 shots for a 15-second video idea." },
        { type: "Reflect", icon: "💭", title: "What did you notice?", desc: "What surprised you about how deliberate the editing choices were?" }
      ]},
      { label: "Animation basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Something moving smoothly", desc: "Notice how a flipbook or animated character moves smoothly." },
        { type: "Quiz", icon: "📝", title: "Frames and movement", desc: "Quiz on how animation creates the illusion of movement." },
        { type: "Build", icon: "🔨", title: "Draw a tiny flipbook", desc: "Draw 4-5 simple frames showing something moving." },
        { type: "Reflect", icon: "💭", title: "What was tricky?", desc: "What was harder than expected about making it look smooth?" }
      ]},
      { label: "Photography and visuals", tasks: [
        { type: "Observe", icon: "🔭", title: "A photo you love", desc: "Find a photo (yours or someone else's) that you think looks great." },
        { type: "Quiz", icon: "📝", title: "Composition basics", desc: "Quiz on simple photography composition ideas (framing, lighting)." },
        { type: "Build", icon: "🔨", title: "Take your own shot", desc: "Take a photo applying one composition idea you learned." },
        { type: "Reflect", icon: "💭", title: "What changed?", desc: "How did thinking about composition change how you took the photo?" }
      ]},
      { label: "India's film and animation landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian film/animation story", desc: "Research a notable Indian film or animation studio's story." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of their story stuck with you most?" }
      ]},
      { label: "AI tools in creative work", tasks: [
        { type: "Observe", icon: "🔭", title: "AI-made content you've seen", desc: "Notice a piece of AI-generated image, video, or music you've come across." },
        { type: "Quiz", icon: "📝", title: "AI in creative work, basics", desc: "Quiz on how creators are starting to use AI tools." },
        { type: "Build", icon: "🔨", title: "Where would you use it?", desc: "Write where you'd want to use an AI tool in your own creative process." },
        { type: "Reflect", icon: "💭", title: "Tool or threat?", desc: "Does AI feel like a helpful tool to you, or a threat to creativity? Why?" }
      ]},
      { label: "Build a storyboard", tasks: [
        { type: "Observe", icon: "🔭", title: "A storyboard example", desc: "Look at how a storyboard breaks a scene into panels." },
        { type: "Quiz", icon: "📝", title: "Storyboard basics", desc: "Quiz on why creators plan with storyboards before filming." },
        { type: "Build", icon: "🔨", title: "Draw your storyboard", desc: "Draw a simple 4-panel storyboard for a short scene idea." },
        { type: "Reflect", icon: "💭", title: "Did planning help?", desc: "Did planning it out change your idea at all?" }
      ]},
      { label: "Careers in this field", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 creative careers", desc: "Research what a film director, an animator, and a content creator each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching creative careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Solo or team-based?", desc: "Do you enjoy creating alone, or as part of a bigger team? Why?" }
      ]},
      { label: "Path to a creative career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research how someone in India gets into film, animation, or content creation professionally." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on relevant courses and entry points." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a creative career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your creator identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your creator summary", desc: "Build a one-page \"This is the creator I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "civil-services": {
    title: "Civil Services & Public Impact",
    icon: "🏛️",
    months: [
      { label: "What civil servants actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A public service you use", desc: "Notice a public service you or your family use (roads, water, school)." },
        { type: "Quiz", icon: "📝", title: "IAS vs IPS vs other services", desc: "Quiz on the different branches of Indian civil services." },
        { type: "Build", icon: "🔨", title: "Who runs that service?", desc: "Research which part of government runs the service you noticed." },
        { type: "Reflect", icon: "💭", title: "What pulls you to public service?", desc: "What about serving the public interests you?" }
      ]},
      { label: "Local vs national government", tasks: [
        { type: "Observe", icon: "🔭", title: "Who handles what", desc: "Notice a public issue and think about whether it's a local or national responsibility." },
        { type: "Quiz", icon: "📝", title: "Levels of government basics", desc: "Quiz on how local, state, and national government responsibilities differ." },
        { type: "Build", icon: "🔨", title: "Sort 3 issues", desc: "Sort 3 public issues you know of by which level of government should handle them." },
        { type: "Reflect", icon: "💭", title: "Which level interests you?", desc: "Which level of government's work interests you most, and why?" }
      ]},
      { label: "A problem in your city or district", tasks: [
        { type: "Observe", icon: "🔭", title: "Spot a local problem", desc: "Notice a real problem in your city or district (traffic, waste, water)." },
        { type: "Quiz", icon: "📝", title: "Public problems basics", desc: "Quiz on what makes a problem a \"public\" issue versus a personal one." },
        { type: "Build", icon: "🔨", title: "Write the problem clearly", desc: "Write a clear 1-paragraph description of the problem you noticed." },
        { type: "Reflect", icon: "💭", title: "Who does it affect most?", desc: "Who in your community is affected most by this problem?" }
      ]},
      { label: "How government solves problems", tasks: [
        { type: "Observe", icon: "🔭", title: "A government scheme you've heard of", desc: "Find a government scheme or policy addressing a public problem." },
        { type: "Quiz", icon: "📝", title: "Policy basics", desc: "Quiz on how a policy is meant to solve a public problem." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what that scheme does, in your own words." },
        { type: "Reflect", icon: "💭", title: "Is it working?", desc: "Do you think it's actually working? Why or why not?" }
      ]},
      { label: "India's civil services structure", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the structure", desc: "Research how IAS, IPS, and IFS differ from each other." },
        { type: "Quiz", icon: "📝", title: "Facts about the structure", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Which interests you?", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Policy, safety, or diplomacy?", desc: "Are you drawn more to administration, law and order, or foreign relations?" }
      ]},
      { label: "A civil servant who made impact", tasks: [
        { type: "Observe", icon: "🔭", title: "Research a real story", desc: "Research a civil servant known for solving a real public problem." },
        { type: "Quiz", icon: "📝", title: "Facts about their work", desc: "Quiz on what you learned about their work." },
        { type: "Build", icon: "🔨", title: "Explain their impact", desc: "Write why their work mattered, in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of their story stuck with you most?" }
      ]},
      { label: "Budgets and public spending", tasks: [
        { type: "Observe", icon: "🔭", title: "Something public money built", desc: "Notice something in your area that was built with public money (road, school, hospital)." },
        { type: "Quiz", icon: "📝", title: "Public budgets, basics", desc: "Quiz on where government money actually comes from and goes." },
        { type: "Build", icon: "🔨", title: "Where would you spend it?", desc: "If you had a small public budget, write how you'd spend it and why." },
        { type: "Reflect", icon: "💭", title: "Hard choices", desc: "What's hard about deciding where public money should go?" }
      ]},
      { label: "Local governance", tasks: [
        { type: "Observe", icon: "🔭", title: "Research local governance", desc: "Research how a panchayat or municipal corporation actually works." },
        { type: "Quiz", icon: "📝", title: "Facts about local governance", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "Local or national impact?", desc: "Would you rather solve problems locally, or at a national level? Why?" }
      ]},
      { label: "Design a solution", tasks: [
        { type: "Observe", icon: "🔭", title: "Revisit your city's problem", desc: "Go back to the local problem you identified in month 2." },
        { type: "Quiz", icon: "📝", title: "Solution design basics", desc: "Quiz on what makes a public solution realistic versus wishful." },
        { type: "Build", icon: "🔨", title: "Design your solution", desc: "Write a realistic plan for how you'd start solving that problem." },
        { type: "Reflect", icon: "💭", title: "What would be hardest?", desc: "What part of actually implementing this would be hardest?" }
      ]},
      { label: "Careers in civil services", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 civil service careers", desc: "Research what an IAS officer, an IPS officer, and a policy analyst each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching civil service careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Rules or people first?", desc: "When rules and real human need conflict, which do you lean toward?" }
      ]},
      { label: "Path to civil services", tasks: [
        { type: "Observe", icon: "🔭", title: "Research UPSC", desc: "Research what the UPSC exam actually involves." },
        { type: "Quiz", icon: "📝", title: "Facts about UPSC", desc: "Quiz on the UPSC exam structure and timeline." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a civil services career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your public service identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your public service summary", desc: "Build a one-page \"This is the public servant I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "architecture-design": {
    title: "Architecture & Design",
    icon: "🏗️",
    months: [
      { label: "What architects actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A building you notice daily", desc: "Look closely at a building you see often — your home or school." },
        { type: "Quiz", icon: "📝", title: "Architect vs engineer vs designer", desc: "Quiz on how architects differ from civil engineers and interior designers." },
        { type: "Build", icon: "🔨", title: "What choices did they make?", desc: "Write 3 design choices you notice in that building." },
        { type: "Reflect", icon: "💭", title: "What excites you about design?", desc: "What about designing spaces excites you?" }
      ]},
      { label: "What makes design 'good'", tasks: [
        { type: "Observe", icon: "🔭", title: "A well-designed everyday object", desc: "Notice an everyday object whose design you think is genuinely good." },
        { type: "Quiz", icon: "📝", title: "Form vs function", desc: "Quiz on how good design balances how something looks with how it works." },
        { type: "Build", icon: "🔨", title: "Explain why it's good", desc: "Write specifically why you think that object's design works so well." },
        { type: "Reflect", icon: "💭", title: "What's your design taste?", desc: "What kind of design do you find yourself drawn to — simple, bold, traditional, futuristic?" }
      ]},
      { label: "Space and how it's used", tasks: [
        { type: "Observe", icon: "🔭", title: "A room's layout", desc: "Notice how a room in your home is laid out and used." },
        { type: "Quiz", icon: "📝", title: "Function basics", desc: "Quiz on why architects design around how a space will actually be used." },
        { type: "Build", icon: "🔨", title: "Redesign that room", desc: "Sketch a better layout for that room, and explain your changes." },
        { type: "Reflect", icon: "💭", title: "What would improve daily life?", desc: "How would your redesign actually improve daily life there?" }
      ]},
      { label: "Sustainable design basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Natural light or airflow", desc: "Notice how light or air moves through a space you're in." },
        { type: "Quiz", icon: "📝", title: "Sustainable design, basics", desc: "Quiz on what makes a building design more sustainable." },
        { type: "Build", icon: "🔨", title: "Suggest one improvement", desc: "Write one sustainable design change you'd make to a building you know." },
        { type: "Reflect", icon: "💭", title: "Why does this matter to you?", desc: "Why do you think sustainable design matters, especially in India?" }
      ]},
      { label: "India's architectural landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian landmark", desc: "Research one architecturally significant Indian building." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain what makes it special", desc: "Write what makes that building's design notable, in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of its design inspired you most?" }
      ]},
      { label: "Materials and structure basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Materials around you", desc: "Notice the materials used in a building near you (brick, concrete, wood, glass)." },
        { type: "Quiz", icon: "📝", title: "Why materials matter", desc: "Quiz on how material choice affects strength, cost, and look." },
        { type: "Build", icon: "🔨", title: "Choose materials for a design", desc: "Pick materials for a small building idea of your own, and explain why." },
        { type: "Reflect", icon: "💭", title: "Cost vs beauty", desc: "How would you balance cost against how a building looks?" }
      ]},
      { label: "Design thinking for buildings", tasks: [
        { type: "Observe", icon: "🔭", title: "A design that annoys you", desc: "Notice a building or space with poor design (confusing layout, no shade, etc)." },
        { type: "Quiz", icon: "📝", title: "Design thinking basics", desc: "Quiz on empathize, define, ideate, prototype, test — for buildings." },
        { type: "Build", icon: "🔨", title: "Redesign it", desc: "Sketch how you'd fix that design problem." },
        { type: "Reflect", icon: "💭", title: "Who did the original design forget?", desc: "Who do you think the original design didn't consider enough?" }
      ]},
      { label: "Sketch your own design", tasks: [
        { type: "Observe", icon: "🔭", title: "Pick a building type", desc: "Choose a building type you'd like to design — school, home, stadium, or community space." },
        { type: "Quiz", icon: "📝", title: "Planning basics", desc: "Quiz on what an architect plans before drawing (needs, users, site)." },
        { type: "Build", icon: "🔨", title: "Sketch your building", desc: "Sketch your building idea, labelling its key spaces." },
        { type: "Reflect", icon: "💭", title: "Who is it for?", desc: "Who exactly did you imagine using this space?" }
      ]},
      { label: "Architecture and community", tasks: [
        { type: "Observe", icon: "🔭", title: "A space that brings people together", desc: "Notice a public space that seems to bring people together (a park, a market)." },
        { type: "Quiz", icon: "📝", title: "Community design basics", desc: "Quiz on how design can encourage or discourage people from gathering." },
        { type: "Build", icon: "🔨", title: "Design a gathering space", desc: "Design a small community space for your neighborhood." },
        { type: "Reflect", icon: "💭", title: "What makes people stay?", desc: "What makes a public space feel welcoming enough that people want to stay?" }
      ]},
      { label: "Careers in architecture and design", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 design careers", desc: "Research what an architect, an urban planner, and an interior designer each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching design careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Buildings or cities?", desc: "Are you more drawn to designing single buildings, or entire neighborhoods?" }
      ]},
      { label: "Path to becoming an architect", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research the entrance exams and degree path to becoming an architect in India (NATA)." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on the architecture entrance pathway." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to an architecture career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your design identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your design summary", desc: "Build a one-page \"This is the designer I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "media-communication": {
    title: "Media & Communication",
    icon: "🎙️",
    months: [
      { label: "What media professionals actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A story that reached you", desc: "Notice a news story or piece of media that reached you this week." },
        { type: "Quiz", icon: "📝", title: "Roles in media", desc: "Quiz on journalist, editor, presenter, and content creator roles." },
        { type: "Build", icon: "🔨", title: "How did it reach you?", desc: "Write how that story actually made its way to you." },
        { type: "Reflect", icon: "💭", title: "What pulls you to media?", desc: "What about communicating stories to others interests you?" }
      ]},
      { label: "Finding a story worth telling", tasks: [
        { type: "Observe", icon: "🔭", title: "Something worth reporting", desc: "Notice something happening around you that others might not know about." },
        { type: "Quiz", icon: "📝", title: "What makes news, news", desc: "Quiz on what makes something newsworthy." },
        { type: "Build", icon: "🔨", title: "Write it as a headline", desc: "Write a short, honest headline for what you noticed." },
        { type: "Reflect", icon: "💭", title: "Why does it matter?", desc: "Why do you think this story matters to others?" }
      ]},
      { label: "How news actually gets reported", tasks: [
        { type: "Observe", icon: "🔭", title: "Compare two news sources", desc: "Compare how two different sources report the same story." },
        { type: "Quiz", icon: "📝", title: "Reporting basics", desc: "Quiz on what a reporter checks before publishing a story." },
        { type: "Build", icon: "🔨", title: "What was different?", desc: "Write what was different between the two versions you compared." },
        { type: "Reflect", icon: "💭", title: "Which did you trust more?", desc: "Which version did you trust more, and why?" }
      ]},
      { label: "Clear communication basics", tasks: [
        { type: "Observe", icon: "🔭", title: "A confusing message", desc: "Notice a message, sign, or instruction that confused you recently." },
        { type: "Quiz", icon: "📝", title: "Clarity basics", desc: "Quiz on what makes communication clear versus confusing." },
        { type: "Build", icon: "🔨", title: "Rewrite it clearly", desc: "Rewrite that confusing message so it's actually clear." },
        { type: "Reflect", icon: "💭", title: "What changed?", desc: "What specifically made your version clearer?" }
      ]},
      { label: "India's media landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian media story", desc: "Research a significant moment in Indian journalism or media history." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "Why it mattered", desc: "Why do you think this moment mattered for India?" }
      ]},
      { label: "Bias and reliability in media", tasks: [
        { type: "Observe", icon: "🔭", title: "A one-sided story", desc: "Find a story that seems to only tell one side." },
        { type: "Quiz", icon: "📝", title: "Bias basics", desc: "Quiz on how to spot bias in reporting." },
        { type: "Build", icon: "🔨", title: "Write the missing side", desc: "Write what the missing perspective in that story might say." },
        { type: "Reflect", icon: "💭", title: "How do you check reliability?", desc: "What's one thing you now check before trusting a news source?" }
      ]},
      { label: "Different media formats", tasks: [
        { type: "Observe", icon: "🔭", title: "Compare formats", desc: "Notice how the same kind of story is told differently in print, video, and social media." },
        { type: "Quiz", icon: "📝", title: "Format basics", desc: "Quiz on the strengths of different media formats." },
        { type: "Build", icon: "🔨", title: "Pick your best format", desc: "Pick the format you'd want to tell stories in, and explain why." },
        { type: "Reflect", icon: "💭", title: "Why that one?", desc: "What is it about that format that suits how you like to communicate?" }
      ]},
      { label: "Write or record your own story", tasks: [
        { type: "Observe", icon: "🔭", title: "Revisit your story idea", desc: "Go back to the story idea from month 2." },
        { type: "Quiz", icon: "📝", title: "Structure basics", desc: "Quiz on how to structure a short news piece or story." },
        { type: "Build", icon: "🔨", title: "Write it properly", desc: "Write a short, clear version of that story, as if publishing it." },
        { type: "Reflect", icon: "💭", title: "How did it feel?", desc: "How did it feel putting your observation into a real piece of writing?" }
      ]},
      { label: "Careers in media and communication", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 media careers", desc: "Research what a journalist, a PR professional, and a content strategist each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching media careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Reporting or persuading?", desc: "Do you enjoy reporting facts more, or persuading people of an idea?" }
      ]},
      { label: "Media's role in society", tasks: [
        { type: "Observe", icon: "🔭", title: "A time media changed something", desc: "Think of a time media coverage seemed to change what happened next." },
        { type: "Quiz", icon: "📝", title: "Media's power, basics", desc: "Quiz on how media can influence public opinion and action." },
        { type: "Build", icon: "🔨", title: "Write your view", desc: "Write your view on how much power media should have." },
        { type: "Reflect", icon: "💭", title: "Responsibility that comes with it", desc: "What responsibility do you think comes with having that much influence?" }
      ]},
      { label: "Path to a media career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research how someone in India becomes a journalist or media professional." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on relevant courses and entry points." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a media career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your media identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your media summary", desc: "Build a one-page \"This is the communicator I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "sports-personality": {
    title: "Sports Personality",
    icon: "🏆",
    months: [
      { label: "What it takes to compete seriously", tasks: [
        { type: "Observe", icon: "🔭", title: "An athlete you admire", desc: "Think of an athlete you admire and notice what stands out about them." },
        { type: "Quiz", icon: "📝", title: "What competing seriously means", desc: "Quiz on what separates casual play from serious competition." },
        { type: "Build", icon: "🔨", title: "List their qualities", desc: "Write 3 qualities that athlete clearly has beyond raw talent." },
        { type: "Reflect", icon: "💭", title: "Which quality do you already have?", desc: "Which of those qualities do you feel you already have?" }
      ]},
      { label: "Nutrition and recovery basics", tasks: [
        { type: "Observe", icon: "🔭", title: "How your body feels after playing", desc: "Notice how your body feels right after a hard training session or match." },
        { type: "Quiz", icon: "📝", title: "Recovery basics", desc: "Quiz on why rest and nutrition matter as much as training itself." },
        { type: "Build", icon: "🔨", title: "Write a recovery routine", desc: "Write a simple recovery routine you could realistically follow." },
        { type: "Reflect", icon: "💭", title: "Do you take recovery seriously?", desc: "Do you currently give recovery as much attention as training? Why or why not?" }
      ]},
      { label: "Your sport, your skills", tasks: [
        { type: "Observe", icon: "🔭", title: "Your own practice", desc: "Notice what you actually practice in your sport, and how often." },
        { type: "Quiz", icon: "📝", title: "Skill vs discipline", desc: "Quiz on the difference between natural skill and built discipline." },
        { type: "Build", icon: "🔨", title: "Write a training log", desc: "Write down your practice routine for one week." },
        { type: "Reflect", icon: "💭", title: "Where's the gap?", desc: "Where do you think the biggest gap is between where you are and where you want to be?" }
      ]},
      { label: "Physical and mental training", tasks: [
        { type: "Observe", icon: "🔭", title: "Mind vs body in your sport", desc: "Notice a moment in your sport where your mindset mattered as much as your body." },
        { type: "Quiz", icon: "📝", title: "Mental training basics", desc: "Quiz on why top athletes train their mind, not just their body." },
        { type: "Build", icon: "🔨", title: "Write a mental routine", desc: "Write a short routine you could use to calm your nerves before competing." },
        { type: "Reflect", icon: "💭", title: "How do you handle pressure now?", desc: "How do you currently handle pressure before something important?" }
      ]},
      { label: "India's sporting landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian sporting moment", desc: "Research a proud moment in Indian sports history." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "What inspired you?", desc: "What part of that moment stuck with you most?" }
      ]},
      { label: "Dream A — your sporting ambition", tasks: [
        { type: "Observe", icon: "🔭", title: "Picture your peak", desc: "Picture yourself at your sporting best — what does that look like?" },
        { type: "Quiz", icon: "📝", title: "Setting real goals", desc: "Quiz on how athletes set realistic, staged goals." },
        { type: "Build", icon: "🔨", title: "Write Dream A", desc: "Write your sporting ambition clearly, as a real goal with a rough timeline." },
        { type: "Reflect", icon: "💭", title: "Why this dream?", desc: "Why does this particular dream matter to you?" }
      ]},
      { label: "Setbacks and resilience", tasks: [
        { type: "Observe", icon: "🔭", title: "A setback you've faced", desc: "Think of a setback you've faced in your sport (loss, injury, being dropped)." },
        { type: "Quiz", icon: "📝", title: "Resilience basics", desc: "Quiz on how top athletes are known to bounce back from setbacks." },
        { type: "Build", icon: "🔨", title: "Write what you learned", desc: "Write what that setback actually taught you." },
        { type: "Reflect", icon: "💭", title: "How do you bounce back?", desc: "What helps you personally recover after a setback?" }
      ]},
      { label: "Team vs individual dynamics", tasks: [
        { type: "Observe", icon: "🔭", title: "Notice team dynamics", desc: "Notice how your sport (or one you follow) depends on teamwork versus individual skill." },
        { type: "Quiz", icon: "📝", title: "Team vs individual sports", desc: "Quiz on how mindset differs between team and individual sports." },
        { type: "Build", icon: "🔨", title: "Where do you fit?", desc: "Write whether you feel more suited to team or individual competition, and why." },
        { type: "Reflect", icon: "💭", title: "What role do you play?", desc: "In a team setting, what role do you naturally take on?" }
      ]},
      { label: "Careers around sport", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 sport-adjacent careers", desc: "Research what a coach, a sports analyst, and a sports commentator each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching sport-adjacent careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "On the field or around it?", desc: "Could you see yourself staying connected to this sport even off the field?" }
      ]},
      { label: "Dream B — a second future", tasks: [
        { type: "Observe", icon: "🔭", title: "What else connects to your sport", desc: "Think of a career that would keep you connected to your sport, even if Dream A doesn't happen." },
        { type: "Quiz", icon: "📝", title: "Why athletes need a Dream B", desc: "Quiz on why even top athletes benefit from having a second path." },
        { type: "Build", icon: "🔨", title: "Write Dream B", desc: "Write out your Dream B clearly — a future connected to your sport in a different way." },
        { type: "Reflect", icon: "💭", title: "How does it feel to have both?", desc: "How does having two dreams, not just one, change how you feel about the future?" }
      ]},
      { label: "Path to competing seriously", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research what it takes to compete for your sport at a state or national level in India." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on trials, academies, and selection processes." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to competing seriously." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your sports identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your sports summary", desc: "Build a one-page \"This is the athlete I could become\" summary, with both Dream A and Dream B." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "hotel-management-chef": {
    title: "Hotel Management & Chef",
    icon: "👨‍🍳",
    months: [
      { label: "What hospitality professionals actually do", tasks: [
        { type: "Observe", icon: "🔭", title: "A great hospitality experience", desc: "Think of a time a restaurant or hotel made you feel genuinely well taken care of." },
        { type: "Quiz", icon: "📝", title: "Chef vs manager vs hotelier", desc: "Quiz on the different roles in hospitality." },
        { type: "Build", icon: "🔨", title: "What made it great?", desc: "Write 3 specific things that made that experience feel special." },
        { type: "Reflect", icon: "💭", title: "Kitchen or front-of-house?", desc: "Does cooking or guest experience excite you more, or both equally?" }
      ]},
      { label: "Taste and flavor basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Notice flavors in a meal", desc: "Eat a meal slowly and notice the different flavors — sweet, salty, spicy, sour." },
        { type: "Quiz", icon: "📝", title: "Basic taste profiles", desc: "Quiz on the basic taste profiles chefs balance in a dish." },
        { type: "Build", icon: "🔨", title: "Balance a dish on paper", desc: "Write how you'd adjust a dish that was too salty or too bland." },
        { type: "Reflect", icon: "💭", title: "What flavors do you love?", desc: "What flavors do you find yourself drawn to again and again?" }
      ]},
      { label: "How a kitchen and service team work", tasks: [
        { type: "Observe", icon: "🔭", title: "Watch a kitchen or service moment", desc: "Notice how a busy kitchen or restaurant service seems to stay organized." },
        { type: "Quiz", icon: "📝", title: "Team roles basics", desc: "Quiz on typical roles in a professional kitchen and dining room." },
        { type: "Build", icon: "🔨", title: "Map out the roles", desc: "Write out who does what in a restaurant, from kitchen to guest's table." },
        { type: "Reflect", icon: "💭", title: "Where would you fit?", desc: "Which part of that team do you imagine yourself fitting into?" }
      ]},
      { label: "Food safety and hygiene basics", tasks: [
        { type: "Observe", icon: "🔭", title: "Hygiene habits in your kitchen", desc: "Notice hygiene habits (or gaps) in your own kitchen at home." },
        { type: "Quiz", icon: "📝", title: "Food safety basics", desc: "Quiz on why food safety rules exist and matter." },
        { type: "Build", icon: "🔨", title: "Write a hygiene checklist", desc: "Write a short hygiene checklist for a small home kitchen." },
        { type: "Reflect", icon: "💭", title: "Why does this matter to you?", desc: "Why do you think this matters so much in professional kitchens?" }
      ]},
      { label: "India's culinary landmarks", tasks: [
        { type: "Observe", icon: "🔭", title: "Research an Indian cuisine story", desc: "Research the origin story of a regional Indian dish or cuisine." },
        { type: "Quiz", icon: "📝", title: "Facts about it", desc: "Quiz on what you researched." },
        { type: "Build", icon: "🔨", title: "Explain it simply", desc: "Explain what you learned in your own words." },
        { type: "Reflect", icon: "💭", title: "What surprised you?", desc: "What surprised you about that dish's history or origin?" }
      ]},
      { label: "Guest experience and hospitality", tasks: [
        { type: "Observe", icon: "🔭", title: "A time you felt unwelcome", desc: "Think of a time a service experience made you feel unwelcome or ignored." },
        { type: "Quiz", icon: "📝", title: "Hospitality basics", desc: "Quiz on what makes guests feel genuinely welcome." },
        { type: "Build", icon: "🔨", title: "Fix that experience", desc: "Write what should have been done differently in that moment." },
        { type: "Reflect", icon: "💭", title: "What's your hospitality style?", desc: "How would you naturally make a guest feel welcome?" }
      ]},
      { label: "Running a small food business", tasks: [
        { type: "Observe", icon: "🔭", title: "A local food stall or cafe", desc: "Notice a small food business near you — what do they sell, what must they pay for?" },
        { type: "Quiz", icon: "📝", title: "Costs basics", desc: "Quiz on the basic costs a food business has to cover (ingredients, rent, staff)." },
        { type: "Build", icon: "🔨", title: "Estimate their costs", desc: "Roughly estimate what that business spends versus earns in a day." },
        { type: "Reflect", icon: "💭", title: "Would you run one?", desc: "Would you want to run a food business like that one day? Why or why not?" }
      ]},
      { label: "Design a menu or dish", tasks: [
        { type: "Observe", icon: "🔭", title: "A dish you love", desc: "Think of a dish you love, and what makes it work (flavor, texture, presentation)." },
        { type: "Quiz", icon: "📝", title: "Menu design basics", desc: "Quiz on how chefs think about balance and variety in a menu." },
        { type: "Build", icon: "🔨", title: "Design your own dish", desc: "Design your own dish or a small menu, describing it clearly." },
        { type: "Reflect", icon: "💭", title: "What's your signature style?", desc: "What flavors or style do you find yourself drawn to?" }
      ]},
      { label: "Global vs local cuisine", tasks: [
        { type: "Observe", icon: "🔭", title: "Compare two cuisines", desc: "Compare an Indian dish with a dish from another country that feels similar." },
        { type: "Quiz", icon: "📝", title: "Fusion and influence basics", desc: "Quiz on how cuisines borrow and influence each other over time." },
        { type: "Build", icon: "🔨", title: "Design a fusion dish", desc: "Design a simple fusion dish combining both influences." },
        { type: "Reflect", icon: "💭", title: "Tradition or innovation?", desc: "Are you more drawn to preserving tradition, or experimenting with new combinations?" }
      ]},
      { label: "Careers in hospitality", tasks: [
        { type: "Observe", icon: "🔭", title: "Research 3 hospitality careers", desc: "Research what a chef, a hotel manager, and an event planner each do." },
        { type: "Quiz", icon: "📝", title: "Matching roles", desc: "Quiz matching hospitality careers to their day-to-day work." },
        { type: "Build", icon: "🔨", title: "Pick and justify", desc: "Pick the one that interests you most, and explain why." },
        { type: "Reflect", icon: "💭", title: "Cooking or managing?", desc: "Do you enjoy the craft of cooking more, or organizing the whole experience?" }
      ]},
      { label: "Path to a hospitality career", tasks: [
        { type: "Observe", icon: "🔭", title: "Research the path", desc: "Research hotel management institutes or culinary schools in India." },
        { type: "Quiz", icon: "📝", title: "Facts about the path", desc: "Quiz on relevant courses and entry points." },
        { type: "Build", icon: "🔨", title: "Write your roadmap", desc: "Write your own rough roadmap from now to a hospitality career." },
        { type: "Reflect", icon: "💭", title: "What's in your way?", desc: "What's the biggest thing standing between you and this path today?" }
      ]},
      { label: "Your hospitality identity", tasks: [
        { type: "Observe", icon: "🔭", title: "Look back at the year", desc: "Look back at all 11 months — pick your favorite task." },
        { type: "Quiz", icon: "📝", title: "Year recap", desc: "Quiz recapping the year's key concepts." },
        { type: "Build", icon: "🔨", title: "Your hospitality summary", desc: "Build a one-page \"This is the hospitality professional I could become\" summary." },
        { type: "Reflect", icon: "💭", title: "A message to your future self", desc: "Write a message to your Std 12 self about this year." }
      ]}
    ]
  },

  "doctor-healthcare": {
    title: "Doctor & Healthcare",
    icon: "🩺",
    mentorBannerImg: "assets/mentors/mentor-arjun-banner.jpg",
    // Year-end physical reward ladder, based on total coins earned in this
    // profession across the year (~1080 max if every month is fully completed).
    // Shown once a student completes their final month; redemption collects
    // shipping address at that point only (not upfront at signup).
    rewardTiers: [
      { minCoins: 250, icon: "🖊️", item: "W4Y Smart Pen" },
      { minCoins: 550, icon: "👕", item: "Doctor & Healthcare Themed T-Shirt" },
      { minCoins: 850, icon: "🥼", item: "W4Y-Branded Doctor's Coat" },
      { minCoins: 1050, icon: "🧥", item: "Stylish W4Y Hoodie" }
    ],
    // This profession now uses the grade-banded system: different content per
    // grade, some tasks using visual "engine" mini-games (see mission-engines.js)
    // instead of plain text submission. Grades 7-12 to follow this same pattern.
    grades: {
      "6": {
        band: "Explorer",
        bandTagline: "Pure curiosity, zero stakes — every tap is rewarded.",
        months: [
          { label: "Meet Your Heart",
            bonusAssignment: {
              title: { en: "Draw Your Heart", hi: "अपना दिल बनाओ", mr: "तुमचं हृदय काढा" },
              prompt: { en: "Draw or find a picture of a heart, take a photo of it, and write 2-3 sentences about one thing you learned this month. Upload it below!",
                        hi: "दिल की एक तस्वीर बनाओ या ढूंढो, उसकी फोटो लो, और इस महीने जो सीखा उसके बारे में 2-3 वाक्य लिखो। नीचे अपलोड करो!",
                        mr: "हृदयाचं चित्र काढा किंवा शोधा, त्याचा फोटो घ्या, आणि या महिन्यात काय शिकलात याबद्दल 2-3 वाक्यं लिहा. खाली अपलोड करा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🫀", title: "Explore your heart", mentorVisual: "❤️",
              mentorIntro: {
                en: "Put your hand on your chest for a second — feel that thump-thump? That's your heart, and it never takes a single break, not even while you sleep! It's split into two sides with very different jobs. Tap around and I'll show you what each part actually does.",
                hi: "अपना हाथ एक पल के लिए अपनी छाती पर रखो — वो धक-धक महसूस हो रही है? यही तुम्हारा दिल है, जो कभी नहीं रुकता, यहाँ तक कि सोते समय भी नहीं! इसके दो हिस्से हैं और दोनों के काम बिल्कुल अलग हैं। इधर-उधर छूकर देखो, मैं तुम्हें हर हिस्से का असली काम दिखाती हूँ।",
                mr: "थोडा वेळ आपला हात छातीवर ठेवा — ती धडधड जाणवते आहे का? हेच तुमचं हृदय आहे, जे कधीच थांबत नाही, अगदी झोपेतसुद्धा नाही! याचे दोन भाग आहेत आणि दोघांची कामं अगदी वेगळी आहेत. इकडे-तिकडे टॅप करा, मी तुम्हाला प्रत्येक भागाचं खरं काम दाखवते."
              },
              data: { visual: "🫀", animation: "heartbeat", hotspots: [
              { label: {en:"Left side",hi:"बायाँ हिस्सा",mr:"डावी बाजू"}, fact: {en:"This side pumps blood full of oxygen out to your whole body! 💨",hi:"यह हिस्सा ऑक्सीजन से भरा खून पूरे शरीर में भेजता है! 💨",mr:"ही बाजू ऑक्सिजनने भरलेलं रक्त संपूर्ण शरीरात पाठवते! 💨"} },
              { label: {en:"Right side",hi:"दायाँ हिस्सा",mr:"उजवी बाजू"}, fact: {en:"This side collects blood coming back from your body to refill it! 🔄",hi:"यह हिस्सा शरीर से लौटकर आ रहे खून को इकट्ठा करता है! 🔄",mr:"ही बाजू शरीरातून परत येणारं रक्त गोळा करते! 🔄"} },
              { label: {en:"Bottom",hi:"नीचे का हिस्सा",mr:"खालचा भाग"}, fact: {en:"Whoosh! This is the strongest pumping part of all! 💪",hi:"वाह! यह सबसे ताकतवर पम्पिंग हिस्सा है! 💪",mr:"वाह! हा सर्वात ताकदवान पंपिंग भाग आहे! 💪"} },
              { label: {en:"The sound",hi:"आवाज़",mr:"आवाज"}, fact: {en:"That 'lub-dub' sound? That's your heart's valves snapping shut after every beat! 🔊",hi:"वो 'लब-डब' की आवाज़? यह तुम्हारे दिल के वाल्व हर धड़कन के बाद बंद होने की आवाज़ है! 🔊",mr:"तो 'लब-डब' आवाज? हा तुमच्या हृदयाच्या झडपा प्रत्येक ठोक्यानंतर बंद होण्याचा आवाज आहे! 🔊"} }
            ]}},
            { engine: "build-match", icon: "🫀", title: "Match the heart's jobs", mentorVisual: "🧩",
              mentorIntro: {
                en: "Now that you've explored it — let's see if you can match each job to what your heart actually does. Don't worry about getting it perfectly right, just have a go. Every box you fill teaches you something new!",
                hi: "अब जब तुमने इसे एक्सप्लोर कर लिया है — चलो देखते हैं कि तुम हर काम को सही जगह पर मैच कर पाते हो या नहीं। बिल्कुल सही करने की चिंता मत करो, बस कोशिश करो। हर बॉक्स भरने पर तुम कुछ नया सीखोगे!",
                mr: "आता तुम्ही हे एक्सप्लोर केलं आहे — बघूया तुम्ही प्रत्येक काम बरोबर जागी जुळवू शकता का. अगदी बरोबर करण्याची काळजी करू नका, फक्त प्रयत्न करा. प्रत्येक बॉक्स भरताना तुम्हाला काहीतरी नवीन शिकायला मिळेल!"
              },
              data: { noStakes: true, zones: [
              { id: "pump", label: {en:"Pumps blood",hi:"खून पंप करता है",mr:"रक्त पंप करते"} },
              { id: "oxygen", label: {en:"Carries oxygen",hi:"ऑक्सीजन ले जाता है",mr:"ऑक्सिजन घेऊन जाते"} },
              { id: "beat", label: {en:"Beats all day",hi:"पूरे दिन धड़कता है",mr:"दिवसभर धडधडते"} },
              { id: "valves", label: {en:"Has valves",hi:"वाल्व होते हैं",mr:"झडपा असतात"} }
            ], chips: ["pump","oxygen","beat","valves"] }},
            { type: "Quiz", icon: "📝", title: "Heart basics", mentorVisual: "🩺",
              mentorIntro: {
                en: "Time for a quick check-in! This isn't a test to trip you up — it's just to see what stuck from exploring the heart. If something feels tricky, that's totally okay — go back and tap around the heart again before you answer.",
                hi: "अब थोड़ी जांच का समय है! यह तुम्हें फँसाने के लिए टेस्ट नहीं है — बस यह देखने के लिए है कि दिल के बारे में क्या याद रहा। अगर कुछ मुश्किल लगे, तो कोई बात नहीं — जवाब देने से पहले वापस जाकर दिल को फिर से छूकर देखो।",
                mr: "आता थोडी तपासणीची वेळ आहे! ही तुम्हाला अडकवण्यासाठी परीक्षा नाही — फक्त हृदयाबद्दल काय लक्षात राहिलं हे बघण्यासाठी आहे. काही अवघड वाटलं तर हरकत नाही — उत्तर देण्याआधी परत जाऊन हृदयाला पुन्हा टॅप करून बघा."
              },
              desc: {en:"Quiz on what the heart does for your body.",hi:"दिल शरीर के लिए क्या करता है, इस पर क्विज़।",mr:"हृदय शरीरासाठी काय करतं, यावर क्विझ."} },
            { type: "Reflect", icon: "💭", title: "What surprised you?", mentorVisual: "✨",
              mentorIntro: {
                en: "My favorite part of every mission — I want to hear from YOU now. There's no wrong answer here. What's one thing about your heart today that made you go 'wait, really?!'",
                hi: "हर मिशन का मेरा पसंदीदा हिस्सा — अब मुझे तुमसे सुनना है। यहाँ कोई गलत जवाब नहीं है। आज दिल के बारे में ऐसी कौन सी बात थी जिसने तुम्हें कहा 'अरे, सच में?!'",
                mr: "प्रत्येक मिशनचा माझा आवडता भाग — आता मला तुमच्याकडून ऐकायचं आहे. इथे कुठलंही चुकीचं उत्तर नाही. आज हृदयाबद्दल अशी कोणती गोष्ट होती ज्यामुळे तुम्ही म्हणालात 'अरे, खरंच?!'"
              },
              desc: {en:"What's one thing about your heart that surprised you today?",hi:"आज दिल के बारे में ऐसी कौन सी बात थी जिसने तुम्हें हैरान किया?",mr:"आज हृदयाबद्दल अशी कोणती गोष्ट होती जी तुम्हाला आश्चर्यचकित करून गेली?"} },
            { engine: "flip-cards", icon: "🃏", title: "Heart Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising heart fact. No pressure — just flip them all and enjoy!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला दिल का तथ्य देखो। कोई दबाव नहीं — बस सबको पलटो और मज़े लो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून हृदयाबद्दलचं एक आश्चर्यकारक तथ्य बघा. काही दडपण नाही — फक्त सगळी उलटा आणि मजा करा!"
              },
              data: { cards: [
              { front:{en:"How fast?",hi:"कितनी तेज़?",mr:"किती वेगात?"}, back:{en:"Your heart beats about 100,000 times a day! 🚀",hi:"तुम्हारा दिल दिन में लगभग 1,00,000 बार धड़कता है! 🚀",mr:"तुमचं हृदय दिवसाला सुमारे 1,00,000 वेळा धडधडतं! 🚀"} },
              { front:{en:"How big?",hi:"कितना बड़ा?",mr:"किती मोठं?"}, back:{en:"Your heart is about the size of your own fist! ✊",hi:"तुम्हारा दिल तुम्हारी अपनी मुट्ठी जितना बड़ा है! ✊",mr:"तुमचं हृदय तुमच्याच मुठीएवढं आहे! ✊"} },
              { front:{en:"How far?",hi:"कितनी दूर?",mr:"किती लांब?"}, back:{en:"In one day, your heart pumps blood through about 100,000 km of blood vessels! 🌍",hi:"एक दिन में, तुम्हारा दिल लगभग 1,00,000 किमी रक्त वाहिकाओं में खून पंप करता है! 🌍",mr:"एका दिवसात, तुमचं हृदय सुमारे 1,00,000 किमी रक्तवाहिन्यांमधून रक्त पंप करतं! 🌍"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Heart or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your heart knowledge! I'll say a few statements — you decide if each one is true or a myth. Have fun with it!",
                hi: "चलो तुम्हारे दिल के ज्ञान की जांच करते हैं! मैं कुछ बातें कहूँगी — तुम तय करो कि हर एक सच है या मिथक। मज़े करो!",
                mr: "चला तुमच्या हृदयाच्या ज्ञानाची चाचणी घेऊया! मी काही विधानं सांगेन — तुम्ही ठरवा प्रत्येक खरं आहे की मिथक. मजा करा!"
              },
              data: { statements: [
              { text:{en:"Your heart stops beating when you sleep.",hi:"सोते समय तुम्हारा दिल धड़कना बंद कर देता है।",mr:"झोपेत तुमचं हृदय धडधडणं थांबतं."}, answer:false, explain:{en:"Myth! Your heart keeps beating your whole life, even while you sleep.",hi:"मिथक! तुम्हारा दिल पूरी ज़िंदगी धड़कता रहता है, सोते समय भी।",mr:"मिथक! तुमचं हृदय आयुष्यभर धडधडत राहतं, झोपेतसुद्धा."} },
              { text:{en:"Your heart is a muscle.",hi:"तुम्हारा दिल एक मांसपेशी है।",mr:"तुमचं हृदय एक स्नायू आहे."}, answer:true, explain:{en:"True! It's a special muscle that never gets tired.",hi:"सच! यह एक खास मांसपेशी है जो कभी थकती नहीं।",mr:"खरं! हा एक खास स्नायू आहे जो कधीच थकत नाही."} },
              { text:{en:"Exercise makes your heart weaker.",hi:"व्यायाम तुम्हारे दिल को कमज़ोर बनाता है।",mr:"व्यायामामुळे तुमचं हृदय कमकुवत होतं."}, answer:false, explain:{en:"Myth! Exercise actually makes your heart stronger, just like any muscle.",hi:"मिथक! व्यायाम असल में तुम्हारे दिल को मज़बूत बनाता है, किसी भी मांसपेशी की तरह।",mr:"मिथक! व्यायामामुळे तुमचं हृदय खरंतर मजबूत होतं, इतर कोणत्याही स्नायूसारखं."} }
            ]}}
          ]},
          { label: "Meet Your Bones",
            bonusAssignment: {
              title: { en: "Build a Bone Model", hi: "हड्डी का मॉडल बनाओ", mr: "हाडाचं मॉडेल बनवा" },
              prompt: { en: "Use household items (straws, paper, clay — anything!) to build a simple model of a bone or a skeleton part. Take a photo and describe what you used and why!",
                        hi: "घर की चीज़ों (स्ट्रॉ, कागज़, मिट्टी — कुछ भी!) से हड्डी या कंकाल के हिस्से का एक सरल मॉडल बनाओ। एक फोटो लो और बताओ तुमने क्या इस्तेमाल किया और क्यों!",
                        mr: "घरातील वस्तू (स्ट्रॉ, कागद, चिकणमाती — काहीही!) वापरून हाडाचं किंवा सांगाड्याच्या भागाचं साधं मॉडेल बनवा. फोटो घ्या आणि तुम्ही काय वापरलं आणि का ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🦴", title: "Build a skeleton", data: { noStakes: true, zones: [
              { id: "skull", label: "💀 Skull" }, { id: "ribcage", label: "🦴 Ribcage" }, { id: "legs", label: "🦵 Leg bones" }
            ], chips: ["skull","ribcage","legs"], facts: {
              skull: "Your skull protects your brain — like a built-in helmet! 🪖",
              ribcage: "Your ribs form a cage to keep your heart and lungs safe! 🛡️",
              legs: "Your leg bones are some of the strongest in your whole body! 🏃"
            }}},
            { engine: "tap-discover", icon: "🦴", title: "Why bones matter", data: { visual: "🦴", animation: "skeleton", hotspots: [
              { label: "Strength", fact: "Bones are light but incredibly strong — stronger than some steel by weight!" },
              { label: "Growth", fact: "You have more bones as a baby than as an adult — some fuse together as you grow!" },
              { label: "Movement", fact: "Bones work with muscles to let you run, jump, and dance!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Skeleton basics", desc: "Quiz on what your skeleton does for you." },
            { type: "Reflect", icon: "💭", title: "Favorite bone fact?", desc: "What's your favorite thing you learned about bones today?" },
            { engine: "flip-cards", icon: "🃏", title: "Bone Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising bone fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला हड्डी का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून हाडांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many?",hi:"कितनी?",mr:"किती?"}, back:{en:"Adults have 206 bones, but babies are born with about 300! Some fuse together as you grow. 👶",hi:"वयस्कों में 206 हड्डियाँ होती हैं, लेकिन बच्चे लगभग 300 के साथ पैदा होते हैं! बड़े होने पर कुछ जुड़ जाती हैं। 👶",mr:"प्रौढांना 206 हाडं असतात, पण बाळं सुमारे 300 हाडांसह जन्माला येतात! मोठं होताना काही जुळतात. 👶"} },
              { front:{en:"Strongest bone?",hi:"सबसे मज़बूत हड्डी?",mr:"सर्वात मजबूत हाड?"}, back:{en:"Your thigh bone (femur) is stronger than concrete by weight! 🏋️",hi:"तुम्हारी जांघ की हड्डी (फीमर) वज़न के हिसाब से कंक्रीट से भी मज़बूत है! 🏋️",mr:"तुमचं मांडीचं हाड (फीमर) वजनाच्या तुलनेत काँक्रीटपेक्षा मजबूत आहे! 🏋️"} },
              { front:{en:"Smallest bone?",hi:"सबसे छोटी हड्डी?",mr:"सर्वात लहान हाड?"}, back:{en:"The smallest bone in your body is in your ear — smaller than a grain of rice! 👂",hi:"तुम्हारे शरीर की सबसे छोटी हड्डी तुम्हारे कान में है — चावल के दाने से भी छोटी! 👂",mr:"तुमच्या शरीरातील सर्वात लहान हाड तुमच्या कानात आहे — तांदळाच्या दाण्यापेक्षाही लहान! 👂"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Bone or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your bone knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे हड्डी के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या हाडांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Bones are completely solid all the way through.",hi:"हड्डियाँ पूरी तरह से ठोस होती हैं।",mr:"हाडं पूर्णपणे घन असतात."}, answer:false, explain:{en:"Myth! Bones have a spongy inside part that makes them lighter, plus bone marrow inside.",hi:"मिथक! हड्डियों के अंदर एक स्पंजी हिस्सा होता है जो उन्हें हल्का बनाता है, साथ ही अंदर बोन मैरो होता है।",mr:"मिथक! हाडांच्या आत एक स्पंजसारखा भाग असतो जो त्यांना हलकं बनवतो, शिवाय आत बोन मॅरो असतो."} },
              { text:{en:"Broken bones can heal themselves over time.",hi:"टूटी हड्डियाँ समय के साथ खुद ठीक हो सकती हैं।",mr:"तुटलेली हाडं कालांतराने स्वतःहून बरी होऊ शकतात."}, answer:true, explain:{en:"True! Bones are living tissue and can actually repair and regrow themselves.",hi:"सच! हड्डियाँ जीवित ऊतक हैं और वास्तव में खुद की मरम्मत और फिर से बढ़ सकती हैं।",mr:"खरं! हाडं जिवंत ऊती आहेत आणि खरोखर स्वतःची दुरुस्ती करून पुन्हा वाढू शकतात."} },
              { text:{en:"You're born with fewer bones than you'll have as an adult.",hi:"तुम वयस्क होने की तुलना में कम हड्डियों के साथ पैदा होते हो।",mr:"तुम्ही प्रौढ असण्यापेक्षा कमी हाडांसह जन्माला येता."}, answer:false, explain:{en:"Myth! It's the opposite — babies have MORE bones, and many fuse together as they grow.",hi:"मिथक! उल्टा है — बच्चों में ज़्यादा हड्डियाँ होती हैं, और बड़े होने पर कई जुड़ जाती हैं।",mr:"मिथक! उलट आहे — बाळांमध्ये जास्त हाडं असतात, आणि मोठं होताना अनेक जुळतात."} }
            ]}}
          ]},
          { label: "Meet Your Lungs",
            bonusAssignment: {
              title: { en: "Breathing Challenge", hi: "साँस लेने की चुनौती", mr: "श्वासाचं आव्हान" },
              prompt: { en: "Try this: take 5 deep, slow breaths and notice how your chest moves. Take a photo of yourself doing it (or draw it!), and describe how it felt.",
                        hi: "यह करके देखो: 5 गहरी, धीमी साँसें लो और देखो तुम्हारी छाती कैसे हिलती है। खुद की फोटो लो (या बनाओ!), और बताओ कैसा महसूस हुआ।",
                        mr: "हे करून बघा: 5 खोल, हळू श्वास घ्या आणि तुमची छाती कशी हलते ते बघा. स्वतःचा फोटो घ्या (किंवा काढा!), आणि कसं वाटलं ते सांगा." }
            },
            tasks: [
            { engine: "tap-discover", icon: "🫁", title: "Explore your lungs", data: { visual: "🫁", animation: "breathing", hotspots: [
              { label: "Breathing in", fact: "When you breathe in, your lungs fill up with fresh air full of oxygen!" },
              { label: "Breathing out", fact: "When you breathe out, you release air your body doesn't need anymore!" },
              { label: "All day, every day", fact: "You breathe about 20,000 times a day without even thinking about it!" }
            ]}},
            { engine: "build-match", icon: "🫁", title: "Air in, air out", data: { noStakes: true, zones: [
              { id: "in", label: "Breathing IN" }, { id: "out", label: "Breathing OUT" }
            ], chips: ["in","out"], facts: { in: "Fresh oxygen enters your body!", out: "Used air leaves your body!" }}},
            { type: "Quiz", icon: "📝", title: "Lung basics", desc: "Quiz on why breathing matters." },
            { type: "Reflect", icon: "💭", title: "Notice your breathing", desc: "Take 3 deep breaths right now — how does it feel?" },
            { engine: "flip-cards", icon: "🃏", title: "Lung Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising lung fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला फेफड़ों का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून फुफ्फुसांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How big?",hi:"कितने बड़े?",mr:"किती मोठे?"}, back:{en:"If you spread out your lungs flat, they'd cover an entire tennis court! 🎾",hi:"अगर तुम अपने फेफड़ों को समतल फैलाओ, तो वे एक पूरे टेनिस कोर्ट को ढक देंगे! 🎾",mr:"जर तुम्ही तुमची फुफ्फुसं सपाट पसरवली, तर ती संपूर्ण टेनिस कोर्ट झाकतील! 🎾"} },
              { front:{en:"Left vs right?",hi:"बाएँ बनाम दाएँ?",mr:"डावं विरुद्ध उजवं?"}, back:{en:"Your right lung is slightly bigger than your left — your left one makes room for your heart! ❤️",hi:"तुम्हारा दायाँ फेफड़ा बाएँ से थोड़ा बड़ा है — बायाँ फेफड़ा दिल के लिए जगह बनाता है! ❤️",mr:"तुमचं उजवं फुफ्फुस डाव्यापेक्षा थोडं मोठं आहे — डावं फुफ्फुस हृदयासाठी जागा बनवतं! ❤️"} },
              { front:{en:"How often?",hi:"कितनी बार?",mr:"किती वेळा?"}, back:{en:"You take about 20,000-30,000 breaths every single day without even thinking about it! 😮",hi:"तुम बिना सोचे भी हर दिन लगभग 20,000-30,000 साँसें लेते हो! 😮",mr:"तुम्ही न विचार करता दररोज सुमारे 20,000-30,000 श्वास घेता! 😮"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Lung or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your lung knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे फेफड़ों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या फुफ्फुसांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You only breathe using your lungs.",hi:"तुम केवल फेफड़ों का इस्तेमाल करके साँस लेते हो।",mr:"तुम्ही फक्त फुफ्फुसं वापरून श्वास घेता."}, answer:false, explain:{en:"Myth! Your diaphragm (a muscle below your lungs) does most of the work pulling air in.",hi:"मिथक! तुम्हारा डायाफ्राम (फेफड़ों के नीचे की मांसपेशी) हवा खींचने का ज़्यादातर काम करता है।",mr:"मिथक! तुमचा डायाफ्राम (फुफ्फुसांखालचा स्नायू) हवा ओढण्याचं बहुतेक काम करतो."} },
              { text:{en:"Holding your breath for a very long time is safe to practice often.",hi:"लंबे समय तक साँस रोकना अक्सर अभ्यास करने के लिए सुरक्षित है।",mr:"बराच वेळ श्वास रोखणं वारंवार सराव करण्यासाठी सुरक्षित आहे."}, answer:false, explain:{en:"Myth! Your body needs regular oxygen — holding your breath too long isn't something to practice repeatedly.",hi:"मिथक! तुम्हारे शरीर को नियमित ऑक्सीजन चाहिए — साँस बहुत देर तक रोकना बार-बार अभ्यास करने वाली चीज़ नहीं है।",mr:"मिथक! तुमच्या शरीराला नियमित ऑक्सिजन लागतो — श्वास खूप वेळ रोखणं वारंवार सराव करण्यासारखं नाही."} },
              { text:{en:"Lungs help remove waste gas from your body.",hi:"फेफड़े तुम्हारे शरीर से बेकार गैस निकालने में मदद करते हैं।",mr:"फुफ्फुसं तुमच्या शरीरातून टाकाऊ वायू काढण्यास मदत करतात."}, answer:true, explain:{en:"True! Every time you breathe out, you release carbon dioxide your body doesn't need.",hi:"सच! हर बार जब तुम साँस छोड़ते हो, तुम कार्बन डाइऑक्साइड छोड़ते हो जो तुम्हारे शरीर को नहीं चाहिए।",mr:"खरं! प्रत्येक वेळी तुम्ही श्वास सोडता, तुम्ही कार्बन डायऑक्साइड सोडता जो तुमच्या शरीराला नको असतो."} }
            ]}}
          ]},
          { label: "Germs vs. Defenders",
            bonusAssignment: {
              title: { en: "Handwashing Poster", hi: "हाथ धोने का पोस्टर", mr: "हात धुण्याचं पोस्टर" },
              prompt: { en: "Draw a poster teaching someone younger than you how to wash their hands properly. Take a photo and explain your poster!",
                        hi: "अपने से छोटे किसी को हाथ सही तरीके से धोना सिखाने के लिए एक पोस्टर बनाओ। फोटो लो और अपना पोस्टर समझाओ!",
                        mr: "तुमच्यापेक्षा लहान कोणालातरी हात नीट धुण्यास शिकवणारं पोस्टर बनवा. फोटो घ्या आणि तुमचं पोस्टर समजावून सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🛡️", title: "Match germ to defender", data: { noStakes: true, zones: [
              { id: "wash", label: "🦠 Sneeze germs" }, { id: "cut", label: "🦠 Cut on skin" }, { id: "cold", label: "🦠 Cold virus" }
            ], chips: ["wash","cut","cold"], facts: {
              wash: "Washing hands is your best defender against sneeze germs! 🧼",
              cut: "Your skin and white blood cells team up to heal a cut! 🩹",
              cold: "Your immune system's white blood cells fight off cold viruses! 🛡️"
            }}},
            { engine: "tap-discover", icon: "🛡️", title: "Meet your defenders", data: { visual: "🛡️", animation: "shield", hotspots: [
              { label: "White blood cells", fact: "These are your body's tiny superhero soldiers fighting germs!" },
              { label: "Skin", fact: "Your skin is the first wall keeping germs out!" },
              { label: "Fever", fact: "A fever is your body turning up the heat to fight germs faster!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Immune system basics", desc: "Quiz on how your body fights off illness." },
            { type: "Reflect", icon: "💭", title: "Your body, the hero", desc: "Does it feel cool knowing your body has its own defenders? Why?" },
            { engine: "flip-cards", icon: "🃏", title: "Immune Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising immune system fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला इम्यून सिस्टम का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून रोगप्रतिकारक शक्तीबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many soldiers?",hi:"कितने सैनिक?",mr:"किती सैनिक?"}, back:{en:"You have billions of white blood cells patrolling your body right now! 🛡️",hi:"अभी इस समय तुम्हारे शरीर में गश्त लगाती अरबों सफ़ेद रक्त कोशिकाएँ हैं! 🛡️",mr:"आत्ता या क्षणी तुमच्या शरीरात गस्त घालणाऱ्या अब्जावधी पांढऱ्या रक्तपेशी आहेत! 🛡️"} },
              { front:{en:"Remembering germs?",hi:"कीटाणुओं को याद रखना?",mr:"जंतू लक्षात ठेवणं?"}, back:{en:"Your immune system actually remembers germs it's fought before, so it can fight them faster next time! 🧠",hi:"तुम्हारा इम्यून सिस्टम असल में उन कीटाणुओं को याद रखता है जिनसे वो पहले लड़ चुका है, ताकि अगली बार तेज़ी से लड़ सके! 🧠",mr:"तुमची रोगप्रतिकारक शक्ती खरंच पूर्वी लढलेले जंतू लक्षात ठेवते, जेणेकरून पुढच्या वेळी ती वेगाने लढू शकते! 🧠"} },
              { front:{en:"Skin's job?",hi:"त्वचा का काम?",mr:"त्वचेचं काम?"}, back:{en:"Your skin isn't just covering — it's your body's biggest defender, blocking germs every second! 🧱",hi:"तुम्हारी त्वचा सिर्फ ढकने के लिए नहीं है — यह तुम्हारे शरीर का सबसे बड़ा रक्षक है, हर पल कीटाणुओं को रोकता है! 🧱",mr:"तुमची त्वचा फक्त झाकण्यासाठी नाही — ती तुमच्या शरीराची सर्वात मोठी रक्षक आहे, दर सेकंदाला जंतूंना रोखते! 🧱"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Immune or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your immune system knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे इम्यून सिस्टम के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या रोगप्रतिकारक शक्तीच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A fever means something is seriously wrong with you.",hi:"बुखार का मतलब है कि तुम्हें कोई गंभीर समस्या है।",mr:"ताप म्हणजे तुम्हाला काहीतरी गंभीर आजार आहे."}, answer:false, explain:{en:"Myth! A mild fever is often your body's normal, healthy way of fighting germs faster.",hi:"मिथक! हल्का बुखार अक्सर तुम्हारे शरीर का कीटाणुओं से तेज़ी से लड़ने का सामान्य, स्वस्थ तरीका है।",mr:"मिथक! सौम्य ताप अनेकदा तुमच्या शरीराचा जंतूंशी वेगाने लढण्याचा सामान्य, निरोगी मार्ग असतो."} },
              { text:{en:"Washing your hands actually helps prevent illness.",hi:"हाथ धोना वास्तव में बीमारी को रोकने में मदद करता है।",mr:"हात धुणं खरोखर आजार टाळण्यास मदत करतं."}, answer:true, explain:{en:"True! Handwashing removes germs before they get a chance to enter your body.",hi:"सच! हाथ धोना कीटाणुओं को शरीर में घुसने का मौका मिलने से पहले हटा देता है।",mr:"खरं! हात धुतल्याने जंतू तुमच्या शरीरात शिरण्याआधीच निघून जातात."} },
              { text:{en:"Once you're sick with a germ, your body can never recognize it again.",hi:"एक बार बीमार होने पर, तुम्हारा शरीर उस कीटाणु को फिर कभी नहीं पहचान सकता।",mr:"एकदा आजारी पडल्यावर, तुमचं शरीर तो जंतू पुन्हा कधीच ओळखू शकत नाही."}, answer:false, explain:{en:"Myth! Your immune system often remembers germs, which is part of how vaccines and immunity work.",hi:"मिथक! तुम्हारा इम्यून सिस्टम अक्सर कीटाणुओं को याद रखता है, यही वजह है कि वैक्सीन और इम्युनिटी काम करती है।",mr:"मिथक! तुमची रोगप्रतिकारक शक्ती अनेकदा जंतू लक्षात ठेवते, यामुळेच लस आणि रोगप्रतिकारशक्ती काम करते."} }
            ]}}
          ]},
          { label: "Your Five Senses",
            bonusAssignment: {
              title: { en: "Senses Scavenger Hunt", hi: "इंद्रियों की खोज", mr: "इंद्रियांची शोधमोहीम" },
              prompt: { en: "Find one object at home for each sense — something to look at, listen to, smell, touch, and taste. Take a photo of your collection and describe your favorite one!",
                        hi: "घर में हर इंद्रिय के लिए एक चीज़ ढूंढो — देखने, सुनने, सूंघने, छूने और चखने के लिए। अपने संग्रह की फोटो लो और अपनी पसंदीदा चीज़ के बारे में बताओ!",
                        mr: "घरात प्रत्येक इंद्रियासाठी एक वस्तू शोधा — बघण्यासाठी, ऐकण्यासाठी, वास घेण्यासाठी, स्पर्शासाठी आणि चवीसाठी. तुमच्या संग्रहाचा फोटो घ्या आणि तुमची आवडती वस्तू सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "👀", title: "Explore your senses", data: { visual: "✋", hotspots: [
              { label: "👀 Sight", fact: "Your eyes send pictures to your brain faster than any camera!" },
              { label: "👂 Hearing", fact: "Your ears can tell the difference between thousands of sounds!" },
              { label: "✋ Touch", fact: "Your skin can feel a feather landing on it — that's how sensitive it is!" }
            ]}},
            { engine: "build-match", icon: "👃", title: "Match sense to body part", data: { noStakes: true, zones: [
              { id: "see", label: "👁️ Eyes" }, { id: "smell", label: "👃 Nose" }, { id: "taste", label: "👅 Tongue" }
            ], chips: ["see","smell","taste"], facts: { see: "Sight!", smell: "Smell!", taste: "Taste!" }}},
            { type: "Quiz", icon: "📝", title: "Senses basics", desc: "Quiz on your five senses." },
            { type: "Reflect", icon: "💭", title: "Favorite sense?", desc: "If you had to pick one sense as your favorite, which would it be and why?" },
            { engine: "flip-cards", icon: "🃏", title: "Senses Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising fact about your senses!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर अपनी इंद्रियों के बारे में एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून तुमच्या इंद्रियांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many smells?",hi:"कितनी गंध?",mr:"किती वास?"}, back:{en:"Your nose can recognize over 1 trillion different smells! 👃",hi:"तुम्हारी नाक 1 ट्रिलियन से ज़्यादा अलग-अलग गंधों को पहचान सकती है! 👃",mr:"तुमचं नाक 1 ट्रिलियनहून अधिक वेगवेगळे वास ओळखू शकतं! 👃"} },
              { front:{en:"Fastest sense?",hi:"सबसे तेज़ इंद्रिय?",mr:"सर्वात वेगवान इंद्रिय?"}, back:{en:"Hearing is your fastest sense — your brain processes sound faster than sight! 👂",hi:"सुनना तुम्हारी सबसे तेज़ इंद्रिय है — तुम्हारा दिमाग देखने से ज़्यादा तेज़ी से आवाज़ को समझता है! 👂",mr:"ऐकणं तुमची सर्वात वेगवान इंद्रिय आहे — तुमचा मेंदू बघण्यापेक्षा वेगाने आवाज समजतो! 👂"} },
              { front:{en:"Taste and smell?",hi:"स्वाद और गंध?",mr:"चव आणि वास?"}, back:{en:"Most of what you taste actually comes from your sense of smell working together with your tongue! 👅",hi:"तुम जो स्वाद चखते हो उसका ज़्यादातर हिस्सा असल में तुम्हारी सूंघने की इंद्रिय और जीभ के साथ काम करने से आता है! 👅",mr:"तुम्ही जी चव चाखता त्यातील बहुतांश भाग खरंतर तुमची वास घेण्याची इंद्रिय आणि जीभ एकत्र काम करण्यातून येतो! 👅"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Senses or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your senses knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी इंद्रियों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या इंद्रियांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Humans only have five senses total.",hi:"मनुष्यों में कुल पाँच इंद्रियाँ ही होती हैं।",mr:"माणसांना एकूण फक्त पाच इंद्रिये असतात."}, answer:false, explain:{en:"Myth! Scientists count several more, like balance and knowing where your body parts are without looking.",hi:"मिथक! वैज्ञानिक कई और गिनते हैं, जैसे संतुलन और बिना देखे यह जानना कि तुम्हारे शरीर के हिस्से कहाँ हैं।",mr:"मिथक! शास्त्रज्ञ आणखी बऱ्याच गिनतात, जसं संतुलन आणि न बघता तुमच्या शरीराचे भाग कुठे आहेत हे कळणं."} },
              { text:{en:"Your eyes see everything perfectly upside-down before your brain fixes it.",hi:"तुम्हारी आँखें दिमाग द्वारा ठीक करने से पहले हर चीज़ को उल्टा देखती हैं।",mr:"तुमचा मेंदू दुरुस्त करण्याआधी तुमचे डोळे सर्व काही उलटं बघतात."}, answer:true, explain:{en:"True! Your eyes actually capture images upside-down, and your brain automatically flips them right-side up.",hi:"सच! तुम्हारी आँखें असल में तस्वीरों को उल्टा कैद करती हैं, और तुम्हारा दिमाग अपने आप उन्हें सीधा कर देता है।",mr:"खरं! तुमचे डोळे खरंच प्रतिमा उलट्या टिपतात, आणि तुमचा मेंदू आपोआप त्या सरळ करतो."} },
              { text:{en:"Touch only works through your fingers.",hi:"स्पर्श केवल तुम्हारी उंगलियों से काम करता है।",mr:"स्पर्श फक्त तुमच्या बोटांमधून काम करतो."}, answer:false, explain:{en:"Myth! Your entire skin, all over your body, can feel touch, pressure, and temperature.",hi:"मिथक! तुम्हारी पूरी त्वचा, पूरे शरीर पर, स्पर्श, दबाव और तापमान महसूस कर सकती है।",mr:"मिथक! तुमची संपूर्ण त्वचा, संपूर्ण शरीरावर, स्पर्श, दाब आणि तापमान जाणवू शकते."} }
            ]}}
          ]},
          { label: "A Doctor's Toolkit",
            bonusAssignment: {
              title: { en: "Design Your Own Tool", hi: "अपना खुद का औज़ार डिज़ाइन करो", mr: "तुमचं स्वतःचं साधन डिझाइन करा" },
              prompt: { en: "Imagine a brand-new medical tool that doesn't exist yet. Draw it and describe what it would do and why doctors would need it!",
                        hi: "एक बिल्कुल नए मेडिकल टूल की कल्पना करो जो अभी मौजूद नहीं है। उसे बनाओ और बताओ वो क्या करेगा और डॉक्टरों को इसकी ज़रूरत क्यों होगी!",
                        mr: "अजून अस्तित्वात नसलेल्या एका नवीन वैद्यकीय साधनाची कल्पना करा. ते काढा आणि ते काय करेल आणि डॉक्टरांना त्याची गरज का पडेल ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🩺", title: "Match tool to use", data: { noStakes: true, zones: [
              { id: "stetho", label: "🩺 Listens to heartbeat" }, { id: "thermo", label: "🌡️ Checks temperature" }, { id: "otoscope", label: "🔦 Looks in ears" }
            ], chips: ["stetho","thermo","otoscope"], facts: {
              stetho: "A stethoscope lets doctors hear your heart and lungs!",
              thermo: "A thermometer tells if you have a fever!",
              otoscope: "This little light helps doctors check your ears!"
            }}},
            { engine: "tap-discover", icon: "🩺", title: "More doctor tools", data: { visual: "🩺", hotspots: [
              { label: "Stethoscope", fact: "Doctors use this to listen to your heart and lungs!" },
              { label: "Reflex hammer", fact: "This little hammer checks how your nerves react!" },
              { label: "Blood pressure cuff", fact: "This squeezes your arm to measure your blood pressure!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Toolkit basics", desc: "Quiz on what different medical tools are for." },
            { type: "Reflect", icon: "💭", title: "Try it yourself?", desc: "Would you like to try using one of these tools someday? Which one?" },
            { engine: "flip-cards", icon: "🃏", title: "Toolkit Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising fact about doctor's tools!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर डॉक्टर के औज़ारों के बारे में एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून डॉक्टरांच्या साधनांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How old?",hi:"कितना पुराना?",mr:"किती जुनं?"}, back:{en:"The stethoscope was invented over 200 years ago — and doctors still use the same basic idea today! 🩺",hi:"स्टेथोस्कोप 200 साल से भी पहले बनाया गया था — और डॉक्टर आज भी उसी बुनियादी विचार का इस्तेमाल करते हैं! 🩺",mr:"स्टेथोस्कोप 200 वर्षांहून अधिक पूर्वी शोधलं गेलं — आणि डॉक्टर आजही त्याच मूळ कल्पनेचा वापर करतात! 🩺"} },
              { front:{en:"X-ray magic?",hi:"एक्स-रे जादू?",mr:"एक्स-रे जादू?"}, back:{en:"X-rays were discovered by accident in 1895 — and now they help doctors see inside your body without any cutting! ✨",hi:"एक्स-रे की खोज 1895 में गलती से हुई थी — और अब वे डॉक्टरों को बिना काटे तुम्हारे शरीर के अंदर देखने में मदद करते हैं! ✨",mr:"एक्स-रेचा शोध 1895 मध्ये अपघाताने लागला — आणि आता ते डॉक्टरांना कापल्याशिवाय तुमच्या शरीराच्या आत बघण्यास मदत करतात! ✨"} },
              { front:{en:"Thermometer trivia?",hi:"थर्मामीटर की जानकारी?",mr:"थर्मामीटर माहिती?"}, back:{en:"Modern digital thermometers can give a reading in just a few seconds — old ones used to take several minutes! ⏱️",hi:"आधुनिक डिजिटल थर्मामीटर कुछ ही सेकंड में रीडिंग दे देते हैं — पुराने वालों को कई मिनट लगते थे! ⏱️",mr:"आधुनिक डिजिटल थर्मामीटर काही सेकंदातच रीडिंग देतात — जुन्यांना अनेक मिनिटं लागायची! ⏱️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Tool or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your toolkit knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे औज़ारों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या साधनांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A stethoscope can only be used to listen to your heart.",hi:"स्टेथोस्कोप का इस्तेमाल केवल दिल सुनने के लिए किया जा सकता है।",mr:"स्टेथोस्कोपचा वापर फक्त हृदय ऐकण्यासाठीच होऊ शकतो."}, answer:false, explain:{en:"Myth! Doctors also use it to listen to your lungs and even your stomach sounds.",hi:"मिथक! डॉक्टर इसका इस्तेमाल तुम्हारे फेफड़ों और यहाँ तक कि पेट की आवाज़ों को सुनने के लिए भी करते हैं।",mr:"मिथक! डॉक्टर याचा वापर तुमची फुफ्फुसं आणि अगदी पोटाचे आवाज ऐकण्यासाठीही करतात."} },
              { text:{en:"A reflex hammer checks how your nerves respond.",hi:"रिफ्लेक्स हैमर जांचता है कि तुम्हारी नसें कैसे प्रतिक्रिया देती हैं।",mr:"रिफ्लेक्स हॅमर तुमच्या नसा कशा प्रतिसाद देतात हे तपासतो."}, answer:true, explain:{en:"True! That little tap on your knee tests whether your nervous system is working correctly.",hi:"सच! तुम्हारे घुटने पर वह छोटी सी थपकी जांचती है कि तुम्हारा नर्वस सिस्टम सही से काम कर रहा है या नहीं।",mr:"खरं! तुमच्या गुडघ्यावरचा तो छोटासा टॅप तुमची चेतासंस्था नीट काम करते आहे का हे तपासतो."} },
              { text:{en:"Doctors need expensive tools for every single check-up.",hi:"डॉक्टरों को हर जांच के लिए महंगे औज़ारों की ज़रूरत होती है।",mr:"डॉक्टरांना प्रत्येक तपासणीसाठी महाग साधनं लागतात."}, answer:false, explain:{en:"Myth! Many basic check-ups just need simple tools like a stethoscope and a thermometer.",hi:"मिथक! कई बुनियादी जांचों के लिए स्टेथोस्कोप और थर्मामीटर जैसे साधारण औज़ार ही काफी होते हैं।",mr:"मिथक! अनेक मूलभूत तपासण्यांसाठी स्टेथोस्कोप आणि थर्मामीटरसारखी साधी साधनं पुरेशी असतात."} }
            ]}}
          ]},
          { label: "Meet Your Brain",
            bonusAssignment: {
              title: { en: "Brain Doodle Challenge", hi: "दिमाग़ डूडल चुनौती", mr: "मेंदू डूडल आव्हान" },
              prompt: { en: "Draw a picture of your brain and label 2-3 things it does. Take a photo and describe your drawing!",
                        hi: "अपने दिमाग़ की एक तस्वीर बनाओ और उसके 2-3 काम लिखो। फोटो लो और अपनी तस्वीर के बारे में बताओ!",
                        mr: "तुमच्या मेंदूचं चित्र काढा आणि तो करत असलेली 2-3 कामं लिहा. फोटो घ्या आणि तुमचं चित्र समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧠", title: "Explore your brain", data: { visual: "🧠", animation: "nervesignal", hotspots: [
              { label: "Thinking", fact: "Your brain is where every thought, idea, and daydream happens!" },
              { label: "Memory", fact: "Your brain stores memories like a super-powered photo album!" },
              { label: "Control center", fact: "Your brain controls your whole body — even your heartbeat!" }
            ]}},
            { engine: "build-match", icon: "🧠", title: "Match brain job to action", data: { noStakes: true, zones: [
              { id: "think", label: "Solving a puzzle" }, { id: "remember", label: "Recalling a birthday" }, { id: "move", label: "Riding a bicycle" }
            ], chips: ["think","remember","move"], facts: { think: "Thinking!", remember: "Memory!", move: "Movement control!" }}},
            { type: "Quiz", icon: "📝", title: "Brain basics", desc: "Quiz on what your brain does." },
            { type: "Reflect", icon: "💭", title: "Your brain, amazing", desc: "What's something your brain does that you never noticed before?" },
            { engine: "flip-cards", icon: "🃏", title: "Brain Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising brain fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला दिमाग़ का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून मेंदूबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How fast?",hi:"कितनी तेज़?",mr:"किती वेगात?"}, back:{en:"Messages travel through your brain at speeds up to 268 miles per hour! ⚡",hi:"संदेश तुम्हारे दिमाग़ में 268 मील प्रति घंटे तक की गति से यात्रा करते हैं! ⚡",mr:"संदेश तुमच्या मेंदूतून ताशी 268 मैल वेगाने प्रवास करतात! ⚡"} },
              { front:{en:"How much energy?",hi:"कितनी ऊर्जा?",mr:"किती ऊर्जा?"}, back:{en:"Your brain uses about 20% of all your body's energy, even though it's a small part of your weight! 🔋",hi:"तुम्हारा दिमाग़ तुम्हारे शरीर की कुल ऊर्जा का लगभग 20% इस्तेमाल करता है, भले ही यह तुम्हारे वज़न का एक छोटा हिस्सा हो! 🔋",mr:"तुमचा मेंदू तुमच्या शरीराच्या एकूण ऊर्जेपैकी सुमारे 20% वापरतो, जरी तो तुमच्या वजनाचा एक लहान भाग असला तरी! 🔋"} },
              { front:{en:"Never stops?",hi:"कभी नहीं रुकता?",mr:"कधीच थांबत नाही?"}, back:{en:"Your brain stays active even while you sleep — that's when it sorts and stores your memories! 😴",hi:"तुम्हारा दिमाग़ सोते समय भी सक्रिय रहता है — तभी वह तुम्हारी यादों को छाँटता और संग्रहीत करता है! 😴",mr:"तुम्ही झोपेत असतानाही तुमचा मेंदू सक्रिय राहतो — तेव्हाच तो तुमच्या आठवणी वर्गीकृत करून साठवतो! 😴"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Brain or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your brain knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे दिमाग़ के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या मेंदूच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You only use 10% of your brain.",hi:"तुम अपने दिमाग़ का केवल 10% इस्तेमाल करते हो।",mr:"तुम्ही तुमच्या मेंदूचा फक्त 10% वापर करता."}, answer:false, explain:{en:"Myth! Brain scans show you actually use nearly all of your brain, just at different times for different tasks.",hi:"मिथक! ब्रेन स्कैन दिखाते हैं कि तुम असल में अपने लगभग पूरे दिमाग़ का इस्तेमाल करते हो, बस अलग-अलग कामों के लिए अलग समय पर।",mr:"मिथक! ब्रेन स्कॅन दाखवतात की तुम्ही खरंतर तुमच्या जवळजवळ संपूर्ण मेंदूचा वापर करता, फक्त वेगवेगळ्या कामांसाठी वेगळ्या वेळी."} },
              { text:{en:"Your brain can grow new connections your whole life.",hi:"तुम्हारा दिमाग़ पूरी ज़िंदगी नए कनेक्शन बना सकता है।",mr:"तुमचा मेंदू आयुष्यभर नवीन जोडण्या तयार करू शकतो."}, answer:true, explain:{en:"True! Learning new things creates new brain connections at any age — this is called neuroplasticity.",hi:"सच! नई चीज़ें सीखना किसी भी उम्र में नए दिमाग़ी कनेक्शन बनाता है — इसे न्यूरोप्लास्टिसिटी कहते हैं।",mr:"खरं! नवीन गोष्टी शिकल्याने कोणत्याही वयात नवीन मेंदू जोडण्या तयार होतात — याला न्यूरोप्लास्टिसिटी म्हणतात."} },
              { text:{en:"Bigger brains always mean smarter people.",hi:"बड़ा दिमाग़ हमेशा ज़्यादा स्मार्ट होने का मतलब है।",mr:"मोठा मेंदू म्हणजे नेहमी हुशार व्यक्ती."}, answer:false, explain:{en:"Myth! Brain size doesn't determine intelligence — how the brain's connections work matters much more.",hi:"मिथक! दिमाग़ का आकार बुद्धिमत्ता तय नहीं करता — दिमाग़ के कनेक्शन कैसे काम करते हैं यह ज़्यादा मायने रखता है।",mr:"मिथक! मेंदूचा आकार बुद्धिमत्ता ठरवत नाही — मेंदूच्या जोडण्या कशा काम करतात हे जास्त महत्त्वाचं आहे."} }
            ]}}
          ]},
          { label: "How Medicine Helps",
            bonusAssignment: {
              title: { en: "Home Remedy Chart", hi: "घरेलू उपाय चार्ट", mr: "घरगुती उपाय तक्ता" },
              prompt: { en: "Ask a family member about a safe home remedy they use (like rest for tiredness). Draw or write a small chart about it and take a photo!",
                        hi: "परिवार के किसी सदस्य से एक सुरक्षित घरेलू उपाय के बारे में पूछो जो वे इस्तेमाल करते हैं (जैसे थकान के लिए आराम)। उसके बारे में एक छोटा चार्ट बनाओ या लिखो और फोटो लो!",
                        mr: "कुटुंबातील एखाद्याला ते वापरत असलेल्या सुरक्षित घरगुती उपायाबद्दल विचारा (जसं थकव्यासाठी आराम). त्याबद्दल छोटा तक्ता काढा किंवा लिहा आणि फोटो घ्या!" }
            },
            tasks: [
            { engine: "build-match", icon: "💊", title: "Match problem to help", data: { noStakes: true, zones: [
              { id: "rest", label: "Feeling tired" }, { id: "bandage", label: "A small cut" }, { id: "doctor", label: "Ongoing bad pain" }
            ], chips: ["rest","bandage","doctor"], facts: {
              rest: "Rest helps your body recover its energy!",
              bandage: "A bandage protects a cut while it heals!",
              doctor: "A doctor should always check anything that keeps hurting!"
            }}},
            { engine: "tap-discover", icon: "💊", title: "How medicine works", data: { visual: "💊", hotspots: [
              { label: "Fighting germs", fact: "Some medicines help your body fight germs faster!" },
              { label: "Easing pain", fact: "Some medicines calm down pain signals in your body!" },
              { label: "Always ask an adult", fact: "Medicine should only ever be given by a trusted adult or doctor!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Medicine basics", desc: "Quiz on how medicine helps the body." },
            { type: "Reflect", icon: "💭", title: "Safety first", desc: "Why do you think it's important to only take medicine an adult gives you?" },
            { engine: "flip-cards", icon: "🃏", title: "Medicine Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising medicine fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाली दवा का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून औषधांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"From plants?",hi:"पौधों से?",mr:"वनस्पतींपासून?"}, back:{en:"Many medicines originally came from plants — aspirin was first found in willow tree bark! 🌳",hi:"कई दवाएँ मूल रूप से पौधों से आईं — एस्पिरिन सबसे पहले विलो पेड़ की छाल में मिली थी! 🌳",mr:"अनेक औषधं मूळत: वनस्पतींपासून आली — ऍस्पिरिन प्रथम विलो झाडाच्या सालीत सापडलं! 🌳"} },
              { front:{en:"How they travel?",hi:"वे कैसे यात्रा करती हैं?",mr:"ती कशी प्रवास करतात?"}, back:{en:"Once swallowed, medicine travels through your blood to reach exactly where it's needed! 🩸",hi:"निगलने के बाद, दवा तुम्हारे खून के ज़रिए ठीक वहाँ पहुँचती है जहाँ इसकी ज़रूरत होती है! 🩸",mr:"गिळल्यानंतर, औषध तुमच्या रक्तातून नेमकं तिथे पोहोचतं जिथे त्याची गरज असते! 🩸"} },
              { front:{en:"Vaccines?",hi:"वैक्सीन?",mr:"लस?"}, back:{en:"Vaccines are a special kind of medicine that teach your body to fight a germ before you even get sick! 💉",hi:"वैक्सीन एक खास तरह की दवा है जो तुम्हारे बीमार होने से पहले ही तुम्हारे शरीर को कीटाणु से लड़ना सिखाती है! 💉",mr:"लस हा एक खास प्रकारचा औषध आहे जो तुम्ही आजारी पडण्याआधीच तुमच्या शरीराला जंतूशी लढायला शिकवतो! 💉"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Medicine or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your medicine knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी दवा के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या औषधांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Taking more medicine than needed helps you get better faster.",hi:"ज़रूरत से ज़्यादा दवा लेने से तुम तेज़ी से ठीक होते हो।",mr:"गरजेपेक्षा जास्त औषध घेतल्याने तुम्ही लवकर बरे होता."}, answer:false, explain:{en:"Myth! Taking more than the right amount can actually be harmful — always follow what a doctor or adult says.",hi:"मिथक! सही मात्रा से ज़्यादा लेना असल में नुकसानदेह हो सकता है — हमेशा डॉक्टर या बड़े की बात मानो।",mr:"मिथक! योग्य मात्रेपेक्षा जास्त घेणं खरंतर हानिकारक असू शकतं — नेहमी डॉक्टर किंवा मोठ्यांचं ऐका."} },
              { text:{en:"Different medicines can be used for different problems.",hi:"अलग-अलग समस्याओं के लिए अलग-अलग दवाओं का इस्तेमाल किया जा सकता है।",mr:"वेगवेगळ्या समस्यांसाठी वेगवेगळी औषधं वापरली जाऊ शकतात."}, answer:true, explain:{en:"True! That's why doctors carefully choose the right medicine for each specific problem.",hi:"सच! इसीलिए डॉक्टर हर खास समस्या के लिए ध्यान से सही दवा चुनते हैं।",mr:"खरं! म्हणूनच डॉक्टर प्रत्येक विशिष्ट समस्येसाठी काळजीपूर्वक योग्य औषध निवडतात."} },
              { text:{en:"It's fine to share your prescribed medicine with a friend who feels sick.",hi:"जो दोस्त बीमार महसूस कर रहा है उसके साथ अपनी बताई गई दवा साझा करना ठीक है।",mr:"आजारी वाटणाऱ्या मित्रासोबत तुमचं सांगितलेलं औषध वाटणं ठीक आहे."}, answer:false, explain:{en:"Myth! Medicine prescribed for you might not be right — or safe — for someone else's body.",hi:"मिथक! तुम्हारे लिए बताई गई दवा किसी और के शरीर के लिए सही — या सुरक्षित — नहीं हो सकती।",mr:"मिथक! तुमच्यासाठी सांगितलेलं औषध दुसऱ्याच्या शरीरासाठी योग्य — किंवा सुरक्षित — नसू शकतं."} }
            ]}}
          ]},
          { label: "Emergency Helpers",
            bonusAssignment: {
              title: { en: "My Emergency Plan", hi: "मेरी आपातकालीन योजना", mr: "माझी आणीबाणी योजना" },
              prompt: { en: "With a family member, write down 3 important numbers/steps for an emergency at home. Take a photo of your list!",
                        hi: "परिवार के किसी सदस्य के साथ, घर पर आपातकाल के लिए 3 ज़रूरी नंबर/कदम लिखो। अपनी सूची की फोटो लो!",
                        mr: "कुटुंबातील एखाद्यासोबत, घरी आणीबाणीसाठी 3 महत्त्वाचे नंबर/पायऱ्या लिहा. तुमच्या यादीचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🚑", title: "Meet emergency helpers", data: { visual: "🚑", hotspots: [
              { label: "Ambulance", fact: "An ambulance rushes people who need urgent help to the hospital!" },
              { label: "Paramedics", fact: "Paramedics can start helping a patient even before reaching the hospital!" },
              { label: "Emergency number", fact: "In India, 108 connects you to emergency ambulance services!" }
            ]}},
            { engine: "build-match", icon: "🚑", title: "Match helper to job", data: { noStakes: true, zones: [
              { id: "paramedic", label: "Helps in the ambulance" }, { id: "er-doctor", label: "Helps in the emergency room" }, { id: "dispatcher", label: "Answers the emergency call" }
            ], chips: ["paramedic","er-doctor","dispatcher"], facts: {
              paramedic: "Paramedics!", "er-doctor": "Emergency room doctors!", dispatcher: "Emergency call dispatchers!"
            }}},
            { type: "Quiz", icon: "📝", title: "Emergency basics", desc: "Quiz on who helps in a medical emergency." },
            { type: "Reflect", icon: "💭", title: "Helper heroes", desc: "What do you think is the hardest part of being an emergency helper?" },
            { engine: "flip-cards", icon: "🃏", title: "Emergency Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising emergency-care fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर आपातकालीन देखभाल का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून आणीबाणी काळजीबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"Golden hour?",hi:"गोल्डन ऑवर?",mr:"गोल्डन अवर?"}, back:{en:"Doctors call the first hour after a serious injury the 'golden hour' — quick help makes a huge difference! ⏰",hi:"डॉक्टर गंभीर चोट के बाद पहले घंटे को 'गोल्डन ऑवर' कहते हैं — तेज़ मदद बहुत फ़र्क डालती है! ⏰",mr:"डॉक्टर गंभीर दुखापतीनंतरच्या पहिल्या तासाला 'गोल्डन अवर' म्हणतात — जलद मदत खूप फरक पाडते! ⏰"} },
              { front:{en:"Ambulance tech?",hi:"एम्बुलेंस तकनीक?",mr:"रुग्णवाहिका तंत्रज्ञान?"}, back:{en:"Modern ambulances are like mini-hospitals on wheels, with equipment to help right on the way! 🚑",hi:"आधुनिक एम्बुलेंस पहियों पर मिनी-अस्पताल की तरह हैं, रास्ते में ही मदद करने के उपकरणों के साथ! 🚑",mr:"आधुनिक रुग्णवाहिका चाकांवरच्या मिनी-हॉस्पिटलसारख्या असतात, वाटेतच मदत करण्याच्या उपकरणांसह! 🚑"} },
              { front:{en:"Kids can help too?",hi:"बच्चे भी मदद कर सकते हैं?",mr:"मुलंही मदत करू शकतात?"}, back:{en:"Even kids can help in an emergency — by staying calm and telling a trusted adult right away! 🌟",hi:"बच्चे भी आपातकाल में मदद कर सकते हैं — शांत रहकर और तुरंत किसी भरोसेमंद बड़े को बताकर! 🌟",mr:"मुलंसुद्धा आणीबाणीत मदत करू शकतात — शांत राहून आणि लगेच एखाद्या विश्वासू मोठ्याला सांगून! 🌟"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Emergency or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your emergency-care knowledge! Decide if each statement is true or a myth.",
                hi: "चलो आपातकालीन देखभाल के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला आणीबाणी काळजीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You should always try to handle a serious emergency completely by yourself.",hi:"तुम्हें हमेशा एक गंभीर आपातकाल को पूरी तरह अकेले संभालने की कोशिश करनी चाहिए।",mr:"तुम्ही नेहमी गंभीर आणीबाणी पूर्णपणे एकट्याने हाताळण्याचा प्रयत्न करावा."}, answer:false, explain:{en:"Myth! The right first step is almost always to get a trusted adult or call for emergency help right away.",hi:"मिथक! सही पहला कदम लगभग हमेशा भरोसेमंद बड़े को बुलाना या तुरंत आपातकालीन मदद के लिए कॉल करना है।",mr:"मिथक! योग्य पहिली पायरी जवळजवळ नेहमी विश्वासू मोठ्याला बोलावणं किंवा लगेच आणीबाणी मदतीसाठी कॉल करणं हीच असते."} },
              { text:{en:"Paramedics are trained to help before reaching the hospital.",hi:"पैरामेडिक्स अस्पताल पहुँचने से पहले मदद करने के लिए प्रशिक्षित होते हैं।",mr:"पॅरामेडिक्स रुग्णालयात पोहोचण्याआधी मदत करण्यासाठी प्रशिक्षित असतात."}, answer:true, explain:{en:"True! Paramedics can start important care right in the ambulance, on the way to the hospital.",hi:"सच! पैरामेडिक्स एम्बुलेंस में ही, अस्पताल जाते समय ज़रूरी देखभाल शुरू कर सकते हैं।",mr:"खरं! पॅरामेडिक्स रुग्णवाहिकेतच, रुग्णालयाकडे जाताना महत्त्वाची काळजी सुरू करू शकतात."} },
              { text:{en:"Emergency numbers are only useful for adults to call.",hi:"आपातकालीन नंबर केवल बड़ों के कॉल करने के लिए उपयोगी हैं।",mr:"आणीबाणी क्रमांक फक्त मोठ्यांनी कॉल करण्यासाठीच उपयोगी असतात."}, answer:false, explain:{en:"Myth! Kids can and should call for emergency help too, if there's no adult around and someone needs urgent help.",hi:"मिथक! बच्चे भी आपातकालीन मदद के लिए कॉल कर सकते हैं और करना चाहिए, अगर आसपास कोई बड़ा न हो और किसी को तुरंत मदद चाहिए।",mr:"मिथक! जर आजूबाजूला कोणी मोठं नसेल आणि कोणाला तातडीने मदत हवी असेल, तर मुलंसुद्धा आणीबाणी मदतीसाठी कॉल करू शकतात आणि करावं."} }
            ]}}
          ]},
          { label: "Teeth & Smiles",
            bonusAssignment: {
              title: { en: "Design a Smile Chart", hi: "मुस्कान चार्ट डिज़ाइन करो", mr: "स्माईल तक्ता डिझाइन करा" },
              prompt: { en: "Design a fun weekly chart to track brushing your teeth morning and night. Take a photo of your chart and describe how you'll use it!",
                        hi: "सुबह और रात दांत ब्रश करने को ट्रैक करने के लिए एक मज़ेदार साप्ताहिक चार्ट डिज़ाइन करो। अपने चार्ट की फोटो लो और बताओ तुम इसे कैसे इस्तेमाल करोगे!",
                        mr: "सकाळी आणि रात्री दात घासण्याचा मागोवा घेण्यासाठी एक मजेदार साप्ताहिक तक्ता डिझाइन करा. तुमच्या तक्त्याचा फोटो घ्या आणि तुम्ही तो कसा वापराल ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🦷", title: "Match habit to routine", data: { noStakes: true, zones: [
              { id: "brush", label: "Morning & night" }, { id: "floss", label: "Once a day" }, { id: "dentist", label: "Every 6 months" }
            ], chips: ["brush","floss","dentist"], facts: {
              brush: "Brushing twice a day keeps your teeth strong!",
              floss: "Flossing cleans the spots your brush can't reach!",
              dentist: "Regular dentist visits catch problems early!"
            }}},
            { engine: "tap-discover", icon: "🦷", title: "Explore your teeth", data: { visual: "🦷", hotspots: [
              { label: "Front teeth", fact: "Your front teeth are perfect for biting into food!" },
              { label: "Back teeth", fact: "Your back teeth grind and chew food into small pieces!" },
              { label: "Enamel", fact: "The outer layer of your teeth is the hardest part of your whole body!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Dental basics", desc: "Quiz on how to take care of your teeth." },
            { type: "Reflect", icon: "💭", title: "Your smile routine", desc: "How do you take care of your teeth every day?" },
            { engine: "flip-cards", icon: "🃏", title: "Teeth Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising teeth fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला दांतों का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून दातांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many?",hi:"कितने?",mr:"किती?"}, back:{en:"Adults have 32 teeth, but kids your age are still growing into that number! 🦷",hi:"वयस्कों के 32 दांत होते हैं, लेकिन तुम्हारी उम्र के बच्चे अभी उस संख्या तक बढ़ रहे हैं! 🦷",mr:"प्रौढांना 32 दात असतात, पण तुमच्या वयाची मुलं अजून त्या संख्येपर्यंत वाढत आहेत! 🦷"} },
              { front:{en:"Stronger than bone?",hi:"हड्डी से मज़बूत?",mr:"हाडांपेक्षा मजबूत?"}, back:{en:"Tooth enamel is the hardest substance in your entire body — even harder than bone! 💎",hi:"दांतों का इनैमल तुम्हारे पूरे शरीर में सबसे कठोर पदार्थ है — हड्डी से भी ज़्यादा कठोर! 💎",mr:"दातांचं इनॅमल तुमच्या संपूर्ण शरीरातील सर्वात कठीण पदार्थ आहे — हाडांपेक्षाही कठीण! 💎"} },
              { front:{en:"Everyone's unique?",hi:"हर किसी के अनोखे?",mr:"प्रत्येकाचे वेगळे?"}, back:{en:"Just like fingerprints, no two people have exactly the same teeth pattern! ✨",hi:"उंगलियों के निशान की तरह, किसी भी दो लोगों के दांतों का पैटर्न बिल्कुल एक जैसा नहीं होता! ✨",mr:"बोटांच्या ठशांप्रमाणे, कोणत्याही दोन व्यक्तींचे दातांचे नमुने अगदी सारखे नसतात! ✨"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Teeth or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your teeth knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे दांतों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या दातांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Sugary food can help germs grow on your teeth.",hi:"चीनी वाला खाना तुम्हारे दांतों पर कीटाणुओं को बढ़ने में मदद कर सकता है।",mr:"साखरयुक्त अन्न तुमच्या दातांवर जंतू वाढण्यास मदत करू शकतं."}, answer:true, explain:{en:"True! Sugar feeds the germs in your mouth, which is why brushing after sweets really matters.",hi:"सच! चीनी तुम्हारे मुँह के कीटाणुओं को खिलाती है, इसीलिए मीठा खाने के बाद ब्रश करना बहुत मायने रखता है।",mr:"खरं! साखर तुमच्या तोंडातील जंतूंना खाद्य देते, म्हणूनच गोड खाल्ल्यानंतर ब्रश करणं खूप महत्त्वाचं आहे."} },
              { text:{en:"Once you lose a baby tooth, nothing grows back in its place.",hi:"एक बार दूध का दांत टूटने पर, उसकी जगह कुछ नहीं उगता।",mr:"एकदा दुधाचा दात पडला की, त्याच्या जागी काहीच उगवत नाही."}, answer:false, explain:{en:"Myth! A permanent adult tooth grows in to take the place of every baby tooth you lose.",hi:"मिथक! हर टूटे हुए दूध के दांत की जगह एक स्थायी वयस्क दांत उगता है।",mr:"मिथक! तुम्ही गमावलेल्या प्रत्येक दुधाच्या दाताच्या जागी एक कायमचा प्रौढ दात उगवतो."} },
              { text:{en:"Brushing harder always cleans your teeth better.",hi:"ज़्यादा ज़ोर से ब्रश करना हमेशा दांतों को बेहतर साफ़ करता है।",mr:"जोरात घासल्याने नेहमी दात जास्त चांगले स्वच्छ होतात."}, answer:false, explain:{en:"Myth! Brushing too hard can actually hurt your gums — gentle, thorough brushing works best.",hi:"मिथक! बहुत ज़ोर से ब्रश करना असल में मसूड़ों को नुकसान पहुँचा सकता है — धीरे और अच्छी तरह ब्रश करना सबसे अच्छा है।",mr:"मिथक! खूप जोरात घासल्याने खरंतर हिरड्यांना इजा होऊ शकते — हळुवार, नीट घासणं सर्वात चांगलं."} }
            ]}}
          ]},
          { label: "Eyes & Seeing",
            bonusAssignment: {
              title: { en: "Eye Care Ad", hi: "आँखों की देखभाल विज्ञापन", mr: "डोळ्यांची काळजी जाहिरात" },
              prompt: { en: "Create a short poster or ad convincing someone to take screen breaks for their eyes. Take a photo and explain your message!",
                        hi: "किसी को आँखों के लिए स्क्रीन ब्रेक लेने के लिए मनाने वाला एक छोटा पोस्टर या विज्ञापन बनाओ। फोटो लो और अपना संदेश समझाओ!",
                        mr: "डोळ्यांसाठी स्क्रीन ब्रेक घेण्यास कोणाला तरी पटवून देणारं छोटं पोस्टर किंवा जाहिरात तयार करा. फोटो घ्या आणि तुमचा संदेश समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "👁️", title: "Explore your eyes", data: { visual: "👁️", hotspots: [
              { label: "Pupil", fact: "The black dot in your eye lets light in — it gets bigger in the dark!" },
              { label: "Blinking", fact: "You blink about 15-20 times a minute to keep your eyes clean and moist!" },
              { label: "Two eyes", fact: "Having two eyes helps you judge distance and depth!" }
            ]}},
            { engine: "build-match", icon: "👁️", title: "Match eye habit to benefit", data: { noStakes: true, zones: [
              { id: "screen-breaks", label: "Rests your eyes" }, { id: "sunglasses", label: "Protects from sun" }, { id: "checkup", label: "Catches problems early" }
            ], chips: ["screen-breaks","sunglasses","checkup"], facts: {
              "screen-breaks": "Taking screen breaks!", sunglasses: "Wearing sunglasses outdoors!", checkup: "Regular eye checkups!"
            }}},
            { type: "Quiz", icon: "📝", title: "Vision basics", desc: "Quiz on how your eyes work." },
            { type: "Reflect", icon: "💭", title: "Eye care habits", desc: "What's one thing you could do to take better care of your eyes?" },
            { engine: "flip-cards", icon: "🃏", title: "Eye Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising eye fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला आँख का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून डोळ्यांबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How fast do you blink?",hi:"तुम कितनी तेज़ पलक झपकाते हो?",mr:"तुम्ही किती वेगात पापण्या मिचकावता?"}, back:{en:"A single blink takes only about one-tenth of a second — one of the fastest muscle movements in your body! ⚡",hi:"एक पलक झपकने में केवल एक-दसवां सेकंड लगता है — तुम्हारे शरीर की सबसे तेज़ मांसपेशी हरकतों में से एक! ⚡",mr:"एक पापणी मिचकावण्यास फक्त एक-दशांश सेकंद लागतो — तुमच्या शरीरातील सर्वात वेगवान स्नायू हालचालींपैकी एक! ⚡"} },
              { front:{en:"Upside down?",hi:"उल्टा?",mr:"उलटं?"}, back:{en:"Your eyes actually see the world upside-down — your brain flips the image the right way up instantly! 🙃",hi:"तुम्हारी आँखें असल में दुनिया को उल्टा देखती हैं — तुम्हारा दिमाग़ तुरंत तस्वीर को सीधा कर देता है! 🙃",mr:"तुमचे डोळे खरंच जग उलटं बघतात — तुमचा मेंदू लगेच प्रतिमा सरळ करतो! 🙃"} },
              { front:{en:"Colors you can't see?",hi:"रंग जो तुम नहीं देख सकते?",mr:"रंग जे तुम्हाला दिसत नाहीत?"}, back:{en:"Some animals like bees can see colors humans can't even imagine, like ultraviolet light! 🐝",hi:"मधुमक्खियों जैसे कुछ जानवर उन रंगों को देख सकते हैं जिनकी इंसान कल्पना भी नहीं कर सकते, जैसे अल्ट्रावायलेट लाइट! 🐝",mr:"मधमाश्यांसारखे काही प्राणी माणसांना कल्पनाही न करता येणारे रंग बघू शकतात, जसं अल्ट्राव्हायोलेट प्रकाश! 🐝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Eyes or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your eye knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी आँखों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या डोळ्यांच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Sitting too close to a screen permanently damages your eyes.",hi:"स्क्रीन के बहुत पास बैठना तुम्हारी आँखों को स्थायी रूप से नुकसान पहुँचाता है।",mr:"स्क्रीनजवळ खूप जवळ बसल्याने तुमच्या डोळ्यांना कायमचं नुकसान होतं."}, answer:false, explain:{en:"Myth! It can cause temporary eye strain and tiredness, but doesn't permanently damage healthy eyes.",hi:"मिथक! इससे अस्थायी आँखों का तनाव और थकान हो सकती है, लेकिन यह स्वस्थ आँखों को स्थायी नुकसान नहीं पहुँचाता।",mr:"मिथक! यामुळे तात्पुरता डोळ्यांचा ताण आणि थकवा येऊ शकतो, पण निरोगी डोळ्यांना कायमचं नुकसान होत नाही."} },
              { text:{en:"Carrots can help support healthy eyes.",hi:"गाजर स्वस्थ आँखों का समर्थन करने में मदद कर सकते हैं।",mr:"गाजर निरोगी डोळ्यांना आधार देण्यास मदत करू शकतात."}, answer:true, explain:{en:"True! Carrots contain Vitamin A, which genuinely supports healthy vision.",hi:"सच! गाजर में विटामिन ए होता है, जो वास्तव में स्वस्थ दृष्टि का समर्थन करता है।",mr:"खरं! गाजरांमध्ये व्हिटॅमिन ए असतं, जे खरोखर निरोगी दृष्टीला आधार देतं."} },
              { text:{en:"Everyone's eyes are exactly the same shape and size.",hi:"सभी की आँखें बिल्कुल एक ही आकार और साइज़ की होती हैं।",mr:"प्रत्येकाचे डोळे अगदी सारखेच आकार आणि साईझचे असतात."}, answer:false, explain:{en:"Myth! Just like faces, everyone's eyes are slightly different in shape, size, and color.",hi:"मिथक! चेहरों की तरह, हर किसी की आँखें आकार, साइज़ और रंग में थोड़ी अलग होती हैं।",mr:"मिथक! चेहऱ्यांप्रमाणे, प्रत्येकाचे डोळे आकार, साईझ आणि रंगात थोडे वेगळे असतात."} }
            ]}}
          ]},
          { label: "Your Body, One Year Later",
            bonusAssignment: {
              title: { en: "My Year in Review", hi: "मेरा साल का सफ़र", mr: "माझं वर्षभराचं प्रवास" },
              prompt: { en: "Create a page (drawing, collage, or writing) showing your favorite discovery from this whole year of exploring the body. Take a photo and tell us about it!",
                        hi: "इस पूरे साल शरीर की खोज में अपनी पसंदीदा खोज दिखाते हुए एक पेज (चित्र, कोलाज, या लेखन) बनाओ। फोटो लो और हमें इसके बारे में बताओ!",
                        mr: "या संपूर्ण वर्षात शरीराच्या शोधातील तुमचा आवडता शोध दाखवणारं एक पान (चित्र, कोलाज, किंवा लेखन) तयार करा. फोटो घ्या आणि आम्हाला त्याबद्दल सांगा!" }
            },
            tasks: [
            { type: "Reflect", icon: "💭", title: "Look back at the year", desc: "Look back at all 11 months — which body system was your favorite to explore?" },
            { type: "Quiz", icon: "📝", title: "Body systems recap", desc: "A fun recap quiz of everything you discovered this year." },
            { type: "Build", icon: "🎨", title: "Draw your body explorer badge", desc: "Design what your own \"Body Explorer\" badge would look like." },
            { type: "Reflect", icon: "💭", title: "A message to Std 7 you", desc: "Write a message to yourself for next year, about what you'd like to explore next." },
            { engine: "flip-cards", icon: "🃏", title: "Year Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a year of discovery! Flip each card for a fun recap of your journey through the human body.",
                hi: "क्या खोज भरा साल रहा! मानव शरीर की तुम्हारी यात्रा का मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय शोधाचं वर्ष होतं! मानवी शरीरातील तुमच्या प्रवासाचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Where did we start?",hi:"हमने कहाँ से शुरुआत की?",mr:"आपण कुठून सुरुवात केली?"}, back:{en:"You started this year discovering your own beating heart — the very first thing you explored! ❤️",hi:"तुमने इस साल की शुरुआत अपने ही धड़कते दिल की खोज से की — जो सबसे पहली चीज़ थी जिसे तुमने एक्सप्लोर किया! ❤️",mr:"तुम्ही या वर्षाची सुरुवात तुमच्या स्वतःच्या धडधडणाऱ्या हृदयाच्या शोधाने केली — तुम्ही एक्सप्लोर केलेली पहिलीच गोष्ट! ❤️"} },
              { front:{en:"How many systems?",hi:"कितने सिस्टम?",mr:"किती यंत्रणा?"}, back:{en:"You explored 11 different body systems this year — from your heart all the way to your eyes! 🔬",hi:"तुमने इस साल 11 अलग-अलग शरीर के सिस्टम एक्सप्लोर किए — तुम्हारे दिल से लेकर तुम्हारी आँखों तक! 🔬",mr:"तुम्ही या वर्षी 11 वेगवेगळ्या शरीर यंत्रणा एक्सप्लोर केल्या — तुमच्या हृदयापासून ते तुमच्या डोळ्यांपर्यंत! 🔬"} },
              { front:{en:"What's next?",hi:"आगे क्या?",mr:"पुढे काय?"}, back:{en:"Next year, you'll discover even more — like digestion, muscles, and how your whole body works together! 🚀",hi:"अगले साल, तुम और भी बहुत कुछ खोजोगे — जैसे पाचन, मांसपेशियाँ, और तुम्हारा पूरा शरीर कैसे एक साथ काम करता है! 🚀",mr:"पुढच्या वर्षी, तुम्ही आणखी बरंच काही शोधाल — जसं पचन, स्नायू, आणि तुमचं संपूर्ण शरीर एकत्र कसं काम करतं! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One last check-in before the year wraps up! Let's see what stuck from your whole year of exploring.",
                hi: "साल खत्म होने से पहले एक आखिरी जांच! देखते हैं तुम्हारे पूरे साल की खोज से क्या याद रहा।",
                mr: "वर्ष संपण्याआधी शेवटची एक तपासणी! बघूया तुमच्या संपूर्ण वर्षाच्या शोधातून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"Your heart is the only body part you explored this year that never stops working.",hi:"तुम्हारा दिल इस साल एक्सप्लोर किया गया एकमात्र शरीर का हिस्सा है जो कभी काम करना बंद नहीं करता।",mr:"तुमचं हृदय या वर्षी एक्सप्लोर केलेला एकमेव शरीराचा भाग आहे जो कधीच काम करणं थांबवत नाही."}, answer:false, explain:{en:"Myth! Your brain and lungs also never stop working, even while you sleep.",hi:"मिथक! तुम्हारा दिमाग़ और फेफड़े भी कभी काम करना बंद नहीं करते, सोते समय भी नहीं।",mr:"मिथक! तुमचा मेंदू आणि फुफ्फुसंसुद्धा कधीच काम करणं थांबवत नाहीत, झोपेतसुद्धा नाही."} },
              { text:{en:"Every body system you explored this year works completely on its own, with no connection to the others.",hi:"तुमने इस साल एक्सप्लोर किया हर शरीर सिस्टम बिल्कुल अकेले काम करता है, बाकियों से कोई जुड़ाव नहीं।",mr:"तुम्ही या वर्षी एक्सप्लोर केलेली प्रत्येक शरीर यंत्रणा पूर्णपणे स्वतंत्रपणे काम करते, इतरांशी कोणताही संबंध नाही."}, answer:false, explain:{en:"Myth! Your body systems work as a team — like your heart and lungs working together to deliver oxygen everywhere.",hi:"मिथक! तुम्हारे शरीर के सिस्टम एक टीम की तरह काम करते हैं — जैसे तुम्हारा दिल और फेफड़े मिलकर हर जगह ऑक्सीजन पहुँचाते हैं।",mr:"मिथक! तुमच्या शरीराच्या यंत्रणा एका संघासारख्या काम करतात — जसं तुमचं हृदय आणि फुफ्फुसं मिळून सगळीकडे ऑक्सिजन पोहोचवतात."} },
              { text:{en:"Learning about your body is something you can keep doing for the rest of your life.",hi:"अपने शरीर के बारे में सीखना कुछ ऐसा है जो तुम अपनी पूरी ज़िंदगी करते रह सकते हो।",mr:"तुमच्या शरीराबद्दल शिकणं ही अशी गोष्ट आहे जी तुम्ही तुमच्या उर्वरित आयुष्यभर करत राहू शकता."}, answer:true, explain:{en:"True! Even doctors and scientists keep discovering new things about the human body every single year.",hi:"सच! डॉक्टर और वैज्ञानिक भी हर साल मानव शरीर के बारे में नई चीज़ें खोजते रहते हैं।",mr:"खरं! डॉक्टर आणि शास्त्रज्ञसुद्धा दरवर्षी मानवी शरीराबद्दल नवीन गोष्टी शोधत राहतात."} }
            ]}}
          ]}
        ]
      },
      "7": {
        band: "Explorer",
        bandTagline: "Systems start working together — still playful, slightly more connected thinking.",
        months: [
          { label: "Digestion Detective",
            bonusAssignment: {
              title: { en: "Map Your Food's Journey", hi: "अपने खाने की यात्रा का नक्शा बनाओ", mr: "तुमच्या अन्नाच्या प्रवासाचा नकाशा बनवा" },
              prompt: { en: "Draw a simple map/diagram showing where a snack goes after you eat it, from mouth to the end! Take a photo and explain each stop.",
                        hi: "एक साधा नक्शा/चित्र बनाओ जो दिखाए कि खाने के बाद स्नैक कहाँ जाता है, मुँह से आखिर तक! फोटो लो और हर पड़ाव समझाओ।",
                        mr: "एक साधा नकाशा/आकृती काढा जी दाखवेल की खाल्ल्यानंतर स्नॅक कुठे जातो, तोंडापासून शेवटपर्यंत! फोटो घ्या आणि प्रत्येक थांबा समजावून सांगा." }
            },
            tasks: [
            { engine: "tap-discover", icon: "🍽️", title: "Follow your food's journey", data: { visual: "🍽️", hotspots: [
              { label: "Stomach", fact: "Your stomach churns food and mixes it with acid to break it down!" },
              { label: "Small intestine", fact: "This is where most nutrients get absorbed into your blood!" },
              { label: "Large intestine", fact: "This absorbs water and prepares waste to leave your body!" }
            ]}},
            { engine: "build-match", icon: "🍽️", title: "Match food to its journey stop", data: { noStakes: true, zones: [
              { id: "mouth", label: "First stop: chewing" }, { id: "stomach", label: "Next: churning" }, { id: "intestine", label: "Last: absorbing" }
            ], chips: ["mouth","stomach","intestine"], facts: { mouth: "Your mouth starts digestion!", stomach: "Your stomach churns it up!", intestine: "Your intestines absorb the good stuff!" }}},
            { type: "Quiz", icon: "📝", title: "Digestion basics", desc: "Quiz on how your body breaks down food." },
            { type: "Reflect", icon: "💭", title: "Food journey", desc: "What surprised you about where your food actually goes?" },
            { engine: "flip-cards", icon: "🃏", title: "Digestion Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising digestion fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर पाचन का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून पचनाबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How long?",hi:"कितनी देर?",mr:"किती वेळ?"}, back:{en:"Food can take anywhere from 24 to 72 hours to fully travel through your digestive system! ⏱️",hi:"खाने को तुम्हारे पाचन तंत्र से पूरी तरह गुज़रने में 24 से 72 घंटे तक लग सकते हैं! ⏱️",mr:"अन्नाला तुमच्या पचनसंस्थेतून पूर्णपणे जायला 24 ते 72 तास लागू शकतात! ⏱️"} },
              { front:{en:"How long are your intestines?",hi:"तुम्हारी आँतें कितनी लंबी हैं?",mr:"तुमची आतडी किती लांब आहेत?"}, back:{en:"Your small intestine is about 6 meters long — that's longer than a bus! 🚌",hi:"तुम्हारी छोटी आँत लगभग 6 मीटर लंबी है — यह एक बस से भी लंबी है! 🚌",mr:"तुमची छोटी आतडी सुमारे 6 मीटर लांब आहे — ती बसपेक्षाही लांब आहे! 🚌"} },
              { front:{en:"Stomach acid?",hi:"पेट का एसिड?",mr:"पोटातील आम्ल?"}, back:{en:"Your stomach acid is strong enough to dissolve metal — but a special lining protects your stomach! 🧪",hi:"तुम्हारे पेट का एसिड धातु घोलने जितना मज़बूत है — लेकिन एक खास परत तुम्हारे पेट की रक्षा करती है! 🧪",mr:"तुमच्या पोटातील आम्ल धातू विरघळवण्याइतकं मजबूत आहे — पण एक खास आवरण तुमच्या पोटाचं रक्षण करतं! 🧪"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Digestion or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your digestion knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे पाचन के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या पचनाच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Digestion only happens in your stomach.",hi:"पाचन केवल तुम्हारे पेट में होता है।",mr:"पचन फक्त तुमच्या पोटात होतं."}, answer:false, explain:{en:"Myth! Digestion actually starts in your mouth and continues through your intestines too.",hi:"मिथक! पाचन असल में तुम्हारे मुँह से शुरू होता है और तुम्हारी आँतों से भी होकर गुज़रता है।",mr:"मिथक! पचन खरंतर तुमच्या तोंडापासून सुरू होतं आणि तुमच्या आतड्यांमधूनही चालू राहतं."} },
              { text:{en:"Chewing your food well helps digestion.",hi:"खाने को अच्छे से चबाना पाचन में मदद करता है।",mr:"अन्न नीट चावल्याने पचनास मदत होते."}, answer:true, explain:{en:"True! Well-chewed food is easier for your stomach and intestines to break down further.",hi:"सच! अच्छे से चबाया गया खाना तुम्हारे पेट और आँतों के लिए आगे तोड़ना आसान होता है।",mr:"खरं! नीट चावलेलं अन्न तुमच्या पोटासाठी आणि आतड्यांसाठी पुढे तोडणं सोपं असतं."} },
              { text:{en:"Your body absorbs 100% of everything you eat.",hi:"तुम्हारा शरीर जो कुछ भी तुम खाते हो उसका 100% अवशोषित करता है।",mr:"तुम्ही जे काही खाता त्यातील 100% तुमचं शरीर शोषून घेतं."}, answer:false, explain:{en:"Myth! Your body absorbs the nutrients it needs and gets rid of the rest as waste.",hi:"मिथक! तुम्हारा शरीर ज़रूरी पोषक तत्व अवशोषित करता है और बाकी को कचरे के रूप में निकाल देता है।",mr:"मिथक! तुमचं शरीर आवश्यक पोषकद्रव्ये शोषून घेतं आणि बाकीचं टाकाऊ म्हणून बाहेर टाकतं."} }
            ]}}
          ]},
          { label: "Skin: Your Body's Shield",
            bonusAssignment: {
              title: { en: "Skin Care Routine Card", hi: "त्वचा देखभाल रूटीन कार्ड", mr: "त्वचा काळजी दिनक्रम कार्ड" },
              prompt: { en: "Create a simple daily skin-care routine card (like washing, sunscreen, staying hydrated). Take a photo and explain each step!",
                        hi: "एक साधा दैनिक त्वचा-देखभाल रूटीन कार्ड बनाओ (जैसे धोना, सनस्क्रीन, पानी पीना)। फोटो लो और हर कदम समझाओ!",
                        mr: "एक साधं दैनंदिन त्वचा-काळजी दिनक्रम कार्ड तयार करा (जसं धुणं, सनस्क्रीन, पाणी पिणं). फोटो घ्या आणि प्रत्येक पायरी समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧴", title: "Explore your skin", data: { visual: "🧴", hotspots: [
              { label: "Protection", fact: "Your skin is your body's biggest organ and its first line of defense!" },
              { label: "Temperature", fact: "Sweating through your skin helps cool your whole body down!" },
              { label: "Healing", fact: "Skin can heal itself after small cuts and scrapes!" }
            ]}},
            { engine: "build-match", icon: "🧴", title: "Match skin layer to job", data: { noStakes: true, zones: [
              { id: "outer", label: "Keeps germs out" }, { id: "middle", label: "Feels touch & pain" }, { id: "inner", label: "Stores fat for warmth" }
            ], chips: ["outer","middle","inner"], facts: { outer: "Outer layer!", middle: "Middle layer!", inner: "Inner layer!" }}},
            { type: "Quiz", icon: "📝", title: "Skin basics", desc: "Quiz on what your skin does for you." },
            { type: "Reflect", icon: "💭", title: "Skin care", desc: "What's one way you take care of your skin?" },
            { engine: "flip-cards", icon: "🃏", title: "Skin Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising skin fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर त्वचा का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून त्वचेबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How much skin?",hi:"कितनी त्वचा?",mr:"किती त्वचा?"}, back:{en:"If spread out flat, an adult's skin would cover about 2 square meters — bigger than a large door! 🚪",hi:"अगर समतल फैलाई जाए, तो एक वयस्क की त्वचा लगभग 2 वर्ग मीटर तक फैलेगी — एक बड़े दरवाज़े से भी बड़ी! 🚪",mr:"जर सपाट पसरवली, तर प्रौढ व्यक्तीची त्वचा सुमारे 2 चौरस मीटर व्यापेल — मोठ्या दरवाज्यापेक्षाही मोठी! 🚪"} },
              { front:{en:"Always renewing?",hi:"हमेशा नवीनीकरण?",mr:"नेहमी नूतनीकरण?"}, back:{en:"Your skin completely replaces itself with new cells about once a month! 🔄",hi:"तुम्हारी त्वचा लगभग हर महीने पूरी तरह नई कोशिकाओं से बदल जाती है! 🔄",mr:"तुमची त्वचा दर महिन्याला जवळपास पूर्णपणे नवीन पेशींनी बदलली जाते! 🔄"} },
              { front:{en:"Waterproof?",hi:"वाटरप्रूफ?",mr:"वॉटरप्रूफ?"}, back:{en:"Your skin is naturally waterproof, thanks to natural oils that keep water from soaking straight through! 💧",hi:"तुम्हारी त्वचा प्राकृतिक रूप से वाटरप्रूफ है, प्राकृतिक तेलों की वजह से जो पानी को सीधे अंदर जाने से रोकते हैं! 💧",mr:"तुमची त्वचा नैसर्गिकरित्या वॉटरप्रूफ आहे, नैसर्गिक तेलांमुळे जे पाणी थेट आत जाण्यापासून रोखतात! 💧"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Skin or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your skin knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी त्वचा के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या त्वचेच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Skin is not actually a body organ.",hi:"त्वचा असल में शरीर का अंग नहीं है।",mr:"त्वचा खरंतर शरीराचा अवयव नाही."}, answer:false, explain:{en:"Myth! Skin is your body's largest organ, working hard every single day.",hi:"मिथक! त्वचा तुम्हारे शरीर का सबसे बड़ा अंग है, जो हर दिन मेहनत करता है।",mr:"मिथक! त्वचा तुमच्या शरीराचा सर्वात मोठा अवयव आहे, जो दररोज मेहनत करतो."} },
              { text:{en:"Sunscreen helps protect your skin from damage.",hi:"सनस्क्रीन तुम्हारी त्वचा को नुकसान से बचाने में मदद करता है।",mr:"सनस्क्रीन तुमच्या त्वचेला नुकसानीपासून वाचवण्यास मदत करते."}, answer:true, explain:{en:"True! Sunscreen blocks harmful sun rays that can damage your skin over time.",hi:"सच! सनस्क्रीन हानिकारक धूप की किरणों को रोकता है जो समय के साथ तुम्हारी त्वचा को नुकसान पहुँचा सकती हैं।",mr:"खरं! सनस्क्रीन हानिकारक सूर्यकिरणांना रोखते जी कालांतराने तुमच्या त्वचेला नुकसान पोहोचवू शकतात."} },
              { text:{en:"All parts of your skin are exactly the same thickness.",hi:"तुम्हारी त्वचा के सभी हिस्से बिल्कुल एक ही मोटाई के हैं।",mr:"तुमच्या त्वचेचे सर्व भाग अगदी सारख्याच जाडीचे आहेत."}, answer:false, explain:{en:"Myth! Your eyelid skin is very thin, while the skin on your heels is much thicker.",hi:"मिथक! तुम्हारी पलक की त्वचा बहुत पतली है, जबकि तुम्हारी एड़ियों की त्वचा बहुत मोटी है।",mr:"मिथक! तुमच्या पापणीची त्वचा खूप पातळ आहे, तर तुमच्या टाचांची त्वचा खूप जाड आहे."} }
            ]}}
          ]},
          { label: "Muscles at Work",
            bonusAssignment: {
              title: { en: "Muscle Movement Log", hi: "मांसपेशी हलचल लॉग", mr: "स्नायू हालचाल नोंद" },
              prompt: { en: "Try 3 different movements (jump, stretch, lift something light) and note which muscles you think you used. Take a photo and describe what you felt!",
                        hi: "3 अलग-अलग हरकतें करके देखो (कूदना, खिंचाव, कुछ हल्का उठाना) और नोट करो कि तुम्हें लगता है कौन सी मांसपेशियाँ इस्तेमाल हुईं। फोटो लो और बताओ कैसा महसूस हुआ!",
                        mr: "3 वेगवेगळ्या हालचाली करून बघा (उडी मारणे, ताणणे, काहीतरी हलकं उचलणे) आणि कोणते स्नायू वापरले गेले असं वाटतं ते नोंदवा. फोटो घ्या आणि कसं वाटलं ते सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "💪", title: "Explore your muscles", data: { visual: "💪", hotspots: [
              { label: "Moving", fact: "Muscles pull on your bones to help you move!" },
              { label: "Heart muscle", fact: "Your heart is actually a muscle that never gets tired!" },
              { label: "Getting stronger", fact: "Muscles grow stronger the more you use them!" }
            ]}},
            { engine: "build-match", icon: "💪", title: "Match action to muscle group", data: { noStakes: true, zones: [
              { id: "legs", label: "Running" }, { id: "arms", label: "Lifting" }, { id: "core", label: "Sitting up straight" }
            ], chips: ["legs","arms","core"], facts: { legs: "Leg muscles!", arms: "Arm muscles!", core: "Core muscles!" }}},
            { type: "Quiz", icon: "📝", title: "Muscle basics", desc: "Quiz on how muscles help you move." },
            { type: "Reflect", icon: "💭", title: "Your favorite movement", desc: "What's your favorite way to move your body?" },
            { engine: "flip-cards", icon: "🃏", title: "Muscle Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising muscle fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला मांसपेशी का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून स्नायूंबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many muscles?",hi:"कितनी मांसपेशियाँ?",mr:"किती स्नायू?"}, back:{en:"Your body has over 600 muscles working together every single day! 💪",hi:"तुम्हारे शरीर में 600 से ज़्यादा मांसपेशियाँ हर दिन एक साथ काम करती हैं! 💪",mr:"तुमच्या शरीरात 600 हून अधिक स्नायू दररोज एकत्र काम करतात! 💪"} },
              { front:{en:"Hardest working muscle?",hi:"सबसे मेहनती मांसपेशी?",mr:"सर्वात मेहनती स्नायू?"}, back:{en:"Your heart muscle works the hardest of all — beating around 100,000 times every day, without rest! ❤️",hi:"तुम्हारे दिल की मांसपेशी सबसे ज़्यादा मेहनत करती है — बिना आराम के हर दिन लगभग 100,000 बार धड़कती है! ❤️",mr:"तुमच्या हृदयाचा स्नायू सर्वात जास्त मेहनत करतो — विनाआराम दररोज सुमारे 100,000 वेळा धडधडतो! ❤️"} },
              { front:{en:"Muscles need rest too?",hi:"मांसपेशियों को भी आराम चाहिए?",mr:"स्नायूंनाही विश्रांतीची गरज असते?"}, back:{en:"Muscles actually grow stronger while you rest, not just while you exercise — sleep matters! 😴",hi:"मांसपेशियाँ असल में आराम के दौरान मज़बूत होती हैं, सिर्फ़ व्यायाम के दौरान नहीं — नींद मायने रखती है! 😴",mr:"स्नायू खरंतर विश्रांतीदरम्यान मजबूत होतात, फक्त व्यायामादरम्यान नाही — झोप महत्त्वाची आहे! 😴"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Muscle or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your muscle knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी मांसपेशियों के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या स्नायूंच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Muscles can push your bones directly.",hi:"मांसपेशियाँ सीधे तुम्हारी हड्डियों को धकेल सकती हैं।",mr:"स्नायू थेट तुमची हाडं ढकलू शकतात."}, answer:false, explain:{en:"Myth! Muscles can only pull, never push — that's why they work in pairs to move your bones both ways.",hi:"मिथक! मांसपेशियाँ केवल खींच सकती हैं, कभी धकेल नहीं सकतीं — इसीलिए वे जोड़ियों में काम करती हैं ताकि हड्डियों को दोनों तरफ़ हिला सकें।",mr:"मिथक! स्नायू फक्त ओढू शकतात, कधीच ढकलू शकत नाहीत — म्हणूनच ते जोड्यांमध्ये काम करतात जेणेकरून हाडं दोन्ही बाजूंनी हलवता येतील."} },
              { text:{en:"Using your muscles regularly makes them stronger over time.",hi:"अपनी मांसपेशियों का नियमित इस्तेमाल उन्हें समय के साथ मज़बूत बनाता है।",mr:"तुमच्या स्नायूंचा नियमित वापर त्यांना कालांतराने मजबूत बनवतो."}, answer:true, explain:{en:"True! Regular use and exercise genuinely make your muscles stronger and more capable.",hi:"सच! नियमित इस्तेमाल और व्यायाम असल में तुम्हारी मांसपेशियों को मज़बूत और ज़्यादा सक्षम बनाते हैं।",mr:"खरं! नियमित वापर आणि व्यायाम खरंच तुमचे स्नायू मजबूत आणि अधिक सक्षम बनवतात."} },
              { text:{en:"Only your arms and legs have muscles.",hi:"केवल तुम्हारे हाथों और पैरों में मांसपेशियाँ होती हैं।",mr:"फक्त तुमच्या हातांमध्ये आणि पायांमध्येच स्नायू असतात."}, answer:false, explain:{en:"Myth! You have muscles all over — even in places like your face, stomach, and even your eyes!",hi:"मिथक! तुम्हारे पूरे शरीर में मांसपेशियाँ हैं — यहाँ तक कि तुम्हारे चेहरे, पेट, और तुम्हारी आँखों में भी!",mr:"मिथक! तुमच्या संपूर्ण शरीरात स्नायू आहेत — अगदी तुमच्या चेहऱ्यात, पोटात, आणि तुमच्या डोळ्यांतही!"} }
            ]}}
          ]},
          { label: "Blood's Journey",
            bonusAssignment: {
              title: { en: "Draw Blood's Round Trip", hi: "खून की गोल यात्रा बनाओ", mr: "रक्ताचा फेरफटका काढा" },
              prompt: { en: "Draw a simple loop showing blood traveling from your heart, around your body, and back again. Take a photo and explain your drawing!",
                        hi: "एक साधा लूप बनाओ जो दिखाए कि खून तुम्हारे दिल से निकलकर, तुम्हारे शरीर में घूमकर, वापस कैसे आता है। फोटो लो और अपनी तस्वीर समझाओ!",
                        mr: "एक साधं वर्तुळ काढा जे दाखवेल की रक्त तुमच्या हृदयातून निघून, तुमच्या शरीरात फिरून, परत कसं येतं. फोटो घ्या आणि तुमचं चित्र समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🩸", title: "Trace blood's path", data: { visual: "🩸", animation: "bloodflow", hotspots: [
              { label: "Leaving the heart", fact: "Fresh, oxygen-rich blood leaves your heart to travel your whole body!" },
              { label: "Delivering oxygen", fact: "Blood drops off oxygen everywhere your body needs energy!" },
              { label: "Returning home", fact: "Used blood travels back to the heart and lungs to refill with oxygen!" }
            ]}},
            { engine: "build-match", icon: "🩸", title: "Match blood part to job", data: { noStakes: true, zones: [
              { id: "rbc", label: "Carries oxygen" }, { id: "wbc", label: "Fights germs" }, { id: "platelets", label: "Stops bleeding" }
            ], chips: ["rbc","wbc","platelets"], facts: { rbc: "Red blood cells!", wbc: "White blood cells!", platelets: "Platelets!" }}},
            { type: "Quiz", icon: "📝", title: "Blood basics", desc: "Quiz on what blood does for your body." },
            { type: "Reflect", icon: "💭", title: "Blood, amazing", desc: "What's the most surprising thing about blood you learned today?" },
            { engine: "flip-cards", icon: "🃏", title: "Blood Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising blood fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर खून का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून रक्ताबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How much blood?",hi:"कितना खून?",mr:"किती रक्त?"}, back:{en:"An adult's body has about 5 liters of blood — that's like 20 big glasses! 🥤",hi:"एक वयस्क के शरीर में लगभग 5 लीटर खून होता है — यह लगभग 20 बड़े गिलास जितना है! 🥤",mr:"प्रौढ व्यक्तीच्या शरीरात सुमारे 5 लिटर रक्त असतं — हे जवळपास 20 मोठ्या ग्लासांइतकं आहे! 🥤"} },
              { front:{en:"How fast does it travel?",hi:"यह कितनी तेज़ यात्रा करता है?",mr:"ते किती वेगात प्रवास करतं?"}, back:{en:"A single blood cell completes a full loop around your entire body in less than a minute! 🏃",hi:"एक खून की कोशिका तुम्हारे पूरे शरीर का एक चक्कर एक मिनट से भी कम समय में पूरा करती है! 🏃",mr:"एक रक्तपेशी तुमच्या संपूर्ण शरीराभोवती एक फेरी एका मिनिटापेक्षा कमी वेळात पूर्ण करते! 🏃"} },
              { front:{en:"What color inside?",hi:"अंदर कौन सा रंग?",mr:"आत कोणता रंग?"}, back:{en:"Blood is always red inside your body — it just looks darker when it has less oxygen! 🔴",hi:"खून तुम्हारे शरीर के अंदर हमेशा लाल होता है — जब इसमें कम ऑक्सीजन होती है तो यह सिर्फ़ गहरा दिखता है! 🔴",mr:"रक्त तुमच्या शरीरात नेहमी लालच असतं — त्यात कमी ऑक्सिजन असतं तेव्हा फक्त गडद दिसतं! 🔴"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Blood or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your blood knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे खून के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या रक्ताच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Blood is blue when it's inside your body.",hi:"जब खून तुम्हारे शरीर के अंदर होता है तो नीला होता है।",mr:"तुमच्या शरीरात असताना रक्त निळं असतं."}, answer:false, explain:{en:"Myth! Blood is always red — it just appears blue through skin because of how light passes through.",hi:"मिथक! खून हमेशा लाल होता है — यह त्वचा से नीला केवल इसलिए दिखता है क्योंकि रोशनी कैसे गुज़रती है।",mr:"मिथक! रक्त नेहमी लालच असतं — प्रकाश कसा जातो यामुळे ते फक्त त्वचेतून निळं दिसतं."} },
              { text:{en:"Platelets help stop bleeding when you get a cut.",hi:"कट लगने पर प्लेटलेट्स खून बहना रोकने में मदद करते हैं।",mr:"कापल्यावर प्लेटलेट्स रक्तस्राव थांबवण्यास मदत करतात."}, answer:true, explain:{en:"True! Platelets rush to a cut and help form a clot to stop the bleeding.",hi:"सच! प्लेटलेट्स कट पर दौड़ते हैं और खून बहना रोकने के लिए थक्का बनाने में मदद करते हैं।",mr:"खरं! प्लेटलेट्स कापलेल्या जागी धावतात आणि रक्तस्राव थांबवण्यासाठी गुठळी तयार करण्यास मदत करतात."} },
              { text:{en:"Everyone in the world has the exact same blood type.",hi:"दुनिया में सभी का बिल्कुल एक ही खून का प्रकार है।",mr:"जगातील प्रत्येकाचा रक्तगट अगदी सारखाच असतो."}, answer:false, explain:{en:"Myth! There are several different blood types (like A, B, AB, O), and knowing yours matters for things like donations.",hi:"मिथक! कई अलग-अलग खून के प्रकार होते हैं (जैसे A, B, AB, O), और अपना प्रकार जानना दान जैसी चीज़ों के लिए ज़रूरी है।",mr:"मिथक! अनेक वेगवेगळे रक्तगट असतात (जसं A, B, AB, O), आणि तुमचा गट माहीत असणं दानासारख्या गोष्टींसाठी महत्त्वाचं आहे."} }
            ]}}
          ]},
          { label: "Sleep & the Repairing Body",
            bonusAssignment: {
              title: { en: "Design a Bedtime Routine", hi: "सोने की दिनचर्या डिज़ाइन करो", mr: "झोपण्याचा दिनक्रम डिझाइन करा" },
              prompt: { en: "Design a simple, healthy bedtime routine card (like dimming lights, no screens, reading). Take a photo and explain why each step helps!",
                        hi: "एक साधा, स्वस्थ सोने की दिनचर्या कार्ड डिज़ाइन करो (जैसे रोशनी कम करना, कोई स्क्रीन नहीं, पढ़ना)। फोटो लो और बताओ हर कदम कैसे मदद करता है!",
                        mr: "एक साधं, निरोगी झोपण्याचं दिनक्रम कार्ड डिझाइन करा (जसं दिवे मंद करणं, स्क्रीन नाही, वाचन). फोटो घ्या आणि प्रत्येक पायरी कशी मदत करते ते सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "😴", title: "Explore sleep", data: { visual: "😴", hotspots: [
              { label: "Growing", fact: "Your body releases growth hormones mostly while you sleep!" },
              { label: "Memory", fact: "Sleep helps your brain file away everything you learned that day!" },
              { label: "Repair", fact: "Your body repairs muscles and cells while you rest!" }
            ]}},
            { engine: "build-match", icon: "😴", title: "Match habit to sleep benefit", data: { noStakes: true, zones: [
              { id: "routine", label: "Falls asleep faster" }, { id: "noscreen", label: "Sleeps more deeply" }, { id: "consistent", label: "Wakes up refreshed" }
            ], chips: ["routine","noscreen","consistent"], facts: { routine: "A bedtime routine!", noscreen: "No screens before bed!", consistent: "A consistent sleep time!" }}},
            { type: "Quiz", icon: "📝", title: "Sleep basics", desc: "Quiz on why sleep matters for your body." },
            { type: "Reflect", icon: "💭", title: "Your sleep routine", desc: "What does your bedtime routine look like?" },
            { engine: "flip-cards", icon: "🃏", title: "Sleep Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising sleep fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर नींद का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून झोपेबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How much sleep?",hi:"कितनी नींद?",mr:"किती झोप?"}, back:{en:"Kids your age need about 9-11 hours of sleep every night for their body and brain to grow well! 🌙",hi:"तुम्हारी उम्र के बच्चों को हर रात लगभग 9-11 घंटे की नींद चाहिए ताकि शरीर और दिमाग़ अच्छे से बढ़ें! 🌙",mr:"तुमच्या वयाच्या मुलांना दररोज रात्री सुमारे 9-11 तास झोप हवी असते जेणेकरून शरीर आणि मेंदू नीट वाढेल! 🌙"} },
              { front:{en:"Dreaming?",hi:"सपने देखना?",mr:"स्वप्न बघणं?"}, back:{en:"Everyone dreams every night, even if you don't remember it — dreaming happens in a special stage of sleep! 💭",hi:"हर कोई हर रात सपने देखता है, भले ही तुम्हें याद न रहे — सपने देखना नींद के एक खास चरण में होता है! 💭",mr:"प्रत्येकजण दररोज रात्री स्वप्न बघतो, जरी तुम्हाला ते आठवत नसलं तरी — स्वप्न बघणं झोपेच्या एका खास टप्प्यात होतं! 💭"} },
              { front:{en:"Sleep and sickness?",hi:"नींद और बीमारी?",mr:"झोप आणि आजार?"}, back:{en:"Good sleep actually helps your immune system fight off germs better! 🛡️",hi:"अच्छी नींद असल में तुम्हारे इम्यून सिस्टम को कीटाणुओं से बेहतर लड़ने में मदद करती है! 🛡️",mr:"चांगली झोप खरंतर तुमच्या रोगप्रतिकारक शक्तीला जंतूंशी चांगलं लढण्यास मदत करते! 🛡️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Sleep or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your sleep knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी नींद के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या झोपेच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Watching a screen right before bed helps you fall asleep faster.",hi:"सोने से ठीक पहले स्क्रीन देखना तुम्हें जल्दी सोने में मदद करता है।",mr:"झोपण्याआधी स्क्रीन बघितल्याने तुम्हाला लवकर झोप येते."}, answer:false, explain:{en:"Myth! Screen light can actually trick your brain into staying awake longer, making it harder to fall asleep.",hi:"मिथक! स्क्रीन की रोशनी असल में तुम्हारे दिमाग़ को ज़्यादा देर जागते रहने के लिए धोखा दे सकती है, जिससे सोना मुश्किल हो जाता है।",mr:"मिथक! स्क्रीनचा प्रकाश खरंतर तुमच्या मेंदूला जास्त वेळ जागं राहण्यास फसवू शकतो, ज्यामुळे झोप येणं कठीण होतं."} },
              { text:{en:"Your body actually repairs itself while you sleep.",hi:"तुम्हारा शरीर असल में सोते समय खुद की मरम्मत करता है।",mr:"तुमचं शरीर खरंच झोपेत स्वतःची दुरुस्ती करतं."}, answer:true, explain:{en:"True! Sleep is when your body does a lot of its repair work on muscles, cells, and more.",hi:"सच! नींद वो समय है जब तुम्हारा शरीर मांसपेशियों, कोशिकाओं और भी बहुत कुछ पर अपना ज़्यादातर मरम्मत का काम करता है।",mr:"खरं! झोप ही अशी वेळ आहे जेव्हा तुमचं शरीर स्नायू, पेशी आणि इतर बऱ्याच गोष्टींवर बरंचसं दुरुस्तीचं काम करतं."} },
              { text:{en:"Sleeping the exact same amount every night doesn't matter.",hi:"हर रात बिल्कुल एक ही मात्रा में सोना मायने नहीं रखता।",mr:"दररोज रात्री अगदी सारखीच झोप घेणं महत्त्वाचं नाही."}, answer:false, explain:{en:"Myth! A consistent sleep schedule genuinely helps your body feel more rested and alert.",hi:"मिथक! एक नियमित नींद का शेड्यूल असल में तुम्हारे शरीर को ज़्यादा आराम और सतर्क महसूस कराने में मदद करता है।",mr:"मिथक! नियमित झोपेचं वेळापत्रक खरंच तुमच्या शरीराला जास्त विश्रांती आणि सतर्क वाटण्यास मदत करतं."} }
            ]}}
          ]},
          { label: "Kidneys: The Body's Filter",
            bonusAssignment: {
              title: { en: "Water Tracker Challenge", hi: "पानी ट्रैकर चुनौती", mr: "पाणी ट्रॅकर आव्हान" },
              prompt: { en: "Track how many glasses of water you drink in one day using a simple chart. Take a photo and share what you noticed!",
                        hi: "एक साधे चार्ट का इस्तेमाल करके ट्रैक करो कि तुम एक दिन में कितने गिलास पानी पीते हो। फोटो लो और बताओ तुमने क्या देखा!",
                        mr: "एका साध्या तक्त्याचा वापर करून एका दिवसात तुम्ही किती ग्लास पाणी पिता ते नोंदवा. फोटो घ्या आणि तुम्हाला काय लक्षात आलं ते सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🫘", title: "Explore your kidneys", data: { visual: "🫘", hotspots: [
              { label: "Filtering", fact: "Your kidneys filter your entire blood supply many times a day!" },
              { label: "Waste removal", fact: "Kidneys turn filtered waste into urine to leave your body!" },
              { label: "Balance", fact: "Kidneys help keep the right amount of water in your body!" }
            ]}},
            { engine: "build-match", icon: "🫘", title: "Match habit to kidney health", data: { noStakes: true, zones: [
              { id: "water", label: "Helps kidneys filter well" }, { id: "checkup", label: "Catches problems early" }
            ], chips: ["water","checkup"], facts: { water: "Drinking enough water!", checkup: "Regular checkups!" }}},
            { type: "Quiz", icon: "📝", title: "Kidney basics", desc: "Quiz on what your kidneys do." },
            { type: "Reflect", icon: "💭", title: "Staying hydrated", desc: "How much water do you think you drink in a day?" },
            { engine: "flip-cards", icon: "🃏", title: "Kidney Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising kidney fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर एक हैरान करने वाला किडनी का तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून किडनीबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How much do they filter?",hi:"वे कितना फ़िल्टर करती हैं?",mr:"त्या किती फिल्टर करतात?"}, back:{en:"Your kidneys filter about 180 liters of blood every single day — that's like a full bathtub! 🛁",hi:"तुम्हारी किडनी हर दिन लगभग 180 लीटर खून फ़िल्टर करती हैं — यह एक पूरे बाथटब जितना है! 🛁",mr:"तुमची किडनी दररोज सुमारे 180 लिटर रक्त फिल्टर करते — हे एका पूर्ण बाथटबइतकं आहे! 🛁"} },
              { front:{en:"How many kidneys?",hi:"कितनी किडनी?",mr:"किती किडनी?"}, back:{en:"You have two kidneys, but people can live a full, healthy life with just one! 🫘",hi:"तुम्हारी दो किडनी होती हैं, लेकिन लोग सिर्फ़ एक के साथ भी पूरा, स्वस्थ जीवन जी सकते हैं! 🫘",mr:"तुम्हाला दोन किडनी असतात, पण लोक फक्त एकीसह देखील पूर्ण, निरोगी आयुष्य जगू शकतात! 🫘"} },
              { front:{en:"Shaped like what?",hi:"किस आकार की?",mr:"कोणत्या आकाराची?"}, back:{en:"Kidneys are shaped exactly like the beans named after them! 🫘",hi:"किडनी बिल्कुल उन बीन्स के आकार की होती हैं जिनका नाम उन्हीं पर रखा गया है! 🫘",mr:"किडनी अगदी त्यांच्या नावावरून ठेवलेल्या बीन्ससारख्याच आकाराच्या असतात! 🫘"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Kidney or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your kidney knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारी किडनी के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या किडनीच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Drinking enough water helps your kidneys work well.",hi:"पर्याप्त पानी पीना तुम्हारी किडनी को अच्छे से काम करने में मदद करता है।",mr:"पुरेसं पाणी पिणं तुमच्या किडनीला नीट काम करण्यास मदत करतं."}, answer:true, explain:{en:"True! Water helps your kidneys flush out waste smoothly and efficiently.",hi:"सच! पानी तुम्हारी किडनी को कचरा आसानी से और प्रभावी ढंग से बाहर निकालने में मदद करता है।",mr:"खरं! पाणी तुमच्या किडनीला टाकाऊ पदार्थ सहज आणि कार्यक्षमतेने बाहेर काढण्यास मदत करतं."} },
              { text:{en:"Kidneys only remove water from your body, nothing else.",hi:"किडनी केवल तुम्हारे शरीर से पानी निकालती है, और कुछ नहीं।",mr:"किडनी फक्त तुमच्या शरीरातून पाणी काढते, दुसरं काहीच नाही."}, answer:false, explain:{en:"Myth! Kidneys also remove waste products and help balance important minerals in your blood.",hi:"मिथक! किडनी कचरे के उत्पाद भी निकालती हैं और तुम्हारे खून में ज़रूरी खनिजों को संतुलित करने में मदद करती हैं।",mr:"मिथक! किडनी टाकाऊ पदार्थही काढते आणि तुमच्या रक्तातील महत्त्वाची खनिजं संतुलित करण्यास मदत करते."} },
              { text:{en:"You can't live without both kidneys working.",hi:"दोनों किडनी काम किए बिना तुम जीवित नहीं रह सकते।",mr:"दोन्ही किडनी काम केल्याशिवाय तुम्ही जगू शकत नाही."}, answer:false, explain:{en:"Myth! Many people live full, healthy lives with just one working kidney.",hi:"मिथक! कई लोग सिर्फ़ एक काम करने वाली किडनी के साथ पूरा, स्वस्थ जीवन जीते हैं।",mr:"मिथक! अनेक लोक फक्त एक काम करणाऱ्या किडनीसह पूर्ण, निरोगी आयुष्य जगतात."} }
            ]}}
          ]},
          { label: "Meet the Hospital Team",
            bonusAssignment: {
              title: { en: "Interview a Helper", hi: "एक मददगार का इंटरव्यू लो", mr: "एका मदतनीसाची मुलाखत घ्या" },
              prompt: { en: "Ask a family member or friend about any time they visited a hospital — who helped them? Write 2-3 sentences about what you learned!",
                        hi: "परिवार के किसी सदस्य या दोस्त से पूछो कि जब वे अस्पताल गए थे — किसने उनकी मदद की? तुमने जो सीखा उसके बारे में 2-3 वाक्य लिखो!",
                        mr: "कुटुंबातील एखाद्याला किंवा मित्राला विचारा की ते रुग्णालयात गेले तेव्हा — कोणी त्यांना मदत केली? तुम्ही काय शिकलात याबद्दल 2-3 वाक्यं लिहा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🏥", title: "Meet the hospital team", data: { visual: "🏥", hotspots: [
              { label: "Nurse", fact: "Nurses spend the most time directly caring for patients!" },
              { label: "Surgeon", fact: "Surgeons perform operations to fix problems inside the body!" },
              { label: "Radiologist", fact: "Radiologists read X-rays and scans to find what's wrong!" }
            ]}},
            { engine: "build-match", icon: "🏥", title: "Match role to task", data: { noStakes: true, zones: [
              { id: "nurse", label: "Checks on patients often" }, { id: "surgeon", label: "Performs operations" }, { id: "radiologist", label: "Reads scans" }
            ], chips: ["nurse","surgeon","radiologist"], facts: { nurse: "Nurses!", surgeon: "Surgeons!", radiologist: "Radiologists!" }}},
            { type: "Quiz", icon: "📝", title: "Hospital roles", desc: "Quiz on who does what in a hospital." },
            { type: "Reflect", icon: "💭", title: "A role that interests you", desc: "Which hospital role sounds most interesting to you and why?" },
            { engine: "flip-cards", icon: "🃏", title: "Hospital Team Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising fact about hospital teams!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर अस्पताल की टीम के बारे में एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून रुग्णालयातील टीमबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many roles?",hi:"कितनी भूमिकाएँ?",mr:"किती भूमिका?"}, back:{en:"A hospital has over 50 different types of jobs, from doctors to cleaners to food staff — everyone matters! 🏥",hi:"एक अस्पताल में 50 से ज़्यादा अलग-अलग तरह की नौकरियाँ होती हैं, डॉक्टरों से लेकर सफ़ाई कर्मचारियों और खाना बनाने वाले स्टाफ़ तक — हर कोई मायने रखता है! 🏥",mr:"रुग्णालयात 50 हून अधिक वेगवेगळ्या प्रकारच्या नोकऱ्या असतात, डॉक्टरांपासून ते सफाई कर्मचारी आणि जेवण बनवणाऱ्या कर्मचाऱ्यांपर्यंत — प्रत्येकजण महत्त्वाचा आहे! 🏥"} },
              { front:{en:"Team work?",hi:"टीम वर्क?",mr:"संघकार्य?"}, back:{en:"A single surgery can involve a whole team — surgeons, nurses, and anesthesiologists all working together! 🤝",hi:"एक सर्जरी में पूरी टीम शामिल हो सकती है — सर्जन, नर्स और एनेस्थीसियोलॉजिस्ट सब मिलकर काम करते हैं! 🤝",mr:"एका शस्त्रक्रियेत संपूर्ण टीम सामील असू शकते — सर्जन, नर्स आणि भूलतज्ज्ञ सर्व एकत्र काम करतात! 🤝"} },
              { front:{en:"24/7 care?",hi:"24/7 देखभाल?",mr:"24/7 काळजी?"}, back:{en:"Hospitals never close — someone from the team is always awake and ready to help, day or night! 🌙",hi:"अस्पताल कभी बंद नहीं होते — टीम का कोई न कोई हमेशा जागता है और मदद के लिए तैयार रहता है, दिन हो या रात! 🌙",mr:"रुग्णालयं कधीच बंद होत नाहीत — टीममधील कोणीतरी नेहमी जागं असतं आणि मदतीसाठी तयार असतं, दिवस असो वा रात्र! 🌙"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Hospital Team or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your hospital team knowledge! Decide if each statement is true or a myth.",
                hi: "चलो अस्पताल की टीम के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रुग्णालय टीमबद्दलच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Only doctors work in a hospital.",hi:"अस्पताल में केवल डॉक्टर काम करते हैं।",mr:"रुग्णालयात फक्त डॉक्टरच काम करतात."}, answer:false, explain:{en:"Myth! Nurses, technicians, cleaners, and many other roles all work together to run a hospital.",hi:"मिथक! नर्स, तकनीशियन, सफ़ाई कर्मचारी, और कई और भूमिकाएँ मिलकर अस्पताल चलाती हैं।",mr:"मिथक! नर्स, तंत्रज्ञ, सफाई कर्मचारी, आणि इतर अनेक भूमिका मिळून रुग्णालय चालवतात."} },
              { text:{en:"Radiologists help doctors see inside the body without surgery.",hi:"रेडियोलॉजिस्ट डॉक्टरों को बिना सर्जरी के शरीर के अंदर देखने में मदद करते हैं।",mr:"रेडिओलॉजिस्ट डॉक्टरांना शस्त्रक्रियेशिवाय शरीराच्या आत बघण्यास मदत करतात."}, answer:true, explain:{en:"True! Radiologists read X-rays and scans, which show what's happening inside without cutting.",hi:"सच! रेडियोलॉजिस्ट एक्स-रे और स्कैन पढ़ते हैं, जो बिना काटे अंदर क्या हो रहा है दिखाते हैं।",mr:"खरं! रेडिओलॉजिस्ट एक्स-रे आणि स्कॅन वाचतात, जे न कापता आत काय होत आहे ते दाखवतात."} },
              { text:{en:"Nurses only assist doctors and don't make any decisions themselves.",hi:"नर्सें केवल डॉक्टरों की सहायता करती हैं और खुद कोई फ़ैसला नहीं लेतीं।",mr:"नर्स फक्त डॉक्टरांना मदत करतात आणि स्वतः कोणतेही निर्णय घेत नाहीत."}, answer:false, explain:{en:"Myth! Nurses make many important care decisions themselves and are highly trained professionals.",hi:"मिथक! नर्सें खुद कई ज़रूरी देखभाल के फ़ैसले लेती हैं और अत्यधिक प्रशिक्षित पेशेवर होती हैं।",mr:"मिथक! नर्स स्वतः अनेक महत्त्वाचे काळजीचे निर्णय घेतात आणि अत्यंत प्रशिक्षित व्यावसायिक असतात."} }
            ]}}
          ]},
          { label: "First Aid Basics",
            bonusAssignment: {
              title: { en: "Build a Mini First-Aid Kit List", hi: "एक मिनी फर्स्ट-एड किट सूची बनाओ", mr: "मिनी फर्स्ट-एड किट यादी बनवा" },
              prompt: { en: "With an adult, list 5 things that should be in a home first-aid kit. Take a photo of your list or the actual kit!",
                        hi: "किसी बड़े के साथ, 5 चीज़ों की सूची बनाओ जो घर की फर्स्ट-एड किट में होनी चाहिए। अपनी सूची या असली किट की फोटो लो!",
                        mr: "मोठ्यांसोबत, घरातील फर्स्ट-एड किटमध्ये असाव्यात अशा 5 गोष्टींची यादी करा. तुमच्या यादीचा किंवा प्रत्यक्ष किटचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "build-match", icon: "🩹", title: "Match situation to safe first step", data: { noStakes: true, zones: [
              { id: "cut", label: "Small cut" }, { id: "burn", label: "Small burn" }, { id: "bigemergency", label: "Something serious" }
            ], chips: ["cut","burn","bigemergency"], facts: {
              cut: "Clean it and cover with a bandage!", burn: "Cool water and tell an adult!", bigemergency: "Get an adult immediately, or call emergency services!"
            }}},
            { engine: "tap-discover", icon: "🩹", title: "First aid basics", data: { visual: "🩹", hotspots: [
              { label: "Stay calm", fact: "Staying calm helps you think clearly in an emergency!" },
              { label: "Tell an adult", fact: "Always get a trusted adult's help for anything serious!" },
              { label: "Basic supplies", fact: "Bandages and clean water can help with small injuries!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "First aid basics", desc: "Quiz on simple, safe first steps." },
            { type: "Reflect", icon: "💭", title: "Being prepared", desc: "Why do you think it helps to know basic first aid?" },
            { engine: "flip-cards", icon: "🃏", title: "First Aid Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising first-aid fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर फर्स्ट-एड का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून फर्स्ट-एडबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How old is first aid?",hi:"फर्स्ट-एड कितना पुराना है?",mr:"फर्स्ट-एड किती जुनं आहे?"}, back:{en:"People have practiced basic first aid for thousands of years, even before modern hospitals existed! 📜",hi:"लोग हज़ारों सालों से बुनियादी फर्स्ट-एड का अभ्यास करते आ रहे हैं, यहाँ तक कि आधुनिक अस्पतालों के अस्तित्व में आने से पहले भी! 📜",mr:"आधुनिक रुग्णालयं अस्तित्वात येण्याआधीही, लोक हजारो वर्षांपासून मूलभूत फर्स्ट-एडचा सराव करत आले आहेत! 📜"} },
              { front:{en:"Cooling a burn?",hi:"जलन को ठंडा करना?",mr:"भाजलेलं थंड करणं?"}, back:{en:"Cool (not ice-cold) running water is one of the best first steps for a small burn! 💧",hi:"ठंडा (बर्फ़ जितना ठंडा नहीं) बहता पानी छोटी जलन के लिए सबसे अच्छे पहले कदमों में से एक है! 💧",mr:"थंड (बर्फासारखं थंड नाही) वाहतं पाणी लहान भाजण्यासाठी सर्वोत्तम पहिल्या पायऱ्यांपैकी एक आहे! 💧"} },
              { front:{en:"Staying calm helps?",hi:"शांत रहना मदद करता है?",mr:"शांत राहणं मदत करतं?"}, back:{en:"Staying calm in an emergency actually helps you think more clearly and act faster to help! 🧘",hi:"आपातकाल में शांत रहना असल में तुम्हें ज़्यादा स्पष्ट सोचने और मदद के लिए तेज़ी से काम करने में मदद करता है! 🧘",mr:"आणीबाणीत शांत राहणं खरंच तुम्हाला अधिक स्पष्टपणे विचार करण्यास आणि मदतीसाठी वेगाने कृती करण्यास मदत करतं! 🧘"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "First Aid or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your first-aid knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे फर्स्ट-एड के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या फर्स्ट-एडच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You should put butter on a burn to help it heal.",hi:"जलने पर मक्खन लगाना उसे ठीक होने में मदद करता है।",mr:"भाजल्यावर लोणी लावल्याने ते बरं होण्यास मदत होते."}, answer:false, explain:{en:"Myth! Butter can actually trap heat and make a burn worse — cool water is the safer first step.",hi:"मिथक! मक्खन असल में गर्मी को फँसा सकता है और जलन को और बिगाड़ सकता है — ठंडा पानी ज़्यादा सुरक्षित पहला कदम है।",mr:"मिथक! लोणी खरंतर उष्णता अडकवू शकतं आणि भाजण्याची जखम अधिक वाईट करू शकतं — थंड पाणी अधिक सुरक्षित पहिली पायरी आहे."} },
              { text:{en:"Cleaning a small cut helps prevent infection.",hi:"एक छोटे कट को साफ़ करना संक्रमण को रोकने में मदद करता है।",mr:"लहान कापलेलं स्वच्छ केल्याने संसर्ग टाळण्यास मदत होते."}, answer:true, explain:{en:"True! Cleaning removes germs that could otherwise cause an infection.",hi:"सच! सफ़ाई करने से वो कीटाणु निकल जाते हैं जो अन्यथा संक्रमण पैदा कर सकते हैं।",mr:"खरं! स्वच्छतेमुळे ते जंतू निघून जातात जे अन्यथा संसर्ग होऊ शकतात."} },
              { text:{en:"You should always try to handle every injury completely on your own.",hi:"तुम्हें हमेशा हर चोट को पूरी तरह खुद ही संभालने की कोशिश करनी चाहिए।",mr:"तुम्ही नेहमी प्रत्येक दुखापत पूर्णपणे स्वतःच हाताळण्याचा प्रयत्न करावा."}, answer:false, explain:{en:"Myth! For anything serious, the right first step is always telling a trusted adult right away.",hi:"मिथक! किसी भी गंभीर चीज़ के लिए, सही पहला कदम हमेशा तुरंत किसी भरोसेमंद बड़े को बताना है।",mr:"मिथक! कोणत्याही गंभीर गोष्टीसाठी, योग्य पहिली पायरी नेहमी लगेच विश्वासू मोठ्याला सांगणं हीच असते."} }
            ]}}
          ]},
          { label: "Nutrition Detective",
            bonusAssignment: {
              title: { en: "Rainbow Plate Challenge", hi: "इंद्रधनुष प्लेट चुनौती", mr: "इंद्रधनुष्य ताट आव्हान" },
              prompt: { en: "Make or draw a meal with at least 3 different colored foods on the plate. Take a photo and explain why colorful eating is healthy!",
                        hi: "प्लेट में कम से कम 3 अलग-अलग रंगों का खाना बनाओ या बनाओ। फोटो लो और बताओ रंग-बिरंगा खाना क्यों स्वस्थ है!",
                        mr: "ताटात किमान 3 वेगवेगळ्या रंगांचे पदार्थ बनवा किंवा काढा. फोटो घ्या आणि रंगीबेरंगी खाणं का निरोगी आहे ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🥗", title: "Match food to food group", data: { noStakes: true, zones: [
              { id: "fruit", label: "Vitamins" }, { id: "protein", label: "Muscle building" }, { id: "grains", label: "Energy" }
            ], chips: ["fruit","protein","grains"], facts: { fruit: "Fruits & vegetables!", protein: "Proteins!", grains: "Grains!" }}},
            { engine: "tap-discover", icon: "🥗", title: "Explore nutrition", data: { visual: "🥗", hotspots: [
              { label: "Energy", fact: "Food gives your body the energy to think, move, and grow!" },
              { label: "Variety", fact: "Eating different colors of food gives you different nutrients!" },
              { label: "Water", fact: "Water is just as important as food for your body!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Nutrition basics", desc: "Quiz on balanced eating." },
            { type: "Reflect", icon: "💭", title: "Your favorite healthy food", desc: "What's a healthy food you actually enjoy eating?" },
            { engine: "flip-cards", icon: "🃏", title: "Nutrition Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising nutrition fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर पोषण का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून पोषणाबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"Colorful plates?",hi:"रंग-बिरंगी प्लेटें?",mr:"रंगीबेरंगी ताटं?"}, back:{en:"Different colored fruits and veggies each give your body different helpful nutrients! 🌈",hi:"अलग-अलग रंग के फल और सब्ज़ियाँ तुम्हारे शरीर को अलग-अलग मददगार पोषक तत्व देते हैं! 🌈",mr:"वेगवेगळ्या रंगांची फळं आणि भाज्या तुमच्या शरीराला वेगवेगळी उपयुक्त पोषकद्रव्यं देतात! 🌈"} },
              { front:{en:"Brain food?",hi:"दिमाग़ का खाना?",mr:"मेंदूचं अन्न?"}, back:{en:"Foods like nuts and fish contain nutrients that genuinely help your brain work and focus better! 🧠",hi:"मेवे और मछली जैसे खाने में ऐसे पोषक तत्व होते हैं जो असल में तुम्हारे दिमाग़ को बेहतर काम करने और ध्यान देने में मदद करते हैं! 🧠",mr:"सुकामेवा आणि माशांसारख्या पदार्थांमध्ये पोषकद्रव्यं असतात जी खरंच तुमच्या मेंदूला चांगलं काम करण्यास आणि लक्ष केंद्रित करण्यास मदत करतात! 🧠"} },
              { front:{en:"Water in food?",hi:"खाने में पानी?",mr:"अन्नातील पाणी?"}, back:{en:"Some foods like watermelon and cucumber are over 90% water — a tasty way to stay hydrated! 🍉",hi:"तरबूज़ और खीरा जैसे कुछ खाने 90% से ज़्यादा पानी होते हैं — हाइड्रेटेड रहने का एक स्वादिष्ट तरीका! 🍉",mr:"टरबूज आणि काकडीसारख्या काही पदार्थांमध्ये 90% पेक्षा जास्त पाणी असतं — हायड्रेटेड राहण्याचा एक चविष्ट मार्ग! 🍉"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Nutrition or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your nutrition knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे पोषण के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या पोषणाच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Eating a variety of foods is healthier than eating just one type all the time.",hi:"तरह-तरह का खाना खाना हमेशा एक ही तरह का खाना खाने से ज़्यादा स्वस्थ है।",mr:"वेगवेगळे पदार्थ खाणं नेहमी एकाच प्रकारचं खाण्यापेक्षा जास्त निरोगी आहे."}, answer:true, explain:{en:"True! Different foods give your body different nutrients it needs to work well.",hi:"सच! अलग-अलग खाना तुम्हारे शरीर को अलग-अलग पोषक तत्व देता है जो अच्छे से काम करने के लिए ज़रूरी हैं।",mr:"खरं! वेगवेगळे पदार्थ तुमच्या शरीराला चांगलं काम करण्यासाठी लागणारी वेगवेगळी पोषकद्रव्यं देतात."} },
              { text:{en:"Skipping meals gives your body more energy.",hi:"खाना छोड़ना तुम्हारे शरीर को ज़्यादा ऊर्जा देता है।",mr:"जेवण वगळल्याने तुमच्या शरीराला जास्त ऊर्जा मिळते."}, answer:false, explain:{en:"Myth! Skipping meals can actually leave you with less energy — your body needs regular fuel.",hi:"मिथक! खाना छोड़ना असल में तुम्हें कम ऊर्जा दे सकता है — तुम्हारे शरीर को नियमित ईंधन चाहिए।",mr:"मिथक! जेवण वगळल्याने खरंतर तुम्हाला कमी ऊर्जा मिळू शकते — तुमच्या शरीराला नियमित इंधन लागतं."} },
              { text:{en:"All fats are automatically bad for your body.",hi:"सभी वसा तुम्हारे शरीर के लिए स्वतः ही बुरे हैं।",mr:"सर्व चरबी तुमच्या शरीरासाठी आपोआप वाईट असतात."}, answer:false, explain:{en:"Myth! Some healthy fats, like those in nuts and fish, are actually good for your body.",hi:"मिथक! मेवे और मछली जैसे कुछ स्वस्थ वसा असल में तुम्हारे शरीर के लिए अच्छे होते हैं।",mr:"मिथक! सुकामेवा आणि माशांसारख्या काही निरोगी चरबी खरंतर तुमच्या शरीरासाठी चांगल्या असतात."} }
            ]}}
          ]},
          { label: "Vaccines & Prevention",
            bonusAssignment: {
              title: { en: "Prevention Poster", hi: "बचाव पोस्टर", mr: "प्रतिबंध पोस्टर" },
              prompt: { en: "Design a poster about one way to prevent illness (vaccines, handwashing, rest). Take a photo and explain your message!",
                        hi: "बीमारी को रोकने के एक तरीके के बारे में एक पोस्टर डिज़ाइन करो (वैक्सीन, हाथ धोना, आराम)। फोटो लो और अपना संदेश समझाओ!",
                        mr: "आजार टाळण्याच्या एका मार्गाबद्दल पोस्टर डिझाइन करा (लस, हात धुणं, विश्रांती). फोटो घ्या आणि तुमचा संदेश समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "💉", title: "Explore vaccines", data: { visual: "💉", animation: "shield", hotspots: [
              { label: "Practice run", fact: "Vaccines teach your immune system to recognize germs before you ever get sick!" },
              { label: "Community protection", fact: "When many people are vaccinated, it helps protect everyone!" },
              { label: "Prevention", fact: "Preventing illness is often easier than treating it!" }
            ]}},
            { engine: "build-match", icon: "💉", title: "Match prevention habit to benefit", data: { noStakes: true, zones: [
              { id: "vaccine", label: "Prepares your immune system" }, { id: "wash", label: "Removes germs" }, { id: "rest", label: "Keeps you strong" }
            ], chips: ["vaccine","wash","rest"], facts: { vaccine: "Vaccines!", wash: "Handwashing!", rest: "Rest!" }}},
            { type: "Quiz", icon: "📝", title: "Prevention basics", desc: "Quiz on how vaccines and prevention work." },
            { type: "Reflect", icon: "💭", title: "Prevention matters", desc: "Why do you think preventing illness is important?" },
            { engine: "flip-cards", icon: "🃏", title: "Vaccine Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising vaccine fact!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर वैक्सीन का एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून लसीबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How old is the idea?",hi:"यह विचार कितना पुराना है?",mr:"ही कल्पना किती जुनी आहे?"}, back:{en:"Vaccines have been helping protect people for over 200 years, starting with smallpox! 📜",hi:"वैक्सीन 200 साल से भी ज़्यादा समय से लोगों की रक्षा कर रही हैं, चेचक से शुरुआत करते हुए! 📜",mr:"लस 200 वर्षांहून अधिक काळापासून लोकांचं रक्षण करत आहेत, देवीच्या रोगापासून सुरुवात करून! 📜"} },
              { front:{en:"Herd protection?",hi:"सामूहिक सुरक्षा?",mr:"सामूहिक संरक्षण?"}, back:{en:"When enough people are vaccinated, it helps protect even those who can't get vaccinated themselves! 🛡️",hi:"जब पर्याप्त लोग वैक्सीन लगवाते हैं, तो यह उन लोगों की भी रक्षा करने में मदद करता है जो खुद वैक्सीन नहीं लगवा सकते! 🛡️",mr:"जेव्हा पुरेसे लोक लस घेतात, तेव्हा ते स्वतः लस घेऊ शकत नाहीत अशा लोकांचंही संरक्षण करण्यास मदत करते! 🛡️"} },
              { front:{en:"Fighting a disease worldwide?",hi:"पूरी दुनिया में एक बीमारी से लड़ना?",mr:"जगभरात एका आजाराशी लढणं?"}, back:{en:"Vaccines helped completely wipe out smallpox worldwide — one of humanity's biggest health victories! 🌍",hi:"वैक्सीन ने पूरी दुनिया से चेचक को पूरी तरह मिटाने में मदद की — मानवता की सबसे बड़ी स्वास्थ्य जीतों में से एक! 🌍",mr:"लसींनी जगभरातून देवीचा रोग पूर्णपणे नष्ट करण्यास मदत केली — मानवतेच्या सर्वात मोठ्या आरोग्य विजयांपैकी एक! 🌍"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Vaccine or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your vaccine knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे वैक्सीन के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या लसीच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Vaccines teach your body to recognize a germ before you actually get sick from it.",hi:"वैक्सीन तुम्हारे शरीर को असल में बीमार होने से पहले ही एक कीटाणु को पहचानना सिखाती हैं।",mr:"लस तुमच्या शरीराला खरोखर आजारी पडण्याआधीच जंतू ओळखायला शिकवते."}, answer:true, explain:{en:"True! That's exactly how vaccines help protect you — a safe practice run for your immune system.",hi:"सच! वैक्सीन बिल्कुल इसी तरह तुम्हारी रक्षा करने में मदद करती हैं — तुम्हारे इम्यून सिस्टम के लिए एक सुरक्षित अभ्यास।",mr:"खरं! लस अगदी अशाच प्रकारे तुमचं संरक्षण करण्यास मदत करते — तुमच्या रोगप्रतिकारक शक्तीसाठी एक सुरक्षित सराव."} },
              { text:{en:"Once one person is vaccinated, no one else needs to be.",hi:"एक बार जब एक व्यक्ति को वैक्सीन लग जाती है, तो किसी और को इसकी ज़रूरत नहीं होती।",mr:"एकदा एका व्यक्तीला लस दिली की, इतर कोणालाही त्याची गरज नसते."}, answer:false, explain:{en:"Myth! Protecting a whole community usually needs many people to be vaccinated, not just one.",hi:"मिथक! पूरे समुदाय की रक्षा के लिए आमतौर पर कई लोगों को वैक्सीन लगवानी होती है, सिर्फ़ एक को नहीं।",mr:"मिथक! संपूर्ण समुदायाचं संरक्षण करण्यासाठी सहसा अनेक लोकांना लस घेणं आवश्यक असतं, फक्त एकालाच नाही."} },
              { text:{en:"Handwashing and vaccines both help prevent illness in different ways.",hi:"हाथ धोना और वैक्सीन दोनों अलग-अलग तरीकों से बीमारी को रोकने में मदद करते हैं।",mr:"हात धुणं आणि लस दोन्ही वेगवेगळ्या प्रकारे आजार टाळण्यास मदत करतात."}, answer:true, explain:{en:"True! They work differently but both genuinely help keep you from getting sick.",hi:"सच! वे अलग तरह से काम करते हैं लेकिन दोनों असल में तुम्हें बीमार होने से बचाने में मदद करते हैं।",mr:"खरं! ते वेगळ्या पद्धतीने काम करतात पण दोन्ही खरंच तुम्हाला आजारी पडण्यापासून वाचवण्यास मदत करतात."} }
            ]}}
          ]},
          { label: "Bones & Muscles Together",
            bonusAssignment: {
              title: { en: "Movement Comic Strip", hi: "मूवमेंट कॉमिक स्ट्रिप", mr: "हालचाल कॉमिक स्ट्रिप" },
              prompt: { en: "Draw a 3-panel comic strip showing bones and muscles working together for one movement (like kicking a ball). Take a photo and explain it!",
                        hi: "एक 3-पैनल कॉमिक स्ट्रिप बनाओ जो दिखाए कि एक हरकत के लिए हड्डियाँ और मांसपेशियाँ मिलकर कैसे काम करती हैं (जैसे बॉल किक करना)। फोटो लो और समझाओ!",
                        mr: "एक 3-पॅनेल कॉमिक स्ट्रिप काढा जी दाखवेल की एका हालचालीसाठी हाडं आणि स्नायू एकत्र कसे काम करतात (जसं चेंडूला लाथ मारणं). फोटो घ्या आणि समजावून सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🏃", title: "Match movement to body parts working together", data: { noStakes: true, zones: [
              { id: "jump", label: "Jumping" }, { id: "grip", label: "Gripping something" }, { id: "bend", label: "Bending your arm" }
            ], chips: ["jump","grip","bend"], facts: { jump: "Leg bones and muscles together!", grip: "Hand bones and muscles together!", bend: "Arm bones and muscles together!" }}},
            { engine: "tap-discover", icon: "🏃", title: "How they work together", data: { visual: "🏃", animation: "skeleton", hotspots: [
              { label: "Joints", fact: "Joints are where bones meet, letting your body bend and move!" },
              { label: "Tendons", fact: "Tendons connect your muscles to your bones!" },
              { label: "Teamwork", fact: "Bones give you structure, muscles give you movement!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Movement basics", desc: "Quiz on how bones and muscles work as a team." },
            { type: "Reflect", icon: "💭", title: "Your body in motion", desc: "What's something your body does today that needs both bones and muscles?" },
            { engine: "flip-cards", icon: "🃏", title: "Movement Fun Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Ready for something fun? Flip each card to reveal a surprising fact about how you move!",
                hi: "कुछ मज़ेदार करने के लिए तैयार हो? हर कार्ड को पलटकर हलचल के बारे में एक हैरान करने वाला तथ्य देखो!",
                mr: "काहीतरी मजेदार करायला तयार आहात? प्रत्येक कार्ड उलटून हालचालीबद्दलचं एक आश्चर्यकारक तथ्य बघा!"
              },
              data: { cards: [
              { front:{en:"How many joints?",hi:"कितने जोड़?",mr:"किती सांधे?"}, back:{en:"Your body has over 300 joints, letting you bend, twist, and move in so many ways! 🤸",hi:"तुम्हारे शरीर में 300 से ज़्यादा जोड़ हैं, जो तुम्हें कई तरह से मुड़ने, घूमने और हिलने देते हैं! 🤸",mr:"तुमच्या शरीरात 300 हून अधिक सांधे आहेत, जे तुम्हाला अनेक प्रकारे वाकण्यास, वळण्यास आणि हलण्यास मदत करतात! 🤸"} },
              { front:{en:"Tendons vs ligaments?",hi:"टेंडन बनाम लिगामेंट?",mr:"टेंडन विरुद्ध लिगामेंट?"}, back:{en:"Tendons connect muscle to bone, while ligaments connect bone to bone — both keep your body moving safely! 🔗",hi:"टेंडन मांसपेशी को हड्डी से जोड़ते हैं, जबकि लिगामेंट हड्डी को हड्डी से जोड़ते हैं — दोनों तुम्हारे शरीर को सुरक्षित रूप से हिलाते रहते हैं! 🔗",mr:"टेंडन स्नायूला हाडाशी जोडतात, तर लिगामेंट हाडाला हाडाशी जोडतात — दोन्ही तुमचं शरीर सुरक्षितपणे हलवत ठेवतात! 🔗"} },
              { front:{en:"Teamwork every second?",hi:"हर पल टीमवर्क?",mr:"प्रत्येक क्षणी संघकार्य?"}, back:{en:"Even standing still takes teamwork between your bones and muscles to keep you balanced! ⚖️",hi:"बस खड़े रहने के लिए भी तुम्हारी हड्डियों और मांसपेशियों के बीच टीमवर्क चाहिए ताकि तुम संतुलित रहो! ⚖️",mr:"नुसतं उभं राहण्यासाठीही तुम्हाला संतुलित ठेवण्यासाठी तुमची हाडं आणि स्नायू यांच्यात संघकार्य लागतं! ⚖️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Movement or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your movement knowledge! Decide if each statement is true or a myth.",
                hi: "चलो हलचल के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला हालचालीबद्दलच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Bones can move all by themselves, without any help from muscles.",hi:"हड्डियाँ मांसपेशियों की मदद के बिना खुद ही हिल सकती हैं।",mr:"हाडं स्नायूंच्या मदतीशिवाय स्वतःहून हलू शकतात."}, answer:false, explain:{en:"Myth! Bones can't move on their own — they always need muscles to pull them into motion.",hi:"मिथक! हड्डियाँ खुद नहीं हिल सकतीं — उन्हें हिलाने के लिए हमेशा मांसपेशियों की ज़रूरत होती है।",mr:"मिथक! हाडं स्वतःहून हलू शकत नाहीत — त्यांना हलवण्यासाठी नेहमी स्नायूंची गरज असते."} },
              { text:{en:"Joints are the places where two or more bones meet.",hi:"जोड़ वो जगहें हैं जहाँ दो या ज़्यादा हड्डियाँ मिलती हैं।",mr:"सांधे म्हणजे जिथे दोन किंवा अधिक हाडं भेटतात ती जागा."}, answer:true, explain:{en:"True! Joints are exactly that — meeting points that let your bones move relative to each other.",hi:"सच! जोड़ बिल्कुल यही हैं — मिलने के बिंदु जो तुम्हारी हड्डियों को एक दूसरे के सापेक्ष हिलने देते हैं।",mr:"खरं! सांधे अगदी हेच आहेत — भेटीचे बिंदू जे तुमच्या हाडांना एकमेकांच्या सापेक्ष हलू देतात."} },
              { text:{en:"Every movement in your body only uses one muscle at a time.",hi:"तुम्हारे शरीर की हर हरकत एक बार में केवल एक मांसपेशी का इस्तेमाल करती है।",mr:"तुमच्या शरीरातील प्रत्येक हालचाल एका वेळी फक्त एकाच स्नायूचा वापर करते."}, answer:false, explain:{en:"Myth! Most movements actually use several muscles working together at the same time.",hi:"मिथक! ज़्यादातर हरकतें असल में एक साथ कई मांसपेशियों का इस्तेमाल करती हैं।",mr:"मिथक! बहुतेक हालचाली खरंतर एकाच वेळी अनेक स्नायू एकत्र वापरतात."} }
            ]}}
          ]},
          { label: "Design-a-Healthy-Day",
            bonusAssignment: {
              title: { en: "My Year 2 Highlight Reel", hi: "मेरा साल 2 हाइलाइट रील", mr: "माझं वर्ष 2 हायलाइट रील" },
              prompt: { en: "Create a page (drawing, collage, or writing) about your favorite discovery from this whole year — how systems work together! Take a photo and tell us about it!",
                        hi: "इस पूरे साल की अपनी पसंदीदा खोज के बारे में एक पेज (चित्र, कोलाज, या लेखन) बनाओ — सिस्टम कैसे साथ काम करते हैं! फोटो लो और हमें इसके बारे में बताओ!",
                        mr: "या संपूर्ण वर्षातील तुमच्या आवडत्या शोधाबद्दल एक पान (चित्र, कोलाज, किंवा लेखन) तयार करा — यंत्रणा एकत्र कशा काम करतात! फोटो घ्या आणि आम्हाला त्याबद्दल सांगा!" }
            },
            tasks: [
            { type: "Build", icon: "🎨", title: "Design your healthy day", desc: "Plan out a full healthy day — meals, movement, sleep, and one fun activity." },
            { type: "Quiz", icon: "📝", title: "Healthy habits recap", desc: "A fun recap quiz of everything you explored this year." },
            { type: "Reflect", icon: "💭", title: "Systems working together", desc: "What's one way your body's systems work together that you didn't know before this year?" },
            { type: "Reflect", icon: "💭", title: "A message to Std 8 you", desc: "Write a message to yourself for next year." },
            { engine: "flip-cards", icon: "🃏", title: "Year 2 Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a second year of discovery! Flip each card for a fun recap of everything you explored.",
                hi: "क्या दूसरा खोज भरा साल रहा! तुमने जो कुछ भी एक्सप्लोर किया उसका मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय दुसरं शोधाचं वर्ष होतं! तुम्ही एक्सप्लोर केलेल्या सर्व गोष्टींचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Where did we start?",hi:"हमने कहाँ से शुरुआत की?",mr:"आपण कुठून सुरुवात केली?"}, back:{en:"You started this year following your food's entire journey through your body! 🍽️",hi:"तुमने इस साल की शुरुआत अपने खाने की तुम्हारे शरीर से पूरी यात्रा को फ़ॉलो करके की! 🍽️",mr:"तुम्ही या वर्षाची सुरुवात तुमच्या अन्नाचा तुमच्या शरीरातील संपूर्ण प्रवास फॉलो करून केली! 🍽️"} },
              { front:{en:"Systems connecting?",hi:"सिस्टम जुड़ना?",mr:"यंत्रणा जोडणं?"}, back:{en:"This year you learned how systems connect — like bones and muscles working together for every movement! 🔗",hi:"इस साल तुमने सीखा कि सिस्टम कैसे जुड़ते हैं — जैसे हड्डियाँ और मांसपेशियाँ हर हरकत के लिए साथ काम करती हैं! 🔗",mr:"या वर्षी तुम्ही शिकलात की यंत्रणा कशा जोडल्या जातात — जसं हाडं आणि स्नायू प्रत्येक हालचालीसाठी एकत्र काम करतात! 🔗"} },
              { front:{en:"What's next?",hi:"आगे क्या?",mr:"पुढे काय?"}, back:{en:"Next year in Std 8, your missions get a little more challenging — real right-and-wrong answers begin! 🚀",hi:"अगले साल Std 8 में, तुम्हारे मिशन थोड़े और चुनौतीपूर्ण हो जाते हैं — असली सही-गलत जवाब शुरू होते हैं! 🚀",mr:"पुढच्या वर्षी Std 8 मध्ये, तुमची मिशन्स थोडी अधिक आव्हानात्मक होतात — खरी बरोबर-चूक उत्तरं सुरू होतात! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One last check-in before the year wraps up! Let's see what stuck from this whole year.",
                hi: "साल खत्म होने से पहले एक आखिरी जांच! देखते हैं इस पूरे साल से क्या याद रहा।",
                mr: "वर्ष संपण्याआधी शेवटची एक तपासणी! बघूया या संपूर्ण वर्षातून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"Every body system you explored this year works completely alone, with no teamwork involved.",hi:"तुमने इस साल एक्सप्लोर किया हर शरीर सिस्टम पूरी तरह अकेले काम करता है, कोई टीमवर्क शामिल नहीं।",mr:"तुम्ही या वर्षी एक्सप्लोर केलेली प्रत्येक शरीर यंत्रणा पूर्णपणे एकटी काम करते, कोणतंही संघकार्य नाही."}, answer:false, explain:{en:"Myth! You specifically learned this year how systems like bones and muscles work as a team.",hi:"मिथक! तुमने इस साल विशेष रूप से सीखा कि हड्डियों और मांसपेशियों जैसे सिस्टम एक टीम की तरह कैसे काम करते हैं।",mr:"मिथक! तुम्ही या वर्षी विशेषतः शिकलात की हाडं आणि स्नायूंसारख्या यंत्रणा एका संघासारख्या कशा काम करतात."} },
              { text:{en:"Healthy habits like good sleep, food, and hygiene all support each other.",hi:"अच्छी नींद, खाना और साफ़-सफ़ाई जैसी स्वस्थ आदतें एक दूसरे का साथ देती हैं।",mr:"चांगली झोप, अन्न आणि स्वच्छतेसारख्या निरोगी सवयी एकमेकांना साथ देतात."}, answer:true, explain:{en:"True! All the healthy habits you explored this year genuinely work together to keep your whole body well.",hi:"सच! तुमने इस साल एक्सप्लोर की सभी स्वस्थ आदतें असल में तुम्हारे पूरे शरीर को स्वस्थ रखने के लिए साथ काम करती हैं।",mr:"खरं! तुम्ही या वर्षी एक्सप्लोर केलेल्या सर्व निरोगी सवयी खरंच तुमचं संपूर्ण शरीर तंदुरुस्त ठेवण्यासाठी एकत्र काम करतात."} },
              { text:{en:"This was the very last year you'll ever explore Doctor & Healthcare topics.",hi:"यह आखिरी साल था जब तुम कभी डॉक्टर और स्वास्थ्य से जुड़े विषय एक्सप्लोर करोगे।",mr:"डॉक्टर आणि आरोग्य विषय एक्सप्लोर करण्याचं हे शेवटचं वर्ष होतं."}, answer:false, explain:{en:"Myth! Next year in Std 8, you'll go even deeper — this is just the beginning of a much longer journey.",hi:"मिथक! अगले साल Std 8 में, तुम और भी गहराई में जाओगे — यह तो एक बहुत लंबी यात्रा की बस शुरुआत है।",mr:"मिथक! पुढच्या वर्षी Std 8 मध्ये, तुम्ही आणखी खोलात जाल — ही तर एका खूप मोठ्या प्रवासाची फक्त सुरुवात आहे."} }
            ]}}
          ]}
        ]
      },
      "8": {
        band: "Builder",
        bandTagline: "First real skill-building — clear right/wrong answers, gentle retry, genuine challenge.",
        months: [
          { label: "Label the Heart's Chambers",
            bonusAssignment: {
              title: { en: "Build a Labeled Heart Model", hi: "एक लेबल किया हुआ दिल का मॉडल बनाओ", mr: "लेबल केलेलं हृदयाचं मॉडेल बनवा" },
              prompt: { en: "Draw a heart diagram and correctly label all 4 chambers. Take a photo and explain what each chamber does!",
                        hi: "एक दिल का चित्र बनाओ और सभी 4 कक्षों को सही तरीके से लेबल करो। फोटो लो और बताओ हर कक्ष क्या करता है!",
                        mr: "हृदयाची आकृती काढा आणि सर्व 4 कप्पे बरोबर लेबल करा. फोटो घ्या आणि प्रत्येक कप्पा काय करतो ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🫀", title: "Label the Heart's Chambers", mentorVisual: "🫀",
              mentorIntro: {
                en: "This month, we get a little more precise! Your heart has exactly 4 chambers, each with its own name and job. This time, you'll need to get them right — but don't worry, you can always try again.",
                hi: "इस महीने, हम थोड़े और सटीक हो जाते हैं! तुम्हारे दिल के ठीक 4 कक्ष हैं, हर एक का अपना नाम और काम है। इस बार, तुम्हें उन्हें सही करना होगा — लेकिन चिंता मत करो, तुम हमेशा फिर से कोशिश कर सकते हो।",
                mr: "या महिन्यात, आपण थोडे अधिक अचूक होऊया! तुमच्या हृदयाला बरोबर 4 कप्पे आहेत, प्रत्येकाचं स्वतःचं नाव आणि काम आहे. यावेळी, तुम्हाला ते बरोबर करावे लागतील — पण काळजी करू नका, तुम्ही नेहमी पुन्हा प्रयत्न करू शकता."
              },
              data: { noStakes: false, zones: [
              { id: "la", label: { en:"Left Atrium", hi:"बायाँ अलिंद", mr:"डावं कर्णिका" } },
              { id: "ra", label: { en:"Right Atrium", hi:"दायाँ अलिंद", mr:"उजवं कर्णिका" } },
              { id: "lv", label: { en:"Left Ventricle", hi:"बायाँ निलय", mr:"डावं जवनिका" } },
              { id: "rv", label: { en:"Right Ventricle", hi:"दायाँ निलय", mr:"उजवं जवनिका" } }
            ], chips: ["la","ra","lv","rv"], facts: {
              la:"The left atrium receives fresh, oxygen-rich blood from your lungs!",
              ra:"The right atrium receives used blood coming back from your body!",
              lv:"The left ventricle is the strongest chamber — it pumps blood to your entire body!",
              rv:"The right ventricle pumps blood to your lungs to pick up fresh oxygen!"
            }}},
            { engine: "tap-discover", icon: "🫀", title: "Explore the heart's valves", mentorVisual: "🚪",
              mentorIntro: {
                en: "Now that you know the chambers, let's meet the valves — the doors between them that keep your blood flowing only the right way!",
                hi: "अब जब तुम कक्षों को जानते हो, चलो वाल्व से मिलते हैं — उनके बीच के दरवाज़े जो तुम्हारे खून को सही दिशा में बहाए रखते हैं!",
                mr: "आता तुम्हाला कप्पे माहीत आहेत, चला झडपांना भेटूया — त्यांच्यामधले दरवाजे जे तुमचं रक्त फक्त योग्य दिशेने वाहत ठेवतात!"
              },
              data: { visual: "🚪", animation: "heartbeat", hotspots: [
              { label: {en:"Tricuspid valve",hi:"त्रिकुस्पिड वाल्व",mr:"ट्रायकस्पिड झडप"}, fact:{en:"This valve sits between the right atrium and right ventricle, opening one-way like a door! 🚪",hi:"यह वाल्व दायें अलिंद और दायें निलय के बीच बैठता है, एक दरवाज़े की तरह एक-तरफ़ा खुलता है! 🚪",mr:"ही झडप उजव्या कर्णिका आणि उजव्या जवनिकेच्या मध्ये बसते, दरवाज्यासारखी एकाच बाजूने उघडते! 🚪"} },
              { label: {en:"Mitral valve",hi:"माइट्रल वाल्व",mr:"मायट्रल झडप"}, fact:{en:"This valve sits between the left atrium and left ventricle, keeping blood flowing the right way! ➡️",hi:"यह वाल्व बायें अलिंद और बायें निलय के बीच बैठता है, खून को सही दिशा में बहाए रखता है! ➡️",mr:"ही झडप डाव्या कर्णिका आणि डाव्या जवनिकेच्या मध्ये बसते, रक्त योग्य दिशेने वाहत ठेवते! ➡️"} },
              { label: {en:"Why valves matter",hi:"वाल्व क्यों मायने रखते हैं",mr:"झडपा का महत्त्वाच्या आहेत"}, fact:{en:"Without valves, blood could flow backward — valves keep everything moving in one correct direction! 🔄",hi:"वाल्व के बिना, खून पीछे की ओर बह सकता है — वाल्व सब कुछ एक सही दिशा में बहाए रखते हैं! 🔄",mr:"झडपांशिवाय, रक्त मागे वाहू शकतं — झडपा सर्वकाही एका योग्य दिशेने वाहत ठेवतात! 🔄"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Heart chambers & valves quiz",
              desc: { en:"A real quiz on the heart's 4 chambers and its valves — get specific about names and jobs!", hi:"दिल के 4 कक्षों और उसके वाल्वों पर एक असली क्विज़ — नामों और कामों के बारे में खास बताओ!", mr:"हृदयाच्या 4 कप्प्यांवर आणि झडपांवर एक खरा क्विझ — नावं आणि कामांबद्दल विशिष्ट सांगा!" } },
            { type: "Reflect", icon: "💭", title: "Precision matters",
              desc: { en:"Why do you think doctors need to know the exact name of each heart chamber, not just 'left side' and 'right side'?", hi:"तुम्हें क्यों लगता है कि डॉक्टरों को दिल के हर कक्ष का सटीक नाम जानना ज़रूरी है, सिर्फ़ 'बायाँ हिस्सा' और 'दायाँ हिस्सा' नहीं?", mr:"डॉक्टरांना हृदयाच्या प्रत्येक कप्प्याचं नेमकं नाव माहीत असणं का आवश्यक आहे असं तुम्हाला वाटतं, फक्त 'डावी बाजू' आणि 'उजवी बाजू' नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Heart Chamber Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper this time — flip each card for a more advanced heart fact!",
                hi: "इस बार और गहराई में चलते हैं — एक ज़्यादा एडवांस दिल का तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "यावेळी अधिक खोलात जाऊया — अधिक प्रगत हृदयाचं तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Which side is thicker?",hi:"कौन सा हिस्सा मोटा है?",mr:"कोणती बाजू जाड आहे?"}, back:{en:"The left ventricle's walls are much thicker than the right — it has to pump blood to your whole body, not just your lungs! 💪",hi:"बायें निलय की दीवारें दायें से कहीं ज़्यादा मोटी हैं — इसे तुम्हारे पूरे शरीर में खून पंप करना है, सिर्फ़ फेफड़ों में नहीं! 💪",mr:"डाव्या जवनिकेच्या भिंती उजव्यापेक्षा खूप जाड आहेत — तिला तुमच्या संपूर्ण शरीरात रक्त पंप करावं लागतं, फक्त फुफ्फुसांत नाही! 💪"} },
              { front:{en:"Heartbeat sound source?",hi:"धड़कन की आवाज़ का स्रोत?",mr:"हृदयाच्या ठोक्याचा आवाज कुठून येतो?"}, back:{en:"The 'lub-dub' sound comes from your valves snapping shut, not the chambers themselves! 🔊",hi:"'लब-डब' की आवाज़ तुम्हारे वाल्वों के बंद होने से आती है, कक्षों से नहीं! 🔊",mr:"'लब-डब' आवाज तुमच्या झडपा बंद होण्यातून येतो, कप्प्यांमधून नाही! 🔊"} },
              { front:{en:"Both sides pump together?",hi:"दोनों तरफ़ एक साथ पंप होते हैं?",mr:"दोन्ही बाजू एकत्र पंप करतात?"}, back:{en:"Yes! Both atria contract together, then both ventricles contract together — perfectly timed teamwork! ⏱️",hi:"हाँ! दोनों अलिंद एक साथ सिकुड़ते हैं, फिर दोनों निलय एक साथ सिकुड़ते हैं — बिल्कुल सही समय पर टीमवर्क! ⏱️",mr:"हो! दोन्ही कर्णिका एकत्र आकुंचन पावतात, मग दोन्ही जवनिका एकत्र आकुंचन पावतात — अगदी अचूक वेळेत संघकार्य! ⏱️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Heart Chambers or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "A tougher round this time! Decide if each statement is true or a myth.",
                hi: "इस बार एक कठिन राउंड! तय करो हर बात सच है या मिथक।",
                mr: "यावेळी एक कठीण फेरी! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"All 4 heart chambers are exactly the same size.",hi:"सभी 4 दिल के कक्ष बिल्कुल एक ही आकार के हैं।",mr:"सर्व 4 हृदयाचे कप्पे अगदी सारख्याच आकाराचे आहेत."}, answer:false, explain:{en:"Myth! The left ventricle is noticeably larger and more muscular than the others, since it does the hardest pumping work.",hi:"मिथक! बायाँ निलय बाकियों से काफ़ी बड़ा और ज़्यादा मांसल है, क्योंकि यह सबसे कठिन पंपिंग का काम करता है।",mr:"मिथक! डावी जवनिका इतरांपेक्षा लक्षणीयरीत्या मोठी आणि जास्त स्नायुयुक्त आहे, कारण ती सर्वात कठीण पंपिंगचं काम करते."} },
              { text:{en:"Blood always flows from atria into ventricles, never the other way.",hi:"खून हमेशा अलिंद से निलय में बहता है, कभी उल्टा नहीं।",mr:"रक्त नेहमी कर्णिकेतून जवनिकेत वाहतं, कधीच उलट नाही."}, answer:true, explain:{en:"True! Valves ensure blood only flows one way — from atria to ventricles, never backward.",hi:"सच! वाल्व यह सुनिश्चित करते हैं कि खून केवल एक दिशा में बहे — अलिंद से निलय तक, कभी पीछे नहीं।",mr:"खरं! झडपा हे सुनिश्चित करतात की रक्त फक्त एका दिशेने वाहतं — कर्णिकेपासून जवनिकेपर्यंत, कधीच मागे नाही."} },
              { text:{en:"The right and left sides of the heart never work at the same time.",hi:"दिल के दायें और बायें हिस्से कभी एक साथ काम नहीं करते।",mr:"हृदयाच्या उजव्या आणि डाव्या बाजू कधीच एकत्र काम करत नाहीत."}, answer:false, explain:{en:"Myth! Both sides actually pump at nearly the same time, working as one coordinated team.",hi:"मिथक! दोनों तरफ़ असल में लगभग एक ही समय पर पंप करते हैं, एक समन्वित टीम की तरह काम करते हुए।",mr:"मिथक! दोन्ही बाजू खरंतर जवळजवळ एकाच वेळी पंप करतात, एका समन्वित संघासारखं काम करत."} }
            ]}}
          ]},
          { label: "Read a Pulse & Vitals Chart",
            bonusAssignment: {
              title: { en: "Take Your Own Pulse", hi: "अपनी खुद की नब्ज़ जाँचो", mr: "तुमची स्वतःची नाडी तपासा" },
              prompt: { en: "With an adult's help, count your pulse for 15 seconds and multiply by 4 to get your heart rate. Take a photo of your result and describe how you did it!",
                        hi: "किसी बड़े की मदद से, 15 सेकंड के लिए अपनी नब्ज़ गिनो और अपनी हृदय गति पाने के लिए 4 से गुणा करो। अपने नतीजे की फोटो लो और बताओ तुमने कैसे किया!",
                        mr: "मोठ्यांच्या मदतीने, 15 सेकंदासाठी तुमची नाडी मोजा आणि तुमचा हृदयगती मिळवण्यासाठी 4 ने गुणा करा. तुमच्या निकालाचा फोटो घ्या आणि तुम्ही कसं केलं ते सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "📈", title: "Explore a vitals monitor", mentorVisual: "📈",
              mentorIntro: {
                en: "Doctors read vitals monitors every day! Let's learn what the numbers actually mean — heart rate, blood pressure, and oxygen levels.",
                hi: "डॉक्टर हर दिन वाइटल्स मॉनिटर पढ़ते हैं! चलो सीखते हैं संख्याएँ असल में क्या मतलब रखती हैं — हृदय गति, ब्लड प्रेशर, और ऑक्सीजन लेवल।",
                mr: "डॉक्टर दररोज व्हायटल्स मॉनिटर वाचतात! चला शिकूया संख्या खरंच काय अर्थ ठेवतात — हृदयगती, रक्तदाब, आणि ऑक्सिजन पातळी."
              },
              data: { visual: "📈", animation: "ecg", hotspots: [
              { label:{en:"Heart rate: 78 bpm",hi:"हृदय गति: 78 बीपीएम",mr:"हृदयगती: 78 बीपीएम"}, fact:{en:"A resting heart rate of 60-100 beats per minute is considered normal for someone your age!",hi:"तुम्हारी उम्र के किसी के लिए आराम की हृदय गति 60-100 धड़कन प्रति मिनट सामान्य मानी जाती है!",mr:"तुमच्या वयाच्या कोणासाठी विश्रांतीची हृदयगती 60-100 ठोके प्रति मिनिट सामान्य मानली जाते!"} },
              { label:{en:"Blood pressure: 118/76",hi:"ब्लड प्रेशर: 118/76",mr:"रक्तदाब: 118/76"}, fact:{en:"This reading shows normal blood pressure — the top number is when your heart beats, the bottom is when it rests!",hi:"यह रीडिंग सामान्य ब्लड प्रेशर दिखाती है — ऊपर की संख्या तब है जब तुम्हारा दिल धड़कता है, नीचे की तब जब यह आराम करता है!",mr:"हे रीडिंग सामान्य रक्तदाब दाखवतं — वरची संख्या तेव्हा असते जेव्हा तुमचं हृदय धडधडतं, खालची तेव्हा जेव्हा ते विश्रांती घेतं!"} },
              { label:{en:"Oxygen: 98%",hi:"ऑक्सीजन: 98%",mr:"ऑक्सिजन: 98%"}, fact:{en:"Healthy oxygen levels are usually 95% or above — this tells doctors your lungs are working well!",hi:"स्वस्थ ऑक्सीजन लेवल आमतौर पर 95% या इससे ज़्यादा होते हैं — यह डॉक्टरों को बताता है कि तुम्हारे फेफड़े अच्छे से काम कर रहे हैं!",mr:"निरोगी ऑक्सिजन पातळी सहसा 95% किंवा त्याहून जास्त असते — हे डॉक्टरांना सांगतं की तुमची फुफ्फुसं चांगली काम करत आहेत!"} }
            ]}},
            { engine: "build-match", icon: "📈", title: "Sort normal vs. needs-attention readings", mentorVisual: "🩺",
              mentorIntro: {
                en: "Now let's see if you can tell the difference — which readings look normal, and which ones a doctor would want to double-check?",
                hi: "अब देखते हैं क्या तुम फ़र्क बता सकते हो — कौन सी रीडिंग सामान्य लगती हैं, और कौन सी एक डॉक्टर दोबारा जाँचना चाहेगा?",
                mr: "आता बघूया तुम्ही फरक सांगू शकता का — कोणतं रीडिंग सामान्य दिसतं, आणि कोणतं डॉक्टर पुन्हा तपासू इच्छिेल?"
              },
              data: { noStakes: false, zones: [
              { id: "normal_hr", label: { en:"72 bpm — Normal", hi:"72 बीपीएम — सामान्य", mr:"72 बीपीएम — सामान्य" } },
              { id: "high_hr", label: { en:"150 bpm resting — Needs attention", hi:"150 बीपीएम आराम में — ध्यान चाहिए", mr:"150 बीपीएम विश्रांतीत — लक्ष हवं" } },
              { id: "low_o2", label: { en:"88% oxygen — Needs attention", hi:"88% ऑक्सीजन — ध्यान चाहिए", mr:"88% ऑक्सिजन — लक्ष हवं" } }
            ], chips: ["normal_hr","high_hr","low_o2"], facts: {
              normal_hr:"A resting heart rate of 72 bpm is right in the healthy normal range!",
              high_hr:"150 bpm while resting is unusually high and would need a doctor to check why!",
              low_o2:"88% oxygen is below the healthy range and needs immediate medical attention!"
            }}},
            { type: "Quiz", icon: "📝", title: "Vitals reading quiz",
              desc: { en:"A real quiz on reading heart rate, blood pressure, and oxygen readings correctly.", hi:"हृदय गति, ब्लड प्रेशर, और ऑक्सीजन रीडिंग को सही तरीके से पढ़ने पर एक असली क्विज़।", mr:"हृदयगती, रक्तदाब, आणि ऑक्सिजन रीडिंग बरोबर वाचण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Numbers tell a story",
              desc: { en:"Why do you think doctors need to check multiple vitals together, not just one number alone?", hi:"तुम्हें क्यों लगता है कि डॉक्टरों को कई वाइटल्स को एक साथ जाँचना ज़रूरी है, सिर्फ़ एक संख्या नहीं?", mr:"डॉक्टरांना अनेक व्हायटल्स एकत्र तपासणं आवश्यक का आहे असं तुम्हाला वाटतं, फक्त एक संख्या नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Vitals Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced vitals fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस वाइटल्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत व्हायटल्स तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Why check 4 vitals?",hi:"4 वाइटल्स क्यों जाँचें?",mr:"4 व्हायटल्स का तपासाव्यात?"}, back:{en:"Doctors check heart rate, blood pressure, oxygen, and temperature together because they each reveal different clues! 🔍",hi:"डॉक्टर हृदय गति, ब्लड प्रेशर, ऑक्सीजन, और तापमान को एक साथ जाँचते हैं क्योंकि हर एक अलग सुराग दिखाता है! 🔍",mr:"डॉक्टर हृदयगती, रक्तदाब, ऑक्सिजन, आणि तापमान एकत्र तपासतात कारण प्रत्येक वेगळा सुगावा दाखवतो! 🔍"} },
              { front:{en:"Exercise changes readings?",hi:"व्यायाम रीडिंग बदलता है?",mr:"व्यायामाने रीडिंग बदलतं?"}, back:{en:"Heart rate naturally rises during exercise — a doctor knows to expect a higher number right after running! 🏃",hi:"व्यायाम के दौरान हृदय गति स्वाभाविक रूप से बढ़ती है — एक डॉक्टर जानता है कि दौड़ने के तुरंत बाद ज़्यादा संख्या की उम्मीद करनी चाहिए! 🏃",mr:"व्यायामादरम्यान हृदयगती नैसर्गिकरित्या वाढते — डॉक्टरांना माहीत असतं की धावल्यानंतर लगेच जास्त संख्येची अपेक्षा करावी! 🏃"} },
              { front:{en:"Age matters?",hi:"उम्र मायने रखती है?",mr:"वय महत्त्वाचं आहे?"}, back:{en:"Normal heart rate ranges are actually different for kids, adults, and athletes — context always matters! 👥",hi:"सामान्य हृदय गति रेंज असल में बच्चों, वयस्कों, और खिलाड़ियों के लिए अलग हैं — संदर्भ हमेशा मायने रखता है! 👥",mr:"सामान्य हृदयगती श्रेणी खरंतर मुलं, प्रौढ, आणि खेळाडूंसाठी वेगळ्या असतात — संदर्भ नेहमी महत्त्वाचा असतो! 👥"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Vitals or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your vitals knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे वाइटल्स के ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या व्हायटल्सच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A single vitals reading is always enough to fully understand someone's health.",hi:"एक अकेली वाइटल्स रीडिंग हमेशा किसी के स्वास्थ्य को पूरी तरह समझने के लिए काफ़ी है।",mr:"एकच व्हायटल्स रीडिंग नेहमी एखाद्याचं आरोग्य पूर्णपणे समजून घेण्यासाठी पुरेसं असतं."}, answer:false, explain:{en:"Myth! Doctors look at multiple vitals together and often over time to get the full picture.",hi:"मिथक! डॉक्टर पूरी तस्वीर पाने के लिए कई वाइटल्स को एक साथ और अक्सर समय के साथ देखते हैं।",mr:"मिथक! डॉक्टर संपूर्ण चित्र मिळवण्यासाठी अनेक व्हायटल्स एकत्र आणि अनेकदा कालांतराने बघतात."} },
              { text:{en:"Blood pressure has two numbers because it measures two different moments in a heartbeat.",hi:"ब्लड प्रेशर के दो नंबर होते हैं क्योंकि यह धड़कन के दो अलग-अलग पलों को मापता है।",mr:"रक्तदाबाला दोन संख्या असतात कारण तो ठोक्यातील दोन वेगळे क्षण मोजतो."}, answer:true, explain:{en:"True! The top number is your heart beating, and the bottom is your heart resting between beats.",hi:"सच! ऊपर की संख्या तुम्हारे दिल का धड़कना है, और नीचे की तुम्हारे दिल का धड़कनों के बीच आराम करना है।",mr:"खरं! वरची संख्या तुमचं हृदय धडधडणं आहे, आणि खालची तुमचं हृदय ठोक्यांमध्ये विश्रांती घेणं आहे."} },
              { text:{en:"Oxygen levels don't matter as much as heart rate.",hi:"ऑक्सीजन लेवल हृदय गति जितना मायने नहीं रखता।",mr:"ऑक्सिजन पातळी हृदयगतीइतकी महत्त्वाची नाही."}, answer:false, explain:{en:"Myth! Oxygen levels are just as critical — low oxygen can be a serious warning sign doctors watch closely.",hi:"मिथक! ऑक्सीजन लेवल भी उतना ही ज़रूरी है — कम ऑक्सीजन एक गंभीर चेतावनी संकेत हो सकता है जिसे डॉक्टर ध्यान से देखते हैं।",mr:"मिथक! ऑक्सिजन पातळीही तितकीच महत्त्वाची आहे — कमी ऑक्सिजन हे गंभीर इशाऱ्याचं लक्षण असू शकतं जे डॉक्टर बारकाईने बघतात."} }
            ]}}
          ]},
          { label: "Bone Fracture Types",
            bonusAssignment: {
              title: { en: "Fracture First-Aid Card", hi: "फ्रैक्चर फर्स्ट-एड कार्ड", mr: "फ्रॅक्चर फर्स्ट-एड कार्ड" },
              prompt: { en: "Research and write a simple card on what someone should do (and NOT do) if they suspect a broken bone, until help arrives. Take a photo!",
                        hi: "एक साधा कार्ड लिखो कि अगर किसी को टूटी हड्डी का शक हो तो उसे क्या करना चाहिए (और क्या नहीं करना चाहिए), जब तक मदद न आए। फोटो लो!",
                        mr: "एक साधं कार्ड लिहा की जर कोणाला हाड मोडल्याची शंका असेल तर मदत येईपर्यंत त्याने काय करावं (आणि काय करू नये). फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🩻", title: "Explore X-ray basics", mentorVisual: "🩻",
              mentorIntro: {
                en: "X-rays let doctors see bones without any cutting! Let's explore what they can tell us about a bone injury.",
                hi: "एक्स-रे डॉक्टरों को बिना काटे हड्डियाँ देखने देते हैं! चलो एक्सप्लोर करते हैं वे हड्डी की चोट के बारे में क्या बता सकते हैं।",
                mr: "एक्स-रे डॉक्टरांना न कापता हाडं बघू देतात! चला एक्सप्लोर करूया ते हाडाच्या दुखापतीबद्दल काय सांगू शकतात."
              },
              data: { visual: "🩻", animation: "xray", hotspots: [
              { label:{en:"Hairline fracture",hi:"बाल जैसी दरार",mr:"केसाएवढी भेग"}, fact:{en:"A hairline fracture is a very thin crack — sometimes hard to see, but it still needs care to heal properly!",hi:"बाल जैसी दरार एक बहुत पतली दरार है — कभी-कभी देखना मुश्किल होता है, लेकिन इसे ठीक से ठीक होने के लिए देखभाल चाहिए!",mr:"केसाएवढी भेग खूप पातळ भेग आहे — कधीकधी बघणं कठीण असतं, पण ती नीट बरी होण्यासाठी काळजी हवी!"} },
              { label:{en:"Complete fracture",hi:"पूरी दरार",mr:"पूर्ण भेग"}, fact:{en:"A complete fracture means the bone has broken all the way through into two or more pieces!",hi:"पूरी दरार का मतलब है हड्डी पूरी तरह टूटकर दो या ज़्यादा टुकड़ों में बंट गई है!",mr:"पूर्ण भेग म्हणजे हाड पूर्णपणे तुटून दोन किंवा अधिक तुकड्यांमध्ये विभागलं आहे!"} },
              { label:{en:"Healing time",hi:"ठीक होने का समय",mr:"बरं होण्याची वेळ"}, fact:{en:"Most broken bones take about 6-8 weeks to heal, though it can vary depending on the bone and age!",hi:"ज़्यादातर टूटी हड्डियों को ठीक होने में लगभग 6-8 हफ़्ते लगते हैं, हालांकि यह हड्डी और उम्र पर निर्भर हो सकता है!",mr:"बहुतेक मोडलेली हाडं बरी होण्यास सुमारे 6-8 आठवडे लागतात, जरी ते हाड आणि वयावर अवलंबून बदलू शकतं!"} }
            ]}},
            { engine: "build-match", icon: "🩻", title: "Match fracture type to description", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's see if you can correctly match each fracture type to its right description — real precision matters here!",
                hi: "देखते हैं क्या तुम हर फ्रैक्चर प्रकार को उसके सही विवरण से सही तरीके से मैच कर सकते हो — यहाँ असली सटीकता मायने रखती है!",
                mr: "बघूया तुम्ही प्रत्येक फ्रॅक्चर प्रकार त्याच्या योग्य वर्णनाशी बरोबर जुळवू शकता का — इथे खरी अचूकता महत्त्वाची आहे!"
              },
              data: { noStakes: false, zones: [
              { id: "hairline", label: { en:"A very thin, hard-to-see crack", hi:"एक बहुत पतली, देखने में मुश्किल दरार", mr:"एक खूप पातळ, बघायला कठीण भेग" } },
              { id: "complete", label: { en:"Bone broken into separate pieces", hi:"हड्डी अलग टुकड़ों में टूटी", mr:"हाड वेगळ्या तुकड्यांत तुटलेलं" } },
              { id: "greenstick", label: { en:"Bone bends and cracks, but doesn't fully break — common in kids", hi:"हड्डी मुड़ती और चटकती है, लेकिन पूरी तरह नहीं टूटती — बच्चों में आम", mr:"हाड वाकतं आणि तडकतं, पण पूर्णपणे तुटत नाही — मुलांमध्ये सामान्य" } }
            ], chips: ["hairline","complete","greenstick"], facts: {
              hairline:"That's a hairline fracture!",
              complete:"That's a complete fracture!",
              greenstick:"That's a greenstick fracture — named because it's like bending a young, green tree branch!"
            }}},
            { type: "Quiz", icon: "📝", title: "Fracture types quiz",
              desc: { en:"A real quiz on identifying and understanding different types of bone fractures.", hi:"अलग-अलग तरह के हड्डी फ्रैक्चर को पहचानने और समझने पर एक असली क्विज़।", mr:"वेगवेगळ्या प्रकारच्या हाड फ्रॅक्चर ओळखण्यावर आणि समजून घेण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Why kids heal differently",
              desc: { en:"Why do you think kids' bones might break differently (like greenstick fractures) compared to adult bones?", hi:"तुम्हें क्यों लगता है कि बच्चों की हड्डियाँ वयस्कों की हड्डियों की तुलना में अलग तरह से टूट सकती हैं (जैसे ग्रीनस्टिक फ्रैक्चर)?", mr:"मुलांची हाडं प्रौढांच्या हाडांच्या तुलनेत वेगळ्या प्रकारे तुटू शकतात (जसं ग्रीनस्टिक फ्रॅक्चर) असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Fracture Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fracture fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस फ्रैक्चर तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत फ्रॅक्चर तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Why kids heal faster?",hi:"बच्चे तेज़ी से क्यों ठीक होते हैं?",mr:"मुलं जलद का बरी होतात?"}, back:{en:"Kids' bones are still growing and have a rich blood supply, which helps fractures heal faster than in adults! 👶",hi:"बच्चों की हड्डियाँ अभी भी बढ़ रही हैं और उनमें भरपूर रक्त आपूर्ति है, जो वयस्कों की तुलना में फ्रैक्चर को तेज़ी से ठीक होने में मदद करती है! 👶",mr:"मुलांची हाडं अजूनही वाढत आहेत आणि त्यांना भरपूर रक्तपुरवठा आहे, जो प्रौढांच्या तुलनेत फ्रॅक्चर जलद बरं होण्यास मदत करतो! 👶"} },
              { front:{en:"Casts work how?",hi:"कास्ट कैसे काम करते हैं?",mr:"कास्ट कसं काम करतं?"}, back:{en:"A cast keeps the broken bone completely still, which is essential for the healing process to work properly! 🦴",hi:"एक कास्ट टूटी हड्डी को पूरी तरह स्थिर रखता है, जो ठीक होने की प्रक्रिया के सही से काम करने के लिए ज़रूरी है! 🦴",mr:"कास्ट मोडलेलं हाड पूर्णपणे स्थिर ठेवतं, जे बरं होण्याची प्रक्रिया नीट काम करण्यासाठी आवश्यक आहे! 🦴"} },
              { front:{en:"Bones stronger after healing?",hi:"ठीक होने के बाद हड्डियाँ मज़बूत?",mr:"बरं झाल्यानंतर हाडं मजबूत?"}, back:{en:"Interestingly, the spot where a bone healed from a fracture is often actually stronger than before! 💪",hi:"दिलचस्प बात यह है कि जिस जगह हड्डी फ्रैक्चर से ठीक हुई, वह अक्सर पहले से भी ज़्यादा मज़बूत होती है! 💪",mr:"रंजक गोष्ट म्हणजे जिथे हाड फ्रॅक्चरमधून बरं झालं, ती जागा अनेकदा आधीपेक्षाही जास्त मजबूत असते! 💪"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Fracture or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your fracture knowledge! Decide if each statement is true or a myth.",
                hi: "चलो फ्रैक्चर के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला फ्रॅक्चरच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You should try to push a suspected broken bone back into place yourself.",hi:"तुम्हें एक शक वाली टूटी हड्डी को खुद वापस जगह पर धकेलने की कोशिश करनी चाहिए।",mr:"तुम्ही मोडलेलं असल्याची शंका असलेलं हाड स्वतः परत जागी ढकलण्याचा प्रयत्न करावा."}, answer:false, explain:{en:"Myth! This is dangerous and should only ever be done by trained medical professionals.",hi:"मिथक! यह खतरनाक है और केवल प्रशिक्षित मेडिकल पेशेवरों द्वारा ही किया जाना चाहिए।",mr:"मिथक! हे धोकादायक आहे आणि फक्त प्रशिक्षित वैद्यकीय व्यावसायिकांनीच करावं."} },
              { text:{en:"X-rays help doctors see the exact type and location of a fracture.",hi:"एक्स-रे डॉक्टरों को फ्रैक्चर का सटीक प्रकार और स्थान देखने में मदद करते हैं।",mr:"एक्स-रे डॉक्टरांना फ्रॅक्चरचा नेमका प्रकार आणि जागा बघण्यास मदत करतात."}, answer:true, explain:{en:"True! X-rays are one of the most important tools for correctly diagnosing a fracture.",hi:"सच! एक्स-रे फ्रैक्चर का सही निदान करने के लिए सबसे ज़रूरी उपकरणों में से एक हैं।",mr:"खरं! फ्रॅक्चरचं बरोबर निदान करण्यासाठी एक्स-रे हे सर्वात महत्त्वाच्या साधनांपैकी एक आहे."} },
              { text:{en:"A greenstick fracture means the bone is completely broken into two pieces.",hi:"ग्रीनस्टिक फ्रैक्चर का मतलब है हड्डी पूरी तरह दो टुकड़ों में टूट गई।",mr:"ग्रीनस्टिक फ्रॅक्चर म्हणजे हाड पूर्णपणे दोन तुकड्यांत तुटलं."}, answer:false, explain:{en:"Myth! A greenstick fracture is when the bone bends and cracks partially, without fully breaking apart.",hi:"मिथक! ग्रीनस्टिक फ्रैक्चर तब होता है जब हड्डी मुड़ती और आंशिक रूप से चटकती है, बिना पूरी तरह अलग हुए।",mr:"मिथक! ग्रीनस्टिक फ्रॅक्चर म्हणजे जेव्हा हाड वाकतं आणि अंशतः तडकतं, पूर्णपणे वेगळं न होता."} }
            ]}}
          ]},
          { label: "Lung Capacity",
            bonusAssignment: {
              title: { en: "Measure Your Breath", hi: "अपनी साँस मापो", mr: "तुमचा श्वास मोजा" },
              prompt: { en: "Take a deep breath and see how long you can comfortably hum or say 'aaah' in one breath. Record your time and take a photo of your result!",
                        hi: "एक गहरी साँस लो और देखो तुम एक साँस में कितनी देर आराम से गुनगुना सकते हो या 'आआह' कह सकते हो। अपना समय रिकॉर्ड करो और अपने नतीजे की फोटो लो!",
                        mr: "एक खोल श्वास घ्या आणि बघा तुम्ही एका श्वासात किती वेळ आरामात गुणगुणू शकता किंवा 'आआह' म्हणू शकता. तुमची वेळ नोंदवा आणि तुमच्या निकालाचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🫁", title: "Explore lung capacity", mentorVisual: "🫁",
              mentorIntro: {
                en: "Doctors measure how much air your lungs can hold — it's called lung capacity, and it tells us a lot about lung health!",
                hi: "डॉक्टर मापते हैं कि तुम्हारे फेफड़े कितनी हवा रख सकते हैं — इसे फेफड़ों की क्षमता कहते हैं, और यह फेफड़ों के स्वास्थ्य के बारे में बहुत कुछ बताता है!",
                mr: "डॉक्टर मोजतात की तुमची फुफ्फुसं किती हवा धरू शकतात — याला फुफ्फुसांची क्षमता म्हणतात, आणि हे फुफ्फुसांच्या आरोग्याबद्दल बरंच काही सांगतं!"
              },
              data: { visual: "🫁", animation: "breathing", hotspots: [
              { label:{en:"Total lung capacity",hi:"कुल फेफड़ों की क्षमता",mr:"एकूण फुफ्फुसांची क्षमता"}, fact:{en:"An average adult's lungs can hold about 6 liters of air at full capacity!",hi:"एक औसत वयस्क के फेफड़े पूरी क्षमता पर लगभग 6 लीटर हवा रख सकते हैं!",mr:"सरासरी प्रौढ व्यक्तीची फुफ्फुसं पूर्ण क्षमतेवर सुमारे 6 लिटर हवा धरू शकतात!"} },
              { label:{en:"Normal breathing",hi:"सामान्य साँस लेना",mr:"सामान्य श्वासोच्छ्वास"}, fact:{en:"During normal, relaxed breathing, you only use a small part of your total lung capacity!",hi:"सामान्य, आरामदायक साँस लेने के दौरान, तुम अपनी कुल फेफड़ों की क्षमता का केवल एक छोटा हिस्सा इस्तेमाल करते हो!",mr:"सामान्य, आरामशीर श्वासोच्छ्वासादरम्यान, तुम्ही तुमच्या एकूण फुफ्फुसांच्या क्षमतेचा फक्त एक लहान भाग वापरता!"} },
              { label:{en:"Athletes' lungs",hi:"खिलाड़ियों के फेफड़े",mr:"खेळाडूंची फुफ्फुसं"}, fact:{en:"Athletes often train to increase how efficiently their lungs use oxygen, not just their total size!",hi:"खिलाड़ी अक्सर यह बढ़ाने के लिए प्रशिक्षण लेते हैं कि उनके फेफड़े कितनी कुशलता से ऑक्सीजन का इस्तेमाल करते हैं, सिर्फ़ उनका कुल आकार नहीं!",mr:"खेळाडू अनेकदा त्यांची फुफ्फुसं किती कार्यक्षमतेने ऑक्सिजन वापरतात हे वाढवण्यासाठी प्रशिक्षण घेतात, फक्त त्यांचा एकूण आकार नाही!"} }
            ]}},
            { engine: "build-match", icon: "🫁", title: "Match breathing pattern to what it means", mentorVisual: "🩺",
              mentorIntro: {
                en: "Doctors can tell a lot from HOW someone breathes. Let's match some breathing patterns to what they might mean.",
                hi: "डॉक्टर इस बात से बहुत कुछ बता सकते हैं कि कोई कैसे साँस लेता है। चलो कुछ साँस लेने के पैटर्न को उनके मतलब से मैच करते हैं।",
                mr: "कोणीतरी कसा श्वास घेतो यावरून डॉक्टर बरंच काही सांगू शकतात. चला काही श्वासोच्छ्वासाचे नमुने त्यांच्या अर्थाशी जुळवूया."
              },
              data: { noStakes: false, zones: [
              { id: "normal", label: { en:"Slow, steady breathing at rest", hi:"आराम में धीमी, स्थिर साँस", mr:"विश्रांतीत हळू, स्थिर श्वासोच्छ्वास" } },
              { id: "fast", label: { en:"Fast, shallow breathing", hi:"तेज़, उथली साँस", mr:"जलद, उथळ श्वासोच्छ्वास" } },
              { id: "labored", label: { en:"Breathing that looks like hard work", hi:"साँस जो मेहनत जैसी लगे", mr:"श्वास जो मेहनत घेतल्यासारखा वाटतो" } }
            ], chips: ["normal","fast","labored"], facts: {
              normal:"That's healthy, relaxed breathing — everything working as expected!",
              fast:"Fast, shallow breathing could mean anxiety, exercise, or sometimes a health issue needing attention!",
              labored:"Labored breathing, where breathing looks difficult, is often a sign a doctor needs to check things out!"
            }}},
            { type: "Quiz", icon: "📝", title: "Lung capacity quiz",
              desc: { en:"A real quiz on lung capacity and what different breathing patterns can mean.", hi:"फेफड़ों की क्षमता और अलग-अलग साँस के पैटर्न का क्या मतलब हो सकता है, इस पर एक असली क्विज़।", mr:"फुफ्फुसांची क्षमता आणि वेगवेगळ्या श्वासोच्छ्वासाच्या नमुन्यांचा काय अर्थ असू शकतो, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Breathing and activity",
              desc: { en:"Why do you think your breathing changes so much between resting and exercising?", hi:"तुम्हें क्यों लगता है कि आराम करने और व्यायाम करने के बीच तुम्हारी साँस इतनी बदल जाती है?", mr:"विश्रांती घेणं आणि व्यायाम करणं यामध्ये तुमचा श्वासोच्छ्वास इतका का बदलतो असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Lung Capacity Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced lung capacity fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस फेफड़ों की क्षमता का तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत फुफ्फुसांच्या क्षमतेचं तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Spirometer?",hi:"स्पाइरोमीटर?",mr:"स्पायरोमीटर?"}, back:{en:"Doctors use a tool called a spirometer to precisely measure how much air someone can breathe in and out! 📏",hi:"डॉक्टर स्पाइरोमीटर नाम के एक उपकरण का इस्तेमाल यह सटीक रूप से मापने के लिए करते हैं कि कोई कितनी हवा अंदर-बाहर कर सकता है! 📏",mr:"डॉक्टर स्पायरोमीटर नावाच्या साधनाचा वापर करून एखादी व्यक्ती किती हवा आत-बाहेर घेऊ शकते हे अचूकपणे मोजतात! 📏"} },
              { front:{en:"Lung capacity changes?",hi:"फेफड़ों की क्षमता बदलती है?",mr:"फुफ्फुसांची क्षमता बदलते?"}, back:{en:"Lung capacity naturally grows as you grow taller and older, up until early adulthood! 📈",hi:"फेफड़ों की क्षमता स्वाभाविक रूप से बढ़ती है जैसे-जैसे तुम लंबे और बड़े होते हो, वयस्क होने की शुरुआत तक! 📈",mr:"तुम्ही उंच आणि मोठे होत जाल तसतशी फुफ्फुसांची क्षमता नैसर्गिकरित्या वाढते, प्रौढत्वाच्या सुरुवातीपर्यंत! 📈"} },
              { front:{en:"Altitude effect?",hi:"ऊँचाई का असर?",mr:"उंचीचा परिणाम?"}, back:{en:"People living at high altitudes often develop greater lung capacity, since the air has less oxygen up there! ⛰️",hi:"ऊँचाई पर रहने वाले लोग अक्सर ज़्यादा फेफड़ों की क्षमता विकसित करते हैं, क्योंकि वहाँ हवा में कम ऑक्सीजन होती है! ⛰️",mr:"उंचावर राहणाऱ्या लोकांची फुफ्फुसांची क्षमता अनेकदा जास्त विकसित होते, कारण तिथे हवेत कमी ऑक्सिजन असतो! ⛰️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Lung Capacity or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your lung capacity knowledge! Decide if each statement is true or a myth.",
                hi: "चलो फेफड़ों की क्षमता के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला फुफ्फुसांच्या क्षमतेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You always use 100% of your lung capacity, even while resting.",hi:"तुम हमेशा अपनी फेफड़ों की क्षमता का 100% इस्तेमाल करते हो, आराम में भी।",mr:"तुम्ही नेहमी तुमच्या फुफ्फुसांच्या क्षमतेचा 100% वापर करता, विश्रांतीतसुद्धा."}, answer:false, explain:{en:"Myth! Normal, resting breathing only uses a small fraction of your total lung capacity.",hi:"मिथक! सामान्य, आराम की साँस तुम्हारी कुल फेफड़ों की क्षमता का केवल एक छोटा हिस्सा इस्तेमाल करती है।",mr:"मिथक! सामान्य, विश्रांतीचा श्वासोच्छ्वास तुमच्या एकूण फुफ्फुसांच्या क्षमतेचा फक्त एक लहान भाग वापरतो."} },
              { text:{en:"Regular exercise can help improve how efficiently your lungs work.",hi:"नियमित व्यायाम तुम्हारे फेफड़ों के कितनी कुशलता से काम करने में सुधार लाने में मदद कर सकता है।",mr:"नियमित व्यायाम तुमची फुफ्फुसं किती कार्यक्षमतेने काम करतात हे सुधारण्यास मदत करू शकतो."}, answer:true, explain:{en:"True! Exercise trains your body to use oxygen more efficiently over time.",hi:"सच! व्यायाम तुम्हारे शरीर को समय के साथ ऑक्सीजन का ज़्यादा कुशलता से इस्तेमाल करने का प्रशिक्षण देता है।",mr:"खरं! व्यायाम तुमच्या शरीराला कालांतराने ऑक्सिजन अधिक कार्यक्षमतेने वापरण्याचं प्रशिक्षण देतो."} },
              { text:{en:"Fast, shallow breathing always means someone is seriously ill.",hi:"तेज़, उथली साँस का मतलब हमेशा है कि कोई गंभीर रूप से बीमार है।",mr:"जलद, उथळ श्वासोच्छ्वास म्हणजे नेहमी कोणीतरी गंभीरपणे आजारी आहे."}, answer:false, explain:{en:"Myth! Fast breathing can also just mean excitement, exercise, or anxiety — doctors look at the full picture before deciding.",hi:"मिथक! तेज़ साँस का मतलब सिर्फ़ उत्साह, व्यायाम, या चिंता भी हो सकता है — डॉक्टर फ़ैसला लेने से पहले पूरी तस्वीर देखते हैं।",mr:"मिथक! जलद श्वासोच्छ्वासाचा अर्थ फक्त उत्साह, व्यायाम, किंवा चिंता असूही शकतो — डॉक्टर निर्णय घेण्याआधी संपूर्ण चित्र बघतात."} }
            ]}}
          ]},
          { label: "Immune Response Sim",
            bonusAssignment: {
              title: { en: "Draw the Immune Battle", hi: "इम्यून लड़ाई बनाओ", mr: "रोगप्रतिकारक लढाई काढा" },
              prompt: { en: "Draw a comic showing white blood cells fighting off an invading germ, step by step. Take a photo and explain each step!",
                        hi: "एक कॉमिक बनाओ जो सफ़ेद रक्त कोशिकाओं को एक आक्रमणकारी कीटाणु से चरण-दर-चरण लड़ते हुए दिखाए। फोटो लो और हर चरण समझाओ!",
                        mr: "पांढऱ्या रक्तपेशी आक्रमण करणाऱ्या जंतूशी टप्प्याटप्प्याने लढताना दाखवणारी कॉमिक काढा. फोटो घ्या आणि प्रत्येक टप्पा समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🛡️", title: "Explore the immune response", mentorVisual: "🛡️",
              mentorIntro: {
                en: "When a germ invades, your body launches a real, organized response! Let's explore the stages step by step.",
                hi: "जब कोई कीटाणु आक्रमण करता है, तुम्हारा शरीर एक असली, संगठित प्रतिक्रिया शुरू करता है! चलो चरण-दर-चरण चरणों को एक्सप्लोर करते हैं।",
                mr: "जेव्हा जंतू आक्रमण करतो, तुमचं शरीर एक खरी, संघटित प्रतिक्रिया सुरू करतं! चला टप्प्याटप्प्याने टप्पे एक्सप्लोर करूया."
              },
              data: { visual: "🛡️", animation: "shield", hotspots: [
              { label:{en:"Detection",hi:"पहचान",mr:"शोध"}, fact:{en:"First, your body detects that a germ doesn't belong — like a security alarm going off!",hi:"पहले, तुम्हारा शरीर पहचानता है कि एक कीटाणु का यहाँ कोई काम नहीं — जैसे एक सुरक्षा अलार्म बज उठे!",mr:"प्रथम, तुमचं शरीर ओळखतं की एक जंतू इथला नाही — जसं सुरक्षा अलार्म वाजतो!"} },
              { label:{en:"Response",hi:"प्रतिक्रिया",mr:"प्रतिसाद"}, fact:{en:"White blood cells rush to the area and start attacking the invading germ directly!",hi:"सफ़ेद रक्त कोशिकाएँ उस जगह दौड़ती हैं और सीधे आक्रमणकारी कीटाणु पर हमला शुरू करती हैं!",mr:"पांढऱ्या रक्तपेशी त्या जागी धावतात आणि थेट आक्रमण करणाऱ्या जंतूवर हल्ला सुरू करतात!"} },
              { label:{en:"Memory",hi:"याददाश्त",mr:"स्मृती"}, fact:{en:"After winning, your body remembers this germ so it can respond even faster next time!",hi:"जीतने के बाद, तुम्हारा शरीर इस कीटाणु को याद रखता है ताकि अगली बार और भी तेज़ी से प्रतिक्रिया दे सके!",mr:"जिंकल्यानंतर, तुमचं शरीर हा जंतू लक्षात ठेवतं जेणेकरून पुढच्या वेळी अधिक वेगाने प्रतिसाद देऊ शकेल!"} }
            ]}},
            { engine: "build-match", icon: "🛡️", title: "Sequence the immune response", mentorVisual: "🩺",
              mentorIntro: {
                en: "Real immune responses happen in order! Let's see if you can match each stage to what happens at that point.",
                hi: "असली इम्यून प्रतिक्रियाएँ क्रम में होती हैं! देखते हैं क्या तुम हर चरण को उस बिंदु पर क्या होता है, उससे मैच कर सकते हो।",
                mr: "खऱ्या रोगप्रतिकारक प्रतिक्रिया क्रमाने होतात! बघूया तुम्ही प्रत्येक टप्पा त्या क्षणी काय होतं याच्याशी जुळवू शकता का."
              },
              data: { noStakes: false, zones: [
              { id: "detect", label: { en:"Germ first recognized as foreign", hi:"कीटाणु को पहली बार बाहरी पहचाना जाता है", mr:"जंतू प्रथम परका म्हणून ओळखला जातो" } },
              { id: "attack", label: { en:"White blood cells attack the germ", hi:"सफ़ेद रक्त कोशिकाएँ कीटाणु पर हमला करती हैं", mr:"पांढऱ्या रक्तपेशी जंतूवर हल्ला करतात" } },
              { id: "remember", label: { en:"Body stores a memory of this germ", hi:"शरीर इस कीटाणु की याद संग्रहीत करता है", mr:"शरीर या जंतूची आठवण साठवतं" } }
            ], chips: ["detect","attack","remember"], facts: {
              detect:"That's detection — the very first stage!",
              attack:"That's the active response — germ-fighting in progress!",
              remember:"That's immune memory — protection for next time!"
            }}},
            { type: "Quiz", icon: "📝", title: "Immune response quiz",
              desc: { en:"A real quiz on the stages of your body's immune response.", hi:"तुम्हारे शरीर की इम्यून प्रतिक्रिया के चरणों पर एक असली क्विज़।", mr:"तुमच्या शरीराच्या रोगप्रतिकारक प्रतिक्रियेच्या टप्प्यांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Memory and vaccines",
              desc: { en:"How do you think immune memory connects to why vaccines work?", hi:"तुम्हें क्या लगता है इम्यून याददाश्त वैक्सीन के काम करने से कैसे जुड़ी है?", mr:"रोगप्रतिकारक स्मृतीचा लस काम करण्याशी कसा संबंध आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Immune Response Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced immune system fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस इम्यून सिस्टम तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत रोगप्रतिकारक शक्तीचं तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Different soldier types?",hi:"अलग-अलग सैनिक प्रकार?",mr:"वेगवेगळे सैनिक प्रकार?"}, back:{en:"There are several different types of white blood cells, each with its own special job in fighting germs! ⚔️",hi:"सफ़ेद रक्त कोशिकाओं के कई अलग-अलग प्रकार हैं, हर एक का कीटाणुओं से लड़ने में अपना खास काम है! ⚔️",mr:"पांढऱ्या रक्तपेशींचे अनेक वेगवेगळे प्रकार आहेत, प्रत्येकाचं जंतूंशी लढण्यात स्वतःचं खास काम आहे! ⚔️"} },
              { front:{en:"Fever's purpose?",hi:"बुखार का मकसद?",mr:"तापाचा उद्देश?"}, back:{en:"A fever actually helps your immune response work better — many germs struggle in higher temperatures! 🌡️",hi:"बुखार असल में तुम्हारी इम्यून प्रतिक्रिया को बेहतर काम करने में मदद करता है — कई कीटाणु ज़्यादा तापमान में संघर्ष करते हैं! 🌡️",mr:"ताप खरंतर तुमच्या रोगप्रतिकारक प्रतिक्रियेला चांगलं काम करण्यास मदत करतो — अनेक जंतूंना जास्त तापमानात त्रास होतो! 🌡️"} },
              { front:{en:"How long does memory last?",hi:"याददाश्त कितनी देर टिकती है?",mr:"स्मृती किती काळ टिकते?"}, back:{en:"Immune memory for some germs can last for years, even decades — that's part of how lifelong immunity works! ⏳",hi:"कुछ कीटाणुओं के लिए इम्यून याददाश्त सालों, यहाँ तक कि दशकों तक टिक सकती है — यही जीवनभर की इम्युनिटी काम करने का हिस्सा है! ⏳",mr:"काही जंतूंसाठी रोगप्रतिकारक स्मृती वर्षानुवर्षे, अगदी दशकांपर्यंत टिकू शकते — आयुष्यभराची रोगप्रतिकारशक्ती अशीच काम करते! ⏳"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Immune Response or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your immune response knowledge! Decide if each statement is true or a myth.",
                hi: "चलो इम्यून प्रतिक्रिया के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रोगप्रतिकारक प्रतिक्रियेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Your immune response happens in a random order every time.",hi:"तुम्हारी इम्यून प्रतिक्रिया हर बार बेतरतीब क्रम में होती है।",mr:"तुमची रोगप्रतिकारक प्रतिक्रिया दरवेळी यादृच्छिक क्रमाने होते."}, answer:false, explain:{en:"Myth! The immune response follows a fairly consistent sequence — detect, respond, then remember.",hi:"मिथक! इम्यून प्रतिक्रिया एक काफ़ी नियमित क्रम का पालन करती है — पहचानना, प्रतिक्रिया देना, फिर याद रखना।",mr:"मिथक! रोगप्रतिकारक प्रतिक्रिया एका बऱ्यापैकी सुसंगत क्रमाचं पालन करते — ओळखणं, प्रतिसाद देणं, मग लक्षात ठेवणं."} },
              { text:{en:"Your body can remember germs it has fought before.",hi:"तुम्हारा शरीर उन कीटाणुओं को याद रख सकता है जिनसे वह पहले लड़ चुका है।",mr:"तुमचं शरीर पूर्वी लढलेले जंतू लक्षात ठेवू शकतं."}, answer:true, explain:{en:"True! This immune memory is exactly why you often don't get the same illness twice, or fight it off faster.",hi:"सच! यही इम्यून याददाश्त है जिसकी वजह से अक्सर तुम्हें एक ही बीमारी दोबारा नहीं होती, या तुम इसे तेज़ी से हरा देते हो।",mr:"खरं! हीच रोगप्रतिकारक स्मृती आहे ज्यामुळे अनेकदा तुम्हाला तोच आजार पुन्हा होत नाही, किंवा तुम्ही तो जलद हरवता."} },
              { text:{en:"White blood cells all do exactly the same job.",hi:"सभी सफ़ेद रक्त कोशिकाएँ बिल्कुल एक ही काम करती हैं।",mr:"सर्व पांढऱ्या रक्तपेशी अगदी सारखंच काम करतात."}, answer:false, explain:{en:"Myth! Different types of white blood cells have different specialized jobs in fighting off germs.",hi:"मिथक! सफ़ेद रक्त कोशिकाओं के अलग-अलग प्रकारों के कीटाणुओं से लड़ने में अलग-अलग विशेष काम हैं।",mr:"मिथक! पांढऱ्या रक्तपेशींच्या वेगवेगळ्या प्रकारांची जंतूंशी लढण्यात वेगवेगळी खास कामं आहेत."} }
            ]}}
          ]},
          { label: "Nervous System Relay",
            bonusAssignment: {
              title: { en: "Reaction Time Test", hi: "प्रतिक्रिया समय परीक्षण", mr: "प्रतिक्रिया वेळ चाचणी" },
              prompt: { en: "With a friend or family member, test your reaction time by having them drop a ruler for you to catch. Try 3 times and take a photo of your results!",
                        hi: "किसी दोस्त या परिवार के सदस्य के साथ, अपने प्रतिक्रिया समय का परीक्षण करो, उनसे एक रूलर गिराने के लिए कहो जिसे तुम्हें पकड़ना है। 3 बार कोशिश करो और अपने नतीजों की फोटो लो!",
                        mr: "मित्र किंवा कुटुंबातील सदस्यासोबत, तुमची प्रतिक्रिया वेळ तपासा, त्यांना एक फूटपट्टी टाकायला सांगा जी तुम्हाला पकडायची आहे. 3 वेळा प्रयत्न करा आणि तुमच्या निकालांचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "⚡", title: "Explore nerve signals", mentorVisual: "⚡",
              mentorIntro: {
                en: "Your nervous system sends messages faster than you can imagine! Let's explore how signals travel through your body.",
                hi: "तुम्हारा नर्वस सिस्टम संदेश उतनी तेज़ी से भेजता है जितनी तुम कल्पना नहीं कर सकते! चलो एक्सप्लोर करते हैं संकेत तुम्हारे शरीर में कैसे यात्रा करते हैं।",
                mr: "तुमची चेतासंस्था तुम्हाला कल्पनाही करता येणार नाही इतक्या वेगाने संदेश पाठवते! चला एक्सप्लोर करूया संकेत तुमच्या शरीरातून कसे प्रवास करतात."
              },
              data: { visual: "⚡", animation: "nervesignal", hotspots: [
              { label:{en:"Speed of signals",hi:"संकेतों की गति",mr:"संकेतांचा वेग"}, fact:{en:"Some nerve signals travel at speeds up to 120 meters per second — faster than a race car!",hi:"कुछ नर्व संकेत 120 मीटर प्रति सेकंड तक की गति से यात्रा करते हैं — एक रेस कार से भी तेज़!",mr:"काही चेता संकेत ताशी 120 मीटर प्रति सेकंद वेगाने प्रवास करतात — रेस कारपेक्षाही वेगवान!"} },
              { label:{en:"Reflexes",hi:"रिफ्लेक्स",mr:"प्रतिक्षिप्त क्रिया"}, fact:{en:"Some reflexes, like pulling your hand away from something hot, happen before your brain even fully processes it!",hi:"कुछ रिफ्लेक्स, जैसे गर्म चीज़ से हाथ खींचना, तुम्हारे दिमाग़ के पूरी तरह इसे प्रोसेस करने से पहले ही हो जाते हैं!",mr:"काही प्रतिक्षिप्त क्रिया, जसं गरम वस्तूपासून हात मागे घेणं, तुमचा मेंदू ते पूर्णपणे प्रोसेस करण्याआधीच होतात!"} },
              { label:{en:"Nerve network",hi:"नर्व नेटवर्क",mr:"चेता नेटवर्क"}, fact:{en:"Your nervous system has a network of nerves that would stretch for thousands of kilometers if laid end to end!",hi:"तुम्हारे नर्वस सिस्टम में नसों का एक नेटवर्क है जो अगर एक सिरे से दूसरे सिरे तक बिछाया जाए तो हज़ारों किलोमीटर तक फैलेगा!",mr:"तुमच्या चेतासंस्थेत चेतांचं एक नेटवर्क आहे जे एका टोकापासून दुसऱ्या टोकापर्यंत मांडलं तर हजारो किलोमीटरपर्यंत पसरेल!"} }
            ]}},
            { engine: "build-match", icon: "⚡", title: "Match nerve signal path in order", mentorVisual: "🩺",
              mentorIntro: {
                en: "A nerve signal follows a real path from the body to the brain and back. Let's put the stages in the right order.",
                hi: "एक नर्व संकेत शरीर से दिमाग़ तक और वापस एक असली रास्ता अपनाता है। चलो चरणों को सही क्रम में रखते हैं।",
                mr: "चेता संकेत शरीरापासून मेंदूपर्यंत आणि परत एक खरा मार्ग अनुसरतो. चला टप्पे योग्य क्रमाने ठेवूया."
              },
              data: { noStakes: false, zones: [
              { id: "sense", label: { en:"You touch something hot", hi:"तुम कुछ गर्म छूते हो", mr:"तुम्ही काहीतरी गरम स्पर्श करता" } },
              { id: "travel", label: { en:"Signal travels up nerves to the brain", hi:"संकेत नसों से होते हुए दिमाग़ तक जाता है", mr:"संकेत चेतांमधून मेंदूपर्यंत जातो" } },
              { id: "react", label: { en:"Brain sends a signal back to move your hand", hi:"दिमाग़ हाथ हिलाने के लिए वापस संकेत भेजता है", mr:"मेंदू हात हलवण्यासाठी परत संकेत पाठवतो" } }
            ], chips: ["sense","travel","react"], facts: {
              sense:"That's the very first stage — sensing something!",
              travel:"That's the signal traveling toward your brain!",
              react:"That's your brain sending back the reaction command!"
            }}},
            { type: "Quiz", icon: "📝", title: "Nervous system quiz",
              desc: { en:"A real quiz on how nerve signals travel through your body.", hi:"नर्व संकेत तुम्हारे शरीर में कैसे यात्रा करते हैं, इस पर एक असली क्विज़।", mr:"चेता संकेत तुमच्या शरीरातून कसे प्रवास करतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Reflexes and safety",
              desc: { en:"Why do you think it's helpful that some reflexes happen before your brain fully processes what's going on?", hi:"तुम्हें क्यों लगता है कि यह मददगार है कि कुछ रिफ्लेक्स तुम्हारे दिमाग़ के पूरी तरह समझने से पहले ही हो जाते हैं?", mr:"तुमचा मेंदू पूर्णपणे समजून घेण्याआधीच काही प्रतिक्षिप्त क्रिया होणं उपयुक्त का आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Nervous System Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced nervous system fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस नर्वस सिस्टम तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत चेतासंस्थेचं तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Spinal cord shortcuts?",hi:"स्पाइनल कॉर्ड शॉर्टकट?",mr:"पाठीच्या कण्याचे शॉर्टकट?"}, back:{en:"Some reflexes use a shortcut through your spinal cord, skipping the brain entirely for extra-fast reactions! ⚡",hi:"कुछ रिफ्लेक्स तुम्हारी स्पाइनल कॉर्ड से एक शॉर्टकट का इस्तेमाल करते हैं, अतिरिक्त तेज़ प्रतिक्रियाओं के लिए दिमाग़ को पूरी तरह छोड़ देते हैं! ⚡",mr:"काही प्रतिक्षिप्त क्रिया तुमच्या पाठीच्या कण्यातून एक शॉर्टकट वापरतात, अतिरिक्त वेगवान प्रतिक्रियांसाठी मेंदूला पूर्णपणे वगळतात! ⚡"} },
              { front:{en:"Trillions of connections?",hi:"खरबों कनेक्शन?",mr:"ट्रिलियन जोडण्या?"}, back:{en:"Your brain and nervous system together have trillions of connections between nerve cells! 🔗",hi:"तुम्हारे दिमाग़ और नर्वस सिस्टम में मिलकर नर्व कोशिकाओं के बीच खरबों कनेक्शन हैं! 🔗",mr:"तुमचा मेंदू आणि चेतासंस्था मिळून चेतापेशींमध्ये ट्रिलियन जोडण्या आहेत! 🔗"} },
              { front:{en:"Practice speeds reflexes?",hi:"अभ्यास रिफ्लेक्स को तेज़ करता है?",mr:"सराव प्रतिक्षिप्त क्रिया वेगवान करतो?"}, back:{en:"With practice, like in sports, your nervous system can actually get faster at certain specific reactions! 🏃",hi:"अभ्यास के साथ, जैसे खेलों में, तुम्हारा नर्वस सिस्टम असल में कुछ खास प्रतिक्रियाओं में तेज़ हो सकता है! 🏃",mr:"सरावाने, जसं खेळांमध्ये, तुमची चेतासंस्था खरंच काही विशिष्ट प्रतिक्रियांमध्ये वेगवान होऊ शकते! 🏃"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Nervous System or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your nervous system knowledge! Decide if each statement is true or a myth.",
                hi: "चलो नर्वस सिस्टम के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला चेतासंस्थेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Every single reflex has to travel all the way to your brain first.",hi:"हर एक रिफ्लेक्स को पहले तुम्हारे दिमाग़ तक पूरी तरह जाना पड़ता है।",mr:"प्रत्येक प्रतिक्षिप्त क्रियेला आधी तुमच्या मेंदूपर्यंत पूर्णपणे जावं लागतं."}, answer:false, explain:{en:"Myth! Some reflexes use a spinal cord shortcut, reacting even before the brain is fully involved.",hi:"मिथक! कुछ रिफ्लेक्स स्पाइनल कॉर्ड शॉर्टकट का इस्तेमाल करते हैं, दिमाग़ के पूरी तरह शामिल होने से पहले ही प्रतिक्रिया देते हैं।",mr:"मिथक! काही प्रतिक्षिप्त क्रिया पाठीच्या कण्याचा शॉर्टकट वापरतात, मेंदू पूर्णपणे सामील होण्याआधीच प्रतिक्रिया देतात."} },
              { text:{en:"Nerve signals travel extremely fast compared to many everyday things.",hi:"नर्व संकेत कई रोज़मर्रा की चीज़ों की तुलना में बेहद तेज़ी से यात्रा करते हैं।",mr:"चेता संकेत अनेक दैनंदिन गोष्टींच्या तुलनेत अत्यंत वेगाने प्रवास करतात."}, answer:true, explain:{en:"True! Some nerve signals travel fast enough to rival or beat everyday vehicles like cars.",hi:"सच! कुछ नर्व संकेत इतनी तेज़ी से यात्रा करते हैं कि कारों जैसी रोज़मर्रा की गाड़ियों को टक्कर दे सकते हैं या हरा सकते हैं।",mr:"खरं! काही चेता संकेत इतक्या वेगाने प्रवास करतात की कारसारख्या दैनंदिन वाहनांना टक्कर देऊ शकतात किंवा मागे टाकू शकतात."} },
              { text:{en:"Your nervous system only handles voluntary movements, nothing automatic.",hi:"तुम्हारा नर्वस सिस्टम केवल स्वैच्छिक हरकतों को संभालता है, कुछ भी स्वचालित नहीं।",mr:"तुमची चेतासंस्था फक्त ऐच्छिक हालचाली हाताळते, काहीही स्वयंचलित नाही."}, answer:false, explain:{en:"Myth! Your nervous system also controls automatic things like your heartbeat and breathing, without you thinking about it.",hi:"मिथक! तुम्हारा नर्वस सिस्टम स्वचालित चीज़ों को भी नियंत्रित करता है जैसे तुम्हारी धड़कन और साँस लेना, बिना तुम्हारे इसके बारे में सोचे।",mr:"मिथक! तुमची चेतासंस्था तुमची धडधड आणि श्वासोच्छ्वासासारख्या स्वयंचलित गोष्टींवरही नियंत्रण ठेवते, तुम्ही त्याबद्दल विचार न करताही."} }
            ]}}
          ]},
          { label: "Digestive Enzyme Matching",
            bonusAssignment: {
              title: { en: "Enzyme Explainer Card", hi: "एंज़ाइम समझाने वाला कार्ड", mr: "एंझाइम समजावणारं कार्ड" },
              prompt: { en: "Pick one digestive enzyme and create a simple explainer card about what food it helps break down. Take a photo!",
                        hi: "एक पाचन एंज़ाइम चुनो और उसके बारे में एक साधा समझाने वाला कार्ड बनाओ कि यह किस खाने को तोड़ने में मदद करता है। फोटो लो!",
                        mr: "एक पाचक एंझाइम निवडा आणि तो कोणतं अन्न तोडण्यास मदत करतो याबद्दल एक साधं समजावणारं कार्ड तयार करा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧪", title: "Explore digestive enzymes", mentorVisual: "🧪",
              mentorIntro: {
                en: "Enzymes are tiny helpers that break your food down into pieces your body can actually use! Let's meet a few.",
                hi: "एंज़ाइम छोटे मददगार हैं जो तुम्हारे खाने को उन टुकड़ों में तोड़ते हैं जिन्हें तुम्हारा शरीर असल में इस्तेमाल कर सकता है! चलो कुछ से मिलते हैं।",
                mr: "एंझाइम हे छोटे मदतनीस आहेत जे तुमचं अन्न तुमचं शरीर खरंच वापरू शकेल अशा तुकड्यांमध्ये तोडतात! चला काहींना भेटूया."
              },
              data: { visual: "🧪", hotspots: [
              { label:{en:"Amylase",hi:"एमाइलेज़",mr:"अमायलेज"}, fact:{en:"Amylase, found in your saliva, starts breaking down starchy foods like bread the moment you start chewing!",hi:"एमाइलेज़, जो तुम्हारी लार में पाया जाता है, स्टार्च वाले खाने जैसे ब्रेड को उसी पल तोड़ना शुरू कर देता है जब तुम चबाना शुरू करते हो!",mr:"अमायलेज, जो तुमच्या लाळेत असतं, ब्रेडसारखे स्टार्चयुक्त पदार्थ तुम्ही चावायला सुरुवात करता त्याच क्षणी तोडायला सुरुवात करतं!"} },
              { label:{en:"Pepsin",hi:"पेप्सिन",mr:"पेप्सिन"}, fact:{en:"Pepsin, active in your stomach, breaks down proteins from foods like eggs and meat!",hi:"पेप्सिन, जो तुम्हारे पेट में सक्रिय है, अंडे और मांस जैसे खाने से प्रोटीन को तोड़ता है!",mr:"पेप्सिन, जो तुमच्या पोटात सक्रिय असतं, अंडी आणि मांसासारख्या पदार्थांमधलं प्रथिन तोडतं!"} },
              { label:{en:"Lipase",hi:"लाइपेज़",mr:"लायपेज"}, fact:{en:"Lipase helps break down fats, so your body can use them for energy and other important jobs!",hi:"लाइपेज़ वसा को तोड़ने में मदद करता है, ताकि तुम्हारा शरीर उन्हें ऊर्जा और अन्य ज़रूरी कामों के लिए इस्तेमाल कर सके!",mr:"लायपेज चरबी तोडण्यास मदत करतं, जेणेकरून तुमचं शरीर त्यांना ऊर्जा आणि इतर महत्त्वाच्या कामांसाठी वापरू शकेल!"} }
            ]}},
            { engine: "build-match", icon: "🧪", title: "Match enzyme to what it breaks down", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's see if you can correctly match each enzyme to the type of food it works on — real precision needed here!",
                hi: "देखते हैं क्या तुम हर एंज़ाइम को उस तरह के खाने से सही तरीके से मैच कर सकते हो जिस पर वह काम करता है — यहाँ असली सटीकता चाहिए!",
                mr: "बघूया तुम्ही प्रत्येक एंझाइम तो ज्या प्रकारच्या अन्नावर काम करतो त्याच्याशी बरोबर जुळवू शकता का — इथे खरी अचूकता हवी!"
              },
              data: { noStakes: false, zones: [
              { id: "amylase", label: { en:"Starchy foods (bread, rice)", hi:"स्टार्च वाले खाने (ब्रेड, चावल)", mr:"स्टार्चयुक्त पदार्थ (ब्रेड, तांदूळ)" } },
              { id: "pepsin", label: { en:"Protein foods (eggs, meat)", hi:"प्रोटीन वाले खाने (अंडे, मांस)", mr:"प्रथिनयुक्त पदार्थ (अंडी, मांस)" } },
              { id: "lipase", label: { en:"Fatty foods (oils, butter)", hi:"वसा वाले खाने (तेल, मक्खन)", mr:"चरबीयुक्त पदार्थ (तेल, लोणी)" } }
            ], chips: ["amylase","pepsin","lipase"], facts: {
              amylase:"That's amylase, breaking down starches!",
              pepsin:"That's pepsin, breaking down proteins!",
              lipase:"That's lipase, breaking down fats!"
            }}},
            { type: "Quiz", icon: "📝", title: "Enzyme matching quiz",
              desc: { en:"A real quiz on which enzyme breaks down which type of food.", hi:"कौन सा एंज़ाइम किस तरह के खाने को तोड़ता है, इस पर एक असली क्विज़।", mr:"कोणतं एंझाइम कोणत्या प्रकारचं अन्न तोडतं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Enzymes as tiny workers",
              desc: { en:"Why do you think your body needs different enzymes for different types of food, instead of just one for everything?", hi:"तुम्हें क्यों लगता है कि तुम्हारे शरीर को अलग-अलग तरह के खाने के लिए अलग-अलग एंज़ाइम चाहिए, सब कुछ के लिए सिर्फ़ एक नहीं?", mr:"तुमच्या शरीराला वेगवेगळ्या प्रकारच्या अन्नासाठी वेगवेगळी एंझाइम्स का लागतात असं तुम्हाला वाटतं, सर्वांसाठी फक्त एकच का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Enzyme Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced enzyme fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस एंज़ाइम तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत एंझाइम तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Enzymes are reusable?",hi:"एंज़ाइम फिर से इस्तेमाल हो सकते हैं?",mr:"एंझाइम्स पुन्हा वापरता येतात?"}, back:{en:"Enzymes aren't used up — they can help break down food molecules again and again! ♻️",hi:"एंज़ाइम खत्म नहीं होते — वे बार-बार खाने के अणुओं को तोड़ने में मदद कर सकते हैं! ♻️",mr:"एंझाइम्स संपत नाहीत — ती वारंवार अन्नाचे रेणू तोडण्यास मदत करू शकतात! ♻️"} },
              { front:{en:"Temperature matters?",hi:"तापमान मायने रखता है?",mr:"तापमान महत्त्वाचं आहे?"}, back:{en:"Enzymes work best at your body's normal temperature — that's one reason a very high fever can cause problems! 🌡️",hi:"एंज़ाइम तुम्हारे शरीर के सामान्य तापमान पर सबसे अच्छे से काम करते हैं — यही एक वजह है कि बहुत तेज़ बुखार समस्याएँ पैदा कर सकता है! 🌡️",mr:"एंझाइम्स तुमच्या शरीराच्या सामान्य तापमानाला सर्वोत्तम काम करतात — खूप जास्त ताप समस्या निर्माण करू शकतो याचं हे एक कारण आहे! 🌡️"} },
              { front:{en:"Lactose intolerance?",hi:"लैक्टोज़ असहिष्णुता?",mr:"लॅक्टोज असहिष्णुता?"}, back:{en:"People who are lactose intolerant are actually missing (or low on) a specific enzyme called lactase! 🥛",hi:"जो लोग लैक्टोज़ असहिष्णु हैं उनमें असल में लैक्टेज़ नाम का एक खास एंज़ाइम की कमी है (या बहुत कम है)! 🥛",mr:"जे लोक लॅक्टोज असहिष्णु आहेत त्यांच्यात खरंतर लॅक्टेज नावाच्या एका खास एंझाइमची कमतरता आहे (किंवा खूप कमी आहे)! 🥛"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Enzymes or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your enzyme knowledge! Decide if each statement is true or a myth.",
                hi: "चलो एंज़ाइम के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला एंझाइमच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"One single enzyme can break down all types of food equally well.",hi:"एक अकेला एंज़ाइम सभी तरह के खाने को समान रूप से अच्छे से तोड़ सकता है।",mr:"एकच एंझाइम सर्व प्रकारचं अन्न सारखंच चांगलं तोडू शकतं."}, answer:false, explain:{en:"Myth! Different enzymes specialize in breaking down specific types of food, like starches, proteins, or fats.",hi:"मिथक! अलग-अलग एंज़ाइम खास तरह के खाने को तोड़ने में विशेषज्ञ होते हैं, जैसे स्टार्च, प्रोटीन, या वसा।",mr:"मिथक! वेगवेगळी एंझाइम्स विशिष्ट प्रकारचं अन्न तोडण्यात तज्ज्ञ असतात, जसं स्टार्च, प्रथिनं, किंवा चरबी."} },
              { text:{en:"Digestion of starchy food actually begins in your mouth.",hi:"स्टार्च वाले खाने का पाचन असल में तुम्हारे मुँह में शुरू होता है।",mr:"स्टार्चयुक्त अन्नाचं पचन खरंच तुमच्या तोंडात सुरू होतं."}, answer:true, explain:{en:"True! Amylase in your saliva starts breaking down starches the moment you start chewing.",hi:"सच! तुम्हारी लार में एमाइलेज़ उसी पल स्टार्च को तोड़ना शुरू कर देता है जब तुम चबाना शुरू करते हो।",mr:"खरं! तुमच्या लाळेतील अमायलेज तुम्ही चावायला सुरुवात करता त्याच क्षणी स्टार्च तोडायला सुरुवात करतं."} },
              { text:{en:"Enzymes get destroyed after breaking down one piece of food.",hi:"एंज़ाइम एक टुकड़ा खाना तोड़ने के बाद नष्ट हो जाते हैं।",mr:"एंझाइम्स एक तुकडा अन्न तोडल्यानंतर नष्ट होतात."}, answer:false, explain:{en:"Myth! Enzymes aren't used up in the process and can help break down food molecules again and again.",hi:"मिथक! एंज़ाइम इस प्रक्रिया में खत्म नहीं होते और बार-बार खाने के अणुओं को तोड़ने में मदद कर सकते हैं।",mr:"मिथक! एंझाइम्स या प्रक्रियेत संपत नाहीत आणि वारंवार अन्नाचे रेणू तोडण्यास मदत करू शकतात."} }
            ]}}
          ]},
          { label: "Symptom Sorting",
            bonusAssignment: {
              title: { en: "Symptom Sorting Chart", hi: "लक्षण छाँटने वाला चार्ट", mr: "लक्षण वर्गीकरण तक्ता" },
              prompt: { en: "Make a chart sorting 5 common symptoms into 'can wait for a home remedy' vs 'should see a doctor soon.' Take a photo and explain your reasoning!",
                        hi: "5 आम लक्षणों को 'घरेलू उपाय के लिए इंतज़ार कर सकते हैं' बनाम 'जल्द डॉक्टर को दिखाना चाहिए' में छाँटते हुए एक चार्ट बनाओ। फोटो लो और अपनी सोच समझाओ!",
                        mr: "5 सामान्य लक्षणं 'घरगुती उपायासाठी वाट बघू शकतो' विरुद्ध 'लवकर डॉक्टरांना दाखवायला हवं' मध्ये वर्गीकृत करणारा तक्ता बनवा. फोटो घ्या आणि तुमचं तर्क समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🤒", title: "Explore common symptoms", mentorVisual: "🤒",
              mentorIntro: {
                en: "Part of a doctor's job is figuring out how urgent a symptom is. Let's explore a few common ones.",
                hi: "डॉक्टर के काम का एक हिस्सा यह पता लगाना है कि एक लक्षण कितना अत्यावश्यक है। चलो कुछ आम लक्षणों को एक्सप्लोर करते हैं।",
                mr: "डॉक्टरांच्या कामाचा एक भाग म्हणजे एखादं लक्षण किती तातडीचं आहे हे शोधणं. चला काही सामान्य लक्षणं एक्सप्लोर करूया."
              },
              data: { visual: "🤒", hotspots: [
              { label:{en:"Mild headache",hi:"हल्का सिरदर्द",mr:"सौम्य डोकेदुखी"}, fact:{en:"A mild headache often just needs rest and water — usually not urgent!",hi:"हल्के सिरदर्द को अक्सर सिर्फ़ आराम और पानी चाहिए — आमतौर पर अत्यावश्यक नहीं!",mr:"सौम्य डोकेदुखीला अनेकदा फक्त विश्रांती आणि पाणी हवं असतं — सहसा तातडीचं नाही!"} },
              { label:{en:"High fever for days",hi:"कई दिनों तक तेज़ बुखार",mr:"अनेक दिवस तीव्र ताप"}, fact:{en:"A high fever lasting several days is a sign that a doctor should take a closer look!",hi:"कई दिनों तक रहने वाला तेज़ बुखार एक संकेत है कि डॉक्टर को नज़दीक से देखना चाहिए!",mr:"अनेक दिवस टिकणारा तीव्र ताप हे एक लक्षण आहे की डॉक्टरांनी बारकाईने बघावं!"} },
              { label:{en:"Sudden severe pain",hi:"अचानक गंभीर दर्द",mr:"अचानक तीव्र वेदना"}, fact:{en:"Sudden, severe pain anywhere in the body should always be checked by a doctor right away!",hi:"शरीर में कहीं भी अचानक, गंभीर दर्द को हमेशा तुरंत डॉक्टर से जँचवाना चाहिए!",mr:"शरीरात कुठेही अचानक, तीव्र वेदना नेहमी लगेच डॉक्टरांकडून तपासून घ्यायला हवी!"} }
            ]}},
            { engine: "build-match", icon: "🤒", title: "Sort symptoms by urgency", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice sorting symptoms by how urgent they are — this is real clinical thinking!",
                hi: "चलो लक्षणों को उनकी तात्कालिकता के अनुसार छाँटने का अभ्यास करते हैं — यह असली क्लिनिकल सोच है!",
                mr: "चला लक्षणं ती किती तातडीची आहेत यानुसार वर्गीकृत करण्याचा सराव करूया — हे खरं क्लिनिकल विचार आहे!"
              },
              data: { noStakes: false, zones: [
              { id: "mild", label: { en:"Mild scratchy throat", hi:"हल्का खराब गला", mr:"सौम्य खवखवणारा घसा" } },
              { id: "moderate", label: { en:"Fever lasting more than 3 days", hi:"3 दिन से ज़्यादा बुखार", mr:"3 दिवसांपेक्षा जास्त ताप" } },
              { id: "urgent", label: { en:"Sudden difficulty breathing", hi:"अचानक साँस लेने में तकलीफ़", mr:"अचानक श्वास घेण्यास त्रास" } }
            ], chips: ["mild","moderate","urgent"], facts: {
              mild:"That's a mild symptom — usually just needs rest and time!",
              moderate:"That needs a doctor visit soon — worth checking out!",
              urgent:"That's an urgent symptom — needs medical help right away!"
            }}},
            { type: "Quiz", icon: "📝", title: "Symptom sorting quiz",
              desc: { en:"A real quiz on sorting symptoms by how urgent they are.", hi:"लक्षणों को उनकी तात्कालिकता के अनुसार छाँटने पर एक असली क्विज़।", mr:"लक्षणं त्यांच्या तातडीनुसार वर्गीकृत करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "When in doubt",
              desc: { en:"If you're ever unsure whether a symptom is serious, what do you think the safest thing to do is?", hi:"अगर तुम्हें कभी यकीन न हो कि कोई लक्षण गंभीर है, तो तुम्हें क्या लगता है सबसे सुरक्षित काम क्या है?", mr:"जर तुम्हाला कधी खात्री नसेल की एखादं लक्षण गंभीर आहे, तर सर्वात सुरक्षित काय करावं असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Symptom Sorting Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about symptoms!",
                hi: "चलो और गहराई में जाते हैं — लक्षणों के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — लक्षणांबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Triage?",hi:"ट्राएज?",mr:"ट्रायेज?"}, back:{en:"Hospitals use a system called triage to quickly sort patients by how urgently they need help! 🏥",hi:"अस्पताल मरीज़ों को जल्दी से छाँटने के लिए ट्राएज नाम की एक प्रणाली इस्तेमाल करते हैं कि उन्हें कितनी तात्कालिकता से मदद चाहिए! 🏥",mr:"रुग्णालयं रुग्णांना त्यांना किती तातडीने मदत हवी आहे यानुसार पटकन वर्गीकृत करण्यासाठी ट्रायेज नावाची प्रणाली वापरतात! 🏥"} },
              { front:{en:"Same symptom, different causes?",hi:"एक ही लक्षण, अलग-अलग कारण?",mr:"तेच लक्षण, वेगवेगळी कारणं?"}, back:{en:"The exact same symptom, like a headache, can have many different causes — mild or serious! 🧩",hi:"बिल्कुल एक ही लक्षण, जैसे सिरदर्द, के कई अलग-अलग कारण हो सकते हैं — हल्के या गंभीर! 🧩",mr:"अगदी तेच लक्षण, जसं डोकेदुखी, याची अनेक वेगवेगळी कारणं असू शकतात — सौम्य किंवा गंभीर! 🧩"} },
              { front:{en:"Combination matters?",hi:"संयोजन मायने रखता है?",mr:"संयोजन महत्त्वाचं आहे?"}, back:{en:"Doctors often look at a COMBINATION of symptoms together, not just one alone, to understand what's really going on! 🔍",hi:"डॉक्टर अक्सर यह समझने के लिए लक्षणों के एक संयोजन को एक साथ देखते हैं, सिर्फ़ एक अकेला नहीं, कि असल में क्या हो रहा है! 🔍",mr:"डॉक्टर अनेकदा खरंच काय होत आहे हे समजून घेण्यासाठी लक्षणांचं एक संयोजन एकत्र बघतात, फक्त एकच नाही! 🔍"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Symptom Sorting or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your symptom-sorting knowledge! Decide if each statement is true or a myth.",
                hi: "चलो लक्षण छाँटने के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला लक्षण वर्गीकरणाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A symptom that lasts only a short time is always something to ignore.",hi:"एक लक्षण जो थोड़ी देर के लिए रहता है, हमेशा नज़रअंदाज़ करने वाली चीज़ है।",mr:"थोडा वेळ टिकणारं लक्षण नेहमी दुर्लक्ष करण्यासारखं असतं."}, answer:false, explain:{en:"Myth! Even a brief but severe symptom, like sudden intense pain, can be a sign something urgent needs attention.",hi:"मिथक! यहाँ तक कि एक संक्षिप्त लेकिन गंभीर लक्षण, जैसे अचानक तेज़ दर्द, एक संकेत हो सकता है कि कुछ अत्यावश्यक ध्यान चाहता है।",mr:"मिथक! अगदी थोडक्यात पण गंभीर लक्षणही, जसं अचानक तीव्र वेदना, हे एक लक्षण असू शकतं की काहीतरी तातडीने लक्ष हवं आहे."} },
              { text:{en:"Sudden difficulty breathing should always be treated as urgent.",hi:"अचानक साँस लेने में तकलीफ़ को हमेशा अत्यावश्यक माना जाना चाहिए।",mr:"अचानक श्वास घेण्यास त्रास नेहमी तातडीचं मानायला हवं."}, answer:true, explain:{en:"True! Breathing trouble is one of the clearest signs that immediate medical attention is needed.",hi:"सच! साँस लेने की तकलीफ़ सबसे स्पष्ट संकेतों में से एक है कि तुरंत मेडिकल ध्यान चाहिए।",mr:"खरं! श्वास घेण्यास त्रास हे तात्काळ वैद्यकीय लक्ष हवं याच्या सर्वात स्पष्ट लक्षणांपैकी एक आहे."} },
              { text:{en:"Doctors only ever look at one symptom at a time, never in combination.",hi:"डॉक्टर हमेशा एक बार में केवल एक लक्षण देखते हैं, कभी संयोजन में नहीं।",mr:"डॉक्टर नेहमी एका वेळी फक्त एकच लक्षण बघतात, कधीच संयोजनात नाही."}, answer:false, explain:{en:"Myth! Doctors often consider several symptoms together to build a fuller picture of what's happening.",hi:"मिथक! डॉक्टर अक्सर क्या हो रहा है इसकी पूरी तस्वीर बनाने के लिए कई लक्षणों को एक साथ मानते हैं।",mr:"मिथक! डॉक्टर अनेकदा काय होत आहे याचं संपूर्ण चित्र तयार करण्यासाठी अनेक लक्षणं एकत्र विचारात घेतात."} }
            ]}}
          ]},
          { label: "Prescription Label",
            bonusAssignment: {
              title: { en: "Design a Safe Label", hi: "एक सुरक्षित लेबल डिज़ाइन करो", mr: "एक सुरक्षित लेबल डिझाइन करा" },
              prompt: { en: "Design a clear, easy-to-read medicine label template including name, dose, and timing sections. Take a photo and explain your design choices!",
                        hi: "एक स्पष्ट, पढ़ने में आसान दवा लेबल टेम्पलेट डिज़ाइन करो जिसमें नाम, खुराक, और समय के सेक्शन हों। फोटो लो और अपनी डिज़ाइन पसंद समझाओ!",
                        mr: "नाव, मात्रा, आणि वेळेचे विभाग असलेलं स्पष्ट, वाचायला सोपं औषध लेबल टेम्प्लेट डिझाइन करा. फोटो घ्या आणि तुमच्या डिझाइन निवडी समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🏷️", title: "Explore a prescription label", mentorVisual: "🏷️",
              mentorIntro: {
                en: "A prescription label carries really important information! Let's explore what each part means.",
                hi: "एक प्रिस्क्रिप्शन लेबल पर वाकई ज़रूरी जानकारी होती है! चलो एक्सप्लोर करते हैं हर हिस्से का क्या मतलब है।",
                mr: "प्रिस्क्रिप्शन लेबलवर खरोखर महत्त्वाची माहिती असते! चला एक्सप्लोर करूया प्रत्येक भागाचा अर्थ काय आहे."
              },
              data: { visual: "🏷️", hotspots: [
              { label:{en:"Medicine name",hi:"दवा का नाम",mr:"औषधाचं नाव"}, fact:{en:"The exact name matters — different medicines can look similar but do very different things!"},
              },
              { label:{en:"Dosage",hi:"खुराक",mr:"मात्रा"}, fact:{en:"Dosage tells you exactly how much medicine to take — too little or too much can both cause problems!"} },
              { label:{en:"Timing",hi:"समय",mr:"वेळ"}, fact:{en:"Timing instructions, like 'twice a day,' help keep the right amount of medicine working in your body!"} }
            ]}},
            { engine: "build-match", icon: "🏷️", title: "Match label part to its purpose", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching each part of a label to exactly what it's telling you — precision really matters with medicine!",
                hi: "चलो लेबल के हर हिस्से को यह मैच करने का अभ्यास करते हैं कि यह तुम्हें बिल्कुल क्या बता रहा है — दवा के साथ सटीकता वाकई मायने रखती है!",
                mr: "चला लेबलचा प्रत्येक भाग तो तुम्हाला नेमकं काय सांगतो आहे याच्याशी जुळवण्याचा सराव करूया — औषधाच्या बाबतीत अचूकता खरंच महत्त्वाची आहे!"
              },
              data: { noStakes: false, zones: [
              { id: "name", label: { en:"Tells you exactly which medicine this is", hi:"बताता है यह बिल्कुल कौन सी दवा है", mr:"हे नेमकं कोणतं औषध आहे ते सांगतं" } },
              { id: "dose", label: { en:"Tells you how much to take", hi:"बताता है कितना लेना है", mr:"किती घ्यायचं ते सांगतं" } },
              { id: "timing", label: { en:"Tells you when to take it", hi:"बताता है कब लेना है", mr:"कधी घ्यायचं ते सांगतं" } }
            ], chips: ["name","dose","timing"], facts: {
              name:"That's the medicine name — always double-check this!",
              dose:"That's the dosage — exact amounts matter!",
              timing:"That's the timing — following it helps the medicine work properly!"
            }}},
            { type: "Quiz", icon: "📝", title: "Prescription label quiz",
              desc: { en:"A real quiz on reading and understanding prescription labels correctly.", hi:"प्रिस्क्रिप्शन लेबल को सही तरीके से पढ़ने और समझने पर एक असली क्विज़।", mr:"प्रिस्क्रिप्शन लेबल बरोबर वाचण्यावर आणि समजून घेण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Why precision matters",
              desc: { en:"Why do you think even small mistakes in reading a medicine label could actually be dangerous?", hi:"तुम्हें क्यों लगता है कि दवा लेबल पढ़ने में छोटी-छोटी गलतियाँ भी असल में खतरनाक हो सकती हैं?", mr:"औषध लेबल वाचण्यातील छोट्याशा चुकाही खरंच धोकादायक असू शकतात असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Prescription Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced prescription fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस प्रिस्क्रिप्शन तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत प्रिस्क्रिप्शन तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Generic vs. brand?",hi:"जेनेरिक बनाम ब्रांड?",mr:"जेनेरिक विरुद्ध ब्रँड?"}, back:{en:"Generic medicines have the same active ingredient as branded ones, often at a much lower cost! 💊",hi:"जेनेरिक दवाओं में ब्रांडेड दवाओं जैसा ही सक्रिय तत्व होता है, अक्सर बहुत कम कीमत पर! 💊",mr:"जेनेरिक औषधांमध्ये ब्रँडेड औषधांसारखाच सक्रिय घटक असतो, अनेकदा खूप कमी किमतीत! 💊"} },
              { front:{en:"Pharmacists double-check?",hi:"फार्मासिस्ट दोबारा जाँच करते हैं?",mr:"फार्मासिस्ट पुन्हा तपासतात?"}, back:{en:"Pharmacists are specially trained to double-check prescriptions for mistakes before medicine reaches you! 🔍",hi:"फार्मासिस्ट को दवा तुम तक पहुँचने से पहले प्रिस्क्रिप्शन में गलतियों की दोबारा जाँच के लिए विशेष रूप से प्रशिक्षित किया जाता है! 🔍",mr:"औषध तुमच्यापर्यंत पोहोचण्याआधी प्रिस्क्रिप्शनमधील चुका पुन्हा तपासण्यासाठी फार्मासिस्ट खास प्रशिक्षित असतात! 🔍"} },
              { front:{en:"Expiry dates matter?",hi:"एक्सपायरी तारीखें मायने रखती हैं?",mr:"एक्सपायरी तारखा महत्त्वाच्या आहेत?"}, back:{en:"Medicine can lose effectiveness — or even become unsafe — after its expiry date! 📅",hi:"दवा अपनी एक्सपायरी तारीख के बाद असरदार होना खो सकती है — या असुरक्षित भी हो सकती है! 📅",mr:"औषधाची एक्सपायरी तारीख उलटल्यानंतर ते प्रभावी राहू शकत नाही — किंवा असुरक्षितही होऊ शकतं! 📅"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Prescription Label or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your prescription label knowledge! Decide if each statement is true or a myth.",
                hi: "चलो प्रिस्क्रिप्शन लेबल के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला प्रिस्क्रिप्शन लेबलच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Taking a slightly different dose than written on the label doesn't matter much.",hi:"लेबल पर लिखी खुराक से थोड़ी अलग खुराक लेना ज़्यादा मायने नहीं रखता।",mr:"लेबलवर लिहिलेल्यापेक्षा थोडी वेगळी मात्रा घेणं फार महत्त्वाचं नाही."}, answer:false, explain:{en:"Myth! Even small dosage differences can matter a lot — always follow the exact amount written.",hi:"मिथक! यहाँ तक कि छोटे खुराक के अंतर भी बहुत मायने रख सकते हैं — हमेशा लिखी गई सटीक मात्रा का पालन करो।",mr:"मिथक! अगदी लहान मात्रेतील फरकही खूप महत्त्वाचे असू शकतात — नेहमी लिहिलेली नेमकी मात्रा पाळा."} },
              { text:{en:"Prescription labels include timing instructions to help the medicine work as intended.",hi:"प्रिस्क्रिप्शन लेबल में दवा को इच्छित रूप से काम करने में मदद के लिए समय की जानकारी होती है।",mr:"प्रिस्क्रिप्शन लेबलमध्ये औषध इच्छित रीतीने काम करण्यास मदत करण्यासाठी वेळेच्या सूचना असतात."}, answer:true, explain:{en:"True! Timing helps keep a steady, effective level of medicine working in your body.",hi:"सच! समय तुम्हारे शरीर में दवा के काम करने के लिए एक स्थिर, असरदार स्तर बनाए रखने में मदद करता है।",mr:"खरं! वेळ तुमच्या शरीरात औषध काम करण्यासाठी एक स्थिर, प्रभावी पातळी राखण्यास मदत करते."} },
              { text:{en:"Two medicines that look similar always do the exact same thing.",hi:"दो दवाएँ जो एक जैसी दिखती हैं वे हमेशा बिल्कुल एक ही काम करती हैं।",mr:"दिसायला सारखी दिसणारी दोन औषधं नेहमी अगदी सारखंच काम करतात."}, answer:false, explain:{en:"Myth! Medicines that look alike can have very different effects — reading the exact name is essential.",hi:"मिथक! दिखने में एक जैसी दवाओं के बहुत अलग असर हो सकते हैं — सटीक नाम पढ़ना ज़रूरी है।",mr:"मिथक! दिसायला सारखी असणारी औषधं खूप वेगळे परिणाम करू शकतात — नेमकं नाव वाचणं आवश्यक आहे."} }
            ]}}
          ]},
          { label: "Skeletal Deep Dive",
            bonusAssignment: {
              title: { en: "Build a Detailed Skeleton Map", hi: "एक विस्तृत कंकाल मानचित्र बनाओ", mr: "एक तपशीलवार सांगाडा नकाशा तयार करा" },
              prompt: { en: "Draw a skeleton diagram and label at least 6 different bones by name. Take a photo and explain 2 of them in more detail!",
                        hi: "एक कंकाल का चित्र बनाओ और कम से कम 6 अलग-अलग हड्डियों को नाम से लेबल करो। फोटो लो और उनमें से 2 को और विस्तार से समझाओ!",
                        mr: "सांगाड्याची आकृती काढा आणि किमान 6 वेगवेगळी हाडं नावाने लेबल करा. फोटो घ्या आणि त्यातील 2 अधिक तपशीलात समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "💀", title: "Explore the skeletal system in depth", mentorVisual: "💀",
              mentorIntro: {
                en: "Let's go deeper into your skeleton than ever before — real bone names, real detail!",
                hi: "चलो तुम्हारे कंकाल में पहले से कहीं ज़्यादा गहराई में जाते हैं — असली हड्डियों के नाम, असली विवरण!",
                mr: "चला तुमच्या सांगाड्यात आधीपेक्षा जास्त खोलात जाऊया — खरी हाडांची नावं, खरा तपशील!"
              },
              data: { visual: "💀", animation: "skeleton", hotspots: [
              { label:{en:"Cranium",hi:"क्रेनियम",mr:"क्रेनियम"}, fact:{en:"The cranium is the dome-shaped part of your skull that directly protects your brain!"} },
              { label:{en:"Femur",hi:"फीमर",mr:"फीमर"}, fact:{en:"The femur, your thigh bone, is the longest and strongest bone in your entire body!"} },
              { label:{en:"Vertebrae",hi:"वर्टिब्रे",mr:"मणके"}, fact:{en:"Your spine is made of 33 small bones called vertebrae, stacked to protect your spinal cord!"} }
            ]}},
            { engine: "build-match", icon: "💀", title: "Match bone to its region", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching specific bones to the region of the body they belong to.",
                hi: "चलो खास हड्डियों को शरीर के उस क्षेत्र से मैच करने का अभ्यास करते हैं जिससे वे संबंधित हैं।",
                mr: "चला विशिष्ट हाडं ती ज्या शरीराच्या भागाशी संबंधित आहेत त्याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "cranium", label: { en:"Skull region", hi:"खोपड़ी क्षेत्र", mr:"कवटी भाग" } },
              { id: "femur", label: { en:"Leg region", hi:"पैर क्षेत्र", mr:"पाय भाग" } },
              { id: "vertebrae", label: { en:"Spine region", hi:"रीढ़ क्षेत्र", mr:"पाठीचा कणा भाग" } }
            ], chips: ["cranium","femur","vertebrae"], facts: {
              cranium:"That's the cranium — protecting your brain!",
              femur:"That's the femur — your longest, strongest bone!",
              vertebrae:"That's the vertebrae — protecting your spinal cord!"
            }}},
            { type: "Quiz", icon: "📝", title: "Skeletal deep dive quiz",
              desc: { en:"A real quiz on specific bones and the regions of the body they belong to.", hi:"खास हड्डियों और शरीर के उन क्षेत्रों पर एक असली क्विज़ जिनसे वे संबंधित हैं।", mr:"विशिष्ट हाडं आणि ती ज्या शरीराच्या भागांशी संबंधित आहेत यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Protection by design",
              desc: { en:"Why do you think bones like the cranium and vertebrae are specifically shaped to protect other organs?", hi:"तुम्हें क्यों लगता है कि क्रेनियम और वर्टिब्रे जैसी हड्डियाँ खास तौर पर दूसरे अंगों की रक्षा के लिए आकार में हैं?", mr:"क्रेनियम आणि मणक्यांसारखी हाडं विशेषतः इतर अवयवांचं रक्षण करण्यासाठी आकारलेली आहेत असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Skeletal Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced skeletal fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस कंकाल तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत सांगाड्याचं तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Bone marrow's job?",hi:"बोन मैरो का काम?",mr:"बोन मॅरोचं काम?"}, back:{en:"Inside many bones, bone marrow actually produces new blood cells for your entire body! 🩸",hi:"कई हड्डियों के अंदर, बोन मैरो असल में तुम्हारे पूरे शरीर के लिए नई रक्त कोशिकाएँ बनाता है! 🩸",mr:"अनेक हाडांच्या आत, बोन मॅरो खरंच तुमच्या संपूर्ण शरीरासाठी नवीन रक्तपेशी तयार करतो! 🩸"} },
              { front:{en:"Skull is multiple bones?",hi:"खोपड़ी कई हड्डियों से बनी है?",mr:"कवटी अनेक हाडांनी बनलेली आहे?"}, back:{en:"Your skull is actually made of 22 separate bones that fused together as you grew! 🧩",hi:"तुम्हारी खोपड़ी असल में 22 अलग-अलग हड्डियों से बनी है जो तुम्हारे बड़े होने पर जुड़ गईं! 🧩",mr:"तुमची कवटी खरंतर 22 वेगळ्या हाडांनी बनलेली आहे जी तुम्ही मोठे होताना एकत्र जुळली! 🧩"} },
              { front:{en:"Femur's strength?",hi:"फीमर की ताकत?",mr:"फीमरची ताकद?"}, back:{en:"Your femur can support many times your own body weight without breaking! 💪",hi:"तुम्हारा फीमर टूटे बिना तुम्हारे अपने शरीर के वज़न से कई गुना ज़्यादा सहन कर सकता है! 💪",mr:"तुमचं फीमर न तुटता तुमच्या स्वतःच्या शरीराच्या वजनाच्या अनेक पट सहन करू शकतं! 💪"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Skeletal Deep Dive or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your skeletal knowledge! Decide if each statement is true or a myth.",
                hi: "चलो कंकाल के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला सांगाड्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"The cranium is a single, solid bone you're born with.",hi:"क्रेनियम एक अकेली, ठोस हड्डी है जिसके साथ तुम पैदा होते हो।",mr:"क्रेनियम हे एक एकच, घन हाड आहे ज्यासोबत तुम्ही जन्माला येता."}, answer:false, explain:{en:"Myth! The cranium is actually made of multiple bones that fuse together as you grow.",hi:"मिथक! क्रेनियम असल में कई हड्डियों से बना है जो तुम्हारे बड़े होने पर आपस में जुड़ जाती हैं।",mr:"मिथक! क्रेनियम खरंतर अनेक हाडांनी बनलेलं आहे जी तुम्ही मोठे होताना एकत्र जुळतात."} },
              { text:{en:"Vertebrae are stacked bones that help protect your spinal cord.",hi:"वर्टिब्रे ढेर की हुई हड्डियाँ हैं जो तुम्हारी स्पाइनल कॉर्ड की रक्षा करने में मदद करती हैं।",mr:"मणके एकावर एक रचलेली हाडं आहेत जी तुमच्या पाठीच्या कण्याचं रक्षण करण्यास मदत करतात."}, answer:true, explain:{en:"True! Your 33 vertebrae stack up to form a protective column around your spinal cord.",hi:"सच! तुम्हारे 33 वर्टिब्रे तुम्हारी स्पाइनल कॉर्ड के चारों ओर एक सुरक्षात्मक स्तंभ बनाने के लिए ढेर होते हैं।",mr:"खरं! तुमचे 33 मणके तुमच्या पाठीच्या कण्याभोवती एक संरक्षक स्तंभ तयार करण्यासाठी एकावर एक रचलेले असतात."} },
              { text:{en:"Bone marrow has no important job in your body.",hi:"बोन मैरो का तुम्हारे शरीर में कोई ज़रूरी काम नहीं है।",mr:"बोन मॅरोचं तुमच्या शरीरात कोणतंही महत्त्वाचं काम नाही."}, answer:false, explain:{en:"Myth! Bone marrow plays a crucial role, producing new blood cells for your entire body.",hi:"मिथक! बोन मैरो एक ज़रूरी भूमिका निभाता है, तुम्हारे पूरे शरीर के लिए नई रक्त कोशिकाएँ बनाता है।",mr:"मिथक! बोन मॅरो एक महत्त्वाची भूमिका बजावतो, तुमच्या संपूर्ण शरीरासाठी नवीन रक्तपेशी तयार करतो."} }
            ]}}
          ]},
          { label: "Blood Types",
            bonusAssignment: {
              title: { en: "Blood Type Explainer", hi: "ब्लड टाइप समझाने वाला", mr: "रक्तगट समजावणारं" },
              prompt: { en: "Research and explain in your own words why blood type matching matters for transfusions. Take a photo of your notes!",
                        hi: "रिसर्च करो और अपने शब्दों में समझाओ कि ट्रांसफ्यूज़न के लिए ब्लड टाइप मैचिंग क्यों मायने रखती है। अपने नोट्स की फोटो लो!",
                        mr: "संशोधन करा आणि रक्त संक्रमणासाठी रक्तगट जुळणं का महत्त्वाचं आहे हे तुमच्या शब्दांत समजावून सांगा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🩸", title: "Explore blood types", mentorVisual: "🩸",
              mentorIntro: {
                en: "Not all blood is exactly the same! Let's explore the different blood types and why they matter.",
                hi: "सारा खून बिल्कुल एक जैसा नहीं होता! चलो अलग-अलग ब्लड टाइप और वे क्यों मायने रखते हैं, एक्सप्लोर करते हैं।",
                mr: "सगळं रक्त अगदी सारखं नसतं! चला वेगवेगळे रक्तगट आणि ते का महत्त्वाचे आहेत ते एक्सप्लोर करूया."
              },
              data: { visual: "🩸", animation: "bloodflow", hotspots: [
              { label:{en:"Type O",hi:"टाइप O",mr:"टाइप O"}, fact:{en:"Type O negative is often called the 'universal donor' because it can often be given to people of many other blood types in an emergency!"} },
              { label:{en:"Type AB",hi:"टाइप AB",mr:"टाइप AB"}, fact:{en:"Type AB positive is often called the 'universal recipient' because people with this type can often receive blood from more types!"} },
              { label:{en:"Why it matters",hi:"यह क्यों मायने रखता है",mr:"हे का महत्त्वाचं आहे"}, fact:{en:"Giving someone the wrong blood type can cause a dangerous reaction — matching correctly is absolutely essential!"} }
            ]}},
            { engine: "build-match", icon: "🩸", title: "Match blood type fact to type", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching blood type facts to the correct type — real precision needed here!",
                hi: "चलो ब्लड टाइप तथ्यों को सही प्रकार से मैच करने का अभ्यास करते हैं — यहाँ असली सटीकता चाहिए!",
                mr: "चला रक्तगट तथ्यं योग्य प्रकाराशी जुळवण्याचा सराव करूया — इथे खरी अचूकता हवी!"
              },
              data: { noStakes: false, zones: [
              { id: "o_neg", label: { en:"Often called the 'universal donor'", hi:"अक्सर 'यूनिवर्सल डोनर' कहा जाता है", mr:"अनेकदा 'युनिव्हर्सल डोनर' म्हटलं जातं" } },
              { id: "ab_pos", label: { en:"Often called the 'universal recipient'", hi:"अक्सर 'यूनिवर्सल रेसिपिएंट' कहा जाता है", mr:"अनेकदा 'युनिव्हर्सल रेसिपिएंट' म्हटलं जातं" } },
              { id: "match", label: { en:"Must be correctly matched before a transfusion", hi:"ट्रांसफ्यूज़न से पहले सही तरीके से मैच होना ज़रूरी", mr:"रक्त संक्रमणाआधी बरोबर जुळवणं आवश्यक" } }
            ], chips: ["o_neg","ab_pos","match"], facts: {
              o_neg:"That's Type O negative — the universal donor!",
              ab_pos:"That's Type AB positive — the universal recipient!",
              match:"That's why matching always matters — safety first!"
            }}},
            { type: "Quiz", icon: "📝", title: "Blood types quiz",
              desc: { en:"A real quiz on blood types and why matching matters for transfusions.", hi:"ब्लड टाइप और ट्रांसफ्यूज़न के लिए मैचिंग क्यों मायने रखती है, इस पर एक असली क्विज़।", mr:"रक्तगट आणि रक्त संक्रमणासाठी जुळणं का महत्त्वाचं आहे, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Why donation matters",
              desc: { en:"Why do you think it's important for many different people to donate blood, not just people with one blood type?", hi:"तुम्हें क्यों लगता है कि कई अलग-अलग लोगों का खून दान करना ज़रूरी है, सिर्फ़ एक ब्लड टाइप वाले लोग नहीं?", mr:"अनेक वेगवेगळ्या लोकांनी रक्तदान करणं महत्त्वाचं का आहे, फक्त एका रक्तगटाच्या लोकांनी नाही, असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Blood Type Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced blood type fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस ब्लड टाइप तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत रक्तगट तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"How many main types?",hi:"कितने मुख्य प्रकार?",mr:"किती मुख्य प्रकार?"}, back:{en:"There are 4 main blood types — A, B, AB, and O — each also either positive or negative! 🅰️🅱️",hi:"4 मुख्य ब्लड टाइप हैं — A, B, AB, और O — हर एक या तो पॉज़िटिव या नेगेटिव भी! 🅰️🅱️",mr:"4 मुख्य रक्तगट आहेत — A, B, AB, आणि O — प्रत्येक पॉझिटिव्ह किंवा निगेटिव्हही! 🅰️🅱️"} },
              { front:{en:"Type inherited?",hi:"प्रकार विरासत में मिलता है?",mr:"प्रकार वारशाने मिळतो?"}, back:{en:"Your blood type is inherited from your parents, just like eye color or height! 👨‍👩‍👧",hi:"तुम्हारा ब्लड टाइप तुम्हारे माता-पिता से विरासत में मिलता है, बिल्कुल आँखों के रंग या कद की तरह! 👨‍👩‍👧",mr:"तुमचा रक्तगट तुमच्या पालकांकडून वारशाने मिळतो, अगदी डोळ्यांचा रंग किंवा उंचीसारखा! 👨‍👩‍👧"} },
              { front:{en:"Blood banks?",hi:"ब्लड बैंक?",mr:"रक्तपेढ्या?"}, back:{en:"Blood banks carefully sort and store donated blood by type, so it's ready exactly when needed! 🏦",hi:"ब्लड बैंक दान किए गए खून को प्रकार के अनुसार ध्यान से छाँटते और संग्रहीत करते हैं, ताकि यह ठीक ज़रूरत पड़ने पर तैयार हो! 🏦",mr:"रक्तपेढ्या दान केलेलं रक्त प्रकारानुसार काळजीपूर्वक वर्गीकृत करून साठवतात, जेणेकरून ते नेमकं गरज असताना तयार असेल! 🏦"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Blood Types or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your blood type knowledge! Decide if each statement is true or a myth.",
                hi: "चलो ब्लड टाइप के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रक्तगटाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Any blood type can safely be given to any person.",hi:"किसी भी ब्लड टाइप को किसी भी व्यक्ति को सुरक्षित रूप से दिया जा सकता है।",mr:"कोणताही रक्तगट कोणत्याही व्यक्तीला सुरक्षितपणे देता येतो."}, answer:false, explain:{en:"Myth! Giving the wrong blood type can cause a dangerous reaction — matching is essential.",hi:"मिथक! गलत ब्लड टाइप देने से एक खतरनाक प्रतिक्रिया हो सकती है — मैचिंग ज़रूरी है।",mr:"मिथक! चुकीचा रक्तगट दिल्याने धोकादायक प्रतिक्रिया होऊ शकते — जुळणं आवश्यक आहे."} },
              { text:{en:"Type O negative blood is often used in emergencies when there's no time to check a patient's exact type.",hi:"टाइप O नेगेटिव खून का इस्तेमाल अक्सर आपातकाल में किया जाता है जब मरीज़ का सटीक प्रकार जाँचने का समय न हो।",mr:"रुग्णाचा नेमका रक्तगट तपासायला वेळ नसताना आणीबाणीत टाइप O निगेटिव्ह रक्त अनेकदा वापरलं जातं."}, answer:true, explain:{en:"True! Because it's compatible with so many people, O negative is especially valuable in emergencies.",hi:"सच! क्योंकि यह इतने सारे लोगों के साथ संगत है, O नेगेटिव आपातकाल में विशेष रूप से मूल्यवान है।",mr:"खरं! ते इतक्या लोकांशी सुसंगत असल्यामुळे, O निगेटिव्ह आणीबाणीत विशेषतः मौल्यवान आहे."} },
              { text:{en:"Blood type has nothing to do with genetics or family.",hi:"ब्लड टाइप का जेनेटिक्स या परिवार से कोई लेना-देना नहीं है।",mr:"रक्तगटाचा जनुकशास्त्र किंवा कुटुंबाशी काहीही संबंध नाही."}, answer:false, explain:{en:"Myth! Blood type is genetically inherited from your parents.",hi:"मिथक! ब्लड टाइप आनुवंशिक रूप से तुम्हारे माता-पिता से विरासत में मिलता है।",mr:"मिथक! रक्तगट जनुकीयदृष्ट्या तुमच्या पालकांकडून वारशाने मिळतो."} }
            ]}}
          ]},
          { label: "Capstone Checkup Sim",
            bonusAssignment: {
              title: { en: "My Std 8 Case File", hi: "मेरी Std 8 केस फ़ाइल", mr: "माझी Std 8 केस फाइल" },
              prompt: { en: "Create a page reflecting on your favorite skill you built this year (reading vitals, labeling bones, matching enzymes, etc). Take a photo and explain why!",
                        hi: "इस साल तुमने जो पसंदीदा कौशल बनाया (वाइटल्स पढ़ना, हड्डियों को लेबल करना, एंज़ाइम मैच करना, आदि) उस पर विचार करते हुए एक पेज बनाओ। फोटो लो और बताओ क्यों!",
                        mr: "या वर्षी तुम्ही तयार केलेलं तुमचं आवडतं कौशल्य (व्हायटल्स वाचणं, हाडं लेबल करणं, एंझाइम्स जुळवणं, इ.) यावर विचार करणारं पान तयार करा. फोटो घ्या आणि का ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🩺", title: "Full checkup simulation", mentorVisual: "🩺",
              mentorIntro: {
                en: "Time for your Std 8 capstone! Let's combine everything you've learned this year into one full mini-checkup simulation.",
                hi: "तुम्हारे Std 8 कैपस्टोन का समय! चलो इस साल तुमने जो कुछ भी सीखा है उसे एक पूरे मिनी-चेकअप सिमुलेशन में मिलाते हैं।",
                mr: "तुमच्या Std 8 कॅपस्टोनची वेळ! चला या वर्षी तुम्ही जे काही शिकलात ते एका पूर्ण मिनी-चेकअप सिम्युलेशनमध्ये एकत्र करूया."
              },
              data: { noStakes: false, zones: [
              { id: "vitals", label: { en:"Check heart rate and oxygen first", hi:"पहले हृदय गति और ऑक्सीजन जाँचो", mr:"आधी हृदयगती आणि ऑक्सिजन तपासा" } },
              { id: "symptoms", label: { en:"Ask about and sort symptoms by urgency", hi:"लक्षणों के बारे में पूछो और तात्कालिकता से छाँटो", mr:"लक्षणांबद्दल विचारा आणि तातडीनुसार वर्गीकृत करा" } },
              { id: "plan", label: { en:"Decide on rest, medicine, or referral", hi:"आराम, दवा, या रेफरल पर फ़ैसला करो", mr:"विश्रांती, औषध, किंवा रेफरलचा निर्णय घ्या" } }
            ], chips: ["vitals","symptoms","plan"], facts: {
              vitals:"Step 1: Always start with the numbers — vitals give you a baseline!",
              symptoms:"Step 2: Understanding symptoms and their urgency shapes everything next!",
              plan:"Step 3: A good plan for the patient — that's what all this training builds toward!"
            }}},
            { engine: "tap-discover", icon: "🏆", title: "Reflect on your Std 8 skills", mentorVisual: "🏆",
              mentorIntro: {
                en: "You built real skills this year — let's celebrate a few of them!",
                hi: "तुमने इस साल असली कौशल बनाए — चलो उनमें से कुछ का जश्न मनाते हैं!",
                mr: "तुम्ही या वर्षी खरी कौशल्यं तयार केली — चला त्यातील काहींचा उत्सव साजरा करूया!"
              },
              data: { visual: "🏆", hotspots: [
              { label:{en:"Precision",hi:"सटीकता",mr:"अचूकता"}, fact:{en:"This year, you learned real precision — labeling chambers, matching enzymes, and reading exact readings!"} },
              { label:{en:"Urgency thinking",hi:"तात्कालिकता की सोच",mr:"तातडीचा विचार"}, fact:{en:"You learned to sort symptoms by urgency — real clinical thinking that doctors use every day!"} },
              { label:{en:"Confidence",hi:"आत्मविश्वास",mr:"आत्मविश्वास"}, fact:{en:"You handled real right-and-wrong answers this year — and you kept going. That's real growth!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Std 8 capstone recap",
              desc: { en:"A comprehensive recap quiz combining everything from this year's Builder-band missions.", hi:"इस साल के बिल्डर-बैंड मिशन से सब कुछ मिलाकर एक व्यापक रीकैप क्विज़।", mr:"या वर्षीच्या बिल्डर-बँड मिशन्समधून सर्वकाही एकत्र करणारा एक सर्वसमावेशक रीकॅप क्विझ." } },
            { type: "Reflect", icon: "💭", title: "A message to Std 9 you",
              desc: { en:"Write a message to yourself about how this year's challenges made you feel, and what you're ready for next.", hi:"अपने आप को एक संदेश लिखो कि इस साल की चुनौतियों ने तुम्हें कैसा महसूस कराया, और तुम आगे किसके लिए तैयार हो।", mr:"या वर्षीच्या आव्हानांनी तुम्हाला कसं वाटलं आणि तुम्ही पुढे कशासाठी तयार आहात याबद्दल स्वतःला संदेश लिहा." } },
            { engine: "flip-cards", icon: "🃏", title: "Std 8 Year Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a year of real skill-building! Flip each card for a fun recap of your journey.",
                hi: "क्या असली कौशल-निर्माण का साल रहा! अपनी यात्रा का मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय खऱ्या कौशल्य-निर्माणाचं वर्ष होतं! तुमच्या प्रवासाचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Where did we start?",hi:"हमने कहाँ से शुरुआत की?",mr:"आपण कुठून सुरुवात केली?"}, back:{en:"You started this year learning to precisely label all 4 chambers of the heart! 🫀",hi:"तुमने इस साल की शुरुआत दिल के सभी 4 कक्षों को सटीक रूप से लेबल करना सीखकर की! 🫀",mr:"तुम्ही या वर्षाची सुरुवात हृदयाचे सर्व 4 कप्पे अचूकपणे लेबल करायला शिकून केली! 🫀"} },
              { front:{en:"Real stakes?",hi:"असली दांव?",mr:"खरे धोके?"}, back:{en:"This year, for the first time, your answers needed to be genuinely correct — real skill-building! 🎯",hi:"इस साल, पहली बार, तुम्हारे जवाबों का वाकई सही होना ज़रूरी था — असली कौशल-निर्माण! 🎯",mr:"या वर्षी, पहिल्यांदाच, तुमची उत्तरं खरोखर बरोबर असणं आवश्यक होतं — खरं कौशल्य-निर्माण! 🎯"} },
              { front:{en:"What's next?",hi:"आगे क्या?",mr:"पुढे काय?"}, back:{en:"Next year in Std 9, you'll dive into even more advanced clinical thinking — X-rays, mental health, and public health! 🚀",hi:"अगले साल Std 9 में, तुम और भी एडवांस क्लिनिकल सोच में गोता लगाओगे — एक्स-रे, मानसिक स्वास्थ्य, और सार्वजनिक स्वास्थ्य! 🚀",mr:"पुढच्या वर्षी Std 9 मध्ये, तुम्ही आणखी प्रगत क्लिनिकल विचारात जाल — एक्स-रे, मानसिक आरोग्य, आणि सार्वजनिक आरोग्य! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One last check-in before the year wraps up! Let's see what stuck from this whole year.",
                hi: "साल खत्म होने से पहले एक आखिरी जांच! देखते हैं इस पूरे साल से क्या याद रहा।",
                mr: "वर्ष संपण्याआधी शेवटची एक तपासणी! बघूया या संपूर्ण वर्षातून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"This year, tasks always accepted any answer as correct, with no real stakes.",hi:"इस साल, कार्यों ने हमेशा किसी भी जवाब को सही माना, कोई असली दांव नहीं।",mr:"या वर्षी, कामांनी नेहमी कोणतंही उत्तर बरोबर मानलं, कोणतेही खरे धोके नाहीत."}, answer:false, explain:{en:"Myth! This year specifically introduced real right-and-wrong answers — a genuine step up from Std 6-7.",hi:"मिथक! इस साल विशेष रूप से असली सही-गलत जवाब शुरू किए गए — Std 6-7 से एक असली कदम आगे।",mr:"मिथक! या वर्षी विशेषतः खरी बरोबर-चूक उत्तरं सुरू झाली — Std 6-7 पेक्षा खरी प्रगती."} },
              { text:{en:"Doctors need both precise knowledge and good judgment about urgency.",hi:"डॉक्टरों को सटीक ज्ञान और तात्कालिकता के बारे में अच्छा निर्णय दोनों चाहिए।",mr:"डॉक्टरांना अचूक ज्ञान आणि तातडीबद्दल चांगला निर्णय दोन्ही लागतात."}, answer:true, explain:{en:"True! This year you practiced exactly this combination — precision plus urgency judgment.",hi:"सच! इस साल तुमने बिल्कुल यही संयोजन अभ्यास किया — सटीकता के साथ तात्कालिकता का निर्णय।",mr:"खरं! या वर्षी तुम्ही अगदी हेच संयोजन सराव केलं — अचूकता अधिक तातडीचा निर्णय."} },
              { text:{en:"This is the last year you'll ever explore Doctor & Healthcare topics.",hi:"यह आखिरी साल है जब तुम कभी डॉक्टर और स्वास्थ्य से जुड़े विषय एक्सप्लोर करोगे।",mr:"डॉक्टर आणि आरोग्य विषय एक्सप्लोर करण्याचं हे शेवटचं वर्ष आहे."}, answer:false, explain:{en:"Myth! Std 9 goes even deeper — this is just the middle of a much longer journey.",hi:"मिथक! Std 9 और भी गहराई में जाता है — यह तो एक बहुत लंबी यात्रा का बीच का हिस्सा है।",mr:"मिथक! Std 9 आणखी खोलात जातं — हा तर एका खूप मोठ्या प्रवासाचा मधला भाग आहे."} }
            ]}}
          ]}
        ]
      },
      "9": {
        band: "Builder",
        bandTagline: "Deeper clinical thinking — reading real data, sorting real cases, planning ahead.",
        months: [
          { label: "X-ray Reading Basics",
            bonusAssignment: {
              title: { en: "X-ray Spot-the-Difference", hi: "एक्स-रे अंतर खोजो", mr: "एक्स-रे फरक शोधा" },
              prompt: { en: "Find two X-ray images online (with an adult's help) — one normal, one showing a fracture. Write 2-3 sentences on what's different. Take a photo of your notes!",
                        hi: "किसी बड़े की मदद से दो एक्स-रे तस्वीरें ढूंढो — एक सामान्य, एक फ्रैक्चर दिखाती हुई। लिखो कि क्या अलग है, 2-3 वाक्यों में। अपने नोट्स की फोटो लो!",
                        mr: "मोठ्यांच्या मदतीने दोन एक्स-रे प्रतिमा शोधा — एक सामान्य, एक फ्रॅक्चर दाखवणारी. काय वेगळं आहे ते 2-3 वाक्यांत लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🩻", title: "Explore how to read an X-ray", mentorVisual: "🩻",
              mentorIntro: {
                en: "Reading an X-ray is a real skill doctors train for years to master! Let's learn the basics.",
                hi: "एक एक्स-रे पढ़ना एक असली कौशल है जिसे डॉक्टर सालों तक निपुण होने के लिए प्रशिक्षण लेते हैं! चलो बुनियादी बातें सीखते हैं।",
                mr: "एक्स-रे वाचणं हे एक खरं कौशल्य आहे जे डॉक्टर वर्षानुवर्षे प्रभुत्व मिळवण्यासाठी प्रशिक्षण घेतात! चला मूलभूत गोष्टी शिकूया."
              },
              data: { visual: "🩻", animation: "xray", hotspots: [
              { label:{en:"Bright white areas",hi:"चमकीले सफ़ेद क्षेत्र",mr:"चमकदार पांढरे भाग"}, fact:{en:"Bones show up bright white on X-rays because they're dense and block X-ray beams well!"} },
              { label:{en:"Darker areas",hi:"गहरे क्षेत्र",mr:"गडद भाग"}, fact:{en:"Soft tissue and air show up darker, since X-rays pass through them more easily!"} },
              { label:{en:"Looking for breaks",hi:"दरारें ढूंढना",mr:"भेगा शोधणं"}, fact:{en:"Doctors look for any interruption in a bone's smooth white line — that's often a sign of a fracture!"} }
            ]}},
            { engine: "build-match", icon: "🩻", title: "Sort X-ray findings as normal or concerning", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice — can you tell which X-ray findings look normal, and which ones need a closer look?",
                hi: "चलो अभ्यास करते हैं — क्या तुम बता सकते हो कौन से एक्स-रे नतीजे सामान्य लगते हैं, और कौन से और नज़दीक से देखने की ज़रूरत रखते हैं?",
                mr: "चला सराव करूया — तुम्ही सांगू शकता का कोणतं एक्स-रे निष्कर्ष सामान्य दिसतं, आणि कोणत्याला अधिक बारकाईने बघायची गरज आहे?"
              },
              data: { noStakes: false, zones: [
              { id: "smooth", label: { en:"Smooth, unbroken white bone line", hi:"चिकनी, बिना टूटी सफ़ेद हड्डी की रेखा", mr:"गुळगुळीत, न तुटलेली पांढरी हाडाची रेषा" } },
              { id: "gap", label: { en:"A visible gap or break in the bone line", hi:"हड्डी की रेखा में एक दिखने वाला गैप या दरार", mr:"हाडाच्या रेषेत एक दिसणारं अंतर किंवा भेग" } },
              { id: "shadow", label: { en:"An unusual shadow in soft tissue", hi:"नरम ऊतक में एक असामान्य छाया", mr:"मऊ ऊतीत एक असामान्य सावली" } }
            ], chips: ["smooth","gap","shadow"], facts: {
              smooth:"That's a normal, healthy bone line!",
              gap:"That's a likely fracture — needs a doctor's confirmation!",
              shadow:"That's worth investigating further — could be many things, needs more context!"
            }}},
            { type: "Quiz", icon: "📝", title: "X-ray reading quiz",
              desc: { en:"A real quiz on the basics of reading X-ray images.", hi:"एक्स-रे तस्वीरें पढ़ने की बुनियादी बातों पर एक असली क्विज़।", mr:"एक्स-रे प्रतिमा वाचण्याच्या मूलभूत गोष्टींवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Training takes time",
              desc: { en:"Why do you think it takes doctors years of training to become skilled at reading X-rays accurately?", hi:"तुम्हें क्यों लगता है कि डॉक्टरों को एक्स-रे को सटीक रूप से पढ़ने में कुशल होने में सालों का प्रशिक्षण लगता है?", mr:"एक्स-रे अचूकपणे वाचण्यात कुशल होण्यासाठी डॉक्टरांना वर्षानुवर्षे प्रशिक्षण का लागतं असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "X-ray Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced X-ray fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस एक्स-रे तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत एक्स-रे तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Discovered by accident?",hi:"गलती से खोजा गया?",mr:"अपघाताने शोध लागला?"}, back:{en:"X-rays were discovered by accident in 1895 by a scientist experimenting with electricity! ✨",hi:"एक्स-रे की खोज 1895 में बिजली के साथ प्रयोग कर रहे एक वैज्ञानिक ने गलती से की थी! ✨",mr:"1895 मध्ये विजेवर प्रयोग करणाऱ्या एका शास्त्रज्ञाने अपघाताने एक्स-रेचा शोध लावला! ✨"} },
              { front:{en:"Radiologists specialize?",hi:"रेडियोलॉजिस्ट विशेषज्ञता?",mr:"रेडिओलॉजिस्ट खासियत?"}, back:{en:"Radiologists are doctors who train specifically for years just to read medical images like X-rays and scans! 👨‍⚕️",hi:"रेडियोलॉजिस्ट वे डॉक्टर हैं जो एक्स-रे और स्कैन जैसी मेडिकल इमेज पढ़ने के लिए ही सालों का विशेष प्रशिक्षण लेते हैं! 👨‍⚕️",mr:"रेडिओलॉजिस्ट हे डॉक्टर आहेत जे एक्स-रे आणि स्कॅनसारख्या वैद्यकीय प्रतिमा वाचण्यासाठीच वर्षानुवर्षे विशेष प्रशिक्षण घेतात! 👨‍⚕️"} },
              { front:{en:"AI helps too?",hi:"AI भी मदद करता है?",mr:"AI सुद्धा मदत करतं?"}, back:{en:"Today, AI tools sometimes help radiologists spot things in X-rays even faster, working as a helpful second check! 🤖",hi:"आज, AI टूल्स कभी-कभी रेडियोलॉजिस्ट को एक्स-रे में चीज़ें और भी तेज़ी से पहचानने में मदद करते हैं, एक मददगार दूसरी जांच के रूप में काम करते हुए! 🤖",mr:"आज, AI साधनं कधीकधी रेडिओलॉजिस्टना एक्स-रेमध्ये गोष्टी अधिक वेगाने ओळखण्यास मदत करतात, एक उपयुक्त दुसरी तपासणी म्हणून काम करत! 🤖"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "X-ray Reading or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your X-ray reading knowledge! Decide if each statement is true or a myth.",
                hi: "चलो एक्स-रे पढ़ने के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला एक्स-रे वाचण्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Bones appear dark on an X-ray, while soft tissue appears bright white.",hi:"एक्स-रे पर हड्डियाँ गहरी दिखती हैं, जबकि नरम ऊतक चमकीला सफ़ेद दिखता है।",mr:"एक्स-रेवर हाडं गडद दिसतात, तर मऊ ऊती चमकदार पांढरी दिसते."}, answer:false, explain:{en:"Myth! It's actually the opposite — dense bones appear bright white, while softer tissue appears darker.",hi:"मिथक! यह असल में उल्टा है — घनी हड्डियाँ चमकीली सफ़ेद दिखती हैं, जबकि नरम ऊतक गहरा दिखता है।",mr:"मिथक! हे खरंतर उलट आहे — घन हाडं चमकदार पांढरी दिसतात, तर मऊ ऊती गडद दिसते."} },
              { text:{en:"A visible gap in a bone's white line on an X-ray often suggests a fracture.",hi:"एक्स-रे पर हड्डी की सफ़ेद रेखा में एक दिखने वाला गैप अक्सर फ्रैक्चर का सुझाव देता है।",mr:"एक्स-रेवर हाडाच्या पांढऱ्या रेषेतील दिसणारं अंतर अनेकदा फ्रॅक्चरचं सूचक असतं."}, answer:true, explain:{en:"True! That's exactly one of the key signs doctors look for when reading an X-ray for a possible fracture.",hi:"सच! यह बिल्कुल उन मुख्य संकेतों में से एक है जिसे डॉक्टर एक संभावित फ्रैक्चर के लिए एक्स-रे पढ़ते समय ढूंढते हैं।",mr:"खरं! शक्य फ्रॅक्चरसाठी एक्स-रे वाचताना डॉक्टर जी मुख्य लक्षणं शोधतात त्यापैकी हे अगदी एक आहे."} },
              { text:{en:"Anyone can read an X-ray accurately without any training.",hi:"कोई भी बिना किसी प्रशिक्षण के एक्स-रे को सटीक रूप से पढ़ सकता है।",mr:"कोणीही कोणत्याही प्रशिक्षणाशिवाय एक्स-रे अचूकपणे वाचू शकतो."}, answer:false, explain:{en:"Myth! Reading X-rays accurately takes years of specialized medical training.",hi:"मिथक! एक्स-रे को सटीक रूप से पढ़ने में सालों का विशेष मेडिकल प्रशिक्षण लगता है।",mr:"मिथक! एक्स-रे अचूकपणे वाचण्यासाठी वर्षानुवर्षांचं विशेष वैद्यकीय प्रशिक्षण लागतं."} }
            ]}}
          ]},
          { label: "Abnormal Vitals",
            bonusAssignment: {
              title: { en: "Vitals Detective Case", hi: "वाइटल्स जासूस केस", mr: "व्हायटल्स गुप्तहेर केस" },
              prompt: { en: "Write a short story about a patient whose vitals show something's wrong, and how a doctor figures it out. Take a photo of your story!",
                        hi: "एक मरीज़ के बारे में एक छोटी कहानी लिखो जिसके वाइटल्स कुछ गलत दिखाते हैं, और एक डॉक्टर इसे कैसे पता लगाता है। अपनी कहानी की फोटो लो!",
                        mr: "एका रुग्णाबद्दल एक छोटी गोष्ट लिहा ज्याचे व्हायटल्स काहीतरी चुकीचं दाखवतात, आणि डॉक्टर ते कसं शोधून काढतात. तुमच्या गोष्टीचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "📉", title: "Explore abnormal vitals patterns", mentorVisual: "📉",
              mentorIntro: {
                en: "Last year you learned normal vitals. Now let's go deeper — what does it look like when something's actually wrong?",
                hi: "पिछले साल तुमने सामान्य वाइटल्स सीखे। अब चलो और गहराई में जाते हैं — जब असल में कुछ गलत होता है तो यह कैसा दिखता है?",
                mr: "गेल्या वर्षी तुम्ही सामान्य व्हायटल्स शिकलात. आता चला अधिक खोलात जाऊया — जेव्हा खरंच काहीतरी चुकीचं होतं तेव्हा ते कसं दिसतं?"
              },
              data: { visual: "📉", animation: "ecg", hotspots: [
              { label:{en:"Very fast heart rate",hi:"बहुत तेज़ हृदय गति",mr:"खूप जलद हृदयगती"}, fact:{en:"A resting heart rate consistently over 100 bpm in someone not exercising can be a sign of a problem needing attention!"} },
              { label:{en:"Very low oxygen",hi:"बहुत कम ऑक्सीजन",mr:"खूप कमी ऑक्सिजन"}, fact:{en:"Oxygen levels below 90% are considered concerning and usually need urgent medical attention!"} },
              { label:{en:"Irregular pattern",hi:"अनियमित पैटर्न",mr:"अनियमित नमुना"}, fact:{en:"Sometimes it's not just the number, but an irregular, unpredictable pattern that catches a doctor's attention!"} }
            ]}},
            { engine: "build-match", icon: "📉", title: "Sort vitals cases by urgency", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice with some realistic vitals scenarios — sorting by exactly how urgent each one is.",
                hi: "चलो कुछ यथार्थवादी वाइटल्स परिदृश्यों के साथ अभ्यास करते हैं — हर एक कितना अत्यावश्यक है उसके अनुसार छाँटते हुए।",
                mr: "चला काही वास्तववादी व्हायटल्स परिस्थितींसह सराव करूया — प्रत्येक किती तातडीचं आहे यानुसार वर्गीकृत करत."
              },
              data: { noStakes: false, zones: [
              { id: "mild", label: { en:"Heart rate 95 bpm after climbing stairs", hi:"सीढ़ियाँ चढ़ने के बाद हृदय गति 95 बीपीएम", mr:"जिना चढल्यानंतर हृदयगती 95 बीपीएम" } },
              { id: "moderate", label: { en:"Resting heart rate 110 bpm, no clear reason", hi:"आराम में हृदय गति 110 बीपीएम, कोई स्पष्ट कारण नहीं", mr:"विश्रांतीत हृदयगती 110 बीपीएम, कोणतंही स्पष्ट कारण नाही" } },
              { id: "urgent", label: { en:"Oxygen suddenly drops to 85%", hi:"ऑक्सीजन अचानक 85% तक गिरती है", mr:"ऑक्सिजन अचानक 85% पर्यंत घसरतो" } }
            ], chips: ["mild","moderate","urgent"], facts: {
              mild:"That's expected and normal — heart rate naturally rises with activity!",
              moderate:"That's worth checking — an unexplained elevated resting rate needs a closer look!",
              urgent:"That's urgent — a sudden oxygen drop needs immediate medical attention!"
            }}},
            { type: "Quiz", icon: "📝", title: "Abnormal vitals quiz",
              desc: { en:"A real quiz on identifying and interpreting abnormal vitals readings.", hi:"असामान्य वाइटल्स रीडिंग को पहचानने और समझने पर एक असली क्विज़।", mr:"असामान्य व्हायटल्स रीडिंग ओळखण्यावर आणि समजून घेण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Context matters",
              desc: { en:"Why do you think a doctor needs to know the context (like whether someone just exercised) before deciding if a vitals reading is concerning?", hi:"तुम्हें क्यों लगता है कि एक डॉक्टर को यह तय करने से पहले संदर्भ (जैसे क्या किसी ने अभी व्यायाम किया) जानना ज़रूरी है कि वाइटल्स रीडिंग चिंताजनक है या नहीं?", mr:"व्हायटल्स रीडिंग चिंताजनक आहे की नाही हे ठरवण्याआधी डॉक्टरांना संदर्भ (जसं कोणी नुकताच व्यायाम केला आहे का) माहीत असणं का आवश्यक आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Abnormal Vitals Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced vitals fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस वाइटल्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत व्हायटल्स तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Baseline matters?",hi:"बेसलाइन मायने रखती है?",mr:"बेसलाइन महत्त्वाची आहे?"}, back:{en:"Doctors often compare a patient's current vitals to their own normal baseline, not just a general average! 📊",hi:"डॉक्टर अक्सर मरीज़ के वर्तमान वाइटल्स की तुलना उनके अपने सामान्य बेसलाइन से करते हैं, सिर्फ़ एक सामान्य औसत से नहीं! 📊",mr:"डॉक्टर अनेकदा रुग्णाच्या सध्याच्या व्हायटल्सची तुलना त्यांच्या स्वतःच्या सामान्य बेसलाइनशी करतात, फक्त सामान्य सरासरीशी नाही! 📊"} },
              { front:{en:"Trends over time?",hi:"समय के साथ रुझान?",mr:"कालांतराने कल?"}, back:{en:"A single abnormal reading matters less than a clear trend — doctors often track vitals over hours or days! 📈",hi:"एक अकेली असामान्य रीडिंग एक स्पष्ट रुझान से कम मायने रखती है — डॉक्टर अक्सर घंटों या दिनों में वाइटल्स को ट्रैक करते हैं! 📈",mr:"एक असामान्य रीडिंग स्पष्ट कलापेक्षा कमी महत्त्वाची असते — डॉक्टर अनेकदा तासा-दिवसांमध्ये व्हायटल्स ट्रॅक करतात! 📈"} },
              { front:{en:"Multiple abnormal vitals together?",hi:"कई असामान्य वाइटल्स एक साथ?",mr:"अनेक असामान्य व्हायटल्स एकत्र?"}, back:{en:"When several vitals are abnormal at the same time, it's usually taken much more seriously than just one! 🚨",hi:"जब कई वाइटल्स एक साथ असामान्य होते हैं, तो इसे आमतौर पर सिर्फ़ एक से कहीं ज़्यादा गंभीरता से लिया जाता है! 🚨",mr:"जेव्हा अनेक व्हायटल्स एकाच वेळी असामान्य असतात, तेव्हा हे सहसा फक्त एकापेक्षा खूप जास्त गंभीरतेने घेतलं जातं! 🚨"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Abnormal Vitals or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your abnormal vitals knowledge! Decide if each statement is true or a myth.",
                hi: "चलो असामान्य वाइटल्स के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला असामान्य व्हायटल्सच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A heart rate of 120 bpm right after running is automatically a serious concern.",hi:"दौड़ने के तुरंत बाद 120 बीपीएम की हृदय गति स्वतः ही एक गंभीर चिंता है।",mr:"धावल्यानंतर लगेच 120 बीपीएमची हृदयगती आपोआप एक गंभीर चिंतेची बाब आहे."}, answer:false, explain:{en:"Myth! An elevated heart rate right after exercise is completely expected and normal.",hi:"मिथक! व्यायाम के तुरंत बाद बढ़ी हुई हृदय गति पूरी तरह अपेक्षित और सामान्य है।",mr:"मिथक! व्यायामानंतर लगेच वाढलेली हृदयगती पूर्णपणे अपेक्षित आणि सामान्य आहे."} },
              { text:{en:"A sudden drop in oxygen levels needs urgent medical attention.",hi:"ऑक्सीजन लेवल में अचानक गिरावट को तुरंत मेडिकल ध्यान चाहिए।",mr:"ऑक्सिजन पातळीत अचानक घसरण झाल्यास तातडीने वैद्यकीय लक्ष हवं."}, answer:true, explain:{en:"True! A sudden oxygen drop is one of the clearest urgent warning signs in medicine.",hi:"सच! ऑक्सीजन में अचानक गिरावट चिकित्सा में सबसे स्पष्ट अत्यावश्यक चेतावनी संकेतों में से एक है।",mr:"खरं! अचानक ऑक्सिजन घसरण ही वैद्यकशास्त्रातील सर्वात स्पष्ट तातडीच्या इशाऱ्यांपैकी एक आहे."} },
              { text:{en:"Doctors only look at a single vitals reading, never a trend over time.",hi:"डॉक्टर केवल एक वाइटल्स रीडिंग देखते हैं, कभी समय के साथ रुझान नहीं।",mr:"डॉक्टर फक्त एकच व्हायटल्स रीडिंग बघतात, कधीच कालांतराने कल नाही."}, answer:false, explain:{en:"Myth! Doctors often track vitals over time to understand the full pattern, not just one moment.",hi:"मिथक! डॉक्टर अक्सर पूरे पैटर्न को समझने के लिए समय के साथ वाइटल्स को ट्रैक करते हैं, सिर्फ़ एक पल नहीं।",mr:"मिथक! डॉक्टर अनेकदा संपूर्ण नमुना समजून घेण्यासाठी कालांतराने व्हायटल्स ट्रॅक करतात, फक्त एक क्षण नाही."} }
            ]}}
          ]},
          { label: "Microscope & Cells",
            bonusAssignment: {
              title: { en: "Cell Structure Model", hi: "कोशिका संरचना मॉडल", mr: "पेशी रचना मॉडेल" },
              prompt: { en: "Build or draw a model of a human cell, labeling at least 4 parts. Take a photo and explain what each part does!",
                        hi: "एक मानव कोशिका का मॉडल बनाओ या बनाओ, कम से कम 4 हिस्सों को लेबल करते हुए। फोटो लो और बताओ हर हिस्सा क्या करता है!",
                        mr: "मानवी पेशीचं मॉडेल बनवा किंवा काढा, किमान 4 भाग लेबल करून. फोटो घ्या आणि प्रत्येक भाग काय करतो ते सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🔬", title: "Explore cells under a microscope", mentorVisual: "🔬",
              mentorIntro: {
                en: "Every part of your body is made of tiny cells! Let's explore what a cell actually looks like up close.",
                hi: "तुम्हारे शरीर का हर हिस्सा छोटी-छोटी कोशिकाओं से बना है! चलो एक्सप्लोर करते हैं एक कोशिका पास से असल में कैसी दिखती है।",
                mr: "तुमच्या शरीराचा प्रत्येक भाग छोट्या पेशींनी बनलेला आहे! चला एक्सप्लोर करूया एक पेशी जवळून खरंच कशी दिसते."
              },
              data: { visual: "🔬", animation: "celldivide", hotspots: [
              { label:{en:"Nucleus",hi:"नाभिक",mr:"केंद्रक"}, fact:{en:"The nucleus is like the cell's control center, holding all the genetic instructions!"} },
              { label:{en:"Cell membrane",hi:"कोशिका झिल्ली",mr:"पेशी आवरण"}, fact:{en:"The cell membrane is the outer boundary, deciding what comes in and out of the cell!"} },
              { label:{en:"Mitochondria",hi:"माइटोकॉन्ड्रिया",mr:"माइटोकॉन्ड्रिया"}, fact:{en:"Mitochondria are often called the cell's 'powerhouse' because they produce energy!"} }
            ]}},
            { engine: "build-match", icon: "🔬", title: "Match cell part to its job", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching each cell part to exactly what it does — real precision at the microscopic level!",
                hi: "चलो हर कोशिका हिस्से को यह मैच करने का अभ्यास करते हैं कि यह बिल्कुल क्या करता है — सूक्ष्म स्तर पर असली सटीकता!",
                mr: "चला प्रत्येक पेशी भाग तो नेमकं काय करतो याच्याशी जुळवण्याचा सराव करूया — सूक्ष्म पातळीवर खरी अचूकता!"
              },
              data: { noStakes: false, zones: [
              { id: "nucleus", label: { en:"Holds genetic instructions", hi:"आनुवंशिक निर्देश रखता है", mr:"जनुकीय सूचना ठेवतं" } },
              { id: "membrane", label: { en:"Controls what enters and exits", hi:"क्या अंदर-बाहर जाता है नियंत्रित करता है", mr:"काय आत-बाहेर जातं ते नियंत्रित करतं" } },
              { id: "mitochondria", label: { en:"Produces energy for the cell", hi:"कोशिका के लिए ऊर्जा बनाता है", mr:"पेशीसाठी ऊर्जा तयार करतं" } }
            ], chips: ["nucleus","membrane","mitochondria"], facts: {
              nucleus:"That's the nucleus — the control center!",
              membrane:"That's the cell membrane — the gatekeeper!",
              mitochondria:"That's the mitochondria — the powerhouse!"
            }}},
            { type: "Quiz", icon: "📝", title: "Cell structure quiz",
              desc: { en:"A real quiz on cell parts and their specific functions.", hi:"कोशिका के हिस्सों और उनके खास कार्यों पर एक असली क्विज़।", mr:"पेशीचे भाग आणि त्यांची विशिष्ट कार्यं यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Tiny building blocks",
              desc: { en:"Why do you think understanding cells, which are so tiny, matters so much for understanding your whole body?", hi:"तुम्हें क्यों लगता है कि कोशिकाओं को समझना, जो इतनी छोटी हैं, तुम्हारे पूरे शरीर को समझने के लिए इतना मायने रखता है?", mr:"पेशी, ज्या इतक्या लहान आहेत, समजून घेणं तुमचं संपूर्ण शरीर समजून घेण्यासाठी इतकं महत्त्वाचं का आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Cell Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced cell fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस कोशिका तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत पेशी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"How many cells?",hi:"कितनी कोशिकाएँ?",mr:"किती पेशी?"}, back:{en:"Your body is made of an estimated 37 trillion cells, all working together! 🔢",hi:"तुम्हारा शरीर अनुमानित 37 खरब कोशिकाओं से बना है, सब एक साथ काम करते हुए! 🔢",mr:"तुमचं शरीर अंदाजे 37 ट्रिलियन पेशींनी बनलेलं आहे, सर्व एकत्र काम करत! 🔢"} },
              { front:{en:"Cells replace themselves?",hi:"कोशिकाएँ खुद को बदलती हैं?",mr:"पेशी स्वतःला बदलतात?"}, back:{en:"Most of your cells are constantly being replaced — some renew in days, others take years! 🔄",hi:"तुम्हारी ज़्यादातर कोशिकाएँ लगातार बदली जा रही हैं — कुछ दिनों में नई होती हैं, कुछ को साल लगते हैं! 🔄",mr:"तुमच्या बहुतेक पेशी सतत बदलल्या जात आहेत — काही दिवसांत नवीन होतात, काहींना वर्षं लागतात! 🔄"} },
              { front:{en:"Different cell types?",hi:"अलग-अलग कोशिका प्रकार?",mr:"वेगवेगळे पेशी प्रकार?"}, back:{en:"Your body has over 200 different types of specialized cells, each doing a unique job! 🧩",hi:"तुम्हारे शरीर में 200 से ज़्यादा अलग-अलग तरह की विशेष कोशिकाएँ हैं, हर एक अनोखा काम करती हुई! 🧩",mr:"तुमच्या शरीरात 200 हून अधिक वेगवेगळ्या प्रकारच्या विशेष पेशी आहेत, प्रत्येक अनोखं काम करत! 🧩"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Cells or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your cell knowledge! Decide if each statement is true or a myth.",
                hi: "चलो कोशिका के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला पेशीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Every cell in your body looks and works exactly the same.",hi:"तुम्हारे शरीर की हर कोशिका बिल्कुल एक जैसी दिखती और काम करती है।",mr:"तुमच्या शरीरातील प्रत्येक पेशी अगदी सारखी दिसते आणि काम करते."}, answer:false, explain:{en:"Myth! Your body has over 200 different specialized cell types, each with a unique structure and job.",hi:"मिथक! तुम्हारे शरीर में 200 से ज़्यादा अलग-अलग विशेष कोशिका प्रकार हैं, हर एक की अनोखी संरचना और काम है।",mr:"मिथक! तुमच्या शरीरात 200 हून अधिक वेगवेगळे विशेष पेशी प्रकार आहेत, प्रत्येकाची अनोखी रचना आणि काम आहे."} },
              { text:{en:"The nucleus holds a cell's genetic instructions.",hi:"नाभिक एक कोशिका के आनुवंशिक निर्देश रखता है।",mr:"केंद्रक पेशीच्या जनुकीय सूचना ठेवतं."}, answer:true, explain:{en:"True! The nucleus acts as the control center, holding the DNA that instructs the whole cell.",hi:"सच! नाभिक नियंत्रण केंद्र के रूप में काम करता है, DNA रखता है जो पूरी कोशिका को निर्देश देता है।",mr:"खरं! केंद्रक नियंत्रण केंद्र म्हणून काम करतं, DNA ठेवतं जो संपूर्ण पेशीला सूचना देतो."} },
              { text:{en:"Cells in your body never get replaced once you're fully grown.",hi:"तुम्हारे पूरी तरह बड़े होने के बाद तुम्हारे शरीर की कोशिकाएँ कभी नहीं बदलतीं।",mr:"तुम्ही पूर्ण वाढ झाल्यावर तुमच्या शरीरातील पेशी कधीच बदलल्या जात नाहीत."}, answer:false, explain:{en:"Myth! Most cells continue to be replaced throughout your entire life, not just while growing.",hi:"मिथक! ज़्यादातर कोशिकाएँ तुम्हारी पूरी ज़िंदगी बदली जाती रहती हैं, सिर्फ़ बढ़ते समय नहीं।",mr:"मिथक! बहुतेक पेशी तुमच्या संपूर्ण आयुष्यभर बदलल्या जात राहतात, फक्त वाढतानाच नाही."} }
            ]}}
          ]},
          { label: "Systems Connect",
            bonusAssignment: {
              title: { en: "Systems Connection Map", hi: "सिस्टम कनेक्शन मानचित्र", mr: "यंत्रणा जोडणी नकाशा" },
              prompt: { en: "Draw a map showing how 3 body systems (like heart, lungs, and muscles) connect and depend on each other during exercise. Take a photo!",
                        hi: "एक मानचित्र बनाओ जो दिखाए कि व्यायाम के दौरान 3 शरीर सिस्टम (जैसे दिल, फेफड़े, और मांसपेशियाँ) कैसे जुड़ते और एक दूसरे पर निर्भर करते हैं। फोटो लो!",
                        mr: "व्यायामादरम्यान 3 शरीर यंत्रणा (जसं हृदय, फुफ्फुसं, आणि स्नायू) कशा जोडल्या जातात आणि एकमेकांवर अवलंबून असतात हे दाखवणारा नकाशा काढा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🔗", title: "Explore how systems connect", mentorVisual: "🔗",
              mentorIntro: {
                en: "No body system works completely alone! Let's explore how they connect during something like exercise.",
                hi: "कोई भी शरीर सिस्टम पूरी तरह अकेले काम नहीं करता! चलो एक्सप्लोर करते हैं जैसे व्यायाम के दौरान वे कैसे जुड़ते हैं।",
                mr: "कोणतीही शरीर यंत्रणा पूर्णपणे एकटी काम करत नाही! चला एक्सप्लोर करूया व्यायामासारख्या वेळी त्या कशा जोडल्या जातात."
              },
              data: { visual: "🔗", hotspots: [
              { label:{en:"Lungs & heart",hi:"फेफड़े और दिल",mr:"फुफ्फुसं आणि हृदय"}, fact:{en:"During exercise, your lungs bring in more oxygen while your heart pumps faster to deliver it — a perfectly timed team!"} },
              { label:{en:"Muscles & nerves",hi:"मांसपेशियाँ और नसें",mr:"स्नायू आणि चेता"}, fact:{en:"Your nervous system sends the signals that tell your muscles exactly when and how to move!"} },
              { label:{en:"Whole body teamwork",hi:"पूरे शरीर का टीमवर्क",mr:"संपूर्ण शरीराचं संघकार्य"}, fact:{en:"Even something simple like running uses your heart, lungs, muscles, bones, and nerves all working together at once!"} }
            ]}},
            { engine: "build-match", icon: "🔗", title: "Match system pair to their connection", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching pairs of systems to how they specifically work together.",
                hi: "चलो सिस्टम की जोड़ियों को यह मैच करने का अभ्यास करते हैं कि वे विशेष रूप से एक साथ कैसे काम करते हैं।",
                mr: "चला यंत्रणांच्या जोड्या त्या विशेषतः एकत्र कशा काम करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "heart_lungs", label: { en:"Delivering oxygen to the whole body", hi:"पूरे शरीर में ऑक्सीजन पहुँचाना", mr:"संपूर्ण शरीरात ऑक्सिजन पोहोचवणं" } },
              { id: "nerves_muscles", label: { en:"Controlling exact, timed movement", hi:"सटीक, समयबद्ध हलचल को नियंत्रित करना", mr:"अचूक, वेळेवर हालचाल नियंत्रित करणं" } },
              { id: "digestion_blood", label: { en:"Getting nutrients to where they're needed", hi:"पोषक तत्वों को जहाँ ज़रूरत है वहाँ पहुँचाना", mr:"पोषकद्रव्यं जिथे गरज आहे तिथे पोहोचवणं" } }
            ], chips: ["heart_lungs","nerves_muscles","digestion_blood"], facts: {
              heart_lungs:"That's heart and lungs working together!",
              nerves_muscles:"That's nerves and muscles working together!",
              digestion_blood:"That's digestion and blood working together!"
            }}},
            { type: "Quiz", icon: "📝", title: "Systems connection quiz",
              desc: { en:"A real quiz on how different body systems work together.", hi:"अलग-अलग शरीर सिस्टम कैसे एक साथ काम करते हैं, इस पर एक असली क्विज़।", mr:"वेगवेगळ्या शरीर यंत्रणा एकत्र कशा काम करतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Whole-body thinking",
              desc: { en:"Why do you think doctors need to think about the WHOLE body connecting together, not just one system in isolation?", hi:"तुम्हें क्यों लगता है कि डॉक्टरों को पूरे शरीर के एक साथ जुड़ने के बारे में सोचना ज़रूरी है, सिर्फ़ एक सिस्टम अलग से नहीं?", mr:"डॉक्टरांना संपूर्ण शरीर एकत्र जोडलं जाण्याबद्दल विचार करणं आवश्यक आहे, फक्त एका यंत्रणेबद्दल वेगळं नाही, असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Systems Connection Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced systems-connection fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस सिस्टम-कनेक्शन तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत यंत्रणा-जोडणी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"One symptom, many systems?",hi:"एक लक्षण, कई सिस्टम?",mr:"एक लक्षण, अनेक यंत्रणा?"}, back:{en:"A symptom like tiredness could actually involve your heart, blood, lungs, or several other systems together! 🔍",hi:"थकान जैसा एक लक्षण असल में तुम्हारे दिल, खून, फेफड़े, या कई और सिस्टम को एक साथ शामिल कर सकता है! 🔍",hi:"थकान जैसा एक लक्षण असल में तुम्हारे दिल, खून, फेफड़े, या कई और सिस्टम को एक साथ शामिल कर सकता है! 🔍",mr:"थकवा यासारखं एक लक्षण खरंतर तुमचं हृदय, रक्त, फुफ्फुसं, किंवा इतर अनेक यंत्रणा एकत्र समाविष्ट करू शकतं! 🔍"} },
              { front:{en:"Specialists still connect?",hi:"विशेषज्ञ फिर भी जुड़ते हैं?",mr:"तज्ज्ञ तरीही जोडतात?"}, back:{en:"Even specialist doctors often talk to each other, since one system's problem can affect another! 🤝",hi:"यहाँ तक कि विशेषज्ञ डॉक्टर भी अक्सर एक दूसरे से बात करते हैं, क्योंकि एक सिस्टम की समस्या दूसरे को प्रभावित कर सकती है! 🤝",mr:"अगदी तज्ज्ञ डॉक्टरही अनेकदा एकमेकांशी बोलतात, कारण एका यंत्रणेची समस्या दुसरीवर परिणाम करू शकते! 🤝"} },
              { front:{en:"Stress affects everything?",hi:"तनाव सब कुछ प्रभावित करता है?",mr:"तणाव सर्वकाही प्रभावित करतो?"}, back:{en:"Stress can genuinely affect your heart rate, digestion, and immune system all at the same time! 😮",hi:"तनाव असल में तुम्हारी हृदय गति, पाचन, और इम्यून सिस्टम को एक साथ प्रभावित कर सकता है! 😮",mr:"तणाव खरंच तुमची हृदयगती, पचन, आणि रोगप्रतिकारक शक्ती एकाच वेळी प्रभावित करू शकतो! 😮"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Systems Connect or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your systems-connection knowledge! Decide if each statement is true or a myth.",
                hi: "चलो सिस्टम-कनेक्शन के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला यंत्रणा-जोडणीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Each body system works completely independently, with no effect on the others.",hi:"हर शरीर सिस्टम पूरी तरह स्वतंत्र रूप से काम करता है, दूसरों पर कोई असर नहीं।",mr:"प्रत्येक शरीर यंत्रणा पूर्णपणे स्वतंत्रपणे काम करते, इतरांवर काहीही परिणाम नाही."}, answer:false, explain:{en:"Myth! Body systems are deeply interconnected — a problem in one often affects others.",hi:"मिथक! शरीर सिस्टम गहराई से आपस में जुड़े हैं — एक में समस्या अक्सर दूसरों को प्रभावित करती है।",mr:"मिथक! शरीर यंत्रणा खोलवर एकमेकांशी जोडलेल्या असतात — एकातील समस्या अनेकदा इतरांवर परिणाम करते."} },
              { text:{en:"During exercise, your heart, lungs, and muscles all work together at the same time.",hi:"व्यायाम के दौरान, तुम्हारा दिल, फेफड़े, और मांसपेशियाँ सब एक साथ काम करते हैं।",mr:"व्यायामादरम्यान, तुमचं हृदय, फुफ्फुसं, आणि स्नायू सर्व एकाच वेळी एकत्र काम करतात."}, answer:true, explain:{en:"True! This is a perfect example of whole-body teamwork happening in real time.",hi:"सच! यह वास्तविक समय में होने वाले पूरे शरीर के टीमवर्क का एक बेहतरीन उदाहरण है।",mr:"खरं! हे वास्तविक वेळेत होणाऱ्या संपूर्ण शरीराच्या संघकार्याचं एक उत्तम उदाहरण आहे."} },
              { text:{en:"Specialist doctors never need to communicate with each other about a patient.",hi:"विशेषज्ञ डॉक्टरों को कभी एक मरीज़ के बारे में एक दूसरे से बात करने की ज़रूरत नहीं।",mr:"तज्ज्ञ डॉक्टरांना एका रुग्णाबद्दल एकमेकांशी संवाद साधण्याची कधीच गरज नसते."}, answer:false, explain:{en:"Myth! Since systems connect, specialists often need to communicate to understand the full picture.",hi:"मिथक! चूंकि सिस्टम जुड़े हैं, विशेषज्ञों को अक्सर पूरी तस्वीर समझने के लिए बात करने की ज़रूरत होती है।",mr:"मिथक! यंत्रणा जोडलेल्या असल्यामुळे, तज्ज्ञांना अनेकदा संपूर्ण चित्र समजून घेण्यासाठी संवाद साधण्याची गरज असते."} }
            ]}}
          ]},
          { label: "First Response Sequence",
            bonusAssignment: {
              title: { en: "First Response Flowchart", hi: "फर्स्ट रिस्पॉन्स फ़्लोचार्ट", mr: "फर्स्ट रिस्पॉन्स फ्लोचार्ट" },
              prompt: { en: "Create a simple flowchart of what to do first if someone near you suddenly feels unwell. Take a photo and explain each step!",
                        hi: "एक साधा फ़्लोचार्ट बनाओ कि अगर तुम्हारे पास कोई अचानक अस्वस्थ महसूस करे तो पहले क्या करना है। फोटो लो और हर कदम समझाओ!",
                        mr: "जर तुमच्याजवळ कोणाला अचानक अस्वस्थ वाटलं तर आधी काय करावं याचा साधा फ्लोचार्ट तयार करा. फोटो घ्या आणि प्रत्येक पायरी समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🚨", title: "Explore the first response sequence", mentorVisual: "🚨",
              mentorIntro: {
                en: "In an emergency, there's a real, trained sequence to follow. Let's learn the basics.",
                hi: "एक आपातकाल में, पालन करने के लिए एक असली, प्रशिक्षित क्रम है। चलो बुनियादी बातें सीखते हैं।",
                mr: "आणीबाणीत, पाळण्यासाठी एक खरा, प्रशिक्षित क्रम असतो. चला मूलभूत गोष्टी शिकूया."
              },
              data: { visual: "🚨", hotspots: [
              { label:{en:"Check the scene",hi:"जगह की जाँच करो",mr:"जागा तपासा"}, fact:{en:"First responders always check that the scene itself is safe before approaching — safety first, always!"} },
              { label:{en:"Check the person",hi:"व्यक्ति की जाँच करो",mr:"व्यक्तीला तपासा"}, fact:{en:"Next, check if the person is responsive and breathing — this shapes everything that happens next!"} },
              { label:{en:"Get help",hi:"मदद लो",mr:"मदत घ्या"}, fact:{en:"Calling for emergency help early is one of the most important steps in the whole sequence!"} }
            ]}},
            { engine: "build-match", icon: "🚨", title: "Sequence the first response steps", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice putting the first response steps in the correct order — sequence matters a lot here!",
                hi: "चलो फर्स्ट रिस्पॉन्स के कदमों को सही क्रम में रखने का अभ्यास करते हैं — यहाँ क्रम बहुत मायने रखता है!",
                mr: "चला फर्स्ट रिस्पॉन्सचे टप्पे योग्य क्रमाने ठेवण्याचा सराव करूया — इथे क्रम खूप महत्त्वाचा आहे!"
              },
              data: { noStakes: false, zones: [
              { id: "safe", label: { en:"Make sure the scene is safe", hi:"सुनिश्चित करो जगह सुरक्षित है", mr:"जागा सुरक्षित आहे याची खात्री करा" } },
              { id: "check", label: { en:"Check if the person responds", hi:"जाँचो क्या व्यक्ति प्रतिक्रिया देता है", mr:"व्यक्ती प्रतिसाद देते का ते तपासा" } },
              { id: "call", label: { en:"Call or send for emergency help", hi:"आपातकालीन मदद के लिए कॉल करो या भेजो", mr:"आणीबाणी मदतीसाठी कॉल करा किंवा पाठवा" } }
            ], chips: ["safe","check","call"], facts: {
              safe:"Step 1: Always check the scene is safe first!",
              check:"Step 2: Check the person's condition next!",
              call:"Step 3: Get emergency help on the way as soon as possible!"
            }}},
            { type: "Quiz", icon: "📝", title: "First response sequence quiz",
              desc: { en:"A real quiz on the correct order of first response steps.", hi:"फर्स्ट रिस्पॉन्स कदमों के सही क्रम पर एक असली क्विज़।", mr:"फर्स्ट रिस्पॉन्स टप्प्यांच्या योग्य क्रमावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Why sequence matters",
              desc: { en:"Why do you think following the RIGHT order matters so much in an emergency, instead of just doing things in any order?", hi:"तुम्हें क्यों लगता है कि एक आपातकाल में सही क्रम का पालन करना इतना मायने रखता है, बस किसी भी क्रम में काम करने के बजाय?", mr:"आणीबाणीत योग्य क्रमाचं पालन करणं इतकं महत्त्वाचं का आहे, फक्त कोणत्याही क्रमाने न करता, असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "First Response Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced first-response fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस फर्स्ट-रिस्पॉन्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत फर्स्ट-रिस्पॉन्स तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Trained responders practice?",hi:"प्रशिक्षित रिस्पॉन्डर अभ्यास करते हैं?",mr:"प्रशिक्षित रिस्पॉन्डर सराव करतात?"}, back:{en:"Real first responders practice this exact sequence over and over, so it becomes automatic under pressure! 🎯",hi:"असली फर्स्ट रिस्पॉन्डर इस सटीक क्रम का बार-बार अभ्यास करते हैं, ताकि यह दबाव में स्वचालित हो जाए! 🎯",mr:"खरे फर्स्ट रिस्पॉन्डर या नेमक्या क्रमाचा वारंवार सराव करतात, जेणेकरून तो दबावाखाली आपोआप होईल! 🎯"} },
              { front:{en:"Scene safety first, always?",hi:"जगह की सुरक्षा हमेशा पहले?",mr:"जागेची सुरक्षा नेहमी आधी?"}, back:{en:"Checking the scene first isn't just a suggestion — helping an injured person is much harder if the helper also gets hurt! 🛡️",hi:"पहले जगह की जाँच करना सिर्फ़ एक सुझाव नहीं है — अगर मददगार भी घायल हो जाए तो चोटिल व्यक्ति की मदद करना कहीं ज़्यादा मुश्किल हो जाता है! 🛡️",mr:"आधी जागा तपासणं हा फक्त एक सल्ला नाही — जर मदतनीसही जखमी झाला तर जखमी व्यक्तीला मदत करणं खूप कठीण होतं! 🛡️"} },
              { front:{en:"Every second counts?",hi:"हर सेकंड मायने रखता है?",mr:"प्रत्येक सेकंद महत्त्वाचा आहे?"}, back:{en:"In many real emergencies, calling for help even a few minutes earlier can genuinely make a big difference! ⏱️",hi:"कई असली आपातकाल में, कुछ मिनट पहले भी मदद के लिए कॉल करना असल में बड़ा फ़र्क डाल सकता है! ⏱️",mr:"अनेक खऱ्या आणीबाणींमध्ये, काही मिनिटं आधीही मदतीसाठी कॉल करणं खरंच मोठा फरक पाडू शकतं! ⏱️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "First Response or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your first-response knowledge! Decide if each statement is true or a myth.",
                hi: "चलो फर्स्ट-रिस्पॉन्स के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला फर्स्ट-रिस्पॉन्सच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"You should always rush in to help without checking if the scene is safe.",hi:"तुम्हें हमेशा यह जाँचे बिना मदद करने के लिए दौड़ जाना चाहिए कि जगह सुरक्षित है।",mr:"जागा सुरक्षित आहे का हे न तपासता तुम्ही नेहमी मदत करायला धावत जायला हवं."}, answer:false, explain:{en:"Myth! Checking scene safety first is a critical step — helpers getting hurt too makes everything worse.",hi:"मिथक! पहले जगह की सुरक्षा जाँचना एक महत्वपूर्ण कदम है — मददगारों का भी चोटिल होना सब कुछ बदतर बना देता है।",mr:"मिथक! आधी जागेची सुरक्षा तपासणं हे एक महत्त्वाचं पाऊल आहे — मदतनीसही जखमी होणं सर्वकाही अधिक वाईट करतं."} },
              { text:{en:"Calling for emergency help early can make a real difference in outcomes.",hi:"जल्दी आपातकालीन मदद के लिए कॉल करना नतीजों में असली फ़र्क डाल सकता है।",mr:"आणीबाणी मदतीसाठी लवकर कॉल करणं निकालांमध्ये खरा फरक पाडू शकतो."}, answer:true, explain:{en:"True! Getting help on the way quickly is one of the most impactful things you can do.",hi:"सच! जल्दी से मदद को रास्ते में लगाना उन सबसे प्रभावशाली चीज़ों में से एक है जो तुम कर सकते हो।",mr:"खरं! मदत लवकर वाटेत आणणं तुम्ही करू शकता अशा सर्वात प्रभावी गोष्टींपैकी एक आहे."} },
              { text:{en:"The order of first response steps doesn't really matter, as long as you do all of them eventually.",hi:"फर्स्ट रिस्पॉन्स कदमों का क्रम वाकई मायने नहीं रखता, जब तक तुम आख़िरकार सब कर लो।",mr:"फर्स्ट रिस्पॉन्स टप्प्यांचा क्रम खरंच महत्त्वाचा नाही, जोपर्यंत तुम्ही अखेरीस सर्व करता."}, answer:false, explain:{en:"Myth! The correct order — safety, then checking the person, then calling for help — genuinely matters for the best outcome.",hi:"मिथक! सही क्रम — सुरक्षा, फिर व्यक्ति की जाँच, फिर मदद के लिए कॉल — सबसे अच्छे नतीजे के लिए वाकई मायने रखता है।",mr:"मिथक! योग्य क्रम — सुरक्षा, मग व्यक्तीला तपासणं, मग मदतीसाठी कॉल करणं — सर्वोत्तम निकालासाठी खरंच महत्त्वाचा आहे."} }
            ]}}
          ]},
          { label: "Instrument Matching",
            bonusAssignment: {
              title: { en: "Instrument Purpose Cards", hi: "उपकरण उद्देश्य कार्ड", mr: "साधन उद्देश कार्ड" },
              prompt: { en: "Pick 3 medical instruments and make a card for each explaining exactly what it's used for. Take a photo!",
                        hi: "3 मेडिकल उपकरण चुनो और हर एक के लिए एक कार्ड बनाओ जो समझाए कि यह बिल्कुल किस लिए इस्तेमाल होता है। फोटो लो!",
                        mr: "3 वैद्यकीय साधनं निवडा आणि प्रत्येकासाठी ते नेमकं कशासाठी वापरलं जातं हे समजावणारं कार्ड बनवा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧰", title: "Explore advanced medical instruments", mentorVisual: "🧰",
              mentorIntro: {
                en: "Beyond the basics, doctors use many specialized tools! Let's explore a few more advanced ones.",
                hi: "बुनियादी बातों से आगे, डॉक्टर कई विशेष उपकरण इस्तेमाल करते हैं! चलो कुछ और एडवांस उपकरणों को एक्सप्लोर करते हैं।",
                mr: "मूलभूत गोष्टींपलीकडे, डॉक्टर अनेक विशेष साधनं वापरतात! चला आणखी काही प्रगत साधनं एक्सप्लोर करूया."
              },
              data: { visual: "🧰", hotspots: [
              { label:{en:"Otoscope",hi:"ओटोस्कोप",mr:"ओटोस्कोप"}, fact:{en:"An otoscope has a small light and magnifier, letting doctors look deep inside the ear canal!"} },
              { label:{en:"Sphygmomanometer",hi:"स्फिग्मोमैनोमीटर",mr:"स्फिग्मोमॅनोमीटर"}, fact:{en:"This long-named tool is just the proper term for a blood pressure cuff!"} },
              { label:{en:"Pulse oximeter",hi:"पल्स ऑक्सीमीटर",mr:"पल्स ऑक्सिमीटर"}, fact:{en:"This little clip-on device measures oxygen levels in your blood, usually placed on a finger!"} }
            ]}},
            { engine: "build-match", icon: "🧰", title: "Match instrument to its exact use", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching each instrument to precisely what it's used to check.",
                hi: "चलो हर उपकरण को यह मैच करने का अभ्यास करते हैं कि इसका इस्तेमाल बिल्कुल क्या जाँचने के लिए होता है।",
                mr: "चला प्रत्येक साधन ते नेमकं काय तपासण्यासाठी वापरलं जातं याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "otoscope", label: { en:"Looking inside the ear", hi:"कान के अंदर देखना", mr:"कानाच्या आत बघणं" } },
              { id: "bp_cuff", label: { en:"Measuring blood pressure", hi:"ब्लड प्रेशर मापना", mr:"रक्तदाब मोजणं" } },
              { id: "pulse_ox", label: { en:"Measuring blood oxygen level", hi:"रक्त ऑक्सीजन लेवल मापना", mr:"रक्तातील ऑक्सिजन पातळी मोजणं" } }
            ], chips: ["otoscope","bp_cuff","pulse_ox"], facts: {
              otoscope:"That's the otoscope!",
              bp_cuff:"That's the blood pressure cuff!",
              pulse_ox:"That's the pulse oximeter!"
            }}},
            { type: "Quiz", icon: "📝", title: "Instrument matching quiz",
              desc: { en:"A real quiz on advanced medical instruments and their exact uses.", hi:"एडवांस मेडिकल उपकरणों और उनके सटीक इस्तेमाल पर एक असली क्विज़।", mr:"प्रगत वैद्यकीय साधनं आणि त्यांचे नेमके उपयोग यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Tools and trust",
              desc: { en:"Why do you think patients need to trust that a doctor knows exactly how to use each specialized tool correctly?", hi:"तुम्हें क्यों लगता है कि मरीज़ों को यह भरोसा करना ज़रूरी है कि एक डॉक्टर जानता है कि हर विशेष उपकरण का सही इस्तेमाल कैसे करना है?", mr:"रुग्णांना विश्वास असणं का आवश्यक आहे की डॉक्टरांना प्रत्येक विशेष साधन बरोबर कसं वापरायचं हे नेमकं माहीत आहे, असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Instrument Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced instrument fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस उपकरण तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत साधन तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Non-invasive tools?",hi:"गैर-आक्रामक उपकरण?",mr:"गैर-आक्रमक साधनं?"}, back:{en:"Many modern instruments like pulse oximeters are 'non-invasive,' meaning they check things without any needles or cuts! ✨",hi:"पल्स ऑक्सीमीटर जैसे कई आधुनिक उपकरण 'नॉन-इनवेसिव' हैं, मतलब वे बिना किसी सुई या कट के चीज़ें जाँचते हैं! ✨",mr:"पल्स ऑक्सिमीटरसारखी अनेक आधुनिक साधनं 'नॉन-इनवेसिव्ह' आहेत, म्हणजे ती कोणत्याही सुई किंवा कापाशिवाय गोष्टी तपासतात! ✨"} },
              { front:{en:"Instruments keep evolving?",hi:"उपकरण विकसित होते रहते हैं?",mr:"साधनं विकसित होत राहतात?"}, back:{en:"Medical instruments keep improving — many tools today are smaller, faster, and more accurate than versions from decades ago! 📈",hi:"मेडिकल उपकरण सुधरते रहते हैं — आज के कई उपकरण दशकों पहले के वर्ज़न से छोटे, तेज़, और ज़्यादा सटीक हैं! 📈",mr:"वैद्यकीय साधनं सुधारत राहतात — आजची अनेक साधनं दशकांपूर्वीच्या आवृत्त्यांपेक्षा लहान, वेगवान, आणि अधिक अचूक आहेत! 📈"} },
              { front:{en:"Simple tools still matter?",hi:"साधारण उपकरण अभी भी मायने रखते हैं?",mr:"साधी साधनं अजूनही महत्त्वाची आहेत?"}, back:{en:"Even with advanced technology, simple tools like a stethoscope remain essential in everyday checkups! 🩺",hi:"एडवांस टेक्नोलॉजी के साथ भी, स्टेथोस्कोप जैसे साधारण उपकरण रोज़मर्रा के चेकअप में ज़रूरी बने रहते हैं! 🩺",mr:"प्रगत तंत्रज्ञानासोबतही, स्टेथोस्कोपसारखी साधी साधनं दैनंदिन तपासणीत आवश्यक राहतात! 🩺"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Instrument or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your instrument knowledge! Decide if each statement is true or a myth.",
                hi: "चलो उपकरण के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला साधनांच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A pulse oximeter requires a needle to measure oxygen levels.",hi:"पल्स ऑक्सीमीटर को ऑक्सीजन लेवल मापने के लिए सुई की ज़रूरत होती है।",mr:"पल्स ऑक्सिमीटरला ऑक्सिजन पातळी मोजण्यासाठी सुईची गरज असते."}, answer:false, explain:{en:"Myth! A pulse oximeter is non-invasive — it just clips onto a finger, no needles needed.",hi:"मिथक! पल्स ऑक्सीमीटर नॉन-इनवेसिव है — यह बस उंगली पर क्लिप होता है, किसी सुई की ज़रूरत नहीं।",mr:"मिथक! पल्स ऑक्सिमीटर नॉन-इनवेसिव्ह आहे — ते फक्त बोटावर क्लिप केलं जातं, सुईची गरज नाही."} },
              { text:{en:"A sphygmomanometer is the proper term for a blood pressure cuff.",hi:"स्फिग्मोमैनोमीटर ब्लड प्रेशर कफ़ के लिए सही शब्द है।",mr:"स्फिग्मोमॅनोमीटर हा रक्तदाब कफसाठीचा योग्य शब्द आहे."}, answer:true, explain:{en:"True! It's just the formal medical name for the familiar blood pressure cuff.",hi:"सच! यह बस परिचित ब्लड प्रेशर कफ़ के लिए औपचारिक मेडिकल नाम है।",mr:"खरं! हा फक्त परिचित रक्तदाब कफसाठीचा औपचारिक वैद्यकीय शब्द आहे."} },
              { text:{en:"Simple tools like stethoscopes are outdated and no longer used.",hi:"स्टेथोस्कोप जैसे साधारण उपकरण पुराने हो गए हैं और अब इस्तेमाल नहीं होते।",mr:"स्टेथोस्कोपसारखी साधी साधनं जुनी झाली आहेत आणि आता वापरली जात नाहीत."}, answer:false, explain:{en:"Myth! Simple tools like stethoscopes remain essential and widely used every single day.",hi:"मिथक! स्टेथोस्कोप जैसे साधारण उपकरण ज़रूरी बने रहते हैं और हर दिन व्यापक रूप से इस्तेमाल होते हैं।",mr:"मिथक! स्टेथोस्कोपसारखी साधी साधनं आवश्यक राहतात आणि दररोज मोठ्या प्रमाणावर वापरली जातात."} }
            ]}}
          ]},
          { label: "Illness Sorting",
            bonusAssignment: {
              title: { en: "Illness Sorting Board", hi: "बीमारी छाँटने वाला बोर्ड", mr: "आजार वर्गीकरण फलक" },
              prompt: { en: "Make a board sorting 5 common illnesses into 'contagious' vs 'not contagious.' Take a photo and explain your reasoning!",
                        hi: "5 आम बीमारियों को 'संक्रामक' बनाम 'गैर-संक्रामक' में छाँटते हुए एक बोर्ड बनाओ। फोटो लो और अपनी सोच समझाओ!",
                        mr: "5 सामान्य आजार 'संसर्गजन्य' विरुद्ध 'गैर-संसर्गजन्य' मध्ये वर्गीकृत करणारा फलक बनवा. फोटो घ्या आणि तुमचं तर्क समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🦠", title: "Explore how illnesses are classified", mentorVisual: "🦠",
              mentorIntro: {
                en: "Doctors sort illnesses in many ways — one important way is by how they spread. Let's explore this.",
                hi: "डॉक्टर बीमारियों को कई तरीकों से छाँटते हैं — एक ज़रूरी तरीका है वे कैसे फैलती हैं। चलो इसे एक्सप्लोर करते हैं।",
                mr: "डॉक्टर आजार अनेक प्रकारे वर्गीकृत करतात — एक महत्त्वाचा मार्ग म्हणजे ते कसे पसरतात. चला हे एक्सप्लोर करूया."
              },
              data: { visual: "🦠", animation: "germ", hotspots: [
              { label:{en:"Contagious illness",hi:"संक्रामक बीमारी",mr:"संसर्गजन्य आजार"}, fact:{en:"A contagious illness, like a cold, can spread from person to person!"} },
              { label:{en:"Non-contagious illness",hi:"गैर-संक्रामक बीमारी",mr:"गैर-संसर्गजन्य आजार"}, fact:{en:"A non-contagious illness, like many allergies, can't spread from person to person!"} },
              { label:{en:"Why classification matters",hi:"वर्गीकरण क्यों मायने रखता है",mr:"वर्गीकरण का महत्त्वाचं आहे"}, fact:{en:"Knowing if something is contagious shapes how doctors advise patients to protect others around them!"} }
            ]}},
            { engine: "build-match", icon: "🦠", title: "Sort illnesses by classification", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice sorting real examples of illnesses by whether they're contagious.",
                hi: "चलो बीमारियों के असली उदाहरणों को यह छाँटने का अभ्यास करते हैं कि वे संक्रामक हैं या नहीं।",
                mr: "चला आजारांच्या खऱ्या उदाहरणांचं ते संसर्गजन्य आहेत का यानुसार वर्गीकरण करण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "flu", label: { en:"Flu", hi:"फ़्लू", mr:"फ्लू" } },
              { id: "allergy", label: { en:"Seasonal allergy", hi:"मौसमी एलर्जी", mr:"ऋतुनुसार ॲलर्जी" } },
              { id: "diabetes", label: { en:"Diabetes", hi:"डायबिटीज़", mr:"मधुमेह" } }
            ], chips: ["flu","allergy","diabetes"], facts: {
              flu:"The flu is contagious — it spreads between people!",
              allergy:"Allergies are not contagious — they don't spread person to person!",
              diabetes:"Diabetes is not contagious — it's a different kind of condition entirely!"
            }}},
            { type: "Quiz", icon: "📝", title: "Illness sorting quiz",
              desc: { en:"A real quiz on classifying illnesses as contagious or not.", hi:"बीमारियों को संक्रामक या नहीं के रूप में वर्गीकृत करने पर एक असली क्विज़।", mr:"आजार संसर्गजन्य आहेत की नाही यानुसार वर्गीकृत करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Responsibility to others",
              desc: { en:"Why do you think knowing if an illness is contagious changes how someone should behave around others?", hi:"तुम्हें क्यों लगता है कि यह जानना कि एक बीमारी संक्रामक है, दूसरों के आसपास किसी के व्यवहार को बदल देता है?", mr:"एखादा आजार संसर्गजन्य आहे हे माहीत असणं इतरांच्या आसपास कोणाच्या वागण्यात कसा बदल करतं असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Illness Sorting Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced illness fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस बीमारी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत आजार तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Chronic vs acute?",hi:"क्रॉनिक बनाम एक्यूट?",mr:"क्रॉनिक विरुद्ध ॲक्यूट?"}, back:{en:"Doctors also sort illnesses as 'acute' (short-term) or 'chronic' (long-term) — a completely different way of classifying! ⏳",hi:"डॉक्टर बीमारियों को 'एक्यूट' (अल्पकालिक) या 'क्रॉनिक' (दीर्घकालिक) के रूप में भी छाँटते हैं — वर्गीकरण करने का एक पूरी तरह अलग तरीका! ⏳",mr:"डॉक्टर आजारांना 'ॲक्यूट' (अल्पकालीन) किंवा 'क्रॉनिक' (दीर्घकालीन) म्हणूनही वर्गीकृत करतात — वर्गीकरणाचा पूर्णपणे वेगळा मार्ग! ⏳"} },
              { front:{en:"Genetic conditions?",hi:"आनुवंशिक स्थितियाँ?",mr:"जनुकीय स्थिती?"}, back:{en:"Some conditions are genetic, passed down from parents — these are neither contagious nor caused by germs at all! 🧬",hi:"कुछ स्थितियाँ आनुवंशिक हैं, माता-पिता से मिली हुई — ये न तो संक्रामक हैं और न ही बिल्कुल कीटाणुओं से होती हैं! 🧬",mr:"काही स्थिती जनुकीय आहेत, पालकांकडून मिळालेल्या — या ना संसर्गजन्य आहेत ना अजिबात जंतूंमुळे होतात! 🧬"} },
              { front:{en:"Isolation helps?",hi:"आइसोलेशन मदद करता है?",mr:"आयसोलेशन मदत करतं?"}, back:{en:"For contagious illnesses, isolating a sick person can genuinely help protect the people around them! 🏠",hi:"संक्रामक बीमारियों के लिए, एक बीमार व्यक्ति को अलग रखना असल में उनके आसपास के लोगों की रक्षा करने में मदद कर सकता है! 🏠",mr:"संसर्गजन्य आजारांसाठी, आजारी व्यक्तीला वेगळं ठेवणं खरंच त्यांच्या आजूबाजूच्या लोकांचं संरक्षण करण्यास मदत करू शकतं! 🏠"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Illness Sorting or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your illness-sorting knowledge! Decide if each statement is true or a myth.",
                hi: "चलो बीमारी छाँटने के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला आजार वर्गीकरणाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"All illnesses are contagious and can spread between people.",hi:"सभी बीमारियाँ संक्रामक हैं और लोगों के बीच फैल सकती हैं।",mr:"सर्व आजार संसर्गजन्य आहेत आणि लोकांमध्ये पसरू शकतात."}, answer:false, explain:{en:"Myth! Many conditions, like diabetes or allergies, are not contagious at all.",hi:"मिथक! डायबिटीज़ या एलर्जी जैसी कई स्थितियाँ बिल्कुल संक्रामक नहीं हैं।",mr:"मिथक! मधुमेह किंवा ॲलर्जीसारख्या अनेक स्थिती अजिबात संसर्गजन्य नाहीत."} },
              { text:{en:"Knowing whether an illness is contagious helps doctors give the right advice.",hi:"यह जानना कि कोई बीमारी संक्रामक है या नहीं, डॉक्टरों को सही सलाह देने में मदद करता है।",mr:"आजार संसर्गजन्य आहे की नाही हे जाणून घेणं डॉक्टरांना योग्य सल्ला देण्यास मदत करतं."}, answer:true, explain:{en:"True! This classification directly shapes what advice a doctor gives about protecting others.",hi:"सच! यह वर्गीकरण सीधे उस सलाह को आकार देता है जो एक डॉक्टर दूसरों की रक्षा के बारे में देता है।",mr:"खरं! हे वर्गीकरण डॉक्टर इतरांचं संरक्षण करण्याबद्दल जो सल्ला देतो त्याला थेट आकार देतं."} },
              { text:{en:"Genetic conditions can spread from one person to another through contact.",hi:"आनुवंशिक स्थितियाँ संपर्क के माध्यम से एक व्यक्ति से दूसरे में फैल सकती हैं।",mr:"जनुकीय स्थिती संपर्काद्वारे एका व्यक्तीकडून दुसऱ्याकडे पसरू शकतात."}, answer:false, explain:{en:"Myth! Genetic conditions are inherited from parents, not spread through contact with others.",hi:"मिथक! आनुवंशिक स्थितियाँ माता-पिता से विरासत में मिलती हैं, दूसरों के संपर्क से नहीं फैलतीं।",mr:"मिथक! जनुकीय स्थिती पालकांकडून वारशाने मिळतात, इतरांच्या संपर्काने पसरत नाहीत."} }
            ]}}
          ]},
          { label: "Prevention Planning",
            bonusAssignment: {
              title: { en: "Community Prevention Plan", hi: "सामुदायिक बचाव योजना", mr: "सामुदायिक प्रतिबंध योजना" },
              prompt: { en: "Design a simple prevention plan for your school or neighborhood to reduce the spread of common colds. Take a photo!",
                        hi: "आम सर्दी-ज़ुकाम के फैलाव को कम करने के लिए अपने स्कूल या मोहल्ले के लिए एक साधी बचाव योजना डिज़ाइन करो। फोटो लो!",
                        mr: "सामान्य सर्दीचा प्रसार कमी करण्यासाठी तुमच्या शाळेसाठी किंवा परिसरासाठी एक साधी प्रतिबंध योजना डिझाइन करा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "📋", title: "Explore prevention planning", mentorVisual: "📋",
              mentorIntro: {
                en: "Doctors don't just treat illness — they help plan how to prevent it in the first place! Let's explore how.",
                hi: "डॉक्टर सिर्फ़ बीमारी का इलाज नहीं करते — वे पहली जगह इसे रोकने की योजना बनाने में भी मदद करते हैं! चलो देखते हैं कैसे।",
                mr: "डॉक्टर फक्त आजारावर उपचार करत नाहीत — ते तो सुरुवातीलाच टाळण्याची योजना बनवण्यास मदत करतात! चला कसं ते बघूया."
              },
              data: { visual: "📋", hotspots: [
              { label:{en:"Community habits",hi:"सामुदायिक आदतें",mr:"सामुदायिक सवयी"}, fact:{en:"Simple habits like handwashing stations in schools can genuinely reduce how much illness spreads!"} },
              { label:{en:"Vaccination drives",hi:"वैक्सीनेशन ड्राइव",mr:"लसीकरण मोहिमा"}, fact:{en:"Organizing vaccination drives helps protect entire communities, not just individuals!"} },
              { label:{en:"Education",hi:"शिक्षा",mr:"शिक्षण"}, fact:{en:"Teaching people about prevention is often just as powerful as any medicine!"} }
            ]}},
            { engine: "build-match", icon: "📋", title: "Match prevention strategy to what it targets", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching prevention strategies to exactly what problem they're designed to reduce.",
                hi: "चलो बचाव रणनीतियों को यह मैच करने का अभ्यास करते हैं कि वे बिल्कुल किस समस्या को कम करने के लिए बनी हैं।",
                mr: "चला प्रतिबंधात्मक रणनीती त्या नेमकं कोणती समस्या कमी करण्यासाठी बनवल्या आहेत याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "handwash", label: { en:"Reduces spread of germs through hands", hi:"हाथों से कीटाणुओं का फैलाव कम करता है", mr:"हातांमधून जंतूंचा प्रसार कमी करतं" } },
              { id: "vaccine_drive", label: { en:"Protects a whole community at once", hi:"पूरे समुदाय की एक साथ रक्षा करता है", mr:"संपूर्ण समुदायाचं एकाच वेळी संरक्षण करतं" } },
              { id: "education", label: { en:"Helps people make informed choices", hi:"लोगों को सही जानकारी वाले फ़ैसले लेने में मदद करता है", mr:"लोकांना माहितीपूर्ण निवडी करण्यास मदत करतं" } }
            ], chips: ["handwash","vaccine_drive","education"], facts: {
              handwash:"That's a handwashing campaign!",
              vaccine_drive:"That's a vaccination drive!",
              education:"That's health education!"
            }}},
            { type: "Quiz", icon: "📝", title: "Prevention planning quiz",
              desc: { en:"A real quiz on prevention strategies at a community level.", hi:"सामुदायिक स्तर पर बचाव रणनीतियों पर एक असली क्विज़।", mr:"सामुदायिक पातळीवरील प्रतिबंधात्मक रणनीतींवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Prevention vs. treatment",
              desc: { en:"Why do you think preventing illness at a community level might sometimes be even more powerful than treating individual patients?", hi:"तुम्हें क्यों लगता है कि सामुदायिक स्तर पर बीमारी को रोकना कभी-कभी व्यक्तिगत मरीज़ों का इलाज करने से भी ज़्यादा शक्तिशाली हो सकता है?", mr:"सामुदायिक पातळीवर आजार रोखणं कधीकधी वैयक्तिक रुग्णांवर उपचार करण्यापेक्षाही अधिक प्रभावी असू शकतं असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Prevention Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced prevention fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस बचाव तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत प्रतिबंध तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Public health field?",hi:"पब्लिक हेल्थ क्षेत्र?",mr:"सार्वजनिक आरोग्य क्षेत्र?"}, back:{en:"There's an entire medical field called 'public health' dedicated just to preventing illness at large scales! 🌍",hi:"'पब्लिक हेल्थ' नाम का एक पूरा मेडिकल क्षेत्र है जो केवल बड़े पैमाने पर बीमारी रोकने के लिए समर्पित है! 🌍",mr:"'पब्लिक हेल्थ' नावाचं एक संपूर्ण वैद्यकीय क्षेत्र आहे जे फक्त मोठ्या प्रमाणावर आजार रोखण्यासाठी समर्पित आहे! 🌍"} },
              { front:{en:"Prevention saves resources?",hi:"बचाव संसाधन बचाता है?",mr:"प्रतिबंध साधनसंपत्ती वाचवतो?"}, back:{en:"Preventing illness is often far less costly than treating it later — this is a real consideration in healthcare planning! 💰",hi:"बीमारी को रोकना अक्सर बाद में इसका इलाज करने से कहीं कम खर्चीला होता है — यह हेल्थकेयर प्लानिंग में एक असली विचार है! 💰",mr:"आजार रोखणं अनेकदा नंतर उपचार करण्यापेक्षा खूप कमी खर्चिक असतं — हा हेल्थकेअर नियोजनातील एक खरा विचार आहे! 💰"} },
              { front:{en:"Data guides planning?",hi:"डेटा योजना बनाने में मदद करता है?",mr:"डेटा नियोजनाला मार्गदर्शन करतो?"}, back:{en:"Public health experts use real data about which illnesses are spreading to decide where to focus prevention efforts! 📊",hi:"पब्लिक हेल्थ विशेषज्ञ यह तय करने के लिए असली डेटा का इस्तेमाल करते हैं कि कौन सी बीमारियाँ फैल रही हैं ताकि बचाव प्रयासों को कहाँ केंद्रित करना है! 📊",mr:"सार्वजनिक आरोग्य तज्ज्ञ कोणते आजार पसरत आहेत हे ठरवण्यासाठी खरा डेटा वापरतात जेणेकरून प्रतिबंधात्मक प्रयत्न कुठे केंद्रित करायचे हे ठरवता येईल! 📊"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Prevention Planning or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your prevention-planning knowledge! Decide if each statement is true or a myth.",
                hi: "चलो बचाव-योजना के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला प्रतिबंध-नियोजनाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Prevention planning only matters for one person at a time.",hi:"बचाव योजना सिर्फ़ एक बार में एक व्यक्ति के लिए मायने रखती है।",mr:"प्रतिबंध नियोजन फक्त एका वेळी एका व्यक्तीसाठी महत्त्वाचं असतं."}, answer:false, explain:{en:"Myth! Prevention planning often works at a community or population level, protecting many people at once.",hi:"मिथक! बचाव योजना अक्सर सामुदायिक या जनसंख्या स्तर पर काम करती है, एक साथ कई लोगों की रक्षा करती है।",mr:"मिथक! प्रतिबंध नियोजन अनेकदा सामुदायिक किंवा लोकसंख्या पातळीवर काम करतं, एकाच वेळी अनेक लोकांचं संरक्षण करतं."} },
              { text:{en:"Health education can genuinely help people make better choices about their health.",hi:"स्वास्थ्य शिक्षा वाकई लोगों को उनके स्वास्थ्य के बारे में बेहतर फ़ैसले लेने में मदद कर सकती है।",mr:"आरोग्य शिक्षण खरंच लोकांना त्यांच्या आरोग्याबद्दल चांगले निर्णय घेण्यास मदत करू शकतं."}, answer:true, explain:{en:"True! Understanding health information genuinely empowers people to make informed decisions.",hi:"सच! स्वास्थ्य जानकारी को समझना वाकई लोगों को जानकारी वाले फ़ैसले लेने में सशक्त बनाता है।",mr:"खरं! आरोग्य माहिती समजून घेणं खरंच लोकांना माहितीपूर्ण निर्णय घेण्यास सक्षम करतं."} },
              { text:{en:"Preventing illness is always more expensive than treating it after it happens.",hi:"बीमारी को रोकना हमेशा इसके होने के बाद इलाज करने से ज़्यादा महंगा होता है।",mr:"आजार रोखणं नेहमी तो झाल्यानंतर उपचार करण्यापेक्षा जास्त खर्चिक असतं."}, answer:false, explain:{en:"Myth! Prevention is very often actually less costly overall than treating widespread illness later.",hi:"मिथक! बचाव असल में अक्सर बाद में व्यापक बीमारी का इलाज करने से कुल मिलाकर कम खर्चीला होता है।",mr:"मिथक! प्रतिबंध खरंतर अनेकदा नंतर मोठ्या प्रमाणावर आजारावर उपचार करण्यापेक्षा एकूणात कमी खर्चिक असतो."} }
            ]}}
          ]},
          { label: "Lab Reports",
            bonusAssignment: {
              title: { en: "Explain a Lab Test", hi: "एक लैब टेस्ट समझाओ", mr: "एक लॅब चाचणी समजावून सांगा" },
              prompt: { en: "Research one common lab test (like a blood test) and explain in your own words what it checks for. Take a photo of your notes!",
                        hi: "एक आम लैब टेस्ट (जैसे ब्लड टेस्ट) पर रिसर्च करो और अपने शब्दों में समझाओ यह किस चीज़ की जाँच करता है। अपने नोट्स की फोटो लो!",
                        mr: "एक सामान्य लॅब चाचणी (जसं रक्त चाचणी) यावर संशोधन करा आणि ती काय तपासते हे तुमच्या शब्दांत समजावून सांगा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧫", title: "Explore reading lab reports", mentorVisual: "🧫",
              mentorIntro: {
                en: "Lab reports carry really important numbers! Let's explore what a few common ones actually mean.",
                hi: "लैब रिपोर्ट में वाकई ज़रूरी संख्याएँ होती हैं! चलो एक्सप्लोर करते हैं कुछ आम संख्याओं का असल में क्या मतलब है।",
                mr: "लॅब रिपोर्टमध्ये खरोखर महत्त्वाच्या संख्या असतात! चला एक्सप्लोर करूया काही सामान्य संख्यांचा खरंच काय अर्थ आहे."
              },
              data: { visual: "🧫", hotspots: [
              { label:{en:"Red blood cell count",hi:"रेड ब्लड सेल काउंट",mr:"लाल रक्तपेशी संख्या"}, fact:{en:"A low red blood cell count can be a sign of anemia — something a doctor would want to investigate further!"} },
              { label:{en:"White blood cell count",hi:"व्हाइट ब्लड सेल काउंट",mr:"पांढऱ्या रक्तपेशी संख्या"}, fact:{en:"A high white blood cell count often means your body is actively fighting an infection!"} },
              { label:{en:"Reference range",hi:"संदर्भ सीमा",mr:"संदर्भ श्रेणी"}, fact:{en:"Lab reports always include a 'normal range' — doctors compare a patient's number to this range!"} }
            ]}},
            { engine: "build-match", icon: "🧫", title: "Match lab result to what it suggests", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching lab report findings to what a doctor might reasonably conclude from them.",
                hi: "चलो लैब रिपोर्ट के नतीजों को यह मैच करने का अभ्यास करते हैं कि एक डॉक्टर उनसे उचित रूप से क्या निष्कर्ष निकाल सकता है।",
                mr: "चला लॅब रिपोर्ट निष्कर्ष एक डॉक्टर त्यांच्यावरून वाजवीपणे काय निष्कर्ष काढू शकतो याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "low_rbc", label: { en:"Low red blood cell count", hi:"कम रेड ब्लड सेल काउंट", mr:"कमी लाल रक्तपेशी संख्या" } },
              { id: "high_wbc", label: { en:"High white blood cell count", hi:"ज़्यादा व्हाइट ब्लड सेल काउंट", mr:"जास्त पांढऱ्या रक्तपेशी संख्या" } },
              { id: "normal", label: { en:"All values within normal range", hi:"सभी वैल्यू सामान्य सीमा में", mr:"सर्व मूल्यं सामान्य श्रेणीत" } }
            ], chips: ["low_rbc","high_wbc","normal"], facts: {
              low_rbc:"That could suggest anemia — worth investigating further!",
              high_wbc:"That could suggest the body is fighting an infection!",
              normal:"That's a reassuring result — everything checked out fine!"
            }}},
            { type: "Quiz", icon: "📝", title: "Lab reports quiz",
              desc: { en:"A real quiz on reading and interpreting basic lab report results.", hi:"बुनियादी लैब रिपोर्ट नतीजों को पढ़ने और समझने पर एक असली क्विज़।", mr:"मूलभूत लॅब रिपोर्ट निकाल वाचण्यावर आणि समजून घेण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Numbers need context",
              desc: { en:"Why do you think a single lab number alone doesn't tell the whole story about a patient's health?", hi:"तुम्हें क्यों लगता है कि एक अकेली लैब संख्या अकेले किसी मरीज़ के स्वास्थ्य की पूरी कहानी नहीं बताती?", mr:"एकच लॅब संख्या एकटी रुग्णाच्या आरोग्याची संपूर्ण कहाणी सांगत नाही असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Lab Report Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced lab report fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस लैब रिपोर्ट तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत लॅब रिपोर्ट तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Ranges vary by age?",hi:"सीमाएँ उम्र के अनुसार बदलती हैं?",mr:"श्रेणी वयानुसार बदलतात?"}, back:{en:"Normal reference ranges can be different for kids, adults, and older people — age genuinely matters! 👥",hi:"सामान्य संदर्भ सीमाएँ बच्चों, वयस्कों, और बुज़ुर्गों के लिए अलग हो सकती हैं — उम्र वाकई मायने रखती है! 👥",mr:"सामान्य संदर्भ श्रेणी मुलं, प्रौढ, आणि वृद्धांसाठी वेगळ्या असू शकतात — वय खरंच महत्त्वाचं आहे! 👥"} },
              { front:{en:"Labs run thousands of tests?",hi:"लैब हज़ारों टेस्ट चलाती हैं?",mr:"लॅब हजारो चाचण्या करतात?"}, back:{en:"Modern medical labs can run thousands of different tests, from simple blood counts to complex genetic tests! 🔬",hi:"आधुनिक मेडिकल लैब सरल ब्लड काउंट से लेकर जटिल जेनेटिक टेस्ट तक, हज़ारों अलग-अलग टेस्ट चला सकती हैं! 🔬",mr:"आधुनिक वैद्यकीय लॅब साध्या रक्त गणनेपासून ते जटिल जनुकीय चाचण्यांपर्यंत, हजारो वेगवेगळ्या चाचण्या करू शकतात! 🔬"} },
              { front:{en:"One test rarely enough?",hi:"एक टेस्ट शायद ही काफ़ी होता है?",mr:"एक चाचणी क्वचितच पुरेशी असते?"}, back:{en:"Doctors often order several different lab tests together, since combining results gives a fuller picture! 🧩",hi:"डॉक्टर अक्सर कई अलग-अलग लैब टेस्ट एक साथ ऑर्डर करते हैं, क्योंकि नतीजों को मिलाने से एक ज़्यादा पूरी तस्वीर मिलती है! 🧩",mr:"डॉक्टर अनेकदा अनेक वेगवेगळ्या लॅब चाचण्या एकत्र ऑर्डर करतात, कारण निकाल एकत्र केल्याने अधिक पूर्ण चित्र मिळतं! 🧩"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Lab Reports or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your lab report knowledge! Decide if each statement is true or a myth.",
                hi: "चलो लैब रिपोर्ट के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला लॅब रिपोर्टच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A single abnormal lab value always means something is seriously wrong.",hi:"एक अकेली असामान्य लैब वैल्यू का हमेशा मतलब है कि कुछ गंभीर रूप से गलत है।",mr:"एक असामान्य लॅब मूल्य नेहमी काहीतरी गंभीरपणे चुकीचं आहे असा अर्थ असतो."}, answer:false, explain:{en:"Myth! Doctors usually look at the full picture, combining multiple results and the patient's context, not just one number.",hi:"मिथक! डॉक्टर आमतौर पर पूरी तस्वीर देखते हैं, कई नतीजों और मरीज़ के संदर्भ को मिलाकर, सिर्फ़ एक संख्या नहीं।",mr:"मिथक! डॉक्टर सहसा संपूर्ण चित्र बघतात, अनेक निकाल आणि रुग्णाचा संदर्भ एकत्र करून, फक्त एक संख्या नाही."} },
              { text:{en:"A high white blood cell count can suggest the body is fighting an infection.",hi:"ज़्यादा व्हाइट ब्लड सेल काउंट यह सुझाव दे सकता है कि शरीर संक्रमण से लड़ रहा है।",mr:"जास्त पांढऱ्या रक्तपेशी संख्या शरीर संसर्गाशी लढत आहे असं सुचवू शकते."}, answer:true, explain:{en:"True! An elevated white blood cell count is a classic sign the immune system is actively responding.",hi:"सच! एक बढ़ा हुआ व्हाइट ब्लड सेल काउंट एक क्लासिक संकेत है कि इम्यून सिस्टम सक्रिय रूप से प्रतिक्रिया दे रहा है।",mr:"खरं! वाढलेली पांढऱ्या रक्तपेशी संख्या हे रोगप्रतिकारक शक्ती सक्रियपणे प्रतिसाद देत असल्याचं एक ठराविक लक्षण आहे."} },
              { text:{en:"Normal reference ranges are exactly the same for every single person, regardless of age.",hi:"सामान्य संदर्भ सीमाएँ हर एक व्यक्ति के लिए बिल्कुल एक जैसी हैं, उम्र चाहे जो भी हो।",mr:"सामान्य संदर्भ श्रेणी वयाची पर्वा न करता प्रत्येक व्यक्तीसाठी अगदी सारख्याच असतात."}, answer:false, explain:{en:"Myth! Reference ranges can vary based on age and other factors — context matters.",hi:"मिथक! संदर्भ सीमाएँ उम्र और अन्य कारकों के आधार पर अलग हो सकती हैं — संदर्भ मायने रखता है।",mr:"मिथक! संदर्भ श्रेणी वय आणि इतर घटकांवर आधारित बदलू शकतात — संदर्भ महत्त्वाचा आहे."} }
            ]}}
          ]},
          { label: "Mental Health Awareness",
            bonusAssignment: {
              title: { en: "Kindness Check-In Card", hi: "दयालुता चेक-इन कार्ड", mr: "दयाळूपणा चेक-इन कार्ड" },
              prompt: { en: "Make a card with 3 kind questions you could ask a friend to check how they're really doing. Take a photo!",
                        hi: "3 दयालु सवालों के साथ एक कार्ड बनाओ जो तुम किसी दोस्त से पूछ सकते हो यह जानने के लिए कि वे असल में कैसे हैं। फोटो लो!",
                        mr: "मित्राला तो खरंच कसा आहे हे विचारण्यासाठी 3 दयाळू प्रश्नांसह एक कार्ड बनवा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "💚", title: "Explore mental wellbeing", mentorVisual: "💚",
              mentorIntro: {
                en: "Just like your body, your mind needs care too! Let's explore some basics of mental wellbeing — no diagnosing here, just understanding.",
                hi: "बिल्कुल तुम्हारे शरीर की तरह, तुम्हारे दिमाग़ को भी देखभाल चाहिए! चलो मानसिक स्वास्थ्य की कुछ बुनियादी बातें एक्सप्लोर करते हैं — यहाँ कोई निदान नहीं, बस समझना।",
                mr: "अगदी तुमच्या शरीरासारखं, तुमच्या मनालाही काळजीची गरज असते! चला मानसिक आरोग्याच्या काही मूलभूत गोष्टी एक्सप्लोर करूया — इथे कोणतंही निदान नाही, फक्त समजून घेणं."
              },
              data: { visual: "💚", hotspots: [
              { label:{en:"Everyone has feelings",hi:"हर किसी में भावनाएँ होती हैं",mr:"प्रत्येकाला भावना असतात"}, fact:{en:"Everyone experiences a wide range of emotions — that's a completely normal part of being human!"} },
              { label:{en:"Talking helps",hi:"बात करना मदद करता है",mr:"बोलणं मदत करतं"}, fact:{en:"Talking to a trusted adult or friend about how you feel is one of the healthiest things you can do!"} },
              { label:{en:"No shame in asking for help",hi:"मदद माँगने में कोई शर्म नहीं",mr:"मदत मागण्यात कोणतीही लाज नाही"}, fact:{en:"Just like seeing a doctor for a physical illness, it's completely okay to get support for how you're feeling!"} }
            ]}},
            { engine: "build-match", icon: "💚", title: "Match supportive action to its benefit", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching some supportive actions to how they genuinely help someone's wellbeing.",
                hi: "चलो कुछ सहायक कामों को यह मैच करने का अभ्यास करते हैं कि वे किसी की भलाई में असल में कैसे मदद करते हैं।",
                mr: "चला काही सहाय्यक कृती त्या एखाद्याच्या कल्याणासाठी खरंच कशा मदत करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "listen", label: { en:"Makes someone feel heard", hi:"किसी को सुना हुआ महसूस कराता है", mr:"कोणालातरी ऐकल्यासारखं वाटतं" } },
              { id: "trusted_adult", label: { en:"Connects someone to real support", hi:"किसी को असली सहायता से जोड़ता है", mr:"कोणालातरी खऱ्या आधाराशी जोडतं" } },
              { id: "routine", label: { en:"Helps build a sense of stability", hi:"स्थिरता की भावना बनाने में मदद करता है", mr:"स्थिरतेची भावना निर्माण करण्यास मदत करतं" } }
            ], chips: ["listen","trusted_adult","routine"], facts: {
              listen:"That's active listening — genuinely powerful!",
              trusted_adult:"That's connecting someone to a trusted adult — so important!",
              routine:"That's a healthy routine — it helps many people feel steadier!"
            }}},
            { type: "Quiz", icon: "📝", title: "Mental health awareness quiz",
              desc: { en:"A real quiz on basic mental wellbeing awareness and supportive actions.", hi:"बुनियादी मानसिक स्वास्थ्य जागरूकता और सहायक कामों पर एक असली क्विज़।", mr:"मूलभूत मानसिक आरोग्य जागरूकता आणि सहाय्यक कृतींवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Being there for others",
              desc: { en:"What's one way you could check in on a friend who seems like they're having a hard time?", hi:"एक तरीका बताओ जिससे तुम किसी दोस्त से बात कर सकते हो जो मुश्किल समय से गुज़र रहा लग रहा हो?", mr:"कठीण काळातून जात आहे असं वाटणाऱ्या मित्राची विचारपूस करण्याचा एक मार्ग सांगा?" } },
            { engine: "flip-cards", icon: "🃏", title: "Mental Wellbeing Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more thoughtful mental wellbeing fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा विचारशील मानसिक स्वास्थ्य तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक विचारशील मानसिक आरोग्य तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Mind and body connected?",hi:"दिमाग़ और शरीर जुड़े हुए?",mr:"मन आणि शरीर जोडलेले?"}, back:{en:"Your mental and physical health are deeply connected — feeling stressed can even affect things like sleep and digestion! 🔗",hi:"तुम्हारा मानसिक और शारीरिक स्वास्थ्य गहराई से जुड़े हुए हैं — तनाव महसूस करना नींद और पाचन जैसी चीज़ों को भी प्रभावित कर सकता है! 🔗",mr:"तुमचं मानसिक आणि शारीरिक आरोग्य खोलवर जोडलेले आहेत — तणाव जाणवणं झोप आणि पचनासारख्या गोष्टींवरही परिणाम करू शकतं! 🔗"} },
              { front:{en:"Talking reduces stigma?",hi:"बात करना कलंक को कम करता है?",mr:"बोलणं कलंक कमी करतं?"}, back:{en:"The more openly people talk about mental health, the more it helps remove unfair stigma around asking for help! 💬",hi:"लोग जितनी खुलकर मानसिक स्वास्थ्य के बारे में बात करते हैं, उतना ही यह मदद माँगने के आसपास के अनुचित कलंक को हटाने में मदद करता है! 💬",mr:"लोक जितकं खुलेपणाने मानसिक आरोग्याबद्दल बोलतात, तितकं ते मदत मागण्याभोवतीचा अन्यायकारक कलंक दूर करण्यास मदत करतं! 💬"} },
              { front:{en:"Support systems matter?",hi:"सपोर्ट सिस्टम मायने रखते हैं?",mr:"आधार यंत्रणा महत्त्वाच्या आहेत?"}, back:{en:"Having even just one trusted person to talk to can make a genuinely huge difference in how someone copes! 🤝",hi:"बात करने के लिए सिर्फ़ एक भरोसेमंद व्यक्ति होना भी असल में इस बात में बड़ा फ़र्क डाल सकता है कि कोई कैसे सामना करता है! 🤝",mr:"बोलण्यासाठी फक्त एकच विश्वासू व्यक्ती असणंही एखादी व्यक्ती कशी सामना करते यात खरोखर मोठा फरक पाडू शकतं! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Mental Health or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your mental wellbeing knowledge! Decide if each statement is true or a myth.",
                hi: "चलो मानसिक स्वास्थ्य के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला मानसिक आरोग्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Asking for help with how you're feeling is a sign of weakness.",hi:"अपनी भावनाओं के साथ मदद माँगना कमज़ोरी का संकेत है।",mr:"तुम्हाला कसं वाटतं यासाठी मदत मागणं हे कमकुवतपणाचं लक्षण आहे."}, answer:false, explain:{en:"Myth! Asking for help is actually a healthy, courageous step — just like seeing a doctor for a physical issue.",hi:"मिथक! मदद माँगना असल में एक स्वस्थ, साहसी कदम है — बिल्कुल शारीरिक समस्या के लिए डॉक्टर को दिखाने की तरह।",mr:"मिथक! मदत मागणं खरंतर एक निरोगी, धाडसी पाऊल आहे — अगदी शारीरिक समस्येसाठी डॉक्टरांना दाखवण्यासारखं."} },
              { text:{en:"Talking to a trusted adult about your feelings can genuinely help.",hi:"अपनी भावनाओं के बारे में किसी भरोसेमंद बड़े से बात करना वाकई मदद कर सकता है।",mr:"तुमच्या भावनांबद्दल विश्वासू मोठ्याशी बोलणं खरंच मदत करू शकतं."}, answer:true, explain:{en:"True! Talking to someone you trust is one of the most genuinely helpful things you can do.",hi:"सच! जिस पर तुम भरोसा करते हो उससे बात करना उन सबसे असल में मददगार चीज़ों में से एक है जो तुम कर सकते हो।",mr:"खरं! तुमचा विश्वास असलेल्या व्यक्तीशी बोलणं तुम्ही करू शकता अशा सर्वात खरोखर उपयुक्त गोष्टींपैकी एक आहे."} },
              { text:{en:"Mental and physical health have absolutely nothing to do with each other.",hi:"मानसिक और शारीरिक स्वास्थ्य का एक दूसरे से बिल्कुल कोई लेना-देना नहीं है।",mr:"मानसिक आणि शारीरिक आरोग्याचा एकमेकांशी काहीही संबंध नाही."}, answer:false, explain:{en:"Myth! Mental and physical health are deeply connected — each genuinely affects the other.",hi:"मिथक! मानसिक और शारीरिक स्वास्थ्य गहराई से जुड़े हुए हैं — हर एक वाकई दूसरे को प्रभावित करता है।",mr:"मिथक! मानसिक आणि शारीरिक आरोग्य खोलवर जोडलेले आहेत — प्रत्येक खरंच दुसऱ्यावर परिणाम करतो."} }
            ]}}
          ]},
          { label: "Public Health Campaign",
            bonusAssignment: {
              title: { en: "Design a Campaign Poster", hi: "एक कैंपेन पोस्टर डिज़ाइन करो", mr: "एक मोहीम पोस्टर डिझाइन करा" },
              prompt: { en: "Design a public health campaign poster on any topic (nutrition, exercise, hygiene). Take a photo and explain your message and target audience!",
                        hi: "किसी भी विषय (पोषण, व्यायाम, स्वच्छता) पर एक पब्लिक हेल्थ कैंपेन पोस्टर डिज़ाइन करो। फोटो लो और अपना संदेश और लक्षित दर्शक समझाओ!",
                        mr: "कोणत्याही विषयावर (पोषण, व्यायाम, स्वच्छता) सार्वजनिक आरोग्य मोहीम पोस्टर डिझाइन करा. फोटो घ्या आणि तुमचा संदेश आणि लक्ष्य प्रेक्षक समजावून सांगा!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "📢", title: "Explore public health campaigns", mentorVisual: "📢",
              mentorIntro: {
                en: "Public health campaigns can genuinely change how thousands or even millions of people behave! Let's explore how they work.",
                hi: "पब्लिक हेल्थ कैंपेन असल में हज़ारों या यहाँ तक कि लाखों लोगों के व्यवहार को बदल सकते हैं! चलो देखते हैं वे कैसे काम करते हैं।",
                mr: "सार्वजनिक आरोग्य मोहिमा खरंच हजारो किंवा अगदी लाखो लोकांचं वर्तन बदलू शकतात! चला त्या कशा काम करतात ते बघूया."
              },
              data: { visual: "📢", hotspots: [
              { label:{en:"Clear message",hi:"स्पष्ट संदेश",mr:"स्पष्ट संदेश"}, fact:{en:"The best campaigns have one simple, clear message that's easy to remember and act on!"} },
              { label:{en:"Target audience",hi:"लक्षित दर्शक",mr:"लक्ष्य प्रेक्षक"}, fact:{en:"Successful campaigns are designed specifically for who they're trying to reach — kids, parents, or whole communities!"} },
              { label:{en:"Real impact",hi:"असली असर",mr:"खरा परिणाम"}, fact:{en:"Some famous health campaigns have genuinely reduced smoking rates or increased vaccination across entire countries!"} }
            ]}},
            { engine: "build-match", icon: "📢", title: "Match campaign element to its purpose", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching campaign elements to exactly what job they do in making a campaign work.",
                hi: "चलो कैंपेन तत्वों को यह मैच करने का अभ्यास करते हैं कि वे कैंपेन को काम करने में बिल्कुल क्या भूमिका निभाते हैं।",
                mr: "चला मोहीम घटक ते मोहीम काम करण्यासाठी नेमकं काय काम करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "slogan", label: { en:"Makes the message memorable", hi:"संदेश को यादगार बनाता है", mr:"संदेश लक्षात राहण्याजोगा बनवतो" } },
              { id: "audience", label: { en:"Ensures the right people are reached", hi:"सुनिश्चित करता है सही लोगों तक पहुंचा जाए", mr:"योग्य लोकांपर्यंत पोहोचल्याची खात्री करतो" } },
              { id: "action", label: { en:"Tells people exactly what to do", hi:"लोगों को बिल्कुल बताता है क्या करना है", mr:"लोकांना नेमकं काय करायचं ते सांगतो" } }
            ], chips: ["slogan","audience","action"], facts: {
              slogan:"That's a good slogan — memorable and clear!",
              audience:"That's targeting the right audience — essential for real impact!",
              action:"That's a clear call to action — telling people exactly what to do next!"
            }}},
            { type: "Quiz", icon: "📝", title: "Public health campaign quiz",
              desc: { en:"A real quiz on what makes a public health campaign effective.", hi:"एक पब्लिक हेल्थ कैंपेन को असरदार क्या बनाता है, इस पर एक असली क्विज़।", mr:"सार्वजनिक आरोग्य मोहीम प्रभावी काय बनवतं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Reaching people effectively",
              desc: { en:"Why do you think a campaign designed for kids might need to look and sound completely different from one designed for adults?", hi:"तुम्हें क्यों लगता है कि बच्चों के लिए बनाया गया कैंपेन वयस्कों के लिए बनाए गए से बिल्कुल अलग दिख और सुनाई दे सकता है?", mr:"मुलांसाठी बनवलेली मोहीम प्रौढांसाठी बनवलेल्यापेक्षा पूर्णपणे वेगळी दिसू आणि ऐकू शकते असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Public Health Campaign Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced public health campaign fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस पब्लिक हेल्थ कैंपेन तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत सार्वजनिक आरोग्य मोहीम तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Campaigns use real data?",hi:"कैंपेन असली डेटा का इस्तेमाल करते हैं?",mr:"मोहिमा खरा डेटा वापरतात?"}, back:{en:"Effective campaigns are often built using real data about what health issues actually affect a community most! 📊",hi:"असरदार कैंपेन अक्सर इस असली डेटा का इस्तेमाल करके बनाए जाते हैं कि कौन सी स्वास्थ्य समस्याएँ असल में किसी समुदाय को सबसे ज़्यादा प्रभावित करती हैं! 📊",mr:"प्रभावी मोहिमा अनेकदा कोणत्या आरोग्य समस्या खरंच समुदायाला सर्वात जास्त प्रभावित करतात याच्या खऱ्या डेटावर आधारित बनवल्या जातात! 📊"} },
              { front:{en:"Repetition helps?",hi:"पुनरावृत्ति मदद करती है?",mr:"पुनरावृत्ती मदत करते?"}, back:{en:"Seeing a health message multiple times, in different places, genuinely helps it stick in people's minds! 🔁",hi:"एक स्वास्थ्य संदेश को कई बार, अलग-अलग जगहों पर देखना असल में लोगों के दिमाग़ में इसे बनाए रखने में मदद करता है! 🔁",mr:"आरोग्य संदेश अनेक वेळा, वेगवेगळ्या ठिकाणी बघणं खरंच तो लोकांच्या मनात राहण्यास मदत करतो! 🔁"} },
              { front:{en:"Campaigns get measured?",hi:"कैंपेन को मापा जाता है?",mr:"मोहिमा मोजल्या जातात?"}, back:{en:"After a campaign runs, public health teams often measure whether it actually changed people's behavior! 📏",hi:"कैंपेन चलने के बाद, पब्लिक हेल्थ टीमें अक्सर मापती हैं कि क्या इसने असल में लोगों के व्यवहार को बदला! 📏",mr:"मोहीम चालल्यानंतर, सार्वजनिक आरोग्य टीम अनेकदा मोजतात की तिने खरंच लोकांचं वर्तन बदललं का! 📏"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Public Health Campaign or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your public health campaign knowledge! Decide if each statement is true or a myth.",
                hi: "चलो पब्लिक हेल्थ कैंपेन के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला सार्वजनिक आरोग्य मोहिमेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A campaign with a complicated, wordy message usually works best.",hi:"एक जटिल, शब्दों से भरा संदेश वाला कैंपेन आमतौर पर सबसे अच्छा काम करता है।",mr:"गुंतागुंतीचा, शब्दबंबाळ संदेश असलेली मोहीम सहसा सर्वोत्तम काम करते."}, answer:false, explain:{en:"Myth! The most effective campaigns usually have one simple, clear, memorable message.",hi:"मिथक! सबसे असरदार कैंपेन में आमतौर पर एक साधा, स्पष्ट, यादगार संदेश होता है।",mr:"मिथक! सर्वात प्रभावी मोहिमांमध्ये सहसा एक साधा, स्पष्ट, लक्षात राहण्याजोगा संदेश असतो."} },
              { text:{en:"Public health campaigns are often designed using real data about a community's health needs.",hi:"पब्लिक हेल्थ कैंपेन अक्सर एक समुदाय की स्वास्थ्य ज़रूरतों के बारे में असली डेटा का इस्तेमाल करके डिज़ाइन किए जाते हैं।",mr:"सार्वजनिक आरोग्य मोहिमा अनेकदा समुदायाच्या आरोग्य गरजांबद्दलच्या खऱ्या डेटावर आधारित डिझाइन केल्या जातात."}, answer:true, explain:{en:"True! Real data helps campaign designers focus on what will genuinely help the most people.",hi:"सच! असली डेटा कैंपेन डिज़ाइनरों को इस पर ध्यान केंद्रित करने में मदद करता है कि असल में सबसे ज़्यादा लोगों की मदद क्या करेगा।",mr:"खरं! खरा डेटा मोहीम डिझाइनरना खरंच सर्वाधिक लोकांना काय मदत करेल यावर लक्ष केंद्रित करण्यास मदत करतो."} },
              { text:{en:"Once a campaign is launched, no one ever checks if it actually worked.",hi:"एक बार कैंपेन लॉन्च होने के बाद, कोई कभी नहीं जाँचता कि इसने असल में काम किया या नहीं।",mr:"एकदा मोहीम सुरू झाली की, ती खरंच काम करते का हे कोणीच तपासत नाही."}, answer:false, explain:{en:"Myth! Public health teams regularly measure whether campaigns actually changed behavior.",hi:"मिथक! पब्लिक हेल्थ टीमें नियमित रूप से मापती हैं कि कैंपेन ने असल में व्यवहार बदला या नहीं।",mr:"मिथक! सार्वजनिक आरोग्य टीम नियमितपणे मोजतात की मोहिमेने खरंच वर्तन बदललं का."} }
            ]}}
          ]},
          { label: "Capstone Multi-System Case",
            bonusAssignment: {
              title: { en: "My Std 9 Case Portfolio", hi: "मेरा Std 9 केस पोर्टफोलियो", mr: "माझा Std 9 केस पोर्टफोलिओ" },
              prompt: { en: "Create a page reflecting on your favorite skill you built this year (reading X-rays, sorting illness, planning prevention, etc). Take a photo and explain why!",
                        hi: "इस साल तुमने जो पसंदीदा कौशल बनाया (एक्स-रे पढ़ना, बीमारी छाँटना, बचाव की योजना बनाना, आदि) उस पर विचार करते हुए एक पेज बनाओ। फोटो लो और बताओ क्यों!",
                        mr: "या वर्षी तुम्ही तयार केलेलं तुमचं आवडतं कौशल्य (एक्स-रे वाचणं, आजार वर्गीकृत करणं, प्रतिबंध नियोजन करणं, इ.) यावर विचार करणारं पान तयार करा. फोटो घ्या आणि का ते सांगा!" }
            },
            tasks: [
            { engine: "build-match", icon: "🩺", title: "Multi-system case simulation", mentorVisual: "🩺",
              mentorIntro: {
                en: "Time for your Std 9 capstone! A real patient case often involves more than one body system — let's combine everything you've learned.",
                hi: "तुम्हारे Std 9 कैपस्टोन का समय! एक असली मरीज़ केस में अक्सर एक से ज़्यादा शरीर सिस्टम शामिल होते हैं — चलो तुमने जो कुछ भी सीखा है उसे मिलाते हैं।",
                mr: "तुमच्या Std 9 कॅपस्टोनची वेळ! एका खऱ्या रुग्ण केसमध्ये अनेकदा एकापेक्षा जास्त शरीर यंत्रणा सामील असतात — चला तुम्ही जे काही शिकलात ते एकत्र करूया."
              },
              data: { noStakes: false, zones: [
              { id: "vitals_first", label: { en:"Check vitals and note anything abnormal", hi:"वाइटल्स जाँचो और कुछ भी असामान्य नोट करो", mr:"व्हायटल्स तपासा आणि काही असामान्य असल्यास नोंदवा" } },
              { id: "sort_symptoms", label: { en:"Sort the symptoms by urgency", hi:"लक्षणों को तात्कालिकता से छाँटो", mr:"लक्षणं तातडीनुसार वर्गीकृत करा" } },
              { id: "connect_systems", label: { en:"Think about which systems might be connected", hi:"सोचो कौन से सिस्टम जुड़े हो सकते हैं", mr:"कोणत्या यंत्रणा जोडलेल्या असू शकतात याचा विचार करा" } }
            ], chips: ["vitals_first","sort_symptoms","connect_systems"], facts: {
              vitals_first:"Step 1: Numbers first — always a great starting point!",
              sort_symptoms:"Step 2: Urgency thinking — exactly what you practiced this year!",
              connect_systems:"Step 3: Whole-body thinking — real clinical reasoning!"
            }}},
            { engine: "tap-discover", icon: "🏆", title: "Reflect on your Std 9 skills", mentorVisual: "🏆",
              mentorIntro: {
                en: "You built real, deeper clinical thinking skills this year — let's celebrate a few of them!",
                hi: "तुमने इस साल असली, गहरी क्लिनिकल सोच के कौशल बनाए — चलो उनमें से कुछ का जश्न मनाते हैं!",
                mr: "तुम्ही या वर्षी खरी, अधिक खोल क्लिनिकल विचार कौशल्यं तयार केली — चला त्यातील काहींचा उत्सव साजरा करूया!"
              },
              data: { visual: "🏆", hotspots: [
              { label:{en:"Reading real data",hi:"असली डेटा पढ़ना",mr:"खरा डेटा वाचणं"}, fact:{en:"This year, you learned to read X-rays, vitals, and lab reports — genuine clinical data skills!"} },
              { label:{en:"Whole-body thinking",hi:"पूरे शरीर की सोच",mr:"संपूर्ण शरीराचा विचार"}, fact:{en:"You learned that body systems connect — real medical reasoning that goes beyond just one part!"} },
              { label:{en:"Planning ahead",hi:"आगे की योजना बनाना",mr:"पुढचं नियोजन करणं"}, fact:{en:"You explored prevention and public health — thinking beyond just treating one patient at a time!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Std 9 capstone recap",
              desc: { en:"A comprehensive recap quiz combining everything from this year's deeper clinical missions.", hi:"इस साल के गहरे क्लिनिकल मिशन से सब कुछ मिलाकर एक व्यापक रीकैप क्विज़।", mr:"या वर्षीच्या अधिक खोल क्लिनिकल मिशन्समधून सर्वकाही एकत्र करणारा एक सर्वसमावेशक रीकॅप क्विझ." } },
            { type: "Reflect", icon: "💭", title: "A message to Std 10 you",
              desc: { en:"Write a message to yourself about how this year's deeper thinking challenges felt, and what you're ready for next.", hi:"अपने आप को एक संदेश लिखो कि इस साल की गहरी सोच की चुनौतियाँ कैसी महसूस हुईं, और तुम आगे किसके लिए तैयार हो।", mr:"या वर्षीच्या अधिक खोल विचार आव्हानांनी कसं वाटलं आणि तुम्ही पुढे कशासाठी तयार आहात याबद्दल स्वतःला संदेश लिहा." } },
            { engine: "flip-cards", icon: "🃏", title: "Std 9 Year Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a year of deeper clinical thinking! Flip each card for a fun recap of your journey.",
                hi: "क्या गहरी क्लिनिकल सोच का साल रहा! अपनी यात्रा का मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय अधिक खोल क्लिनिकल विचाराचं वर्ष होतं! तुमच्या प्रवासाचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Where did we start?",hi:"हमने कहाँ से शुरुआत की?",mr:"आपण कुठून सुरुवात केली?"}, back:{en:"You started this year learning to read real X-ray images! 🩻",hi:"तुमने इस साल की शुरुआत असली एक्स-रे तस्वीरें पढ़ना सीखकर की! 🩻",mr:"तुम्ही या वर्षाची सुरुवात खऱ्या एक्स-रे प्रतिमा वाचायला शिकून केली! 🩻"} },
              { front:{en:"Thinking like a doctor?",hi:"डॉक्टर की तरह सोचना?",mr:"डॉक्टरसारखा विचार?"}, back:{en:"This year you practiced real clinical thinking — sorting urgency, connecting systems, and planning prevention! 🧠",hi:"इस साल तुमने असली क्लिनिकल सोच का अभ्यास किया — तात्कालिकता छाँटना, सिस्टम को जोड़ना, और बचाव की योजना बनाना! 🧠",mr:"या वर्षी तुम्ही खरा क्लिनिकल विचार सराव केला — तातडी वर्गीकृत करणं, यंत्रणा जोडणं, आणि प्रतिबंध नियोजन करणं! 🧠"} },
              { front:{en:"What's next?",hi:"आगे क्या?",mr:"पुढे काय?"}, back:{en:"Next year in Std 10, you'll start thinking about which medical specialty might genuinely interest you most! 🚀",hi:"अगले साल Std 10 में, तुम इस बारे में सोचना शुरू करोगे कि कौन सी मेडिकल स्पेशलिटी तुम्हें असल में सबसे ज़्यादा दिलचस्प लगती है! 🚀",mr:"पुढच्या वर्षी Std 10 मध्ये, तुम्ही कोणती वैद्यकीय खासियत तुम्हाला खरंच सर्वात जास्त आवडते याचा विचार करायला सुरुवात कराल! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One last check-in before the year wraps up! Let's see what stuck from this whole year.",
                hi: "साल खत्म होने से पहले एक आखिरी जांच! देखते हैं इस पूरे साल से क्या याद रहा।",
                mr: "वर्ष संपण्याआधी शेवटची एक तपासणी! बघूया या संपूर्ण वर्षातून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"A real patient case usually only ever involves exactly one body system.",hi:"एक असली मरीज़ केस में आमतौर पर केवल एक शरीर सिस्टम शामिल होता है।",mr:"खऱ्या रुग्ण केसमध्ये सहसा फक्त एकच शरीर यंत्रणा सामील असते."}, answer:false, explain:{en:"Myth! Real cases often involve multiple connected systems — exactly what you practiced this year.",hi:"मिथक! असली केस अक्सर कई जुड़े हुए सिस्टम शामिल करते हैं — बिल्कुल वही जो तुमने इस साल अभ्यास किया।",mr:"मिथक! खऱ्या केसमध्ये अनेकदा अनेक जोडलेल्या यंत्रणा सामील असतात — अगदी तेच जे तुम्ही या वर्षी सराव केलं."} },
              { text:{en:"Prevention and public health thinking go beyond treating just one patient at a time.",hi:"बचाव और पब्लिक हेल्थ सोच एक बार में सिर्फ़ एक मरीज़ का इलाज करने से आगे जाती है।",mr:"प्रतिबंध आणि सार्वजनिक आरोग्य विचार एका वेळी फक्त एका रुग्णावर उपचार करण्यापलीकडे जातो."}, answer:true, explain:{en:"True! Public health thinking specifically considers whole communities, not just individuals.",hi:"सच! पब्लिक हेल्थ सोच विशेष रूप से पूरे समुदायों पर विचार करती है, सिर्फ़ व्यक्तियों पर नहीं।",mr:"खरं! सार्वजनिक आरोग्य विचार विशेषतः संपूर्ण समुदायांचा विचार करतो, फक्त व्यक्तींचा नाही."} },
              { text:{en:"This is the last year you'll ever explore Doctor & Healthcare topics.",hi:"यह आखिरी साल है जब तुम कभी डॉक्टर और स्वास्थ्य से जुड़े विषय एक्सप्लोर करोगे।",mr:"डॉक्टर आणि आरोग्य विषय एक्सप्लोर करण्याचं हे शेवटचं वर्ष आहे."}, answer:false, explain:{en:"Myth! Std 10 goes even further — you'll start thinking about specific medical specialties next.",hi:"मिथक! Std 10 और भी आगे जाता है — तुम अगली बार खास मेडिकल स्पेशलिटी के बारे में सोचना शुरू करोगे।",mr:"मिथक! Std 10 आणखी पुढे जातं — तुम्ही पुढच्या वेळी विशिष्ट वैद्यकीय खासियतींबद्दल विचार करायला सुरुवात कराल."} }
            ]}}
          ]}
        ]
      },
      "10": {
        band: "Decision-Prep",
        bandTagline: "Real specialties, real reflection — connecting what you've learned to what path might genuinely interest you.",
        months: [
          { label: "Heart Health & Cardiology",
            bonusAssignment: {
              title: { en: "Cardiologist for a Day", hi: "एक दिन के लिए कार्डियोलॉजिस्ट", mr: "एक दिवसाचा कार्डिओलॉजिस्ट" },
              prompt: { en: "Research one heart condition (like high blood pressure) and write 3-4 sentences on how a cardiologist would help. Take a photo of your notes!",
                        hi: "एक दिल की स्थिति (जैसे हाई ब्लड प्रेशर) पर रिसर्च करो और लिखो कि एक कार्डियोलॉजिस्ट कैसे मदद करेगा, 3-4 वाक्यों में। अपने नोट्स की फोटो लो!",
                        mr: "एका हृदयाच्या स्थितीवर (जसं उच्च रक्तदाब) संशोधन करा आणि कार्डिओलॉजिस्ट कशी मदत करेल याबद्दल 3-4 वाक्यं लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "❤️‍🩹", title: "Explore the cardiology specialty", mentorVisual: "❤️‍🩹",
              mentorIntro: {
                en: "This year, we start connecting what you know to real medical specialties. Let's meet cardiology — the specialty focused on the heart.",
                hi: "इस साल, हम जो तुम जानते हो उसे असली मेडिकल स्पेशलिटी से जोड़ना शुरू करते हैं। चलो कार्डियोलॉजी से मिलते हैं — दिल पर केंद्रित स्पेशलिटी।",
                mr: "या वर्षी, आपण तुम्हाला माहीत असलेलं खऱ्या वैद्यकीय खासियतींशी जोडायला सुरुवात करतो. चला कार्डिओलॉजीला भेटूया — हृदयावर केंद्रित खासियत."
              },
              data: { visual: "❤️‍🩹", animation: "heartbeat", hotspots: [
              { label:{en:"What cardiologists do",hi:"कार्डियोलॉजिस्ट क्या करते हैं",mr:"कार्डिओलॉजिस्ट काय करतात"}, fact:{en:"Cardiologists diagnose and treat conditions of the heart and blood vessels — from checkups to complex procedures!"} },
              { label:{en:"Years of training",hi:"सालों का प्रशिक्षण",mr:"वर्षांचं प्रशिक्षण"}, fact:{en:"Becoming a cardiologist takes many years of training after medical school — real dedication!"} },
              { label:{en:"Everyday impact",hi:"रोज़मर्रा का असर",mr:"दैनंदिन परिणाम"}, fact:{en:"Heart disease is extremely common, so cardiologists help enormous numbers of people every year!"} }
            ]}},
            { engine: "build-match", icon: "❤️‍🩹", title: "Match heart condition to what it involves", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching real heart conditions to what they actually involve.",
                hi: "चलो असली दिल की स्थितियों को यह मैच करने का अभ्यास करते हैं कि वे असल में क्या शामिल करती हैं।",
                mr: "चला खऱ्या हृदयाच्या स्थिती त्या खरंच काय समाविष्ट करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "hypertension", label: { en:"Blood pressure consistently too high", hi:"ब्लड प्रेशर लगातार बहुत ज़्यादा", mr:"रक्तदाब सतत खूप जास्त" } },
              { id: "arrhythmia", label: { en:"Heart beats in an irregular rhythm", hi:"दिल अनियमित लय में धड़कता है", mr:"हृदय अनियमित तालात धडधडतं" } },
              { id: "healthy", label: { en:"Normal readings across the board", hi:"पूरे बोर्ड में सामान्य रीडिंग", mr:"संपूर्ण मंडळात सामान्य रीडिंग" } }
            ], chips: ["hypertension","arrhythmia","healthy"], facts: {
              hypertension:"That's hypertension — high blood pressure, something cardiologists manage often!",
              arrhythmia:"That's an arrhythmia — an irregular heart rhythm needing specialist attention!",
              healthy:"That's a healthy heart — exactly what everyone hopes to maintain!"
            }}},
            { type: "Quiz", icon: "📝", title: "Cardiology basics quiz",
              desc: { en:"A real quiz on cardiology as a medical specialty and common heart conditions.", hi:"कार्डियोलॉजी एक मेडिकल स्पेशलिटी के रूप में और आम दिल की स्थितियों पर एक असली क्विज़।", mr:"कार्डिओलॉजी एक वैद्यकीय खासियत म्हणून आणि सामान्य हृदय स्थितींवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about cardiology, does working closely with hearts and blood vessels sound like something you'd enjoy? Why or why not?", hi:"कार्डियोलॉजी के बारे में सीखने के बाद, क्या दिल और रक्त वाहिकाओं के साथ नज़दीक से काम करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"कार्डिओलॉजीबद्दल शिकल्यानंतर, हृदय आणि रक्तवाहिन्यांसोबत जवळून काम करणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Cardiology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced cardiology fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस कार्डियोलॉजी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत कार्डिओलॉजी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Sub-specialties exist?",hi:"उप-विशेषज्ञताएँ मौजूद हैं?",mr:"उप-खासियती अस्तित्वात आहेत?"}, back:{en:"Cardiology itself has sub-specialties — like doctors who focus only on heart rhythm problems, or only on children's hearts! 🔀",hi:"कार्डियोलॉजी की खुद अपनी उप-विशेषज्ञताएँ हैं — जैसे डॉक्टर जो सिर्फ़ दिल की लय की समस्याओं पर, या सिर्फ़ बच्चों के दिल पर ध्यान केंद्रित करते हैं! 🔀",mr:"कार्डिओलॉजीच्याच स्वतःच्या उप-खासियती आहेत — जसं डॉक्टर जे फक्त हृदयाच्या तालाच्या समस्यांवर, किंवा फक्त मुलांच्या हृदयांवर लक्ष केंद्रित करतात! 🔀"} },
              { front:{en:"Surgery vs. non-surgery?",hi:"सर्जरी बनाम गैर-सर्जरी?",mr:"शस्त्रक्रिया विरुद्ध गैर-शस्त्रक्रिया?"}, back:{en:"Some cardiologists don't perform surgery at all — they focus on diagnosis and medicine, while cardiac surgeons specialize in operations! ⚕️",hi:"कुछ कार्डियोलॉजिस्ट बिल्कुल सर्जरी नहीं करते — वे निदान और दवा पर ध्यान केंद्रित करते हैं, जबकि कार्डियक सर्जन ऑपरेशन में विशेषज्ञ होते हैं! ⚕️",mr:"काही कार्डिओलॉजिस्ट अजिबात शस्त्रक्रिया करत नाहीत — ते निदान आणि औषधावर लक्ष केंद्रित करतात, तर कार्डियाक सर्जन ऑपरेशनमध्ये तज्ज्ञ असतात! ⚕️"} },
              { front:{en:"Prevention focus growing?",hi:"बचाव पर ध्यान बढ़ रहा है?",mr:"प्रतिबंधावर लक्ष वाढतंय?"}, back:{en:"Modern cardiology increasingly focuses on prevention — helping people avoid heart disease before it starts! 🌱",hi:"आधुनिक कार्डियोलॉजी तेज़ी से बचाव पर ध्यान केंद्रित कर रही है — लोगों को दिल की बीमारी शुरू होने से पहले इससे बचने में मदद करना! 🌱",mr:"आधुनिक कार्डिओलॉजी वाढत्या प्रमाणात प्रतिबंधावर लक्ष केंद्रित करत आहे — हृदयरोग सुरू होण्याआधीच लोकांना तो टाळण्यास मदत करणं! 🌱"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Cardiology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your cardiology knowledge! Decide if each statement is true or a myth.",
                hi: "चलो कार्डियोलॉजी के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला कार्डिओलॉजीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"All cardiologists perform heart surgery themselves.",hi:"सभी कार्डियोलॉजिस्ट खुद दिल की सर्जरी करते हैं।",mr:"सर्व कार्डिओलॉजिस्ट स्वतः हृदय शस्त्रक्रिया करतात."}, answer:false, explain:{en:"Myth! Many cardiologists focus on diagnosis and medicine, while cardiac surgeons specialize specifically in operations.",hi:"मिथक! कई कार्डियोलॉजिस्ट निदान और दवा पर ध्यान केंद्रित करते हैं, जबकि कार्डियक सर्जन विशेष रूप से ऑपरेशन में विशेषज्ञ होते हैं।",mr:"मिथक! अनेक कार्डिओलॉजिस्ट निदान आणि औषधावर लक्ष केंद्रित करतात, तर कार्डियाक सर्जन विशेषतः ऑपरेशनमध्ये तज्ज्ञ असतात."} },
              { text:{en:"Cardiology has sub-specialties, like doctors focusing only on heart rhythm.",hi:"कार्डियोलॉजी की उप-विशेषज्ञताएँ हैं, जैसे डॉक्टर सिर्फ़ दिल की लय पर ध्यान केंद्रित करते हैं।",mr:"कार्डिओलॉजीच्या उप-खासियती आहेत, जसं डॉक्टर फक्त हृदयाच्या तालावर लक्ष केंद्रित करतात."}, answer:true, explain:{en:"True! Cardiology, like many specialties, has focused sub-areas of expertise.",hi:"सच! कार्डियोलॉजी, कई स्पेशलिटी की तरह, विशेषज्ञता के केंद्रित उप-क्षेत्र रखती है।",mr:"खरं! कार्डिओलॉजी, अनेक खासियतींसारखी, तज्ज्ञतेची केंद्रित उप-क्षेत्रं ठेवते."} },
              { text:{en:"Modern cardiology only focuses on treating illness, never on preventing it.",hi:"आधुनिक कार्डियोलॉजी केवल बीमारी का इलाज करने पर ध्यान केंद्रित करती है, कभी इसे रोकने पर नहीं।",mr:"आधुनिक कार्डिओलॉजी फक्त आजारावर उपचार करण्यावर लक्ष केंद्रित करते, कधीच तो रोखण्यावर नाही."}, answer:false, explain:{en:"Myth! Prevention is an increasingly important focus in modern cardiology.",hi:"मिथक! बचाव आधुनिक कार्डियोलॉजी में तेज़ी से महत्वपूर्ण फोकस है।",mr:"मिथक! प्रतिबंध हे आधुनिक कार्डिओलॉजीमध्ये वाढत्या प्रमाणात महत्त्वाचं लक्ष केंद्र आहे."} }
            ]}}
          ]},
          { label: "Orthopedics & Surgery",
            bonusAssignment: {
              title: { en: "Surgeon for a Day", hi: "एक दिन के लिए सर्जन", mr: "एक दिवसाचा सर्जन" },
              prompt: { en: "Research one common orthopedic surgery (like a knee replacement) and write 3-4 sentences on what it involves. Take a photo!",
                        hi: "एक आम ऑर्थोपेडिक सर्जरी (जैसे घुटने का रिप्लेसमेंट) पर रिसर्च करो और लिखो इसमें क्या शामिल है, 3-4 वाक्यों में। फोटो लो!",
                        mr: "एका सामान्य ऑर्थोपेडिक शस्त्रक्रियेवर (जसं गुडघा बदलणं) संशोधन करा आणि त्यात काय समाविष्ट आहे याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🦴", title: "Explore orthopedics & surgery", mentorVisual: "🦴",
              mentorIntro: {
                en: "Let's meet another specialty — orthopedics, focused on bones, joints, and muscles, often involving surgery.",
                hi: "चलो एक और स्पेशलिटी से मिलते हैं — ऑर्थोपेडिक्स, हड्डियों, जोड़ों, और मांसपेशियों पर केंद्रित, अक्सर सर्जरी शामिल करती है।",
                mr: "चला आणखी एका खासियतीला भेटूया — ऑर्थोपेडिक्स, हाडं, सांधे, आणि स्नायूंवर केंद्रित, अनेकदा शस्त्रक्रिया समाविष्ट करते."
              },
              data: { visual: "🦴", animation: "xray", hotspots: [
              { label:{en:"What orthopedic surgeons do",hi:"ऑर्थोपेडिक सर्जन क्या करते हैं",mr:"ऑर्थोपेडिक सर्जन काय करतात"}, fact:{en:"Orthopedic surgeons treat problems with bones, joints, ligaments, and muscles — from fractures to joint replacements!"} },
              { label:{en:"Not always surgery",hi:"हमेशा सर्जरी नहीं",mr:"नेहमी शस्त्रक्रिया नाही"}, fact:{en:"Many orthopedic problems are actually treated without surgery at all — physical therapy or casts are often enough!"} },
              { label:{en:"Sports medicine link",hi:"स्पोर्ट्स मेडिसिन लिंक",mr:"स्पोर्ट्स मेडिसिन दुवा"}, fact:{en:"Many orthopedic surgeons specialize in sports injuries, helping athletes recover and return to their sport!"} }
            ]}},
            { engine: "build-match", icon: "🦴", title: "Match condition to likely treatment approach", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching orthopedic conditions to whether they'd likely need surgery or not.",
                hi: "चलो ऑर्थोपेडिक स्थितियों को यह मैच करने का अभ्यास करते हैं कि उन्हें सर्जरी की ज़रूरत होगी या नहीं।",
                mr: "चला ऑर्थोपेडिक स्थिती त्यांना शस्त्रक्रियेची गरज असेल की नाही याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "mild_sprain", label: { en:"Mild ankle sprain", hi:"हल्का टखने का मोच", mr:"सौम्य घोट्याचं मुरगळणं" } },
              { id: "severe_fracture", label: { en:"Severely displaced bone fracture", hi:"गंभीर रूप से विस्थापित हड्डी फ्रैक्चर", mr:"गंभीरपणे विस्थापित हाड फ्रॅक्चर" } },
              { id: "worn_joint", label: { en:"Joint completely worn out over many years", hi:"कई सालों में पूरी तरह घिसा हुआ जोड़", mr:"अनेक वर्षांत पूर्णपणे झिजलेला सांधा" } }
            ], chips: ["mild_sprain","severe_fracture","worn_joint"], facts: {
              mild_sprain:"That usually just needs rest, ice, and time — no surgery needed!",
              severe_fracture:"That often needs surgery to properly realign the bone!",
              worn_joint:"That might need a joint replacement surgery — a common orthopedic procedure!"
            }}},
            { type: "Quiz", icon: "📝", title: "Orthopedics & surgery quiz",
              desc: { en:"A real quiz on orthopedics as a specialty and when surgery is typically needed.", hi:"ऑर्थोपेडिक्स एक स्पेशलिटी के रूप में और सर्जरी आमतौर पर कब ज़रूरी होती है, इस पर एक असली क्विज़।", mr:"ऑर्थोपेडिक्स एक खासियत म्हणून आणि शस्त्रक्रिया सहसा कधी आवश्यक असते, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about orthopedics, does working with bones, joints, and sometimes surgery sound like something you'd enjoy? Why or why not?", hi:"ऑर्थोपेडिक्स के बारे में सीखने के बाद, क्या हड्डियों, जोड़ों, और कभी-कभी सर्जरी के साथ काम करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"ऑर्थोपेडिक्सबद्दल शिकल्यानंतर, हाडं, सांधे, आणि कधीकधी शस्त्रक्रियेसोबत काम करणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Orthopedics Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced orthopedics fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस ऑर्थोपेडिक्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत ऑर्थोपेडिक्स तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Long surgical training?",hi:"लंबा सर्जिकल प्रशिक्षण?",mr:"दीर्घ शस्त्रक्रिया प्रशिक्षण?"}, back:{en:"Orthopedic surgeons often train for over a decade after starting medical school — one of the longest specialty paths! ⏳",hi:"ऑर्थोपेडिक सर्जन अक्सर मेडिकल स्कूल शुरू करने के बाद एक दशक से ज़्यादा प्रशिक्षण लेते हैं — सबसे लंबे स्पेशलिटी रास्तों में से एक! ⏳",mr:"ऑर्थोपेडिक सर्जन अनेकदा वैद्यकीय शाळा सुरू केल्यानंतर दशकाहून अधिक काळ प्रशिक्षण घेतात — सर्वात लांब खासियत मार्गांपैकी एक! ⏳"} },
              { front:{en:"Implants and materials?",hi:"इम्प्लांट और सामग्री?",mr:"इम्प्लांट आणि साहित्य?"}, back:{en:"Modern joint replacements use special metals and materials designed to last decades inside the human body! 🔩",hi:"आधुनिक जोड़ रिप्लेसमेंट खास धातुओं और सामग्रियों का इस्तेमाल करते हैं जो मानव शरीर के अंदर दशकों तक टिकने के लिए बनाई गई हैं! 🔩",mr:"आधुनिक सांधे बदलण्यात खास धातू आणि साहित्य वापरलं जातं जे मानवी शरीरात दशकांपर्यंत टिकण्यासाठी बनवलेलं आहे! 🔩"} },
              { front:{en:"Rehab is huge?",hi:"रिहैब बहुत बड़ा है?",mr:"पुनर्वसन खूप मोठं आहे?"}, back:{en:"Physical rehabilitation after orthopedic surgery is often just as important as the surgery itself! 🏃",hi:"ऑर्थोपेडिक सर्जरी के बाद फिज़िकल रिहैबिलिटेशन अक्सर सर्जरी जितना ही ज़रूरी होता है! 🏃",mr:"ऑर्थोपेडिक शस्त्रक्रियेनंतरचं शारीरिक पुनर्वसन अनेकदा शस्त्रक्रियेइतकंच महत्त्वाचं असतं! 🏃"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Orthopedics or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your orthopedics knowledge! Decide if each statement is true or a myth.",
                hi: "चलो ऑर्थोपेडिक्स के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला ऑर्थोपेडिक्सच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Every orthopedic problem requires surgery to fix.",hi:"हर ऑर्थोपेडिक समस्या को ठीक करने के लिए सर्जरी की ज़रूरत होती है।",mr:"प्रत्येक ऑर्थोपेडिक समस्या दुरुस्त करण्यासाठी शस्त्रक्रियेची गरज असते."}, answer:false, explain:{en:"Myth! Many orthopedic issues are treated with rest, therapy, or casts — no surgery needed.",hi:"मिथक! कई ऑर्थोपेडिक समस्याओं का इलाज आराम, थेरेपी, या कास्ट से किया जाता है — सर्जरी की ज़रूरत नहीं।",mr:"मिथक! अनेक ऑर्थोपेडिक समस्यांवर विश्रांती, थेरपी, किंवा कास्टने उपचार केले जातात — शस्त्रक्रियेची गरज नाही."} },
              { text:{en:"Physical rehabilitation is often just as important as the surgery itself.",hi:"फिज़िकल रिहैबिलिटेशन अक्सर सर्जरी जितना ही ज़रूरी होता है।",mr:"शारीरिक पुनर्वसन अनेकदा शस्त्रक्रियेइतकंच महत्त्वाचं असतं."}, answer:true, explain:{en:"True! Recovery and rehab are a genuinely essential part of orthopedic treatment.",hi:"सच! रिकवरी और रिहैब ऑर्थोपेडिक इलाज का वाकई ज़रूरी हिस्सा हैं।",mr:"खरं! रिकव्हरी आणि पुनर्वसन हे ऑर्थोपेडिक उपचाराचा खरोखर आवश्यक भाग आहेत."} },
              { text:{en:"Orthopedic surgeons only treat older adults, never young athletes.",hi:"ऑर्थोपेडिक सर्जन केवल बुज़ुर्ग वयस्कों का इलाज करते हैं, कभी युवा खिलाड़ियों का नहीं।",mr:"ऑर्थोपेडिक सर्जन फक्त वृद्ध प्रौढांवर उपचार करतात, कधीच तरुण खेळाडूंवर नाही."}, answer:false, explain:{en:"Myth! Many orthopedic surgeons specialize in sports medicine, treating athletes of all ages.",hi:"मिथक! कई ऑर्थोपेडिक सर्जन स्पोर्ट्स मेडिसिन में विशेषज्ञ होते हैं, सभी उम्र के खिलाड़ियों का इलाज करते हुए।",mr:"मिथक! अनेक ऑर्थोपेडिक सर्जन स्पोर्ट्स मेडिसिनमध्ये तज्ज्ञ असतात, सर्व वयोगटातील खेळाडूंवर उपचार करत."} }
            ]}}
          ]},
          { label: "Neurology & Research",
            bonusAssignment: {
              title: { en: "Neurologist for a Day", hi: "एक दिन के लिए न्यूरोलॉजिस्ट", mr: "एक दिवसाचा न्यूरोलॉजिस्ट" },
              prompt: { en: "Research one neurological condition (like migraine or epilepsy) and write 3-4 sentences on how a neurologist would help. Take a photo!",
                        hi: "एक न्यूरोलॉजिकल स्थिति (जैसे माइग्रेन या मिर्गी) पर रिसर्च करो और लिखो एक न्यूरोलॉजिस्ट कैसे मदद करेगा, 3-4 वाक्यों में। फोटो लो!",
                        mr: "एका न्यूरोलॉजिकल स्थितीवर (जसं मायग्रेन किंवा अपस्मार) संशोधन करा आणि न्यूरोलॉजिस्ट कशी मदत करेल याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧠", title: "Explore neurology & research", mentorVisual: "🧠",
              mentorIntro: {
                en: "Let's meet neurology — the specialty focused on the brain and nervous system, closely tied to ongoing research.",
                hi: "चलो न्यूरोलॉजी से मिलते हैं — दिमाग़ और नर्वस सिस्टम पर केंद्रित स्पेशलिटी, चल रही रिसर्च से गहराई से जुड़ी हुई।",
                mr: "चला न्यूरोलॉजीला भेटूया — मेंदू आणि चेतासंस्थेवर केंद्रित खासियत, सुरू असलेल्या संशोधनाशी घट्ट जोडलेली."
              },
              data: { visual: "🧠", animation: "nervesignal", hotspots: [
              { label:{en:"What neurologists do",hi:"न्यूरोलॉजिस्ट क्या करते हैं",mr:"न्यूरोलॉजिस्ट काय करतात"}, fact:{en:"Neurologists diagnose and treat conditions of the brain, spinal cord, and nerves — from headaches to complex disorders!"} },
              { label:{en:"Research-heavy field",hi:"रिसर्च-भारी क्षेत्र",mr:"संशोधन-जड क्षेत्र"}, fact:{en:"The brain is still not fully understood, so neurology is one of the most active areas of ongoing medical research!"} },
              { label:{en:"Not just doctors",hi:"सिर्फ़ डॉक्टर नहीं",mr:"फक्त डॉक्टर नाही"}, fact:{en:"Many neuroscientists doing brain research aren't practicing doctors at all — they're scientists in labs!"} }
            ]}},
            { engine: "build-match", icon: "🧠", title: "Match neurological symptom to likely area", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching neurological symptoms to what part of the nervous system they might involve.",
                hi: "चलो न्यूरोलॉजिकल लक्षणों को यह मैच करने का अभ्यास करते हैं कि वे नर्वस सिस्टम के किस हिस्से को शामिल कर सकते हैं।",
                mr: "चला न्यूरोलॉजिकल लक्षणं ती चेतासंस्थेच्या कोणत्या भागाशी संबंधित असू शकतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "headache", label: { en:"Recurring severe headaches", hi:"बार-बार होने वाला गंभीर सिरदर्द", mr:"वारंवार होणारी तीव्र डोकेदुखी" } },
              { id: "numbness", label: { en:"Numbness or tingling in a limb", hi:"किसी अंग में सुन्नपन या झुनझुनी", mr:"एखाद्या अवयवात बधीरपणा किंवा मुंग्या" } },
              { id: "memory", label: { en:"Difficulty with memory or thinking", hi:"याददाश्त या सोच में कठिनाई", mr:"स्मरणशक्ती किंवा विचार करण्यात अडचण" } }
            ], chips: ["headache","numbness","memory"], facts: {
              headache:"That could suggest something like migraines — a common neurological focus!",
              numbness:"That could suggest a nerve issue — worth a neurologist's evaluation!",
              memory:"That could suggest something involving the brain's cognitive functions — an area of active research!"
            }}},
            { type: "Quiz", icon: "📝", title: "Neurology & research quiz",
              desc: { en:"A real quiz on neurology as a specialty and its connection to ongoing research.", hi:"न्यूरोलॉजी एक स्पेशलिटी के रूप में और चल रही रिसर्च से इसके जुड़ाव पर एक असली क्विज़।", mr:"न्यूरोलॉजी एक खासियत म्हणून आणि सुरू असलेल्या संशोधनाशी तिचा संबंध यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about neurology, does working on the brain and nervous system — or even doing brain research — sound like something you'd enjoy? Why or why not?", hi:"न्यूरोलॉजी के बारे में सीखने के बाद, क्या दिमाग़ और नर्वस सिस्टम पर काम करना — या यहाँ तक कि दिमाग़ रिसर्च करना — तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"न्यूरोलॉजीबद्दल शिकल्यानंतर, मेंदू आणि चेतासंस्थेवर काम करणं — किंवा अगदी मेंदू संशोधन करणं — तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Neurology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced neurology fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस न्यूरोलॉजी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत न्यूरोलॉजी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Brain still mysterious?",hi:"दिमाग़ अभी भी रहस्यमय?",mr:"मेंदू अजूनही रहस्यमय?"}, back:{en:"Scientists still don't fully understand exactly how consciousness or memory work at a deep level! 🔬",hi:"वैज्ञानिक अभी भी पूरी तरह नहीं समझते कि चेतना या याददाश्त गहरे स्तर पर बिल्कुल कैसे काम करती है! 🔬",mr:"चेतना किंवा स्मरणशक्ती खोलवर नेमकं कशी काम करते हे शास्त्रज्ञांना अजूनही पूर्णपणे समजलेलं नाही! 🔬"} },
              { front:{en:"Neuroscience vs. neurology?",hi:"न्यूरोसाइंस बनाम न्यूरोलॉजी?",mr:"न्यूरोसायन्स विरुद्ध न्यूरोलॉजी?"}, back:{en:"Neuroscientists often research the brain in labs, while neurologists are doctors who apply that knowledge to treat patients! 🧪",hi:"न्यूरोसाइंटिस्ट अक्सर लैब में दिमाग़ पर रिसर्च करते हैं, जबकि न्यूरोलॉजिस्ट डॉक्टर हैं जो मरीज़ों का इलाज करने के लिए उस ज्ञान का इस्तेमाल करते हैं! 🧪",mr:"न्यूरोसायंटिस्ट अनेकदा लॅबमध्ये मेंदूवर संशोधन करतात, तर न्यूरोलॉजिस्ट डॉक्टर आहेत जे रुग्णांवर उपचार करण्यासाठी ते ज्ञान वापरतात! 🧪"} },
              { front:{en:"New treatments emerging?",hi:"नए इलाज उभर रहे हैं?",mr:"नवीन उपचार उदयास येत आहेत?"}, back:{en:"New neurological treatments are being discovered constantly — this field changes faster than many others! 🚀",hi:"नए न्यूरोलॉजिकल इलाज लगातार खोजे जा रहे हैं — यह क्षेत्र कई दूसरों से तेज़ी से बदलता है! 🚀",mr:"नवीन न्यूरोलॉजिकल उपचार सतत शोधले जात आहेत — हे क्षेत्र इतर अनेकांपेक्षा वेगाने बदलतं! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Neurology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your neurology knowledge! Decide if each statement is true or a myth.",
                hi: "चलो न्यूरोलॉजी के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला न्यूरोलॉजीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Scientists fully understand exactly how the human brain works.",hi:"वैज्ञानिक पूरी तरह समझते हैं कि मानव दिमाग़ बिल्कुल कैसे काम करता है।",mr:"शास्त्रज्ञांना मानवी मेंदू नेमका कसा काम करतो हे पूर्णपणे समजतं."}, answer:false, explain:{en:"Myth! The brain remains one of the least fully understood organs, with active research ongoing.",hi:"मिथक! दिमाग़ सबसे कम पूरी तरह समझे गए अंगों में से एक है, सक्रिय रिसर्च चल रही है।",mr:"मिथक! मेंदू हा सर्वात कमी पूर्णपणे समजलेल्या अवयवांपैकी एक आहे, सक्रिय संशोधन सुरू आहे."} },
              { text:{en:"Neurologists are doctors who diagnose and treat conditions of the brain and nervous system.",hi:"न्यूरोलॉजिस्ट डॉक्टर हैं जो दिमाग़ और नर्वस सिस्टम की स्थितियों का निदान और इलाज करते हैं।",mr:"न्यूरोलॉजिस्ट डॉक्टर आहेत जे मेंदू आणि चेतासंस्थेच्या स्थितींचं निदान आणि उपचार करतात."}, answer:true, explain:{en:"True! That's exactly what neurologists specialize in.",hi:"सच! यही बिल्कुल है जिसमें न्यूरोलॉजिस्ट विशेषज्ञ होते हैं।",mr:"खरं! यातच न्यूरोलॉजिस्ट तज्ज्ञ असतात."} },
              { text:{en:"All brain researchers are practicing medical doctors.",hi:"सभी दिमाग़ शोधकर्ता प्रैक्टिसिंग मेडिकल डॉक्टर हैं।",mr:"सर्व मेंदू संशोधक प्रॅक्टिसिंग वैद्यकीय डॉक्टर आहेत."}, answer:false, explain:{en:"Myth! Many neuroscientists are researchers or scientists, not practicing doctors treating patients.",hi:"मिथक! कई न्यूरोसाइंटिस्ट शोधकर्ता या वैज्ञानिक हैं, मरीज़ों का इलाज करने वाले प्रैक्टिसिंग डॉक्टर नहीं।",mr:"मिथक! अनेक न्यूरोसायंटिस्ट संशोधक किंवा शास्त्रज्ञ आहेत, रुग्णांवर उपचार करणारे प्रॅक्टिसिंग डॉक्टर नाहीत."} }
            ]}}
          ]},
          { label: "Pathology & Lab Medicine",
            bonusAssignment: {
              title: { en: "Pathologist for a Day", hi: "एक दिन के लिए पैथोलॉजिस्ट", mr: "एक दिवसाचा पॅथॉलॉजिस्ट" },
              prompt: { en: "Research what a pathologist actually does day-to-day and write 3-4 sentences about it. Take a photo of your notes!",
                        hi: "एक पैथोलॉजिस्ट असल में रोज़ाना क्या करता है इस पर रिसर्च करो और इसके बारे में 3-4 वाक्य लिखो। अपने नोट्स की फोटो लो!",
                        mr: "पॅथॉलॉजिस्ट दैनंदिन खरंच काय करतो यावर संशोधन करा आणि त्याबद्दल 3-4 वाक्यं लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🔬", title: "Explore pathology & lab medicine", mentorVisual: "🔬",
              mentorIntro: {
                en: "Let's meet a specialty that often works behind the scenes — pathology, focused on diagnosing disease through lab analysis.",
                hi: "चलो एक ऐसी स्पेशलिटी से मिलते हैं जो अक्सर पर्दे के पीछे काम करती है — पैथोलॉजी, लैब विश्लेषण के ज़रिए बीमारी का निदान करने पर केंद्रित।",
                mr: "चला एका खासियतीला भेटूया जी अनेकदा पडद्यामागे काम करते — पॅथॉलॉजी, लॅब विश्लेषणाद्वारे आजाराचं निदान करण्यावर केंद्रित."
              },
              data: { visual: "🔬", animation: "celldivide", hotspots: [
              { label:{en:"What pathologists do",hi:"पैथोलॉजिस्ट क्या करते हैं",mr:"पॅथॉलॉजिस्ट काय करतात"}, fact:{en:"Pathologists examine tissue samples, blood, and other specimens under a microscope to diagnose diseases!"} },
              { label:{en:"Behind the scenes",hi:"पर्दे के पीछे",mr:"पडद्यामागे"}, fact:{en:"Many pathologists rarely meet patients directly — but their work shapes almost every diagnosis in medicine!"} },
              { label:{en:"Detective work",hi:"जासूसी काम",mr:"गुप्तहेर काम"}, fact:{en:"Pathology has been called medical detective work — carefully examining evidence to find the truth!"} }
            ]}},
            { engine: "build-match", icon: "🔬", title: "Match lab specimen to what it can reveal", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching lab specimens to what they can help diagnose.",
                hi: "चलो लैब नमूनों को यह मैच करने का अभ्यास करते हैं कि वे क्या निदान करने में मदद कर सकते हैं।",
                mr: "चला लॅब नमुने ते काय निदान करण्यास मदत करू शकतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "blood_sample", label: { en:"Can reveal infections or blood disorders", hi:"संक्रमण या खून की बीमारियाँ दिखा सकता है", mr:"संसर्ग किंवा रक्ताचे विकार दाखवू शकतो" } },
              { id: "tissue_biopsy", label: { en:"Can reveal whether cells are cancerous", hi:"दिखा सकता है क्या कोशिकाएँ कैंसरयुक्त हैं", mr:"पेशी कर्करोगग्रस्त आहेत का ते दाखवू शकतो" } },
              { id: "urine_sample", label: { en:"Can reveal kidney or metabolic issues", hi:"किडनी या मेटाबॉलिक समस्याएँ दिखा सकता है", mr:"किडनी किंवा चयापचय समस्या दाखवू शकतो" } }
            ], chips: ["blood_sample","tissue_biopsy","urine_sample"], facts: {
              blood_sample:"That's a blood sample — revealing so much about overall health!",
              tissue_biopsy:"That's a tissue biopsy — crucial for diagnosing things like cancer!",
              urine_sample:"That's a urine sample — useful for checking kidney function!"
            }}},
            { type: "Quiz", icon: "📝", title: "Pathology & lab medicine quiz",
              desc: { en:"A real quiz on pathology as a specialty and how lab medicine supports diagnosis.", hi:"पैथोलॉजी एक स्पेशलिटी के रूप में और लैब मेडिसिन निदान का समर्थन कैसे करती है, इस पर एक असली क्विज़।", mr:"पॅथॉलॉजी एक खासियत म्हणून आणि लॅब मेडिसिन निदानाला कशी मदत करते, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about pathology, does working mostly behind the scenes, examining samples to solve medical mysteries, sound like something you'd enjoy? Why or why not?", hi:"पैथोलॉजी के बारे में सीखने के बाद, क्या ज़्यादातर पर्दे के पीछे काम करना, मेडिकल रहस्यों को सुलझाने के लिए नमूनों की जांच करना, तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"पॅथॉलॉजीबद्दल शिकल्यानंतर, बहुतांश पडद्यामागे काम करणं, वैद्यकीय रहस्यं सोडवण्यासाठी नमुने तपासणं, तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Pathology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced pathology fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस पैथोलॉजी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत पॅथॉलॉजी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Shapes treatment decisions?",hi:"इलाज के फ़ैसलों को आकार देता है?",mr:"उपचार निर्णयांना आकार देतो?"}, back:{en:"A pathologist's diagnosis often directly shapes what treatment a patient's doctor will choose next! 🎯",hi:"एक पैथोलॉजिस्ट का निदान अक्सर सीधे तय करता है कि मरीज़ का डॉक्टर आगे कौन सा इलाज चुनेगा! 🎯",mr:"पॅथॉलॉजिस्टचं निदान अनेकदा थेट ठरवतं की रुग्णाचे डॉक्टर पुढे कोणता उपचार निवडतील! 🎯"} },
              { front:{en:"Technology transforming the field?",hi:"तकनीक क्षेत्र को बदल रही है?",mr:"तंत्रज्ञान क्षेत्र बदलत आहे?"}, back:{en:"Digital pathology, where samples are scanned and analyzed on computers, is changing how this field works! 💻",hi:"डिजिटल पैथोलॉजी, जहाँ नमूनों को स्कैन करके कंप्यूटर पर विश्लेषित किया जाता है, इस क्षेत्र के काम करने के तरीके को बदल रही है! 💻",mr:"डिजिटल पॅथॉलॉजी, जिथे नमुने स्कॅन करून संगणकावर विश्लेषित केले जातात, हे क्षेत्र कसं काम करतं ते बदलत आहे! 💻"} },
              { front:{en:"Forensic pathology too?",hi:"फोरेंसिक पैथोलॉजी भी?",mr:"फॉरेन्सिक पॅथॉलॉजीसुद्धा?"}, back:{en:"Some pathologists specialize in forensic work, helping determine causes of death for legal investigations! 🔍",hi:"कुछ पैथोलॉजिस्ट फोरेंसिक काम में विशेषज्ञ होते हैं, कानूनी जांच के लिए मौत के कारणों का पता लगाने में मदद करते हुए! 🔍",mr:"काही पॅथॉलॉजिस्ट फॉरेन्सिक कामात तज्ज्ञ असतात, कायदेशीर तपासांसाठी मृत्यूची कारणं ठरवण्यास मदत करत! 🔍"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Pathology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your pathology knowledge! Decide if each statement is true or a myth.",
                hi: "चलो पैथोलॉजी के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला पॅथॉलॉजीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Pathologists always meet and directly examine patients in person.",hi:"पैथोलॉजिस्ट हमेशा मरीज़ों से मिलते हैं और सीधे व्यक्तिगत रूप से जाँच करते हैं।",mr:"पॅथॉलॉजिस्ट नेहमी रुग्णांना भेटतात आणि थेट प्रत्यक्ष तपासतात."}, answer:false, explain:{en:"Myth! Many pathologists rarely meet patients — they work mostly examining samples in a lab.",hi:"मिथक! कई पैथोलॉजिस्ट शायद ही कभी मरीज़ों से मिलते हैं — वे ज़्यादातर लैब में नमूनों की जांच करते हुए काम करते हैं।",mr:"मिथक! अनेक पॅथॉलॉजिस्ट क्वचितच रुग्णांना भेटतात — ते बहुतांश लॅबमध्ये नमुने तपासण्याचं काम करतात."} },
              { text:{en:"A pathologist's diagnosis can directly shape what treatment a patient receives.",hi:"एक पैथोलॉजिस्ट का निदान सीधे आकार दे सकता है कि मरीज़ को कौन सा इलाज मिलता है।",mr:"पॅथॉलॉजिस्टचं निदान थेट ठरवू शकतं की रुग्णाला कोणता उपचार मिळतो."}, answer:true, explain:{en:"True! Pathology results are often central to deciding a patient's treatment plan.",hi:"सच! पैथोलॉजी नतीजे अक्सर मरीज़ की इलाज योजना तय करने के केंद्र में होते हैं।",mr:"खरं! पॅथॉलॉजी निकाल अनेकदा रुग्णाच्या उपचार योजनेच्या केंद्रस्थानी असतात."} },
              { text:{en:"Pathology has nothing to do with legal or forensic investigations.",hi:"पैथोलॉजी का कानूनी या फोरेंसिक जांच से कोई लेना-देना नहीं है।",mr:"पॅथॉलॉजीचा कायदेशीर किंवा फॉरेन्सिक तपासांशी काहीही संबंध नाही."}, answer:false, explain:{en:"Myth! Forensic pathology is a real specialty helping determine causes of death for legal cases.",hi:"मिथक! फोरेंसिक पैथोलॉजी एक असली स्पेशलिटी है जो कानूनी मामलों के लिए मौत के कारण तय करने में मदद करती है।",mr:"मिथक! फॉरेन्सिक पॅथॉलॉजी ही एक खरी खासियत आहे जी कायदेशीर प्रकरणांसाठी मृत्यूची कारणं ठरवण्यास मदत करते."} }
            ]}}
          ]},
          { label: "Emergency Medicine",
            bonusAssignment: {
              title: { en: "ER Doctor for a Day", hi: "एक दिन के लिए ईआर डॉक्टर", mr: "एक दिवसाचा ईआर डॉक्टर" },
              prompt: { en: "Research what makes emergency medicine different from other specialties and write 3-4 sentences. Take a photo!",
                        hi: "इमरजेंसी मेडिसिन को दूसरी स्पेशलिटी से क्या अलग बनाता है इस पर रिसर्च करो और 3-4 वाक्य लिखो। फोटो लो!",
                        mr: "इमर्जन्सी मेडिसिनला इतर खासियतींपेक्षा वेगळं काय बनवतं यावर संशोधन करा आणि 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🚑", title: "Explore emergency medicine", mentorVisual: "🚑",
              mentorIntro: {
                en: "Let's meet emergency medicine — the specialty focused on handling urgent, unpredictable cases quickly.",
                hi: "चलो इमरजेंसी मेडिसिन से मिलते हैं — तत्काल, अप्रत्याशित मामलों को तेज़ी से संभालने पर केंद्रित स्पेशलिटी।",
                mr: "चला इमर्जन्सी मेडिसिनला भेटूया — तातडीचे, अनपेक्षित केसेस वेगाने हाताळण्यावर केंद्रित खासियत."
              },
              data: { visual: "🚑", hotspots: [
              { label:{en:"What ER doctors do",hi:"ईआर डॉक्टर क्या करते हैं",mr:"ईआर डॉक्टर काय करतात"}, fact:{en:"Emergency medicine doctors handle anything that walks through the door — from minor injuries to life-threatening crises!"} },
              { label:{en:"Fast decision-making",hi:"तेज़ फ़ैसले लेना",mr:"जलद निर्णय घेणं"}, fact:{en:"ER doctors often need to make quick decisions with limited information — a unique skill this specialty demands!"} },
              { label:{en:"Variety every shift",hi:"हर शिफ्ट में विविधता",mr:"प्रत्येक शिफ्टमध्ये विविधता"}, fact:{en:"No two shifts in the ER are ever quite the same — huge variety is part of what draws people to this specialty!"} }
            ]}},
            { engine: "build-match", icon: "🚑", title: "Match ER case to how quickly it needs attention", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice the triage thinking ER doctors use constantly — sorting cases by real urgency.",
                hi: "चलो ट्राएज सोच का अभ्यास करते हैं जो ईआर डॉक्टर लगातार इस्तेमाल करते हैं — मामलों को असली तात्कालिकता से छाँटना।",
                mr: "चला ट्रायेज विचाराचा सराव करूया जो ईआर डॉक्टर सतत वापरतात — केसेस खऱ्या तातडीनुसार वर्गीकृत करणं."
              },
              data: { noStakes: false, zones: [
              { id: "minor", label: { en:"Small cut needing a few stitches", hi:"कुछ टांकों की ज़रूरत वाला छोटा कट", mr:"काही टाके लागणारा लहान कट" } },
              { id: "urgent", label: { en:"Difficulty breathing suddenly", hi:"अचानक साँस लेने में तकलीफ़", mr:"अचानक श्वास घेण्यास त्रास" } },
              { id: "moderate", label: { en:"High fever lasting several days", hi:"कई दिनों तक तेज़ बुखार", mr:"अनेक दिवस तीव्र ताप" } }
            ], chips: ["minor","urgent","moderate"], facts: {
              minor:"That's lower urgency — can wait a bit if the ER is busy!",
              urgent:"That's the highest urgency — needs attention immediately!",
              moderate:"That's moderate urgency — needs attention soon, but isn't immediately life-threatening!"
            }}},
            { type: "Quiz", icon: "📝", title: "Emergency medicine quiz",
              desc: { en:"A real quiz on emergency medicine as a specialty and how triage works.", hi:"इमरजेंसी मेडिसिन एक स्पेशलिटी के रूप में और ट्राएज कैसे काम करता है, इस पर एक असली क्विज़।", mr:"इमर्जन्सी मेडिसिन एक खासियत म्हणून आणि ट्रायेज कसं काम करतं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about emergency medicine, does handling unpredictable, fast-paced situations sound like something you'd enjoy? Why or why not?", hi:"इमरजेंसी मेडिसिन के बारे में सीखने के बाद, क्या अप्रत्याशित, तेज़-रफ़्तार स्थितियों को संभालना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"इमर्जन्सी मेडिसिनबद्दल शिकल्यानंतर, अनपेक्षित, वेगवान परिस्थिती हाताळणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Emergency Medicine Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced emergency medicine fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस इमरजेंसी मेडिसिन तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत इमर्जन्सी मेडिसिन तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Broad knowledge needed?",hi:"व्यापक ज्ञान चाहिए?",mr:"व्यापक ज्ञान लागतं?"}, back:{en:"ER doctors need broad knowledge across many specialties, since they never know what case will come through the door next! 📚",hi:"ईआर डॉक्टरों को कई स्पेशलिटी में व्यापक ज्ञान चाहिए, क्योंकि वे कभी नहीं जानते कि दरवाज़े से आगे कौन सा मामला आएगा! 📚",mr:"ईआर डॉक्टरांना अनेक खासियतींमध्ये व्यापक ज्ञान लागतं, कारण त्यांना कधीच माहीत नसतं की दरवाज्यातून पुढे कोणती केस येईल! 📚"} },
              { front:{en:"Team-based specialty?",hi:"टीम-आधारित स्पेशलिटी?",mr:"संघ-आधारित खासियत?"}, back:{en:"Emergency medicine relies heavily on teamwork — doctors, nurses, and technicians all moving fast together! 🤝",hi:"इमरजेंसी मेडिसिन टीमवर्क पर बहुत निर्भर करती है — डॉक्टर, नर्स, और तकनीशियन सब एक साथ तेज़ी से काम करते हुए! 🤝",mr:"इमर्जन्सी मेडिसिन खूप संघकार्यावर अवलंबून असते — डॉक्टर, नर्स, आणि तंत्रज्ञ सर्व एकत्र वेगाने काम करत! 🤝"} },
              { front:{en:"High-stress environment?",hi:"उच्च तनाव वाला माहौल?",mr:"उच्च तणावाचं वातावरण?"}, back:{en:"Emergency medicine is known as one of the more high-pressure specialties — staying calm under pressure is essential! 💪",hi:"इमरजेंसी मेडिसिन को अधिक उच्च-दबाव वाली स्पेशलिटी में से एक के रूप में जाना जाता है — दबाव में शांत रहना ज़रूरी है! 💪",mr:"इमर्जन्सी मेडिसिन ही अधिक उच्च-दाब असलेल्या खासियतींपैकी एक म्हणून ओळखली जाते — दबावाखाली शांत राहणं आवश्यक आहे! 💪"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Emergency Medicine or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your emergency medicine knowledge! Decide if each statement is true or a myth.",
                hi: "चलो इमरजेंसी मेडिसिन के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला इमर्जन्सी मेडिसिनच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Every patient in an emergency room is treated in the exact order they arrived.",hi:"इमरजेंसी रूम में हर मरीज़ का इलाज बिल्कुल उसी क्रम में होता है जिसमें वे पहुँचे।",mr:"इमर्जन्सी रूममध्ये प्रत्येक रुग्णावर ते ज्या क्रमाने आले त्याच क्रमाने उपचार होतात."}, answer:false, explain:{en:"Myth! ERs use triage to prioritize by urgency, not simply arrival order.",hi:"मिथक! ईआर तात्कालिकता के आधार पर प्राथमिकता तय करने के लिए ट्राएज का इस्तेमाल करते हैं, सिर्फ़ आने के क्रम से नहीं।",mr:"मिथक! ईआर तातडीनुसार प्राधान्य ठरवण्यासाठी ट्रायेज वापरतात, फक्त येण्याच्या क्रमाने नाही."} },
              { text:{en:"Emergency medicine doctors need broad knowledge across many different areas.",hi:"इमरजेंसी मेडिसिन डॉक्टरों को कई अलग-अलग क्षेत्रों में व्यापक ज्ञान चाहिए।",mr:"इमर्जन्सी मेडिसिन डॉक्टरांना अनेक वेगवेगळ्या क्षेत्रांमध्ये व्यापक ज्ञान लागतं."}, answer:true, explain:{en:"True! Since ER cases vary so widely, broad medical knowledge is essential.",hi:"सच! चूंकि ईआर मामले इतने व्यापक रूप से अलग होते हैं, व्यापक मेडिकल ज्ञान ज़रूरी है।",mr:"खरं! ईआर केसेस इतक्या मोठ्या प्रमाणावर वेगवेगळ्या असल्यामुळे, व्यापक वैद्यकीय ज्ञान आवश्यक आहे."} },
              { text:{en:"Emergency medicine is generally considered a low-stress, predictable specialty.",hi:"इमरजेंसी मेडिसिन को आमतौर पर कम-तनाव वाली, अनुमानित स्पेशलिटी माना जाता है।",mr:"इमर्जन्सी मेडिसिन सहसा कमी-तणावाची, अंदाजित खासियत मानली जाते."}, answer:false, explain:{en:"Myth! Emergency medicine is known for being high-pressure and unpredictable, not low-stress.",hi:"मिथक! इमरजेंसी मेडिसिन को उच्च-दबाव और अप्रत्याशित होने के लिए जाना जाता है, कम-तनाव के लिए नहीं।",mr:"मिथक! इमर्जन्सी मेडिसिन उच्च-दाब आणि अनपेक्षित असण्यासाठी ओळखली जाते, कमी-तणावासाठी नाही."} }
            ]}}
          ]},
          { label: "Pediatrics",
            bonusAssignment: {
              title: { en: "Pediatrician for a Day", hi: "एक दिन के लिए पीडियाट्रिशियन", mr: "एक दिवसाचा पीडियाट्रिशियन" },
              prompt: { en: "Research how treating a child is different from treating an adult, and write 3-4 sentences. Take a photo of your notes!",
                        hi: "एक बच्चे का इलाज करना एक वयस्क के इलाज से कैसे अलग है, इस पर रिसर्च करो और 3-4 वाक्य लिखो। अपने नोट्स की फोटो लो!",
                        mr: "मुलावर उपचार करणं प्रौढांवर उपचार करण्यापेक्षा कसं वेगळं आहे यावर संशोधन करा आणि 3-4 वाक्यं लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧸", title: "Explore pediatrics", mentorVisual: "🧸",
              mentorIntro: {
                en: "Let's meet pediatrics — the specialty focused entirely on children, from newborns to teenagers.",
                hi: "चलो पीडियाट्रिक्स से मिलते हैं — नवजातों से लेकर किशोरों तक, पूरी तरह बच्चों पर केंद्रित स्पेशलिटी।",
                mr: "चला पीडियाट्रिक्सला भेटूया — नवजातांपासून ते किशोरवयीनांपर्यंत, पूर्णपणे मुलांवर केंद्रित खासियत."
              },
              data: { visual: "🧸", hotspots: [
              { label:{en:"What pediatricians do",hi:"पीडियाट्रिशियन क्या करते हैं",mr:"पीडियाट्रिशियन काय करतात"}, fact:{en:"Pediatricians care for children's health from birth through the teenage years, tracking growth and development!"} },
              { label:{en:"Kids aren't small adults",hi:"बच्चे छोटे वयस्क नहीं हैं",mr:"मुलं लहान प्रौढ नाहीत"}, fact:{en:"Children's bodies respond differently to illness and medicine than adults — pediatrics requires completely specialized knowledge!"} },
              { label:{en:"Growth tracking",hi:"विकास ट्रैकिंग",mr:"वाढ ट्रॅकिंग"}, fact:{en:"A big part of pediatrics is tracking whether a child is growing and developing on a healthy track over time!"} }
            ]}},
            { engine: "build-match", icon: "🧸", title: "Match pediatric consideration to why it matters", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching pediatric-specific considerations to why they matter so much for kids.",
                hi: "चलो पीडियाट्रिक-खास बातों को यह मैच करने का अभ्यास करते हैं कि वे बच्चों के लिए इतनी मायने क्यों रखती हैं।",
                mr: "चला पीडियाट्रिक-विशिष्ट बाबी त्या मुलांसाठी इतक्या महत्त्वाच्या का आहेत याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "dosage", label: { en:"Medicine doses are calculated by weight, not age alone", hi:"दवा की खुराक वज़न से गणना की जाती है, सिर्फ़ उम्र से नहीं", mr:"औषधाची मात्रा वजनावरून मोजली जाते, फक्त वयावरून नाही" } },
              { id: "communication", label: { en:"Doctors need special ways to communicate with young kids", hi:"डॉक्टरों को छोटे बच्चों के साथ बात करने के खास तरीके चाहिए", mr:"डॉक्टरांना लहान मुलांशी संवाद साधण्याचे खास मार्ग लागतात" } },
              { id: "growth_charts", label: { en:"Growth charts track healthy development over time", hi:"ग्रोथ चार्ट समय के साथ स्वस्थ विकास को ट्रैक करते हैं", mr:"ग्रोथ चार्ट कालांतराने निरोगी विकास ट्रॅक करतात" } }
            ], chips: ["dosage","communication","growth_charts"], facts: {
              dosage:"That's why weight-based dosing matters so much in pediatrics!",
              communication:"That's why pediatricians develop special communication skills for young patients!",
              growth_charts:"That's why growth charts are such an important pediatric tool!"
            }}},
            { type: "Quiz", icon: "📝", title: "Pediatrics quiz",
              desc: { en:"A real quiz on pediatrics as a specialty and what makes treating children different.", hi:"पीडियाट्रिक्स एक स्पेशलिटी के रूप में और बच्चों का इलाज करना अलग क्या बनाता है, इस पर एक असली क्विज़।", mr:"पीडियाट्रिक्स एक खासियत म्हणून आणि मुलांवर उपचार करणं वेगळं काय बनवतं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about pediatrics, does working specifically with children and their unique needs sound like something you'd enjoy? Why or why not?", hi:"पीडियाट्रिक्स के बारे में सीखने के बाद, क्या विशेष रूप से बच्चों और उनकी अनोखी ज़रूरतों के साथ काम करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"पीडियाट्रिक्सबद्दल शिकल्यानंतर, विशेषतः मुलांसोबत आणि त्यांच्या अनोख्या गरजांसोबत काम करणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Pediatrics Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced pediatrics fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस पीडियाट्रिक्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत पीडियाट्रिक्स तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Sub-specialties within pediatrics?",hi:"पीडियाट्रिक्स के भीतर उप-विशेषज्ञताएँ?",mr:"पीडियाट्रिक्समधील उप-खासियती?"}, back:{en:"Pediatrics has sub-specialties too — like pediatric cardiology or pediatric neurology, focused only on kids! 🧩",hi:"पीडियाट्रिक्स की भी उप-विशेषज्ञताएँ हैं — जैसे पीडियाट्रिक कार्डियोलॉजी या पीडियाट्रिक न्यूरोलॉजी, केवल बच्चों पर केंद्रित! 🧩",mr:"पीडियाट्रिक्सच्याही उप-खासियती आहेत — जसं पीडियाट्रिक कार्डिओलॉजी किंवा पीडियाट्रिक न्यूरोलॉजी, फक्त मुलांवर केंद्रित! 🧩"} },
              { front:{en:"Vaccines are central?",hi:"वैक्सीन केंद्रीय हैं?",mr:"लस केंद्रस्थानी आहेत?"}, back:{en:"Managing childhood vaccination schedules is one of the most important, routine parts of pediatric care! 💉",hi:"बचपन के वैक्सीनेशन शेड्यूल को प्रबंधित करना पीडियाट्रिक देखभाल के सबसे ज़रूरी, नियमित हिस्सों में से एक है! 💉",mr:"बालपणीचं लसीकरण वेळापत्रक व्यवस्थापित करणं हे पीडियाट्रिक काळजीच्या सर्वात महत्त्वाच्या, नियमित भागांपैकी एक आहे! 💉"} },
              { front:{en:"Family involvement?",hi:"परिवार की भागीदारी?",mr:"कुटुंबाचा सहभाग?"}, back:{en:"Pediatricians work closely with parents and families, not just the child patient alone! 👨‍👩‍👧",hi:"पीडियाट्रिशियन माता-पिता और परिवारों के साथ नज़दीक से काम करते हैं, सिर्फ़ बच्चे मरीज़ के साथ अकेले नहीं! 👨‍👩‍👧",mr:"पीडियाट्रिशियन पालक आणि कुटुंबांसोबत जवळून काम करतात, फक्त मूल रुग्णासोबत एकटेच नाही! 👨‍👩‍👧"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Pediatrics or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your pediatrics knowledge! Decide if each statement is true or a myth.",
                hi: "चलो पीडियाट्रिक्स के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला पीडियाट्रिक्सच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Children can simply be treated with smaller doses of the exact same adult medicine.",hi:"बच्चों का इलाज बस बिल्कुल वयस्क दवा की छोटी खुराक से किया जा सकता है।",mr:"मुलांवर फक्त तेच प्रौढ औषध कमी मात्रेत उपचार करता येतो."}, answer:false, explain:{en:"Myth! Children's bodies process medicine differently — pediatric dosing is a specialized science, not just 'smaller amounts.'",hi:"मिथक! बच्चों के शरीर दवा को अलग तरह से प्रोसेस करते हैं — पीडियाट्रिक डोज़िंग एक विशेष विज्ञान है, सिर्फ़ 'छोटी मात्रा' नहीं।",mr:"मिथक! मुलांची शरीरं औषध वेगळ्या पद्धतीने प्रोसेस करतात — पीडियाट्रिक डोसिंग हे एक विशेष शास्त्र आहे, फक्त 'कमी मात्रा' नाही."} },
              { text:{en:"Pediatricians track growth and development over time, not just treat illness.",hi:"पीडियाट्रिशियन समय के साथ विकास और वृद्धि को ट्रैक करते हैं, सिर्फ़ बीमारी का इलाज नहीं।",mr:"पीडियाट्रिशियन कालांतराने वाढ आणि विकास ट्रॅक करतात, फक्त आजारावर उपचार करत नाहीत."}, answer:true, explain:{en:"True! Growth and development tracking is a core, ongoing part of pediatric care.",hi:"सच! विकास और वृद्धि ट्रैकिंग पीडियाट्रिक देखभाल का एक मुख्य, चल रहा हिस्सा है।",mr:"खरं! वाढ आणि विकास ट्रॅकिंग हा पीडियाट्रिक काळजीचा एक मुख्य, सतत चालणारा भाग आहे."} },
              { text:{en:"Pediatricians work only with the child, never involving parents in the process.",hi:"पीडियाट्रिशियन केवल बच्चे के साथ काम करते हैं, प्रक्रिया में माता-पिता को कभी शामिल नहीं करते।",mr:"पीडियाट्रिशियन फक्त मुलासोबत काम करतात, प्रक्रियेत पालकांना कधीच सामील करत नाहीत."}, answer:false, explain:{en:"Myth! Parents and families are a core part of pediatric care, working closely with the doctor.",hi:"मिथक! माता-पिता और परिवार पीडियाट्रिक देखभाल का मुख्य हिस्सा हैं, डॉक्टर के साथ नज़दीक से काम करते हुए।",mr:"मिथक! पालक आणि कुटुंब हे पीडियाट्रिक काळजीचा मुख्य भाग आहेत, डॉक्टरांसोबत जवळून काम करत."} }
            ]}}
          ]},
          { label: "Public Health & Policy",
            bonusAssignment: {
              title: { en: "Policy Proposal", hi: "नीति प्रस्ताव", mr: "धोरण प्रस्ताव" },
              prompt: { en: "Write a short proposal for one health policy you think could help your community (like more parks, or school health checkups). Take a photo!",
                        hi: "एक स्वास्थ्य नीति के लिए एक छोटा प्रस्ताव लिखो जो तुम्हें लगता है तुम्हारे समुदाय की मदद कर सकती है (जैसे ज़्यादा पार्क, या स्कूल स्वास्थ्य जाँच)। फोटो लो!",
                        mr: "तुम्हाला वाटतं की तुमच्या समुदायाला मदत करू शकेल अशा एका आरोग्य धोरणासाठी एक छोटा प्रस्ताव लिहा (जसं जास्त उद्यानं, किंवा शाळेतील आरोग्य तपासण्या). फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🏛️", title: "Explore public health & policy", mentorVisual: "🏛️",
              mentorIntro: {
                en: "Let's meet a path that goes beyond treating patients one at a time — public health and policy, working at a systemic level.",
                hi: "चलो एक ऐसे रास्ते से मिलते हैं जो एक बार में एक मरीज़ का इलाज करने से आगे जाता है — पब्लिक हेल्थ और नीति, प्रणालीगत स्तर पर काम करते हुए।",
                mr: "चला एका मार्गाला भेटूया जो एका वेळी एका रुग्णावर उपचार करण्यापलीकडे जातो — सार्वजनिक आरोग्य आणि धोरण, प्रणालीगत पातळीवर काम करत."
              },
              data: { visual: "🏛️", hotspots: [
              { label:{en:"Systems-level thinking",hi:"सिस्टम-स्तर की सोच",mr:"यंत्रणा-पातळीवरील विचार"}, fact:{en:"Public health professionals think about entire populations, not just individual patients!"} },
              { label:{en:"Policy shapes health",hi:"नीति स्वास्थ्य को आकार देती है",mr:"धोरण आरोग्याला आकार देतं"}, fact:{en:"Government policies — like clean water laws — can have a bigger health impact than any single doctor's visit!"} },
              { label:{en:"Not always medical",hi:"हमेशा मेडिकल नहीं",mr:"नेहमी वैद्यकीय नाही"}, fact:{en:"Some people working in public health aren't doctors at all — they're researchers, economists, or policy experts!"} }
            ]}},
            { engine: "build-match", icon: "🏛️", title: "Match public health role to their focus", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching different public health roles to what they specifically focus on.",
                hi: "चलो अलग-अलग पब्लिक हेल्थ भूमिकाओं को यह मैच करने का अभ्यास करते हैं कि वे विशेष रूप से किस पर ध्यान केंद्रित करती हैं।",
                mr: "चला वेगवेगळ्या सार्वजनिक आरोग्य भूमिका त्या विशेषतः कशावर लक्ष केंद्रित करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "epidemiologist", label: { en:"Studies how diseases spread across populations", hi:"अध्ययन करता है बीमारियाँ आबादी में कैसे फैलती हैं", mr:"आजार लोकसंख्येत कसे पसरतात याचा अभ्यास करतो" } },
              { id: "policy_maker", label: { en:"Writes laws affecting community health", hi:"समुदाय के स्वास्थ्य को प्रभावित करने वाले कानून लिखता है", mr:"समुदायाच्या आरोग्यावर परिणाम करणारे कायदे लिहितो" } },
              { id: "health_educator", label: { en:"Teaches communities about healthy habits", hi:"समुदायों को स्वस्थ आदतों के बारे में सिखाता है", mr:"समुदायांना निरोगी सवयींबद्दल शिकवतो" } }
            ], chips: ["epidemiologist","policy_maker","health_educator"], facts: {
              epidemiologist:"That's an epidemiologist — tracking disease patterns across whole populations!",
              policy_maker:"That's a health policy maker — shaping laws that affect everyone!",
              health_educator:"That's a health educator — spreading healthy knowledge widely!"
            }}},
            { type: "Quiz", icon: "📝", title: "Public health & policy quiz",
              desc: { en:"A real quiz on public health and policy roles that work at a population level.", hi:"आबादी के स्तर पर काम करने वाली पब्लिक हेल्थ और नीति भूमिकाओं पर एक असली क्विज़।", mr:"लोकसंख्येच्या पातळीवर काम करणाऱ्या सार्वजनिक आरोग्य आणि धोरण भूमिकांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about public health and policy, does working on health at a whole-community or systems level sound like something you'd enjoy? Why or why not?", hi:"पब्लिक हेल्थ और नीति के बारे में सीखने के बाद, क्या पूरे समुदाय या सिस्टम स्तर पर स्वास्थ्य पर काम करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"सार्वजनिक आरोग्य आणि धोरणाबद्दल शिकल्यानंतर, संपूर्ण समुदाय किंवा यंत्रणा पातळीवर आरोग्यावर काम करणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Public Health Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced public health fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस पब्लिक हेल्थ तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत सार्वजनिक आरोग्य तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Clean water's impact?",hi:"साफ़ पानी का असर?",mr:"स्वच्छ पाण्याचा परिणाम?"}, back:{en:"Clean water policies have saved more lives throughout history than almost any single medical treatment! 💧",hi:"साफ़ पानी की नीतियों ने इतिहास में लगभग किसी भी एक मेडिकल इलाज से ज़्यादा जानें बचाई हैं! 💧",mr:"स्वच्छ पाणी धोरणांनी इतिहासात जवळजवळ कोणत्याही एका वैद्यकीय उपचारापेक्षा जास्त जीव वाचवले आहेत! 💧"} },
              { front:{en:"Diverse career paths?",hi:"विविध करियर रास्ते?",mr:"वैविध्यपूर्ण करिअर मार्ग?"}, back:{en:"Public health careers include data scientists, economists, and communicators — not just medical professionals! 🌐",hi:"पब्लिक हेल्थ करियर में डेटा साइंटिस्ट, अर्थशास्त्री, और संचारक शामिल हैं — सिर्फ़ मेडिकल पेशेवर नहीं! 🌐",mr:"सार्वजनिक आरोग्य करिअरमध्ये डेटा शास्त्रज्ञ, अर्थतज्ज्ञ, आणि संवादक यांचा समावेश आहे — फक्त वैद्यकीय व्यावसायिक नाही! 🌐"} },
              { front:{en:"Global organizations?",hi:"वैश्विक संगठन?",mr:"जागतिक संघटना?"}, back:{en:"Organizations like the WHO work on public health at a global scale, coordinating efforts across many countries! 🌍",hi:"डब्ल्यूएचओ जैसे संगठन वैश्विक स्तर पर पब्लिक हेल्थ पर काम करते हैं, कई देशों में प्रयासों का समन्वय करते हुए! 🌍",mr:"डब्ल्यूएचओसारख्या संघटना जागतिक स्तरावर सार्वजनिक आरोग्यावर काम करतात, अनेक देशांमधील प्रयत्नांचं समन्वय करत! 🌍"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Public Health or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your public health knowledge! Decide if each statement is true or a myth.",
                hi: "चलो पब्लिक हेल्थ के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला सार्वजनिक आरोग्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Everyone working in public health is a licensed medical doctor.",hi:"पब्लिक हेल्थ में काम करने वाला हर कोई लाइसेंस प्राप्त मेडिकल डॉक्टर है।",mr:"सार्वजनिक आरोग्यात काम करणारा प्रत्येकजण परवानाधारक वैद्यकीय डॉक्टर आहे."}, answer:false, explain:{en:"Myth! Public health includes many non-doctor roles, like researchers, economists, and educators.",hi:"मिथक! पब्लिक हेल्थ में कई गैर-डॉक्टर भूमिकाएँ शामिल हैं, जैसे शोधकर्ता, अर्थशास्त्री, और शिक्षक।",mr:"मिथक! सार्वजनिक आरोग्यात अनेक गैर-डॉक्टर भूमिकांचा समावेश आहे, जसं संशोधक, अर्थतज्ज्ञ, आणि शिक्षक."} },
              { text:{en:"Policies like clean water laws can have a huge impact on public health.",hi:"साफ़ पानी के कानून जैसी नीतियाँ पब्लिक हेल्थ पर बहुत बड़ा असर डाल सकती हैं।",mr:"स्वच्छ पाणी कायद्यासारखी धोरणं सार्वजनिक आरोग्यावर मोठा परिणाम करू शकतात."}, answer:true, explain:{en:"True! Policy-level changes have historically saved enormous numbers of lives.",hi:"सच! नीति-स्तर के बदलावों ने ऐतिहासिक रूप से बहुत बड़ी संख्या में जानें बचाई हैं।",mr:"खरं! धोरण-पातळीवरील बदलांनी ऐतिहासिकदृष्ट्या प्रचंड संख्येने जीव वाचवले आहेत."} },
              { text:{en:"Public health work only happens within one single country at a time.",hi:"पब्लिक हेल्थ का काम एक बार में केवल एक अकेले देश के भीतर होता है।",mr:"सार्वजनिक आरोग्याचं काम एका वेळी फक्त एका देशातच होतं."}, answer:false, explain:{en:"Myth! Organizations like the WHO coordinate public health efforts globally, across many countries.",hi:"मिथक! डब्ल्यूएचओ जैसे संगठन कई देशों में वैश्विक रूप से पब्लिक हेल्थ प्रयासों का समन्वय करते हैं।",mr:"मिथक! डब्ल्यूएचओसारख्या संघटना अनेक देशांमध्ये जागतिक स्तरावर सार्वजनिक आरोग्य प्रयत्नांचं समन्वय करतात."} }
            ]}}
          ]},
          { label: "Radiology",
            bonusAssignment: {
              title: { en: "Radiologist for a Day", hi: "एक दिन के लिए रेडियोलॉजिस्ट", mr: "एक दिवसाचा रेडिओलॉजिस्ट" },
              prompt: { en: "Research the difference between an X-ray, CT scan, and MRI, and write 3-4 sentences. Take a photo of your notes!",
                        hi: "एक्स-रे, सीटी स्कैन, और एमआरआई के बीच अंतर पर रिसर्च करो और 3-4 वाक्य लिखो। अपने नोट्स की फोटो लो!",
                        mr: "एक्स-रे, सीटी स्कॅन, आणि एमआरआयमधील फरकावर संशोधन करा आणि 3-4 वाक्यं लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🩻", title: "Explore radiology", mentorVisual: "🩻",
              mentorIntro: {
                en: "Let's meet radiology — the specialty focused entirely on medical imaging, seeing inside the body without surgery.",
                hi: "चलो रेडियोलॉजी से मिलते हैं — पूरी तरह मेडिकल इमेजिंग पर केंद्रित स्पेशलिटी, बिना सर्जरी के शरीर के अंदर देखना।",
                mr: "चला रेडिओलॉजीला भेटूया — पूर्णपणे वैद्यकीय इमेजिंगवर केंद्रित खासियत, शस्त्रक्रियेशिवाय शरीराच्या आत बघणं."
              },
              data: { visual: "🩻", animation: "xray", hotspots: [
              { label:{en:"Multiple imaging types",hi:"कई इमेजिंग प्रकार",mr:"अनेक इमेजिंग प्रकार"}, fact:{en:"Radiologists work with X-rays, CT scans, MRIs, and ultrasounds — each showing something a bit different!"} },
              { label:{en:"Diagnostic detective work",hi:"निदान जासूसी काम",mr:"निदान गुप्तहेर काम"}, fact:{en:"Radiologists carefully examine images to catch things other doctors might miss — real precision matters!"} },
              { label:{en:"Interventional radiology",hi:"इंटरवेंशनल रेडियोलॉजी",mr:"इंटरव्हेन्शनल रेडिओलॉजी"}, fact:{en:"Some radiologists even perform minor procedures guided by imaging, blending diagnosis and treatment!"} }
            ]}},
            { engine: "build-match", icon: "🩻", title: "Match imaging type to best use", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching different imaging types to what they're typically best used for.",
                hi: "चलो अलग-अलग इमेजिंग प्रकारों को यह मैच करने का अभ्यास करते हैं कि वे आमतौर पर किसके लिए सबसे अच्छे इस्तेमाल होते हैं।",
                mr: "चला वेगवेगळे इमेजिंग प्रकार ते सहसा कशासाठी सर्वोत्तम वापरले जातात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "xray", label: { en:"Quick look at bones for a possible fracture", hi:"संभावित फ्रैक्चर के लिए हड्डियों पर त्वरित नज़र", mr:"शक्य फ्रॅक्चरसाठी हाडांवर पटकन नजर" } },
              { id: "mri", label: { en:"Detailed look at soft tissue like the brain", hi:"दिमाग़ जैसे नरम ऊतक पर विस्तृत नज़र", mr:"मेंदूसारख्या मऊ ऊतीवर तपशीलवार नजर" } },
              { id: "ultrasound", label: { en:"Safe imaging often used during pregnancy", hi:"गर्भावस्था के दौरान अक्सर इस्तेमाल होने वाली सुरक्षित इमेजिंग", mr:"गरोदरपणात अनेकदा वापरली जाणारी सुरक्षित इमेजिंग" } }
            ], chips: ["xray","mri","ultrasound"], facts: {
              xray:"That's an X-ray — quick and great for bones!",
              mri:"That's an MRI — detailed images of soft tissue like the brain!",
              ultrasound:"That's an ultrasound — safe imaging using sound waves!"
            }}},
            { type: "Quiz", icon: "📝", title: "Radiology quiz",
              desc: { en:"A real quiz on radiology as a specialty and different imaging types.", hi:"रेडियोलॉजी एक स्पेशलिटी के रूप में और अलग-अलग इमेजिंग प्रकारों पर एक असली क्विज़।", mr:"रेडिओलॉजी एक खासियत म्हणून आणि वेगवेगळ्या इमेजिंग प्रकारांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about radiology, does examining detailed images to solve medical puzzles sound like something you'd enjoy? Why or why not?", hi:"रेडियोलॉजी के बारे में सीखने के बाद, क्या मेडिकल पहेलियों को सुलझाने के लिए विस्तृत तस्वीरों की जांच करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"रेडिओलॉजीबद्दल शिकल्यानंतर, वैद्यकीय कोडी सोडवण्यासाठी तपशीलवार प्रतिमा तपासणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Radiology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced radiology fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस रेडियोलॉजी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत रेडिओलॉजी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"AI assisting radiologists?",hi:"AI रेडियोलॉजिस्ट की मदद कर रहा है?",mr:"AI रेडिओलॉजिस्टना मदत करतंय?"}, back:{en:"AI tools increasingly help radiologists spot patterns in images faster, working as a helpful assistant! 🤖",hi:"AI टूल्स तेज़ी से रेडियोलॉजिस्ट को तस्वीरों में पैटर्न तेज़ी से पहचानने में मदद कर रहे हैं, एक मददगार सहायक के रूप में काम करते हुए! 🤖",mr:"AI साधनं वाढत्या प्रमाणात रेडिओलॉजिस्टना प्रतिमांमधील नमुने वेगाने ओळखण्यास मदत करत आहेत, एक उपयुक्त सहाय्यक म्हणून काम करत! 🤖"} },
              { front:{en:"No radiation in some scans?",hi:"कुछ स्कैन में विकिरण नहीं?",mr:"काही स्कॅनमध्ये किरणोत्सर्ग नाही?"}, back:{en:"MRIs and ultrasounds don't use radiation at all — only X-rays and CT scans do! ✨",hi:"एमआरआई और अल्ट्रासाउंड बिल्कुल विकिरण का इस्तेमाल नहीं करते — केवल एक्स-रे और सीटी स्कैन करते हैं! ✨",mr:"एमआरआय आणि अल्ट्रासाउंड अजिबात किरणोत्सर्ग वापरत नाहीत — फक्त एक्स-रे आणि सीटी स्कॅन वापरतात! ✨"} },
              { front:{en:"3D imaging exists?",hi:"3D इमेजिंग मौजूद है?",mr:"3D इमेजिंग अस्तित्वात आहे?"}, back:{en:"Modern imaging can even create 3D models of organs, helping surgeons plan complex operations! 🧊",hi:"आधुनिक इमेजिंग अंगों के 3D मॉडल तक बना सकती है, सर्जनों को जटिल ऑपरेशन की योजना बनाने में मदद करते हुए! 🧊",mr:"आधुनिक इमेजिंग अवयवांचे 3D मॉडेलही तयार करू शकते, सर्जनना जटिल ऑपरेशन्सचं नियोजन करण्यास मदत करत! 🧊"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Radiology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your radiology knowledge! Decide if each statement is true or a myth.",
                hi: "चलो रेडियोलॉजी के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रेडिओलॉजीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"All medical imaging types use radiation.",hi:"सभी मेडिकल इमेजिंग प्रकार विकिरण का इस्तेमाल करते हैं।",mr:"सर्व वैद्यकीय इमेजिंग प्रकार किरणोत्सर्ग वापरतात."}, answer:false, explain:{en:"Myth! MRIs and ultrasounds don't use radiation at all — only some imaging types like X-rays and CT scans do.",hi:"मिथक! एमआरआई और अल्ट्रासाउंड बिल्कुल विकिरण का इस्तेमाल नहीं करते — केवल एक्स-रे और सीटी स्कैन जैसे कुछ इमेजिंग प्रकार करते हैं।",mr:"मिथक! एमआरआय आणि अल्ट्रासाउंड अजिबात किरणोत्सर्ग वापरत नाहीत — फक्त एक्स-रे आणि सीटी स्कॅनसारखे काही इमेजिंग प्रकार वापरतात."} },
              { text:{en:"Some radiologists perform minor procedures guided by imaging, not just diagnosis.",hi:"कुछ रेडियोलॉजिस्ट इमेजिंग द्वारा निर्देशित छोटी प्रक्रियाएँ करते हैं, सिर्फ़ निदान नहीं।",mr:"काही रेडिओलॉजिस्ट इमेजिंगद्वारे मार्गदर्शित छोट्या प्रक्रिया करतात, फक्त निदान नाही."}, answer:true, explain:{en:"True! This is called interventional radiology — blending diagnosis with treatment.",hi:"सच! इसे इंटरवेंशनल रेडियोलॉजी कहते हैं — निदान को इलाज के साथ मिलाना।",mr:"खरं! याला इंटरव्हेन्शनल रेडिओलॉजी म्हणतात — निदान आणि उपचार यांचं मिश्रण."} },
              { text:{en:"MRI and X-ray are exactly the same type of imaging.",hi:"एमआरआई और एक्स-रे बिल्कुल एक ही तरह की इमेजिंग हैं।",mr:"एमआरआय आणि एक्स-रे अगदी एकाच प्रकारची इमेजिंग आहे."}, answer:false, explain:{en:"Myth! MRI and X-ray use completely different technology and are best for different purposes.",hi:"मिथक! एमआरआई और एक्स-रे बिल्कुल अलग तकनीक इस्तेमाल करते हैं और अलग-अलग उद्देश्यों के लिए सबसे अच्छे हैं।",mr:"मिथक! एमआरआय आणि एक्स-रे पूर्णपणे वेगळं तंत्रज्ञान वापरतात आणि वेगवेगळ्या उद्देशांसाठी सर्वोत्तम आहेत."} }
            ]}}
          ]},
          { label: "Psychiatry",
            bonusAssignment: {
              title: { en: "Psychiatrist for a Day", hi: "एक दिन के लिए साइकियाट्रिस्ट", mr: "एक दिवसाचा सायकियाट्रिस्ट" },
              prompt: { en: "Research the difference between a psychiatrist and a psychologist, and write 3-4 sentences. Take a photo of your notes!",
                        hi: "साइकियाट्रिस्ट और साइकोलॉजिस्ट के बीच अंतर पर रिसर्च करो और 3-4 वाक्य लिखो। अपने नोट्स की फोटो लो!",
                        mr: "सायकियाट्रिस्ट आणि सायकॉलॉजिस्टमधील फरकावर संशोधन करा आणि 3-4 वाक्यं लिहा. तुमच्या नोंदींचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🧩", title: "Explore psychiatry", mentorVisual: "🧩",
              mentorIntro: {
                en: "Let's meet psychiatry — a medical specialty focused on mental health, diagnosis, and treatment.",
                hi: "चलो साइकियाट्री से मिलते हैं — मानसिक स्वास्थ्य, निदान, और इलाज पर केंद्रित एक मेडिकल स्पेशलिटी।",
                mr: "चला सायकियाट्रीला भेटूया — मानसिक आरोग्य, निदान, आणि उपचारावर केंद्रित एक वैद्यकीय खासियत."
              },
              data: { visual: "🧩", hotspots: [
              { label:{en:"A medical specialty",hi:"एक मेडिकल स्पेशलिटी",mr:"एक वैद्यकीय खासियत"}, fact:{en:"Psychiatrists are medical doctors who specialize in diagnosing and treating mental health conditions!"} },
              { label:{en:"Psychiatrist vs. psychologist",hi:"साइकियाट्रिस्ट बनाम साइकोलॉजिस्ट",mr:"सायकियाट्रिस्ट विरुद्ध सायकॉलॉजिस्ट"}, fact:{en:"Psychiatrists are medical doctors who can prescribe medicine, while psychologists usually focus on talk therapy!"} },
              { label:{en:"Team approach",hi:"टीम दृष्टिकोण",mr:"संघ दृष्टिकोन"}, fact:{en:"Psychiatrists often work as part of a team with psychologists and counselors for the best patient care!"} }
            ]}},
            { engine: "build-match", icon: "🧩", title: "Match mental health role to their focus", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching different mental health roles to what they specifically do.",
                hi: "चलो अलग-अलग मानसिक स्वास्थ्य भूमिकाओं को यह मैच करने का अभ्यास करते हैं कि वे विशेष रूप से क्या करती हैं।",
                mr: "चला वेगवेगळ्या मानसिक आरोग्य भूमिका त्या विशेषतः काय करतात याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "psychiatrist", label: { en:"Medical doctor who can prescribe medicine", hi:"मेडिकल डॉक्टर जो दवा लिख सकता है", mr:"वैद्यकीय डॉक्टर जो औषध लिहू शकतो" } },
              { id: "psychologist", label: { en:"Focuses mainly on talk therapy", hi:"मुख्य रूप से टॉक थेरेपी पर ध्यान केंद्रित करता है", mr:"मुख्यतः टॉक थेरपीवर लक्ष केंद्रित करतो" } },
              { id: "counselor", label: { en:"Provides guidance and support conversations", hi:"मार्गदर्शन और सहायक बातचीत प्रदान करता है", mr:"मार्गदर्शन आणि सहाय्यक संभाषणं देतो" } }
            ], chips: ["psychiatrist","psychologist","counselor"], facts: {
              psychiatrist:"That's a psychiatrist — a medical doctor for mental health!",
              psychologist:"That's a psychologist — focused on therapy, not medicine!",
              counselor:"That's a counselor — providing guidance and support!"
            }}},
            { type: "Quiz", icon: "📝", title: "Psychiatry quiz",
              desc: { en:"A real quiz on psychiatry as a medical specialty and related mental health roles.", hi:"साइकियाट्री एक मेडिकल स्पेशलिटी के रूप में और संबंधित मानसिक स्वास्थ्य भूमिकाओं पर एक असली क्विज़।", mr:"सायकियाट्री एक वैद्यकीय खासियत म्हणून आणि संबंधित मानसिक आरोग्य भूमिकांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about psychiatry, does working on mental health as a medical doctor sound like something you'd enjoy? Why or why not?", hi:"साइकियाट्री के बारे में सीखने के बाद, क्या एक मेडिकल डॉक्टर के रूप में मानसिक स्वास्थ्य पर काम करना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"सायकियाट्रीबद्दल शिकल्यानंतर, वैद्यकीय डॉक्टर म्हणून मानसिक आरोग्यावर काम करणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Psychiatry Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more thoughtful psychiatry fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा विचारशील साइकियाट्री तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक विचारशील सायकियाट्री तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Growing field?",hi:"बढ़ता हुआ क्षेत्र?",mr:"वाढतं क्षेत्र?"}, back:{en:"As mental health awareness grows worldwide, psychiatry is becoming an increasingly vital specialty! 🌱",hi:"जैसे-जैसे दुनिया भर में मानसिक स्वास्थ्य जागरूकता बढ़ती है, साइकियाट्री एक बढ़ती हुई ज़रूरी स्पेशलिटी बन रही है! 🌱",mr:"जगभरात मानसिक आरोग्य जागरूकता वाढत असताना, सायकियाट्री ही वाढत्या प्रमाणात महत्त्वाची खासियत बनत आहे! 🌱"} },
              { front:{en:"Sub-specialties exist?",hi:"उप-विशेषज्ञताएँ मौजूद हैं?",mr:"उप-खासियती अस्तित्वात आहेत?"}, back:{en:"Psychiatry has sub-specialties too — like child psychiatry, focused specifically on younger patients! 🧸",hi:"साइकियाट्री की भी उप-विशेषज्ञताएँ हैं — जैसे चाइल्ड साइकियाट्री, विशेष रूप से छोटे मरीज़ों पर केंद्रित! 🧸",mr:"सायकियाट्रीच्याही उप-खासियती आहेत — जसं चाइल्ड सायकियाट्री, विशेषतः लहान रुग्णांवर केंद्रित! 🧸"} },
              { front:{en:"Team-based care?",hi:"टीम-आधारित देखभाल?",mr:"संघ-आधारित काळजी?"}, back:{en:"The best mental health care often combines psychiatrists, psychologists, and counselors working together! 🤝",hi:"सबसे अच्छी मानसिक स्वास्थ्य देखभाल अक्सर साइकियाट्रिस्ट, साइकोलॉजिस्ट, और काउंसलर को एक साथ काम करते हुए मिलाती है! 🤝",mr:"सर्वोत्तम मानसिक आरोग्य काळजी अनेकदा सायकियाट्रिस्ट, सायकॉलॉजिस्ट, आणि समुपदेशक एकत्र काम करत एकत्र आणते! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Psychiatry or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your psychiatry knowledge! Decide if each statement is true or a myth.",
                hi: "चलो साइकियाट्री के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला सायकियाट्रीच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Psychiatrists and psychologists are exactly the same type of professional.",hi:"साइकियाट्रिस्ट और साइकोलॉजिस्ट बिल्कुल एक ही तरह के पेशेवर हैं।",mr:"सायकियाट्रिस्ट आणि सायकॉलॉजिस्ट अगदी एकाच प्रकारचे व्यावसायिक आहेत."}, answer:false, explain:{en:"Myth! Psychiatrists are medical doctors who can prescribe medicine, while psychologists typically focus on therapy.",hi:"मिथक! साइकियाट्रिस्ट मेडिकल डॉक्टर हैं जो दवा लिख सकते हैं, जबकि साइकोलॉजिस्ट आमतौर पर थेरेपी पर ध्यान केंद्रित करते हैं।",mr:"मिथक! सायकियाट्रिस्ट वैद्यकीय डॉक्टर आहेत जे औषध लिहू शकतात, तर सायकॉलॉजिस्ट सहसा थेरपीवर लक्ष केंद्रित करतात."} },
              { text:{en:"Psychiatry has sub-specialties, like child psychiatry.",hi:"साइकियाट्री की उप-विशेषज्ञताएँ हैं, जैसे चाइल्ड साइकियाट्री।",mr:"सायकियाट्रीच्या उप-खासियती आहेत, जसं चाइल्ड सायकियाट्री."}, answer:true, explain:{en:"True! Like many medical specialties, psychiatry has focused sub-areas.",hi:"सच! कई मेडिकल स्पेशलिटी की तरह, साइकियाट्री की भी केंद्रित उप-क्षेत्र हैं।",mr:"खरं! अनेक वैद्यकीय खासियतींसारखी, सायकियाट्रीच्याही केंद्रित उप-क्षेत्रं आहेत."} },
              { text:{en:"Mental health care is always provided by just one professional working alone.",hi:"मानसिक स्वास्थ्य देखभाल हमेशा अकेले काम करने वाले एक पेशेवर द्वारा प्रदान की जाती है।",mr:"मानसिक आरोग्य काळजी नेहमी एकट्याने काम करणाऱ्या एका व्यावसायिकाद्वारे दिली जाते."}, answer:false, explain:{en:"Myth! The best mental health care often involves a team of different professionals working together.",hi:"मिथक! सबसे अच्छी मानसिक स्वास्थ्य देखभाल में अक्सर अलग-अलग पेशेवरों की एक टीम एक साथ काम करती है।",mr:"मिथक! सर्वोत्तम मानसिक आरोग्य काळजीमध्ये अनेकदा वेगवेगळ्या व्यावसायिकांची टीम एकत्र काम करते."} }
            ]}}
          ]},
          { label: "Rural & Community Health",
            bonusAssignment: {
              title: { en: "Community Health Challenge", hi: "सामुदायिक स्वास्थ्य चुनौती", mr: "सामुदायिक आरोग्य आव्हान" },
              prompt: { en: "Research one healthcare challenge faced in rural or underserved areas, and write 3-4 sentences on how doctors help. Take a photo!",
                        hi: "ग्रामीण या कम सेवा वाले क्षेत्रों में सामने आने वाली एक स्वास्थ्य देखभाल चुनौती पर रिसर्च करो और लिखो डॉक्टर कैसे मदद करते हैं, 3-4 वाक्यों में। फोटो लो!",
                        mr: "ग्रामीण किंवा कमी सेवा असलेल्या भागात येणाऱ्या एका आरोग्यसेवा आव्हानावर संशोधन करा आणि डॉक्टर कशी मदत करतात याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🌾", title: "Explore rural & community health", mentorVisual: "🌾",
              mentorIntro: {
                en: "Let's meet a path that focuses on healthcare where it's often needed most — rural and underserved communities.",
                hi: "चलो एक ऐसे रास्ते से मिलते हैं जो स्वास्थ्य देखभाल पर केंद्रित है जहाँ इसकी अक्सर सबसे ज़्यादा ज़रूरत होती है — ग्रामीण और कम सेवा वाले समुदाय।",
                mr: "चला अशा मार्गाला भेटूया जो आरोग्यसेवेवर केंद्रित आहे जिथे तिची अनेकदा सर्वात जास्त गरज असते — ग्रामीण आणि कमी सेवा असलेले समुदाय."
              },
              data: { visual: "🌾", hotspots: [
              { label:{en:"Access challenges",hi:"पहुँच की चुनौतियाँ",mr:"पोहोच आव्हानं"}, fact:{en:"Many rural areas have far fewer doctors per person than cities — access to care is a real challenge!"} },
              { label:{en:"Generalist skills",hi:"जनरलिस्ट कौशल",mr:"जनरलिस्ट कौशल्य"}, fact:{en:"Rural doctors often need broad, generalist skills, since specialists may not be nearby!"} },
              { label:{en:"Telemedicine",hi:"टेलीमेडिसिन",mr:"टेलिमेडिसिन"}, fact:{en:"Technology like video calls is increasingly helping connect rural patients to specialists far away!"} }
            ]}},
            { engine: "build-match", icon: "🌾", title: "Match rural health challenge to a possible solution", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching real rural healthcare challenges to solutions that genuinely help.",
                hi: "चलो असली ग्रामीण स्वास्थ्य देखभाल चुनौतियों को उन समाधानों से मैच करने का अभ्यास करते हैं जो वाकई मदद करते हैं।",
                mr: "चला खऱ्या ग्रामीण आरोग्यसेवा आव्हानं ती खरंच मदत करणाऱ्या उपायांशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "far_distance", label: { en:"Nearest hospital is very far away", hi:"सबसे नज़दीकी अस्पताल बहुत दूर है", mr:"जवळचं रुग्णालय खूप दूर आहे" } },
              { id: "few_specialists", label: { en:"No specialist available nearby", hi:"आस-पास कोई विशेषज्ञ उपलब्ध नहीं", mr:"जवळपास कोणीही तज्ज्ञ उपलब्ध नाही" } },
              { id: "limited_awareness", label: { en:"Limited health awareness in the community", hi:"समुदाय में सीमित स्वास्थ्य जागरूकता", mr:"समुदायात मर्यादित आरोग्य जागरूकता" } }
            ], chips: ["far_distance","few_specialists","limited_awareness"], facts: {
              far_distance:"Mobile health clinics can help bring care closer to distant communities!",
              few_specialists:"Telemedicine can connect patients to specialists far away!",
              limited_awareness:"Community health education programs can genuinely help here!"
            }}},
            { type: "Quiz", icon: "📝", title: "Rural & community health quiz",
              desc: { en:"A real quiz on healthcare challenges and solutions in rural and underserved communities.", hi:"ग्रामीण और कम सेवा वाले समुदायों में स्वास्थ्य देखभाल चुनौतियों और समाधानों पर एक असली क्विज़।", mr:"ग्रामीण आणि कमी सेवा असलेल्या समुदायांमधील आरोग्यसेवा आव्हानं आणि उपायांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Does this path interest you?",
              desc: { en:"After learning about rural and community health, does bringing healthcare to underserved communities sound like something you'd enjoy? Why or why not?", hi:"ग्रामीण और सामुदायिक स्वास्थ्य के बारे में सीखने के बाद, क्या कम सेवा वाले समुदायों तक स्वास्थ्य देखभाल पहुँचाना तुम्हें पसंद आने वाली चीज़ लगती है? क्यों या क्यों नहीं?", mr:"ग्रामीण आणि सामुदायिक आरोग्याबद्दल शिकल्यानंतर, कमी सेवा असलेल्या समुदायांपर्यंत आरोग्यसेवा पोहोचवणं तुम्हाला आवडेल असं वाटतं का? का किंवा का नाही?" } },
            { engine: "flip-cards", icon: "🃏", title: "Rural Health Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced rural health fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस ग्रामीण स्वास्थ्य तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत ग्रामीण आरोग्य तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Community health workers?",hi:"सामुदायिक स्वास्थ्य कार्यकर्ता?",mr:"सामुदायिक आरोग्य कर्मचारी?"}, back:{en:"Community health workers, often trained locally, provide essential first-line care in many underserved areas! 👥",hi:"सामुदायिक स्वास्थ्य कार्यकर्ता, अक्सर स्थानीय रूप से प्रशिक्षित, कई कम सेवा वाले क्षेत्रों में ज़रूरी पहली-पंक्ति की देखभाल प्रदान करते हैं! 👥",mr:"सामुदायिक आरोग्य कर्मचारी, अनेकदा स्थानिक पातळीवर प्रशिक्षित, अनेक कमी सेवा असलेल्या भागांत आवश्यक पहिल्या-फळीची काळजी देतात! 👥"} },
              { front:{en:"Mobile clinics travel?",hi:"मोबाइल क्लीनिक यात्रा करते हैं?",mr:"मोबाइल क्लिनिक प्रवास करतात?"}, back:{en:"Mobile health clinics — vans equipped with medical tools — travel to reach remote communities directly! 🚐",hi:"मोबाइल हेल्थ क्लीनिक — मेडिकल टूल्स से लैस वैन — सीधे दूरदराज़ समुदायों तक पहुँचने के लिए यात्रा करते हैं! 🚐",mr:"मोबाइल हेल्थ क्लिनिक — वैद्यकीय साधनांनी सुसज्ज व्हॅन — थेट दूरच्या समुदायांपर्यंत पोहोचण्यासाठी प्रवास करतात! 🚐"} },
              { front:{en:"Government incentives?",hi:"सरकारी प्रोत्साहन?",mr:"सरकारी प्रोत्साहन?"}, back:{en:"Some governments offer incentives to encourage doctors to work in rural areas, where they're needed most! 🎁",hi:"कुछ सरकारें डॉक्टरों को ग्रामीण क्षेत्रों में काम करने के लिए प्रोत्साहित करने के लिए प्रोत्साहन देती हैं, जहाँ उनकी सबसे ज़्यादा ज़रूरत है! 🎁",mr:"काही सरकारं डॉक्टरांना ग्रामीण भागात काम करण्यास प्रोत्साहित करण्यासाठी प्रोत्साहन देतात, जिथे त्यांची सर्वात जास्त गरज आहे! 🎁"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Rural Health or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your rural health knowledge! Decide if each statement is true or a myth.",
                hi: "चलो ग्रामीण स्वास्थ्य के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला ग्रामीण आरोग्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Rural areas always have exactly the same number of doctors per person as cities.",hi:"ग्रामीण क्षेत्रों में हमेशा शहरों जितने ही डॉक्टर प्रति व्यक्ति होते हैं।",mr:"ग्रामीण भागांमध्ये नेहमी शहरांइतकेच डॉक्टर प्रति व्यक्ती असतात."}, answer:false, explain:{en:"Myth! Rural areas typically have far fewer doctors per person than cities — a real access challenge.",hi:"मिथक! ग्रामीण क्षेत्रों में आमतौर पर शहरों की तुलना में प्रति व्यक्ति बहुत कम डॉक्टर होते हैं — एक असली पहुँच चुनौती।",mr:"मिथक! ग्रामीण भागांमध्ये सहसा शहरांपेक्षा प्रति व्यक्ती खूप कमी डॉक्टर असतात — एक खरं पोहोच आव्हान."} },
              { text:{en:"Telemedicine can help connect rural patients to specialists far away.",hi:"टेलीमेडिसिन ग्रामीण मरीज़ों को दूर के विशेषज्ञों से जोड़ने में मदद कर सकता है।",mr:"टेलिमेडिसिन ग्रामीण रुग्णांना दूरच्या तज्ज्ञांशी जोडण्यास मदत करू शकते."}, answer:true, explain:{en:"True! Telemedicine is a genuinely valuable tool for improving rural access to specialist care.",hi:"सच! टेलीमेडिसिन ग्रामीण विशेषज्ञ देखभाल तक पहुँच सुधारने के लिए वाकई मूल्यवान उपकरण है।",mr:"खरं! टेलिमेडिसिन ग्रामीण तज्ज्ञ काळजीपर्यंत पोहोच सुधारण्यासाठी खरोखर मौल्यवान साधन आहे."} },
              { text:{en:"Rural doctors typically need only very narrow, specialized skills.",hi:"ग्रामीण डॉक्टरों को आमतौर पर केवल बहुत संकीर्ण, विशेष कौशल चाहिए।",mr:"ग्रामीण डॉक्टरांना सहसा फक्त खूप संकुचित, विशेष कौशल्यं लागतात."}, answer:false, explain:{en:"Myth! Rural doctors often need broad, generalist skills, since specialists may not be nearby.",hi:"मिथक! ग्रामीण डॉक्टरों को अक्सर व्यापक, जनरलिस्ट कौशल चाहिए, क्योंकि विशेषज्ञ आस-पास नहीं हो सकते।",mr:"मिथक! ग्रामीण डॉक्टरांना अनेकदा व्यापक, जनरलिस्ट कौशल्यं लागतात, कारण तज्ज्ञ जवळपास नसू शकतात."} }
            ]}}
          ]},
          { label: "Research vs. Clinical Practice",
            bonusAssignment: {
              title: { en: "Research or Clinical Reflection", hi: "रिसर्च या क्लिनिकल विचार", mr: "संशोधन किंवा क्लिनिकल विचार" },
              prompt: { en: "Write 3-4 sentences on whether you'd rather do medical research or treat patients directly, and why. Take a photo!",
                        hi: "3-4 वाक्य लिखो कि तुम मेडिकल रिसर्च करना पसंद करोगे या सीधे मरीज़ों का इलाज करना, और क्यों। फोटो लो!",
                        mr: "तुम्ही वैद्यकीय संशोधन करणं पसंत कराल की थेट रुग्णांवर उपचार करणं, आणि का, याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "⚖️", title: "Explore research vs. clinical practice", mentorVisual: "⚖️",
              mentorIntro: {
                en: "Not every medical path involves treating patients directly! Let's explore the difference between research and clinical practice.",
                hi: "हर मेडिकल रास्ता सीधे मरीज़ों का इलाज करना शामिल नहीं करता! चलो रिसर्च और क्लिनिकल प्रैक्टिस के बीच अंतर एक्सप्लोर करते हैं।",
                mr: "प्रत्येक वैद्यकीय मार्ग थेट रुग्णांवर उपचार करण्यात समाविष्ट नसतो! चला संशोधन आणि क्लिनिकल प्रॅक्टिसमधील फरक एक्सप्लोर करूया."
              },
              data: { visual: "⚖️", hotspots: [
              { label:{en:"Clinical practice",hi:"क्लिनिकल प्रैक्टिस",mr:"क्लिनिकल प्रॅक्टिस"}, fact:{en:"Clinical doctors work directly with patients every day, applying existing medical knowledge to help them!"} },
              { label:{en:"Medical research",hi:"मेडिकल रिसर्च",mr:"वैद्यकीय संशोधन"}, fact:{en:"Medical researchers work to discover new treatments and knowledge — often in labs, not seeing patients directly!"} },
              { label:{en:"Both matter deeply",hi:"दोनों गहराई से मायने रखते हैं",mr:"दोन्ही खोलवर महत्त्वाचे आहेत"}, fact:{en:"Every treatment a clinical doctor uses today was discovered by researchers — both paths depend on each other!"} }
            ]}},
            { engine: "build-match", icon: "⚖️", title: "Match daily activity to research or clinical practice", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching daily activities to whether they'd be part of research work or clinical practice.",
                hi: "चलो दैनिक गतिविधियों को यह मैच करने का अभ्यास करते हैं कि वे रिसर्च के काम का हिस्सा होंगी या क्लिनिकल प्रैक्टिस का।",
                mr: "चला दैनंदिन क्रियाकलाप ते संशोधन कामाचा भाग असतील की क्लिनिकल प्रॅक्टिसचा याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "clinical", label: { en:"Seeing patients and diagnosing them each day", hi:"हर दिन मरीज़ों को देखना और उनका निदान करना", mr:"दररोज रुग्णांना बघणं आणि त्यांचं निदान करणं" } },
              { id: "research", label: { en:"Running lab experiments to test a new treatment", hi:"एक नए इलाज को टेस्ट करने के लिए लैब प्रयोग चलाना", mr:"नवीन उपचार तपासण्यासाठी लॅब प्रयोग करणं" } },
              { id: "both", label: { en:"Working as a doctor who also studies patient data for a research paper", hi:"एक डॉक्टर के रूप में काम करना जो रिसर्च पेपर के लिए मरीज़ डेटा का भी अध्ययन करता है", mr:"डॉक्टर म्हणून काम करणं जो संशोधन पेपरसाठी रुग्ण डेटाचाही अभ्यास करतो" } }
            ], chips: ["clinical","research","both"], facts: {
              clinical:"That's clinical practice — direct, everyday patient care!",
              research:"That's medical research — discovering new knowledge!",
              both:"That's a blended path — many doctors do both throughout their careers!"
            }}},
            { type: "Quiz", icon: "📝", title: "Research vs. clinical practice quiz",
              desc: { en:"A real quiz on the differences between medical research and clinical practice.", hi:"मेडिकल रिसर्च और क्लिनिकल प्रैक्टिस के बीच अंतर पर एक असली क्विज़।", mr:"वैद्यकीय संशोधन आणि क्लिनिकल प्रॅक्टिसमधील फरकांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Which path calls to you?",
              desc: { en:"After learning about both paths, do you feel more drawn to treating patients directly, doing research, or maybe a mix of both? Why?", hi:"दोनों रास्तों के बारे में सीखने के बाद, क्या तुम्हें सीधे मरीज़ों का इलाज करने, रिसर्च करने, या शायद दोनों के मिश्रण की तरफ़ ज़्यादा खिंचाव महसूस होता है? क्यों?", mr:"दोन्ही मार्गांबद्दल शिकल्यानंतर, तुम्हाला थेट रुग्णांवर उपचार करण्याकडे, संशोधन करण्याकडे, किंवा कदाचित दोघांच्या मिश्रणाकडे जास्त ओढ वाटते का? का?" } },
            { engine: "flip-cards", icon: "🃏", title: "Research & Clinical Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about research and clinical practice!",
                hi: "चलो और गहराई में जाते हैं — रिसर्च और क्लिनिकल प्रैक्टिस के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — संशोधन आणि क्लिनिकल प्रॅक्टिसबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Physician-scientists exist?",hi:"फिज़िशियन-वैज्ञानिक मौजूद हैं?",mr:"फिजिशियन-शास्त्रज्ञ अस्तित्वात आहेत?"}, back:{en:"Some doctors, called physician-scientists, split their time between treating patients and running research studies! 🔬",hi:"कुछ डॉक्टर, जिन्हें फिज़िशियन-साइंटिस्ट कहा जाता है, मरीज़ों का इलाज करने और रिसर्च स्टडी चलाने के बीच अपना समय बाँटते हैं! 🔬",mr:"काही डॉक्टर, ज्यांना फिजिशियन-सायंटिस्ट म्हणतात, रुग्णांवर उपचार करणं आणि संशोधन अभ्यास चालवणं यात त्यांचा वेळ विभागतात! 🔬"} },
              { front:{en:"Clinical trials?",hi:"क्लिनिकल ट्रायल?",mr:"क्लिनिकल चाचण्या?"}, back:{en:"New medicines go through clinical trials — carefully studying real patients to test if a treatment truly works! 🧪",hi:"नई दवाएँ क्लिनिकल ट्रायल से गुज़रती हैं — असली मरीज़ों का ध्यान से अध्ययन करते हुए यह टेस्ट करना कि क्या इलाज वाकई काम करता है! 🧪",mr:"नवीन औषधं क्लिनिकल चाचण्यांमधून जातात — खऱ्या रुग्णांचा काळजीपूर्वक अभ्यास करून उपचार खरंच काम करतो का हे तपासणं! 🧪"} },
              { front:{en:"Research changes practice?",hi:"रिसर्च प्रैक्टिस को बदलती है?",mr:"संशोधन प्रॅक्टिस बदलतं?"}, back:{en:"New research findings regularly change how clinical doctors treat patients — the two paths constantly influence each other! 🔄",hi:"नई रिसर्च खोजें नियमित रूप से बदलती हैं कि क्लिनिकल डॉक्टर मरीज़ों का इलाज कैसे करते हैं — दोनों रास्ते लगातार एक दूसरे को प्रभावित करते हैं! 🔄",mr:"नवीन संशोधन निष्कर्ष नियमितपणे बदलतात की क्लिनिकल डॉक्टर रुग्णांवर कसे उपचार करतात — दोन्ही मार्ग सतत एकमेकांवर प्रभाव टाकतात! 🔄"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Research vs. Clinical or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Doctors must choose only one path forever — either research or clinical practice, never both.",hi:"डॉक्टरों को हमेशा के लिए केवल एक रास्ता चुनना होता है — या तो रिसर्च या क्लिनिकल प्रैक्टिस, कभी दोनों नहीं।",mr:"डॉक्टरांना कायमचा फक्त एकच मार्ग निवडावा लागतो — एकतर संशोधन किंवा क्लिनिकल प्रॅक्टिस, कधीच दोन्ही नाही."}, answer:false, explain:{en:"Myth! Many physician-scientists genuinely blend both research and clinical patient care throughout their careers.",hi:"मिथक! कई फिज़िशियन-साइंटिस्ट अपने करियर में वाकई रिसर्च और क्लिनिकल मरीज़ देखभाल दोनों को मिलाते हैं।",mr:"मिथक! अनेक फिजिशियन-सायंटिस्ट त्यांच्या करिअरमध्ये खरंच संशोधन आणि क्लिनिकल रुग्ण काळजी दोन्ही मिसळतात."} },
              { text:{en:"New medical treatments go through research and clinical trials before being widely used.",hi:"नए मेडिकल इलाज व्यापक रूप से इस्तेमाल होने से पहले रिसर्च और क्लिनिकल ट्रायल से गुज़रते हैं।",mr:"नवीन वैद्यकीय उपचार मोठ्या प्रमाणावर वापरण्याआधी संशोधन आणि क्लिनिकल चाचण्यांमधून जातात."}, answer:true, explain:{en:"True! Rigorous testing through trials happens before new treatments become standard practice.",hi:"सच! नए इलाज मानक प्रैक्टिस बनने से पहले ट्रायल के ज़रिए कठोर परीक्षण होता है।",mr:"खरं! नवीन उपचार मानक प्रॅक्टिस बनण्याआधी चाचण्यांद्वारे कठोर चाचणी होते."} },
              { text:{en:"Medical research has no real connection to how clinical doctors treat patients.",hi:"मेडिकल रिसर्च का क्लिनिकल डॉक्टरों के मरीज़ों का इलाज करने के तरीके से कोई असली संबंध नहीं है।",mr:"वैद्यकीय संशोधनाचा क्लिनिकल डॉक्टर रुग्णांवर कसे उपचार करतात याच्याशी काहीही खरा संबंध नाही."}, answer:false, explain:{en:"Myth! Research findings constantly and directly shape how clinical practice evolves over time.",hi:"मिथक! रिसर्च खोजें लगातार और सीधे आकार देती हैं कि क्लिनिकल प्रैक्टिस समय के साथ कैसे विकसित होती है।",mr:"मिथक! संशोधन निष्कर्ष सतत आणि थेट आकार देतात की क्लिनिकल प्रॅक्टिस कालांतराने कशी विकसित होते."} }
            ]}}
          ]},
          { label: "Capstone: My Med-Path Journey",
            bonusAssignment: {
              title: { en: "My Doctor Journey Portfolio", hi: "मेरी डॉक्टर यात्रा पोर्टफोलियो", mr: "माझा डॉक्टर प्रवास पोर्टफोलिओ" },
              prompt: { en: "Create a final page reflecting on your entire 5-year journey through Doctor & Healthcare — your favorite specialty, and what you'd like to explore more. Take a photo!",
                        hi: "डॉक्टर एंड हेल्थकेयर के ज़रिए अपनी पूरी 5-साल की यात्रा पर विचार करते हुए एक आखिरी पेज बनाओ — अपनी पसंदीदा स्पेशलिटी, और तुम आगे क्या एक्सप्लोर करना चाहोगे। फोटो लो!",
                        mr: "डॉक्टर आणि हेल्थकेअरमधून तुमच्या संपूर्ण 5-वर्षांच्या प्रवासावर विचार करणारं एक अंतिम पान तयार करा — तुमची आवडती खासियत, आणि तुम्हाला आणखी काय एक्सप्लोर करायला आवडेल. फोटो घ्या!" }
            },
            tasks: [
            { engine: "build-match", icon: "🎓", title: "Reflect on your specialty exploration", mentorVisual: "🎓",
              mentorIntro: {
                en: "This is it — your Std 10 capstone, and the end of 5 years exploring Doctor & Healthcare! Let's look back at all the specialties you've met.",
                hi: "यह है — तुम्हारा Std 10 कैपस्टोन, और डॉक्टर एंड हेल्थकेयर एक्सप्लोर करने के 5 सालों का अंत! चलो उन सभी स्पेशलिटी को याद करते हैं जिनसे तुम मिले।",
                mr: "हे आहे — तुमचं Std 10 कॅपस्टोन, आणि डॉक्टर आणि हेल्थकेअर एक्सप्लोर करण्याच्या 5 वर्षांचा शेवट! चला तुम्ही भेटलेल्या सर्व खासियतींकडे मागे वळून बघूया."
              },
              data: { noStakes: false, zones: [
              { id: "cardiology", label: { en:"Focused on the heart", hi:"दिल पर केंद्रित", mr:"हृदयावर केंद्रित" } },
              { id: "pediatrics", label: { en:"Focused entirely on children", hi:"पूरी तरह बच्चों पर केंद्रित", mr:"पूर्णपणे मुलांवर केंद्रित" } },
              { id: "public_health", label: { en:"Focused on whole communities, not one patient", hi:"एक मरीज़ नहीं, पूरे समुदायों पर केंद्रित", mr:"एक रुग्ण नाही, संपूर्ण समुदायांवर केंद्रित" } }
            ], chips: ["cardiology","pediatrics","public_health"], facts: {
              cardiology:"That's cardiology — one of the many specialties you explored this year!",
              pediatrics:"That's pediatrics — caring specifically for children!",
              public_health:"That's public health — thinking at a whole-community level!"
            }}},
            { engine: "tap-discover", icon: "🏆", title: "Celebrate 5 years of exploration", mentorVisual: "🏆",
              mentorIntro: {
                en: "From Std 6 to Std 10, you've built something real. Let's celebrate the journey.",
                hi: "Std 6 से Std 10 तक, तुमने कुछ असली बनाया है। चलो यात्रा का जश्न मनाते हैं।",
                mr: "Std 6 पासून Std 10 पर्यंत, तुम्ही काहीतरी खरं तयार केलं आहे. चला प्रवासाचा उत्सव साजरा करूया."
              },
              data: { visual: "🏆", hotspots: [
              { label:{en:"Where you started",hi:"तुमने कहाँ शुरुआत की",mr:"तुम्ही कुठे सुरुवात केली"}, fact:{en:"Back in Std 6, you started with pure curiosity — tapping to discover your own beating heart!"} },
              { label:{en:"How far you've come",hi:"तुम कितनी दूर आए",mr:"तुम्ही किती पुढे आलात"}, fact:{en:"By Std 10, you've read real vitals, sorted urgent cases, and reflected on real medical specialties!"} },
              { label:{en:"What's ahead",hi:"आगे क्या है",mr:"पुढे काय आहे"}, fact:{en:"In Std 11-12, you'll go even deeper into specialist-level thinking — real judgment calls await!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "5-year journey recap",
              desc: { en:"A comprehensive recap quiz covering key moments from your entire Std 6-10 Doctor & Healthcare journey.", hi:"तुम्हारी पूरी Std 6-10 डॉक्टर एंड हेल्थकेयर यात्रा के प्रमुख पलों को कवर करने वाला एक व्यापक रीकैप क्विज़।", mr:"तुमच्या संपूर्ण Std 6-10 डॉक्टर आणि हेल्थकेअर प्रवासातील महत्त्वाचे क्षण कव्हर करणारा एक सर्वसमावेशक रीकॅप क्विझ." } },
            { type: "Reflect", icon: "💭", title: "A message to Std 11 you",
              desc: { en:"Write a message to yourself about which specialties genuinely interested you most, and what you're curious to explore deeper next.", hi:"अपने आप को एक संदेश लिखो कि कौन सी स्पेशलिटी ने तुम्हें वाकई सबसे ज़्यादा दिलचस्पी दिलाई, और तुम आगे और गहराई में क्या एक्सप्लोर करने के लिए उत्सुक हो।", mr:"कोणत्या खासियतींनी तुम्हाला खरंच सर्वात जास्त रस दाखवला, आणि तुम्हाला पुढे आणखी खोलात काय एक्सप्लोर करायची उत्सुकता आहे, याबद्दल स्वतःला संदेश लिहा." } },
            { engine: "flip-cards", icon: "🃏", title: "5-Year Journey Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a journey! Flip each card for a fun recap of your 5 years exploring Doctor & Healthcare.",
                hi: "क्या यात्रा रही! डॉक्टर एंड हेल्थकेयर एक्सप्लोर करने के अपने 5 सालों का मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय प्रवास होता! डॉक्टर आणि हेल्थकेअर एक्सप्लोर करण्याच्या तुमच्या 5 वर्षांचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Std 6?",hi:"Std 6?",mr:"Std 6?"}, back:{en:"Pure curiosity — discovering your heart, bones, and senses for the very first time! ❤️",hi:"शुद्ध जिज्ञासा — पहली बार अपने दिल, हड्डियों, और इंद्रियों की खोज! ❤️",mr:"शुद्ध कुतूहल — पहिल्यांदाच तुमचं हृदय, हाडं, आणि इंद्रिये शोधणं! ❤️"} },
              { front:{en:"Std 8?",hi:"Std 8?",mr:"Std 8?"}, back:{en:"Real stakes began — labeling heart chambers correctly, reading real vitals! 🎯",hi:"असली दांव शुरू हुए — दिल के कक्षों को सही तरीके से लेबल करना, असली वाइटल्स पढ़ना! 🎯",mr:"खरे धोके सुरू झाले — हृदयाचे कप्पे बरोबर लेबल करणं, खरे व्हायटल्स वाचणं! 🎯"} },
              { front:{en:"Std 10?",hi:"Std 10?",mr:"Std 10?"}, back:{en:"You started connecting to real specialties — cardiology, pediatrics, psychiatry, and more! 🩺",hi:"तुमने असली स्पेशलिटी से जुड़ना शुरू किया — कार्डियोलॉजी, पीडियाट्रिक्स, साइकियाट्री, और भी बहुत कुछ! 🩺",mr:"तुम्ही खऱ्या खासियतींशी जोडायला सुरुवात केली — कार्डिओलॉजी, पीडियाट्रिक्स, सायकियाट्री, आणि बरंच काही! 🩺"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One final check-in — the biggest one yet! Let's see what stuck across all 5 years.",
                hi: "एक आखिरी जांच — अब तक की सबसे बड़ी! देखते हैं सभी 5 सालों से क्या याद रहा।",
                mr: "एक शेवटची तपासणी — आतापर्यंतची सर्वात मोठी! बघूया सर्व 5 वर्षांतून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"Every medical specialty works in complete isolation from every other one.",hi:"हर मेडिकल स्पेशलिटी हर दूसरे से पूरी तरह अलग होकर काम करती है।",mr:"प्रत्येक वैद्यकीय खासियत इतर प्रत्येकीपासून पूर्णपणे वेगळी काम करते."}, answer:false, explain:{en:"Myth! You learned this year that specialties often connect and collaborate — like public health informing clinical practice.",hi:"मिथक! तुमने इस साल सीखा कि स्पेशलिटी अक्सर जुड़ती और सहयोग करती हैं — जैसे पब्लिक हेल्थ क्लिनिकल प्रैक्टिस को सूचित करता है।",mr:"मिथक! तुम्ही या वर्षी शिकलात की खासियती अनेकदा जोडल्या जातात आणि सहकार्य करतात — जसं सार्वजनिक आरोग्य क्लिनिकल प्रॅक्टिसला माहिती देतं."} },
              { text:{en:"Reflecting on which specialties genuinely interest you is a valuable part of exploring a future in medicine.",hi:"कौन सी स्पेशलिटी तुम्हें वाकई दिलचस्प लगती हैं इस पर विचार करना, मेडिसिन में भविष्य एक्सप्लोर करने का एक मूल्यवान हिस्सा है।",mr:"कोणत्या खासियती तुम्हाला खरंच रुचकर वाटतात यावर विचार करणं, वैद्यकशास्त्रातील भविष्य एक्सप्लोर करण्याचा एक मौल्यवान भाग आहे."}, answer:true, explain:{en:"True! This kind of honest reflection is exactly what the Decision-Prep year was designed to build.",hi:"सच! इस तरह का ईमानदार विचार बिल्कुल वही है जिसे बनाने के लिए डिसीज़न-प्रेप साल डिज़ाइन किया गया था।",mr:"खरं! अशा प्रकारचा प्रामाणिक विचार हाच आहे जो तयार करण्यासाठी डिसिजन-प्रेप वर्ष डिझाइन केलं होतं."} },
              { text:{en:"This is the final year you'll ever explore Doctor & Healthcare topics.",hi:"यह आखिरी साल है जब तुम कभी डॉक्टर और स्वास्थ्य से जुड़े विषय एक्सप्लोर करोगे।",mr:"डॉक्टर आणि आरोग्य विषय एक्सप्लोर करण्याचं हे शेवटचं वर्ष आहे."}, answer:false, explain:{en:"Myth! Std 11-12 (Specialist band) goes even deeper — this is the bridge into the most advanced year yet.",hi:"मिथक! Std 11-12 (स्पेशलिस्ट बैंड) और भी गहराई में जाता है — यह अब तक के सबसे एडवांस साल में जाने का पुल है।",mr:"मिथक! Std 11-12 (स्पेशालिस्ट बँड) आणखी खोलात जातं — हा आतापर्यंतच्या सर्वात प्रगत वर्षात जाण्याचा पूल आहे."} }
            ]}}
          ]}
        ]
      },
      "11": {
        band: "Specialist",
        bandTagline: "Real judgment calls — every choice has a genuine consequence, not just right or wrong.",
        months: [
          { label: "Advanced Diagnosis",
            bonusAssignment: {
              title: { en: "Diagnostic Case Write-Up", hi: "निदान केस लेखन", mr: "निदान केस लेखन" },
              prompt: { en: "Write a short fictional patient case (symptoms + your reasoning for a likely diagnosis). Take a photo of your write-up!",
                        hi: "एक छोटा काल्पनिक मरीज़ केस लिखो (लक्षण + संभावित निदान के लिए तुम्हारा तर्क)। अपने लेखन की फोटो लो!",
                        mr: "एक छोटी काल्पनिक रुग्ण केस लिहा (लक्षणं + शक्य निदानासाठी तुमचा तर्क). तुमच्या लेखनाचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🩺", title: "Diagnose the Case", mentorVisual: "🩺",
              mentorIntro: {
                en: "This year, things get real. You'll face situations with genuine judgment calls — not just one right answer, but choices with real consequences. Let's begin your first case.",
                hi: "इस साल, चीज़ें असली हो जाती हैं। तुम असली फ़ैसलों वाली स्थितियों का सामना करोगे — सिर्फ़ एक सही जवाब नहीं, बल्कि असली नतीजों वाले विकल्प। चलो तुम्हारा पहला केस शुरू करते हैं।",
                mr: "या वर्षी, गोष्टी खऱ्या होतात. तुम्ही खऱ्या निर्णयांच्या परिस्थितीला सामोरे जाल — फक्त एक बरोबर उत्तर नाही, तर खऱ्या परिणामांचे पर्याय. चला तुमची पहिली केस सुरू करूया."
              },
              data: { steps: [
              {
                situation: { en:"A 45-year-old patient comes in complaining of chest pain that started an hour ago. They also mention feeling short of breath and a bit dizzy. What's your first move?",
                             hi:"एक 45 साल का मरीज़ सीने में दर्द की शिकायत लेकर आता है जो एक घंटे पहले शुरू हुआ। वे साँस फूलने और थोड़ा चक्कर आने का भी ज़िक्र करते हैं। तुम्हारा पहला कदम क्या है?",
                             mr:"एक 45 वर्षांचा रुग्ण छातीत दुखण्याची तक्रार घेऊन येतो जी एक तासापूर्वी सुरू झाली. ते श्वास घेण्यास त्रास आणि थोडं चक्कर येण्याचाही उल्लेख करतात. तुमची पहिली कृती काय आहे?" },
                choices: [
                  { label:{en:"Immediately check vitals and get an ECG — chest pain plus these symptoms could be cardiac", hi:"तुरंत वाइटल्स जाँचो और ईसीजी करो — सीने में दर्द के साथ ये लक्षण दिल से जुड़े हो सकते हैं", mr:"लगेच व्हायटल्स तपासा आणि ईसीजी करा — छातीतील दुखणं आणि ही लक्षणं हृदयाशी संबंधित असू शकतात"}, quality:"best",
                    outcome:{en:"Good instinct! Chest pain with breathlessness and dizziness are classic warning signs that need immediate vitals and an ECG to rule out anything cardiac.",hi:"अच्छी सोच! साँस फूलने और चक्कर के साथ सीने में दर्द क्लासिक चेतावनी संकेत हैं जिन्हें तुरंत वाइटल्स और ईसीजी की ज़रूरत है ताकि दिल से जुड़ी किसी भी चीज़ को खारिज किया जा सके।",mr:"चांगली अंतःप्रेरणा! श्वास घेण्यास त्रास आणि चक्कर येण्यासोबत छातीतील दुखणं ही ठराविक इशाऱ्याची लक्षणं आहेत ज्यांना हृदयाशी संबंधित काहीही नाकारण्यासाठी लगेच व्हायटल्स आणि ईसीजी हवं."} },
                  { label:{en:"Ask them to wait and see if the pain goes away on its own first", hi:"उन्हें इंतज़ार करने और देखने के लिए कहो कि क्या दर्द अपने आप चला जाता है", mr:"त्यांना वाट बघायला आणि दुखणं आपोआप जातं का ते बघायला सांगा"}, quality:"risky",
                    outcome:{en:"This could be risky. Chest pain with breathlessness and dizziness needs urgent evaluation — waiting could delay finding a serious problem.",hi:"यह जोखिम भरा हो सकता है। साँस फूलने और चक्कर के साथ सीने का दर्द तत्काल मूल्यांकन चाहता है — इंतज़ार करने से एक गंभीर समस्या का पता लगाने में देरी हो सकती है।",mr:"हे धोकादायक असू शकतं. श्वास घेण्यास त्रास आणि चक्करसोबत छातीतील दुखणं तातडीच्या मूल्यमापनाची गरज असते — वाट बघितल्याने गंभीर समस्या शोधण्यास उशीर होऊ शकतो."} }
                ]
              },
              {
                situation: { en:"The ECG comes back showing some irregularity, and vitals show a slightly elevated heart rate. What's your next step?",
                             hi:"ईसीजी में कुछ अनियमितता दिखती है, और वाइटल्स थोड़ी बढ़ी हुई हृदय गति दिखाते हैं। तुम्हारा अगला कदम क्या है?",
                             mr:"ईसीजीमध्ये काही अनियमितता दिसते, आणि व्हायटल्स थोडी वाढलेली हृदयगती दाखवतात. तुमची पुढची पायरी काय आहे?" },
                choices: [
                  { label:{en:"Refer immediately to a cardiologist for further specialist evaluation", hi:"आगे विशेषज्ञ मूल्यांकन के लिए तुरंत कार्डियोलॉजिस्ट के पास रेफर करो", mr:"पुढील तज्ज्ञ मूल्यमापनासाठी लगेच कार्डिओलॉजिस्टकडे रेफर करा"}, quality:"best",
                    outcome:{en:"Excellent judgment! An irregular ECG with these symptoms is exactly the kind of case that needs a cardiologist's specialist expertise — this is real interdisciplinary thinking.",hi:"बेहतरीन निर्णय! इन लक्षणों के साथ अनियमित ईसीजी बिल्कुल वैसा केस है जिसे कार्डियोलॉजिस्ट की विशेषज्ञता चाहिए — यह असली अंतःविषय सोच है।",mr:"उत्तम निर्णय! या लक्षणांसह अनियमित ईसीजी अगदी अशीच केस आहे जिला कार्डिओलॉजिस्टच्या तज्ज्ञतेची गरज आहे — हा खरा आंतरविद्याशाखीय विचार आहे."} },
                  { label:{en:"Just prescribe rest and pain medicine without further tests", hi:"बिना और टेस्ट के बस आराम और दर्द की दवा लिखो", mr:"आणखी चाचण्यांशिवाय फक्त विश्रांती आणि वेदनाशामक औषध लिहा"}, quality:"risky",
                    outcome:{en:"This misses something important — an irregular ECG needs specialist follow-up, not just symptom relief. The underlying cause still needs investigation.",hi:"यह कुछ ज़रूरी चीज़ छोड़ देता है — अनियमित ईसीजी को सिर्फ़ लक्षण राहत नहीं, विशेषज्ञ फ़ॉलो-अप चाहिए। अंतर्निहित कारण की अभी भी जांच ज़रूरी है।",mr:"यात काहीतरी महत्त्वाचं चुकतं — अनियमित ईसीजीला फक्त लक्षण आराम नाही, तज्ज्ञ फॉलो-अप हवं. मूळ कारणाची अजूनही चौकशी आवश्यक आहे."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔍", title: "Explore diagnostic reasoning", mentorVisual: "🔍",
              mentorIntro: {
                en: "Great diagnosis relies on real reasoning skills, not guessing. Let's explore how doctors think through a case.",
                hi: "बेहतरीन निदान असली तर्क कौशल पर निर्भर करता है, अनुमान लगाने पर नहीं। चलो एक्सप्लोर करते हैं डॉक्टर एक केस के बारे में कैसे सोचते हैं।",
                mr: "उत्तम निदान खऱ्या तर्क कौशल्यांवर अवलंबून असतं, अंदाज लावण्यावर नाही. चला एक्सप्लोर करूया डॉक्टर एका केसबद्दल कसा विचार करतात."
              },
              data: { visual: "🔍", hotspots: [
              { label:{en:"Differential diagnosis",hi:"डिफरेंशियल डायग्नोसिस",mr:"डिफरेन्शियल निदान"}, fact:{en:"Doctors often list several possible explanations for symptoms, then narrow down using tests — this is called differential diagnosis!"} },
              { label:{en:"Ruling things out",hi:"चीज़ों को खारिज करना",mr:"गोष्टी नाकारणं"}, fact:{en:"A huge part of diagnosis is ruling OUT dangerous possibilities first, even if they turn out not to be the cause!"} },
              { label:{en:"Pattern recognition",hi:"पैटर्न पहचान",mr:"नमुना ओळख"}, fact:{en:"Experienced doctors develop pattern recognition — recognizing symptom combinations they've seen work out a certain way before!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Diagnostic reasoning quiz",
              desc: { en:"A real quiz on how doctors approach complex diagnostic reasoning.", hi:"डॉक्टर जटिल निदान तर्क को कैसे अपनाते हैं, इस पर एक असली क्विज़।", mr:"डॉक्टर जटिल निदान तर्काकडे कसे बघतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Living with uncertainty",
              desc: { en:"How do you think it feels to make a judgment call as a doctor, knowing you might not have 100% certainty? How would you handle that pressure?", hi:"तुम्हें क्या लगता है एक डॉक्टर के रूप में फ़ैसला लेना कैसा महसूस होता है, यह जानते हुए कि तुम्हें 100% निश्चितता नहीं हो सकती? तुम इस दबाव को कैसे संभालोगे?", mr:"डॉक्टर म्हणून निर्णय घेणं कसं वाटत असेल, हे माहीत असताना की तुम्हाला 100% खात्री नसू शकते? तुम्ही हा दबाव कसा हाताळाल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Diagnosis Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced diagnostic fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस निदान तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत निदान तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"AI helping diagnosis?",hi:"AI निदान में मदद कर रहा है?",mr:"AI निदानात मदत करतंय?"}, back:{en:"AI tools increasingly help doctors consider possibilities they might not think of immediately — a helpful second opinion! 🤖",hi:"AI टूल्स तेज़ी से डॉक्टरों को उन संभावनाओं पर विचार करने में मदद करते हैं जिनके बारे में वे तुरंत नहीं सोच सकते! 🤖",mr:"AI साधनं वाढत्या प्रमाणात डॉक्टरांना ते लगेच विचार करणार नाहीत अशा शक्यतांचा विचार करण्यास मदत करतात! 🤖"} },
              { front:{en:"Rare vs common?",hi:"दुर्लभ बनाम आम?",mr:"दुर्मिळ विरुद्ध सामान्य?"}, back:{en:"There's a saying in medicine: 'when you hear hoofbeats, think horses, not zebras' — common causes are usually checked before rare ones! 🦓",hi:"चिकित्सा में एक कहावत है: 'जब तुम खुरों की आवाज़ सुनो, घोड़ों के बारे में सोचो, ज़ेब्रा के बारे में नहीं' — दुर्लभ कारणों से पहले आम कारणों की जाँच होती है! 🦓",mr:"वैद्यकशास्त्रात एक म्हण आहे: 'जेव्हा तुम्ही खुरांचा आवाज ऐकता, घोड्यांचा विचार करा, झेब्र्यांचा नाही' — दुर्मिळ कारणांआधी सामान्य कारणं तपासली जातात! 🦓"} },
              { front:{en:"Second opinions matter?",hi:"दूसरी राय मायने रखती है?",mr:"दुसरं मत महत्त्वाचं आहे?"}, back:{en:"Even experienced doctors regularly seek second opinions on complex cases — it's a sign of good judgment, not weakness! 🤝",hi:"यहाँ तक कि अनुभवी डॉक्टर भी जटिल मामलों पर नियमित रूप से दूसरी राय लेते हैं — यह अच्छे निर्णय का संकेत है, कमज़ोरी का नहीं! 🤝",mr:"अगदी अनुभवी डॉक्टरही जटिल प्रकरणांवर नियमितपणे दुसरं मत घेतात — हे चांगल्या निर्णयाचं लक्षण आहे, कमकुवतपणाचं नाही! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Diagnosis or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your diagnostic knowledge! Decide if each statement is true or a myth.",
                hi: "चलो निदान के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला निदानाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Doctors are always 100% certain about a diagnosis before treating a patient.",hi:"डॉक्टर मरीज़ का इलाज करने से पहले हमेशा निदान के बारे में 100% निश्चित होते हैं।",mr:"डॉक्टर रुग्णावर उपचार करण्याआधी नेहमी निदानाबद्दल 100% खात्री बाळगतात."}, answer:false, explain:{en:"Myth! Doctors often act on the most likely diagnosis while continuing to investigate, since certainty isn't always immediately possible.",hi:"मिथक! डॉक्टर अक्सर सबसे संभावित निदान पर काम करते हैं जबकि जांच जारी रखते हैं, क्योंकि निश्चितता हमेशा तुरंत संभव नहीं होती।",mr:"मिथक! डॉक्टर अनेकदा सर्वात शक्य निदानावर काम करतात तपासणी सुरू ठेवत, कारण खात्री नेहमी लगेच शक्य नसते."} },
              { text:{en:"Ruling out dangerous possibilities first is a common diagnostic approach.",hi:"पहले खतरनाक संभावनाओं को खारिज करना एक आम निदान तरीका है।",mr:"धोकादायक शक्यता आधी नाकारणं ही एक सामान्य निदान पद्धत आहे."}, answer:true, explain:{en:"True! Doctors often prioritize ruling out the most dangerous explanations first, even if they turn out unlikely.",hi:"सच! डॉक्टर अक्सर सबसे खतरनाक व्याख्याओं को पहले खारिज करने को प्राथमिकता देते हैं, भले ही वे असंभावित निकलें।",mr:"खरं! डॉक्टर अनेकदा सर्वात धोकादायक स्पष्टीकरणं आधी नाकारण्यास प्राधान्य देतात, जरी ती असंभाव्य निघाली तरी."} },
              { text:{en:"Seeking a second opinion on a complex case is a sign of a doctor's weakness.",hi:"एक जटिल मामले पर दूसरी राय लेना डॉक्टर की कमज़ोरी का संकेत है।",mr:"जटिल केसवर दुसरं मत घेणं हे डॉक्टरच्या कमकुवतपणाचं लक्षण आहे."}, answer:false, explain:{en:"Myth! Seeking second opinions is actually a sign of good judgment and care for the patient, not weakness.",hi:"मिथक! दूसरी राय लेना असल में अच्छे निर्णय और मरीज़ की देखभाल का संकेत है, कमज़ोरी का नहीं।",mr:"मिथक! दुसरं मत घेणं खरंतर चांगला निर्णय आणि रुग्णाच्या काळजीचं लक्षण आहे, कमकुवतपणाचं नाही."} }
            ]}}
          ]},
          { label: "Pharmacology & Dosage",
            bonusAssignment: {
              title: { en: "Dosage Safety Explainer", hi: "खुराक सुरक्षा समझाने वाला", mr: "मात्रा सुरक्षा समजावणारं" },
              prompt: { en: "Research why medicine dosage is often calculated by body weight, and write 3-4 sentences. Take a photo!",
                        hi: "दवा की खुराक अक्सर शरीर के वज़न से क्यों गणना की जाती है इस पर रिसर्च करो और 3-4 वाक्य लिखो। फोटो लो!",
                        mr: "औषधाची मात्रा अनेकदा शरीराच्या वजनावरून का मोजली जाते यावर संशोधन करा आणि 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "💊", title: "Get the Dosage Right", mentorVisual: "💊",
              mentorIntro: {
                en: "Dosage decisions are some of the most important judgment calls in medicine — too little doesn't help, too much can harm. Let's work through a real scenario.",
                hi: "खुराक के फ़ैसले चिकित्सा में सबसे ज़रूरी निर्णयों में से हैं — बहुत कम मदद नहीं करता, बहुत ज़्यादा नुकसान पहुँचा सकता है। चलो एक असली परिदृश्य से गुज़रते हैं।",
                mr: "मात्रेचे निर्णय वैद्यकशास्त्रातील सर्वात महत्त्वाच्या निर्णयांपैकी आहेत — खूप कमी मदत करत नाही, खूप जास्त नुकसान पोहोचवू शकतं. चला एका खऱ्या परिस्थितीतून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"You're prescribing medicine for a child patient. The standard adult dose is listed on the packaging, but your patient is much smaller. What do you do?",
                             hi:"तुम एक बच्चे मरीज़ के लिए दवा लिख रहे हो। पैकेजिंग पर मानक वयस्क खुराक दी गई है, लेकिन तुम्हारा मरीज़ बहुत छोटा है। तुम क्या करते हो?",
                             mr:"तुम्ही एका मूल रुग्णासाठी औषध लिहित आहात. पॅकेजिंगवर मानक प्रौढ मात्रा दिली आहे, पण तुमचा रुग्ण खूप लहान आहे. तुम्ही काय करता?" },
                choices: [
                  { label:{en:"Calculate the dose based on the child's specific body weight", hi:"बच्चे के खास शरीर के वज़न के आधार पर खुराक की गणना करो", mr:"मुलाच्या विशिष्ट शरीराच्या वजनावर आधारित मात्रा मोजा"}, quality:"best",
                    outcome:{en:"Correct approach! Weight-based dosing is the standard, safe way to calculate medicine for children, since their bodies process medicine differently than adults.",hi:"सही तरीका! वज़न-आधारित खुराक बच्चों के लिए दवा की गणना करने का मानक, सुरक्षित तरीका है, क्योंकि उनके शरीर वयस्कों से अलग तरह से दवा प्रोसेस करते हैं।",mr:"योग्य पद्धत! वजन-आधारित मात्रा मुलांसाठी औषधाची गणना करण्याची मानक, सुरक्षित पद्धत आहे, कारण त्यांची शरीरं प्रौढांपेक्षा वेगळ्या पद्धतीने औषध प्रोसेस करतात."} },
                  { label:{en:"Just give a smaller guess, like half the adult dose", hi:"बस एक छोटा अनुमान दो, जैसे वयस्क खुराक का आधा", mr:"फक्त एक लहान अंदाज द्या, जसं प्रौढ मात्रेचं अर्धं"}, quality:"risky",
                    outcome:{en:"This is risky. Guessing without calculating based on actual weight could lead to giving too much or too little — precision matters here.",hi:"यह जोखिम भरा है। असली वज़न के आधार पर गणना किए बिना अनुमान लगाने से बहुत ज़्यादा या बहुत कम देने का खतरा हो सकता है — यहाँ सटीकता मायने रखती है।",mr:"हे धोकादायक आहे. खऱ्या वजनावर आधारित गणना न करता अंदाज लावल्याने खूप जास्त किंवा खूप कमी देण्याचा धोका असू शकतो — इथे अचूकता महत्त्वाची आहे."} }
                ]
              },
              {
                situation: { en:"After calculating the correct weight-based dose, the parent asks if they can just round it up 'to be safe.' How do you respond?",
                             hi:"सही वज़न-आधारित खुराक की गणना करने के बाद, माता-पिता पूछते हैं कि क्या वे इसे 'सुरक्षित रहने के लिए' बस राउंड अप कर सकते हैं। तुम कैसे जवाब देते हो?",
                             mr:"योग्य वजन-आधारित मात्रेची गणना केल्यानंतर, पालक विचारतात की ते ते 'सुरक्षित राहण्यासाठी' फक्त वाढवू शकतात का. तुम्ही कसं उत्तर देता?" },
                choices: [
                  { label:{en:"Explain clearly that the calculated dose IS the safe amount, and more isn't automatically safer", hi:"स्पष्ट रूप से समझाओ कि गणना की गई खुराक ही सुरक्षित मात्रा है, और ज़्यादा स्वतः सुरक्षित नहीं है", mr:"स्पष्टपणे समजावून सांगा की मोजलेली मात्रा हीच सुरक्षित मात्रा आहे, आणि जास्त म्हणजे आपोआप सुरक्षित नाही"}, quality:"best",
                    outcome:{en:"Great communication! This is an important teaching moment — many people assume 'more is safer,' but with medicine, the correct calculated dose IS the safe amount.",hi:"बेहतरीन बातचीत! यह एक ज़रूरी सिखाने का पल है — कई लोग मानते हैं कि 'ज़्यादा ज़्यादा सुरक्षित है,' लेकिन दवा के साथ, सही गणना की गई खुराक ही सुरक्षित मात्रा है।",mr:"उत्तम संवाद! ही एक महत्त्वाची शिकवण्याची वेळ आहे — अनेक लोक मानतात की 'जास्त म्हणजे सुरक्षित,' पण औषधासोबत, बरोबर मोजलेली मात्रा हीच सुरक्षित मात्रा आहे."} },
                  { label:{en:"Agree to round it up slightly since the parent seems worried", hi:"थोड़ा राउंड अप करने के लिए राज़ी हो जाओ क्योंकि माता-पिता चिंतित लगते हैं", mr:"थोडं वाढवायला सहमत व्हा कारण पालक काळजीत दिसतात"}, quality:"risky",
                    outcome:{en:"This misses an important teaching opportunity, and could actually be unsafe — the calculated dose exists for good reason, and rounding up isn't harmless.",hi:"यह एक ज़रूरी सिखाने का मौका छोड़ देता है, और असल में असुरक्षित हो सकता है — गणना की गई खुराक एक अच्छे कारण से मौजूद है, और राउंड अप करना हानिरहित नहीं है।",mr:"हे एक महत्त्वाची शिकवण्याची संधी गमावतं, आणि खरंच असुरक्षित असू शकतं — मोजलेली मात्रा चांगल्या कारणासाठी अस्तित्वात असते, आणि वाढवणं निरुपद्रवी नाही."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "💊", title: "Explore dosage science", mentorVisual: "💊",
              mentorIntro: {
                en: "Let's explore the science behind why exact dosage matters so much in medicine.",
                hi: "चलो उस विज्ञान को एक्सप्लोर करते हैं जो बताता है कि सटीक खुराक चिकित्सा में इतनी मायने क्यों रखती है।",
                mr: "चला त्या शास्त्राला एक्सप्लोर करूया जे सांगतं की नेमकी मात्रा वैद्यकशास्त्रात इतकी का महत्त्वाची आहे."
              },
              data: { visual: "💊", hotspots: [
              { label:{en:"Too little",hi:"बहुत कम",mr:"खूप कमी"}, fact:{en:"Too little medicine might not treat the condition effectively, leaving the problem unresolved!"} },
              { label:{en:"Too much",hi:"बहुत ज़्यादा",mr:"खूप जास्त"}, fact:{en:"Too much medicine can cause dangerous side effects — more is genuinely not always safer!"} },
              { label:{en:"The right window",hi:"सही खिड़की",mr:"योग्य कक्षा"}, fact:{en:"Doctors aim for a specific safe range — enough to help, not so much that it causes harm!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Pharmacology & dosage quiz",
              desc: { en:"A real quiz on dosage calculation and why precision matters in pharmacology.", hi:"खुराक की गणना पर और फार्माकोलॉजी में सटीकता क्यों मायने रखती है, इस पर एक असली क्विज़।", mr:"मात्रेच्या गणनेवर आणि फार्माकोलॉजीमध्ये अचूकता का महत्त्वाची आहे, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "The weight of precision",
              desc: { en:"How do you feel knowing that a small calculation error in dosage could genuinely affect someone's health? How would you build habits to avoid mistakes?", hi:"यह जानते हुए कि खुराक में एक छोटी सी गणना की गलती असल में किसी के स्वास्थ्य को प्रभावित कर सकती है, तुम्हें कैसा महसूस होता है? तुम गलतियों से बचने के लिए आदतें कैसे बनाओगे?", mr:"मात्रेतील एक लहानशी गणनेची चूक खरंच एखाद्याच्या आरोग्यावर परिणाम करू शकते हे माहीत असताना तुम्हाला कसं वाटतं? चुका टाळण्यासाठी तुम्ही सवयी कशा तयार कराल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Pharmacology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced pharmacology fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस फार्माकोलॉजी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत फार्माकोलॉजी तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Double-checking systems?",hi:"दोबारा जाँचने वाले सिस्टम?",mr:"पुन्हा तपासणारी यंत्रणा?"}, back:{en:"Hospitals have multiple double-checking systems — pharmacists verify doctors' dosage calculations before medicine reaches patients! ✅",hi:"अस्पतालों में कई दोबारा जाँचने वाले सिस्टम हैं — फार्मासिस्ट दवा मरीज़ों तक पहुँचने से पहले डॉक्टरों की खुराक गणना को सत्यापित करते हैं! ✅",mr:"रुग्णालयांमध्ये अनेक पुन्हा तपासणाऱ्या यंत्रणा आहेत — औषध रुग्णांपर्यंत पोहोचण्याआधी फार्मासिस्ट डॉक्टरांच्या मात्रा गणनेची पडताळणी करतात! ✅"} },
              { front:{en:"Weight isn't the only factor?",hi:"वज़न ही एकमात्र कारक नहीं है?",mr:"वजन हा एकमेव घटक नाही?"}, back:{en:"Age, kidney function, and other health conditions can also affect how doctors calculate the right dose! ⚖️",hi:"उम्र, किडनी का काम, और अन्य स्वास्थ्य स्थितियाँ भी प्रभावित कर सकती हैं कि डॉक्टर सही खुराक की गणना कैसे करते हैं! ⚖️",mr:"वय, किडनीचं कार्य, आणि इतर आरोग्य स्थितीही डॉक्टर योग्य मात्रा कशी मोजतात यावर परिणाम करू शकतात! ⚖️"} },
              { front:{en:"Technology helps calculate?",hi:"तकनीक गणना में मदद करती है?",mr:"तंत्रज्ञान गणना करण्यास मदत करतं?"}, back:{en:"Many hospitals now use software to double-check dosage calculations, reducing the chance of human error! 💻",hi:"कई अस्पताल अब खुराक गणना को दोबारा जाँचने के लिए सॉफ्टवेयर का इस्तेमाल करते हैं, मानवीय गलती की संभावना को कम करते हुए! 💻",mr:"अनेक रुग्णालयं आता मात्रा गणना पुन्हा तपासण्यासाठी सॉफ्टवेअर वापरतात, मानवी चुकीची शक्यता कमी करत! 💻"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Dosage or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your dosage knowledge! Decide if each statement is true or a myth.",
                hi: "चलो खुराक के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला मात्रेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Giving a slightly higher dose than calculated is always safer.",hi:"गणना से थोड़ी ज़्यादा खुराक देना हमेशा ज़्यादा सुरक्षित है।",mr:"मोजलेल्यापेक्षा थोडी जास्त मात्रा देणं नेहमी सुरक्षित असतं."}, answer:false, explain:{en:"Myth! The calculated dose IS the safe amount — giving more isn't automatically safer and can cause harm.",hi:"मिथक! गणना की गई खुराक ही सुरक्षित मात्रा है — ज़्यादा देना स्वतः सुरक्षित नहीं है और नुकसान पहुँचा सकता है।",mr:"मिथक! मोजलेली मात्रा हीच सुरक्षित मात्रा आहे — जास्त देणं आपोआप सुरक्षित नाही आणि नुकसान करू शकतं."} },
              { text:{en:"Pharmacists often double-check a doctor's dosage calculations.",hi:"फार्मासिस्ट अक्सर डॉक्टर की खुराक गणना को दोबारा जाँचते हैं।",mr:"फार्मासिस्ट अनेकदा डॉक्टरांच्या मात्रा गणनेची पुन्हा तपासणी करतात."}, answer:true, explain:{en:"True! This double-checking system is an important safety measure in hospitals.",hi:"सच! यह दोबारा जाँचने वाला सिस्टम अस्पतालों में एक ज़रूरी सुरक्षा उपाय है।",mr:"खरं! ही पुन्हा तपासणारी यंत्रणा रुग्णालयांमध्ये एक महत्त्वाचा सुरक्षा उपाय आहे."} },
              { text:{en:"Only body weight matters when calculating the right medicine dose.",hi:"सही दवा खुराक की गणना करते समय केवल शरीर का वज़न मायने रखता है।",mr:"योग्य औषध मात्रा मोजताना फक्त शरीराचं वजन महत्त्वाचं असतं."}, answer:false, explain:{en:"Myth! Age, kidney function, and other health factors can also affect proper dosage calculation.",hi:"मिथक! उम्र, किडनी का काम, और अन्य स्वास्थ्य कारक भी उचित खुराक गणना को प्रभावित कर सकते हैं।",mr:"मिथक! वय, किडनीचं कार्य, आणि इतर आरोग्य घटकही योग्य मात्रा गणनेवर परिणाम करू शकतात."} }
            ]}}
          ]},
          { label: "Surgical Decision-Making",
            bonusAssignment: {
              title: { en: "Surgery vs. Non-Surgery Reflection", hi: "सर्जरी बनाम गैर-सर्जरी विचार", mr: "शस्त्रक्रिया विरुद्ध गैर-शस्त्रक्रिया विचार" },
              prompt: { en: "Write 3-4 sentences on how you imagine a surgeon decides whether an operation is really necessary. Take a photo!",
                        hi: "3-4 वाक्य लिखो कि तुम कैसे कल्पना करते हो कि एक सर्जन तय करता है कि क्या ऑपरेशन वाकई ज़रूरी है। फोटो लो!",
                        mr: "एक सर्जन ऑपरेशन खरंच आवश्यक आहे का हे कसं ठरवतो अशी तुमची कल्पना आहे, याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🔪", title: "Decide the Surgical Path", mentorVisual: "🔪",
              mentorIntro: {
                en: "Not every problem needs surgery, and deciding when it's truly necessary is a real judgment call. Let's work through a scenario.",
                hi: "हर समस्या को सर्जरी की ज़रूरत नहीं होती, और यह तय करना कि यह वाकई ज़रूरी है, एक असली फ़ैसला है। चलो एक परिदृश्य से गुज़रते हैं।",
                mr: "प्रत्येक समस्येला शस्त्रक्रियेची गरज नसते, आणि ती खरंच आवश्यक आहे का हे ठरवणं एक खरा निर्णय आहे. चला एका परिस्थितीतून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A patient has a torn ligament in their knee from a sports injury. It's painful, but they can still walk. What's the right approach?",
                             hi:"एक मरीज़ के घुटने में खेल की चोट से एक फटा हुआ लिगामेंट है। यह दर्दनाक है, लेकिन वे अभी भी चल सकते हैं। सही तरीका क्या है?",
                             mr:"एका रुग्णाच्या गुडघ्यात खेळाच्या दुखापतीमुळे फाटलेलं लिगामेंट आहे. ते वेदनादायक आहे, पण ते अजूनही चालू शकतात. योग्य पद्धत काय आहे?" },
                choices: [
                  { label:{en:"Start with physical therapy and monitor closely, keeping surgery as an option if it doesn't improve", hi:"फिज़िकल थेरेपी से शुरू करो और बारीकी से निगरानी करो, अगर सुधार न हो तो सर्जरी को एक विकल्प के रूप में रखते हुए", mr:"फिजिकल थेरपीने सुरुवात करा आणि बारकाईने निरीक्षण करा, सुधारणा न झाल्यास शस्त्रक्रियेचा पर्याय ठेवत"}, quality:"best",
                    outcome:{en:"Good judgment! Many ligament injuries can improve with physical therapy first — surgery is often reserved for cases that don't respond to conservative treatment.",hi:"अच्छा निर्णय! कई लिगामेंट चोटें पहले फिज़िकल थेरेपी से सुधर सकती हैं — सर्जरी अक्सर उन मामलों के लिए रखी जाती है जो कंज़र्वेटिव इलाज का जवाब नहीं देते।",mr:"चांगला निर्णय! अनेक लिगामेंट दुखापती आधी फिजिकल थेरपीने सुधारू शकतात — शस्त्रक्रिया अनेकदा कंझर्व्हेटिव्ह उपचाराला प्रतिसाद न देणाऱ्या केसेससाठी राखीव असते."} },
                  { label:{en:"Recommend surgery immediately since it's a torn ligament", hi:"तुरंत सर्जरी की सलाह दो क्योंकि यह एक फटा हुआ लिगामेंट है", mr:"लगेच शस्त्रक्रियेची शिफारस करा कारण हे एक फाटलेलं लिगामेंट आहे"}, quality:"risky",
                    outcome:{en:"This might be premature. Many ligament injuries improve without surgery — jumping straight to an operation isn't always the necessary or best first step.",hi:"यह जल्दबाज़ी हो सकती है। कई लिगामेंट चोटें बिना सर्जरी के सुधरती हैं — सीधे ऑपरेशन पर जाना हमेशा ज़रूरी या सबसे अच्छा पहला कदम नहीं है।",mr:"हे घाईचं असू शकतं. अनेक लिगामेंट दुखापती शस्त्रक्रियेशिवाय सुधारतात — थेट ऑपरेशनवर जाणं नेहमी आवश्यक किंवा सर्वोत्तम पहिली पायरी नाही."} }
                ]
              },
              {
                situation: { en:"After 6 weeks of physical therapy, the knee still isn't improving and the patient struggles with basic movement. What now?",
                             hi:"6 हफ़्तों की फिज़िकल थेरेपी के बाद, घुटना अभी भी सुधर नहीं रहा और मरीज़ बुनियादी हरकत के साथ संघर्ष करता है। अब क्या?",
                             mr:"6 आठवड्यांच्या फिजिकल थेरपीनंतर, गुडघा अजूनही सुधारत नाही आणि रुग्णाला मूलभूत हालचालीत त्रास होतो. आता काय?" },
                choices: [
                  { label:{en:"Now recommend surgical evaluation, since conservative treatment hasn't worked", hi:"अब सर्जिकल मूल्यांकन की सलाह दो, क्योंकि कंज़र्वेटिव इलाज काम नहीं आया", mr:"आता शस्त्रक्रिया मूल्यमापनाची शिफारस करा, कारण कंझर्व्हेटिव्ह उपचार काम आलं नाही"}, quality:"best",
                    outcome:{en:"Exactly right! This is the correct progression — try conservative treatment first, and move to surgical evaluation when it genuinely isn't working.",hi:"बिल्कुल सही! यह सही प्रगति है — पहले कंज़र्वेटिव इलाज आज़माओ, और जब यह वाकई काम नहीं कर रहा हो तो सर्जिकल मूल्यांकन की ओर बढ़ो।",mr:"अगदी बरोबर! ही योग्य प्रगती आहे — आधी कंझर्व्हेटिव्ह उपचार वापरून बघा, आणि तो खरंच काम करत नसेल तेव्हा शस्त्रक्रिया मूल्यमापनाकडे जा."} },
                  { label:{en:"Just continue the same physical therapy indefinitely", hi:"बस उसी फिज़िकल थेरेपी को अनिश्चित काल तक जारी रखो", mr:"फक्त तीच फिजिकल थेरपी अनिश्चित काळासाठी सुरू ठेवा"}, quality:"risky",
                    outcome:{en:"This could delay necessary treatment. If conservative approaches genuinely aren't working after a reasonable trial, it's time to reassess rather than continue indefinitely.",hi:"यह ज़रूरी इलाज में देरी कर सकता है। अगर कंज़र्वेटिव तरीके एक उचित परीक्षण के बाद वाकई काम नहीं कर रहे, तो अनिश्चित काल तक जारी रखने के बजाय फिर से मूल्यांकन करने का समय है।",mr:"यामुळे आवश्यक उपचारास उशीर होऊ शकतो. जर कंझर्व्हेटिव्ह पद्धती वाजवी चाचणीनंतरही खरंच काम करत नसतील, तर अनिश्चित काळासाठी सुरू ठेवण्याऐवजी पुनर्मूल्यांकन करण्याची वेळ आहे."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔪", title: "Explore surgical decision-making", mentorVisual: "🔪",
              mentorIntro: {
                en: "Let's explore what factors go into a surgeon's decision about whether to operate.",
                hi: "चलो एक्सप्लोर करते हैं कि सर्जन के ऑपरेट करने या न करने के फ़ैसले में कौन से कारक शामिल होते हैं।",
                mr: "चला एक्सप्लोर करूया की सर्जनच्या ऑपरेट करायचं की नाही या निर्णयात कोणते घटक समाविष्ट असतात."
              },
              data: { visual: "🔪", hotspots: [
              { label:{en:"Risk vs. benefit",hi:"जोखिम बनाम लाभ",mr:"धोका विरुद्ध फायदा"}, fact:{en:"Every surgery carries some risk — surgeons weigh that risk against the expected benefit before recommending an operation!"} },
              { label:{en:"Conservative first",hi:"पहले कंज़र्वेटिव",mr:"आधी कंझर्व्हेटिव्ह"}, fact:{en:"Many conditions are treated with non-surgical options first, saving surgery for when it's genuinely needed!"} },
              { label:{en:"Patient's own goals",hi:"मरीज़ के अपने लक्ष्य",mr:"रुग्णाची स्वतःची उद्दिष्टं"}, fact:{en:"Surgeons also consider what matters most to the patient — like an athlete needing full function back quickly!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Surgical decision-making quiz",
              desc: { en:"A real quiz on how surgeons decide when an operation is truly necessary.", hi:"सर्जन कैसे तय करते हैं कि एक ऑपरेशन वाकई ज़रूरी है, इस पर एक असली क्विज़।", mr:"सर्जन ऑपरेशन खरंच आवश्यक आहे का हे कसं ठरवतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Weighing risk and benefit",
              desc: { en:"How would you feel making a decision that involves real risk, like recommending surgery? What would help you feel confident in that judgment?", hi:"असली जोखिम वाला फ़ैसला लेना कैसा महसूस होगा, जैसे सर्जरी की सलाह देना? इस निर्णय में आत्मविश्वास महसूस करने में तुम्हें क्या मदद करेगा?", mr:"शस्त्रक्रियेची शिफारस करण्यासारखा खरा धोका असलेला निर्णय घेणं कसं वाटेल? त्या निर्णयात आत्मविश्वास वाटण्यास तुम्हाला काय मदत करेल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Surgical Decision Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about surgical decision-making!",
                hi: "चलो और गहराई में जाते हैं — सर्जिकल निर्णय के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — शस्त्रक्रिया निर्णयाबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Tumor boards exist?",hi:"ट्यूमर बोर्ड मौजूद हैं?",mr:"ट्यूमर बोर्ड अस्तित्वात आहेत?"}, back:{en:"For complex cases like cancer, teams of specialists called 'tumor boards' discuss together whether surgery is the best option! 👥",hi:"कैंसर जैसे जटिल मामलों के लिए, 'ट्यूमर बोर्ड' कहे जाने वाले विशेषज्ञों की टीमें साथ मिलकर चर्चा करती हैं कि क्या सर्जरी सबसे अच्छा विकल्प है! 👥",mr:"कर्करोगासारख्या जटिल केसेससाठी, 'ट्यूमर बोर्ड' म्हटल्या जाणाऱ्या तज्ज्ञांच्या टीम एकत्र चर्चा करतात की शस्त्रक्रिया सर्वोत्तम पर्याय आहे का! 👥"} },
              { front:{en:"Minimally invasive options?",hi:"न्यूनतम आक्रामक विकल्प?",mr:"किमान आक्रमक पर्याय?"}, back:{en:"Modern surgery increasingly uses minimally invasive techniques — smaller cuts, faster recovery! 🔬",hi:"आधुनिक सर्जरी तेज़ी से न्यूनतम आक्रामक तकनीकों का इस्तेमाल कर रही है — छोटे कट, तेज़ रिकवरी! 🔬",mr:"आधुनिक शस्त्रक्रिया वाढत्या प्रमाणात किमान आक्रमक तंत्रं वापरत आहे — लहान कापणी, जलद रिकव्हरी! 🔬"} },
              { front:{en:"Informed consent matters?",hi:"सूचित सहमति मायने रखती है?",mr:"माहितीपूर्ण संमती महत्त्वाची आहे?"}, back:{en:"Before any surgery, doctors must fully explain risks and benefits so the patient can genuinely consent to the decision! ✍️",hi:"किसी भी सर्जरी से पहले, डॉक्टरों को जोखिम और लाभ पूरी तरह समझाने होते हैं ताकि मरीज़ वाकई फ़ैसले पर सहमति दे सके! ✍️",mr:"कोणत्याही शस्त्रक्रियेआधी, डॉक्टरांना धोके आणि फायदे पूर्णपणे समजावून सांगावे लागतात जेणेकरून रुग्ण खरंच निर्णयाला संमती देऊ शकेल! ✍️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Surgical Decisions or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your surgical decision-making knowledge! Decide if each statement is true or a myth.",
                hi: "चलो सर्जिकल निर्णय के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला शस्त्रक्रिया निर्णयाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Surgery is always the first treatment option, before trying anything else.",hi:"सर्जरी हमेशा पहला इलाज विकल्प है, कुछ और आज़माने से पहले।",mr:"शस्त्रक्रिया नेहमी पहिला उपचार पर्याय असते, इतर काहीही करून बघण्याआधी."}, answer:false, explain:{en:"Myth! Many conditions are treated with conservative approaches first, with surgery reserved for when those don't work.",hi:"मिथक! कई स्थितियों का पहले कंज़र्वेटिव तरीकों से इलाज किया जाता है, सर्जरी उन मामलों के लिए रखी जाती है जो काम नहीं करते।",mr:"मिथक! अनेक स्थितींवर आधी कंझर्व्हेटिव्ह पद्धतींनी उपचार केले जातात, शस्त्रक्रिया त्या काम न करणाऱ्या केसेससाठी राखीव असते."} },
              { text:{en:"Patients must give informed consent before undergoing surgery.",hi:"सर्जरी करवाने से पहले मरीज़ों को सूचित सहमति देनी होती है।",mr:"शस्त्रक्रिया करण्याआधी रुग्णांना माहितीपूर्ण संमती द्यावी लागते."}, answer:true, explain:{en:"True! Informed consent, after fully understanding risks and benefits, is a core requirement before any surgery.",hi:"सच! जोखिम और लाभ को पूरी तरह समझने के बाद सूचित सहमति, किसी भी सर्जरी से पहले एक मुख्य ज़रूरत है।",mr:"खरं! धोके आणि फायदे पूर्णपणे समजून घेतल्यानंतर माहितीपूर्ण संमती, कोणत्याही शस्त्रक्रियेआधी एक मुख्य आवश्यकता आहे."} },
              { text:{en:"All surgical decisions are made by just one doctor working alone, regardless of complexity.",hi:"सभी सर्जिकल फ़ैसले जटिलता की परवाह किए बिना, बस एक डॉक्टर द्वारा अकेले लिए जाते हैं।",mr:"सर्व शस्त्रक्रिया निर्णय जटिलतेची पर्वा न करता, फक्त एका डॉक्टरद्वारे एकट्याने घेतले जातात."}, answer:false, explain:{en:"Myth! Complex cases often involve teams of specialists discussing together, like tumor boards for cancer cases.",hi:"मिथक! जटिल मामलों में अक्सर विशेषज्ञों की टीमें एक साथ चर्चा करती हैं, जैसे कैंसर मामलों के लिए ट्यूमर बोर्ड।",mr:"मिथक! जटिल केसेसमध्ये अनेकदा तज्ज्ञांच्या टीम एकत्र चर्चा करतात, जसं कर्करोग केसेससाठी ट्यूमर बोर्ड."} }
            ]}}
          ]},
          { label: "Reading Real Reports",
            bonusAssignment: {
              title: { en: "Report Interpretation Practice", hi: "रिपोर्ट व्याख्या अभ्यास", mr: "अहवाल अर्थ लावण्याचा सराव" },
              prompt: { en: "Research one real type of medical report (like a blood panel) and write 3-4 sentences explaining how a doctor would read it. Take a photo!",
                        hi: "एक असली तरह की मेडिकल रिपोर्ट (जैसे ब्लड पैनल) पर रिसर्च करो और 3-4 वाक्य लिखो कि एक डॉक्टर इसे कैसे पढ़ेगा। फोटो लो!",
                        mr: "एका खऱ्या प्रकारच्या वैद्यकीय अहवालावर (जसं रक्त पॅनेल) संशोधन करा आणि डॉक्टर तो कसा वाचेल याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "📋", title: "Interpret the Full Report", mentorVisual: "📋",
              mentorIntro: {
                en: "Real medical reports have many numbers together — reading them well means understanding the whole picture, not just one value. Let's work through one.",
                hi: "असली मेडिकल रिपोर्ट में कई संख्याएँ एक साथ होती हैं — उन्हें अच्छे से पढ़ने का मतलब है पूरी तस्वीर समझना, सिर्फ़ एक वैल्यू नहीं। चलो एक से गुज़रते हैं।",
                mr: "खऱ्या वैद्यकीय अहवालात अनेक संख्या एकत्र असतात — त्या नीट वाचणं म्हणजे संपूर्ण चित्र समजून घेणं, फक्त एक मूल्य नाही. चला एकातून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A patient's blood report shows slightly low red blood cells, but everything else — including white blood cells and platelets — is normal. The patient reports feeling a bit more tired than usual lately. What's your interpretation?",
                             hi:"एक मरीज़ की ब्लड रिपोर्ट में थोड़ी कम लाल रक्त कोशिकाएँ दिखती हैं, लेकिन बाकी सब कुछ — सफ़ेद रक्त कोशिकाओं और प्लेटलेट्स सहित — सामान्य है। मरीज़ बताता है कि हाल ही में थोड़ा ज़्यादा थका हुआ महसूस कर रहा है। तुम्हारी व्याख्या क्या है?",
                             mr:"एका रुग्णाच्या रक्त अहवालात थोड्या कमी लाल रक्तपेशी दिसतात, पण बाकी सर्वकाही — पांढऱ्या रक्तपेशी आणि प्लेटलेट्ससह — सामान्य आहे. रुग्ण सांगतो की अलीकडे थोडं जास्त थकवा जाणवतोय. तुमचा अर्थ काय आहे?" },
                choices: [
                  { label:{en:"Consider mild anemia as a likely explanation, and investigate further (like diet or iron levels)", hi:"हल्के एनीमिया को एक संभावित व्याख्या के रूप में मानो, और आगे जांच करो (जैसे आहार या आयरन लेवल)", mr:"सौम्य ॲनिमियाला संभाव्य स्पष्टीकरण मानून, पुढील तपासणी करा (जसं आहार किंवा लोहाची पातळी)"}, quality:"best",
                    outcome:{en:"Good interpretation! Low red blood cells combined with fatigue often points toward mild anemia — checking things like iron levels or diet is a logical next step.",hi:"अच्छी व्याख्या! थकान के साथ कम लाल रक्त कोशिकाएँ अक्सर हल्के एनीमिया की ओर इशारा करती हैं — आयरन लेवल या आहार जैसी चीज़ों की जाँच करना एक तार्किक अगला कदम है।",mr:"चांगला अर्थ! थकव्यासोबत कमी लाल रक्तपेशी अनेकदा सौम्य ॲनिमियाकडे निर्देश करतात — लोहाची पातळी किंवा आहारासारख्या गोष्टी तपासणं हे एक तार्किक पुढचं पाऊल आहे."} },
                  { label:{en:"Ignore the slightly low reading since only one value is off", hi:"थोड़ी कम रीडिंग को नज़रअंदाज़ करो क्योंकि केवल एक वैल्यू गड़बड़ है", mr:"थोडी कमी रीडिंग दुर्लक्षित करा कारण फक्त एक मूल्य चुकीचं आहे"}, quality:"risky",
                    outcome:{en:"This misses a real clue. Even a single abnormal value, combined with a matching symptom like fatigue, deserves proper investigation rather than being dismissed.",hi:"यह एक असली सुराग छोड़ देता है। यहाँ तक कि एक अकेली असामान्य वैल्यू भी, थकान जैसे मेल खाते लक्षण के साथ, नज़रअंदाज़ करने के बजाय उचित जांच की हकदार है।",mr:"यात एक खरा सुगावा चुकतो. अगदी एक असामान्य मूल्यही, थकव्यासारख्या जुळणाऱ्या लक्षणासोबत, दुर्लक्षित करण्याऐवजी योग्य तपासणी हवी असते."} }
                ]
              },
              {
                situation: { en:"Follow-up tests confirm mild anemia, likely from low iron. The patient asks if this is serious. How do you explain it?",
                             hi:"फ़ॉलो-अप टेस्ट हल्के एनीमिया की पुष्टि करते हैं, संभवतः कम आयरन से। मरीज़ पूछता है कि क्या यह गंभीर है। तुम इसे कैसे समझाते हो?",
                             mr:"फॉलो-अप चाचण्या सौम्य ॲनिमियाची पुष्टी करतात, बहुधा कमी लोहामुळे. रुग्ण विचारतो हे गंभीर आहे का. तुम्ही ते कसं समजावून सांगता?" },
                choices: [
                  { label:{en:"Explain clearly that mild anemia is common and very manageable, often improving with diet or supplements", hi:"स्पष्ट रूप से समझाओ कि हल्का एनीमिया आम है और बहुत प्रबंधनीय है, अक्सर आहार या सप्लीमेंट से सुधरता है", mr:"स्पष्टपणे समजावून सांगा की सौम्य ॲनिमिया सामान्य आहे आणि खूप व्यवस्थापित करण्यायोग्य आहे, अनेकदा आहार किंवा सप्लिमेंटने सुधारतो"}, quality:"best",
                    outcome:{en:"Great communication! Being clear and reassuring, while still being honest about next steps, helps patients feel informed rather than unnecessarily worried.",hi:"बेहतरीन बातचीत! अगले कदमों के बारे में ईमानदार रहते हुए स्पष्ट और आश्वस्त करने वाला होना, मरीज़ों को अनावश्यक रूप से चिंतित होने के बजाय सूचित महसूस कराने में मदद करता है।",mr:"उत्तम संवाद! पुढील पावलांबद्दल प्रामाणिक राहत स्पष्ट आणि आश्वासक असणं, रुग्णांना अनावश्यक काळजीऐवजी माहितीपूर्ण वाटण्यास मदत करतं."} },
                  { label:{en:"Give a vague answer without really explaining what's going on", hi:"बिना असल में समझाए कि क्या हो रहा है, एक अस्पष्ट जवाब दो", mr:"खरंच काय होत आहे हे न समजावता, एक अस्पष्ट उत्तर द्या"}, quality:"risky",
                    outcome:{en:"This leaves the patient uninformed and possibly more anxious. Clear communication about even manageable conditions genuinely matters for patient trust and understanding.",hi:"यह मरीज़ को असूचित और शायद और ज़्यादा चिंतित छोड़ देता है। यहाँ तक कि प्रबंधनीय स्थितियों के बारे में भी स्पष्ट बातचीत मरीज़ के भरोसे और समझ के लिए वाकई मायने रखती है।",mr:"यामुळे रुग्ण अनभिज्ञ आणि कदाचित अधिक चिंतित राहतो. व्यवस्थापित करण्यायोग्य स्थितींबद्दलही स्पष्ट संवाद रुग्णाच्या विश्वास आणि समजुतीसाठी खरंच महत्त्वाचा आहे."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "📋", title: "Explore reading full reports", mentorVisual: "📋",
              mentorIntro: {
                en: "Let's explore what it means to read a report as a whole, not just individual numbers.",
                hi: "चलो एक्सप्लोर करते हैं एक रिपोर्ट को पूरी तरह पढ़ने का क्या मतलब है, सिर्फ़ अलग-अलग संख्याएँ नहीं।",
                mr: "चला एक्सप्लोर करूया अहवाल संपूर्णपणे वाचण्याचा अर्थ काय आहे, फक्त वेगळ्या संख्या नाही."
              },
              data: { visual: "📋", hotspots: [
              { label:{en:"Patterns over single values",hi:"अकेली वैल्यू पर पैटर्न",mr:"एकट्या मूल्यांपेक्षा नमुने"}, fact:{en:"Skilled doctors look for patterns across multiple values, not just flagging one number as 'off'!"} },
              { label:{en:"Symptoms plus numbers",hi:"लक्षण और संख्याएँ",mr:"लक्षणं आणि संख्या"}, fact:{en:"A report means much more when combined with what the patient is actually experiencing!"} },
              { label:{en:"Trends matter",hi:"रुझान मायने रखते हैं",mr:"कल महत्त्वाचा आहे"}, fact:{en:"Comparing a report to the same patient's past reports often reveals more than a single snapshot!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Reading real reports quiz",
              desc: { en:"A real quiz on interpreting medical reports as a complete picture.", hi:"मेडिकल रिपोर्ट को एक पूरी तस्वीर के रूप में समझने पर एक असली क्विज़।", mr:"वैद्यकीय अहवाल संपूर्ण चित्र म्हणून समजून घेण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "The skill of interpretation",
              desc: { en:"Why do you think interpreting a report well takes real skill, beyond just knowing what 'normal' numbers look like?", hi:"तुम्हें क्यों लगता है कि एक रिपोर्ट की अच्छी व्याख्या करने में असली कौशल लगता है, सिर्फ़ यह जानने से आगे कि 'सामान्य' संख्याएँ कैसी दिखती हैं?", mr:"'सामान्य' संख्या कशा दिसतात हे फक्त माहीत असण्यापलीकडे, अहवालाचा चांगला अर्थ लावण्यासाठी खरं कौशल्य लागतं असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Reading Reports Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about reading medical reports!",
                hi: "चलो और गहराई में जाते हैं — मेडिकल रिपोर्ट पढ़ने के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — वैद्यकीय अहवाल वाचण्याबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Reports have dozens of values?",hi:"रिपोर्ट में दर्जनों वैल्यू होती हैं?",mr:"अहवालात डझनभर मूल्यं असतात?"}, back:{en:"A single comprehensive blood panel can include 20+ different values, all needing to be considered together! 📊",hi:"एक व्यापक ब्लड पैनल में 20 से ज़्यादा अलग-अलग वैल्यू शामिल हो सकती हैं, सभी को एक साथ मानने की ज़रूरत है! 📊",mr:"एका सर्वसमावेशक रक्त पॅनेलमध्ये 20 हून अधिक वेगवेगळी मूल्यं समाविष्ट असू शकतात, सर्व एकत्र विचारात घ्यावी लागतात! 📊"} },
              { front:{en:"Reports change over a lifetime?",hi:"रिपोर्ट पूरे जीवनकाल में बदलती हैं?",mr:"अहवाल आयुष्यभर बदलतात?"}, back:{en:"A patient's own history of past reports is often kept and compared over years to track their health! 📁",hi:"मरीज़ के अपने पिछली रिपोर्टों के इतिहास को अक्सर सालों तक रखा और तुलना किया जाता है ताकि उनके स्वास्थ्य को ट्रैक किया जा सके! 📁",mr:"रुग्णाच्या स्वतःच्या मागील अहवालांचा इतिहास अनेकदा वर्षानुवर्षे राखला जातो आणि तुलना केली जाते त्यांचं आरोग्य ट्रॅक करण्यासाठी! 📁"} },
              { front:{en:"Software helps flag values?",hi:"सॉफ्टवेयर वैल्यू फ़्लैग करने में मदद करता है?",mr:"सॉफ्टवेअर मूल्यं फ्लॅग करण्यास मदत करतं?"}, back:{en:"Lab software automatically flags out-of-range values, but the doctor still interprets what it actually means for that patient! 💻",hi:"लैब सॉफ्टवेयर स्वचालित रूप से रेंज से बाहर की वैल्यू को फ़्लैग करता है, लेकिन डॉक्टर अभी भी व्याख्या करता है कि इसका उस मरीज़ के लिए असल में क्या मतलब है! 💻",mr:"लॅब सॉफ्टवेअर आपोआप श्रेणीबाहेरील मूल्यं फ्लॅग करतं, पण डॉक्टर तरीही त्या रुग्णासाठी त्याचा खरंच काय अर्थ आहे याचा अर्थ लावतो! 💻"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Reading Reports or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your report-reading knowledge! Decide if each statement is true or a myth.",
                hi: "चलो रिपोर्ट पढ़ने के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला अहवाल वाचण्याच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Any single abnormal value in a report should be completely ignored if everything else looks normal.",hi:"अगर बाकी सब कुछ सामान्य लगता है तो रिपोर्ट में किसी भी अकेली असामान्य वैल्यू को पूरी तरह नज़रअंदाज़ करना चाहिए।",mr:"जर बाकी सर्वकाही सामान्य दिसत असेल तर अहवालातील कोणतंही एक असामान्य मूल्य पूर्णपणे दुर्लक्षित करावं."}, answer:false, explain:{en:"Myth! Even one abnormal value, especially combined with a symptom, deserves attention and possible further investigation.",hi:"मिथक! यहाँ तक कि एक असामान्य वैल्यू भी, खासकर एक लक्षण के साथ मिलकर, ध्यान और संभावित आगे की जांच की हकदार है।",mr:"मिथक! अगदी एक असामान्य मूल्यही, विशेषतः लक्षणासोबत जुळताना, लक्ष आणि शक्य पुढील तपासणीस पात्र आहे."} },
              { text:{en:"Comparing a patient's current report to their past reports can reveal helpful trends.",hi:"मरीज़ की वर्तमान रिपोर्ट की तुलना उनकी पिछली रिपोर्टों से करना मददगार रुझान दिखा सकता है।",mr:"रुग्णाच्या सध्याच्या अहवालाची त्यांच्या मागील अहवालांशी तुलना केल्याने उपयुक्त कल दिसू शकतात."}, answer:true, explain:{en:"True! Trends over time often reveal much more than a single snapshot in time.",hi:"सच! समय के साथ रुझान अक्सर एक ही समय की तस्वीर से कहीं ज़्यादा दिखाते हैं।",mr:"खरं! कालांतराने कल अनेकदा एका क्षणाच्या चित्रापेक्षा खूप जास्त दाखवतात."} },
              { text:{en:"Lab software fully interprets what a report means for a specific patient, with no doctor input needed.",hi:"लैब सॉफ्टवेयर पूरी तरह व्याख्या करता है कि एक रिपोर्ट का किसी खास मरीज़ के लिए क्या मतलब है, बिना किसी डॉक्टर के इनपुट की ज़रूरत के।",mr:"लॅब सॉफ्टवेअर एका विशिष्ट रुग्णासाठी अहवालाचा काय अर्थ आहे याचा पूर्णपणे अर्थ लावतं, कोणत्याही डॉक्टर इनपुटची गरज न पडता."}, answer:false, explain:{en:"Myth! Software can flag values, but doctors still interpret what those values genuinely mean for that specific patient's situation.",hi:"मिथक! सॉफ्टवेयर वैल्यू को फ़्लैग कर सकता है, लेकिन डॉक्टर अभी भी व्याख्या करते हैं कि उन वैल्यू का उस खास मरीज़ की स्थिति के लिए वाकई क्या मतलब है।",mr:"मिथक! सॉफ्टवेअर मूल्यं फ्लॅग करू शकतं, पण डॉक्टर तरीही त्या मूल्यांचा त्या विशिष्ट रुग्णाच्या परिस्थितीसाठी खरंच काय अर्थ आहे याचा अर्थ लावतात."} }
            ]}}
          ]},
          { label: "Emergency Triage",
            bonusAssignment: {
              title: { en: "Triage Priority List", hi: "ट्राएज प्राथमिकता सूची", mr: "ट्रायेज प्राधान्य यादी" },
              prompt: { en: "List 4 patients with different symptoms and put them in order of who should be seen first. Explain your reasoning. Take a photo!",
                        hi: "अलग-अलग लक्षणों वाले 4 मरीज़ों की सूची बनाओ और उन्हें इस क्रम में रखो कि किसे पहले देखा जाना चाहिए। अपनी सोच समझाओ। फोटो लो!",
                        mr: "वेगवेगळ्या लक्षणांसह 4 रुग्णांची यादी करा आणि कोणाला आधी बघावं याच्या क्रमाने ठेवा. तुमचं तर्क समजावून सांगा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🚨", title: "Triage the Waiting Room", mentorVisual: "🚨",
              mentorIntro: {
                en: "In a busy ER, you often have multiple patients needing attention at once. Real triage means making tough calls about who needs help first. Let's practice.",
                hi: "एक व्यस्त ईआर में, तुम्हारे पास अक्सर एक साथ कई मरीज़ होते हैं जिन्हें ध्यान चाहिए। असली ट्राएज का मतलब है कठिन फ़ैसले लेना कि किसे पहले मदद चाहिए। चलो अभ्यास करते हैं।",
                mr: "व्यस्त ईआरमध्ये, तुमच्याकडे अनेकदा एकाच वेळी लक्ष हवं असणारे अनेक रुग्ण असतात. खरं ट्रायेज म्हणजे कोणाला आधी मदत हवी याबद्दल कठीण निर्णय घेणं. चला सराव करूया."
              },
              data: { steps: [
              {
                situation: { en:"Two patients arrive at the same time: one has a badly sprained ankle and is in visible pain, the other seems calm but mentions chest tightness that started 20 minutes ago. Who do you see first?",
                             hi:"दो मरीज़ एक ही समय पर पहुँचते हैं: एक का टखना बुरी तरह मुड़ा हुआ है और दिखने में दर्द में है, दूसरा शांत लगता है लेकिन 20 मिनट पहले शुरू हुई सीने में जकड़न का ज़िक्र करता है। तुम पहले किसे देखते हो?",
                             mr:"दोन रुग्ण एकाच वेळी येतात: एकाचा घोटा वाईटरित्या मुरगळलेला आहे आणि दिसण्यात वेदनेत आहे, दुसरा शांत दिसतो पण 20 मिनिटांपूर्वी सुरू झालेल्या छातीत घट्टपणाचा उल्लेख करतो. तुम्ही आधी कोणाला बघता?" },
                choices: [
                  { label:{en:"See the patient with chest tightness first, despite them appearing calm", hi:"सीने में जकड़न वाले मरीज़ को पहले देखो, भले ही वे शांत दिखें", mr:"छातीत घट्टपणा असलेल्या रुग्णाला आधी बघा, जरी ते शांत दिसत असले तरी"}, quality:"best",
                    outcome:{en:"Correct triage instinct! Chest tightness can signal something serious, even without visible distress — this needs priority over a painful but non-urgent ankle sprain.",hi:"सही ट्राएज सोच! सीने में जकड़न कुछ गंभीर का संकेत हो सकती है, बिना दिखने वाली परेशानी के भी — इसे एक दर्दनाक लेकिन गैर-अत्यावश्यक टखने की मोच पर प्राथमिकता चाहिए।",mr:"बरोबर ट्रायेज अंतःप्रेरणा! छातीतील घट्टपणा काहीतरी गंभीर असल्याचं सूचित करू शकतो, दृश्य त्रासाशिवायही — याला वेदनादायक पण तातडीचं नसलेल्या घोट्याच्या मुरगळण्यापेक्षा प्राधान्य हवं."} },
                  { label:{en:"See the patient in visible pain first, since their distress is obvious", hi:"दिखने वाले दर्द में मरीज़ को पहले देखो, क्योंकि उनकी परेशानी साफ़ है", mr:"दृश्य वेदनेत असलेल्या रुग्णाला आधी बघा, कारण त्यांचा त्रास स्पष्ट आहे"}, quality:"risky",
                    outcome:{en:"This could be dangerous. Visible pain isn't always the best indicator of urgency — chest tightness, even without obvious distress, can signal something needing immediate attention.",hi:"यह खतरनाक हो सकता है। दिखने वाला दर्द हमेशा तात्कालिकता का सबसे अच्छा संकेतक नहीं है — सीने में जकड़न, बिना साफ़ परेशानी के भी, कुछ ऐसा संकेत दे सकती है जिसे तुरंत ध्यान चाहिए।",mr:"हे धोकादायक असू शकतं. दृश्य वेदना नेहमी तातडीचं सर्वोत्तम सूचक नाही — छातीतील घट्टपणा, स्पष्ट त्रासाशिवायही, तात्काळ लक्ष हवं असणाऱ्या गोष्टीचं सूचक असू शकतो."} }
                ]
              },
              {
                situation: { en:"You check the chest-tightness patient — their vitals show an elevated heart rate. Meanwhile, the ankle patient is asking loudly why they're waiting. What's your approach?",
                             hi:"तुम सीने में जकड़न वाले मरीज़ की जाँच करते हो — उनके वाइटल्स बढ़ी हुई हृदय गति दिखाते हैं। इस बीच, टखने वाला मरीज़ ज़ोर से पूछ रहा है कि वे क्यों इंतज़ार कर रहे हैं। तुम्हारा तरीका क्या है?",
                             mr:"तुम्ही छातीतील घट्टपणा असलेल्या रुग्णाला तपासता — त्यांचे व्हायटल्स वाढलेली हृदयगती दाखवतात. दरम्यान, घोट्याचा रुग्ण मोठ्याने विचारत आहे की ते का वाट बघत आहेत. तुमची पद्धत काय आहे?" },
                choices: [
                  { label:{en:"Continue prioritizing the chest-tightness patient's workup, while having staff reassure the ankle patient it won't be long", hi:"सीने में जकड़न वाले मरीज़ की जांच को प्राथमिकता देना जारी रखो, जबकि स्टाफ़ टखने वाले मरीज़ को आश्वस्त करे कि ज़्यादा देर नहीं होगी", mr:"छातीतील घट्टपणा असलेल्या रुग्णाच्या तपासणीला प्राधान्य देणं सुरू ठेवा, स्टाफने घोट्याच्या रुग्णाला जास्त वेळ लागणार नाही याची खात्री देत"}, quality:"best",
                    outcome:{en:"Well handled! Sticking with correct clinical priority while still addressing the other patient's concerns through communication is exactly the balance real triage requires.",hi:"अच्छे से संभाला! सही क्लिनिकल प्राथमिकता के साथ बने रहते हुए बातचीत के ज़रिए दूसरे मरीज़ की चिंताओं को संबोधित करना बिल्कुल वही संतुलन है जो असली ट्राएज चाहता है।",mr:"चांगलं हाताळलं! योग्य क्लिनिकल प्राधान्यासोबत राहत संवादाद्वारे इतर रुग्णाच्या चिंता सोडवणं हेच खरं संतुलन आहे जे खरं ट्रायेज मागतं."} },
                  { label:{en:"Switch to seeing the ankle patient since they're being vocal about waiting", hi:"टखने वाले मरीज़ को देखने पर स्विच करो क्योंकि वे इंतज़ार के बारे में मुखर हो रहे हैं", mr:"घोट्याच्या रुग्णाकडे बघायला स्विच करा कारण ते वाट बघण्याबद्दल आवाज उठवत आहेत"}, quality:"risky",
                    outcome:{en:"This could be a mistake. Switching priority based on who's louder, rather than actual clinical urgency, could delay care for the more serious case.",hi:"यह एक गलती हो सकती है। असली क्लिनिकल तात्कालिकता के बजाय कौन ज़्यादा ज़ोर से बोल रहा है इसके आधार पर प्राथमिकता बदलना, ज़्यादा गंभीर मामले के लिए देखभाल में देरी कर सकता है।",mr:"ही एक चूक असू शकते. खऱ्या क्लिनिकल तातडीऐवजी कोण जास्त आवाज करत आहे यावर आधारित प्राधान्य बदलल्याने अधिक गंभीर केससाठी काळजीला उशीर होऊ शकतो."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🚨", title: "Explore triage principles", mentorVisual: "🚨",
              mentorIntro: {
                en: "Let's explore the real principles behind emergency triage decisions.",
                hi: "चलो आपातकालीन ट्राएज फ़ैसलों के पीछे के असली सिद्धांतों को एक्सप्लोर करते हैं।",
                mr: "चला आणीबाणी ट्रायेज निर्णयांमागील खरे तत्त्वं एक्सप्लोर करूया."
              },
              data: { visual: "🚨", hotspots: [
              { label:{en:"Hidden urgency",hi:"छिपी हुई तात्कालिकता",mr:"लपलेली तातडी"}, fact:{en:"Some of the most urgent cases don't look dramatic — quiet chest pain can be more dangerous than a loud, painful injury!"} },
              { label:{en:"Systematic checking",hi:"व्यवस्थित जांच",mr:"पद्धतशीर तपासणी"}, fact:{en:"Triage nurses use systematic checklists, not just gut feeling, to sort patients by real urgency!"} },
              { label:{en:"Communication under pressure",hi:"दबाव में बातचीत",mr:"दबावाखाली संवाद"}, fact:{en:"Managing patients' frustration while sticking to correct priorities is a real skill emergency staff must build!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Emergency triage quiz",
              desc: { en:"A real quiz on how emergency triage decisions are made under pressure.", hi:"दबाव में आपातकालीन ट्राएज फ़ैसले कैसे लिए जाते हैं, इस पर एक असली क्विज़।", mr:"दबावाखाली आणीबाणी ट्रायेज निर्णय कसे घेतले जातात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Staying calm under pressure",
              desc: { en:"How do you think you'd handle staying calm and clear-headed while multiple people need help at once? What would help you manage that pressure?", hi:"तुम्हें क्या लगता है जब कई लोगों को एक साथ मदद चाहिए हो तो तुम शांत और स्पष्ट-दिमाग़ कैसे रहोगे? इस दबाव को संभालने में तुम्हें क्या मदद करेगा?", mr:"अनेक लोकांना एकाच वेळी मदत हवी असताना तुम्ही शांत आणि स्पष्ट डोक्याने कसे राहाल असं तुम्हाला वाटतं? तो दबाव हाताळण्यास तुम्हाला काय मदत करेल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Triage Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced triage fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस ट्राएज तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत ट्रायेज तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Color-coded systems?",hi:"रंग-कोडित सिस्टम?",mr:"रंग-कोडित यंत्रणा?"}, back:{en:"Many ERs use color-coded triage systems (like red, yellow, green) to quickly communicate urgency across the whole team! 🔴🟡🟢",hi:"कई ईआर तेज़ी से पूरी टीम में तात्कालिकता बताने के लिए रंग-कोडित ट्राएज सिस्टम (जैसे लाल, पीला, हरा) इस्तेमाल करते हैं! 🔴🟡🟢",mr:"अनेक ईआर संपूर्ण टीममध्ये त्वरित तातडी सांगण्यासाठी रंग-कोडित ट्रायेज यंत्रणा (जसं लाल, पिवळा, हिरवा) वापरतात! 🔴🟡🟢"} },
              { front:{en:"Retriage happens?",hi:"रीट्राएज होता है?",mr:"रीट्रायेज होतं?"}, back:{en:"Patients are often re-evaluated while waiting, since their condition can change — triage isn't a one-time decision! 🔄",hi:"मरीज़ों का अक्सर इंतज़ार के दौरान पुनर्मूल्यांकन होता है, क्योंकि उनकी स्थिति बदल सकती है — ट्राएज एक बार का फ़ैसला नहीं है! 🔄",mr:"रुग्णांचं अनेकदा वाट बघताना पुनर्मूल्यांकन होतं, कारण त्यांची स्थिती बदलू शकते — ट्रायेज एकदाचा निर्णय नाही! 🔄"} },
              { front:{en:"Triage training is ongoing?",hi:"ट्राएज प्रशिक्षण चल रहा है?",mr:"ट्रायेज प्रशिक्षण सुरू आहे?"}, back:{en:"Emergency staff regularly practice triage scenarios through simulation, keeping their judgment sharp! 🎯",hi:"आपातकालीन स्टाफ़ सिमुलेशन के ज़रिए नियमित रूप से ट्राएज परिदृश्यों का अभ्यास करते हैं, अपने निर्णय को तेज़ रखते हुए! 🎯",mr:"आणीबाणी स्टाफ सिम्युलेशनद्वारे नियमितपणे ट्रायेज परिस्थितींचा सराव करतो, त्यांचा निर्णय तीक्ष्ण ठेवत! 🎯"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Triage or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your triage knowledge! Decide if each statement is true or a myth.",
                hi: "चलो ट्राएज के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला ट्रायेजच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"The patient who appears most visibly distressed is always the most medically urgent.",hi:"जो मरीज़ सबसे ज़्यादा दिखने में परेशान लगता है वह हमेशा सबसे ज़्यादा मेडिकली अत्यावश्यक होता है।",mr:"जो रुग्ण सर्वात जास्त दृश्यमानपणे त्रस्त दिसतो तो नेहमी सर्वात जास्त वैद्यकीयदृष्ट्या तातडीचा असतो."}, answer:false, explain:{en:"Myth! Some urgent conditions, like certain heart issues, don't always look dramatic — visible distress isn't the only indicator of urgency.",hi:"मिथक! कुछ अत्यावश्यक स्थितियाँ, जैसे कुछ दिल की समस्याएँ, हमेशा नाटकीय नहीं दिखतीं — दिखने वाली परेशानी तात्कालिकता का एकमात्र संकेतक नहीं है।",mr:"मिथक! काही तातडीच्या स्थिती, जसं काही हृदयाच्या समस्या, नेहमी नाट्यमय दिसत नाहीत — दृश्य त्रास हे तातडीचं एकमेव सूचक नाही."} },
              { text:{en:"Patients waiting in the ER are sometimes re-evaluated since their condition can change.",hi:"ईआर में इंतज़ार कर रहे मरीज़ों का कभी-कभी पुनर्मूल्यांकन होता है क्योंकि उनकी स्थिति बदल सकती है।",mr:"ईआरमध्ये वाट बघणाऱ्या रुग्णांचं कधीकधी पुनर्मूल्यांकन होतं कारण त्यांची स्थिती बदलू शकते."}, answer:true, explain:{en:"True! Triage is an ongoing process — patients can be re-evaluated as their condition evolves while waiting.",hi:"सच! ट्राएज एक चल रही प्रक्रिया है — इंतज़ार के दौरान मरीज़ों की स्थिति विकसित होने पर उनका पुनर्मूल्यांकन हो सकता है।",mr:"खरं! ट्रायेज ही एक सुरू असलेली प्रक्रिया आहे — वाट बघताना रुग्णांची स्थिती विकसित होताना त्यांचं पुनर्मूल्यांकन होऊ शकतं."} },
              { text:{en:"Once a patient is triaged, their priority level can never be changed.",hi:"एक बार जब एक मरीज़ को ट्राएज कर दिया जाता है, उनका प्राथमिकता स्तर कभी नहीं बदला जा सकता।",mr:"एकदा रुग्णाला ट्रायेज केलं की, त्यांची प्राधान्य पातळी कधीच बदलली जाऊ शकत नाही."}, answer:false, explain:{en:"Myth! Priority levels can and do change as a patient's condition is reassessed over time.",hi:"मिथक! प्राथमिकता स्तर बदल सकते हैं और समय के साथ मरीज़ की स्थिति का पुनर्मूल्यांकन होने पर बदलते हैं।",mr:"मिथक! प्राधान्य पातळी बदलू शकतात आणि कालांतराने रुग्णाच्या स्थितीचं पुनर्मूल्यांकन होताना बदलतातही."} }
            ]}}
          ]},
          { label: "Medical Ethics",
            bonusAssignment: {
              title: { en: "Ethics Principle Explainer", hi: "नैतिकता सिद्धांत समझाने वाला", mr: "नैतिकता तत्त्व समजावणारं" },
              prompt: { en: "Pick one medical ethics principle (like informed consent or confidentiality) and write 3-4 sentences explaining why it matters. Take a photo!",
                        hi: "एक मेडिकल एथिक्स सिद्धांत चुनो (जैसे सूचित सहमति या गोपनीयता) और 3-4 वाक्य लिखो कि यह क्यों मायने रखता है। फोटो लो!",
                        mr: "एक वैद्यकीय नैतिकता तत्त्व निवडा (जसं माहितीपूर्ण संमती किंवा गोपनीयता) आणि ते का महत्त्वाचं आहे याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "⚖️", title: "Navigate an Ethical Situation", mentorVisual: "⚖️",
              mentorIntro: {
                en: "Medicine involves real ethical principles, not just medical knowledge. Let's work through a situation that tests those principles.",
                hi: "चिकित्सा में असली नैतिक सिद्धांत शामिल हैं, सिर्फ़ मेडिकल ज्ञान नहीं। चलो एक ऐसी स्थिति से गुज़रते हैं जो उन सिद्धांतों को परखती है।",
                mr: "वैद्यकशास्त्रात खरी नैतिक तत्त्वं समाविष्ट आहेत, फक्त वैद्यकीय ज्ञान नाही. चला अशा परिस्थितीतून जाऊया जी ती तत्त्वं तपासते."
              },
              data: { steps: [
              {
                situation: { en:"A patient's family member asks you to share details about the patient's condition, but the patient hasn't given permission to share that information with them. What do you do?",
                             hi:"एक मरीज़ के परिवार का सदस्य तुमसे मरीज़ की स्थिति के बारे में जानकारी साझा करने के लिए कहता है, लेकिन मरीज़ ने उनके साथ वह जानकारी साझा करने की अनुमति नहीं दी है। तुम क्या करते हो?",
                             mr:"रुग्णाच्या कुटुंबातील सदस्य तुम्हाला रुग्णाच्या स्थितीबद्दल माहिती सांगायला सांगतो, पण रुग्णाने त्यांच्यासोबत ती माहिती सांगण्याची परवानगी दिलेली नाही. तुम्ही काय करता?" },
                choices: [
                  { label:{en:"Respectfully explain that you can't share details without the patient's permission, due to confidentiality", hi:"आदरपूर्वक समझाओ कि गोपनीयता के कारण तुम मरीज़ की अनुमति के बिना जानकारी साझा नहीं कर सकते", mr:"आदराने समजावून सांगा की गोपनीयतेमुळे तुम्ही रुग्णाच्या परवानगीशिवाय माहिती सांगू शकत नाही"}, quality:"best",
                    outcome:{en:"Correct approach! Patient confidentiality is a core ethical and legal principle — even close family members don't automatically have a right to medical details without the patient's consent.",hi:"सही तरीका! मरीज़ की गोपनीयता एक मुख्य नैतिक और कानूनी सिद्धांत है — यहाँ तक कि करीबी परिवार के सदस्यों को भी मरीज़ की सहमति के बिना मेडिकल जानकारी का अधिकार स्वतः नहीं होता।",mr:"योग्य पद्धत! रुग्णाची गोपनीयता हे एक मुख्य नैतिक आणि कायदेशीर तत्त्व आहे — अगदी जवळचे कुटुंब सदस्यही रुग्णाच्या संमतीशिवाय वैद्यकीय तपशीलांचा हक्क आपोआप ठेवत नाहीत."} },
                  { label:{en:"Share the basic details since it's a close family member asking", hi:"बुनियादी जानकारी साझा करो क्योंकि यह एक करीबी परिवार का सदस्य पूछ रहा है", mr:"मूलभूत तपशील सांगा कारण एक जवळचा कुटुंब सदस्य विचारत आहे"}, quality:"risky",
                    outcome:{en:"This breaks confidentiality without the patient's consent — even with good intentions, sharing details without permission violates a core ethical principle in medicine.",hi:"यह मरीज़ की सहमति के बिना गोपनीयता तोड़ता है — अच्छे इरादों के साथ भी, बिना अनुमति के जानकारी साझा करना चिकित्सा में एक मुख्य नैतिक सिद्धांत का उल्लंघन करता है।",mr:"हे रुग्णाच्या संमतीशिवाय गोपनीयता तोडतं — चांगल्या हेतूंसहही, परवानगीशिवाय तपशील सांगणं वैद्यकशास्त्रातील एका मुख्य नैतिक तत्त्वाचं उल्लंघन करतं."} }
                ]
              },
              {
                situation: { en:"The family member becomes upset and says they have a 'right to know' since they're paying for the treatment. How do you respond?",
                             hi:"परिवार का सदस्य परेशान हो जाता है और कहता है कि उन्हें 'जानने का अधिकार' है क्योंकि वे इलाज के लिए पैसे दे रहे हैं। तुम कैसे जवाब देते हो?",
                             mr:"कुटुंब सदस्य अस्वस्थ होतो आणि म्हणतो की त्यांना 'जाणून घेण्याचा हक्क' आहे कारण ते उपचारासाठी पैसे देत आहेत. तुम्ही कसं उत्तर देता?" },
                choices: [
                  { label:{en:"Empathetically acknowledge their concern, but explain that confidentiality applies regardless of who's paying, and suggest asking the patient directly", hi:"सहानुभूतिपूर्वक उनकी चिंता स्वीकार करो, लेकिन समझाओ कि गोपनीयता इस बात की परवाह किए बिना लागू होती है कि कौन भुगतान कर रहा है, और मरीज़ से सीधे पूछने का सुझाव दो", mr:"सहानुभूतीने त्यांची काळजी मान्य करा, पण समजावून सांगा की कोण पैसे देत आहे याची पर्वा न करता गोपनीयता लागू होते, आणि रुग्णाला थेट विचारण्याचा सल्ला द्या"}, quality:"best",
                    outcome:{en:"Well handled! Acknowledging their feelings while still holding the ethical line, and redirecting them to the patient directly, respects both the family's concern and the patient's rights.",hi:"अच्छे से संभाला! नैतिक रेखा पर बने रहते हुए उनकी भावनाओं को स्वीकार करना, और उन्हें सीधे मरीज़ की ओर पुनर्निर्देशित करना, परिवार की चिंता और मरीज़ के अधिकारों दोनों का सम्मान करता है।",mr:"चांगलं हाताळलं! नैतिक रेषेवर राहत त्यांच्या भावना मान्य करणं, आणि त्यांना थेट रुग्णाकडे पुनर्निर्देशित करणं, कुटुंबाची काळजी आणि रुग्णाचे हक्क दोन्हींचा आदर करतं."} },
                  { label:{en:"Give in and share some details since they seem genuinely upset", hi:"हार मान लो और कुछ जानकारी साझा करो क्योंकि वे वाकई परेशान लगते हैं", mr:"हार माना आणि काही तपशील सांगा कारण ते खरंच अस्वस्थ दिसतात"}, quality:"risky",
                    outcome:{en:"Giving in under emotional pressure still breaks the patient's confidentiality — paying for treatment doesn't override the patient's own right to privacy about their health information.",hi:"भावनात्मक दबाव में हार मानना अभी भी मरीज़ की गोपनीयता तोड़ता है — इलाज के लिए भुगतान करना उनके स्वास्थ्य जानकारी के बारे में मरीज़ के अपने गोपनीयता अधिकार को रद्द नहीं करता।",mr:"भावनिक दबावाखाली हार मानणं तरीही रुग्णाची गोपनीयता तोडतं — उपचारासाठी पैसे देणं त्यांच्या आरोग्य माहितीबद्दल रुग्णाच्या स्वतःच्या गोपनीयता हक्काला रद्द करत नाही."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "⚖️", title: "Explore core ethical principles", mentorVisual: "⚖️",
              mentorIntro: {
                en: "Let's explore some of the core ethical principles that guide medical practice everywhere.",
                hi: "चलो कुछ मुख्य नैतिक सिद्धांतों को एक्सप्लोर करते हैं जो हर जगह मेडिकल प्रैक्टिस का मार्गदर्शन करते हैं।",
                mr: "चला काही मुख्य नैतिक तत्त्वं एक्सप्लोर करूया जी सर्वत्र वैद्यकीय प्रॅक्टिसला मार्गदर्शन करतात."
              },
              data: { visual: "⚖️", hotspots: [
              { label:{en:"Confidentiality",hi:"गोपनीयता",mr:"गोपनीयता"}, fact:{en:"Keeping patient information private, sharing it only with their permission, is one of medicine's oldest ethical principles!"} },
              { label:{en:"Informed consent",hi:"सूचित सहमति",mr:"माहितीपूर्ण संमती"}, fact:{en:"Patients have the right to fully understand risks and benefits before agreeing to any treatment!"} },
              { label:{en:"Fairness",hi:"निष्पक्षता",mr:"निष्पक्षता"}, fact:{en:"Doctors are ethically expected to treat all patients fairly, regardless of background!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Medical ethics quiz",
              desc: { en:"A real quiz on core ethical principles that guide medical practice.", hi:"मेडिकल प्रैक्टिस का मार्गदर्शन करने वाले मुख्य नैतिक सिद्धांतों पर एक असली क्विज़।", mr:"वैद्यकीय प्रॅक्टिसला मार्गदर्शन करणाऱ्या मुख्य नैतिक तत्त्वांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Holding an ethical line",
              desc: { en:"How do you think it would feel to hold an ethical principle firm, even when someone is upset with you about it? Why does that matter?", hi:"तुम्हें क्या लगता है एक नैतिक सिद्धांत पर दृढ़ रहना कैसा महसूस होगा, तब भी जब कोई इसके बारे में तुमसे परेशान हो? यह क्यों मायने रखता है?", mr:"कोणी तुमच्यावर याबद्दल अस्वस्थ असतानाही एका नैतिक तत्त्वावर ठाम राहणं कसं वाटेल असं तुम्हाला वाटतं? हे का महत्त्वाचं आहे?" } },
            { engine: "flip-cards", icon: "🃏", title: "Ethics Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more thoughtful ethics fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा विचारशील एथिक्स तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक विचारशील नैतिकता तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Ancient roots?",hi:"प्राचीन जड़ें?",mr:"प्राचीन मुळं?"}, back:{en:"Medical ethics has roots going back thousands of years — the famous 'Hippocratic Oath' is over 2,000 years old! 📜",hi:"मेडिकल एथिक्स की जड़ें हज़ारों साल पुरानी हैं — प्रसिद्ध 'हिप्पोक्रेटिक ओथ' 2,000 साल से भी ज़्यादा पुरानी है! 📜",mr:"वैद्यकीय नैतिकतेची मुळं हजारो वर्षं जुनी आहेत — प्रसिद्ध 'हिप्पोक्रॅटिक ओथ' 2,000 वर्षांहूनही जुनी आहे! 📜"} },
              { front:{en:"Ethics committees exist?",hi:"एथिक्स कमेटी मौजूद हैं?",mr:"नैतिकता समित्या अस्तित्वात आहेत?"}, back:{en:"Many hospitals have ethics committees that help doctors think through especially difficult situations together! 👥",hi:"कई अस्पतालों में एथिक्स कमेटी होती हैं जो डॉक्टरों को विशेष रूप से कठिन स्थितियों के बारे में एक साथ सोचने में मदद करती हैं! 👥",mr:"अनेक रुग्णालयांमध्ये नैतिकता समित्या असतात ज्या डॉक्टरांना विशेषतः कठीण परिस्थितींबद्दल एकत्र विचार करण्यास मदत करतात! 👥"} },
              { front:{en:"Ethics is taught formally?",hi:"एथिक्स औपचारिक रूप से पढ़ाई जाती है?",mr:"नैतिकता औपचारिकपणे शिकवली जाते?"}, back:{en:"Medical schools have entire courses dedicated just to teaching ethical reasoning, not just medical facts! 🎓",hi:"मेडिकल स्कूलों में केवल नैतिक तर्क सिखाने के लिए समर्पित पूरे कोर्स होते हैं, सिर्फ़ मेडिकल तथ्य नहीं! 🎓",mr:"वैद्यकीय शाळांमध्ये फक्त नैतिक तर्क शिकवण्यासाठी समर्पित संपूर्ण अभ्यासक्रम असतात, फक्त वैद्यकीय तथ्यं नाही! 🎓"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Medical Ethics or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your medical ethics knowledge! Decide if each statement is true or a myth.",
                hi: "चलो मेडिकल एथिक्स के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला वैद्यकीय नैतिकतेच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A family member paying for treatment automatically has the right to see the patient's medical details.",hi:"इलाज के लिए भुगतान करने वाले परिवार के सदस्य को स्वतः ही मरीज़ की मेडिकल जानकारी देखने का अधिकार होता है।",mr:"उपचारासाठी पैसे देणाऱ्या कुटुंब सदस्याला आपोआप रुग्णाचे वैद्यकीय तपशील बघण्याचा हक्क असतो."}, answer:false, explain:{en:"Myth! Confidentiality applies regardless of who's paying — the patient's own consent is what matters.",hi:"मिथक! गोपनीयता इस बात की परवाह किए बिना लागू होती है कि कौन भुगतान कर रहा है — मरीज़ की अपनी सहमति ही मायने रखती है।",mr:"मिथक! कोण पैसे देत आहे याची पर्वा न करता गोपनीयता लागू होते — रुग्णाची स्वतःची संमती हीच महत्त्वाची असते."} },
              { text:{en:"Many hospitals have ethics committees to help with especially difficult decisions.",hi:"कई अस्पतालों में विशेष रूप से कठिन फ़ैसलों में मदद के लिए एथिक्स कमेटी होती हैं।",mr:"अनेक रुग्णालयांमध्ये विशेषतः कठीण निर्णयांसाठी मदत करण्यासाठी नैतिकता समित्या असतात."}, answer:true, explain:{en:"True! Ethics committees are a real, common resource in hospitals for navigating tough situations.",hi:"सच! एथिक्स कमेटी कठिन स्थितियों को नेविगेट करने के लिए अस्पतालों में एक असली, आम संसाधन हैं।",mr:"खरं! कठीण परिस्थितींमधून मार्ग काढण्यासाठी नैतिकता समित्या रुग्णालयांमध्ये एक खरं, सामान्य साधन आहेत."} },
              { text:{en:"Medical ethics is a completely modern idea with no historical roots.",hi:"मेडिकल एथिक्स एक पूरी तरह आधुनिक विचार है जिसकी कोई ऐतिहासिक जड़ें नहीं हैं।",mr:"वैद्यकीय नैतिकता ही एक पूर्णपणे आधुनिक कल्पना आहे ज्याला कोणतीही ऐतिहासिक मुळं नाहीत."}, answer:false, explain:{en:"Myth! Medical ethics has roots going back thousands of years, including the ancient Hippocratic Oath.",hi:"मिथक! मेडिकल एथिक्स की जड़ें हज़ारों साल पुरानी हैं, प्राचीन हिप्पोक्रेटिक ओथ सहित।",mr:"मिथक! वैद्यकीय नैतिकतेची मुळं हजारो वर्षं जुनी आहेत, प्राचीन हिप्पोक्रॅटिक ओथसह."} }
            ]}}
          ]},
          { label: "Research Study Design",
            bonusAssignment: {
              title: { en: "Design a Mini Study", hi: "एक मिनी स्टडी डिज़ाइन करो", mr: "एक मिनी अभ्यास डिझाइन करा" },
              prompt: { en: "Design a simple research question and study idea (like 'does more sleep improve test scores?'). Take a photo of your idea!",
                        hi: "एक साधा रिसर्च सवाल और स्टडी विचार डिज़ाइन करो (जैसे 'क्या ज़्यादा नींद टेस्ट स्कोर सुधारती है?')। अपने विचार की फोटो लो!",
                        mr: "एक साधा संशोधन प्रश्न आणि अभ्यास कल्पना डिझाइन करा (जसं 'जास्त झोपेमुळे परीक्षेचे गुण सुधारतात का?'). तुमच्या कल्पनेचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🔬", title: "Design a Fair Study", mentorVisual: "🔬",
              mentorIntro: {
                en: "Good research needs careful design to get trustworthy results. Let's work through designing a study.",
                hi: "अच्छी रिसर्च को भरोसेमंद नतीजे पाने के लिए सावधान डिज़ाइन चाहिए। चलो एक स्टडी डिज़ाइन करने से गुज़रते हैं।",
                mr: "चांगल्या संशोधनाला विश्वासार्ह निकाल मिळवण्यासाठी काळजीपूर्वक डिझाइन हवं. चला एक अभ्यास डिझाइन करण्यातून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"You want to test whether a new supplement helps people sleep better. You have 100 volunteers. How do you design the study?",
                             hi:"तुम टेस्ट करना चाहते हो कि क्या एक नया सप्लीमेंट लोगों को बेहतर सोने में मदद करता है। तुम्हारे पास 100 वालंटियर हैं। तुम स्टडी कैसे डिज़ाइन करते हो?",
                             mr:"तुम्हाला तपासायचं आहे की एक नवीन सप्लिमेंट लोकांना चांगली झोप घेण्यास मदत करतं का. तुमच्याकडे 100 स्वयंसेवक आहेत. तुम्ही अभ्यास कसा डिझाइन कराल?" },
                choices: [
                  { label:{en:"Randomly split volunteers into two groups — one gets the supplement, one gets a placebo, and compare results", hi:"वालंटियर को यादृच्छिक रूप से दो समूहों में बाँटो — एक को सप्लीमेंट मिलता है, एक को प्लेसीबो, और नतीजों की तुलना करो", mr:"स्वयंसेवकांना यादृच्छिकपणे दोन गटांत विभागा — एकाला सप्लिमेंट मिळतं, एकाला प्लासिबो, आणि निकालांची तुलना करा"}, quality:"best",
                    outcome:{en:"Excellent design! Random assignment to a supplement group versus a placebo group is the standard way to fairly test whether something actually works.",hi:"बेहतरीन डिज़ाइन! सप्लीमेंट समूह बनाम प्लेसीबो समूह के लिए यादृच्छिक असाइनमेंट यह निष्पक्ष रूप से टेस्ट करने का मानक तरीका है कि क्या कुछ असल में काम करता है।",mr:"उत्तम डिझाइन! सप्लिमेंट गट विरुद्ध प्लासिबो गटासाठी यादृच्छिक नियुक्ती हा एखादी गोष्ट खरंच काम करते का हे निष्पक्षपणे तपासण्याचा मानक मार्ग आहे."} },
                  { label:{en:"Give everyone the supplement and just ask if they slept better afterward", hi:"सबको सप्लीमेंट दो और बस पूछो कि क्या उन्हें बाद में बेहतर नींद आई", mr:"सर्वांना सप्लिमेंट द्या आणि नंतर त्यांना चांगली झोप आली का ते फक्त विचारा"}, quality:"risky",
                    outcome:{en:"This design has a real problem — without a comparison group, you can't tell if any improvement was actually due to the supplement, or just people expecting it to work.",hi:"इस डिज़ाइन में एक असली समस्या है — बिना तुलना समूह के, तुम यह नहीं बता सकते कि कोई सुधार असल में सप्लीमेंट की वजह से था, या बस लोगों की उम्मीद थी कि यह काम करेगा।",mr:"या डिझाइनमध्ये एक खरी समस्या आहे — तुलना गटाशिवाय, तुम्ही सांगू शकत नाही की कोणतीही सुधारणा खरंच सप्लिमेंटमुळे होती, की फक्त लोकांची अपेक्षा होती की ते काम करेल."} }
                ]
              },
              {
                situation: { en:"Your results show the supplement group slept slightly better. A colleague suggests publishing this as proof the supplement works. What do you consider?",
                             hi:"तुम्हारे नतीजे दिखाते हैं कि सप्लीमेंट समूह थोड़ा बेहतर सोया। एक सहकर्मी सुझाव देता है कि इसे सप्लीमेंट के काम करने के प्रमाण के रूप में प्रकाशित करो। तुम क्या मानते हो?",
                             mr:"तुमचे निकाल दाखवतात की सप्लिमेंट गट थोडी चांगली झोपली. एक सहकारी सुचवतो की सप्लिमेंट काम करतं याचा पुरावा म्हणून हे प्रकाशित करा. तुम्ही काय विचारात घेता?" },
                choices: [
                  { label:{en:"Consider whether the difference is large enough to be meaningful, and whether the study should be repeated before strong claims", hi:"विचार करो कि क्या अंतर मायने रखने के लिए काफ़ी बड़ा है, और क्या मज़बूत दावों से पहले स्टडी को दोहराया जाना चाहिए", mr:"विचार करा की फरक अर्थपूर्ण असण्याइतका मोठा आहे का, आणि जोरदार दाव्यांआधी अभ्यास पुन्हा करावा का"}, quality:"best",
                    outcome:{en:"Excellent scientific thinking! Real researchers consider whether results are statistically meaningful and often replicate studies before making strong claims — one study rarely proves something conclusively.",hi:"बेहतरीन वैज्ञानिक सोच! असली शोधकर्ता विचार करते हैं कि क्या नतीजे सांख्यिकीय रूप से मायने रखते हैं और मज़बूत दावे करने से पहले अक्सर स्टडी को दोहराते हैं — एक स्टडी शायद ही कभी किसी चीज़ को निर्णायक रूप से साबित करती है।",mr:"उत्तम वैज्ञानिक विचार! खरे संशोधक विचार करतात की निकाल सांख्यिकीयदृष्ट्या अर्थपूर्ण आहेत का आणि जोरदार दावे करण्याआधी अनेकदा अभ्यासाची पुनरावृत्ती करतात — एक अभ्यास क्वचितच एखादी गोष्ट निर्णायकपणे सिद्ध करतो."} },
                  { label:{en:"Publish immediately since the results look promising", hi:"तुरंत प्रकाशित करो क्योंकि नतीजे आशाजनक लगते हैं", mr:"लगेच प्रकाशित करा कारण निकाल आशादायक दिसतात"}, quality:"risky",
                    outcome:{en:"This could be premature. A single study with a small difference doesn't automatically prove something works — rushing to publish strong claims can mislead people.",hi:"यह जल्दबाज़ी हो सकती है। छोटे अंतर वाली एक अकेली स्टडी स्वतः यह साबित नहीं करती कि कुछ काम करता है — मज़बूत दावों को प्रकाशित करने में जल्दबाज़ी लोगों को गुमराह कर सकती है।",mr:"हे घाईचं असू शकतं. लहान फरक असलेला एकच अभ्यास आपोआप सिद्ध करत नाही की काहीतरी काम करतं — जोरदार दावे प्रकाशित करण्याची घाई लोकांची दिशाभूल करू शकते."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔬", title: "Explore good study design", mentorVisual: "🔬",
              mentorIntro: {
                en: "Let's explore what makes a research study genuinely trustworthy.",
                hi: "चलो एक्सप्लोर करते हैं कि एक रिसर्च स्टडी को वाकई भरोसेमंद क्या बनाता है।",
                mr: "चला एक्सप्लोर करूया की एक संशोधन अभ्यास खरंच विश्वासार्ह काय बनवतो."
              },
              data: { visual: "🔬", hotspots: [
              { label:{en:"Comparison groups",hi:"तुलना समूह",mr:"तुलना गट"}, fact:{en:"Good studies compare a treatment group to a similar group that doesn't get it, isolating what's really causing any effect!"} },
              { label:{en:"Sample size",hi:"नमूना आकार",mr:"नमुना आकार"}, fact:{en:"Bigger, more diverse groups of study participants generally make results more trustworthy!"} },
              { label:{en:"Repeating studies",hi:"स्टडी दोहराना",mr:"अभ्यासाची पुनरावृत्ती"}, fact:{en:"Scientists trust findings much more once other researchers can repeat the study and get similar results!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Research study design quiz",
              desc: { en:"A real quiz on what makes medical research studies trustworthy and well-designed.", hi:"मेडिकल रिसर्च स्टडी को भरोसेमंद और अच्छी तरह से डिज़ाइन किया हुआ क्या बनाता है, इस पर एक असली क्विज़।", mr:"वैद्यकीय संशोधन अभ्यास विश्वासार्ह आणि नीट डिझाइन केलेले काय बनवतं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Patience in science",
              desc: { en:"Why do you think good research often takes a long time and multiple studies, rather than one quick experiment giving a final answer?", hi:"तुम्हें क्यों लगता है कि अच्छी रिसर्च में अक्सर लंबा समय और कई स्टडी लगती हैं, एक त्वरित प्रयोग के बजाय जो अंतिम जवाब दे?", mr:"चांगल्या संशोधनाला अनेकदा जास्त वेळ आणि अनेक अभ्यास का लागतात, एक जलद प्रयोग जो अंतिम उत्तर देतो त्याऐवजी, असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Study Design Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced research study fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस रिसर्च स्टडी तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत संशोधन अभ्यास तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Double-blind studies?",hi:"डबल-ब्लाइंड स्टडी?",mr:"डबल-ब्लाइंड अभ्यास?"}, back:{en:"In 'double-blind' studies, neither the patient nor the researcher knows who got the real treatment — this helps prevent bias! 👁️",hi:"'डबल-ब्लाइंड' स्टडी में, न तो मरीज़ और न ही शोधकर्ता जानते हैं कि किसे असली इलाज मिला — यह पूर्वाग्रह को रोकने में मदद करता है! 👁️",mr:"'डबल-ब्लाइंड' अभ्यासात, ना रुग्ण ना संशोधकाला माहीत असतं की कोणाला खरा उपचार मिळाला — हे पूर्वग्रह रोखण्यास मदत करतं! 👁️"} },
              { front:{en:"Peer review process?",hi:"पीयर रिव्यू प्रक्रिया?",mr:"पीअर रिव्ह्यू प्रक्रिया?"}, back:{en:"Before publishing, other scientists review a study's methods and results — this is called peer review! 📝",hi:"प्रकाशित करने से पहले, अन्य वैज्ञानिक एक स्टडी के तरीकों और नतीजों की समीक्षा करते हैं — इसे पीयर रिव्यू कहते हैं! 📝",mr:"प्रकाशित करण्याआधी, इतर शास्त्रज्ञ एका अभ्यासाच्या पद्धती आणि निकालांचं पुनरावलोकन करतात — याला पीअर रिव्ह्यू म्हणतात! 📝"} },
              { front:{en:"Sample size matters a lot?",hi:"नमूना आकार बहुत मायने रखता है?",mr:"नमुना आकार खूप महत्त्वाचा आहे?"}, back:{en:"A study with only 10 people is much less trustworthy than one with 10,000 — bigger samples reduce the chance results were just luck! 📊",hi:"केवल 10 लोगों वाली एक स्टडी 10,000 वाली से कहीं कम भरोसेमंद है — बड़े नमूने इस संभावना को कम करते हैं कि नतीजे बस संयोग थे! 📊",mr:"फक्त 10 लोकांचा अभ्यास 10,000 लोकांच्या अभ्यासापेक्षा खूप कमी विश्वासार्ह आहे — मोठे नमुने निकाल फक्त नशीब असण्याची शक्यता कमी करतात! 📊"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Study Design or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your research study knowledge! Decide if each statement is true or a myth.",
                hi: "चलो रिसर्च स्टडी के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला संशोधन अभ्यासाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A single study with promising results is always enough proof that a treatment works.",hi:"आशाजनक नतीजों वाली एक अकेली स्टडी हमेशा इस बात का काफ़ी सबूत है कि एक इलाज काम करता है।",mr:"आशादायक निकालांसह एकच अभ्यास नेहमी उपचार काम करतो याचा पुरेसा पुरावा आहे."}, answer:false, explain:{en:"Myth! Scientists usually want to see results repeated across multiple studies before making strong claims.",hi:"मिथक! वैज्ञानिक आमतौर पर मज़बूत दावे करने से पहले कई स्टडी में दोहराए गए नतीजे देखना चाहते हैं।",mr:"मिथक! शास्त्रज्ञ सहसा जोरदार दावे करण्याआधी अनेक अभ्यासांमध्ये पुनरावृत्ती झालेले निकाल बघू इच्छितात."} },
              { text:{en:"Comparing a treatment group to a similar group without the treatment helps isolate real effects.",hi:"इलाज समूह की तुलना बिना इलाज वाले समान समूह से करना असली प्रभावों को अलग करने में मदद करता है।",mr:"उपचार गटाची तुलना उपचाराशिवाय समान गटाशी केल्याने खरे परिणाम वेगळे करण्यास मदत होते."}, answer:true, explain:{en:"True! Comparison groups are essential for figuring out what's genuinely causing an effect.",hi:"सच! तुलना समूह यह पता लगाने के लिए ज़रूरी हैं कि असल में किसी असर का कारण क्या है।",mr:"खरं! खरंच काय परिणाम घडवत आहे हे शोधण्यासाठी तुलना गट आवश्यक असतात."} },
              { text:{en:"Study results are automatically published as soon as researchers finish collecting data, with no further review.",hi:"शोधकर्ताओं के डेटा इकट्ठा करना खत्म करते ही स्टडी नतीजे स्वतः प्रकाशित हो जाते हैं, बिना किसी और समीक्षा के।",mr:"संशोधकांनी डेटा गोळा करणं संपल्यावर अभ्यासाचे निकाल आपोआप प्रकाशित होतात, पुढील कोणत्याही पुनरावलोकनाशिवाय."}, answer:false, explain:{en:"Myth! Studies typically go through peer review by other scientists before being published.",hi:"मिथक! स्टडी आमतौर पर प्रकाशित होने से पहले अन्य वैज्ञानिकों द्वारा पीयर रिव्यू से गुज़रती हैं।",mr:"मिथक! अभ्यास सहसा प्रकाशित होण्याआधी इतर शास्त्रज्ञांद्वारे पीअर रिव्ह्यूमधून जातात."} }
            ]}}
          ]},
          { label: "Specialist Referral",
            bonusAssignment: {
              title: { en: "Referral Reasoning Card", hi: "रेफरल तर्क कार्ड", mr: "रेफरल तर्क कार्ड" },
              prompt: { en: "Write about a situation where you think a general doctor should refer a patient to a specialist, and why. Take a photo!",
                        hi: "एक ऐसी स्थिति के बारे में लिखो जहाँ तुम्हें लगता है कि एक जनरल डॉक्टर को मरीज़ को एक विशेषज्ञ के पास रेफर करना चाहिए, और क्यों। फोटो लो!",
                        mr: "अशा परिस्थितीबद्दल लिहा जिथे तुम्हाला वाटतं की एका सामान्य डॉक्टरने रुग्णाला तज्ज्ञाकडे रेफर करावं, आणि का. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🔀", title: "Decide When to Refer", mentorVisual: "🔀",
              mentorIntro: {
                en: "Knowing when to refer a patient to a specialist — rather than trying to handle everything yourself — is a real mark of good judgment. Let's work through it.",
                hi: "यह जानना कि कब एक मरीज़ को विशेषज्ञ के पास रेफर करना है — बजाय खुद सब कुछ संभालने की कोशिश करने के — अच्छे निर्णय का असली संकेत है। चलो इससे गुज़रते हैं।",
                mr: "एका रुग्णाला तज्ज्ञाकडे कधी रेफर करायचं हे जाणून घेणं — स्वतः सर्वकाही हाताळण्याचा प्रयत्न करण्याऐवजी — चांगल्या निर्णयाचं खरं लक्षण आहे. चला यातून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A patient comes to you with persistent joint pain that hasn't improved with basic treatment over several weeks. What's your next move?",
                             hi:"एक मरीज़ लगातार जोड़ों के दर्द के साथ तुम्हारे पास आता है जो कई हफ़्तों में बुनियादी इलाज से नहीं सुधरा। तुम्हारा अगला कदम क्या है?",
                             mr:"एक रुग्ण सतत सांधेदुखीसह तुमच्याकडे येतो जी अनेक आठवड्यांत मूलभूत उपचाराने सुधारली नाही. तुमची पुढची कृती काय आहे?" },
                choices: [
                  { label:{en:"Refer to a rheumatologist or orthopedic specialist for further, more specialized evaluation", hi:"आगे, ज़्यादा विशेष मूल्यांकन के लिए एक रयूमेटोलॉजिस्ट या ऑर्थोपेडिक विशेषज्ञ के पास रेफर करो", mr:"पुढील, अधिक विशेष मूल्यमापनासाठी संधिवाततज्ज्ञ किंवा ऑर्थोपेडिक तज्ज्ञाकडे रेफर करा"}, quality:"best",
                    outcome:{en:"Good judgment! Persistent joint pain not responding to basic treatment is exactly the kind of case that benefits from specialist expertise and more advanced evaluation.",hi:"अच्छा निर्णय! बुनियादी इलाज का जवाब न देने वाला लगातार जोड़ों का दर्द बिल्कुल वैसा मामला है जिसे विशेषज्ञ ज्ञान और ज़्यादा एडवांस मूल्यांकन से फ़ायदा होता है।",mr:"चांगला निर्णय! मूलभूत उपचाराला प्रतिसाद न देणारी सतत सांधेदुखी अगदी अशीच केस आहे जिला तज्ज्ञ ज्ञान आणि अधिक प्रगत मूल्यमापनाचा फायदा होतो."} },
                  { label:{en:"Keep trying different basic treatments yourself indefinitely", hi:"खुद अलग-अलग बुनियादी इलाज अनिश्चित काल तक आज़माते रहो", mr:"स्वतः वेगवेगळे मूलभूत उपचार अनिश्चित काळासाठी करत राहा"}, quality:"risky",
                    outcome:{en:"This could delay proper care. When basic treatment genuinely isn't working after a reasonable trial, continuing without specialist input can mean missing a real underlying issue.",hi:"यह उचित देखभाल में देरी कर सकता है। जब बुनियादी इलाज एक उचित परीक्षण के बाद वाकई काम नहीं कर रहा हो, तो विशेषज्ञ इनपुट के बिना जारी रखने का मतलब हो सकता है एक असली अंतर्निहित समस्या को छोड़ देना।",mr:"यामुळे योग्य काळजीस उशीर होऊ शकतो. वाजवी चाचणीनंतर मूलभूत उपचार खरंच काम करत नसताना, तज्ज्ञ इनपुटशिवाय सुरू ठेवणं म्हणजे खरी मूळ समस्या सोडून देणं असू शकतं."} }
                ]
              },
              {
                situation: { en:"The patient is nervous about seeing a specialist and asks if it means something is 'seriously wrong.' How do you respond?",
                             hi:"मरीज़ एक विशेषज्ञ से मिलने को लेकर घबराया हुआ है और पूछता है कि क्या इसका मतलब है कि 'कुछ गंभीर गड़बड़' है। तुम कैसे जवाब देते हो?",
                             mr:"रुग्ण तज्ज्ञाला भेटण्याबद्दल घाबरलेला आहे आणि विचारतो की याचा अर्थ 'काहीतरी गंभीर चुकीचं' आहे का. तुम्ही कसं उत्तर देता?" },
                choices: [
                  { label:{en:"Reassure them that referral is a normal, common step to get the best possible care, not a sign of something necessarily serious", hi:"उन्हें आश्वस्त करो कि रेफरल सबसे अच्छी संभव देखभाल पाने के लिए एक सामान्य, आम कदम है, ज़रूरी नहीं कि कुछ गंभीर का संकेत हो", mr:"त्यांना आश्वासन द्या की रेफरल हे सर्वोत्तम शक्य काळजी मिळवण्यासाठी एक सामान्य, नेहमीचं पाऊल आहे, आवश्यक नाही की काहीतरी गंभीर असल्याचं लक्षण"}, quality:"best",
                    outcome:{en:"Great communication! Explaining that referral is a normal step toward better care, not automatically a bad sign, helps reduce unnecessary anxiety while still being honest.",hi:"बेहतरीन बातचीत! यह समझाना कि रेफरल बेहतर देखभाल की ओर एक सामान्य कदम है, स्वतः एक बुरा संकेत नहीं, ईमानदार रहते हुए अनावश्यक चिंता कम करने में मदद करता है।",mr:"उत्तम संवाद! रेफरल हे चांगल्या काळजीकडे एक सामान्य पाऊल आहे, आपोआप वाईट लक्षण नाही, हे समजावून सांगणं प्रामाणिक राहत अनावश्यक चिंता कमी करण्यास मदत करतं."} },
                  { label:{en:"Avoid answering directly and just tell them to go see the specialist", hi:"सीधे जवाब देने से बचो और बस उन्हें विशेषज्ञ को देखने के लिए कहो", mr:"थेट उत्तर देणं टाळा आणि त्यांना फक्त तज्ज्ञाला भेटायला सांगा"}, quality:"risky",
                    outcome:{en:"This misses a chance to genuinely reassure a worried patient. Avoiding their question can leave them more anxious than necessary, when clear communication could have helped.",hi:"यह एक चिंतित मरीज़ को वाकई आश्वस्त करने का मौका छोड़ देता है। उनके सवाल से बचना उन्हें ज़रूरत से ज़्यादा चिंतित छोड़ सकता है, जब स्पष्ट बातचीत मदद कर सकती थी।",mr:"यामुळे काळजीत असलेल्या रुग्णाला खरंच आश्वस्त करण्याची संधी चुकते. त्यांच्या प्रश्नाला टाळणं त्यांना गरजेपेक्षा जास्त काळजीत ठेवू शकतं, जेव्हा स्पष्ट संवाद मदत करू शकला असता."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔀", title: "Explore the referral system", mentorVisual: "🔀",
              mentorIntro: {
                en: "Let's explore how the referral system connects general doctors to specialists.",
                hi: "चलो एक्सप्लोर करते हैं रेफरल सिस्टम जनरल डॉक्टरों को विशेषज्ञों से कैसे जोड़ता है।",
                mr: "चला एक्सप्लोर करूया रेफरल यंत्रणा सामान्य डॉक्टरांना तज्ज्ञांशी कशी जोडते."
              },
              data: { visual: "🔀", hotspots: [
              { label:{en:"General doctors as gatekeepers",hi:"द्वारपाल के रूप में जनरल डॉक्टर",mr:"द्वारपाल म्हणून सामान्य डॉक्टर"}, fact:{en:"General doctors often act as a first point of contact, deciding when specialist care is genuinely needed!"} },
              { label:{en:"Timely referral matters",hi:"समय पर रेफरल मायने रखता है",mr:"वेळेवर रेफरल महत्त्वाचं आहे"}, fact:{en:"Referring too late can delay important care — good doctors recognize when it's time to bring in specialist expertise!"} },
              { label:{en:"Communication between doctors",hi:"डॉक्टरों के बीच बातचीत",mr:"डॉक्टरांमधील संवाद"}, fact:{en:"When referring a patient, doctors typically share detailed notes so the specialist has full context!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Specialist referral quiz",
              desc: { en:"A real quiz on when and why doctors refer patients to specialists.", hi:"डॉक्टर कब और क्यों मरीज़ों को विशेषज्ञों के पास रेफर करते हैं, इस पर एक असली क्विज़।", mr:"डॉक्टर कधी आणि का रुग्णांना तज्ज्ञांकडे रेफर करतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Knowing your limits",
              desc: { en:"Why do you think it takes real maturity and confidence for a doctor to recognize when a case is beyond what they should handle alone?", hi:"तुम्हें क्यों लगता है कि एक डॉक्टर के लिए यह पहचानना कि एक मामला उससे आगे है जिसे उसे अकेले संभालना चाहिए, असली परिपक्वता और आत्मविश्वास लेता है?", mr:"एखादी केस स्वतः एकट्याने हाताळण्यापलीकडे आहे हे ओळखण्यासाठी डॉक्टरला खरी परिपक्वता आणि आत्मविश्वास का लागतो असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Referral Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced referral fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस रेफरल तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत रेफरल तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Referral letters exist?",hi:"रेफरल पत्र मौजूद हैं?",mr:"रेफरल पत्रं अस्तित्वात आहेत?"}, back:{en:"Doctors often write detailed referral letters, summarizing the case so the specialist doesn't start from scratch! ✉️",hi:"डॉक्टर अक्सर विस्तृत रेफरल पत्र लिखते हैं, मामले का सारांश देते हुए ताकि विशेषज्ञ शुरुआत से न शुरू करे! ✉️",mr:"डॉक्टर अनेकदा तपशीलवार रेफरल पत्रं लिहितात, केसचा सारांश देत जेणेकरून तज्ज्ञाला सुरुवातीपासून सुरुवात करावी लागू नये! ✉️"} },
              { front:{en:"Second opinions differ from referrals?",hi:"दूसरी राय रेफरल से अलग है?",mr:"दुसरं मत रेफरलपेक्षा वेगळं आहे?"}, back:{en:"A referral for specialist treatment is different from simply seeking a second opinion — though both involve another doctor's input! 🔄",hi:"विशेषज्ञ इलाज के लिए रेफरल सिर्फ़ दूसरी राय लेने से अलग है — हालांकि दोनों में एक अन्य डॉक्टर का इनपुट शामिल है! 🔄",mr:"तज्ज्ञ उपचारासाठी रेफरल फक्त दुसरं मत घेण्यापेक्षा वेगळं आहे — जरी दोन्हींमध्ये दुसऱ्या डॉक्टरचं इनपुट समाविष्ट आहे! 🔄"} },
              { front:{en:"Referral doesn't mean handing off completely?",hi:"रेफरल का मतलब पूरी तरह सौंप देना नहीं है?",mr:"रेफरलचा अर्थ पूर्णपणे सोपवणं नाही?"}, back:{en:"Often, the referring doctor stays involved in the patient's overall care, working alongside the specialist! 🤝",hi:"अक्सर, रेफर करने वाला डॉक्टर मरीज़ की समग्र देखभाल में शामिल रहता है, विशेषज्ञ के साथ काम करते हुए! 🤝",mr:"अनेकदा, रेफर करणारा डॉक्टर रुग्णाच्या एकूण काळजीत सामील राहतो, तज्ज्ञासोबत काम करत! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Referral or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your referral knowledge! Decide if each statement is true or a myth.",
                hi: "चलो रेफरल के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रेफरलच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A referral to a specialist always means something is seriously wrong.",hi:"एक विशेषज्ञ के पास रेफरल का हमेशा मतलब है कि कुछ गंभीर गड़बड़ है।",mr:"तज्ज्ञाकडे रेफरल म्हणजे नेहमी काहीतरी गंभीर चुकीचं असतं."}, answer:false, explain:{en:"Myth! Referral is a normal step to get the best possible care, not automatically a sign of something serious.",hi:"मिथक! रेफरल सबसे अच्छी संभव देखभाल पाने के लिए एक सामान्य कदम है, स्वतः किसी गंभीर चीज़ का संकेत नहीं।",mr:"मिथक! रेफरल हे सर्वोत्तम शक्य काळजी मिळवण्यासाठी एक सामान्य पाऊल आहे, आपोआप गंभीर काहीतरी असल्याचं लक्षण नाही."} },
              { text:{en:"Doctors typically share detailed notes when referring a patient to a specialist.",hi:"डॉक्टर आमतौर पर मरीज़ को विशेषज्ञ के पास रेफर करते समय विस्तृत नोट्स साझा करते हैं।",mr:"डॉक्टर सहसा रुग्णाला तज्ज्ञाकडे रेफर करताना तपशीलवार नोंदी सांगतात."}, answer:true, explain:{en:"True! Sharing detailed notes helps the specialist understand the full context of the case.",hi:"सच! विस्तृत नोट्स साझा करना विशेषज्ञ को मामले के पूरे संदर्भ को समझने में मदद करता है।",mr:"खरं! तपशीलवार नोंदी सांगणं तज्ज्ञाला केसचा संपूर्ण संदर्भ समजून घेण्यास मदत करतं."} },
              { text:{en:"Once a patient is referred, the original doctor has no further involvement in their care.",hi:"एक बार जब एक मरीज़ को रेफर कर दिया जाता है, मूल डॉक्टर की उनकी देखभाल में आगे कोई भागीदारी नहीं होती।",mr:"एकदा रुग्णाला रेफर केलं की, मूळ डॉक्टरचा त्यांच्या काळजीत पुढे कोणताही सहभाग नसतो."}, answer:false, explain:{en:"Myth! The referring doctor often stays involved, working alongside the specialist in the patient's overall care.",hi:"मिथक! रेफर करने वाला डॉक्टर अक्सर शामिल रहता है, मरीज़ की समग्र देखभाल में विशेषज्ञ के साथ काम करते हुए।",mr:"मिथक! रेफर करणारा डॉक्टर अनेकदा सामील राहतो, रुग्णाच्या एकूण काळजीत तज्ज्ञासोबत काम करत."} }
            ]}}
          ]},
          { label: "Patient Communication",
            bonusAssignment: {
              title: { en: "Explain a Diagnosis Simply", hi: "एक निदान को सरलता से समझाओ", mr: "एक निदान सोप्या भाषेत समजावून सांगा" },
              prompt: { en: "Pick a medical term (like 'hypertension') and write how you'd explain it simply to a worried patient. Take a photo!",
                        hi: "एक मेडिकल शब्द चुनो (जैसे 'हाइपरटेंशन') और लिखो कि तुम इसे एक चिंतित मरीज़ को कैसे सरलता से समझाओगे। फोटो लो!",
                        mr: "एक वैद्यकीय संज्ञा निवडा (जसं 'हायपरटेन्शन') आणि तुम्ही ती काळजीत असलेल्या रुग्णाला सोप्या भाषेत कशी समजावाल ते लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "💬", title: "Communicate a Diagnosis", mentorVisual: "💬",
              mentorIntro: {
                en: "How you explain something to a patient matters just as much as being medically correct. Let's practice a real conversation.",
                hi: "तुम एक मरीज़ को कुछ कैसे समझाते हो यह मेडिकली सही होने जितना ही मायने रखता है। चलो एक असली बातचीत का अभ्यास करते हैं।",
                mr: "तुम्ही रुग्णाला काहीतरी कसं समजावता हे वैद्यकीयदृष्ट्या बरोबर असण्याइतकंच महत्त्वाचं आहे. चला एका खऱ्या संभाषणाचा सराव करूया."
              },
              data: { steps: [
              {
                situation: { en:"You need to tell a patient they have a chronic condition (like diabetes) that will require lifelong management. What's your approach?",
                             hi:"तुम्हें एक मरीज़ को बताना है कि उन्हें एक क्रॉनिक स्थिति है (जैसे डायबिटीज़) जिसके लिए जीवनभर प्रबंधन की ज़रूरत होगी। तुम्हारा तरीका क्या है?",
                             mr:"तुम्हाला एका रुग्णाला सांगायचं आहे की त्यांना एक दीर्घकालीन स्थिती आहे (जसं मधुमेह) ज्यासाठी आयुष्यभर व्यवस्थापन लागेल. तुमची पद्धत काय आहे?" },
                choices: [
                  { label:{en:"Explain clearly using simple language, check their understanding, and give them space to ask questions", hi:"साधी भाषा का इस्तेमाल करते हुए स्पष्ट रूप से समझाओ, उनकी समझ जाँचो, और उन्हें सवाल पूछने की जगह दो", mr:"साधी भाषा वापरून स्पष्टपणे समजावून सांगा, त्यांची समज तपासा, आणि त्यांना प्रश्न विचारायला जागा द्या"}, quality:"best",
                    outcome:{en:"Excellent communication! Clear, simple language combined with checking understanding and inviting questions helps patients genuinely process difficult news.",hi:"बेहतरीन बातचीत! समझ जाँचने और सवाल पूछने के लिए आमंत्रित करने के साथ मिली स्पष्ट, साधी भाषा मरीज़ों को मुश्किल खबर को वाकई प्रोसेस करने में मदद करती है।",mr:"उत्तम संवाद! समज तपासणं आणि प्रश्न विचारायला आमंत्रित करणं यासोबत स्पष्ट, साधी भाषा रुग्णांना कठीण बातमी खरंच प्रोसेस करण्यास मदत करते."} },
                  { label:{en:"Use technical medical terms quickly and move on to the next patient", hi:"जल्दी से तकनीकी मेडिकल शब्दों का इस्तेमाल करो और अगले मरीज़ की ओर बढ़ो", mr:"पटकन तांत्रिक वैद्यकीय संज्ञा वापरा आणि पुढच्या रुग्णाकडे जा"}, quality:"risky",
                    outcome:{en:"This risks leaving the patient confused and overwhelmed. Technical language without checking understanding can mean they leave without truly grasping what's happening.",hi:"इसमें मरीज़ को भ्रमित और अभिभूत छोड़ने का जोखिम है। समझ जाँचे बिना तकनीकी भाषा का मतलब हो सकता है कि वे बिना यह वाकई समझे चले जाएँ कि क्या हो रहा है।",mr:"यात रुग्णाला गोंधळलेलं आणि दडपलेलं सोडण्याचा धोका आहे. समज न तपासता तांत्रिक भाषा म्हणजे ते खरंच काय होत आहे हे न समजता निघून जाऊ शकतात."} }
                ]
              },
              {
                situation: { en:"The patient becomes emotional and says they're scared about managing this condition for the rest of their life. How do you respond?",
                             hi:"मरीज़ भावुक हो जाता है और कहता है कि वे अपनी बाकी ज़िंदगी इस स्थिति को संभालने से डरे हुए हैं। तुम कैसे जवाब देते हो?",
                             mr:"रुग्ण भावूक होतो आणि म्हणतो की आयुष्यभर ही स्थिती व्यवस्थापित करण्याबद्दल ते घाबरलेले आहेत. तुम्ही कसं उत्तर देता?" },
                choices: [
                  { label:{en:"Acknowledge their feelings genuinely, then offer concrete next steps and support resources to make it feel manageable", hi:"वाकई उनकी भावनाओं को स्वीकार करो, फिर ठोस अगले कदम और सहायता संसाधन दो ताकि यह प्रबंधनीय महसूस हो", mr:"त्यांच्या भावना खरंच मान्य करा, मग ठोस पुढची पावलं आणि सहाय्यक साधनं द्या जेणेकरून ते व्यवस्थापित करण्यायोग्य वाटेल"}, quality:"best",
                    outcome:{en:"Great empathy! Acknowledging real emotions before moving to practical next steps helps patients feel heard while also feeling equipped to move forward.",hi:"बेहतरीन सहानुभूति! व्यावहारिक अगले कदमों की ओर बढ़ने से पहले असली भावनाओं को स्वीकार करना मरीज़ों को सुना हुआ महसूस कराने में मदद करता है साथ ही आगे बढ़ने के लिए सुसज्जित भी।",mr:"उत्तम सहानुभूती! व्यावहारिक पुढच्या पावलांकडे जाण्याआधी खऱ्या भावना मान्य करणं रुग्णांना ऐकल्यासारखं वाटण्यास मदत करतं तसंच पुढे जाण्यास सुसज्जही वाटतं."} },
                  { label:{en:"Quickly reassure them it'll be fine without really addressing their fear", hi:"बिना असल में उनके डर को संबोधित किए जल्दी से उन्हें आश्वस्त करो कि सब ठीक होगा", mr:"त्यांच्या भीतीला खरंच संबोधित न करता पटकन त्यांना आश्वस्त करा की सर्व ठीक होईल"}, quality:"risky",
                    outcome:{en:"This can feel dismissive. A quick reassurance without truly addressing their fear may leave the patient feeling unheard, even if well-intentioned.",hi:"यह खारिज करने वाला महसूस हो सकता है। उनके डर को वाकई संबोधित किए बिना एक त्वरित आश्वासन मरीज़ को अनसुना महसूस करा सकता है, भले ही यह अच्छे इरादे से हो।",mr:"हे नाकारल्यासारखं वाटू शकतं. त्यांच्या भीतीला खरंच संबोधित न करता जलद आश्वासन रुग्णाला ऐकलं न गेल्यासारखं वाटू शकतं, जरी हे चांगल्या हेतूने असलं तरी."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "💬", title: "Explore communication skills", mentorVisual: "💬",
              mentorIntro: {
                en: "Let's explore what makes patient communication genuinely effective.",
                hi: "चलो एक्सप्लोर करते हैं मरीज़ की बातचीत को वाकई असरदार क्या बनाता है।",
                mr: "चला एक्सप्लोर करूया रुग्ण संवाद खरंच प्रभावी काय बनवतो."
              },
              data: { visual: "💬", hotspots: [
              { label:{en:"Plain language",hi:"सादी भाषा",mr:"साधी भाषा"}, fact:{en:"Skilled doctors translate complex medical terms into language patients can genuinely understand!"} },
              { label:{en:"Active listening",hi:"सक्रिय सुनना",mr:"सक्रिय ऐकणं"}, fact:{en:"Truly listening to a patient's concerns, not just talking at them, builds real trust!"} },
              { label:{en:"Checking understanding",hi:"समझ जाँचना",mr:"समज तपासणं"}, fact:{en:"Good doctors ask patients to repeat back what they understood, catching any confusion early!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Patient communication quiz",
              desc: { en:"A real quiz on effective, empathetic patient communication.", hi:"असरदार, सहानुभूतिपूर्ण मरीज़ बातचीत पर एक असली क्विज़।", mr:"प्रभावी, सहानुभूतीपूर्ण रुग्ण संवादावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Delivering hard news",
              desc: { en:"How do you think you'd feel delivering difficult news to a patient? What communication skills do you think you'd want to build?", hi:"तुम्हें क्या लगता है एक मरीज़ को मुश्किल खबर देना कैसा महसूस होगा? तुम्हें क्या लगता है तुम कौन से बातचीत कौशल बनाना चाहोगे?", mr:"रुग्णाला कठीण बातमी देणं कसं वाटेल असं तुम्हाला वाटतं? तुम्हाला कोणती संवाद कौशल्यं तयार करायला आवडतील असं वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Communication Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced communication fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस बातचीत तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत संवाद तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Communication is taught formally?",hi:"बातचीत औपचारिक रूप से सिखाई जाती है?",mr:"संवाद औपचारिकपणे शिकवला जातो?"}, back:{en:"Many medical schools now have dedicated courses on patient communication, recognizing how important it genuinely is! 🎓",hi:"कई मेडिकल स्कूलों में अब मरीज़ बातचीत पर समर्पित कोर्स होते हैं, यह पहचानते हुए कि यह वाकई कितना ज़रूरी है! 🎓",mr:"अनेक वैद्यकीय शाळांमध्ये आता रुग्ण संवादावर समर्पित अभ्यासक्रम असतात, हे किती खरंच महत्त्वाचं आहे हे ओळखत! 🎓"} },
              { front:{en:"Trust affects outcomes?",hi:"भरोसा नतीजों को प्रभावित करता है?",mr:"विश्वास निकालांवर परिणाम करतो?"}, back:{en:"Research shows patients who trust their doctor's communication often follow treatment plans more closely! 📈",hi:"रिसर्च दिखाती है कि जो मरीज़ अपने डॉक्टर की बातचीत पर भरोसा करते हैं वे अक्सर इलाज योजनाओं का ज़्यादा बारीकी से पालन करते हैं! 📈",mr:"संशोधन दाखवतं की जे रुग्ण त्यांच्या डॉक्टरच्या संवादावर विश्वास ठेवतात ते अनेकदा उपचार योजनांचं अधिक बारकाईने पालन करतात! 📈"} },
              { front:{en:"Interpreters matter?",hi:"अनुवादक मायने रखते हैं?",mr:"भाषांतरकार महत्त्वाचे आहेत?"}, back:{en:"When language barriers exist, professional medical interpreters help ensure patients truly understand their care! 🗣️",hi:"जब भाषा की बाधाएँ होती हैं, पेशेवर मेडिकल अनुवादक यह सुनिश्चित करने में मदद करते हैं कि मरीज़ वाकई अपनी देखभाल को समझें! 🗣️",mr:"जेव्हा भाषेच्या अडचणी असतात, व्यावसायिक वैद्यकीय भाषांतरकार रुग्ण खरंच त्यांची काळजी समजून घेतात याची खात्री करण्यास मदत करतात! 🗣️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Communication or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your patient communication knowledge! Decide if each statement is true or a myth.",
                hi: "चलो मरीज़ बातचीत के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला रुग्ण संवादाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Using complex medical terms always makes a doctor sound more credible to patients.",hi:"जटिल मेडिकल शब्दों का इस्तेमाल हमेशा एक डॉक्टर को मरीज़ों के लिए ज़्यादा विश्वसनीय बनाता है।",mr:"जटिल वैद्यकीय संज्ञा वापरणं नेहमी डॉक्टरला रुग्णांसाठी अधिक विश्वासार्ह बनवतं."}, answer:false, explain:{en:"Myth! Clear, simple language that patients genuinely understand is usually far more effective and builds more trust than complex terms.",hi:"मिथक! स्पष्ट, साधी भाषा जिसे मरीज़ वाकई समझते हैं आमतौर पर जटिल शब्दों से कहीं ज़्यादा असरदार होती है और ज़्यादा भरोसा बनाती है।",mr:"मिथक! स्पष्ट, साधी भाषा जी रुग्ण खरंच समजतात सहसा जटिल संज्ञांपेक्षा खूप जास्त प्रभावी असते आणि जास्त विश्वास निर्माण करते."} },
              { text:{en:"Checking whether a patient understood what you explained can catch confusion early.",hi:"यह जाँचना कि क्या एक मरीज़ ने वह समझा जो तुमने समझाया, जल्दी भ्रम पकड़ सकता है।",mr:"रुग्णाला तुम्ही समजावलेलं समजलं का हे तपासणं गोंधळ लवकर पकडू शकतं."}, answer:true, explain:{en:"True! Checking understanding is a simple but powerful way to catch miscommunication before it causes problems.",hi:"सच! समझ जाँचना गलत संचार को पकड़ने का एक साधा लेकिन शक्तिशाली तरीका है इससे पहले कि यह समस्याएँ पैदा करे।",mr:"खरं! समज तपासणं गैरसंवाद तो समस्या निर्माण करण्याआधी पकडण्याचा एक साधा पण शक्तिशाली मार्ग आहे."} },
              { text:{en:"Patient communication skills are considered unimportant compared to medical knowledge.",hi:"मरीज़ बातचीत कौशल को मेडिकल ज्ञान की तुलना में महत्वहीन माना जाता है।",mr:"रुग्ण संवाद कौशल्यं वैद्यकीय ज्ञानाच्या तुलनेत बिनमहत्त्वाची मानली जातात."}, answer:false, explain:{en:"Myth! Communication skills are now widely recognized as genuinely essential, taught formally in many medical schools.",hi:"मिथक! बातचीत कौशल को अब व्यापक रूप से वाकई ज़रूरी माना जाता है, कई मेडिकल स्कूलों में औपचारिक रूप से पढ़ाया जाता है।",mr:"मिथक! संवाद कौशल्यं आता मोठ्या प्रमाणावर खरंच आवश्यक मानली जातात, अनेक वैद्यकीय शाळांमध्ये औपचारिकपणे शिकवली जातात."} }
            ]}}
          ]},
          { label: "Public Health Crisis",
            bonusAssignment: {
              title: { en: "Crisis Response Plan", hi: "संकट प्रतिक्रिया योजना", mr: "संकट प्रतिसाद योजना" },
              prompt: { en: "Research a historical public health crisis (like an outbreak) and write 3-4 sentences on how it was managed. Take a photo!",
                        hi: "एक ऐतिहासिक पब्लिक हेल्थ संकट (जैसे एक प्रकोप) पर रिसर्च करो और लिखो इसे कैसे संभाला गया, 3-4 वाक्यों में। फोटो लो!",
                        mr: "एका ऐतिहासिक सार्वजनिक आरोग्य संकटावर (जसं एक उद्रेक) संशोधन करा आणि ते कसं व्यवस्थापित केलं गेलं याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🌍", title: "Manage a Health Crisis", mentorVisual: "🌍",
              mentorIntro: {
                en: "During a public health crisis, decisions affect entire communities, not just one patient. Let's work through a realistic scenario.",
                hi: "एक पब्लिक हेल्थ संकट के दौरान, फ़ैसले पूरे समुदायों को प्रभावित करते हैं, सिर्फ़ एक मरीज़ को नहीं। चलो एक यथार्थवादी परिदृश्य से गुज़रते हैं।",
                mr: "सार्वजनिक आरोग्य संकटादरम्यान, निर्णय संपूर्ण समुदायांवर परिणाम करतात, फक्त एका रुग्णावर नाही. चला एका वास्तववादी परिस्थितीतून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A new, fast-spreading illness is affecting your town. Hospitals are getting busy quickly. As part of the response team, what's your first priority?",
                             hi:"एक नई, तेज़ी से फैलने वाली बीमारी तुम्हारे शहर को प्रभावित कर रही है। अस्पताल तेज़ी से व्यस्त हो रहे हैं। रिस्पॉन्स टीम के हिस्से के रूप में, तुम्हारी पहली प्राथमिकता क्या है?",
                             mr:"एक नवीन, वेगाने पसरणारा आजार तुमच्या गावाला प्रभावित करत आहे. रुग्णालयं वेगाने व्यस्त होत आहेत. प्रतिसाद टीमचा भाग म्हणून, तुमचं पहिलं प्राधान्य काय आहे?" },
                choices: [
                  { label:{en:"Communicate clear, accurate information to the public about symptoms and prevention", hi:"लक्षणों और बचाव के बारे में जनता को स्पष्ट, सटीक जानकारी दो", mr:"लक्षणं आणि प्रतिबंधाबद्दल जनतेला स्पष्ट, अचूक माहिती द्या"}, quality:"best",
                    outcome:{en:"Excellent priority! Clear, accurate public communication is one of the most powerful tools in a health crisis — it helps people protect themselves and reduces panic caused by misinformation.",hi:"बेहतरीन प्राथमिकता! स्पष्ट, सटीक सार्वजनिक बातचीत एक स्वास्थ्य संकट में सबसे शक्तिशाली उपकरणों में से एक है — यह लोगों को खुद की रक्षा करने में मदद करती है और गलत सूचना से होने वाली घबराहट को कम करती है।",mr:"उत्तम प्राधान्य! स्पष्ट, अचूक सार्वजनिक संवाद हे आरोग्य संकटातील सर्वात शक्तिशाली साधनांपैकी एक आहे — हे लोकांना स्वतःचं रक्षण करण्यास मदत करतं आणि चुकीच्या माहितीमुळे होणारी घबराट कमी करतं."} },
                  { label:{en:"Wait for official confirmation before saying anything to avoid causing worry", hi:"चिंता पैदा करने से बचने के लिए कुछ भी कहने से पहले आधिकारिक पुष्टि की प्रतीक्षा करो", mr:"काळजी निर्माण होऊ नये म्हणून काहीही बोलण्याआधी अधिकृत पुष्टीची वाट बघा"}, quality:"risky",
                    outcome:{en:"This delay could backfire. In fast-moving crises, silence often gets filled with misinformation and rumors, which can be more harmful than timely, honest communication.",hi:"यह देरी उल्टा असर डाल सकती है। तेज़ी से बदलते संकटों में, चुप्पी अक्सर गलत सूचना और अफ़वाहों से भर जाती है, जो समय पर, ईमानदार बातचीत से ज़्यादा हानिकारक हो सकती है।",mr:"हा विलंब उलटा परिणाम करू शकतो. वेगाने बदलणाऱ्या संकटांमध्ये, शांतता अनेकदा चुकीची माहिती आणि अफवांनी भरली जाते, जी वेळेवर, प्रामाणिक संवादापेक्षा जास्त हानिकारक असू शकते."} }
                ]
              },
              {
                situation: { en:"Hospitals are now nearly full. The team must decide how to allocate limited resources fairly. What guides this decision?",
                             hi:"अस्पताल अब लगभग पूरे भर गए हैं। टीम को यह तय करना होगा कि सीमित संसाधनों को निष्पक्ष रूप से कैसे बाँटा जाए। यह फ़ैसला किससे निर्देशित होता है?",
                             mr:"रुग्णालयं आता जवळजवळ भरली आहेत. टीमने मर्यादित साधनं निष्पक्षपणे कशी वाटायची हे ठरवावं लागेल. हा निर्णय कशाने मार्गदर्शित होतो?" },
                choices: [
                  { label:{en:"Follow established medical priority guidelines, treating those with the most urgent need first, regardless of other factors", hi:"स्थापित मेडिकल प्राथमिकता दिशानिर्देशों का पालन करो, अन्य कारकों की परवाह किए बिना सबसे अत्यावश्यक ज़रूरत वालों का पहले इलाज करो", mr:"स्थापित वैद्यकीय प्राधान्य मार्गदर्शक तत्त्वांचं पालन करा, इतर घटकांची पर्वा न करता सर्वात तातडीची गरज असलेल्यांवर आधी उपचार करा"}, quality:"best",
                    outcome:{en:"Right approach! Following established, fair medical guidelines rather than ad-hoc decisions helps ensure resources go where they're most medically needed, treating everyone fairly.",hi:"सही तरीका! तदर्थ फ़ैसलों के बजाय स्थापित, निष्पक्ष मेडिकल दिशानिर्देशों का पालन करना यह सुनिश्चित करने में मदद करता है कि संसाधन वहाँ जाएँ जहाँ उनकी मेडिकली सबसे ज़्यादा ज़रूरत है, सबके साथ निष्पक्ष व्यवहार करते हुए।",mr:"योग्य पद्धत! तात्पुरत्या निर्णयांऐवजी स्थापित, निष्पक्ष वैद्यकीय मार्गदर्शक तत्त्वांचं पालन करणं साधनं जिथे वैद्यकीयदृष्ट्या सर्वात जास्त गरज आहे तिथे जातील याची खात्री करण्यास मदत करतं, सर्वांशी निष्पक्ष वागत."} },
                  { label:{en:"Let each individual doctor decide case-by-case with no shared guidelines", hi:"हर अलग-अलग डॉक्टर को बिना किसी साझा दिशानिर्देश के केस-दर-केस तय करने दो", mr:"प्रत्येक वेगळ्या डॉक्टरला कोणत्याही सामायिक मार्गदर्शक तत्त्वांशिवाय केस-दर-केस ठरवू द्या"}, quality:"risky",
                    outcome:{en:"Without shared guidelines, decisions could become inconsistent and potentially unfair — clear, agreed-upon protocols help ensure everyone is treated by the same fair standard.",hi:"साझा दिशानिर्देशों के बिना, फ़ैसले असंगत और संभावित रूप से अनुचित हो सकते हैं — स्पष्ट, सहमत प्रोटोकॉल यह सुनिश्चित करने में मदद करते हैं कि सबके साथ एक ही निष्पक्ष मानक से व्यवहार हो।",mr:"सामायिक मार्गदर्शक तत्त्वांशिवाय, निर्णय विसंगत आणि शक्यतो अन्यायकारक होऊ शकतात — स्पष्ट, मान्य केलेले प्रोटोकॉल सर्वांशी त्याच निष्पक्ष मानकाने वागवलं जातं याची खात्री करण्यास मदत करतात."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🌍", title: "Explore crisis response principles", mentorVisual: "🌍",
              mentorIntro: {
                en: "Let's explore the key principles behind managing a public health crisis effectively.",
                hi: "चलो पब्लिक हेल्थ संकट को असरदार तरीके से संभालने के पीछे के मुख्य सिद्धांतों को एक्सप्लोर करते हैं।",
                mr: "चला सार्वजनिक आरोग्य संकट प्रभावीपणे व्यवस्थापित करण्यामागील मुख्य तत्त्वं एक्सप्लोर करूया."
              },
              data: { visual: "🌍", hotspots: [
              { label:{en:"Speed matters",hi:"गति मायने रखती है",mr:"वेग महत्त्वाचा आहे"}, fact:{en:"In fast-spreading crises, quick, well-informed action can genuinely limit how much a problem grows!"} },
              { label:{en:"Coordination across teams",hi:"टीमों में समन्वय",mr:"टीम्समध्ये समन्वय"}, fact:{en:"Public health crises require hospitals, government, and communities all working together, not in isolation!"} },
              { label:{en:"Learning afterward",hi:"बाद में सीखना",mr:"नंतर शिकणं"}, fact:{en:"After a crisis passes, teams carefully review what worked and what didn't, to prepare better for next time!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Public health crisis quiz",
              desc: { en:"A real quiz on how public health crises are managed at a community level.", hi:"सामुदायिक स्तर पर पब्लिक हेल्थ संकट कैसे संभाले जाते हैं, इस पर एक असली क्विज़।", mr:"सामुदायिक पातळीवर सार्वजनिक आरोग्य संकट कसं व्यवस्थापित केलं जातं, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Decisions affecting many",
              desc: { en:"How do you think it feels to make decisions that affect an entire community, not just one patient? What would help you handle that responsibility?", hi:"तुम्हें क्या लगता है ऐसे फ़ैसले लेना कैसा महसूस होगा जो पूरे समुदाय को प्रभावित करते हैं, सिर्फ़ एक मरीज़ को नहीं? इस ज़िम्मेदारी को संभालने में तुम्हें क्या मदद करेगा?", mr:"संपूर्ण समुदायावर परिणाम करणारे निर्णय घेणं कसं वाटेल असं तुम्हाला वाटतं, फक्त एका रुग्णावर नाही? ती जबाबदारी हाताळण्यास तुम्हाला काय मदत करेल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Crisis Response Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced crisis response fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस संकट प्रतिक्रिया तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत संकट प्रतिसाद तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Surge capacity plans?",hi:"सर्ज कैपेसिटी योजनाएँ?",mr:"सर्ज क्षमता योजना?"}, back:{en:"Hospitals often have 'surge capacity' plans ready in advance, for quickly expanding care during a crisis! 📈",hi:"अस्पतालों में अक्सर संकट के दौरान तेज़ी से देखभाल बढ़ाने के लिए पहले से 'सर्ज कैपेसिटी' योजनाएँ तैयार होती हैं! 📈",mr:"रुग्णालयांकडे अनेकदा संकटादरम्यान त्वरित काळजी वाढवण्यासाठी आधीच 'सर्ज क्षमता' योजना तयार असतात! 📈"} },
              { front:{en:"Global coordination?",hi:"वैश्विक समन्वय?",mr:"जागतिक समन्वय?"}, back:{en:"For crises crossing borders, organizations coordinate globally to share information and resources quickly! 🌐",hi:"सीमाओं को पार करने वाले संकटों के लिए, संगठन जल्दी से जानकारी और संसाधन साझा करने के लिए वैश्विक रूप से समन्वय करते हैं! 🌐",mr:"सीमा ओलांडणाऱ्या संकटांसाठी, संघटना माहिती आणि साधनं त्वरित सामायिक करण्यासाठी जागतिक स्तरावर समन्वय साधतात! 🌐"} },
              { front:{en:"Communication in multiple languages?",hi:"कई भाषाओं में बातचीत?",mr:"अनेक भाषांमध्ये संवाद?"}, back:{en:"Effective crisis communication often needs to reach people in multiple languages, to protect entire diverse communities! 🗣️",hi:"असरदार संकट बातचीत को अक्सर पूरे विविध समुदायों की रक्षा के लिए लोगों तक कई भाषाओं में पहुँचने की ज़रूरत होती है! 🗣️",mr:"प्रभावी संकट संवादाला अनेकदा संपूर्ण वैविध्यपूर्ण समुदायांचं रक्षण करण्यासाठी अनेक भाषांमध्ये लोकांपर्यंत पोहोचण्याची गरज असते! 🗣️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Crisis Response or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your crisis-response knowledge! Decide if each statement is true or a myth.",
                hi: "चलो संकट-प्रतिक्रिया के तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला संकट-प्रतिसादाच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Staying silent until everything is fully confirmed is always the best crisis communication approach.",hi:"जब तक सब कुछ पूरी तरह पुष्टि न हो जाए तब तक चुप रहना हमेशा सबसे अच्छा संकट बातचीत तरीका है।",mr:"सर्वकाही पूर्णपणे पुष्टी होईपर्यंत गप्प राहणं नेहमी सर्वोत्तम संकट संवाद पद्धत आहे."}, answer:false, explain:{en:"Myth! Timely, honest communication, even with some uncertainty, often prevents misinformation and panic better than prolonged silence.",hi:"मिथक! समय पर, ईमानदार बातचीत, कुछ अनिश्चितता के साथ भी, अक्सर लंबी चुप्पी से बेहतर गलत सूचना और घबराहट को रोकती है।",mr:"मिथक! वेळेवर, प्रामाणिक संवाद, काही अनिश्चिततेसहही, अनेकदा दीर्घकाळ गप्प राहण्यापेक्षा चुकीची माहिती आणि घबराट चांगली रोखतो."} },
              { text:{en:"Hospitals often prepare 'surge capacity' plans in advance for crisis situations.",hi:"अस्पताल अक्सर संकट स्थितियों के लिए पहले से 'सर्ज कैपेसिटी' योजनाएँ तैयार करते हैं।",mr:"रुग्णालयं अनेकदा संकट परिस्थितींसाठी आधीच 'सर्ज क्षमता' योजना तयार करतात."}, answer:true, explain:{en:"True! Advance planning for surge capacity is a real, common practice to help hospitals respond quickly.",hi:"सच! सर्ज कैपेसिटी के लिए पहले से योजना बनाना अस्पतालों को तेज़ी से जवाब देने में मदद करने के लिए एक असली, आम अभ्यास है।",mr:"खरं! सर्ज क्षमतेसाठी आधीच नियोजन करणं रुग्णालयांना त्वरित प्रतिसाद देण्यास मदत करण्यासाठी एक खरं, सामान्य पद्धत आहे."} },
              { text:{en:"Resource allocation during a crisis should be decided randomly with no shared guidelines.",hi:"संकट के दौरान संसाधन आवंटन को बिना किसी साझा दिशानिर्देश के बेतरतीब ढंग से तय किया जाना चाहिए।",mr:"संकटादरम्यान साधन वाटप कोणत्याही सामायिक मार्गदर्शक तत्त्वांशिवाय यादृच्छिकपणे ठरवलं जावं."}, answer:false, explain:{en:"Myth! Fair, established medical guidelines are used to ensure resources go where medically needed most, treating everyone consistently.",hi:"मिथक! निष्पक्ष, स्थापित मेडिकल दिशानिर्देशों का इस्तेमाल यह सुनिश्चित करने के लिए किया जाता है कि संसाधन वहाँ जाएँ जहाँ मेडिकली सबसे ज़्यादा ज़रूरत है, सबके साथ लगातार व्यवहार करते हुए।",mr:"मिथक! निष्पक्ष, स्थापित वैद्यकीय मार्गदर्शक तत्त्वं साधनं जिथे वैद्यकीयदृष्ट्या सर्वात जास्त गरज आहे तिथे जातील याची खात्री करण्यासाठी वापरली जातात, सर्वांशी सातत्याने वागत."} }
            ]}}
          ]},
          { label: "Specialty Deep Dive",
            bonusAssignment: {
              title: { en: "My Specialty Choice Reflection", hi: "मेरी स्पेशलिटी पसंद पर विचार", mr: "माझी खासियत निवड विचार" },
              prompt: { en: "Out of all the specialties you've explored (cardiology, pediatrics, radiology, etc.), pick your top choice and write 3-4 sentences on why. Take a photo!",
                        hi: "तुमने जितनी स्पेशलिटी एक्सप्लोर कीं (कार्डियोलॉजी, पीडियाट्रिक्स, रेडियोलॉजी, आदि) उनमें से अपनी टॉप पसंद चुनो और 3-4 वाक्य लिखो कि क्यों। फोटो लो!",
                        mr: "तुम्ही एक्सप्लोर केलेल्या सर्व खासियतींपैकी (कार्डिओलॉजी, पीडियाट्रिक्स, रेडिओलॉजी, इ.) तुमची पहिली पसंती निवडा आणि का याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🎯", title: "Revisit your favorite specialties", mentorVisual: "🎯",
              mentorIntro: {
                en: "You've explored many specialties across Std 10 and 11. Let's revisit a few and think about what genuinely stood out to you.",
                hi: "तुमने Std 10 और 11 में कई स्पेशलिटी एक्सप्लोर कीं। चलो कुछ को फिर से देखते हैं और सोचते हैं कि तुम्हें असल में क्या पसंद आया।",
                mr: "तुम्ही Std 10 आणि 11 मध्ये अनेक खासियती एक्सप्लोर केल्या. चला काहींना पुन्हा भेटूया आणि विचार करूया की तुम्हाला खरंच काय आवडलं."
              },
              data: { visual: "🎯", hotspots: [
              { label:{en:"Hands-on specialties",hi:"हाथों-हाथ स्पेशलिटी",mr:"प्रत्यक्ष खासियती"}, fact:{en:"Specialties like surgery and emergency medicine involve a lot of direct, hands-on action!"} },
              { label:{en:"Thoughtful specialties",hi:"विचारशील स्पेशलिटी",mr:"विचारशील खासियती"}, fact:{en:"Specialties like pathology and psychiatry involve more careful analysis and deep thinking!"} },
              { label:{en:"People-focused specialties",hi:"लोगों पर केंद्रित स्पेशलिटी",mr:"लोकांवर केंद्रित खासियती"}, fact:{en:"Specialties like pediatrics and public health involve deep connection with patients or whole communities!"} }
            ]}},
            { engine: "build-match", icon: "🎯", title: "Match your interests to a specialty type", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's think about what kind of work genuinely excites you, and connect that to real specialty types.",
                hi: "चलो सोचते हैं कि किस तरह का काम तुम्हें वाकई उत्साहित करता है, और उसे असली स्पेशलिटी प्रकारों से जोड़ते हैं।",
                mr: "चला विचार करूया कोणत्या प्रकारचं काम तुम्हाला खरंच उत्साहित करतं, आणि ते खऱ्या खासियत प्रकारांशी जोडूया."
              },
              data: { noStakes: true, zones: [
              { id: "action", label: { en:"I like fast-paced, hands-on action", hi:"मुझे तेज़-रफ़्तार, हाथों-हाथ काम पसंद है", mr:"मला वेगवान, प्रत्यक्ष कृती आवडते" } },
              { id: "thinking", label: { en:"I like careful analysis and problem-solving", hi:"मुझे सावधान विश्लेषण और समस्या-समाधान पसंद है", mr:"मला काळजीपूर्वक विश्लेषण आणि समस्या-सोडवणं आवडतं" } },
              { id: "people", label: { en:"I like building relationships and helping people directly", hi:"मुझे रिश्ते बनाना और लोगों की सीधे मदद करना पसंद है", mr:"मला नाती बनवणं आणि लोकांना थेट मदत करणं आवडतं" } }
            ], chips: ["action","thinking","people"] }},
            { type: "Quiz", icon: "📝", title: "Specialty deep dive quiz",
              desc: { en:"A real quiz reviewing key facts about the specialties you've explored across Std 10-11.", hi:"Std 10-11 में तुमने जो स्पेशलिटी एक्सप्लोर कीं उनके बारे में मुख्य तथ्यों की समीक्षा करने वाला एक असली क्विज़।", mr:"Std 10-11 मध्ये तुम्ही एक्सप्लोर केलेल्या खासियतींबद्दलच्या मुख्य तथ्यांचा आढावा घेणारा एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Your top specialty pick",
              desc: { en:"Out of everything you've explored so far, which specialty genuinely interests you the most right now, and why?", hi:"अब तक जो कुछ भी तुमने एक्सप्लोर किया उसमें से, कौन सी स्पेशलिटी अभी वाकई तुम्हें सबसे ज़्यादा दिलचस्प लगती है, और क्यों?", mr:"आतापर्यंत तुम्ही एक्सप्लोर केलेल्या सर्व गोष्टींपैकी, कोणती खासियत आत्ता खरंच तुम्हाला सर्वात जास्त रुचकर वाटते, आणि का?" } },
            { engine: "flip-cards", icon: "🃏", title: "Specialty Path Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about choosing a specialty path!",
                hi: "चलो और गहराई में जाते हैं — एक स्पेशलिटी रास्ता चुनने के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — खासियत मार्ग निवडण्याबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Choices can change?",hi:"पसंद बदल सकती है?",mr:"निवड बदलू शकते?"}, back:{en:"Many doctors change their specialty interest during medical training as they gain real experience — it's normal to evolve! 🔄",hi:"कई डॉक्टर मेडिकल प्रशिक्षण के दौरान अपनी स्पेशलिटी की दिलचस्पी बदलते हैं जैसे-जैसे उन्हें असली अनुभव मिलता है — विकसित होना सामान्य है! 🔄",mr:"अनेक डॉक्टर वैद्यकीय प्रशिक्षणादरम्यान त्यांची खासियत आवड बदलतात जसजसा त्यांना खरा अनुभव मिळतो — विकसित होणं सामान्य आहे! 🔄"} },
              { front:{en:"Exposure matters?",hi:"अनुभव मायने रखता है?",mr:"अनुभव महत्त्वाचा आहे?"}, back:{en:"Real hands-on exposure to different specialties, like what you've done here, genuinely helps people find the right fit! 🔍",hi:"अलग-अलग स्पेशलिटी के असली हाथों-हाथ अनुभव, जैसा तुमने यहाँ किया, वाकई लोगों को सही फिट खोजने में मदद करते हैं! 🔍",mr:"वेगवेगळ्या खासियतींचा खरा प्रत्यक्ष अनुभव, जसं तुम्ही इथे केलं, खरंच लोकांना योग्य जुळणी शोधण्यास मदत करतो! 🔍"} },
              { front:{en:"No single 'right' path?",hi:"कोई एक 'सही' रास्ता नहीं?",mr:"कोणताही एक 'योग्य' मार्ग नाही?"}, back:{en:"There's no single 'best' specialty — the right choice is genuinely personal, based on what excites and fulfills each individual! ✨",hi:"कोई एक 'सबसे अच्छी' स्पेशलिटी नहीं है — सही पसंद वाकई व्यक्तिगत है, इस पर आधारित कि हर व्यक्ति को क्या उत्साहित और संतुष्ट करता है! ✨",mr:"एकही 'सर्वोत्तम' खासियत नाही — योग्य निवड खरंच वैयक्तिक आहे, प्रत्येक व्यक्तीला काय उत्साहित आणि संतुष्ट करतं यावर आधारित! ✨"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Specialty Choice or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge about choosing a specialty! Decide if each statement is true or a myth.",
                hi: "चलो एक स्पेशलिटी चुनने के बारे में तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला खासियत निवडण्याबद्दलच्या तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Once someone picks a medical specialty interest, they can never change their mind.",hi:"एक बार जब कोई एक मेडिकल स्पेशलिटी में दिलचस्पी चुन लेता है, तो वे कभी अपना मन नहीं बदल सकते।",mr:"एकदा कोणीतरी वैद्यकीय खासियतीत रस निवडला की, ते कधीच त्यांचं मन बदलू शकत नाहीत."}, answer:false, explain:{en:"Myth! It's completely normal for people to change their specialty interest as they gain more real experience.",hi:"मिथक! लोगों के लिए ज़्यादा असली अनुभव पाने पर अपनी स्पेशलिटी की दिलचस्पी बदलना बिल्कुल सामान्य है।",mr:"मिथक! अधिक खरा अनुभव मिळाल्यावर लोकांची खासियत आवड बदलणं पूर्णपणे सामान्य आहे."} },
              { text:{en:"There's a single 'best' medical specialty that's objectively right for everyone.",hi:"एक अकेली 'सबसे अच्छी' मेडिकल स्पेशलिटी है जो हर किसी के लिए वस्तुनिष्ठ रूप से सही है।",mr:"एक 'सर्वोत्तम' वैद्यकीय खासियत आहे जी प्रत्येकासाठी वस्तुनिष्ठपणे योग्य आहे."}, answer:false, explain:{en:"Myth! The right specialty is genuinely personal, depending on what excites and fits each individual person.",hi:"मिथक! सही स्पेशलिटी वाकई व्यक्तिगत है, इस पर निर्भर करती है कि हर व्यक्ति को क्या उत्साहित करता है और फिट बैठता है।",mr:"मिथक! योग्य खासियत खरंच वैयक्तिक आहे, प्रत्येक व्यक्तीला काय उत्साहित करतं आणि जुळतं यावर अवलंबून."} },
              { text:{en:"Hands-on exposure to different specialties genuinely helps people find the right fit for them.",hi:"अलग-अलग स्पेशलिटी में हाथों-हाथ अनुभव वाकई लोगों को उनके लिए सही फिट खोजने में मदद करता है।",mr:"वेगवेगळ्या खासियतींमधील प्रत्यक्ष अनुभव खरंच लोकांना त्यांच्यासाठी योग्य जुळणी शोधण्यास मदत करतो."}, answer:true, explain:{en:"True! Real exposure, like what this year's missions gave you, is a genuinely valuable way to explore fit.",hi:"सच! असली अनुभव, जैसा इस साल के मिशन ने तुम्हें दिया, जुळणी एक्सप्लोर करने का एक वाकई मूल्यवान तरीका है।",mr:"खरं! खरा अनुभव, जसं या वर्षीच्या मिशन्सनी तुम्हाला दिला, जुळणी एक्सप्लोर करण्याचा एक खरंच मौल्यवान मार्ग आहे."} }
            ]}}
          ]},
          { label: "Capstone: Full Patient Journey",
            bonusAssignment: {
              title: { en: "My Full Patient Case", hi: "मेरा पूरा मरीज़ केस", mr: "माझी संपूर्ण रुग्ण केस" },
              prompt: { en: "Write a full fictional patient journey — from first symptom, through diagnosis, to treatment plan. Take a photo of your story!",
                        hi: "एक पूरी काल्पनिक मरीज़ यात्रा लिखो — पहले लक्षण से, निदान के ज़रिए, इलाज योजना तक। अपनी कहानी की फोटो लो!",
                        mr: "एक संपूर्ण काल्पनिक रुग्ण प्रवास लिहा — पहिल्या लक्षणापासून, निदानातून, उपचार योजनेपर्यंत. तुमच्या गोष्टीचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🎓", title: "Guide the Complete Journey", mentorVisual: "🎓",
              mentorIntro: {
                en: "This is it — your Std 11 capstone! Let's combine everything you've learned this year into one complete patient journey, from first contact to final plan.",
                hi: "यह है — तुम्हारा Std 11 कैपस्टोन! चलो इस साल तुमने जो कुछ भी सीखा है उसे एक पूरी मरीज़ यात्रा में मिलाते हैं, पहले संपर्क से अंतिम योजना तक।",
                mr: "हे आहे — तुमचं Std 11 कॅपस्टोन! चला या वर्षी तुम्ही जे काही शिकलात ते एका संपूर्ण रुग्ण प्रवासात एकत्र करूया, पहिल्या संपर्कापासून अंतिम योजनेपर्यंत."
              },
              data: { steps: [
              {
                situation: { en:"A patient arrives describing fatigue, occasional dizziness, and a fast heartbeat that's been going on for two weeks. What's your first priority?",
                             hi:"एक मरीज़ थकान, कभी-कभी चक्कर, और तेज़ दिल की धड़कन का वर्णन करते हुए आता है जो दो हफ़्तों से चल रहा है। तुम्हारी पहली प्राथमिकता क्या है?",
                             mr:"एक रुग्ण थकवा, अधूनमधून चक्कर, आणि दोन आठवड्यांपासून सुरू असलेली जलद हृदयगती वर्णन करत येतो. तुमचं पहिलं प्राधान्य काय आहे?" },
                choices: [
                  { label:{en:"Check full vitals and get an ECG, since these symptoms together could point to a cardiac issue", hi:"पूरे वाइटल्स जाँचो और ईसीजी करो, क्योंकि ये लक्षण एक साथ दिल की समस्या की ओर इशारा कर सकते हैं", mr:"संपूर्ण व्हायटल्स तपासा आणि ईसीजी करा, कारण ही लक्षणं एकत्र हृदयाच्या समस्येकडे निर्देश करू शकतात"}, quality:"best",
                    outcome:{en:"Great instinct! Fatigue, dizziness, and rapid heartbeat together are exactly the kind of combination that warrants a full vitals check and ECG — real diagnostic thinking from this whole year.",hi:"बेहतरीन सोच! थकान, चक्कर, और तेज़ दिल की धड़कन एक साथ बिल्कुल वैसा संयोजन है जो पूरी वाइटल्स जाँच और ईसीजी की माँग करता है — इस पूरे साल की असली निदान सोच।",mr:"उत्तम अंतःप्रेरणा! थकवा, चक्कर, आणि जलद हृदयगती एकत्र अगदी असंच संयोजन आहे जे पूर्ण व्हायटल्स तपासणी आणि ईसीजीची मागणी करतं — या संपूर्ण वर्षाचा खरा निदान विचार."} },
                  { label:{en:"Assume it's just stress and send them home without further checks", hi:"मान लो कि यह बस तनाव है और बिना और जाँच के उन्हें घर भेज दो", mr:"असं गृहीत धरा की हा फक्त तणाव आहे आणि पुढील तपासणीशिवाय त्यांना घरी पाठवा"}, quality:"risky",
                    outcome:{en:"This risks missing something important. While stress could be a factor, these specific symptoms together deserve proper investigation before ruling out anything more serious.",hi:"इससे कुछ ज़रूरी छूटने का जोखिम है। तनाव एक कारक हो सकता है, लेकिन ये खास लक्षण एक साथ किसी और गंभीर चीज़ को खारिज करने से पहले उचित जांच के हकदार हैं।",mr:"यात काहीतरी महत्त्वाचं चुकण्याचा धोका आहे. तणाव एक घटक असू शकतो, पण ही विशिष्ट लक्षणं एकत्र अधिक गंभीर काहीही नाकारण्याआधी योग्य तपासणीस पात्र आहेत."} }
                ]
              },
              {
                situation: { en:"Tests reveal a mild but genuine heart rhythm irregularity. The patient is anxious and asks what happens next. How do you guide them forward?",
                             hi:"टेस्ट एक हल्की लेकिन असली दिल की लय की अनियमितता दिखाते हैं। मरीज़ चिंतित है और पूछता है कि आगे क्या होता है। तुम उन्हें आगे कैसे निर्देशित करते हो?",
                             mr:"चाचण्या एक सौम्य पण खरी हृदय तालाची अनियमितता दाखवतात. रुग्ण चिंतित आहे आणि विचारतो पुढे काय होतं. तुम्ही त्यांना पुढे कसं मार्गदर्शन करता?" },
                choices: [
                  { label:{en:"Explain the finding clearly, refer them to a cardiologist for specialist follow-up, and reassure them this is a manageable, well-understood next step", hi:"निष्कर्ष को स्पष्ट रूप से समझाओ, विशेषज्ञ फ़ॉलो-अप के लिए उन्हें कार्डियोलॉजिस्ट के पास रेफर करो, और उन्हें आश्वस्त करो कि यह एक प्रबंधनीय, अच्छी तरह समझा गया अगला कदम है", mr:"निष्कर्ष स्पष्टपणे समजावून सांगा, तज्ज्ञ फॉलो-अपसाठी त्यांना कार्डिओलॉजिस्टकडे रेफर करा, आणि त्यांना आश्वासन द्या की हे व्यवस्थापित करण्यायोग्य, नीट समजलेलं पुढचं पाऊल आहे"}, quality:"best",
                    outcome:{en:"Perfect integration of everything you've learned this year! Clear communication, appropriate specialist referral, and genuine reassurance — this is exactly what real Specialist-level judgment looks like.",hi:"इस साल तुमने जो कुछ भी सीखा उसका बेहतरीन एकीकरण! स्पष्ट बातचीत, उचित विशेषज्ञ रेफरल, और असली आश्वासन — यही बिल्कुल असली स्पेशलिस्ट-स्तर के निर्णय जैसा दिखता है।",mr:"या वर्षी तुम्ही जे काही शिकलात त्याचं उत्तम एकत्रीकरण! स्पष्ट संवाद, योग्य तज्ज्ञ रेफरल, आणि खरं आश्वासन — हेच अगदी खऱ्या स्पेशालिस्ट-पातळीच्या निर्णयासारखं दिसतं."} },
                  { label:{en:"Just tell them the test results without explaining what happens next", hi:"बस उन्हें टेस्ट के नतीजे बताओ बिना यह समझाए कि आगे क्या होता है", mr:"फक्त त्यांना चाचणी निकाल सांगा पुढे काय होतं ते न समजावता"}, quality:"risky",
                    outcome:{en:"This leaves the patient without a clear path forward. After a whole year learning communication, referral, and reassurance, a complete patient journey needs all three working together.",hi:"यह मरीज़ को आगे के स्पष्ट रास्ते के बिना छोड़ देता है। बातचीत, रेफरल, और आश्वासन सीखने के एक पूरे साल के बाद, एक पूरी मरीज़ यात्रा को तीनों को एक साथ काम करने की ज़रूरत है।",mr:"यामुळे रुग्ण पुढच्या स्पष्ट मार्गाशिवाय राहतो. संवाद, रेफरल, आणि आश्वासन शिकण्याच्या संपूर्ण वर्षानंतर, संपूर्ण रुग्ण प्रवासाला तिन्ही एकत्र काम करण्याची गरज असते."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🏆", title: "Celebrate your Specialist-level growth", mentorVisual: "🏆",
              mentorIntro: {
                en: "Look how far you've come this year — real judgment calls, real communication, real specialist thinking. Let's celebrate.",
                hi: "देखो इस साल तुम कितनी दूर आए — असली फ़ैसले, असली बातचीत, असली स्पेशलिस्ट सोच। चलो जश्न मनाते हैं।",
                mr: "बघा या वर्षी तुम्ही किती पुढे आलात — खरे निर्णय, खरा संवाद, खरा स्पेशालिस्ट विचार. चला उत्सव साजरा करूया."
              },
              data: { visual: "🏆", hotspots: [
              { label:{en:"Real judgment calls",hi:"असली फ़ैसले",mr:"खरे निर्णय"}, fact:{en:"This year, you practiced making genuine judgment calls with real consequences, not just picking the 'right' answer!"} },
              { label:{en:"Multiple specialties explored",hi:"कई स्पेशलिटी एक्सप्लोर कीं",mr:"अनेक खासियती एक्सप्लोर केल्या"}, fact:{en:"You explored diagnosis, dosage, surgery, ethics, research, referral, communication, crisis response, and more!"} },
              { label:{en:"Ready for the final year",hi:"आखिरी साल के लिए तैयार",mr:"शेवटच्या वर्षासाठी तयार"}, fact:{en:"Std 12, your final year in this journey, will bring it all together in even more advanced ways!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Std 11 capstone recap",
              desc: { en:"A comprehensive recap quiz combining everything from this year's Specialist-level missions.", hi:"इस साल के स्पेशलिस्ट-स्तर के मिशन से सब कुछ मिलाकर एक व्यापक रीकैप क्विज़।", mr:"या वर्षीच्या स्पेशालिस्ट-पातळीच्या मिशन्समधून सर्वकाही एकत्र करणारा एक सर्वसमावेशक रीकॅप क्विझ." } },
            { type: "Reflect", icon: "💭", title: "A message to Std 12 you",
              desc: { en:"Write a message to yourself about how it felt to make real judgment calls this year, and what you're ready for in your final year.", hi:"अपने आप को एक संदेश लिखो कि इस साल असली फ़ैसले लेना कैसा महसूस हुआ, और तुम अपने आखिरी साल में किसके लिए तैयार हो।", mr:"या वर्षी खरे निर्णय घेणं कसं वाटलं आणि तुमच्या शेवटच्या वर्षात तुम्ही कशासाठी तयार आहात याबद्दल स्वतःला संदेश लिहा." } },
            { engine: "flip-cards", icon: "🃏", title: "Std 11 Year Highlights", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a year of real judgment! Flip each card for a fun recap of your journey.",
                hi: "क्या असली निर्णय का साल रहा! अपनी यात्रा का मज़ेदार सारांश देखने के लिए हर कार्ड पलटो।",
                mr: "काय खऱ्या निर्णयाचं वर्ष होतं! तुमच्या प्रवासाचा मजेदार आढावा बघण्यासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Where did we start?",hi:"हमने कहाँ से शुरुआत की?",mr:"आपण कुठून सुरुवात केली?"}, back:{en:"You started this year facing your very first branching scenario — a real diagnosis judgment call! 🩺",hi:"तुमने इस साल की शुरुआत अपने बिल्कुल पहले ब्रांचिंग परिदृश्य का सामना करके की — एक असली निदान फ़ैसला! 🩺",mr:"तुम्ही या वर्षाची सुरुवात तुमच्या अगदी पहिल्या ब्रँचिंग परिस्थितीला सामोरं जाऊन केली — एक खरा निदान निर्णय! 🩺"} },
              { front:{en:"Ethics and judgment?",hi:"नैतिकता और निर्णय?",mr:"नैतिकता आणि निर्णय?"}, back:{en:"You navigated real ethical situations, like confidentiality — genuine judgment, not just facts! ⚖️",hi:"तुमने असली नैतिक स्थितियों को नेविगेट किया, जैसे गोपनीयता — असली निर्णय, सिर्फ़ तथ्य नहीं! ⚖️",mr:"तुम्ही खऱ्या नैतिक परिस्थितींमधून मार्ग काढला, जसं गोपनीयता — खरा निर्णय, फक्त तथ्यं नाही! ⚖️"} },
              { front:{en:"What's next?",hi:"आगे क्या?",mr:"पुढे काय?"}, back:{en:"Next year in Std 12, your final year, brings everything together at the highest level yet! 🚀",hi:"अगले साल Std 12 में, तुम्हारा आखिरी साल, अब तक के सबसे ऊँचे स्तर पर सब कुछ एक साथ लाता है! 🚀",mr:"पुढच्या वर्षी Std 12 मध्ये, तुमचं शेवटचं वर्ष, आतापर्यंतच्या सर्वोच्च पातळीवर सर्वकाही एकत्र आणतं! 🚀"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "How Much Do You Remember?", mentorVisual: "🏆",
              mentorIntro: {
                en: "One last check-in before the year wraps up! Let's see what stuck from this whole year.",
                hi: "साल खत्म होने से पहले एक आखिरी जांच! देखते हैं इस पूरे साल से क्या याद रहा।",
                mr: "वर्ष संपण्याआधी शेवटची एक तपासणी! बघूया या संपूर्ण वर्षातून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"This year's branching scenarios always had one obviously perfect choice with no real trade-offs.",hi:"इस साल के ब्रांचिंग परिदृश्यों में हमेशा एक स्पष्ट रूप से सही विकल्प था जिसमें कोई असली ट्रेड-ऑफ नहीं था।",mr:"या वर्षीच्या ब्रँचिंग परिस्थितींमध्ये नेहमी एक स्पष्टपणे परिपूर्ण पर्याय होता ज्यात कोणतेही खरे तडजोड नव्हते."}, answer:false, explain:{en:"Myth! Real judgment calls, like the ones you practiced, involve weighing genuine trade-offs — that's exactly what makes them real decisions.",hi:"मिथक! असली फ़ैसले, जैसे तुमने अभ्यास किए, में असली ट्रेड-ऑफ को तौलना शामिल है — यही बिल्कुल है जो उन्हें असली फ़ैसले बनाता है।",mr:"मिथक! खरे निर्णय, जसे तुम्ही सराव केले, त्यात खऱ्या तडजोडींचं वजन करणं समाविष्ट आहे — हेच अगदी त्यांना खरे निर्णय बनवतं."} },
              { text:{en:"Clear communication, appropriate referral, and genuine care all work together in real patient care.",hi:"स्पष्ट बातचीत, उचित रेफरल, और असली देखभाल सब असली मरीज़ देखभाल में एक साथ काम करते हैं।",mr:"स्पष्ट संवाद, योग्य रेफरल, आणि खरी काळजी सर्व खऱ्या रुग्ण काळजीत एकत्र काम करतात."}, answer:true, explain:{en:"True! You practiced exactly this integration throughout Std 11 — these skills genuinely work best together.",hi:"सच! तुमने Std 11 भर बिल्कुल इसी एकीकरण का अभ्यास किया — ये कौशल वाकई साथ में सबसे अच्छे काम करते हैं।",mr:"खरं! तुम्ही Std 11 भर अगदी हेच एकत्रीकरण सराव केलं — ही कौशल्यं खरंच एकत्र सर्वोत्तम काम करतात."} },
              { text:{en:"This is the last year you'll ever explore Doctor & Healthcare topics.",hi:"यह आखिरी साल है जब तुम कभी डॉक्टर और स्वास्थ्य से जुड़े विषय एक्सप्लोर करोगे।",mr:"डॉक्टर आणि आरोग्य विषय एक्सप्लोर करण्याचं हे शेवटचं वर्ष आहे."}, answer:false, explain:{en:"Myth! Std 12, your final year, still awaits — the deepest, most advanced year in this whole journey.",hi:"मिथक! Std 12, तुम्हारा आखिरी साल, अभी बाकी है — इस पूरी यात्रा का सबसे गहरा, सबसे एडवांस साल।",mr:"मिथक! Std 12, तुमचं शेवटचं वर्ष, अजून बाकी आहे — या संपूर्ण प्रवासातील सर्वात खोल, सर्वात प्रगत वर्ष."} }
            ]}}
          ]}
        ]
      },
      "12": {
        band: "Specialist",
        bandTagline: "The final year — complex, multi-layered cases requiring everything you've built across 6 years.",
        months: [
          { label: "Advanced Cardiology Case",
            bonusAssignment: {
              title: { en: "Complex Cardiology Case Write-Up", hi: "जटिल कार्डियोलॉजी केस लेखन", mr: "जटिल कार्डिओलॉजी केस लेखन" },
              prompt: { en: "Write a fictional case involving a heart condition with more than one complicating factor. Take a photo!",
                        hi: "एक से ज़्यादा जटिल करने वाले कारक वाली दिल की स्थिति से जुड़ा एक काल्पनिक केस लिखो। फोटो लो!",
                        mr: "एकापेक्षा जास्त गुंतागुंतीचे घटक असलेल्या हृदयाच्या स्थितीशी संबंधित एक काल्पनिक केस लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "❤️‍🩹", title: "The Complex Cardiology Case", mentorVisual: "❤️‍🩹",
              mentorIntro: {
                en: "This year, cases get genuinely complex — more than one thing happening at once, just like in real medicine. Let's work through your first advanced case.",
                hi: "इस साल, मामले वाकई जटिल हो जाते हैं — एक साथ एक से ज़्यादा चीज़ें हो रही हैं, बिल्कुल असली चिकित्सा की तरह। चलो तुम्हारे पहले एडवांस केस से गुज़रते हैं।",
                mr: "या वर्षी, केसेस खरंच जटिल होतात — एकाच वेळी एकापेक्षा जास्त गोष्टी घडत आहेत, अगदी खऱ्या वैद्यकशास्त्रासारखं. चला तुमच्या पहिल्या प्रगत केसमधून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"An older patient with existing diabetes now also shows signs of irregular heartbeat and mild chest discomfort. Their diabetes complicates typical heart treatment options. What's your priority?",
                             hi:"पहले से डायबिटीज़ वाला एक बुज़ुर्ग मरीज़ अब अनियमित दिल की धड़कन और हल्की सीने की बेचैनी के संकेत भी दिखाता है। उनकी डायबिटीज़ सामान्य दिल के इलाज विकल्पों को जटिल बनाती है। तुम्हारी प्राथमिकता क्या है?",
                             mr:"आधीच मधुमेह असलेला एक वृद्ध रुग्ण आता अनियमित हृदयगती आणि सौम्य छातीतील अस्वस्थतेची लक्षणंही दाखवतो. त्यांचा मधुमेह ठराविक हृदय उपचार पर्यायांना गुंतागुंतीचं बनवतो. तुमचं प्राधान्य काय आहे?" },
                choices: [
                  { label:{en:"Coordinate with an endocrinologist alongside cardiology, since both conditions need to be managed together", hi:"कार्डियोलॉजी के साथ एक एंडोक्राइनोलॉजिस्ट के साथ समन्वय करो, क्योंकि दोनों स्थितियों को साथ में संभालने की ज़रूरत है", mr:"कार्डिओलॉजीसोबत एंडोक्रायनोलॉजिस्टशी समन्वय साधा, कारण दोन्ही स्थिती एकत्र व्यवस्थापित करण्याची गरज आहे"}, quality:"best",
                    outcome:{en:"Excellent multi-specialty thinking! Complex cases with multiple conditions genuinely benefit from coordinated care across specialties, not treating each issue in isolation.",hi:"बेहतरीन बहु-विशेषज्ञता सोच! कई स्थितियों वाले जटिल मामले वाकई विशेषज्ञताओं में समन्वित देखभाल से लाभान्वित होते हैं, हर समस्या को अलग-अलग इलाज करने से नहीं।",mr:"उत्तम बहु-खासियत विचार! अनेक स्थिती असलेल्या जटिल केसेसना खरंच खासियतींमध्ये समन्वित काळजीचा फायदा होतो, प्रत्येक समस्येवर वेगळं उपचार करण्यापेक्षा."} },
                  { label:{en:"Treat only the heart symptoms and ignore how the diabetes might interact", hi:"केवल दिल के लक्षणों का इलाज करो और यह नज़रअंदाज़ करो कि डायबिटीज़ कैसे परस्पर क्रिया कर सकती है", mr:"फक्त हृदयाच्या लक्षणांवर उपचार करा आणि मधुमेह कसा परस्परसंवाद करू शकतो ते दुर्लक्षित करा"}, quality:"risky",
                    outcome:{en:"This misses crucial complexity. Treating conditions in isolation, without considering how they interact, can lead to treatment decisions that don't account for the whole picture.",hi:"यह महत्वपूर्ण जटिलता छोड़ देता है। स्थितियों का अलग-अलग इलाज करना, यह विचार किए बिना कि वे कैसे परस्पर क्रिया करती हैं, इलाज के फ़ैसलों की ओर ले जा सकता है जो पूरी तस्वीर को ध्यान में नहीं रखते।",mr:"यात महत्त्वाची गुंतागुंत चुकते. स्थितींवर वेगळं उपचार करणं, त्या कशा परस्परसंवाद करतात याचा विचार न करता, संपूर्ण चित्र विचारात न घेणाऱ्या उपचार निर्णयांकडे नेऊ शकतं."} }
                ]
              },
              {
                situation: { en:"The endocrinologist and cardiologist now need to agree on a treatment plan that manages both conditions safely together. What guides this joint decision?",
                             hi:"एंडोक्राइनोलॉजिस्ट और कार्डियोलॉजिस्ट को अब एक इलाज योजना पर सहमत होने की ज़रूरत है जो दोनों स्थितियों को सुरक्षित रूप से एक साथ संभाले। इस संयुक्त फ़ैसले का मार्गदर्शन क्या करता है?",
                             mr:"एंडोक्रायनोलॉजिस्ट आणि कार्डिओलॉजिस्टला आता दोन्ही स्थिती सुरक्षितपणे एकत्र व्यवस्थापित करणाऱ्या उपचार योजनेवर सहमत होण्याची गरज आहे. या संयुक्त निर्णयाला काय मार्गदर्शन करतं?" },
                choices: [
                  { label:{en:"Choose treatments that are proven safe for patients with both conditions together, even if it means a more conservative approach", hi:"ऐसे इलाज चुनो जो दोनों स्थितियों वाले मरीज़ों के लिए सुरक्षित साबित हुए हैं, भले ही इसका मतलब एक ज़्यादा कंज़र्वेटिव तरीका हो", mr:"असे उपचार निवडा जे दोन्ही स्थिती एकत्र असलेल्या रुग्णांसाठी सुरक्षित सिद्ध झाले आहेत, जरी याचा अर्थ अधिक कंझर्व्हेटिव्ह पद्धत असला तरी"}, quality:"best",
                    outcome:{en:"Wise judgment! When conditions interact, choosing proven-safe combined approaches — even if more conservative — protects the patient better than aggressive treatment for just one condition.",hi:"बुद्धिमान निर्णय! जब स्थितियाँ परस्पर क्रिया करती हैं, साबित-सुरक्षित संयुक्त तरीकों को चुनना — भले ही ज़्यादा कंज़र्वेटिव हो — सिर्फ़ एक स्थिति के लिए आक्रामक इलाज से मरीज़ की बेहतर रक्षा करता है।",mr:"शहाणा निर्णय! जेव्हा स्थिती परस्परसंवाद करतात, सिद्ध-सुरक्षित संयुक्त पद्धती निवडणं — जरी अधिक कंझर्व्हेटिव्ह असल्या तरी — फक्त एका स्थितीसाठी आक्रमक उपचारापेक्षा रुग्णाचं चांगलं रक्षण करतं."} },
                  { label:{en:"Just go with the most aggressive heart treatment available, without considering the diabetes interaction", hi:"बस उपलब्ध सबसे आक्रामक दिल के इलाज के साथ जाओ, डायबिटीज़ की परस्पर क्रिया पर विचार किए बिना", mr:"डायबिटीजच्या परस्परसंवादाचा विचार न करता, उपलब्ध सर्वात आक्रमक हृदय उपचारासोबत जा"}, quality:"risky",
                    outcome:{en:"This could be dangerous. Aggressive treatment without considering how it interacts with existing conditions can create new, avoidable risks for the patient.",hi:"यह खतरनाक हो सकता है। यह विचार किए बिना कि यह मौजूदा स्थितियों के साथ कैसे परस्पर क्रिया करता है, आक्रामक इलाज मरीज़ के लिए नए, टालने योग्य जोखिम पैदा कर सकता है।",mr:"हे धोकादायक असू शकतं. ते विद्यमान स्थितींशी कसा परस्परसंवाद करतं याचा विचार न करता, आक्रमक उपचार रुग्णासाठी नवीन, टाळता येण्याजोगे धोके निर्माण करू शकतो."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "❤️‍🩹", title: "Explore complex cardiac cases", mentorVisual: "❤️‍🩹",
              mentorIntro: {
                en: "Let's explore why cardiology cases become more complex when other conditions are involved.",
                hi: "चलो एक्सप्लोर करते हैं कि जब अन्य स्थितियाँ शामिल होती हैं तो कार्डियोलॉजी मामले ज़्यादा जटिल क्यों हो जाते हैं।",
                mr: "चला एक्सप्लोर करूया की इतर स्थिती सामील असताना कार्डिओलॉजी केसेस अधिक जटिल का होतात."
              },
              data: { visual: "❤️‍🩹", hotspots: [
              { label:{en:"Comorbidities",hi:"सह-रुग्णताएँ",mr:"सह-आजार"}, fact:{en:"When a patient has multiple conditions at once (called comorbidities), treatment decisions become genuinely more complex!"} },
              { label:{en:"Drug interactions",hi:"दवा परस्पर क्रियाएँ",mr:"औषध परस्परसंवाद"}, fact:{en:"Medicines for one condition can sometimes affect another — doctors must carefully check for interactions!"} },
              { label:{en:"Team-based care",hi:"टीम-आधारित देखभाल",mr:"संघ-आधारित काळजी"}, fact:{en:"Complex cases like this often need multiple specialists working together as one coordinated team!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Advanced cardiology quiz",
              desc: { en:"A real quiz on managing complex cardiology cases involving multiple conditions.", hi:"कई स्थितियों वाले जटिल कार्डियोलॉजी मामलों को संभालने पर एक असली क्विज़।", mr:"अनेक स्थिती असलेल्या जटिल कार्डिओलॉजी केसेस व्यवस्थापित करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Complexity and teamwork",
              desc: { en:"How do you think working as part of a specialist team, rather than alone, changes how you'd approach a complex case?", hi:"तुम्हें क्या लगता है अकेले के बजाय एक विशेषज्ञ टीम के हिस्से के रूप में काम करना एक जटिल मामले के प्रति तुम्हारे तरीके को कैसे बदलता है?", mr:"एकट्याऐवजी तज्ज्ञ टीमचा भाग म्हणून काम करणं जटिल केसकडे तुमचा दृष्टिकोन कसा बदलतं असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Complex Cardiology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about complex cardiology cases!",
                hi: "चलो और गहराई में जाते हैं — जटिल कार्डियोलॉजी मामलों के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — जटिल कार्डिओलॉजी केसेसबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Multidisciplinary rounds?",hi:"बहु-विषयक राउंड?",mr:"बहु-विद्याशाखीय फेऱ्या?"}, back:{en:"Hospitals often hold 'multidisciplinary rounds' where different specialists discuss complex patients together! 👥",hi:"अस्पताल अक्सर 'मल्टीडिसिप्लिनरी राउंड' आयोजित करते हैं जहाँ अलग-अलग विशेषज्ञ जटिल मरीज़ों पर एक साथ चर्चा करते हैं! 👥",mr:"रुग्णालयं अनेकदा 'मल्टीडिसिप्लिनरी फेऱ्या' आयोजित करतात जिथे वेगवेगळे तज्ज्ञ जटिल रुग्णांबद्दल एकत्र चर्चा करतात! 👥"} },
              { front:{en:"Electronic records help?",hi:"इलेक्ट्रॉनिक रिकॉर्ड मदद करते हैं?",mr:"इलेक्ट्रॉनिक नोंदी मदत करतात?"}, back:{en:"Electronic health records help different specialists see a patient's full history, supporting better coordinated care! 💻",hi:"इलेक्ट्रॉनिक हेल्थ रिकॉर्ड अलग-अलग विशेषज्ञों को मरीज़ का पूरा इतिहास देखने में मदद करते हैं, बेहतर समन्वित देखभाल का समर्थन करते हुए! 💻",mr:"इलेक्ट्रॉनिक आरोग्य नोंदी वेगवेगळ्या तज्ज्ञांना रुग्णाचा संपूर्ण इतिहास बघण्यास मदत करतात, चांगल्या समन्वित काळजीला समर्थन देत! 💻"} },
              { front:{en:"Complexity is common?",hi:"जटिलता आम है?",mr:"गुंतागुंत सामान्य आहे?"}, back:{en:"As people age, having multiple health conditions at once becomes increasingly common — complex cases aren't rare exceptions! 📈",hi:"जैसे-जैसे लोग बड़े होते हैं, एक साथ कई स्वास्थ्य स्थितियों का होना तेज़ी से आम हो जाता है — जटिल मामले दुर्लभ अपवाद नहीं हैं! 📈",mr:"लोक वयस्क होतात तसतसं, एकाच वेळी अनेक आरोग्य स्थिती असणं वाढत्या प्रमाणात सामान्य होतं — जटिल केसेस दुर्मिळ अपवाद नाहीत! 📈"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Complex Cardiology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Having multiple health conditions at once is a rare, unusual situation for doctors to encounter.",hi:"एक साथ कई स्वास्थ्य स्थितियों का होना डॉक्टरों के लिए सामना करने की एक दुर्लभ, असामान्य स्थिति है।",mr:"एकाच वेळी अनेक आरोग्य स्थिती असणं ही डॉक्टरांना सामोरं जाण्याची दुर्मिळ, असामान्य परिस्थिती आहे."}, answer:false, explain:{en:"Myth! As people age especially, having multiple conditions together becomes increasingly common, not rare.",hi:"मिथक! खासकर जैसे-जैसे लोग बड़े होते हैं, एक साथ कई स्थितियों का होना दुर्लभ नहीं, तेज़ी से आम हो जाता है।",mr:"मिथक! विशेषतः लोक वयस्क होतात तसतसं, एकत्र अनेक स्थिती असणं दुर्मिळ नाही, वाढत्या प्रमाणात सामान्य होतं."} },
              { text:{en:"Specialists often coordinate together through multidisciplinary rounds for complex cases.",hi:"जटिल मामलों के लिए विशेषज्ञ अक्सर मल्टीडिसिप्लिनरी राउंड के ज़रिए एक साथ समन्वय करते हैं।",mr:"जटिल केसेससाठी तज्ज्ञ अनेकदा मल्टीडिसिप्लिनरी फेऱ्यांद्वारे एकत्र समन्वय साधतात."}, answer:true, explain:{en:"True! This kind of coordinated, multidisciplinary approach is a real and common practice in hospitals.",hi:"सच! इस तरह का समन्वित, बहु-विषयक तरीका अस्पतालों में एक असली और आम अभ्यास है।",mr:"खरं! अशा प्रकारचा समन्वित, बहु-विद्याशाखीय दृष्टिकोन रुग्णालयांमध्ये एक खरी आणि सामान्य पद्धत आहे."} },
              { text:{en:"Treatment decisions never need to consider how a patient's other health conditions might interact.",hi:"इलाज के फ़ैसलों को कभी भी यह विचार करने की ज़रूरत नहीं है कि मरीज़ की अन्य स्वास्थ्य स्थितियाँ कैसे परस्पर क्रिया कर सकती हैं।",mr:"उपचार निर्णयांना रुग्णाच्या इतर आरोग्य स्थिती कशा परस्परसंवाद करू शकतात याचा कधीच विचार करण्याची गरज नसते."}, answer:false, explain:{en:"Myth! Considering interactions between multiple conditions is essential for safe, effective treatment decisions.",hi:"मिथक! कई स्थितियों के बीच परस्पर क्रिया पर विचार करना सुरक्षित, असरदार इलाज के फ़ैसलों के लिए ज़रूरी है।",mr:"मिथक! अनेक स्थितींमधील परस्परसंवादाचा विचार करणं सुरक्षित, प्रभावी उपचार निर्णयांसाठी आवश्यक आहे."} }
            ]}}
          ]},
          { label: "Advanced Orthopedic Case",
            bonusAssignment: {
              title: { en: "Complex Orthopedic Case Write-Up", hi: "जटिल ऑर्थोपेडिक केस लेखन", mr: "जटिल ऑर्थोपेडिक केस लेखन" },
              prompt: { en: "Write a fictional case involving an orthopedic injury complicated by another factor (like age or a prior injury). Take a photo!",
                        hi: "एक और कारक (जैसे उम्र या पिछली चोट) से जटिल एक ऑर्थोपेडिक चोट से जुड़ा काल्पनिक केस लिखो। फोटो लो!",
                        mr: "दुसऱ्या घटकाने (जसं वय किंवा आधीची दुखापत) गुंतागुंतीची झालेली ऑर्थोपेडिक दुखापत असलेली काल्पनिक केस लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🦴", title: "The Complex Orthopedic Case", mentorVisual: "🦴",
              mentorIntro: {
                en: "Let's work through an orthopedic case with real complexity — an injury combined with a complicating factor.",
                hi: "चलो असली जटिलता वाले एक ऑर्थोपेडिक केस से गुज़रते हैं — एक जटिल करने वाले कारक के साथ मिली एक चोट।",
                mr: "चला खऱ्या गुंतागुंतीसह एका ऑर्थोपेडिक केसमधून जाऊया — एका गुंतागुंतीच्या घटकासह मिळालेली दुखापत."
              },
              data: { steps: [
              {
                situation: { en:"An elderly patient with osteoporosis (weakened bones) has fractured their hip in a fall. Their weakened bones make standard treatment riskier. What's your priority?",
                             hi:"ऑस्टियोपोरोसिस (कमज़ोर हड्डियों) वाला एक बुज़ुर्ग मरीज़ गिरने में अपने कूल्हे को फ्रैक्चर कर चुका है। उनकी कमज़ोर हड्डियाँ मानक इलाज को ज़्यादा जोखिम भरा बनाती हैं। तुम्हारी प्राथमिकता क्या है?",
                             mr:"ऑस्टियोपोरोसिस (कमकुवत हाडं) असलेल्या एका वृद्ध रुग्णाने पडल्यामुळे त्यांचा नितंब फ्रॅक्चर केला आहे. त्यांची कमकुवत हाडं मानक उपचार अधिक धोकादायक बनवतात. तुमचं प्राधान्य काय आहे?" },
                choices: [
                  { label:{en:"Consult with a specialist experienced in treating fractures in osteoporotic bone, adjusting the surgical approach accordingly", hi:"ऑस्टियोपोरोटिक हड्डी में फ्रैक्चर के इलाज में अनुभवी एक विशेषज्ञ से सलाह लो, तदनुसार सर्जिकल तरीके को समायोजित करते हुए", mr:"ऑस्टियोपोरोटिक हाडातील फ्रॅक्चरवर उपचार करण्याचा अनुभव असलेल्या तज्ज्ञाचा सल्ला घ्या, त्यानुसार शस्त्रक्रिया पद्धत समायोजित करत"}, quality:"best",
                    outcome:{en:"Smart approach! Weakened bone from osteoporosis genuinely changes surgical risk and technique — bringing in specialized expertise for this specific complication is exactly right.",hi:"स्मार्ट तरीका! ऑस्टियोपोरोसिस से कमज़ोर हड्डी वाकई सर्जिकल जोखिम और तकनीक को बदलती है — इस खास जटिलता के लिए विशेष विशेषज्ञता लाना बिल्कुल सही है।",mr:"स्मार्ट पद्धत! ऑस्टियोपोरोसिसमुळे कमकुवत हाड खरंच शस्त्रक्रियेचा धोका आणि तंत्र बदलतं — या विशिष्ट गुंतागुंतीसाठी विशेष तज्ज्ञता आणणं अगदी बरोबर आहे."} },
                  { label:{en:"Use the exact same standard surgical approach as for a younger patient with strong bones", hi:"मज़बूत हड्डियों वाले एक छोटी उम्र के मरीज़ के लिए बिल्कुल वैसा ही मानक सर्जिकल तरीका इस्तेमाल करो", mr:"मजबूत हाडं असलेल्या तरुण रुग्णासाठी जसा आहे तसाच मानक शस्त्रक्रिया पद्धत वापरा"}, quality:"risky",
                    outcome:{en:"This ignores an important complication. Weakened bone needs adjusted technique — using a standard approach without accounting for osteoporosis increases real surgical risk.",hi:"यह एक ज़रूरी जटिलता को नज़रअंदाज़ करता है। कमज़ोर हड्डी को समायोजित तकनीक चाहिए — ऑस्टियोपोरोसिस को ध्यान में रखे बिना मानक तरीके का इस्तेमाल असली सर्जिकल जोखिम बढ़ाता है।",mr:"हे एक महत्त्वाची गुंतागुंत दुर्लक्षित करतं. कमकुवत हाडाला समायोजित तंत्र हवं — ऑस्टियोपोरोसिस विचारात न घेता मानक पद्धत वापरणं खरा शस्त्रक्रिया धोका वाढवतं."} }
                ]
              },
              {
                situation: { en:"Surgery goes well, but now the patient needs a recovery plan. Given their osteoporosis, what should guide the rehabilitation approach?",
                             hi:"सर्जरी अच्छी तरह होती है, लेकिन अब मरीज़ को एक रिकवरी योजना चाहिए। उनके ऑस्टियोपोरोसिस को देखते हुए, रिहैबिलिटेशन तरीके का मार्गदर्शन क्या करना चाहिए?",
                             mr:"शस्त्रक्रिया चांगली होते, पण आता रुग्णाला रिकव्हरी योजना हवी. त्यांचा ऑस्टियोपोरोसिस लक्षात घेता, पुनर्वसन पद्धतीला काय मार्गदर्शन करावं?" },
                choices: [
                  { label:{en:"Design a careful, gradual rehabilitation plan that accounts for weaker bone strength, coordinating with physical therapy specialists", hi:"एक सावधान, क्रमिक रिहैबिलिटेशन योजना डिज़ाइन करो जो कमज़ोर हड्डी की मज़बूती को ध्यान में रखे, फिज़िकल थेरेपी विशेषज्ञों के साथ समन्वय करते हुए", mr:"कमकुवत हाडांची ताकद लक्षात घेणारी काळजीपूर्वक, हळूहळू पुनर्वसन योजना डिझाइन करा, फिजिकल थेरपी तज्ज्ञांशी समन्वय साधत"}, quality:"best",
                    outcome:{en:"Excellent complete-picture thinking! Recovery plans need to account for the patient's specific complications, not just follow a generic template — this is real Specialist-level care.",hi:"बेहतरीन पूरी-तस्वीर सोच! रिकवरी योजनाओं को मरीज़ की खास जटिलताओं को ध्यान में रखने की ज़रूरत है, सिर्फ़ एक सामान्य टेम्पलेट का पालन नहीं — यह असली स्पेशलिस्ट-स्तर की देखभाल है।",mr:"उत्तम संपूर्ण-चित्र विचार! रिकव्हरी योजनांना रुग्णाच्या विशिष्ट गुंतागुंती लक्षात घेण्याची गरज आहे, फक्त सामान्य टेम्प्लेट फॉलो न करता — ही खरी स्पेशालिस्ट-पातळीची काळजी आहे."} },
                  { label:{en:"Give them the same generic rehabilitation plan used for all hip fracture patients", hi:"उन्हें सभी कूल्हे फ्रैक्चर मरीज़ों के लिए इस्तेमाल होने वाली वही सामान्य रिहैबिलिटेशन योजना दो", mr:"त्यांना सर्व नितंब फ्रॅक्चर रुग्णांसाठी वापरली जाणारी तीच सामान्य पुनर्वसन योजना द्या"}, quality:"risky",
                    outcome:{en:"This misses their specific complication. A generic plan that doesn't account for weakened bone could put them at unnecessary risk during recovery.",hi:"यह उनकी खास जटिलता छोड़ देता है। एक सामान्य योजना जो कमज़ोर हड्डी को ध्यान में नहीं रखती, रिकवरी के दौरान उन्हें अनावश्यक जोखिम में डाल सकती है।",mr:"यात त्यांची विशिष्ट गुंतागुंत चुकते. कमकुवत हाड लक्षात न घेणारी सामान्य योजना रिकव्हरीदरम्यान त्यांना अनावश्यक धोक्यात टाकू शकते."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🦴", title: "Explore complex orthopedic factors", mentorVisual: "🦴",
              mentorIntro: {
                en: "Let's explore what makes orthopedic cases more complex when other factors are involved.",
                hi: "चलो एक्सप्लोर करते हैं कि जब अन्य कारक शामिल होते हैं तो ऑर्थोपेडिक मामले ज़्यादा जटिल क्यों हो जाते हैं।",
                mr: "चला एक्सप्लोर करूया की इतर घटक सामील असताना ऑर्थोपेडिक केसेस अधिक जटिल का होतात."
              },
              data: { visual: "🦴", hotspots: [
              { label:{en:"Bone quality varies",hi:"हड्डी की गुणवत्ता अलग होती है",mr:"हाडांची गुणवत्ता बदलते"}, fact:{en:"Conditions like osteoporosis genuinely change how surgeons approach fractures, since the bone itself is different!"} },
              { label:{en:"Age affects healing",hi:"उम्र ठीक होने को प्रभावित करती है",mr:"वय बरं होण्यावर परिणाम करतं"}, fact:{en:"Recovery time and approach often need adjusting based on a patient's age and overall health!"} },
              { label:{en:"Prevention matters too",hi:"बचाव भी मायने रखता है",mr:"प्रतिबंधही महत्त्वाचा आहे"}, fact:{en:"After treating a fracture from weak bones, doctors often also address the underlying bone health to prevent future fractures!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Advanced orthopedics quiz",
              desc: { en:"A real quiz on managing complex orthopedic cases with complicating factors.", hi:"जटिल करने वाले कारकों वाले जटिल ऑर्थोपेडिक मामलों को संभालने पर एक असली क्विज़।", mr:"गुंतागुंतीचे घटक असलेल्या जटिल ऑर्थोपेडिक केसेस व्यवस्थापित करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Adjusting for the individual",
              desc: { en:"Why do you think it's important for doctors to adjust their approach for each specific patient, rather than using the same plan for everyone?", hi:"तुम्हें क्यों लगता है कि डॉक्टरों के लिए हर खास मरीज़ के लिए अपना तरीका समायोजित करना ज़रूरी है, सबके लिए एक ही योजना इस्तेमाल करने के बजाय?", mr:"डॉक्टरांनी सर्वांसाठी एकच योजना वापरण्याऐवजी प्रत्येक विशिष्ट रुग्णासाठी त्यांचा दृष्टिकोन समायोजित करणं का महत्त्वाचं आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Complex Orthopedics Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about complex orthopedic cases!",
                hi: "चलो और गहराई में जाते हैं — जटिल ऑर्थोपेडिक मामलों के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — जटिल ऑर्थोपेडिक केसेसबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Bone density scans?",hi:"बोन डेंसिटी स्कैन?",mr:"हाड घनता स्कॅन?"}, back:{en:"Special scans can measure bone density, helping doctors identify osteoporosis before a fracture even happens! 📊",hi:"खास स्कैन बोन डेंसिटी को माप सकते हैं, डॉक्टरों को फ्रैक्चर होने से पहले ही ऑस्टियोपोरोसिस की पहचान करने में मदद करते हुए! 📊",mr:"खास स्कॅन हाडांची घनता मोजू शकतात, डॉक्टरांना फ्रॅक्चर होण्याआधीच ऑस्टियोपोरोसिस ओळखण्यास मदत करत! 📊"} },
              { front:{en:"Special implants exist?",hi:"खास इम्प्लांट मौजूद हैं?",mr:"खास इम्प्लांट अस्तित्वात आहेत?"}, back:{en:"Surgeons have special implant designs specifically for weaker, osteoporotic bone! 🔩",hi:"सर्जनों के पास खास तौर पर कमज़ोर, ऑस्टियोपोरोटिक हड्डी के लिए विशेष इम्प्लांट डिज़ाइन होते हैं! 🔩",mr:"सर्जनकडे विशेषतः कमकुवत, ऑस्टियोपोरोटिक हाडासाठी खास इम्प्लांट डिझाइन असतात! 🔩"} },
              { front:{en:"Fall prevention matters too?",hi:"गिरने से बचाव भी मायने रखता है?",mr:"पडणं टाळणंही महत्त्वाचं आहे?"}, back:{en:"After treating a fracture, doctors often also address fall risk, since preventing future falls is just as important! 🏠",hi:"फ्रैक्चर का इलाज करने के बाद, डॉक्टर अक्सर गिरने के जोखिम को भी संबोधित करते हैं, क्योंकि भविष्य में गिरने से बचाव उतना ही ज़रूरी है! 🏠",mr:"फ्रॅक्चरवर उपचार केल्यानंतर, डॉक्टर अनेकदा पडण्याच्या धोक्यालाही संबोधित करतात, कारण भविष्यातील पडणं टाळणं तितकंच महत्त्वाचं आहे! 🏠"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Complex Orthopedics or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Bone quality is exactly the same for every patient, regardless of conditions like osteoporosis.",hi:"बोन क्वालिटी हर मरीज़ के लिए बिल्कुल एक जैसी है, ऑस्टियोपोरोसिस जैसी स्थितियों की परवाह किए बिना।",mr:"हाडाची गुणवत्ता ऑस्टियोपोरोसिससारख्या स्थितींची पर्वा न करता प्रत्येक रुग्णासाठी अगदी सारखीच असते."}, answer:false, explain:{en:"Myth! Conditions like osteoporosis genuinely change bone quality, which affects surgical approach and risk.",hi:"मिथक! ऑस्टियोपोरोसिस जैसी स्थितियाँ वाकई बोन क्वालिटी बदलती हैं, जो सर्जिकल तरीके और जोखिम को प्रभावित करती हैं।",mr:"मिथक! ऑस्टियोपोरोसिससारख्या स्थिती खरंच हाडाची गुणवत्ता बदलतात, जी शस्त्रक्रिया पद्धत आणि धोक्यावर परिणाम करते."} },
              { text:{en:"Special scans can measure bone density to help identify weakened bone before a fracture.",hi:"खास स्कैन फ्रैक्चर से पहले कमज़ोर हड्डी की पहचान में मदद के लिए बोन डेंसिटी को माप सकते हैं।",mr:"खास स्कॅन फ्रॅक्चरआधी कमकुवत हाड ओळखण्यास मदत करण्यासाठी हाडांची घनता मोजू शकतात."}, answer:true, explain:{en:"True! Bone density scans are a real, useful tool for identifying osteoporosis risk.",hi:"सच! बोन डेंसिटी स्कैन ऑस्टियोपोरोसिस के जोखिम की पहचान के लिए एक असली, उपयोगी उपकरण हैं।",mr:"खरं! हाडांची घनता स्कॅन ऑस्टियोपोरोसिस धोका ओळखण्यासाठी एक खरं, उपयुक्त साधन आहे."} },
              { text:{en:"Recovery plans should always be exactly identical for every hip fracture patient, regardless of their other conditions.",hi:"रिकवरी योजनाएँ हमेशा हर कूल्हे फ्रैक्चर मरीज़ के लिए बिल्कुल एक जैसी होनी चाहिए, उनकी अन्य स्थितियों की परवाह किए बिना।",mr:"रिकव्हरी योजना नेहमी प्रत्येक नितंब फ्रॅक्चर रुग्णासाठी अगदी सारख्याच असाव्यात, त्यांच्या इतर स्थितींची पर्वा न करता."}, answer:false, explain:{en:"Myth! Recovery plans genuinely need to account for individual complications like osteoporosis, not follow one generic template.",hi:"मिथक! रिकवरी योजनाओं को वाकई ऑस्टियोपोरोसिस जैसी व्यक्तिगत जटिलताओं को ध्यान में रखने की ज़रूरत है, एक सामान्य टेम्पलेट का पालन नहीं।",mr:"मिथक! रिकव्हरी योजनांना खरंच ऑस्टियोपोरोसिससारख्या वैयक्तिक गुंतागुंती लक्षात घेण्याची गरज आहे, एक सामान्य टेम्प्लेट फॉलो न करता."} }
            ]}}
          ]},
          { label: "Advanced Neurology Case",
            bonusAssignment: {
              title: { en: "Complex Neurology Case Write-Up", hi: "जटिल न्यूरोलॉजी केस लेखन", mr: "जटिल न्यूरोलॉजी केस लेखन" },
              prompt: { en: "Write a fictional case involving a neurological symptom with an unclear cause. Take a photo of your case!",
                        hi: "अस्पष्ट कारण वाले न्यूरोलॉजिकल लक्षण से जुड़ा एक काल्पनिक केस लिखो। अपने केस की फोटो लो!",
                        mr: "अस्पष्ट कारण असलेल्या न्यूरोलॉजिकल लक्षणाशी संबंधित काल्पनिक केस लिहा. तुमच्या केसचा फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🧠", title: "The Complex Neurology Case", mentorVisual: "🧠",
              mentorIntro: {
                en: "Neurological cases can be some of the most puzzling in medicine, since the brain is still not fully understood. Let's work through one.",
                hi: "न्यूरोलॉजिकल मामले चिकित्सा में सबसे उलझाने वाले हो सकते हैं, क्योंकि दिमाग़ अभी भी पूरी तरह समझा नहीं गया है। चलो एक से गुज़रते हैं।",
                mr: "न्यूरोलॉजिकल केसेस वैद्यकशास्त्रातील सर्वात कोड्यात टाकणाऱ्या असू शकतात, कारण मेंदू अजूनही पूर्णपणे समजलेला नाही. चला एकातून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A patient reports recurring episodes of numbness in one hand, lasting a few minutes each time, then fully resolving. Initial scans show nothing unusual. What's your approach?",
                             hi:"एक मरीज़ एक हाथ में सुन्नपन के बार-बार होने वाले एपिसोड की रिपोर्ट करता है, हर बार कुछ मिनट तक रहते हुए, फिर पूरी तरह ठीक हो जाते हैं। शुरुआती स्कैन कुछ भी असामान्य नहीं दिखाते। तुम्हारा तरीका क्या है?",
                             mr:"एक रुग्ण एका हातात बधीरपणाच्या वारंवार होणाऱ्या भागांची तक्रार करतो, प्रत्येक वेळी काही मिनिटं टिकत, मग पूर्णपणे बरं होत. सुरुवातीचे स्कॅन काहीही असामान्य दाखवत नाहीत. तुमचा दृष्टिकोन काय आहे?" },
                choices: [
                  { label:{en:"Keep investigating with a detailed history and possibly further specialized testing, rather than dismissing it since initial scans were normal", hi:"एक विस्तृत इतिहास और संभवतः और विशेष टेस्टिंग के साथ जांच जारी रखो, बजाय इसे खारिज करने के क्योंकि शुरुआती स्कैन सामान्य थे", mr:"तपशीलवार इतिहास आणि शक्यतो पुढील विशेष चाचणीने तपासणी सुरू ठेवा, सुरुवातीचे स्कॅन सामान्य होते म्हणून ते फेटाळण्याऐवजी"}, quality:"best",
                    outcome:{en:"Good persistence! Normal initial scans don't automatically rule out something real — continuing to investigate recurring symptoms with more detail is exactly the right instinct.",hi:"अच्छी दृढ़ता! सामान्य शुरुआती स्कैन स्वतः किसी असली चीज़ को खारिज नहीं करते — ज़्यादा विवरण के साथ बार-बार होने वाले लक्षणों की जांच जारी रखना बिल्कुल सही सोच है।",mr:"चांगली चिकाटी! सामान्य सुरुवातीचे स्कॅन आपोआप काहीतरी खरं नाकारत नाहीत — अधिक तपशीलासह वारंवार होणाऱ्या लक्षणांची तपासणी सुरू ठेवणं अगदी योग्य अंतःप्रेरणा आहे."} },
                  { label:{en:"Dismiss the symptoms since the scans came back normal", hi:"लक्षणों को खारिज कर दो क्योंकि स्कैन सामान्य आए", mr:"लक्षणं फेटाळून द्या कारण स्कॅन सामान्य आले"}, quality:"risky",
                    outcome:{en:"This could miss something real. Some neurological conditions don't always show up on initial scans — recurring, specific symptoms deserve continued attention even with normal early results.",hi:"यह कुछ असली छोड़ सकता है। कुछ न्यूरोलॉजिकल स्थितियाँ हमेशा शुरुआती स्कैन में नहीं दिखतीं — बार-बार होने वाले, खास लक्षण सामान्य शुरुआती नतीजों के साथ भी लगातार ध्यान के हकदार हैं।",mr:"यात काहीतरी खरं चुकू शकतं. काही न्यूरोलॉजिकल स्थिती नेहमी सुरुवातीच्या स्कॅनमध्ये दिसत नाहीत — वारंवार होणारी, विशिष्ट लक्षणं सामान्य सुरुवातीच्या निकालांसहही सतत लक्ष देण्यास पात्र आहेत."} }
                ]
              },
              {
                situation: { en:"Further testing eventually reveals a rare but real underlying issue. The patient asks why it took so long to find. How do you respond?",
                             hi:"आगे की टेस्टिंग आख़िरकार एक दुर्लभ लेकिन असली अंतर्निहित समस्या दिखाती है। मरीज़ पूछता है कि इसे खोजने में इतना समय क्यों लगा। तुम कैसे जवाब देते हो?",
                             mr:"पुढील चाचणीत अखेर एक दुर्मिळ पण खरी मूळ समस्या दिसते. रुग्ण विचारतो हे शोधायला इतका वेळ का लागला. तुम्ही कसं उत्तर देता?" },
                choices: [
                  { label:{en:"Honestly explain that rare conditions can genuinely take time and careful investigation to diagnose, and that persistence was necessary and worthwhile", hi:"ईमानदारी से समझाओ कि दुर्लभ स्थितियों का निदान करने में वाकई समय और सावधान जांच लग सकती है, और यह दृढ़ता ज़रूरी और सार्थक थी", mr:"प्रामाणिकपणे समजावून सांगा की दुर्मिळ स्थितींचं निदान करण्यासाठी खरंच वेळ आणि काळजीपूर्वक तपासणी लागू शकते, आणि ही चिकाटी आवश्यक आणि सार्थक होती"}, quality:"best",
                    outcome:{en:"Excellent honesty! Explaining the genuine complexity of diagnosing rare conditions, rather than minimizing it, helps the patient understand and trust the process.",hi:"बेहतरीन ईमानदारी! दुर्लभ स्थितियों के निदान की असली जटिलता को समझाना, इसे कम आँकने के बजाय, मरीज़ को प्रक्रिया को समझने और भरोसा करने में मदद करता है।",mr:"उत्तम प्रामाणिकपणा! दुर्मिळ स्थितींच्या निदानाची खरी गुंतागुंत कमी न लेखता समजावून सांगणं रुग्णाला प्रक्रिया समजून घेण्यास आणि विश्वास ठेवण्यास मदत करतं."} },
                  { label:{en:"Brush off the question without really explaining the diagnostic process", hi:"बिना असल में निदान प्रक्रिया समझाए सवाल को टाल दो", mr:"निदान प्रक्रिया खरंच न समजावता प्रश्न टाळा"}, quality:"risky",
                    outcome:{en:"This misses a chance to build trust. Patients often appreciate understanding why something took time — avoiding the question can leave them feeling dismissed.",hi:"यह भरोसा बनाने का मौका छोड़ देता है। मरीज़ अक्सर यह समझने की सराहना करते हैं कि किसी चीज़ में समय क्यों लगा — सवाल से बचना उन्हें खारिज किया हुआ महसूस करा सकता है।",mr:"यामुळे विश्वास निर्माण करण्याची संधी चुकते. रुग्ण अनेकदा एखाद्या गोष्टीला वेळ का लागला हे समजून घेण्याचं कौतुक करतात — प्रश्न टाळल्याने त्यांना दुर्लक्षित केल्यासारखं वाटू शकतं."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🧠", title: "Explore diagnostic persistence", mentorVisual: "🧠",
              mentorIntro: {
                en: "Let's explore why persistence matters so much in neurology specifically.",
                hi: "चलो एक्सप्लोर करते हैं कि न्यूरोलॉजी में विशेष रूप से दृढ़ता इतनी मायने क्यों रखती है।",
                mr: "चला एक्सप्लोर करूया न्यूरोलॉजीमध्ये विशेषतः चिकाटी इतकी का महत्त्वाची आहे."
              },
              data: { visual: "🧠", hotspots: [
              { label:{en:"Intermittent symptoms",hi:"रुक-रुक कर आने वाले लक्षण",mr:"मधूनमधून येणारी लक्षणं"}, fact:{en:"Some neurological conditions come and go, making them genuinely harder to catch on a single scan or visit!"} },
              { label:{en:"Rare conditions exist",hi:"दुर्लभ स्थितियाँ मौजूद हैं",mr:"दुर्मिळ स्थिती अस्तित्वात आहेत"}, fact:{en:"There are thousands of rare neurological conditions — recognizing an unusual pattern takes real expertise!"} },
              { label:{en:"Patient history matters deeply",hi:"मरीज़ का इतिहास गहराई से मायने रखता है",mr:"रुग्णाचा इतिहास खोलवर महत्त्वाचा आहे"}, fact:{en:"A detailed patient history often reveals more clues than a single test — the story matters!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Advanced neurology quiz",
              desc: { en:"A real quiz on diagnostic persistence in complex neurological cases.", hi:"जटिल न्यूरोलॉजिकल मामलों में निदान दृढ़ता पर एक असली क्विज़।", mr:"जटिल न्यूरोलॉजिकल केसेसमधील निदान चिकाटीवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Living with uncertainty",
              desc: { en:"How would you handle the pressure of not having an immediate answer, while still needing to reassure and support a worried patient?", hi:"तुरंत जवाब न होने के दबाव को कैसे संभालोगे, फिर भी एक चिंतित मरीज़ को आश्वस्त और सहायता देने की ज़रूरत के साथ?", mr:"त्वरित उत्तर नसण्याचा दबाव तुम्ही कसे हाताळाल, तरीही काळजीत असलेल्या रुग्णाला आश्वस्त आणि सहाय्य करण्याची गरज असताना?" } },
            { engine: "flip-cards", icon: "🃏", title: "Complex Neurology Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about complex neurological cases!",
                hi: "चलो और गहराई में जाते हैं — जटिल न्यूरोलॉजिकल मामलों के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — जटिल न्यूरोलॉजिकल केसेसबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Diagnostic odysseys?",hi:"निदान ओडिसी?",mr:"निदान ओडिसी?"}, back:{en:"Some rare conditions take years and many doctors to finally diagnose — this is sometimes called a 'diagnostic odyssey'! 🗺️",hi:"कुछ दुर्लभ स्थितियों का आख़िरकार निदान होने में सालों और कई डॉक्टर लगते हैं — इसे कभी-कभी 'डायग्नोस्टिक ओडिसी' कहा जाता है! 🗺️",mr:"काही दुर्मिळ स्थितींचं अखेर निदान होण्यास वर्षं आणि अनेक डॉक्टर लागतात — याला कधीकधी 'डायग्नोस्टिक ओडिसी' म्हणतात! 🗺️"} },
              { front:{en:"Specialized neuro-tests exist?",hi:"विशेष न्यूरो-टेस्ट मौजूद हैं?",mr:"विशेष न्यूरो-चाचण्या अस्तित्वात आहेत?"}, back:{en:"Beyond basic scans, specialized tests like nerve conduction studies can reveal issues standard imaging misses! 🔬",hi:"बुनियादी स्कैन से आगे, नर्व कंडक्शन स्टडी जैसे विशेष टेस्ट उन समस्याओं को दिखा सकते हैं जो मानक इमेजिंग छोड़ देती है! 🔬",mr:"मूलभूत स्कॅनच्या पलीकडे, नर्व्ह कंडक्शन अभ्यासासारख्या विशेष चाचण्या मानक इमेजिंग चुकवणाऱ्या समस्या दाखवू शकतात! 🔬"} },
              { front:{en:"Patient advocacy groups help?",hi:"मरीज़ वकालत समूह मदद करते हैं?",mr:"रुग्ण समर्थन गट मदत करतात?"}, back:{en:"For rare conditions, patient advocacy groups often help connect people with specialists experienced in that specific issue! 🤝",hi:"दुर्लभ स्थितियों के लिए, मरीज़ वकालत समूह अक्सर लोगों को उस खास समस्या में अनुभवी विशेषज्ञों से जोड़ने में मदद करते हैं! 🤝",mr:"दुर्मिळ स्थितींसाठी, रुग्ण समर्थन गट अनेकदा लोकांना त्या विशिष्ट समस्येचा अनुभव असलेल्या तज्ज्ञांशी जोडण्यास मदत करतात! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Complex Neurology or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A normal initial scan always means there's nothing neurologically wrong.",hi:"एक सामान्य शुरुआती स्कैन का हमेशा मतलब है कि न्यूरोलॉजिकल रूप से कुछ भी गलत नहीं है।",mr:"सामान्य सुरुवातीचा स्कॅन नेहमी न्यूरोलॉजिकलदृष्ट्या काहीही चुकीचं नाही असा अर्थ असतो."}, answer:false, explain:{en:"Myth! Some conditions don't show up on initial scans, especially intermittent symptoms — continued investigation can still be necessary.",hi:"मिथक! कुछ स्थितियाँ शुरुआती स्कैन में नहीं दिखतीं, खासकर रुक-रुक कर आने वाले लक्षण — लगातार जांच अभी भी ज़रूरी हो सकती है।",mr:"मिथक! काही स्थिती सुरुवातीच्या स्कॅनमध्ये दिसत नाहीत, विशेषतः मधूनमधून येणारी लक्षणं — सतत तपासणी अजूनही आवश्यक असू शकते."} },
              { text:{en:"Detailed patient history can reveal important clues that a single test might miss.",hi:"विस्तृत मरीज़ इतिहास महत्वपूर्ण सुराग दिखा सकता है जिसे एक अकेला टेस्ट छोड़ सकता है।",mr:"तपशीलवार रुग्ण इतिहास महत्त्वाचे सुगावे दाखवू शकतो जे एक चाचणी चुकवू शकते."}, answer:true, explain:{en:"True! A patient's detailed story often provides context and clues that go beyond what a single test can show.",hi:"सच! एक मरीज़ की विस्तृत कहानी अक्सर ऐसा संदर्भ और सुराग देती है जो एक अकेला टेस्ट दिखाने से आगे जाता है।",mr:"खरं! रुग्णाची तपशीलवार गोष्ट अनेकदा एक चाचणी दाखवू शकते त्यापलीकडचा संदर्भ आणि सुगावे देते."} },
              { text:{en:"Rare neurological conditions are always diagnosed quickly and easily.",hi:"दुर्लभ न्यूरोलॉजिकल स्थितियों का हमेशा जल्दी और आसानी से निदान हो जाता है।",mr:"दुर्मिळ न्यूरोलॉजिकल स्थितींचं नेहमी लवकर आणि सहज निदान होतं."}, answer:false, explain:{en:"Myth! Rare conditions can sometimes take years and multiple doctors to accurately diagnose, sometimes called a diagnostic odyssey.",hi:"मिथक! दुर्लभ स्थितियों का सही निदान करने में कभी-कभी सालों और कई डॉक्टर लग सकते हैं, जिसे कभी-कभी डायग्नोस्टिक ओडिसी कहा जाता है।",mr:"मिथक! दुर्मिळ स्थितींचं अचूक निदान करण्यास कधीकधी वर्षं आणि अनेक डॉक्टर लागू शकतात, याला कधीकधी डायग्नोस्टिक ओडिसी म्हणतात."} }
            ]}}
          ]},
          { label: "Diagnosis Under Uncertainty",
            bonusAssignment: {
              title: { en: "Uncertainty Reflection", hi: "अनिश्चितता पर विचार", mr: "अनिश्चितता विचार" },
              prompt: { en: "Write 3-4 sentences on how you imagine doctors stay confident while acting without 100% certainty. Take a photo!",
                        hi: "3-4 वाक्य लिखो कि तुम कैसे कल्पना करते हो कि डॉक्टर 100% निश्चितता के बिना काम करते हुए आत्मविश्वास कैसे बनाए रखते हैं। फोटो लो!",
                        mr: "डॉक्टर 100% खात्रीशिवाय काम करताना आत्मविश्वास कसा राखतात अशी तुमची कल्पना आहे, याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "❓", title: "Act Despite Uncertainty", mentorVisual: "❓",
              mentorIntro: {
                en: "Real medicine rarely offers 100% certainty. Learning to act wisely despite uncertainty is one of the most important Specialist-level skills. Let's practice.",
                hi: "असली चिकित्सा शायद ही कभी 100% निश्चितता देती है। अनिश्चितता के बावजूद बुद्धिमानी से काम करना सीखना सबसे ज़रूरी स्पेशलिस्ट-स्तर के कौशलों में से एक है। चलो अभ्यास करते हैं।",
                mr: "खरं वैद्यकशास्त्र क्वचितच 100% खात्री देतं. अनिश्चिततेमध्येही शहाणपणाने कृती करायला शिकणं हे सर्वात महत्त्वाच्या स्पेशालिस्ट-पातळीच्या कौशल्यांपैकी एक आहे. चला सराव करूया."
              },
              data: { steps: [
              {
                situation: { en:"A patient's symptoms could fit two different possible conditions — one common and mild, one rare but more serious. Tests so far are inconclusive. What do you do?",
                             hi:"एक मरीज़ के लक्षण दो अलग-अलग संभावित स्थितियों में फ़िट हो सकते हैं — एक आम और हल्की, एक दुर्लभ लेकिन ज़्यादा गंभीर। अब तक के टेस्ट अनिर्णायक हैं। तुम क्या करते हो?",
                             mr:"रुग्णाची लक्षणं दोन वेगवेगळ्या शक्य स्थितींना जुळू शकतात — एक सामान्य आणि सौम्य, एक दुर्मिळ पण अधिक गंभीर. आतापर्यंतच्या चाचण्या अनिर्णायक आहेत. तुम्ही काय करता?" },
                choices: [
                  { label:{en:"Proceed cautiously — start monitoring closely and order the specific test that would rule out the more serious possibility first", hi:"सावधानी से आगे बढ़ो — बारीकी से निगरानी शुरू करो और वह खास टेस्ट ऑर्डर करो जो पहले ज़्यादा गंभीर संभावना को खारिज करे", mr:"सावधपणे पुढे जा — बारकाईने निरीक्षण सुरू करा आणि आधी अधिक गंभीर शक्यता नाकारणारी विशिष्ट चाचणी ऑर्डर करा"}, quality:"best",
                    outcome:{en:"Wise judgment under uncertainty! When you can't be 100% sure, prioritizing ruling out the more dangerous possibility first, while monitoring closely, is exactly the right balance of caution and action.",hi:"अनिश्चितता में बुद्धिमान निर्णय! जब तुम 100% निश्चित नहीं हो सकते, बारीकी से निगरानी करते हुए पहले ज़्यादा खतरनाक संभावना को खारिज करने को प्राथमिकता देना बिल्कुल सावधानी और कार्रवाई का सही संतुलन है।",mr:"अनिश्चिततेत शहाणा निर्णय! जेव्हा तुम्ही 100% खात्रीशीर नसता, बारकाईने निरीक्षण करत आधी अधिक धोकादायक शक्यता नाकारण्यास प्राधान्य देणं अगदी सावधगिरी आणि कृतीचं योग्य संतुलन आहे."} },
                  { label:{en:"Wait until you're completely certain before doing anything further", hi:"आगे कुछ भी करने से पहले तब तक इंतज़ार करो जब तक तुम पूरी तरह निश्चित न हो", mr:"पुढे काहीही करण्याआधी तुम्ही पूर्णपणे खात्रीशीर होईपर्यंत वाट बघा"}, quality:"risky",
                    outcome:{en:"This could be dangerous. Waiting for complete certainty, when a serious possibility exists, could allow a real problem to progress unchecked in the meantime.",hi:"यह खतरनाक हो सकता है। जब एक गंभीर संभावना मौजूद हो, पूरी निश्चितता का इंतज़ार करना, इस बीच एक असली समस्या को बिना जाँच के आगे बढ़ने दे सकता है।",mr:"हे धोकादायक असू शकतं. एक गंभीर शक्यता अस्तित्वात असताना, पूर्ण खात्रीची वाट बघणं, दरम्यान एक खरी समस्या तपासणीशिवाय पुढे जाऊ देऊ शकतं."} }
                ]
              },
              {
                situation: { en:"The targeted test comes back and rules out the serious condition — it really was the common, mild issue. Looking back, was your approach the right one, even though it turned out to be the milder condition?",
                             hi:"लक्षित टेस्ट वापस आता है और गंभीर स्थिति को खारिज कर देता है — यह वाकई आम, हल्की समस्या थी। पीछे मुड़कर देखते हुए, क्या तुम्हारा तरीका सही था, भले ही यह हल्की स्थिति निकली?",
                             mr:"लक्ष्यित चाचणी परत येते आणि गंभीर स्थिती नाकारते — ती खरंच सामान्य, सौम्य समस्या होती. मागे वळून बघता, तुमचा दृष्टिकोन बरोबर होता का, जरी ती सौम्य स्थिती निघाली तरी?" },
                choices: [
                  { label:{en:"Yes — the approach was correct because it appropriately addressed the uncertainty at the time, regardless of the eventual outcome", hi:"हाँ — तरीका सही था क्योंकि इसने उस समय की अनिश्चितता को उचित रूप से संबोधित किया, अंतिम नतीजे की परवाह किए बिना", mr:"हो — दृष्टिकोन बरोबर होता कारण त्याने त्यावेळच्या अनिश्चिततेला योग्यरित्या संबोधित केलं, अंतिम निकालाची पर्वा न करता"}, quality:"best",
                    outcome:{en:"Excellent insight! This is a crucial lesson — a good decision is judged by whether it was reasonable given what was known AT THE TIME, not just by how things eventually turned out.",hi:"बेहतरीन अंतर्दृष्टि! यह एक महत्वपूर्ण सबक है — एक अच्छे फ़ैसले को इस आधार पर आँका जाता है कि क्या यह उस समय जो जाना गया था उसे देखते हुए उचित था, सिर्फ़ अंततः चीज़ें कैसे निकलीं इससे नहीं।",mr:"उत्तम अंतर्दृष्टी! हा एक महत्त्वाचा धडा आहे — एक चांगला निर्णय त्यावेळी जे माहीत होतं ते बघता तो वाजवी होता का यावरून तपासला जातो, फक्त गोष्टी अखेर कशा निघाल्या यावरून नाही."} },
                  { label:{en:"No — since it turned out mild, the extra testing was probably unnecessary", hi:"नहीं — चूंकि यह हल्की निकली, अतिरिक्त टेस्टिंग शायद अनावश्यक थी", mr:"नाही — ती सौम्य निघाली म्हणून, अतिरिक्त चाचणी बहुधा अनावश्यक होती"}, quality:"risky",
                    outcome:{en:"This is a common but flawed way to think. Judging a decision only by the outcome, rather than by whether it was reasonable given the uncertainty at the time, can lead to bad habits in future cases.",hi:"यह सोचने का एक आम लेकिन दोषपूर्ण तरीका है। किसी फ़ैसले को केवल नतीजे से आँकना, बजाय इसके कि उस समय की अनिश्चितता को देखते हुए यह उचित था या नहीं, भविष्य के मामलों में बुरी आदतों की ओर ले जा सकता है।",mr:"हा विचार करण्याचा एक सामान्य पण त्रुटीयुक्त मार्ग आहे. एखाद्या निर्णयाला फक्त निकालावरून तपासणं, त्यावेळच्या अनिश्चिततेला बघता तो वाजवी होता का यापेक्षा, भविष्यातील केसेसमध्ये वाईट सवयींकडे नेऊ शकतं."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "❓", title: "Explore decision-making under uncertainty", mentorVisual: "❓",
              mentorIntro: {
                en: "Let's explore how experienced doctors think about acting wisely when they can't be 100% certain.",
                hi: "चलो एक्सप्लोर करते हैं अनुभवी डॉक्टर कैसे सोचते हैं जब वे 100% निश्चित नहीं हो सकते, बुद्धिमानी से काम करने के बारे में।",
                mr: "चला एक्सप्लोर करूया अनुभवी डॉक्टर 100% खात्रीशीर नसताना शहाणपणाने कृती करण्याबद्दल कसा विचार करतात."
              },
              data: { visual: "❓", hotspots: [
              { label:{en:"Probability thinking",hi:"संभावना सोच",mr:"संभाव्यता विचार"}, fact:{en:"Doctors often think in terms of likelihood — acting on the most probable explanation while staying open to others!"} },
              { label:{en:"Judged by process, not just outcome",hi:"नतीजे से नहीं, प्रक्रिया से आँका जाता है",mr:"निकालावरून नाही, प्रक्रियेवरून तपासलं जातं"}, fact:{en:"A good medical decision is judged by whether it was reasonable at the time, not just by how it eventually turned out!"} },
              { label:{en:"Staying flexible",hi:"लचीला बने रहना",mr:"लवचिक राहणं"}, fact:{en:"Skilled doctors stay ready to update their thinking as new information comes in, rather than locking into one idea too early!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Diagnosis under uncertainty quiz",
              desc: { en:"A real quiz on how doctors make sound decisions despite genuine uncertainty.", hi:"असली अनिश्चितता के बावजूद डॉक्टर कैसे सही फ़ैसले लेते हैं, इस पर एक असली क्विज़।", mr:"खऱ्या अनिश्चिततेतही डॉक्टर योग्य निर्णय कसे घेतात, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Judging decisions fairly",
              desc: { en:"Why do you think it's important to judge a decision by whether it was reasonable at the time, rather than only by how things eventually turned out?", hi:"तुम्हें क्यों लगता है कि एक फ़ैसले को इस आधार पर आँकना ज़रूरी है कि क्या यह उस समय उचित था, सिर्फ़ अंततः चीज़ें कैसे निकलीं इससे नहीं?", mr:"निर्णयाला त्यावेळी तो वाजवी होता का यावरून तपासणं महत्त्वाचं का आहे, फक्त गोष्टी अखेर कशा निघाल्या यावरून नाही, असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Uncertainty Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about decision-making under uncertainty!",
                hi: "चलो और गहराई में जाते हैं — अनिश्चितता के तहत निर्णय लेने के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अनिश्चिततेत निर्णय घेण्याबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Bayesian thinking?",hi:"बेएशियन सोच?",mr:"बेयशियन विचार?"}, back:{en:"Doctors often use a kind of probability thinking, updating their beliefs as new evidence comes in — this is related to a concept called Bayesian reasoning! 📊",hi:"डॉक्टर अक्सर एक तरह की संभावना सोच का इस्तेमाल करते हैं, नए सबूत आने पर अपनी मान्यताओं को अपडेट करते हुए — यह बेएशियन तर्क नाम की एक अवधारणा से संबंधित है! 📊",mr:"डॉक्टर अनेकदा एक प्रकारचा संभाव्यता विचार वापरतात, नवीन पुरावा आल्यावर त्यांच्या विश्वासांना अद्ययावत करत — हे बेयशियन तर्क नावाच्या संकल्पनेशी संबंधित आहे! 📊"} },
              { front:{en:"Watchful waiting is a real strategy?",hi:"सतर्क प्रतीक्षा एक असली रणनीति है?",mr:"सजग प्रतीक्षा ही खरी रणनीती आहे?"}, back:{en:"'Watchful waiting' — closely monitoring without immediate aggressive treatment — is a legitimate, deliberate medical strategy in uncertain cases! 👀",hi:"'सतर्क प्रतीक्षा' — बिना तुरंत आक्रामक इलाज के बारीकी से निगरानी करना — अनिश्चित मामलों में एक वैध, जानबूझकर की गई मेडिकल रणनीति है! 👀",mr:"'सजग प्रतीक्षा' — त्वरित आक्रमक उपचाराशिवाय बारकाईने निरीक्षण करणं — अनिश्चित केसेसमध्ये एक वैध, जाणीवपूर्वक वैद्यकीय रणनीती आहे! 👀"} },
              { front:{en:"Second opinions help with uncertainty?",hi:"दूसरी राय अनिश्चितता में मदद करती है?",mr:"दुसरं मत अनिश्चिततेत मदत करतं?"}, back:{en:"When facing real uncertainty, seeking another doctor's perspective can genuinely add valuable insight! 🤝",hi:"असली अनिश्चितता का सामना करते समय, किसी दूसरे डॉक्टर का नज़रिया लेना वाकई मूल्यवान अंतर्दृष्टि जोड़ सकता है! 🤝",mr:"खऱ्या अनिश्चिततेला सामोरं जाताना, दुसऱ्या डॉक्टरचा दृष्टिकोन घेणं खरंच मौल्यवान अंतर्दृष्टी जोडू शकतं! 🤝"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Uncertainty or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A good medical decision is judged only by whether the outcome turned out well.",hi:"एक अच्छे मेडिकल फ़ैसले को केवल इस आधार पर आँका जाता है कि नतीजा अच्छा निकला या नहीं।",mr:"चांगल्या वैद्यकीय निर्णयाला फक्त निकाल चांगला निघाला का यावरूनच तपासलं जातं."}, answer:false, explain:{en:"Myth! Good decisions are judged by whether they were reasonable given what was known at the time, not just by the eventual outcome.",hi:"मिथक! अच्छे फ़ैसलों को इस आधार पर आँका जाता है कि उस समय जो जाना गया था उसे देखते हुए यह उचित था या नहीं, सिर्फ़ अंतिम नतीजे से नहीं।",mr:"मिथक! चांगल्या निर्णयांना त्यावेळी जे माहीत होतं ते बघता ते वाजवी होते का यावरून तपासलं जातं, फक्त अंतिम निकालावरून नाही."} },
              { text:{en:"'Watchful waiting' can be a legitimate, deliberate medical strategy.",hi:"'सतर्क प्रतीक्षा' एक वैध, जानबूझकर की गई मेडिकल रणनीति हो सकती है।",mr:"'सजग प्रतीक्षा' ही एक वैध, जाणीवपूर्वक वैद्यकीय रणनीती असू शकते."}, answer:true, explain:{en:"True! Watchful waiting is a real, thoughtful approach used when immediate aggressive action isn't clearly warranted.",hi:"सच! सतर्क प्रतीक्षा एक असली, विचारशील तरीका है जिसका इस्तेमाल तब होता है जब तुरंत आक्रामक कार्रवाई स्पष्ट रूप से ज़रूरी नहीं है।",mr:"खरं! सजग प्रतीक्षा हा एक खरा, विचारशील दृष्टिकोन आहे जो त्वरित आक्रमक कृती स्पष्टपणे आवश्यक नसताना वापरला जातो."} },
              { text:{en:"Doctors should always wait for 100% certainty before taking any action.",hi:"डॉक्टरों को कोई भी कार्रवाई करने से पहले हमेशा 100% निश्चितता का इंतज़ार करना चाहिए।",mr:"डॉक्टरांनी कोणतीही कृती करण्याआधी नेहमी 100% खात्रीची वाट बघावी."}, answer:false, explain:{en:"Myth! Waiting for complete certainty can allow real problems to progress — doctors often need to act wisely despite some uncertainty.",hi:"मिथक! पूरी निश्चितता का इंतज़ार करना असली समस्याओं को आगे बढ़ने दे सकता है — डॉक्टरों को अक्सर कुछ अनिश्चितता के बावजूद बुद्धिमानी से काम करने की ज़रूरत होती है।",mr:"मिथक! पूर्ण खात्रीची वाट बघणं खऱ्या समस्यांना पुढे जाऊ देऊ शकतं — डॉक्टरांना अनेकदा काही अनिश्चिततेतही शहाणपणाने कृती करण्याची गरज असते."} }
            ]}}
          ]},
          { label: "Multi-Specialty Referral",
            bonusAssignment: {
              title: { en: "Coordinated Care Plan", hi: "समन्वित देखभाल योजना", mr: "समन्वित काळजी योजना" },
              prompt: { en: "Write about a fictional patient who needs input from 3 different specialists at once, and how you'd coordinate their care. Take a photo!",
                        hi: "एक काल्पनिक मरीज़ के बारे में लिखो जिसे एक साथ 3 अलग-अलग विशेषज्ञों के इनपुट की ज़रूरत है, और तुम उनकी देखभाल को कैसे समन्वित करोगे। फोटो लो!",
                        mr: "एका काल्पनिक रुग्णाबद्दल लिहा ज्याला एकाच वेळी 3 वेगवेगळ्या तज्ज्ञांच्या इनपुटची गरज आहे, आणि तुम्ही त्यांची काळजी कशी समन्वित कराल. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🔀", title: "Coordinate Multiple Specialists", mentorVisual: "🔀",
              mentorIntro: {
                en: "The most complex cases sometimes need input from several specialists at once. Coordinating that well is a genuine Specialist-level skill. Let's practice.",
                hi: "सबसे जटिल मामलों को कभी-कभी एक साथ कई विशेषज्ञों के इनपुट की ज़रूरत होती है। इसे अच्छी तरह समन्वित करना एक असली स्पेशलिस्ट-स्तर का कौशल है। चलो अभ्यास करते हैं।",
                mr: "सर्वात जटिल केसेसना कधीकधी एकाच वेळी अनेक तज्ज्ञांच्या इनपुटची गरज असते. ते चांगलं समन्वित करणं हे एक खरं स्पेशालिस्ट-पातळीचं कौशल्य आहे. चला सराव करूया."
              },
              data: { steps: [
              {
                situation: { en:"A patient with kidney disease also needs heart surgery, and the anesthesiologist has concerns about how the two conditions interact during the procedure. Who needs to be involved in this decision?",
                             hi:"किडनी रोग वाले एक मरीज़ को दिल की सर्जरी भी चाहिए, और एनेस्थीसियोलॉजिस्ट को चिंता है कि प्रक्रिया के दौरान दोनों स्थितियाँ कैसे परस्पर क्रिया करती हैं। इस फ़ैसले में किसे शामिल होने की ज़रूरत है?",
                             mr:"किडनी रोग असलेल्या रुग्णाला हृदय शस्त्रक्रियाही हवी आहे, आणि प्रक्रियेदरम्यान दोन्ही स्थिती कशा परस्परसंवाद करतात याबद्दल भूलतज्ज्ञाला चिंता आहे. या निर्णयात कोणाचा सहभाग हवा?" },
                choices: [
                  { label:{en:"Bring together the cardiologist, nephrologist (kidney specialist), and anesthesiologist to jointly plan the safest approach", hi:"सबसे सुरक्षित तरीके की संयुक्त योजना बनाने के लिए कार्डियोलॉजिस्ट, नेफ्रोलॉजिस्ट (किडनी विशेषज्ञ), और एनेस्थीसियोलॉजिस्ट को एक साथ लाओ", mr:"सर्वात सुरक्षित पद्धतीची संयुक्त योजना बनवण्यासाठी कार्डिओलॉजिस्ट, नेफ्रोलॉजिस्ट (किडनी तज्ज्ञ), आणि भूलतज्ज्ञाला एकत्र आणा"}, quality:"best",
                    outcome:{en:"Excellent multi-specialty coordination! When multiple body systems are involved, bringing all relevant specialists together to plan jointly is exactly the right approach for patient safety.",hi:"बेहतरीन बहु-विशेषज्ञता समन्वय! जब कई शरीर सिस्टम शामिल होते हैं, संयुक्त रूप से योजना बनाने के लिए सभी संबंधित विशेषज्ञों को एक साथ लाना मरीज़ की सुरक्षा के लिए बिल्कुल सही तरीका है।",mr:"उत्तम बहु-खासियत समन्वय! जेव्हा अनेक शरीर यंत्रणा सामील असतात, संयुक्तपणे योजना बनवण्यासाठी सर्व संबंधित तज्ज्ञांना एकत्र आणणं रुग्णाच्या सुरक्षिततेसाठी अगदी योग्य पद्धत आहे."} },
                  { label:{en:"Let the cardiac surgeon proceed alone without consulting the other specialists", hi:"अन्य विशेषज्ञों से सलाह लिए बिना कार्डियक सर्जन को अकेले आगे बढ़ने दो", mr:"इतर तज्ज्ञांचा सल्ला न घेता कार्डियाक सर्जनला एकट्याने पुढे जाऊ द्या"}, quality:"risky",
                    outcome:{en:"This is genuinely risky. When multiple systems are involved, proceeding without input from all relevant specialists could lead to serious complications that a coordinated team would have anticipated.",hi:"यह वाकई जोखिम भरा है। जब कई सिस्टम शामिल होते हैं, सभी संबंधित विशेषज्ञों के इनपुट के बिना आगे बढ़ना गंभीर जटिलताओं की ओर ले जा सकता है जिनका एक समन्वित टीम ने अनुमान लगाया होता।",mr:"हे खरंच धोकादायक आहे. जेव्हा अनेक यंत्रणा सामील असतात, सर्व संबंधित तज्ज्ञांच्या इनपुटशिवाय पुढे जाणं गंभीर गुंतागुंतीकडे नेऊ शकतं ज्याचा समन्वित टीमने अंदाज बांधला असता."} }
                ]
              },
              {
                situation: { en:"The three specialists disagree slightly on timing — one wants to proceed soon, another wants more preparation time. How should this disagreement be resolved?",
                             hi:"तीनों विशेषज्ञ समय को लेकर थोड़ा असहमत हैं — एक जल्द आगे बढ़ना चाहता है, दूसरा ज़्यादा तैयारी का समय चाहता है। इस असहमति को कैसे हल किया जाना चाहिए?",
                             mr:"तिन्ही तज्ज्ञ वेळेबाबत थोडे असहमत आहेत — एकाला लवकर पुढे जायचं आहे, दुसऱ्याला अधिक तयारीचा वेळ हवा आहे. हा मतभेद कसा सोडवला जावा?" },
                choices: [
                  { label:{en:"Facilitate an open discussion where each specialist explains their reasoning, working toward a plan that addresses everyone's genuine concerns", hi:"एक खुली चर्चा को सुगम बनाओ जहाँ हर विशेषज्ञ अपना तर्क समझाए, एक ऐसी योजना की ओर काम करते हुए जो सबकी असली चिंताओं को संबोधित करे", mr:"एक खुली चर्चा सुलभ करा जिथे प्रत्येक तज्ज्ञ त्यांचं तर्क समजावून सांगेल, सर्वांच्या खऱ्या चिंतांना संबोधित करणाऱ्या योजनेकडे काम करत"}, quality:"best",
                    outcome:{en:"Great leadership! Facilitating genuine dialogue between disagreeing experts, rather than picking a side arbitrarily, leads to a more thoughtful plan that accounts for everyone's real concerns.",hi:"बेहतरीन नेतृत्व! असहमत विशेषज्ञों के बीच असली संवाद को सुगम बनाना, बजाय मनमाने ढंग से एक पक्ष चुनने के, एक ज़्यादा विचारशील योजना की ओर ले जाता है जो सबकी असली चिंताओं को ध्यान में रखती है।",mr:"उत्तम नेतृत्व! असहमत तज्ज्ञांमध्ये खरा संवाद सुलभ करणं, अनियंत्रितपणे एक बाजू निवडण्याऐवजी, सर्वांच्या खऱ्या चिंता लक्षात घेणाऱ्या अधिक विचारशील योजनेकडे नेतं."} },
                  { label:{en:"Just go with whichever specialist has seniority, without discussing the actual reasoning", hi:"बस उस विशेषज्ञ के साथ जाओ जिसकी वरिष्ठता है, असली तर्क पर चर्चा किए बिना", mr:"खऱ्या तर्कावर चर्चा न करता, फक्त ज्या तज्ज्ञाची ज्येष्ठता आहे त्याच्यासोबत जा"}, quality:"risky",
                    outcome:{en:"This misses valuable input. Deferring to seniority alone, without discussing the actual medical reasoning, could overlook a genuinely important concern from another specialist.",hi:"यह मूल्यवान इनपुट छोड़ देता है। असली मेडिकल तर्क पर चर्चा किए बिना, केवल वरिष्ठता को मानना, किसी अन्य विशेषज्ञ की वाकई ज़रूरी चिंता को नज़रअंदाज़ कर सकता है।",mr:"यात मौल्यवान इनपुट चुकतो. खऱ्या वैद्यकीय तर्कावर चर्चा न करता, फक्त ज्येष्ठतेला मान देणं, दुसऱ्या तज्ज्ञाच्या खरोखर महत्त्वाच्या चिंतेकडे दुर्लक्ष करू शकतं."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔀", title: "Explore multi-specialty coordination", mentorVisual: "🔀",
              mentorIntro: {
                en: "Let's explore how hospitals actually coordinate care across multiple specialists.",
                hi: "चलो एक्सप्लोर करते हैं अस्पताल असल में कई विशेषज्ञों में देखभाल को कैसे समन्वित करते हैं।",
                mr: "चला एक्सप्लोर करूया रुग्णालयं खरंच अनेक तज्ज्ञांमध्ये काळजी कशी समन्वित करतात."
              },
              data: { visual: "🔀", hotspots: [
              { label:{en:"Case conferences",hi:"केस कॉन्फ्रेंस",mr:"केस परिषदा"}, fact:{en:"Complex cases are often discussed in formal case conferences, where every specialist shares their perspective!"} },
              { label:{en:"A lead coordinator",hi:"एक मुख्य समन्वयक",mr:"एक मुख्य समन्वयक"}, fact:{en:"Often, one doctor takes on the role of coordinating the overall plan across all the involved specialists!"} },
              { label:{en:"Shared documentation",hi:"साझा दस्तावेज़ीकरण",mr:"सामायिक दस्तऐवजीकरण"}, fact:{en:"Detailed shared records help every specialist stay updated on the full picture, not just their own piece!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Multi-specialty referral quiz",
              desc: { en:"A real quiz on coordinating care across multiple medical specialties.", hi:"कई मेडिकल स्पेशलिटी में देखभाल को समन्वित करने पर एक असली क्विज़।", mr:"अनेक वैद्यकीय खासियतींमध्ये काळजी समन्वित करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Leading through disagreement",
              desc: { en:"How do you think you'd handle facilitating a disagreement between multiple experts, each with valid points? What skills would that require?", hi:"तुम्हें क्या लगता है कई विशेषज्ञों के बीच असहमति को सुगम बनाना कैसा होगा, हर एक के वैध बिंदु के साथ? इसके लिए कौन से कौशल चाहिए होंगे?", mr:"अनेक तज्ज्ञांमधील मतभेद सुलभ करणं कसं असेल असं तुम्हाला वाटतं, प्रत्येकाचे वैध मुद्दे असताना? त्यासाठी कोणती कौशल्यं लागतील?" } },
            { engine: "flip-cards", icon: "🃏", title: "Multi-Specialty Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about multi-specialty coordination!",
                hi: "चलो और गहराई में जाते हैं — बहु-विशेषज्ञता समन्वय के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — बहु-खासियत समन्वयाबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Tumor boards revisited?",hi:"ट्यूमर बोर्ड फिर से?",mr:"ट्यूमर बोर्ड पुन्हा?"}, back:{en:"Complex cancer cases often use 'tumor boards' — a specific type of multi-specialty case conference! 👥",hi:"जटिल कैंसर मामलों में अक्सर 'ट्यूमर बोर्ड' का इस्तेमाल होता है — बहु-विशेषज्ञता केस कॉन्फ्रेंस का एक खास प्रकार! 👥",mr:"जटिल कर्करोग केसेसमध्ये अनेकदा 'ट्यूमर बोर्ड' वापरले जातात — बहु-खासियत केस परिषदेचा एक खास प्रकार! 👥"} },
              { front:{en:"Communication failures are a real risk?",hi:"बातचीत की विफलताएँ एक असली जोखिम हैं?",mr:"संवाद अपयश हा खरा धोका आहे?"}, back:{en:"Studies show that poor communication between specialists is a common cause of medical errors — coordination genuinely matters! ⚠️",hi:"स्टडी दिखाती हैं कि विशेषज्ञों के बीच खराब बातचीत मेडिकल गलतियों का एक आम कारण है — समन्वय वाकई मायने रखता है! ⚠️",mr:"अभ्यास दाखवतात की तज्ज्ञांमधील खराब संवाद हे वैद्यकीय चुकांचं एक सामान्य कारण आहे — समन्वय खरंच महत्त्वाचा आहे! ⚠️"} },
              { front:{en:"Care coordinators exist as a role?",hi:"केयर कोऑर्डिनेटर एक भूमिका के रूप में मौजूद हैं?",mr:"केअर कोऑर्डिनेटर एक भूमिका म्हणून अस्तित्वात आहे?"}, back:{en:"Some hospitals have dedicated 'care coordinators' whose entire job is managing communication across specialists for complex patients! 📋",hi:"कुछ अस्पतालों में समर्पित 'केयर कोऑर्डिनेटर' होते हैं जिनका पूरा काम जटिल मरीज़ों के लिए विशेषज्ञों में बातचीत का प्रबंधन करना है! 📋",mr:"काही रुग्णालयांमध्ये समर्पित 'केअर कोऑर्डिनेटर' असतात ज्यांचं संपूर्ण काम जटिल रुग्णांसाठी तज्ज्ञांमधील संवाद व्यवस्थापित करणं आहे! 📋"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Multi-Specialty or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"When multiple specialists are involved, seniority alone should always decide any disagreement.",hi:"जब कई विशेषज्ञ शामिल होते हैं, केवल वरिष्ठता को हमेशा किसी भी असहमति का फ़ैसला करना चाहिए।",mr:"जेव्हा अनेक तज्ज्ञ सामील असतात, केवळ ज्येष्ठतेने नेहमी कोणताही मतभेद ठरवावा."}, answer:false, explain:{en:"Myth! Genuine dialogue about the actual medical reasoning, not just seniority, leads to better decisions.",hi:"मिथक! असली मेडिकल तर्क के बारे में असली संवाद, सिर्फ़ वरिष्ठता नहीं, बेहतर फ़ैसलों की ओर ले जाता है।",mr:"मिथक! खऱ्या वैद्यकीय तर्काबद्दल खरा संवाद, फक्त ज्येष्ठता नाही, चांगल्या निर्णयांकडे नेतो."} },
              { text:{en:"Poor communication between specialists is a recognized, common cause of medical errors.",hi:"विशेषज्ञों के बीच खराब बातचीत मेडिकल गलतियों का एक पहचाना गया, आम कारण है।",mr:"तज्ज्ञांमधील खराब संवाद हे वैद्यकीय चुकांचं एक ओळखलेलं, सामान्य कारण आहे."}, answer:true, explain:{en:"True! Studies genuinely show that communication gaps between specialists are a real risk factor for errors.",hi:"सच! स्टडी वाकई दिखाती हैं कि विशेषज्ञों के बीच बातचीत में कमी गलतियों के लिए एक असली जोखिम कारक है।",mr:"खरं! अभ्यास खरंच दाखवतात की तज्ज्ञांमधील संवादातील त्रुटी चुकांसाठी एक खरा धोका घटक आहे."} },
              { text:{en:"Some hospitals have dedicated staff whose job is coordinating communication between specialists.",hi:"कुछ अस्पतालों में समर्पित स्टाफ़ होता है जिसका काम विशेषज्ञों के बीच बातचीत का समन्वय करना है।",mr:"काही रुग्णालयांमध्ये समर्पित कर्मचारी असतात ज्यांचं काम तज्ज्ञांमधील संवाद समन्वित करणं आहे."}, answer:true, explain:{en:"True! Care coordinators are a real role dedicated specifically to this kind of communication management.",hi:"सच! केयर कोऑर्डिनेटर एक असली भूमिका है जो विशेष रूप से इस तरह के बातचीत प्रबंधन के लिए समर्पित है।",mr:"खरं! केअर कोऑर्डिनेटर ही एक खरी भूमिका आहे जी विशेषतः अशा प्रकारच्या संवाद व्यवस्थापनासाठी समर्पित आहे."} }
            ]}}
          ]},
          { label: "Critique a Research Study",
            bonusAssignment: {
              title: { en: "Study Critique Write-Up", hi: "स्टडी समीक्षा लेखन", mr: "अभ्यास समीक्षा लेखन" },
              prompt: { en: "Find a real health-related news article about a study (with an adult's help) and write 3-4 sentences evaluating whether it seems well-designed. Take a photo!",
                        hi: "किसी बड़े की मदद से एक स्टडी के बारे में एक असली स्वास्थ्य से जुड़ा न्यूज़ आर्टिकल ढूंढो और 3-4 वाक्य लिखो कि क्या यह अच्छी तरह डिज़ाइन किया हुआ लगता है। फोटो लो!",
                        mr: "मोठ्यांच्या मदतीने एका अभ्यासाबद्दल एक खरा आरोग्य-संबंधित बातम्यांचा लेख शोधा आणि तो नीट डिझाइन केलेला वाटतो का याचं मूल्यमापन करणारी 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🔍", title: "Critique the Study", mentorVisual: "🔍",
              mentorIntro: {
                en: "Being able to critically evaluate research, not just accept headlines, is a genuine Specialist-level skill. Let's practice on a realistic study.",
                hi: "रिसर्च का आलोचनात्मक मूल्यांकन करने में सक्षम होना, सिर्फ़ हेडलाइन को स्वीकार करना नहीं, एक असली स्पेशलिस्ट-स्तर का कौशल है। चलो एक यथार्थवादी स्टडी पर अभ्यास करते हैं।",
                mr: "संशोधनाचं समीक्षात्मक मूल्यमापन करण्यास सक्षम असणं, फक्त हेडलाइन्स स्वीकारणं नाही, हे एक खरं स्पेशालिस्ट-पातळीचं कौशल्य आहे. चला एका वास्तववादी अभ्यासावर सराव करूया."
              },
              data: { steps: [
              {
                situation: { en:"A news headline claims 'New Supplement Cures Fatigue in Just One Week!' based on a study. What's your first question before accepting this claim?",
                             hi:"एक न्यूज़ हेडलाइन एक स्टडी के आधार पर दावा करती है 'नया सप्लीमेंट सिर्फ़ एक हफ़्ते में थकान ठीक करता है!'। इस दावे को स्वीकार करने से पहले तुम्हारा पहला सवाल क्या है?",
                             mr:"एक बातमी हेडलाइन एका अभ्यासावर आधारित दावा करते 'नवीन सप्लिमेंट फक्त एका आठवड्यात थकवा बरा करतं!'. हा दावा स्वीकारण्याआधी तुमचा पहिला प्रश्न काय आहे?" },
                choices: [
                  { label:{en:"How was the study actually designed — was there a comparison group, and how many people were involved?", hi:"स्टडी असल में कैसे डिज़ाइन की गई थी — क्या कोई तुलना समूह था, और कितने लोग शामिल थे?", mr:"अभ्यास खरंच कसा डिझाइन केला होता — तुलना गट होता का, आणि किती लोक सामील होते?" }, quality:"best",
                    outcome:{en:"Excellent critical thinking! Headlines often oversimplify — checking the actual study design, sample size, and methodology is exactly how to evaluate whether a claim is genuinely trustworthy.",hi:"बेहतरीन आलोचनात्मक सोच! हेडलाइन अक्सर सरलीकृत होती हैं — असली स्टडी डिज़ाइन, नमूना आकार, और तरीके की जाँच करना बिल्कुल वैसा है जैसे यह मूल्यांकन किया जाए कि क्या एक दावा वाकई भरोसेमंद है।",mr:"उत्तम समीक्षात्मक विचार! हेडलाइन्स अनेकदा अतिसुलभ करतात — खरा अभ्यास डिझाइन, नमुना आकार, आणि पद्धत तपासणं अगदी असंच आहे जसं एखादा दावा खरंच विश्वासार्ह आहे का हे मूल्यमापन करणं."} },
                  { label:{en:"Just accept the headline as true since it's based on a study", hi:"बस हेडलाइन को सच मान लो क्योंकि यह एक स्टडी पर आधारित है", mr:"फक्त हेडलाइन खरी माना कारण ती एका अभ्यासावर आधारित आहे"}, quality:"risky",
                    outcome:{en:"This misses important critical thinking. Not all studies are equally well-designed, and headlines often exaggerate — accepting claims without checking methodology can be misleading.",hi:"यह महत्वपूर्ण आलोचनात्मक सोच छोड़ देता है। सभी स्टडी समान रूप से अच्छी तरह डिज़ाइन नहीं होतीं, और हेडलाइन अक्सर बढ़ा-चढ़ाकर बताती हैं — तरीके की जाँच किए बिना दावों को स्वीकार करना गुमराह कर सकता है।",mr:"यात महत्त्वाचा समीक्षात्मक विचार चुकतो. सर्व अभ्यास समानपणे नीट डिझाइन केलेले नसतात, आणि हेडलाइन्स अनेकदा अतिशयोक्ती करतात — पद्धत न तपासता दावे स्वीकारणं दिशाभूल करणारं असू शकतं."} }
                ]
              },
              {
                situation: { en:"You find the actual study only tested 15 people with no comparison group, over just 3 days. How should this shape your evaluation of the headline?",
                             hi:"तुम्हें पता चलता है कि असली स्टडी ने बिना किसी तुलना समूह के केवल 15 लोगों का टेस्ट किया, सिर्फ़ 3 दिनों में। इसे हेडलाइन के तुम्हारे मूल्यांकन को कैसे आकार देना चाहिए?",
                             mr:"तुम्हाला कळतं की खऱ्या अभ्यासात कोणत्याही तुलना गटाशिवाय फक्त 15 लोकांची चाचणी झाली, फक्त 3 दिवसांत. याने हेडलाइनच्या तुमच्या मूल्यमापनाला कसा आकार द्यावा?" },
                choices: [
                  { label:{en:"Recognize the headline is likely overstating the evidence — a small, short, uncontrolled study can't support such a strong claim", hi:"पहचानो कि हेडलाइन शायद सबूत को बढ़ा-चढ़ाकर बता रही है — एक छोटी, छोटी अवधि की, अनियंत्रित स्टडी इतने मज़बूत दावे का समर्थन नहीं कर सकती", mr:"ओळखा की हेडलाइन कदाचित पुरावा अतिशयोक्तीने सांगत आहे — एक लहान, कमी कालावधीचा, अनियंत्रित अभ्यास इतका मजबूत दावा समर्थित करू शकत नाही"}, quality:"best",
                    outcome:{en:"Excellent evaluation! Recognizing that a small, short, uncontrolled study can't support a strong headline claim is exactly the kind of research literacy that protects against misinformation.",hi:"बेहतरीन मूल्यांकन! यह पहचानना कि एक छोटी, छोटी अवधि की, अनियंत्रित स्टडी एक मज़बूत हेडलाइन दावे का समर्थन नहीं कर सकती, बिल्कुल वैसी रिसर्च साक्षरता है जो गलत सूचना से बचाती है।",mr:"उत्तम मूल्यमापन! एक लहान, कमी कालावधीचा, अनियंत्रित अभ्यास मजबूत हेडलाइन दाव्याला समर्थन देऊ शकत नाही हे ओळखणं अगदी अशाच प्रकारचं संशोधन साक्षरता आहे जी चुकीच्या माहितीपासून वाचवते."} },
                  { label:{en:"Still trust the headline since a real study was involved", hi:"फिर भी हेडलाइन पर भरोसा करो क्योंकि एक असली स्टडी शामिल थी", mr:"तरीही हेडलाइनवर विश्वास ठेवा कारण खरा अभ्यास सामील होता"}, quality:"risky",
                    outcome:{en:"This overlooks serious limitations. A study existing doesn't automatically make its conclusions strong — a small, short, uncontrolled study has real limits on what it can actually prove.",hi:"यह गंभीर सीमाओं को नज़रअंदाज़ करता है। एक स्टडी का अस्तित्व स्वतः इसके निष्कर्षों को मज़बूत नहीं बनाता — एक छोटी, छोटी अवधि की, अनियंत्रित स्टडी की असली सीमाएँ हैं कि यह असल में क्या साबित कर सकती है।",mr:"यात गंभीर मर्यादा दुर्लक्षित होतात. अभ्यास अस्तित्वात असणं आपोआप त्याचे निष्कर्ष मजबूत बनवत नाही — एका लहान, कमी कालावधीच्या, अनियंत्रित अभ्यासाला तो खरंच काय सिद्ध करू शकतो यावर खऱ्या मर्यादा आहेत."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🔍", title: "Explore research literacy", mentorVisual: "🔍",
              mentorIntro: {
                en: "Let's explore the key questions that help evaluate whether a study's claims are trustworthy.",
                hi: "चलो उन मुख्य सवालों को एक्सप्लोर करते हैं जो यह मूल्यांकन करने में मदद करते हैं कि क्या एक स्टडी के दावे भरोसेमंद हैं।",
                mr: "चला त्या मुख्य प्रश्नांना एक्सप्लोर करूया जे एका अभ्यासाचे दावे विश्वासार्ह आहेत का हे मूल्यमापन करण्यास मदत करतात."
              },
              data: { visual: "🔍", hotspots: [
              { label:{en:"Sample size",hi:"नमूना आकार",mr:"नमुना आकार"}, fact:{en:"A study with 15 people is much weaker evidence than one with 15,000 — size genuinely matters!"} },
              { label:{en:"Comparison groups",hi:"तुलना समूह",mr:"तुलना गट"}, fact:{en:"Without a comparison group, it's hard to know if an effect was really due to the treatment being tested!"} },
              { label:{en:"Headlines vs. actual studies",hi:"हेडलाइन बनाम असली स्टडी",mr:"हेडलाइन्स विरुद्ध खरे अभ्यास"}, fact:{en:"News headlines often simplify or exaggerate — the actual study details tell a more accurate story!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Research critique quiz",
              desc: { en:"A real quiz on critically evaluating research studies and health claims.", hi:"रिसर्च स्टडी और स्वास्थ्य दावों का आलोचनात्मक मूल्यांकन करने पर एक असली क्विज़।", mr:"संशोधन अभ्यास आणि आरोग्य दाव्यांचं समीक्षात्मक मूल्यमापन करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Being a critical reader",
              desc: { en:"Why do you think it's important for everyone, not just doctors, to critically evaluate health claims in the news rather than accepting headlines at face value?", hi:"तुम्हें क्यों लगता है कि हर किसी के लिए, सिर्फ़ डॉक्टरों के लिए नहीं, न्यूज़ में स्वास्थ्य दावों का आलोचनात्मक मूल्यांकन करना ज़रूरी है, बजाय हेडलाइन को जैसा है वैसा स्वीकार करने के?", mr:"हेडलाइन्स जशा आहेत तशा स्वीकारण्याऐवजी, फक्त डॉक्टरांसाठीच नाही तर प्रत्येकासाठी बातम्यांमधील आरोग्य दाव्यांचं समीक्षात्मक मूल्यमापन करणं का महत्त्वाचं आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Research Critique Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about evaluating research!",
                hi: "चलो और गहराई में जाते हैं — रिसर्च का मूल्यांकन करने के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — संशोधनाचं मूल्यमापन करण्याबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Correlation vs. causation?",hi:"सहसंबंध बनाम कारण?",mr:"सहसंबंध विरुद्ध कारण?"}, back:{en:"Just because two things happen together doesn't mean one caused the other — this is a classic research pitfall! 🔗",hi:"सिर्फ़ इसलिए कि दो चीज़ें एक साथ होती हैं इसका मतलब नहीं कि एक ने दूसरे को कारण बनाया — यह एक क्लासिक रिसर्च जाल है! 🔗",mr:"फक्त दोन गोष्टी एकत्र घडतात याचा अर्थ एकाने दुसऱ्याला कारणीभूत केलं असा होत नाही — हा एक ठराविक संशोधन सापळा आहे! 🔗"} },
              { front:{en:"Funding sources matter?",hi:"फंडिंग स्रोत मायने रखते हैं?",mr:"निधीचे स्रोत महत्त्वाचे आहेत?"}, back:{en:"Knowing who funded a study can help evaluate potential bias — good research discloses this openly! 💰",hi:"यह जानना कि किसने एक स्टडी को फंड किया, संभावित पूर्वाग्रह का मूल्यांकन करने में मदद कर सकता है — अच्छी रिसर्च इसे खुले तौर पर प्रकट करती है! 💰",mr:"एका अभ्यासाला कोणी निधी दिला हे जाणून घेणं संभाव्य पूर्वग्रह मूल्यमापन करण्यास मदत करू शकतं — चांगलं संशोधन हे उघडपणे उघड करतं! 💰"} },
              { front:{en:"Media exaggeration is common?",hi:"मीडिया अतिशयोक्ति आम है?",mr:"माध्यमांची अतिशयोक्ती सामान्य आहे?"}, back:{en:"Studies show that news coverage of research often exaggerates findings beyond what the actual study supports! 📰",hi:"स्टडी दिखाती हैं कि रिसर्च की न्यूज़ कवरेज अक्सर वास्तविक स्टडी के समर्थन से ज़्यादा निष्कर्षों को बढ़ा-चढ़ाकर बताती है! 📰",mr:"अभ्यास दाखवतात की संशोधनाचं बातम्यांतील कव्हरेज अनेकदा प्रत्यक्ष अभ्यासाच्या समर्थनापेक्षा निष्कर्षांची अतिशयोक्ती करतं! 📰"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Research Critique or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"If two things happen together, one must have caused the other.",hi:"अगर दो चीज़ें एक साथ होती हैं, एक ने दूसरे को ज़रूर कारण बनाया होगा।",mr:"जर दोन गोष्टी एकत्र घडल्या, तर एकाने दुसऱ्याला नक्कीच कारणीभूत केलं असेल."}, answer:false, explain:{en:"Myth! Correlation doesn't necessarily mean causation — this is one of the most important concepts in evaluating research.",hi:"मिथक! सहसंबंध का ज़रूरी नहीं कि कारण हो — यह रिसर्च का मूल्यांकन करने में सबसे ज़रूरी अवधारणाओं में से एक है।",mr:"मिथक! सहसंबंधाचा अर्थ कारण असणं गरजेचं नाही — संशोधनाचं मूल्यमापन करण्यातील ही सर्वात महत्त्वाची संकल्पनांपैकी एक आहे."} },
              { text:{en:"News headlines about research studies always accurately represent the actual findings.",hi:"रिसर्च स्टडी के बारे में न्यूज़ हेडलाइन हमेशा असली निष्कर्षों का सटीक प्रतिनिधित्व करती हैं।",mr:"संशोधन अभ्यासांबद्दलच्या बातम्यांच्या हेडलाइन्स नेहमी प्रत्यक्ष निष्कर्षांचं अचूक प्रतिनिधित्व करतात."}, answer:false, explain:{en:"Myth! Studies show that media coverage often exaggerates findings beyond what the actual research supports.",hi:"मिथक! स्टडी दिखाती हैं कि मीडिया कवरेज अक्सर वास्तविक रिसर्च के समर्थन से ज़्यादा निष्कर्षों को बढ़ा-चढ़ाकर बताती है।",mr:"मिथक! अभ्यास दाखवतात की माध्यमांचं कव्हरेज अनेकदा प्रत्यक्ष संशोधनाच्या समर्थनापेक्षा निष्कर्षांची अतिशयोक्ती करतं."} },
              { text:{en:"A study's sample size and whether it has a comparison group genuinely affect how trustworthy its conclusions are.",hi:"एक स्टडी का नमूना आकार और क्या इसमें एक तुलना समूह है, वाकई प्रभावित करता है कि इसके निष्कर्ष कितने भरोसेमंद हैं।",mr:"अभ्यासाचा नमुना आकार आणि तुलना गट आहे का, हे खरंच त्याचे निष्कर्ष किती विश्वासार्ह आहेत यावर परिणाम करतं."}, answer:true, explain:{en:"True! Both sample size and study design genuinely shape how much a study's conclusions can be trusted.",hi:"सच! नमूना आकार और स्टडी डिज़ाइन दोनों वाकई प्रभावित करते हैं कि एक स्टडी के निष्कर्षों पर कितना भरोसा किया जा सकता है।",mr:"खरं! नमुना आकार आणि अभ्यास डिझाइन दोन्ही खरंच अभ्यासाच्या निष्कर्षांवर किती विश्वास ठेवता येईल यावर परिणाम करतात."} }
            ]}}
          ]},
          { label: "Healthcare Policy Scenario",
            bonusAssignment: {
              title: { en: "Policy Trade-Off Reflection", hi: "नीति ट्रेड-ऑफ पर विचार", mr: "धोरण तडजोड विचार" },
              prompt: { en: "Write 3-4 sentences on a healthcare policy trade-off you find interesting (like cost vs. access). Take a photo!",
                        hi: "एक हेल्थकेयर नीति ट्रेड-ऑफ पर 3-4 वाक्य लिखो जो तुम्हें दिलचस्प लगे (जैसे लागत बनाम पहुँच)। फोटो लो!",
                        mr: "तुम्हाला रुचकर वाटणाऱ्या आरोग्यसेवा धोरण तडजोडीबद्दल (जसं खर्च विरुद्ध पोहोच) 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🏛️", title: "Navigate a Policy Trade-Off", mentorVisual: "🏛️",
              mentorIntro: {
                en: "Healthcare policy often involves genuine trade-offs, without a perfect answer. Let's work through a realistic scenario.",
                hi: "हेल्थकेयर नीति में अक्सर असली ट्रेड-ऑफ शामिल होते हैं, बिना किसी परफेक्ट जवाब के। चलो एक यथार्थवादी परिदृश्य से गुज़रते हैं।",
                mr: "आरोग्यसेवा धोरणात अनेकदा खऱ्या तडजोडी समाविष्ट असतात, कोणतंही परिपूर्ण उत्तर नसताना. चला एका वास्तववादी परिस्थितीतून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A region has limited healthcare funding. They must choose between building one advanced specialty hospital in the city, or funding several smaller clinics across rural areas. What factors matter most?",
                             hi:"एक क्षेत्र में सीमित हेल्थकेयर फंडिंग है। उन्हें शहर में एक एडवांस स्पेशलिटी अस्पताल बनाने, या ग्रामीण क्षेत्रों में कई छोटे क्लीनिकों को फंड करने के बीच चुनना है। कौन से कारक सबसे ज़्यादा मायने रखते हैं?",
                             mr:"एका प्रदेशात मर्यादित आरोग्यसेवा निधी आहे. त्यांना शहरात एक प्रगत खासियत रुग्णालय बांधणं, किंवा ग्रामीण भागांत अनेक लहान दवाखान्यांना निधी देणं यामध्ये निवडायचं आहे. कोणते घटक सर्वात जास्त महत्त्वाचे आहेत?" },
                choices: [
                  { label:{en:"Consider how many total people each option would reach, and how urgently rural areas currently lack any care at all", hi:"विचार करो हर विकल्प कितने कुल लोगों तक पहुँचेगा, और ग्रामीण क्षेत्रों में अभी कितनी अत्यावश्यकता से कोई देखभाल बिल्कुल नहीं है", mr:"विचार करा प्रत्येक पर्याय एकूण किती लोकांपर्यंत पोहोचेल, आणि ग्रामीण भागांत सध्या कोणतीही काळजी अजिबात नसण्याची तातडी किती आहे"}, quality:"best",
                    outcome:{en:"Thoughtful policy reasoning! Considering total population reached and existing gaps in care is exactly the kind of evidence-based thinking that guides good healthcare policy decisions.",hi:"विचारशील नीति तर्क! पहुँची गई कुल आबादी और देखभाल में मौजूदा कमियों पर विचार करना बिल्कुल वैसी सबूत-आधारित सोच है जो अच्छी हेल्थकेयर नीति के फ़ैसलों का मार्गदर्शन करती है।",mr:"विचारशील धोरण तर्क! पोहोचलेली एकूण लोकसंख्या आणि काळजीतील विद्यमान त्रुटींचा विचार करणं अगदी अशाच प्रकारचा पुरावा-आधारित विचार आहे जो चांगल्या आरोग्यसेवा धोरण निर्णयांना मार्गदर्शन करतो."} },
                  { label:{en:"Just choose whichever option seems more impressive or prestigious", hi:"बस वह विकल्प चुनो जो ज़्यादा प्रभावशाली या प्रतिष्ठित लगे", mr:"फक्त जो पर्याय अधिक प्रभावी किंवा प्रतिष्ठित वाटतो तो निवडा"}, quality:"risky",
                    outcome:{en:"This overlooks the real goal. Choosing based on prestige rather than actual population impact could mean fewer people genuinely get access to needed care.",hi:"यह असली लक्ष्य को नज़रअंदाज़ करता है। प्रतिष्ठा के आधार पर चुनना, असली जनसंख्या प्रभाव के बजाय, इसका मतलब हो सकता है कि कम लोगों को वाकई ज़रूरी देखभाल मिले।",mr:"यात खरं उद्दिष्ट दुर्लक्षित होतं. प्रतिष्ठेवर आधारित निवडणं, प्रत्यक्ष लोकसंख्या परिणामाऐवजी, याचा अर्थ कमी लोकांना खरंच आवश्यक काळजी मिळणं असू शकतो."} }
                ]
              },
              {
                situation: { en:"Data shows the rural clinics option would help more total people, but the specialty hospital could save more lives per person treated for severe cases. How do you think about this trade-off?",
                             hi:"डेटा दिखाता है कि ग्रामीण क्लीनिक विकल्प ज़्यादा कुल लोगों की मदद करेगा, लेकिन स्पेशलिटी अस्पताल गंभीर मामलों के लिए इलाज किए गए प्रति व्यक्ति ज़्यादा जानें बचा सकता है। तुम इस ट्रेड-ऑफ के बारे में कैसे सोचते हो?",
                             mr:"डेटा दाखवतो की ग्रामीण दवाखाना पर्याय जास्त एकूण लोकांना मदत करेल, पण खासियत रुग्णालय गंभीर केसेससाठी उपचार केलेल्या प्रति व्यक्ती जास्त जीव वाचवू शकतं. तुम्ही या तडजोडीबद्दल कसा विचार करता?" },
                choices: [
                  { label:{en:"Recognize this as a genuine values question with no single 'correct' answer, and consider what the community itself prioritizes", hi:"इसे बिना किसी एक 'सही' जवाब के एक असली मूल्यों का सवाल मानो, और विचार करो कि समुदाय खुद क्या प्राथमिकता देता है", mr:"हा कोणत्याही एका 'योग्य' उत्तराशिवाय खरा मूल्यांचा प्रश्न म्हणून ओळखा, आणि समुदाय स्वतः कशाला प्राधान्य देतो याचा विचार करा"}, quality:"best",
                    outcome:{en:"Mature reasoning! Recognizing that this is a genuine values trade-off, not a simple math problem, and considering community input, reflects real-world policy complexity honestly.",hi:"परिपक्व तर्क! यह पहचानना कि यह एक साधी गणित की समस्या नहीं, एक असली मूल्यों का ट्रेड-ऑफ है, और सामुदायिक इनपुट पर विचार करना, ईमानदारी से वास्तविक दुनिया की नीति जटिलता को दर्शाता है।",mr:"प्रौढ तर्क! हा साधा गणिताचा प्रश्न नाही, हा खरा मूल्यांचा तडजोड आहे हे ओळखणं, आणि सामुदायिक इनपुटचा विचार करणं, प्रामाणिकपणे वास्तविक जगातील धोरण गुंतागुंत प्रतिबिंबित करतं."} },
                  { label:{en:"Assume there's obviously one mathematically correct answer and ignore the values dimension entirely", hi:"मान लो कि स्पष्ट रूप से एक गणितीय रूप से सही जवाब है और मूल्यों के आयाम को पूरी तरह नज़रअंदाज़ करो", mr:"असं गृहीत धरा की स्पष्टपणे एक गणितीयदृष्ट्या योग्य उत्तर आहे आणि मूल्यांच्या आयामाला पूर्णपणे दुर्लक्षित करा"}, quality:"risky",
                    outcome:{en:"This oversimplifies a genuinely complex issue. Real healthcare policy decisions involve real value trade-offs, not just numbers — ignoring that dimension misses something important.",hi:"यह एक वाकई जटिल मुद्दे को बहुत सरल बना देता है। असली हेल्थकेयर नीति के फ़ैसलों में असली मूल्यों के ट्रेड-ऑफ शामिल हैं, सिर्फ़ संख्याएँ नहीं — उस आयाम को नज़रअंदाज़ करना कुछ ज़रूरी छोड़ देता है।",mr:"हे खरंच जटिल मुद्दा खूप सोपं करतं. खऱ्या आरोग्यसेवा धोरण निर्णयांमध्ये खऱ्या मूल्यांच्या तडजोडी समाविष्ट आहेत, फक्त संख्या नाही — तो आयाम दुर्लक्षित करणं काहीतरी महत्त्वाचं चुकतं."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🏛️", title: "Explore policy trade-offs", mentorVisual: "🏛️",
              mentorIntro: {
                en: "Let's explore some of the real trade-offs healthcare policymakers regularly face.",
                hi: "चलो कुछ असली ट्रेड-ऑफ को एक्सप्लोर करते हैं जिनका हेल्थकेयर नीति निर्माता नियमित रूप से सामना करते हैं।",
                mr: "चला काही खऱ्या तडजोडींना एक्सप्लोर करूया ज्यांना आरोग्यसेवा धोरणकर्ते नियमितपणे सामोरे जातात."
              },
              data: { visual: "🏛️", hotspots: [
              { label:{en:"Breadth vs. depth",hi:"व्यापकता बनाम गहराई",mr:"विस्तार विरुद्ध खोली"}, fact:{en:"Policymakers often weigh helping many people a little versus helping fewer people a lot!"} },
              { label:{en:"Limited resources",hi:"सीमित संसाधन",mr:"मर्यादित साधनं"}, fact:{en:"No healthcare system has unlimited money — every decision genuinely means choosing what NOT to fund too!"} },
              { label:{en:"Community input matters",hi:"सामुदायिक इनपुट मायने रखता है",mr:"सामुदायिक इनपुट महत्त्वाचा आहे"}, fact:{en:"Good policy processes often involve asking the affected community what they value most!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Healthcare policy quiz",
              desc: { en:"A real quiz on the genuine trade-offs involved in healthcare policy decisions.", hi:"हेल्थकेयर नीति फ़ैसलों में शामिल असली ट्रेड-ऑफ पर एक असली क्विज़।", mr:"आरोग्यसेवा धोरण निर्णयांमध्ये समाविष्ट खऱ्या तडजोडींवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Decisions without perfect answers",
              desc: { en:"How do you feel about decisions that don't have one clearly 'correct' answer, just genuine trade-offs? How would you approach making peace with that?", hi:"उन फ़ैसलों के बारे में तुम्हें कैसा लगता है जिनका कोई स्पष्ट रूप से 'सही' जवाब नहीं है, बस असली ट्रेड-ऑफ हैं? तुम इसके साथ शांति बनाने का तरीका कैसे अपनाओगे?", mr:"ज्यांना कोणतंही स्पष्टपणे 'योग्य' उत्तर नाही, फक्त खऱ्या तडजोडी आहेत अशा निर्णयांबद्दल तुम्हाला कसं वाटतं? त्यासोबत शांती करण्याचा तुम्ही कसा दृष्टिकोन घ्याल?" } },
            { engine: "flip-cards", icon: "🃏", title: "Policy Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced healthcare policy fact!",
                hi: "चलो और गहराई में जाते हैं — एक ज़्यादा एडवांस हेल्थकेयर नीति तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — अधिक प्रगत आरोग्यसेवा धोरण तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Health economists exist?",hi:"स्वास्थ्य अर्थशास्त्री मौजूद हैं?",mr:"आरोग्य अर्थतज्ज्ञ अस्तित्वात आहेत?"}, back:{en:"There's an entire field called 'health economics' dedicated to studying exactly these kinds of resource trade-offs! 📊",hi:"'हेल्थ इकोनॉमिक्स' नाम का एक पूरा क्षेत्र है जो बिल्कुल इसी तरह के संसाधन ट्रेड-ऑफ का अध्ययन करने के लिए समर्पित है! 📊",mr:"'आरोग्य अर्थशास्त्र' नावाचं एक संपूर्ण क्षेत्र आहे जे अगदी अशाच प्रकारच्या साधन तडजोडींचा अभ्यास करण्यासाठी समर्पित आहे! 📊"} },
              { front:{en:"Policy pilots exist?",hi:"नीति पायलट मौजूद हैं?",mr:"धोरण पायलट अस्तित्वात आहेत?"}, back:{en:"Policymakers sometimes test a policy in one small area first (a 'pilot'), before deciding whether to expand it! 🧪",hi:"नीति निर्माता कभी-कभी इसे विस्तारित करने का फ़ैसला लेने से पहले पहले एक छोटे से क्षेत्र में एक नीति का परीक्षण करते हैं (एक 'पायलट')! 🧪",mr:"धोरणकर्ते कधीकधी ते विस्तारायचं की नाही हे ठरवण्याआधी आधी एका लहान भागात एक धोरण चाचणी करतात (एक 'पायलट')! 🧪"} },
              { front:{en:"Trade-offs shift over time?",hi:"ट्रेड-ऑफ समय के साथ बदलते हैं?",mr:"तडजोडी कालांतराने बदलतात?"}, back:{en:"As populations and needs change, healthcare policy trade-offs are regularly reevaluated, not decided once forever! 🔄",hi:"जैसे-जैसे आबादी और ज़रूरतें बदलती हैं, हेल्थकेयर नीति ट्रेड-ऑफ नियमित रूप से फिर से मूल्यांकित होते हैं, एक बार हमेशा के लिए तय नहीं होते! 🔄",mr:"लोकसंख्या आणि गरजा बदलतात तसतसं, आरोग्यसेवा धोरण तडजोडी नियमितपणे पुन्हा मूल्यमापित केल्या जातात, एकदाच कायमचं ठरवल्या जात नाहीत! 🔄"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Healthcare Policy or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Healthcare policy decisions always have one clearly correct mathematical answer.",hi:"हेल्थकेयर नीति फ़ैसलों में हमेशा एक स्पष्ट रूप से सही गणितीय जवाब होता है।",mr:"आरोग्यसेवा धोरण निर्णयांना नेहमी एक स्पष्टपणे योग्य गणिती उत्तर असतं."}, answer:false, explain:{en:"Myth! Many healthcare policy decisions involve genuine values trade-offs without one single correct answer.",hi:"मिथक! कई हेल्थकेयर नीति फ़ैसलों में बिना किसी एक सही जवाब के असली मूल्यों के ट्रेड-ऑफ शामिल हैं।",mr:"मिथक! अनेक आरोग्यसेवा धोरण निर्णयांमध्ये कोणत्याही एका योग्य उत्तराशिवाय खऱ्या मूल्यांच्या तडजोडी समाविष्ट असतात."} },
              { text:{en:"Policymakers sometimes test policies in a small pilot area before wider rollout.",hi:"नीति निर्माता कभी-कभी व्यापक रोलआउट से पहले एक छोटे पायलट क्षेत्र में नीतियों का परीक्षण करते हैं।",mr:"धोरणकर्ते कधीकधी व्यापक अंमलबजावणीआधी एका लहान पायलट भागात धोरणांची चाचणी करतात."}, answer:true, explain:{en:"True! Pilot testing is a real, common practice before expanding a policy more broadly.",hi:"सच! पायलट टेस्टिंग एक असली, आम अभ्यास है नीति को ज़्यादा व्यापक रूप से विस्तारित करने से पहले।",mr:"खरं! पायलट चाचणी ही एक खरी, सामान्य पद्धत आहे धोरण अधिक व्यापकपणे विस्तारण्याआधी."} },
              { text:{en:"Healthcare resources are unlimited, so funding decisions don't really involve trade-offs.",hi:"हेल्थकेयर संसाधन असीमित हैं, इसलिए फंडिंग फ़ैसलों में वाकई ट्रेड-ऑफ शामिल नहीं होते।",mr:"आरोग्यसेवा साधनं अमर्याद आहेत, त्यामुळे निधी निर्णयांमध्ये खरंच तडजोडी समाविष्ट नसतात."}, answer:false, explain:{en:"Myth! Healthcare resources are always limited, meaning every funding decision genuinely involves trade-offs about what not to fund.",hi:"मिथक! हेल्थकेयर संसाधन हमेशा सीमित हैं, मतलब हर फंडिंग फ़ैसले में वाकई ट्रेड-ऑफ शामिल हैं कि क्या फंड नहीं करना है।",mr:"मिथक! आरोग्यसेवा साधनं नेहमी मर्यादित असतात, म्हणजे प्रत्येक निधी निर्णयात खरंच काय निधी द्यायचं नाही याबद्दल तडजोडी समाविष्ट असतात."} }
            ]}}
          ]},
          { label: "Complex Consent Ethics",
            bonusAssignment: {
              title: { en: "Consent Complexity Reflection", hi: "सहमति जटिलता पर विचार", mr: "संमती गुंतागुंत विचार" },
              prompt: { en: "Write 3-4 sentences on why getting truly informed consent can sometimes be more complicated than just asking someone to sign a form. Take a photo!",
                        hi: "3-4 वाक्य लिखो कि वाकई सूचित सहमति पाना कभी-कभी किसी को फ़ॉर्म पर हस्ताक्षर करने के लिए कहने से ज़्यादा जटिल क्यों हो सकता है। फोटो लो!",
                        mr: "खरोखर माहितीपूर्ण संमती मिळवणं कधीकधी एखाद्याला फॉर्मवर सही करायला सांगण्यापेक्षा जास्त गुंतागुंतीचं का असू शकतं याबद्दल 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "✍️", title: "Navigate Complex Consent", mentorVisual: "✍️",
              mentorIntro: {
                en: "Sometimes getting truly informed consent is more complicated than a simple signature. Let's work through a genuinely nuanced situation.",
                hi: "कभी-कभी वाकई सूचित सहमति पाना एक साधे हस्ताक्षर से ज़्यादा जटिल होता है। चलो एक वाकई सूक्ष्म स्थिति से गुज़रते हैं।",
                mr: "कधीकधी खरोखर माहितीपूर्ण संमती मिळवणं एका साध्या सहीपेक्षा जास्त गुंतागुंतीचं असतं. चला एका खरोखर सूक्ष्म परिस्थितीतून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"An elderly patient needs to consent to a procedure, but seems confused during your explanation and their family member keeps answering questions for them. What's your priority?",
                             hi:"एक बुज़ुर्ग मरीज़ को एक प्रक्रिया के लिए सहमति देनी है, लेकिन तुम्हारे स्पष्टीकरण के दौरान वे उलझे हुए लगते हैं और उनके परिवार का सदस्य उनके लिए सवालों का जवाब देता रहता है। तुम्हारी प्राथमिकता क्या है?",
                             mr:"एका वृद्ध रुग्णाला एका प्रक्रियेसाठी संमती द्यायची आहे, पण तुमच्या स्पष्टीकरणादरम्यान ते गोंधळलेले दिसतात आणि त्यांचा कुटुंब सदस्य त्यांच्यासाठी प्रश्नांची उत्तरं देत राहतो. तुमचं प्राधान्य काय आहे?" },
                choices: [
                  { label:{en:"Gently redirect to speak directly with the patient, checking their own understanding, rather than relying on the family member's answers", hi:"धीरे से मरीज़ के साथ सीधे बात करने की ओर पुनर्निर्देशित करो, उनकी अपनी समझ की जाँच करते हुए, परिवार के सदस्य के जवाबों पर निर्भर होने के बजाय", mr:"रुग्णाशी थेट बोलण्याकडे हळुवारपणे पुनर्निर्देशित करा, त्यांची स्वतःची समज तपासत, कुटुंब सदस्याच्या उत्तरांवर अवलंबून राहण्याऐवजी"}, quality:"best",
                    outcome:{en:"Excellent ethical instinct! True informed consent requires the patient themselves to understand, not just a family member answering on their behalf — this respects the patient's own autonomy.",hi:"बेहतरीन नैतिक सोच! असली सूचित सहमति के लिए मरीज़ को खुद समझने की ज़रूरत है, सिर्फ़ एक परिवार के सदस्य के उनकी ओर से जवाब देने की नहीं — यह मरीज़ की अपनी स्वायत्तता का सम्मान करता है।",mr:"उत्तम नैतिक अंतःप्रेरणा! खरी माहितीपूर्ण संमतीसाठी रुग्णाला स्वतःला समजून घेण्याची गरज आहे, फक्त कुटुंब सदस्याने त्यांच्या वतीने उत्तर देण्याची नाही — हे रुग्णाच्या स्वतःच्या स्वायत्ततेचा आदर करतं."} },
                  { label:{en:"Just accept the family member's answers to speed up the process", hi:"प्रक्रिया को तेज़ करने के लिए बस परिवार के सदस्य के जवाबों को स्वीकार कर लो", mr:"प्रक्रिया वेगवान करण्यासाठी फक्त कुटुंब सदस्याची उत्तरं स्वीकारा"}, quality:"risky",
                    outcome:{en:"This risks the core principle of consent. If the patient themselves doesn't genuinely understand, consent obtained mainly through a family member isn't truly informed consent from the patient.",hi:"यह सहमति के मुख्य सिद्धांत को जोखिम में डालता है। अगर मरीज़ खुद वाकई नहीं समझता, तो मुख्य रूप से परिवार के सदस्य के ज़रिए ली गई सहमति मरीज़ की वाकई सूचित सहमति नहीं है।",mr:"यात संमतीच्या मुख्य तत्त्वाला धोका आहे. जर रुग्णाला स्वतःला खरंच समजत नसेल, तर मुख्यतः कुटुंब सदस्याद्वारे मिळालेली संमती रुग्णाची खरी माहितीपूर्ण संमती नाही."} }
                ]
              },
              {
                situation: { en:"After checking directly, you realize the patient genuinely doesn't fully understand the procedure, even after your explanation. What do you do?",
                             hi:"सीधे जाँचने के बाद, तुम्हें एहसास होता है कि मरीज़ वाकई तुम्हारे स्पष्टीकरण के बाद भी प्रक्रिया को पूरी तरह नहीं समझता। तुम क्या करते हो?",
                             mr:"थेट तपासल्यानंतर, तुम्हाला जाणवतं की रुग्णाला तुमच्या स्पष्टीकरणानंतरही प्रक्रिया खरंच पूर्णपणे समजलेली नाही. तुम्ही काय करता?" },
                choices: [
                  { label:{en:"Take more time, try a different, simpler way of explaining, and involve family appropriately as support rather than a replacement for the patient's own understanding", hi:"और समय लो, समझाने का एक अलग, आसान तरीका आज़माओ, और मरीज़ की अपनी समझ के प्रतिस्थापन के बजाय सहायता के रूप में परिवार को उचित रूप से शामिल करो", mr:"अधिक वेळ घ्या, समजावण्याचा एक वेगळा, सोपा मार्ग वापरून बघा, आणि रुग्णाच्या स्वतःच्या समजुतीच्या पर्यायाऐवजी सहाय्य म्हणून कुटुंबाला योग्यरित्या सामील करा"}, quality:"best",
                    outcome:{en:"Great ethical care! Taking the time to genuinely ensure understanding, rather than rushing, respects the patient while still appropriately including supportive family involvement.",hi:"बेहतरीन नैतिक देखभाल! जल्दबाज़ी करने के बजाय वाकई समझ सुनिश्चित करने के लिए समय लेना, मरीज़ का सम्मान करते हुए भी उचित रूप से सहायक परिवार की भागीदारी को शामिल करता है।",mr:"उत्तम नैतिक काळजी! घाई करण्याऐवजी खरंच समज सुनिश्चित करण्यासाठी वेळ घेणं, रुग्णाचा आदर करत तरीही योग्यरित्या सहाय्यक कुटुंब सहभाग समाविष्ट करतं."} },
                  { label:{en:"Proceed with the family's consent anyway, since time is limited", hi:"फिर भी परिवार की सहमति के साथ आगे बढ़ो, क्योंकि समय सीमित है", mr:"तरीही कुटुंबाच्या संमतीने पुढे जा, कारण वेळ मर्यादित आहे"}, quality:"risky",
                    outcome:{en:"This compromises a core ethical principle. Proceeding without the patient's own genuine understanding, even under time pressure, risks violating true informed consent.",hi:"यह एक मुख्य नैतिक सिद्धांत से समझौता करता है। मरीज़ की अपनी असली समझ के बिना आगे बढ़ना, समय के दबाव में भी, असली सूचित सहमति का उल्लंघन करने का जोखिम है।",mr:"हे एका मुख्य नैतिक तत्त्वाशी तडजोड करतं. रुग्णाच्या स्वतःच्या खऱ्या समजुतीशिवाय पुढे जाणं, वेळेच्या दबावातही, खऱ्या माहितीपूर्ण संमतीचं उल्लंघन करण्याचा धोका आहे."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "✍️", title: "Explore genuine informed consent", mentorVisual: "✍️",
              mentorIntro: {
                en: "Let's explore what makes consent genuinely 'informed,' beyond just a signature.",
                hi: "चलो एक्सप्लोर करते हैं कि सिर्फ़ एक हस्ताक्षर से आगे, सहमति को वाकई 'सूचित' क्या बनाता है।",
                mr: "चला एक्सप्लोर करूया की फक्त सहीच्या पलीकडे, संमतीला खरंच 'माहितीपूर्ण' काय बनवतं."
              },
              data: { visual: "✍️", hotspots: [
              { label:{en:"Genuine understanding",hi:"असली समझ",mr:"खरी समज"}, fact:{en:"True informed consent requires the patient to genuinely understand, not just sign a document!"} },
              { label:{en:"Cognitive factors",hi:"संज्ञानात्मक कारक",mr:"संज्ञानात्मक घटक"}, fact:{en:"Age, confusion, or stress can genuinely affect someone's ability to fully understand in the moment!"} },
              { label:{en:"Supportive involvement, not replacement",hi:"सहायक भागीदारी, प्रतिस्थापन नहीं",mr:"सहाय्यक सहभाग, पर्याय नाही"}, fact:{en:"Family can support understanding, but shouldn't replace the patient's own genuine comprehension when possible!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Complex consent ethics quiz",
              desc: { en:"A real quiz on what makes informed consent genuinely meaningful in complex situations.", hi:"जटिल स्थितियों में सूचित सहमति को वाकई सार्थक क्या बनाता है, इस पर एक असली क्विज़।", mr:"जटिल परिस्थितींमध्ये माहितीपूर्ण संमती खरंच अर्थपूर्ण काय बनवते, यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Respecting autonomy",
              desc: { en:"Why do you think respecting a patient's own understanding and choice, even when it takes more time, matters so deeply in medicine?", hi:"तुम्हें क्यों लगता है कि मरीज़ की अपनी समझ और पसंद का सम्मान करना, तब भी जब इसमें ज़्यादा समय लगे, चिकित्सा में इतनी गहराई से मायने रखता है?", mr:"रुग्णाच्या स्वतःच्या समजुतीचा आणि निवडीचा आदर करणं, जरी त्यात जास्त वेळ लागला तरी, वैद्यकशास्त्रात इतकं खोलवर महत्त्वाचं का आहे असं तुम्हाला वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Consent Ethics Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more thoughtful fact about consent ethics!",
                hi: "चलो और गहराई में जाते हैं — सहमति नैतिकता के बारे में एक ज़्यादा विचारशील तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — संमती नैतिकतेबद्दल अधिक विचारशील तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Capacity assessments exist?",hi:"क्षमता मूल्यांकन मौजूद हैं?",mr:"क्षमता मूल्यमापन अस्तित्वात आहे?"}, back:{en:"Doctors sometimes use formal 'capacity assessments' to check whether a patient can genuinely understand and decide! 📋",hi:"डॉक्टर कभी-कभी यह जाँचने के लिए औपचारिक 'क्षमता मूल्यांकन' का इस्तेमाल करते हैं कि क्या मरीज़ वाकई समझ और फ़ैसला ले सकता है! 📋",mr:"डॉक्टर कधीकधी रुग्ण खरंच समजू आणि निर्णय घेऊ शकतो का हे तपासण्यासाठी औपचारिक 'क्षमता मूल्यमापन' वापरतात! 📋"} },
              { front:{en:"Consent can be withdrawn?",hi:"सहमति वापस ली जा सकती है?",mr:"संमती मागे घेता येते?"}, back:{en:"Informed consent isn't a one-time thing — patients can withdraw consent at any point, even after initially agreeing! 🔄",hi:"सूचित सहमति एक बार की चीज़ नहीं है — मरीज़ किसी भी बिंदु पर सहमति वापस ले सकते हैं, शुरुआत में सहमत होने के बाद भी! 🔄",mr:"माहितीपूर्ण संमती ही एकदाची गोष्ट नाही — रुग्ण कोणत्याही क्षणी संमती मागे घेऊ शकतात, सुरुवातीला सहमत झाल्यानंतरही! 🔄"} },
              { front:{en:"Plain language matters legally too?",hi:"सादी भाषा कानूनी रूप से भी मायने रखती है?",mr:"साधी भाषा कायदेशीरदृष्ट्याही महत्त्वाची आहे?"}, back:{en:"Many places now legally require consent forms to be written in plain, understandable language, not just dense medical jargon! ⚖️",hi:"कई जगहों पर अब कानूनी रूप से यह ज़रूरी है कि सहमति फ़ॉर्म सादी, समझने योग्य भाषा में लिखे जाएँ, सिर्फ़ घने मेडिकल शब्दजाल में नहीं! ⚖️",mr:"अनेक ठिकाणी आता कायदेशीरदृष्ट्या संमती फॉर्म साध्या, समजण्यासारख्या भाषेत लिहिणं आवश्यक आहे, फक्त दाट वैद्यकीय शब्दजालात नाही! ⚖️"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Consent Ethics or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"A family member's signature can always fully substitute for the patient's own understanding.",hi:"एक परिवार के सदस्य का हस्ताक्षर हमेशा मरीज़ की अपनी समझ का पूरी तरह विकल्प हो सकता है।",mr:"कुटुंब सदस्याची सही नेहमी रुग्णाच्या स्वतःच्या समजुतीचा पूर्णपणे पर्याय असू शकते."}, answer:false, explain:{en:"Myth! True informed consent requires the patient's own genuine understanding whenever possible, not just a family signature.",hi:"मिथक! असली सूचित सहमति के लिए जब भी संभव हो मरीज़ की अपनी असली समझ की ज़रूरत है, सिर्फ़ परिवार के हस्ताक्षर की नहीं।",mr:"मिथक! खऱ्या माहितीपूर्ण संमतीसाठी शक्य असेल तेव्हा रुग्णाच्या स्वतःच्या खऱ्या समजुतीची गरज आहे, फक्त कुटुंबाच्या सहीची नाही."} },
              { text:{en:"A patient can withdraw consent even after initially agreeing to a procedure.",hi:"एक मरीज़ एक प्रक्रिया के लिए शुरुआत में सहमत होने के बाद भी सहमति वापस ले सकता है।",mr:"रुग्ण एका प्रक्रियेला सुरुवातीला सहमत झाल्यानंतरही संमती मागे घेऊ शकतो."}, answer:true, explain:{en:"True! Consent can genuinely be withdrawn at any point, reflecting ongoing respect for patient autonomy.",hi:"सच! सहमति वाकई किसी भी बिंदु पर वापस ली जा सकती है, मरीज़ की स्वायत्तता के लिए चल रहे सम्मान को दर्शाते हुए।",mr:"खरं! संमती खरंच कोणत्याही क्षणी मागे घेता येते, रुग्णाच्या स्वायत्ततेसाठी सुरू असलेला आदर प्रतिबिंबित करत."} },
              { text:{en:"Consent forms are always written in complex medical language, with no requirement for plain language.",hi:"सहमति फ़ॉर्म हमेशा जटिल मेडिकल भाषा में लिखे जाते हैं, सादी भाषा की कोई ज़रूरत नहीं।",mr:"संमती फॉर्म नेहमी जटिल वैद्यकीय भाषेत लिहिले जातात, साध्या भाषेची कोणतीही आवश्यकता नाही."}, answer:false, explain:{en:"Myth! Many places now legally require consent forms to use plain, understandable language.",hi:"मिथक! कई जगहों पर अब कानूनी रूप से सहमति फ़ॉर्म को सादी, समझने योग्य भाषा इस्तेमाल करने की ज़रूरत है।",mr:"मिथक! अनेक ठिकाणी आता कायदेशीरदृष्ट्या संमती फॉर्मने साधी, समजण्यासारखी भाषा वापरणं आवश्यक आहे."} }
            ]}}
          ]},
          { label: "Rural Healthcare Challenge",
            bonusAssignment: {
              title: { en: "Rural Solution Proposal", hi: "ग्रामीण समाधान प्रस्ताव", mr: "ग्रामीण उपाय प्रस्ताव" },
              prompt: { en: "Propose a creative solution for getting specialist care to a rural area with no local specialists. Take a photo!",
                        hi: "किसी ग्रामीण क्षेत्र में स्थानीय विशेषज्ञों के बिना विशेषज्ञ देखभाल पहुँचाने के लिए एक रचनात्मक समाधान प्रस्तावित करो। फोटो लो!",
                        mr: "स्थानिक तज्ज्ञ नसलेल्या ग्रामीण भागात तज्ज्ञ काळजी पोहोचवण्यासाठी एक सर्जनशील उपाय प्रस्तावित करा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🌾", title: "Solve a Rural Access Challenge", mentorVisual: "🌾",
              mentorIntro: {
                en: "Bringing specialist-level care to under-resourced areas is one of medicine's genuine ongoing challenges. Let's work through a realistic case.",
                hi: "कम संसाधन वाले क्षेत्रों में स्पेशलिस्ट-स्तर की देखभाल पहुँचाना चिकित्सा की असली चल रही चुनौतियों में से एक है। चलो एक यथार्थवादी मामले से गुज़रते हैं।",
                mr: "कमी साधनसंपत्ती असलेल्या भागांत स्पेशालिस्ट-पातळीची काळजी पोहोचवणं हे वैद्यकशास्त्रातील खरं सुरू असलेल्या आव्हानांपैकी एक आहे. चला एका वास्तववादी केसमधून जाऊया."
              },
              data: { steps: [
              {
                situation: { en:"A rural clinic has a patient needing specialist cardiology input, but the nearest cardiologist is 6 hours away. What's your first step?",
                             hi:"एक ग्रामीण क्लीनिक में एक मरीज़ को स्पेशलिस्ट कार्डियोलॉजी इनपुट चाहिए, लेकिन सबसे नज़दीकी कार्डियोलॉजिस्ट 6 घंटे दूर है। तुम्हारा पहला कदम क्या है?",
                             mr:"एका ग्रामीण दवाखान्यात एका रुग्णाला तज्ज्ञ कार्डिओलॉजी इनपुट हवं आहे, पण सर्वात जवळचा कार्डिओलॉजिस्ट 6 तास दूर आहे. तुमचं पहिलं पाऊल काय आहे?" },
                choices: [
                  { label:{en:"Use telemedicine to connect the local clinic with the distant cardiologist for a remote consultation", hi:"दूर के कार्डियोलॉजिस्ट के साथ स्थानीय क्लीनिक को जोड़ने के लिए टेलीमेडिसिन का इस्तेमाल करो एक दूरस्थ परामर्श के लिए", mr:"दूरच्या कार्डिओलॉजिस्टशी स्थानिक दवाखाना जोडण्यासाठी टेलिमेडिसिनचा वापर करा दूरस्थ सल्लामसलतीसाठी"}, quality:"best",
                    outcome:{en:"Smart, practical solution! Telemedicine genuinely bridges distance gaps, letting patients access specialist expertise without the burden of long travel — a real modern tool for rural access.",hi:"स्मार्ट, व्यावहारिक समाधान! टेलीमेडिसिन वाकई दूरी के अंतर को पाटती है, मरीज़ों को लंबी यात्रा के बोझ के बिना विशेषज्ञ ज्ञान तक पहुँचने देती है — ग्रामीण पहुँच के लिए एक असली आधुनिक उपकरण।",mr:"स्मार्ट, व्यावहारिक उपाय! टेलिमेडिसिन खरंच अंतराची तफावत भरून काढते, रुग्णांना लांब प्रवासाच्या भाराशिवाय तज्ज्ञ ज्ञानापर्यंत पोहोचू देते — ग्रामीण पोहोचीसाठी एक खरं आधुनिक साधन."} },
                  { label:{en:"Just tell the patient to figure out their own transportation to the distant specialist", hi:"बस मरीज़ को दूर के विशेषज्ञ तक अपना खुद का परिवहन का पता लगाने के लिए कहो", mr:"फक्त रुग्णाला दूरच्या तज्ज्ञापर्यंत स्वतःची वाहतूक शोधायला सांगा"}, quality:"risky",
                    outcome:{en:"This overlooks a real barrier. Long travel can genuinely be difficult or impossible for many rural patients — not exploring alternatives like telemedicine can mean care simply doesn't happen.",hi:"यह एक असली बाधा को नज़रअंदाज़ करता है। लंबी यात्रा कई ग्रामीण मरीज़ों के लिए वाकई मुश्किल या असंभव हो सकती है — टेलीमेडिसिन जैसे विकल्पों को एक्सप्लोर न करना मतलब हो सकता है कि देखभाल बस नहीं होती।",mr:"यात एक खरी अडचण दुर्लक्षित होते. लांब प्रवास अनेक ग्रामीण रुग्णांसाठी खरंच कठीण किंवा अशक्य असू शकतो — टेलिमेडिसिनसारखे पर्याय एक्सप्लोर न करणं म्हणजे काळजी फक्त होतच नाही असं असू शकतं."} }
                ]
              },
              {
                situation: { en:"The telemedicine consultation reveals the patient needs an in-person procedure the local clinic can't perform. How do you plan the next steps?",
                             hi:"टेलीमेडिसिन परामर्श से पता चलता है कि मरीज़ को एक व्यक्तिगत प्रक्रिया चाहिए जो स्थानीय क्लीनिक नहीं कर सकता। तुम अगले कदमों की योजना कैसे बनाते हो?",
                             mr:"टेलिमेडिसिन सल्लामसलतीत कळतं की रुग्णाला एक प्रत्यक्ष प्रक्रिया हवी आहे जी स्थानिक दवाखाना करू शकत नाही. तुम्ही पुढच्या पावलांची योजना कशी बनवता?" },
                choices: [
                  { label:{en:"Coordinate a well-planned transfer, ensuring the receiving facility has full context and the patient understands the plan clearly", hi:"एक अच्छी तरह से योजनाबद्ध स्थानांतरण का समन्वय करो, यह सुनिश्चित करते हुए कि प्राप्त करने वाली सुविधा के पास पूरा संदर्भ है और मरीज़ योजना को स्पष्ट रूप से समझता है", mr:"एक चांगली नियोजित स्थलांतर समन्वयित करा, प्राप्त करणाऱ्या सुविधेकडे संपूर्ण संदर्भ आहे आणि रुग्णाला योजना स्पष्टपणे समजते याची खात्री करत"}, quality:"best",
                    outcome:{en:"Excellent coordination! A thoughtful, well-communicated transfer, rather than a rushed one, genuinely gives the patient the best chance of a smooth, effective transition to specialized care.",hi:"बेहतरीन समन्वय! एक विचारशील, अच्छी तरह से संप्रेषित स्थानांतरण, जल्दबाज़ी वाले के बजाय, वाकई मरीज़ को विशेष देखभाल में एक सहज, असरदार बदलाव का सबसे अच्छा मौका देता है।",mr:"उत्तम समन्वय! एक विचारशील, चांगल्या प्रकारे संवाद साधलेलं स्थलांतर, घाईच्या ऐवजी, खरंच रुग्णाला विशेष काळजीत सुरळीत, प्रभावी संक्रमणाची सर्वोत्तम संधी देतं."} },
                  { label:{en:"Just send the patient off without coordinating with the receiving facility", hi:"रिसीविंग फ़ैसिलिटी के साथ समन्वय किए बिना बस मरीज़ को भेज दो", mr:"प्राप्त करणाऱ्या सुविधेशी समन्वय न साधता फक्त रुग्णाला पाठवा"}, quality:"risky",
                    outcome:{en:"This risks a poor transition. Without proper coordination and shared context, the receiving facility may lack important information, and the patient may be confused about the plan.",hi:"इससे खराब बदलाव का जोखिम है। उचित समन्वय और साझा संदर्भ के बिना, प्राप्त करने वाली सुविधा में ज़रूरी जानकारी की कमी हो सकती है, और मरीज़ योजना के बारे में उलझन में हो सकता है।",mr:"यामुळे खराब संक्रमणाचा धोका आहे. योग्य समन्वय आणि सामायिक संदर्भाशिवाय, प्राप्त करणाऱ्या सुविधेकडे महत्त्वाची माहिती नसू शकते, आणि रुग्ण योजनेबद्दल गोंधळलेला असू शकतो."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🌾", title: "Explore rural healthcare solutions", mentorVisual: "🌾",
              mentorIntro: {
                en: "Let's explore real, creative solutions being used to bring specialist care to under-resourced areas.",
                hi: "चलो असली, रचनात्मक समाधानों को एक्सप्लोर करते हैं जो कम संसाधन वाले क्षेत्रों में विशेषज्ञ देखभाल लाने के लिए इस्तेमाल हो रहे हैं।",
                mr: "चला खरे, सर्जनशील उपाय एक्सप्लोर करूया जे कमी साधनसंपत्ती असलेल्या भागांत तज्ज्ञ काळजी आणण्यासाठी वापरले जात आहेत."
              },
              data: { visual: "🌾", hotspots: [
              { label:{en:"Telemedicine bridges distance",hi:"टेलीमेडिसिन दूरी को पाटती है",mr:"टेलिमेडिसिन अंतर भरून काढतं"}, fact:{en:"Video consultations let rural patients access specialist opinions without long, difficult travel!"} },
              { label:{en:"Mobile specialist visits",hi:"मोबाइल विशेषज्ञ यात्राएँ",mr:"मोबाइल तज्ज्ञ भेटी"}, fact:{en:"Some programs send specialists to rotate through rural areas periodically, bringing expertise directly to communities!"} },
              { label:{en:"Training local providers",hi:"स्थानीय प्रदाताओं को प्रशिक्षण",mr:"स्थानिक पुरवठादारांना प्रशिक्षण"}, fact:{en:"Training local healthcare workers in more advanced skills can genuinely reduce the need for distant specialist referral!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "Rural healthcare challenge quiz",
              desc: { en:"A real quiz on creative solutions for bringing specialist care to rural areas.", hi:"ग्रामीण क्षेत्रों में विशेषज्ञ देखभाल लाने के लिए रचनात्मक समाधानों पर एक असली क्विज़।", mr:"ग्रामीण भागांत तज्ज्ञ काळजी आणण्यासाठी सर्जनशील उपायांवर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Creative problem-solving",
              desc: { en:"Why do you think creative solutions, not just 'more doctors,' are often needed to solve rural healthcare access challenges?", hi:"तुम्हें क्यों लगता है कि ग्रामीण हेल्थकेयर पहुँच चुनौतियों को हल करने के लिए अक्सर रचनात्मक समाधान चाहिए, सिर्फ़ 'ज़्यादा डॉक्टर' नहीं?", mr:"ग्रामीण आरोग्यसेवा पोहोच आव्हानं सोडवण्यासाठी अनेकदा सर्जनशील उपायांची गरज असते, फक्त 'जास्त डॉक्टर' नाही, असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Rural Access Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about rural healthcare access!",
                hi: "चलो और गहराई में जाते हैं — ग्रामीण हेल्थकेयर पहुँच के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — ग्रामीण आरोग्यसेवा पोहोचीबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Telemedicine grew fast?",hi:"टेलीमेडिसिन तेज़ी से बढ़ी?",mr:"टेलिमेडिसिन वेगाने वाढली?"}, back:{en:"Telemedicine use expanded dramatically in recent years, genuinely transforming rural healthcare access! 📈",hi:"हाल के सालों में टेलीमेडिसिन का इस्तेमाल नाटकीय रूप से बढ़ा, ग्रामीण हेल्थकेयर पहुँच को वाकई बदलते हुए! 📈",mr:"अलिकडच्या वर्षांत टेलिमेडिसिनचा वापर नाट्यमयरीत्या वाढला, ग्रामीण आरोग्यसेवा पोहोच खरंच बदलत! 📈"} },
              { front:{en:"Drone delivery for medicine?",hi:"दवा के लिए ड्रोन डिलीवरी?",mr:"औषधासाठी ड्रोन डिलिव्हरी?"}, back:{en:"Some remote regions now use drones to deliver medical supplies to areas roads can't easily reach! 🚁",hi:"कुछ दूरदराज़ क्षेत्र अब उन क्षेत्रों में मेडिकल सप्लाई पहुँचाने के लिए ड्रोन का इस्तेमाल करते हैं जहाँ सड़कें आसानी से नहीं पहुँच सकतीं! 🚁",mr:"काही दुर्गम प्रदेश आता रस्ते सहज पोहोचू शकत नाहीत अशा भागांत वैद्यकीय पुरवठा पोहोचवण्यासाठी ड्रोन वापरतात! 🚁"} },
              { front:{en:"Community health workers scale expertise?",hi:"सामुदायिक स्वास्थ्य कार्यकर्ता विशेषज्ञता को बढ़ाते हैं?",mr:"सामुदायिक आरोग्य कर्मचारी तज्ज्ञता वाढवतात?"}, back:{en:"Training local community health workers helps extend limited specialist expertise to many more people! 👥",hi:"स्थानीय सामुदायिक स्वास्थ्य कार्यकर्ताओं को प्रशिक्षित करना सीमित विशेषज्ञ ज्ञान को कई और लोगों तक बढ़ाने में मदद करता है! 👥",mr:"स्थानिक सामुदायिक आरोग्य कर्मचाऱ्यांना प्रशिक्षित करणं मर्यादित तज्ज्ञ ज्ञान अधिक लोकांपर्यंत वाढवण्यास मदत करतं! 👥"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Rural Healthcare or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"Telemedicine can genuinely help rural patients access specialist opinions without long travel.",hi:"टेलीमेडिसिन वाकई ग्रामीण मरीज़ों को बिना लंबी यात्रा के विशेषज्ञ राय तक पहुँचने में मदद कर सकता है।",mr:"टेलिमेडिसिन खरंच ग्रामीण रुग्णांना लांब प्रवासाशिवाय तज्ज्ञ मत मिळवण्यास मदत करू शकतं."}, answer:true, explain:{en:"True! Telemedicine is a real, valuable tool for bridging distance-related access gaps.",hi:"सच! टेलीमेडिसिन दूरी से जुड़े पहुँच अंतर को पाटने के लिए एक असली, मूल्यवान उपकरण है।",mr:"खरं! टेलिमेडिसिन अंतर-संबंधित पोहोच तफावत भरून काढण्यासाठी एक खरं, मौल्यवान साधन आहे."} },
              { text:{en:"The only real solution to rural healthcare access is simply having more specialist doctors everywhere.",hi:"ग्रामीण हेल्थकेयर पहुँच का एकमात्र असली समाधान बस हर जगह ज़्यादा विशेषज्ञ डॉक्टरों का होना है।",mr:"ग्रामीण आरोग्यसेवा पोहोचीचा एकमेव खरा उपाय म्हणजे फक्त सर्वत्र जास्त तज्ज्ञ डॉक्टर असणं."}, answer:false, explain:{en:"Myth! Creative solutions like telemedicine, mobile visits, and training local providers all genuinely help, not just adding more specialists everywhere.",hi:"मिथक! टेलीमेडिसिन, मोबाइल विज़िट, और स्थानीय प्रदाताओं को प्रशिक्षण जैसे रचनात्मक समाधान सब वाकई मदद करते हैं, सिर्फ़ हर जगह ज़्यादा विशेषज्ञ जोड़ना नहीं।",mr:"मिथक! टेलिमेडिसिन, मोबाइल भेटी, आणि स्थानिक पुरवठादारांना प्रशिक्षण यासारखे सर्जनशील उपाय सर्व खरंच मदत करतात, फक्त सर्वत्र जास्त तज्ज्ञ जोडणं नाही."} },
              { text:{en:"Training local community health workers can help extend limited specialist expertise further.",hi:"स्थानीय सामुदायिक स्वास्थ्य कार्यकर्ताओं को प्रशिक्षण देना सीमित विशेषज्ञ ज्ञान को आगे बढ़ाने में मदद कर सकता है।",mr:"स्थानिक सामुदायिक आरोग्य कर्मचाऱ्यांना प्रशिक्षण देणं मर्यादित तज्ज्ञ ज्ञान आणखी वाढवण्यास मदत करू शकतं."}, answer:true, explain:{en:"True! Training local providers is a genuinely effective way to extend the reach of limited specialist knowledge.",hi:"सच! स्थानीय प्रदाताओं को प्रशिक्षित करना सीमित विशेषज्ञ ज्ञान की पहुँच बढ़ाने का एक वाकई असरदार तरीका है।",mr:"खरं! स्थानिक पुरवठादारांना प्रशिक्षण देणं मर्यादित तज्ज्ञ ज्ञानाची पोहोच वाढवण्याचा एक खरंच प्रभावी मार्ग आहे."} }
            ]}}
          ]},
          { label: "Global Health Comparison",
            bonusAssignment: {
              title: { en: "Healthcare Systems Comparison", hi: "हेल्थकेयर सिस्टम तुलना", mr: "आरोग्यसेवा यंत्रणा तुलना" },
              prompt: { en: "Research one other country's healthcare system (with an adult's help) and write 3-4 sentences comparing it to what you've learned. Take a photo!",
                        hi: "किसी बड़े की मदद से किसी और देश के हेल्थकेयर सिस्टम पर रिसर्च करो और 3-4 वाक्य लिखो जो तुमने सीखा उससे इसकी तुलना करते हुए। फोटो लो!",
                        mr: "मोठ्यांच्या मदतीने दुसऱ्या एखाद्या देशाच्या आरोग्यसेवा यंत्रणेवर संशोधन करा आणि तुम्ही जे शिकलात त्याशी तुलना करणारी 3-4 वाक्यं लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🌐", title: "Explore different healthcare systems", mentorVisual: "🌐",
              mentorIntro: {
                en: "Different countries organize healthcare in genuinely different ways. Let's explore a few approaches from around the world.",
                hi: "अलग-अलग देश हेल्थकेयर को वाकई अलग-अलग तरीकों से व्यवस्थित करते हैं। चलो दुनिया भर से कुछ तरीकों को एक्सप्लोर करते हैं।",
                mr: "वेगवेगळे देश आरोग्यसेवा खरंच वेगवेगळ्या प्रकारे व्यवस्थित करतात. चला जगभरातील काही दृष्टिकोन एक्सप्लोर करूया."
              },
              data: { visual: "🌐", hotspots: [
              { label:{en:"Universal coverage systems",hi:"सार्वभौमिक कवरेज सिस्टम",mr:"सार्वत्रिक कव्हरेज यंत्रणा"}, fact:{en:"Some countries provide healthcare to all citizens through government-funded systems, aiming for universal access!"} },
              { label:{en:"Mixed systems",hi:"मिश्रित सिस्टम",mr:"संमिश्र यंत्रणा"}, fact:{en:"Many countries, including India, use a mix of public and private healthcare working alongside each other!"} },
              { label:{en:"No single 'best' system",hi:"कोई एक 'सबसे अच्छा' सिस्टम नहीं",mr:"कोणतीही एक 'सर्वोत्तम' यंत्रणा नाही"}, fact:{en:"Each system has genuine trade-offs — there's ongoing debate worldwide about which approaches work best for different contexts!"} }
            ]}},
            { engine: "build-match", icon: "🌐", title: "Match healthcare system feature to what it prioritizes", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's practice matching different healthcare system features to what they're generally designed to prioritize.",
                hi: "चलो अलग-अलग हेल्थकेयर सिस्टम की विशेषताओं को यह मैच करने का अभ्यास करते हैं कि वे आमतौर पर किसे प्राथमिकता देने के लिए डिज़ाइन की गई हैं।",
                mr: "चला वेगवेगळ्या आरोग्यसेवा यंत्रणा वैशिष्ट्यं ती सहसा कशाला प्राधान्य देण्यासाठी डिझाइन केलेली आहेत याच्याशी जुळवण्याचा सराव करूया."
              },
              data: { noStakes: false, zones: [
              { id: "universal", label: { en:"Ensures everyone has some access, regardless of income", hi:"सुनिश्चित करता है सबकी कुछ पहुँच है, आय की परवाह किए बिना", mr:"प्रत्येकाला काही पोहोच आहे याची खात्री करते, उत्पन्नाची पर्वा न करता" } },
              { id: "private", label: { en:"Often offers more choice and faster access for those who can pay", hi:"अक्सर उनके लिए ज़्यादा पसंद और तेज़ पहुँच देता है जो भुगतान कर सकते हैं", mr:"अनेकदा जे पैसे देऊ शकतात त्यांच्यासाठी जास्त निवड आणि जलद पोहोच देते" } },
              { id: "mixed", label: { en:"Tries to combine benefits of both public and private options", hi:"पब्लिक और प्राइवेट दोनों विकल्पों के लाभों को मिलाने की कोशिश करता है", mr:"सार्वजनिक आणि खासगी दोन्ही पर्यायांचे फायदे एकत्र करण्याचा प्रयत्न करते" } }
            ], chips: ["universal","private","mixed"], facts: {
              universal:"That's universal coverage — designed to prioritize access for all!",
              private:"That's private-focused — designed to prioritize choice and speed for payers!",
              mixed:"That's a mixed system — trying to combine strengths of both approaches!"
            }}},
            { type: "Quiz", icon: "📝", title: "Global health comparison quiz",
              desc: { en:"A real quiz on comparing different healthcare system approaches around the world.", hi:"दुनिया भर में अलग-अलग हेल्थकेयर सिस्टम तरीकों की तुलना करने पर एक असली क्विज़।", mr:"जगभरातील वेगवेगळ्या आरोग्यसेवा यंत्रणा दृष्टिकोनांची तुलना करण्यावर एक खरा क्विझ." } },
            { type: "Reflect", icon: "💭", title: "Systems and values",
              desc: { en:"Why do you think a country's healthcare system often reflects its broader values about fairness, choice, and community responsibility?", hi:"तुम्हें क्यों लगता है कि एक देश का हेल्थकेयर सिस्टम अक्सर निष्पक्षता, पसंद, और सामुदायिक ज़िम्मेदारी के बारे में इसके व्यापक मूल्यों को दर्शाता है?", mr:"एका देशाची आरोग्यसेवा यंत्रणा अनेकदा निष्पक्षता, निवड, आणि सामुदायिक जबाबदारीबद्दलची तिची व्यापक मूल्यं प्रतिबिंबित करते असं तुम्हाला का वाटतं?" } },
            { engine: "flip-cards", icon: "🃏", title: "Global Health Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's go deeper — flip each card for a more advanced fact about global healthcare systems!",
                hi: "चलो और गहराई में जाते हैं — वैश्विक हेल्थकेयर सिस्टम के बारे में एक ज़्यादा एडवांस तथ्य देखने के लिए हर कार्ड पलटो!",
                mr: "चला अधिक खोलात जाऊया — जागतिक आरोग्यसेवा यंत्रणांबद्दल अधिक प्रगत तथ्य बघण्यासाठी प्रत्येक कार्ड उलटा!"
              },
              data: { cards: [
              { front:{en:"Systems keep evolving?",hi:"सिस्टम विकसित होते रहते हैं?",mr:"यंत्रणा विकसित होत राहतात?"}, back:{en:"Healthcare systems worldwide constantly reform and change, responding to new challenges and evolving values! 🔄",hi:"दुनिया भर में हेल्थकेयर सिस्टम लगातार सुधार और बदलते हैं, नई चुनौतियों और विकसित होते मूल्यों का जवाब देते हुए! 🔄",mr:"जगभरातील आरोग्यसेवा यंत्रणा सतत सुधारणा आणि बदलत असतात, नवीन आव्हानं आणि विकसित होणाऱ्या मूल्यांना प्रतिसाद देत! 🔄"} },
              { front:{en:"WHO tracks global comparisons?",hi:"डब्ल्यूएचओ वैश्विक तुलनाओं को ट्रैक करता है?",mr:"डब्ल्यूएचओ जागतिक तुलना ट्रॅक करतं?"}, back:{en:"The World Health Organization regularly compares health outcomes across countries to help guide global policy! 📊",hi:"वर्ल्ड हेल्थ ऑर्गनाइज़ेशन नियमित रूप से वैश्विक नीति का मार्गदर्शन करने में मदद के लिए देशों में स्वास्थ्य नतीजों की तुलना करता है! 📊",mr:"जागतिक आरोग्य संघटना नियमितपणे जागतिक धोरणाला मार्गदर्शन करण्यास मदत करण्यासाठी देशांतील आरोग्य निकालांची तुलना करते! 📊"} },
              { front:{en:"India's system is genuinely mixed?",hi:"भारत का सिस्टम वाकई मिश्रित है?",mr:"भारताची यंत्रणा खरंच संमिश्र आहे?"}, back:{en:"India uses a genuine mix of government hospitals, private hospitals, and various insurance schemes working together! 🇮🇳",hi:"भारत सरकारी अस्पतालों, निजी अस्पतालों, और विभिन्न बीमा योजनाओं का एक असली मिश्रण इस्तेमाल करता है जो साथ में काम करते हैं! 🇮🇳",mr:"भारत सरकारी रुग्णालयं, खासगी रुग्णालयं, आणि विविध विमा योजनांचं खरं मिश्रण वापरतो जे एकत्र काम करतात! 🇮🇳"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Global Health or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's test your knowledge! Decide if each statement is true or a myth.",
                hi: "चलो तुम्हारे ज्ञान की जांच करते हैं! तय करो हर बात सच है या मिथक।",
                mr: "चला तुमच्या ज्ञानाची चाचणी घेऊया! प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"There's one universally agreed 'best' healthcare system that every country should copy.",hi:"एक सार्वभौमिक रूप से सहमत 'सबसे अच्छा' हेल्थकेयर सिस्टम है जिसे हर देश को कॉपी करना चाहिए।",mr:"एक सार्वत्रिकरित्या मान्य 'सर्वोत्तम' आरोग्यसेवा यंत्रणा आहे जी प्रत्येक देशाने कॉपी करावी."}, answer:false, explain:{en:"Myth! Different systems have genuine trade-offs, and what works well often depends on a country's specific context and values.",hi:"मिथक! अलग-अलग सिस्टम में असली ट्रेड-ऑफ हैं, और जो अच्छी तरह काम करता है वह अक्सर एक देश के खास संदर्भ और मूल्यों पर निर्भर करता है।",mr:"मिथक! वेगवेगळ्या यंत्रणांमध्ये खऱ्या तडजोडी आहेत, आणि जे चांगलं काम करतं ते अनेकदा देशाच्या विशिष्ट संदर्भ आणि मूल्यांवर अवलंबून असतं."} },
              { text:{en:"India uses a mix of government and private healthcare working alongside each other.",hi:"भारत एक साथ काम करने वाले सरकारी और निजी हेल्थकेयर के मिश्रण का इस्तेमाल करता है।",mr:"भारत एकत्र काम करणाऱ्या सरकारी आणि खासगी आरोग्यसेवेचं मिश्रण वापरतो."}, answer:true, explain:{en:"True! India's healthcare system genuinely combines public and private elements.",hi:"सच! भारत का हेल्थकेयर सिस्टम वाकई पब्लिक और प्राइवेट तत्वों को मिलाता है।",mr:"खरं! भारताची आरोग्यसेवा यंत्रणा खरंच सार्वजनिक आणि खासगी घटक एकत्र करते."} },
              { text:{en:"Healthcare systems around the world stay exactly the same forever, without ever reforming.",hi:"दुनिया भर के हेल्थकेयर सिस्टम बिना कभी सुधार के हमेशा के लिए बिल्कुल एक जैसे रहते हैं।",mr:"जगभरातील आरोग्यसेवा यंत्रणा कधीही सुधारणा न करता कायमच अगदी सारख्याच राहतात."}, answer:false, explain:{en:"Myth! Healthcare systems constantly evolve and reform in response to new challenges and changing values.",hi:"मिथक! हेल्थकेयर सिस्टम नई चुनौतियों और बदलते मूल्यों के जवाब में लगातार विकसित और सुधरते हैं।",mr:"मिथक! आरोग्यसेवा यंत्रणा नवीन आव्हानं आणि बदलत्या मूल्यांना प्रतिसाद म्हणून सतत विकसित आणि सुधारत असतात."} }
            ]}}
          ]},
          { label: "Beyond One Exam",
            bonusAssignment: {
              title: { en: "My Path Forward Letter", hi: "मेरा आगे का रास्ता पत्र", mr: "माझा पुढचा मार्ग पत्र" },
              prompt: { en: "Write a letter to your future self about the different paths that could lead you toward a career you love, beyond any single exam. Take a photo!",
                        hi: "अपने भविष्य के खुद को एक पत्र लिखो कि कौन से अलग-अलग रास्ते तुम्हें एक ऐसे करियर की ओर ले जा सकते हैं जो तुम्हें पसंद है, किसी एक अकेली परीक्षा से आगे। फोटो लो!",
                        mr: "तुम्हाला आवडणाऱ्या करिअरकडे नेणारे वेगवेगळे मार्ग, कोणत्याही एका परीक्षेच्या पलीकडे, याबद्दल तुमच्या भविष्यातील स्वतःला एक पत्र लिहा. फोटो घ्या!" }
            },
            tasks: [
            { engine: "tap-discover", icon: "🌱", title: "Explore the many paths in medicine", mentorVisual: "🌱",
              mentorIntro: {
                en: "There are so many ways to build a meaningful career connected to health and medicine — let's explore some paths beyond just one exam or one route.",
                hi: "स्वास्थ्य और चिकित्सा से जुड़ा एक सार्थक करियर बनाने के इतने सारे तरीके हैं — चलो सिर्फ़ एक परीक्षा या एक रास्ते से आगे कुछ रास्तों को एक्सप्लोर करते हैं।",
                mr: "आरोग्य आणि वैद्यकशास्त्राशी जोडलेलं अर्थपूर्ण करिअर बनवण्याचे इतके सारे मार्ग आहेत — चला फक्त एका परीक्षेच्या किंवा एका मार्गाच्या पलीकडे काही मार्ग एक्सप्लोर करूया."
              },
              data: { visual: "🌱", hotspots: [
              { label:{en:"Many roads into healthcare",hi:"स्वास्थ्य सेवा में कई रास्ते",mr:"आरोग्यसेवेत अनेक मार्ग"}, fact:{en:"Beyond becoming a doctor, there are meaningful paths in nursing, research, public health, allied health, and more!"} },
              { label:{en:"Timing looks different for everyone",hi:"हर किसी के लिए समय अलग दिखता है",mr:"प्रत्येकासाठी वेळ वेगळी दिसते"}, fact:{en:"Some people find their path quickly, others take longer or change direction — both are completely valid journeys!"} },
              { label:{en:"Passion matters as much as the exam",hi:"जुनून परीक्षा जितना ही मायने रखता है",mr:"आवड परीक्षेइतकीच महत्त्वाची आहे"}, fact:{en:"The genuine curiosity and care you've brought to this whole journey matters just as much as any single test score!"} }
            ]}},
            { engine: "build-match", icon: "🌱", title: "Match career path to its focus", mentorVisual: "🩺",
              mentorIntro: {
                en: "Let's explore a few different health-related career paths and what each genuinely focuses on.",
                hi: "चलो कुछ अलग-अलग स्वास्थ्य से जुड़े करियर रास्तों और हर एक वाकई किस पर केंद्रित है, इसे एक्सप्लोर करते हैं।",
                mr: "चला काही वेगवेगळे आरोग्य-संबंधित करिअर मार्ग आणि प्रत्येक खरंच कशावर केंद्रित आहे ते एक्सप्लोर करूया."
              },
              data: { noStakes: true, zones: [
              { id: "clinical", label: { en:"Directly treating patients", hi:"सीधे मरीज़ों का इलाज करना", mr:"थेट रुग्णांवर उपचार करणं" } },
              { id: "research", label: { en:"Discovering new treatments and knowledge", hi:"नए इलाज और ज्ञान की खोज करना", mr:"नवीन उपचार आणि ज्ञान शोधणं" } },
              { id: "public_health", label: { en:"Improving health for whole communities", hi:"पूरे समुदायों के लिए स्वास्थ्य में सुधार करना", mr:"संपूर्ण समुदायांसाठी आरोग्य सुधारणं" } }
            ], chips: ["clinical","research","public_health"] }},
            { type: "Quiz", icon: "📝", title: "Paths in medicine quiz",
              desc: { en:"A gentle quiz exploring the many different career paths connected to health and medicine.", hi:"स्वास्थ्य और चिकित्सा से जुड़े कई अलग-अलग करियर रास्तों को एक्सप्लोर करने वाला एक सौम्य क्विज़।", mr:"आरोग्य आणि वैद्यकशास्त्राशी जोडलेल्या अनेक वेगवेगळ्या करिअर मार्गांना एक्सप्लोर करणारा एक सौम्य क्विझ." } },
            { type: "Reflect", icon: "💭", title: "What you've genuinely built",
              desc: { en:"Regardless of any single exam or outcome, what's something you've genuinely built in yourself over this whole journey — a skill, a way of thinking, a piece of curiosity?", hi:"किसी भी एक परीक्षा या नतीजे की परवाह किए बिना, इस पूरी यात्रा में तुमने अपने आप में वाकई क्या बनाया है — एक कौशल, सोचने का एक तरीका, जिज्ञासा का एक टुकड़ा?", mr:"कोणत्याही एका परीक्षेची किंवा निकालाची पर्वा न करता, या संपूर्ण प्रवासात तुम्ही स्वतःमध्ये खरंच काय तयार केलं आहे — एक कौशल्य, विचार करण्याचा एक मार्ग, कुतूहलाचा एक तुकडा?" } },
            { engine: "flip-cards", icon: "🃏", title: "Many Paths Deep Facts", mentorVisual: "🃏",
              mentorIntro: {
                en: "Let's explore a few encouraging facts about the many paths into meaningful health-related careers.",
                hi: "चलो अर्थपूर्ण स्वास्थ्य से जुड़े करियर में जाने के कई रास्तों के बारे में कुछ उत्साहजनक तथ्य एक्सप्लोर करते हैं।",
                mr: "चला अर्थपूर्ण आरोग्य-संबंधित करिअरमध्ये जाण्याच्या अनेक मार्गांबद्दल काही उत्साहवर्धक तथ्यं एक्सप्लोर करूया."
              },
              data: { cards: [
              { front:{en:"Many people change direction?",hi:"कई लोग दिशा बदलते हैं?",mr:"अनेक लोक दिशा बदलतात?"}, back:{en:"Many successful people in healthcare careers took winding paths — changing direction is genuinely common, not a failure! 🛤️",hi:"हेल्थकेयर करियर में कई सफल लोगों ने घुमावदार रास्ते अपनाए — दिशा बदलना वाकई आम है, कोई असफलता नहीं! 🛤️",mr:"आरोग्यसेवा करिअरमधील अनेक यशस्वी लोकांनी वळणदार मार्ग घेतले — दिशा बदलणं खरंच सामान्य आहे, अपयश नाही! 🛤️"} },
              { front:{en:"Skills transfer across paths?",hi:"कौशल रास्तों के पार स्थानांतरित होते हैं?",mr:"कौशल्यं मार्गांमध्ये स्थानांतरित होतात?"}, back:{en:"The curiosity, care, and problem-solving you've built genuinely transfer to many different careers, not just one specific path! 🔀",hi:"तुमने जो जिज्ञासा, देखभाल, और समस्या-समाधान बनाया है वह वाकई कई अलग-अलग करियर में स्थानांतरित होता है, सिर्फ़ एक खास रास्ते में नहीं! 🔀",mr:"तुम्ही तयार केलेली कुतूहल, काळजी, आणि समस्या-सोडवणूक खरंच अनेक वेगवेगळ्या करिअरमध्ये स्थानांतरित होते, फक्त एका विशिष्ट मार्गात नाही! 🔀"} },
              { front:{en:"Whole-person growth matters?",hi:"पूरे व्यक्ति की वृद्धि मायने रखती है?",mr:"संपूर्ण व्यक्तीची वाढ महत्त्वाची आहे?"}, back:{en:"This journey has been about growing as a thinker and a caring person, which matters in every path you might choose! 🌟",hi:"यह यात्रा एक सोचने वाले और देखभाल करने वाले व्यक्ति के रूप में बढ़ने के बारे में रही है, जो तुम जो भी रास्ता चुनो उसमें मायने रखता है! 🌟",mr:"हा प्रवास एक विचारवंत आणि काळजी घेणारी व्यक्ती म्हणून वाढण्याबद्दल होता, जो तुम्ही निवडलेल्या कोणत्याही मार्गात महत्त्वाचा आहे! 🌟"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Many Paths or Myth?", mentorVisual: "🤔",
              mentorIntro: {
                en: "Let's gently check a few common beliefs about paths into healthcare careers. Decide if each statement is true or a myth.",
                hi: "चलो हेल्थकेयर करियर में जाने के रास्तों के बारे में कुछ आम मान्यताओं की धीरे से जाँच करते हैं। तय करो हर बात सच है या मिथक।",
                mr: "चला आरोग्यसेवा करिअरमध्ये जाण्याच्या मार्गांबद्दलच्या काही सामान्य समजुतींची हळुवारपणे तपासणी करूया. प्रत्येक विधान खरं आहे की मिथक ठरवा."
              },
              data: { statements: [
              { text:{en:"There's only one single correct path or timeline for building a meaningful career in health or medicine.",hi:"स्वास्थ्य या चिकित्सा में एक सार्थक करियर बनाने के लिए केवल एक अकेला सही रास्ता या समय है।",mr:"आरोग्य किंवा वैद्यकशास्त्रात अर्थपूर्ण करिअर बनवण्यासाठी फक्त एकच योग्य मार्ग किंवा वेळापत्रक आहे."}, answer:false, explain:{en:"Myth! There are genuinely many valid paths and timelines — different routes and different paces are both completely normal.",hi:"मिथक! वाकई कई वैध रास्ते और समय हैं — अलग-अलग मार्ग और अलग-अलग गति दोनों बिल्कुल सामान्य हैं।",mr:"मिथक! खरंच अनेक वैध मार्ग आणि वेळापत्रकं आहेत — वेगवेगळे मार्ग आणि वेगवेगळा वेग दोन्ही पूर्णपणे सामान्य आहेत."} },
              { text:{en:"Skills like curiosity and careful thinking genuinely transfer across many different career paths.",hi:"जिज्ञासा और सावधान सोच जैसे कौशल वाकई कई अलग-अलग करियर रास्तों में स्थानांतरित होते हैं।",mr:"कुतूहल आणि काळजीपूर्वक विचार यासारखी कौशल्यं खरंच अनेक वेगवेगळ्या करिअर मार्गांमध्ये स्थानांतरित होतात."}, answer:true, explain:{en:"True! The genuine skills and mindset you've built have real value across many possible paths, not just one.",hi:"सच! तुमने जो असली कौशल और मानसिकता बनाई है उसका कई संभावित रास्तों में असली मूल्य है, सिर्फ़ एक में नहीं।",mr:"खरं! तुम्ही तयार केलेली खरी कौशल्यं आणि मानसिकता अनेक शक्य मार्गांमध्ये खरं मूल्य ठेवतात, फक्त एकातच नाही."} },
              { text:{en:"Changing direction during a career journey always means someone has failed.",hi:"करियर यात्रा के दौरान दिशा बदलने का हमेशा मतलब है कि कोई असफल हो गया।",mr:"करिअर प्रवासादरम्यान दिशा बदलणं म्हणजे नेहमी कोणीतरी अयशस्वी झालं आहे असा अर्थ असतो."}, answer:false, explain:{en:"Myth! Changing direction is a genuinely common, normal part of many meaningful career journeys, not a sign of failure.",hi:"मिथक! दिशा बदलना वाकई कई सार्थक करियर यात्राओं का एक आम, सामान्य हिस्सा है, असफलता का संकेत नहीं।",mr:"मिथक! दिशा बदलणं हा खरंच अनेक अर्थपूर्ण करिअर प्रवासांचा एक सामान्य, नैसर्गिक भाग आहे, अपयशाचं लक्षण नाही."} }
            ]}}
          ]},
          { label: "Capstone: The Complete Case Study",
            bonusAssignment: {
              title: { en: "My 7-Year Journey Portfolio", hi: "मेरा 7-साल का यात्रा पोर्टफोलियो", mr: "माझा 7-वर्षांचा प्रवास पोर्टफोलिओ" },
              prompt: { en: "Create a final page reflecting on your entire 7-year journey through Doctor & Healthcare, from Std 6 to now. What are you most proud of? Take a photo!",
                        hi: "Std 6 से अब तक, डॉक्टर एंड हेल्थकेयर के ज़रिए अपनी पूरी 7-साल की यात्रा पर विचार करते हुए एक आखिरी पेज बनाओ। तुम्हें किस बात पर सबसे ज़्यादा गर्व है? फोटो लो!",
                        mr: "Std 6 पासून आतापर्यंत, डॉक्टर आणि हेल्थकेअरमधून तुमच्या संपूर्ण 7-वर्षांच्या प्रवासावर विचार करणारं एक अंतिम पान तयार करा. तुम्हाला कशाचा सर्वात जास्त अभिमान आहे? फोटो घ्या!" }
            },
            tasks: [
            { engine: "branching", icon: "🎓", title: "The Complete Case", mentorVisual: "🎓",
              mentorIntro: {
                en: "This is it — the final case of your entire 7-year journey. Everything you've learned, from Std 6 all the way here, comes together in this one complete case.",
                hi: "यह है — तुम्हारी पूरी 7-साल की यात्रा का आखिरी केस। Std 6 से लेकर यहाँ तक जो कुछ भी तुमने सीखा, वह इस एक पूरे केस में एक साथ आता है।",
                mr: "हे आहे — तुमच्या संपूर्ण 7-वर्षांच्या प्रवासाची शेवटची केस. Std 6 पासून इथपर्यंत तुम्ही जे काही शिकलात, ते या एका संपूर्ण केसमध्ये एकत्र येतं."
              },
              data: { steps: [
              {
                situation: { en:"A patient arrives with fatigue, joint pain, and a mild fever that's been going on for two weeks. Their medical history includes diabetes. Where do you begin?",
                             hi:"एक मरीज़ थकान, जोड़ों के दर्द, और हल्के बुखार के साथ आता है जो दो हफ़्तों से चल रहा है। उनके मेडिकल इतिहास में डायबिटीज़ शामिल है। तुम कहाँ से शुरू करते हो?",
                             mr:"एक रुग्ण थकवा, सांधेदुखी, आणि दोन आठवड्यांपासून सुरू असलेल्या सौम्य तापासह येतो. त्यांच्या वैद्यकीय इतिहासात मधुमेह समाविष्ट आहे. तुम्ही कुठून सुरुवात करता?" },
                choices: [
                  { label:{en:"Check full vitals, take a detailed history, and consider how the diabetes might be connected to or complicating these symptoms", hi:"पूरे वाइटल्स जाँचो, विस्तृत इतिहास लो, और विचार करो कि डायबिटीज़ इन लक्षणों से कैसे जुड़ी या इन्हें जटिल बना रही हो सकती है", mr:"संपूर्ण व्हायटल्स तपासा, तपशीलवार इतिहास घ्या, आणि मधुमेह या लक्षणांशी कसा जोडलेला किंवा गुंतागुंतीचा असू शकतो याचा विचार करा"}, quality:"best",
                    outcome:{en:"Perfect starting point! This combines everything from your journey — vitals from Std 8, thorough history-taking, and considering how existing conditions interact, just like you practiced in Std 12.",hi:"बेहतरीन शुरुआती बिंदु! यह तुम्हारी यात्रा से सब कुछ मिलाता है — Std 8 से वाइटल्स, पूरी तरह इतिहास लेना, और यह विचार करना कि मौजूदा स्थितियाँ कैसे परस्पर क्रिया करती हैं, बिल्कुल जैसे तुमने Std 12 में अभ्यास किया।",mr:"उत्तम सुरुवातीचा बिंदू! हे तुमच्या प्रवासातील सर्वकाही एकत्र करतं — Std 8 मधील व्हायटल्स, संपूर्ण इतिहास घेणं, आणि विद्यमान स्थिती कशा परस्परसंवाद करतात याचा विचार करणं, अगदी जसं तुम्ही Std 12 मध्ये सराव केला."} },
                  { label:{en:"Treat only the most obvious symptom without considering the fuller picture", hi:"पूरी तस्वीर पर विचार किए बिना केवल सबसे स्पष्ट लक्षण का इलाज करो", mr:"संपूर्ण चित्राचा विचार न करता फक्त सर्वात स्पष्ट लक्षणावर उपचार करा"}, quality:"risky",
                    outcome:{en:"After this whole journey, you know better! Treating in isolation without the fuller picture misses everything you've learned about connected systems and complex cases.",hi:"इस पूरी यात्रा के बाद, तुम बेहतर जानते हो! पूरी तस्वीर के बिना अलग-अलग इलाज करना उस सब कुछ को छोड़ देता है जो तुमने जुड़े हुए सिस्टम और जटिल मामलों के बारे में सीखा है।",mr:"या संपूर्ण प्रवासानंतर, तुम्हाला चांगलं माहीत आहे! संपूर्ण चित्राशिवाय वेगळं उपचार करणं तुम्ही जोडलेल्या यंत्रणा आणि जटिल केसेसबद्दल जे शिकलात ते सर्व चुकवतं."} }
                ]
              },
              {
                situation: { en:"Tests reveal a joint condition connected to their diabetes, requiring both a rheumatologist and ongoing diabetes management. The patient is worried about managing multiple things at once. How do you guide them?",
                             hi:"टेस्ट उनकी डायबिटीज़ से जुड़ी एक जोड़ों की स्थिति दिखाते हैं, जिसके लिए एक रयूमेटोलॉजिस्ट और चल रहे डायबिटीज़ प्रबंधन दोनों की ज़रूरत है। मरीज़ एक साथ कई चीज़ों को संभालने को लेकर चिंतित है। तुम उन्हें कैसे मार्गदर्शन करते हो?",
                             mr:"चाचण्या त्यांच्या मधुमेहाशी जोडलेली सांध्याची स्थिती दाखवतात, ज्यासाठी संधिवाततज्ज्ञ आणि सुरू असलेलं मधुमेह व्यवस्थापन दोन्हीची गरज आहे. रुग्ण एकाच वेळी अनेक गोष्टी व्यवस्थापित करण्याबद्दल काळजीत आहे. तुम्ही त्यांना कसं मार्गदर्शन करता?" },
                choices: [
                  { label:{en:"Coordinate the referral clearly, communicate each step in plain language, and reassure them that a coordinated team will support the whole journey", hi:"रेफरल को स्पष्ट रूप से समन्वित करो, हर कदम को सादी भाषा में बताओ, और उन्हें आश्वस्त करो कि एक समन्वित टीम पूरी यात्रा में सहायता करेगी", mr:"रेफरल स्पष्टपणे समन्वित करा, प्रत्येक पायरी साध्या भाषेत सांगा, आणि त्यांना आश्वस्त करा की एक समन्वित टीम संपूर्ण प्रवासात सहाय्य करेल"}, quality:"best",
                    outcome:{en:"This is everything you've built across 7 years — coordinated referral, clear communication, genuine reassurance, and complex-case thinking, all working together. This is exactly what real Specialist-level care looks like.",hi:"यह वह सब कुछ है जो तुमने 7 सालों में बनाया — समन्वित रेफरल, स्पष्ट बातचीत, असली आश्वासन, और जटिल-मामले की सोच, सब एक साथ काम करते हुए। यह बिल्कुल वैसा दिखता है जैसी असली स्पेशलिस्ट-स्तर की देखभाल होती है।",mr:"हे 7 वर्षांत तुम्ही तयार केलेलं सर्वकाही आहे — समन्वित रेफरल, स्पष्ट संवाद, खरं आश्वासन, आणि जटिल-केस विचार, सर्व एकत्र काम करत. हे अगदी खऱ्या स्पेशालिस्ट-पातळीच्या काळजीसारखं दिसतं."} },
                  { label:{en:"Give them a referral slip without explanation and move to the next patient", hi:"बिना स्पष्टीकरण के उन्हें एक रेफरल स्लिप दो और अगले मरीज़ की ओर बढ़ो", mr:"स्पष्टीकरणाशिवाय त्यांना रेफरल स्लिप द्या आणि पुढच्या रुग्णाकडे जा"}, quality:"risky",
                    outcome:{en:"After everything you've learned, you know this misses so much — clear communication, genuine reassurance, and thoughtful coordination are exactly what turn a referral into real care.",hi:"तुमने जो कुछ भी सीखा है उसके बाद, तुम जानते हो कि यह बहुत कुछ छोड़ देता है — स्पष्ट बातचीत, असली आश्वासन, और विचारशील समन्वय बिल्कुल वही हैं जो एक रेफरल को असली देखभाल में बदल देते हैं।",mr:"तुम्ही जे काही शिकलात त्यानंतर, तुम्हाला माहीत आहे की हे खूप काही चुकतं — स्पष्ट संवाद, खरं आश्वासन, आणि विचारशील समन्वय अगदी हेच आहे जे रेफरलला खऱ्या काळजीत बदलतं."} }
                ]
              }
            ]}},
            { engine: "tap-discover", icon: "🏆", title: "Celebrate 7 years of growth", mentorVisual: "🏆",
              mentorIntro: {
                en: "From Std 6 to Std 12 — seven years of genuine growth. Let's look back at the full journey.",
                hi: "Std 6 से Std 12 तक — सात साल की असली वृद्धि। चलो पूरी यात्रा को याद करते हैं।",
                mr: "Std 6 पासून Std 12 पर्यंत — सात वर्षांची खरी वाढ. चला संपूर्ण प्रवासाकडे मागे वळून बघूया."
              },
              data: { visual: "🏆", hotspots: [
              { label:{en:"Where you started",hi:"तुमने कहाँ शुरुआत की",mr:"तुम्ही कुठे सुरुवात केली"}, fact:{en:"Back in Std 6, you started with pure curiosity — discovering your own beating heart for the very first time!"} },
              { label:{en:"How far you've come",hi:"तुम कितनी दूर आए",mr:"तुम्ही किती पुढे आलात"}, fact:{en:"By Std 12, you've handled complex diagnosis, ethics, policy, uncertainty, and multi-specialty care — genuine growth!"} },
              { label:{en:"What you carry forward",hi:"तुम आगे क्या ले जाते हो",mr:"तुम्ही पुढे काय घेऊन जाता"}, fact:{en:"Whatever path you choose next, the curiosity, care, and careful thinking you've built here goes with you!"} }
            ]}},
            { type: "Quiz", icon: "📝", title: "The complete journey recap",
              desc: { en:"A comprehensive final quiz celebrating key moments and lessons from your entire 7-year Doctor & Healthcare journey.", hi:"तुम्हारी पूरी 7-साल की डॉक्टर एंड हेल्थकेयर यात्रा के मुख्य पलों और सबकों का जश्न मनाने वाला एक व्यापक आखिरी क्विज़।", mr:"तुमच्या संपूर्ण 7-वर्षांच्या डॉक्टर आणि हेल्थकेअर प्रवासातील महत्त्वाचे क्षण आणि धडे साजरे करणारा एक सर्वसमावेशक अंतिम क्विझ." } },
            { type: "Reflect", icon: "💭", title: "A message to yourself, years from now",
              desc: { en:"Write a message to your future self about this whole 7-year journey — what it taught you, and what you hope to carry forward, whatever path you choose.", hi:"अपने भविष्य के खुद को इस पूरी 7-साल की यात्रा के बारे में एक संदेश लिखो — इसने तुम्हें क्या सिखाया, और तुम्हें उम्मीद है कि तुम आगे क्या ले जाओगे, चाहे तुम कोई भी रास्ता चुनो।", mr:"तुमच्या भविष्यातील स्वतःला या संपूर्ण 7-वर्षांच्या प्रवासाबद्दल एक संदेश लिहा — याने तुम्हाला काय शिकवलं, आणि तुम्ही पुढे काय घेऊन जाल अशी आशा आहे, तुम्ही कोणताही मार्ग निवडलात तरी." } },
            { engine: "flip-cards", icon: "🃏", title: "The Full 7-Year Journey", mentorVisual: "🎉",
              mentorIntro: {
                en: "What a journey this has been! Flip each card for a celebration of your full 7 years exploring Doctor & Healthcare.",
                hi: "क्या यात्रा रही यह! डॉक्टर एंड हेल्थकेयर एक्सप्लोर करने के अपने पूरे 7 सालों के जश्न के लिए हर कार्ड पलटो।",
                mr: "काय प्रवास होता हा! डॉक्टर आणि हेल्थकेअर एक्सप्लोर करण्याच्या तुमच्या संपूर्ण 7 वर्षांच्या उत्सवासाठी प्रत्येक कार्ड उलटा."
              },
              data: { cards: [
              { front:{en:"Std 6-7: Explorer",hi:"Std 6-7: एक्सप्लोरर",mr:"Std 6-7: एक्सप्लोरर"}, back:{en:"Pure wonder — discovering your heart, bones, senses, and brain for the first time, no stakes, just curiosity! ❤️",hi:"शुद्ध विस्मय — पहली बार अपने दिल, हड्डियों, इंद्रियों, और दिमाग़ की खोज, कोई दांव नहीं, बस जिज्ञासा! ❤️",mr:"शुद्ध आश्चर्य — पहिल्यांदाच तुमचं हृदय, हाडं, इंद्रिये, आणि मेंदू शोधणं, कोणतेही धोके नाहीत, फक्त कुतूहल! ❤️"} },
              { front:{en:"Std 8-9: Builder",hi:"Std 8-9: बिल्डर",mr:"Std 8-9: बिल्डर"}, back:{en:"Real skills began — labeling chambers correctly, reading real X-rays, sorting genuine urgency! 🎯",hi:"असली कौशल शुरू हुए — कक्षों को सही तरीके से लेबल करना, असली एक्स-रे पढ़ना, असली तात्कालिकता छाँटना! 🎯",mr:"खरी कौशल्यं सुरू झाली — कप्पे बरोबर लेबल करणं, खरे एक्स-रे वाचणं, खरी तातडी वर्गीकृत करणं! 🎯"} },
              { front:{en:"Std 10: Decision-Prep",hi:"Std 10: डिसीज़न-प्रेप",mr:"Std 10: डिसिजन-प्रेप"}, back:{en:"You connected to real specialties for the first time — cardiology, pediatrics, psychiatry, and beyond! 🩺",hi:"तुम पहली बार असली स्पेशलिटी से जुड़े — कार्डियोलॉजी, पीडियाट्रिक्स, साइकियाट्री, और आगे! 🩺",mr:"तुम्ही पहिल्यांदाच खऱ्या खासियतींशी जोडले गेलात — कार्डिओलॉजी, पीडियाट्रिक्स, सायकियाट्री, आणि पुढे! 🩺"} },
              { front:{en:"Std 11-12: Specialist",hi:"Std 11-12: स्पेशलिस्ट",mr:"Std 11-12: स्पेशालिस्ट"}, back:{en:"Real judgment calls, real ethics, real complexity — you handled it all with genuine, earned confidence! 🏆",hi:"असली फ़ैसले, असली नैतिकता, असली जटिलता — तुमने इस सब को असली, अर्जित आत्मविश्वास के साथ संभाला! 🏆",mr:"खरे निर्णय, खरी नैतिकता, खरी गुंतागुंत — तुम्ही हे सर्व खऱ्या, कमावलेल्या आत्मविश्वासाने हाताळलं! 🏆"} }
            ]}},
            { engine: "true-false", icon: "✅", title: "Your Whole Journey — Fact Check", mentorVisual: "🏆",
              mentorIntro: {
                en: "One final, comprehensive check-in — the very last one of this entire journey! Let's see what stuck across all 7 years.",
                hi: "एक आखिरी, व्यापक जांच — इस पूरी यात्रा की बिल्कुल आखिरी! देखते हैं सभी 7 सालों से क्या याद रहा।",
                mr: "एक शेवटची, सर्वसमावेशक तपासणी — या संपूर्ण प्रवासाची अगदी शेवटची! बघूया सर्व 7 वर्षांतून काय लक्षात राहिलं."
              },
              data: { statements: [
              { text:{en:"This whole journey was only ever about memorizing facts, with no real skill-building involved.",hi:"यह पूरी यात्रा हमेशा केवल तथ्यों को याद रखने के बारे में थी, कोई असली कौशल-निर्माण शामिल नहीं था।",mr:"हा संपूर्ण प्रवास फक्त तथ्यं लक्षात ठेवण्याबद्दल होता, कोणतंही खरं कौशल्य-निर्माण समाविष्ट नव्हतं."}, answer:false, explain:{en:"Myth! This journey built genuine skills — precision, judgment, communication, ethics, and complex thinking — far beyond just memorizing facts.",hi:"मिथक! इस यात्रा ने असली कौशल बनाए — सटीकता, निर्णय, बातचीत, नैतिकता, और जटिल सोच — सिर्फ़ तथ्यों को याद रखने से कहीं आगे।",mr:"मिथक! या प्रवासाने खरी कौशल्यं तयार केली — अचूकता, निर्णय, संवाद, नैतिकता, आणि जटिल विचार — फक्त तथ्यं लक्षात ठेवण्यापेक्षा खूप पुढे."} },
              { text:{en:"The curiosity and careful thinking you've built genuinely matter, whatever path you choose next.",hi:"तुमने जो जिज्ञासा और सावधान सोच बनाई है, वह वाकई मायने रखती है, चाहे तुम आगे कोई भी रास्ता चुनो।",mr:"तुम्ही तयार केलेली कुतूहल आणि काळजीपूर्वक विचार खरंच महत्त्वाची आहे, तुम्ही पुढे कोणताही मार्ग निवडलात तरी."}, answer:true, explain:{en:"True! These genuine skills and mindsets carry real value into whatever comes next, wherever your path leads.",hi:"सच! ये असली कौशल और मानसिकताएँ आगे जो कुछ भी आए उसमें असली मूल्य ले जाती हैं, चाहे तुम्हारा रास्ता कहीं भी ले जाए।",mr:"खरं! ही खरी कौशल्यं आणि मानसिकता पुढे जे काही येईल त्यात खरं मूल्य घेऊन जातात, तुमचा मार्ग कुठेही नेला तरी."} },
              { text:{en:"This is truly the end of learning — there's nothing more to discover about health and medicine after this.",hi:"यह वाकई सीखने का अंत है — इसके बाद स्वास्थ्य और चिकित्सा के बारे में खोजने के लिए कुछ भी नहीं बचा।",mr:"हा खरंच शिकण्याचा शेवट आहे — यानंतर आरोग्य आणि वैद्यकशास्त्राबद्दल शोधण्यासारखं काहीही उरलेलं नाही."}, answer:false, explain:{en:"Myth! This is a genuine foundation, not an ending — medicine keeps evolving, and there's always more to learn, wherever this journey leads you next.",hi:"मिथक! यह एक असली नींव है, कोई अंत नहीं — चिकित्सा विकसित होती रहती है, और हमेशा और सीखने को है, यह यात्रा तुम्हें आगे जहाँ भी ले जाए।",mr:"मिथक! ही एक खरी पायाभूत रचना आहे, शेवट नाही — वैद्यकशास्त्र विकसित होत राहतं, आणि नेहमी अधिक शिकण्यासारखं असतं, हा प्रवास तुम्हाला पुढे कुठेही घेऊन गेला तरी."} }
            ]}}
          ]}
        ]
      }
    }
  }
};
