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
          { label: "Meet Your Heart", tasks: [
            { engine: "tap-discover", icon: "🫀", title: "Explore your heart", mentorVisual: "❤️",
              mentorIntro: {
                en: "Put your hand on your chest for a second — feel that thump-thump? That's your heart, and it never takes a single break, not even while you sleep! It's split into two sides with very different jobs. Tap around and I'll show you what each part actually does.",
                hi: "अपना हाथ एक पल के लिए अपनी छाती पर रखो — वो धक-धक महसूस हो रही है? यही तुम्हारा दिल है, जो कभी नहीं रुकता, यहाँ तक कि सोते समय भी नहीं! इसके दो हिस्से हैं और दोनों के काम बिल्कुल अलग हैं। इधर-उधर छूकर देखो, मैं तुम्हें हर हिस्से का असली काम दिखाती हूँ।",
                mr: "थोडा वेळ आपला हात छातीवर ठेवा — ती धडधड जाणवते आहे का? हेच तुमचं हृदय आहे, जे कधीच थांबत नाही, अगदी झोपेतसुद्धा नाही! याचे दोन भाग आहेत आणि दोघांची कामं अगदी वेगळी आहेत. इकडे-तिकडे टॅप करा, मी तुम्हाला प्रत्येक भागाचं खरं काम दाखवते."
              },
              data: { visual: "🫀", hotspots: [
              { label: {en:"Left side",hi:"बायाँ हिस्सा",mr:"डावी बाजू"}, fact: {en:"This side pumps blood full of oxygen out to your whole body! 💨",hi:"यह हिस्सा ऑक्सीजन से भरा खून पूरे शरीर में भेजता है! 💨",mr:"ही बाजू ऑक्सिजनने भरलेलं रक्त संपूर्ण शरीरात पाठवते! 💨"} },
              { label: {en:"Right side",hi:"दायाँ हिस्सा",mr:"उजवी बाजू"}, fact: {en:"This side collects blood coming back from your body to refill it! 🔄",hi:"यह हिस्सा शरीर से लौटकर आ रहे खून को इकट्ठा करता है! 🔄",mr:"ही बाजू शरीरातून परत येणारं रक्त गोळा करते! 🔄"} },
              { label: {en:"Bottom",hi:"नीचे का हिस्सा",mr:"खालचा भाग"}, fact: {en:"Whoosh! This is the strongest pumping part of all! 💪",hi:"वाह! यह सबसे ताकतवर पम्पिंग हिस्सा है! 💪",mr:"वाह! हा सर्वात ताकदवान पंपिंग भाग आहे! 💪"} }
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
              { id: "beat", label: {en:"Beats all day",hi:"पूरे दिन धड़कता है",mr:"दिवसभर धडधडते"} }
            ], chips: ["pump","oxygen","beat"] }},
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
              desc: {en:"What's one thing about your heart that surprised you today?",hi:"आज दिल के बारे में ऐसी कौन सी बात थी जिसने तुम्हें हैरान किया?",mr:"आज हृदयाबद्दल अशी कोणती गोष्ट होती जी तुम्हाला आश्चर्यचकित करून गेली?"} }
          ]},
          { label: "Meet Your Bones", tasks: [
            { engine: "build-match", icon: "🦴", title: "Build a skeleton", data: { noStakes: true, zones: [
              { id: "skull", label: "💀 Skull" }, { id: "ribcage", label: "🦴 Ribcage" }, { id: "legs", label: "🦵 Leg bones" }
            ], chips: ["skull","ribcage","legs"], facts: {
              skull: "Your skull protects your brain — like a built-in helmet! 🪖",
              ribcage: "Your ribs form a cage to keep your heart and lungs safe! 🛡️",
              legs: "Your leg bones are some of the strongest in your whole body! 🏃"
            }}},
            { engine: "tap-discover", icon: "🦴", title: "Why bones matter", data: { visual: "🦴", hotspots: [
              { label: "Strength", fact: "Bones are light but incredibly strong — stronger than some steel by weight!" },
              { label: "Growth", fact: "You have more bones as a baby than as an adult — some fuse together as you grow!" },
              { label: "Movement", fact: "Bones work with muscles to let you run, jump, and dance!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Skeleton basics", desc: "Quiz on what your skeleton does for you." },
            { type: "Reflect", icon: "💭", title: "Favorite bone fact?", desc: "What's your favorite thing you learned about bones today?" }
          ]},
          { label: "Meet Your Lungs", tasks: [
            { engine: "tap-discover", icon: "🫁", title: "Explore your lungs", data: { visual: "🫁", hotspots: [
              { label: "Breathing in", fact: "When you breathe in, your lungs fill up with fresh air full of oxygen!" },
              { label: "Breathing out", fact: "When you breathe out, you release air your body doesn't need anymore!" },
              { label: "All day, every day", fact: "You breathe about 20,000 times a day without even thinking about it!" }
            ]}},
            { engine: "build-match", icon: "🫁", title: "Air in, air out", data: { noStakes: true, zones: [
              { id: "in", label: "Breathing IN" }, { id: "out", label: "Breathing OUT" }
            ], chips: ["in","out"], facts: { in: "Fresh oxygen enters your body!", out: "Used air leaves your body!" }}},
            { type: "Quiz", icon: "📝", title: "Lung basics", desc: "Quiz on why breathing matters." },
            { type: "Reflect", icon: "💭", title: "Notice your breathing", desc: "Take 3 deep breaths right now — how does it feel?" }
          ]},
          { label: "Germs vs. Defenders", tasks: [
            { engine: "build-match", icon: "🛡️", title: "Match germ to defender", data: { noStakes: true, zones: [
              { id: "wash", label: "🦠 Sneeze germs" }, { id: "cut", label: "🦠 Cut on skin" }, { id: "cold", label: "🦠 Cold virus" }
            ], chips: ["wash","cut","cold"], facts: {
              wash: "Washing hands is your best defender against sneeze germs! 🧼",
              cut: "Your skin and white blood cells team up to heal a cut! 🩹",
              cold: "Your immune system's white blood cells fight off cold viruses! 🛡️"
            }}},
            { engine: "tap-discover", icon: "🛡️", title: "Meet your defenders", data: { visual: "🛡️", hotspots: [
              { label: "White blood cells", fact: "These are your body's tiny superhero soldiers fighting germs!" },
              { label: "Skin", fact: "Your skin is the first wall keeping germs out!" },
              { label: "Fever", fact: "A fever is your body turning up the heat to fight germs faster!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Immune system basics", desc: "Quiz on how your body fights off illness." },
            { type: "Reflect", icon: "💭", title: "Your body, the hero", desc: "Does it feel cool knowing your body has its own defenders? Why?" }
          ]},
          { label: "Your Five Senses", tasks: [
            { engine: "tap-discover", icon: "👀", title: "Explore your senses", data: { visual: "✋", hotspots: [
              { label: "👀 Sight", fact: "Your eyes send pictures to your brain faster than any camera!" },
              { label: "👂 Hearing", fact: "Your ears can tell the difference between thousands of sounds!" },
              { label: "✋ Touch", fact: "Your skin can feel a feather landing on it — that's how sensitive it is!" }
            ]}},
            { engine: "build-match", icon: "👃", title: "Match sense to body part", data: { noStakes: true, zones: [
              { id: "see", label: "👁️ Eyes" }, { id: "smell", label: "👃 Nose" }, { id: "taste", label: "👅 Tongue" }
            ], chips: ["see","smell","taste"], facts: { see: "Sight!", smell: "Smell!", taste: "Taste!" }}},
            { type: "Quiz", icon: "📝", title: "Senses basics", desc: "Quiz on your five senses." },
            { type: "Reflect", icon: "💭", title: "Favorite sense?", desc: "If you had to pick one sense as your favorite, which would it be and why?" }
          ]},
          { label: "A Doctor's Toolkit", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Try it yourself?", desc: "Would you like to try using one of these tools someday? Which one?" }
          ]},
          { label: "Meet Your Brain", tasks: [
            { engine: "tap-discover", icon: "🧠", title: "Explore your brain", data: { visual: "🧠", hotspots: [
              { label: "Thinking", fact: "Your brain is where every thought, idea, and daydream happens!" },
              { label: "Memory", fact: "Your brain stores memories like a super-powered photo album!" },
              { label: "Control center", fact: "Your brain controls your whole body — even your heartbeat!" }
            ]}},
            { engine: "build-match", icon: "🧠", title: "Match brain job to action", data: { noStakes: true, zones: [
              { id: "think", label: "Solving a puzzle" }, { id: "remember", label: "Recalling a birthday" }, { id: "move", label: "Riding a bicycle" }
            ], chips: ["think","remember","move"], facts: { think: "Thinking!", remember: "Memory!", move: "Movement control!" }}},
            { type: "Quiz", icon: "📝", title: "Brain basics", desc: "Quiz on what your brain does." },
            { type: "Reflect", icon: "💭", title: "Your brain, amazing", desc: "What's something your brain does that you never noticed before?" }
          ]},
          { label: "How Medicine Helps", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Safety first", desc: "Why do you think it's important to only take medicine an adult gives you?" }
          ]},
          { label: "Emergency Helpers", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Helper heroes", desc: "What do you think is the hardest part of being an emergency helper?" }
          ]},
          { label: "Teeth & Smiles", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Your smile routine", desc: "How do you take care of your teeth every day?" }
          ]},
          { label: "Eyes & Seeing", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Eye care habits", desc: "What's one thing you could do to take better care of your eyes?" }
          ]},
          { label: "Your Body, One Year Later", tasks: [
            { type: "Reflect", icon: "💭", title: "Look back at the year", desc: "Look back at all 11 months — which body system was your favorite to explore?" },
            { type: "Quiz", icon: "📝", title: "Body systems recap", desc: "A fun recap quiz of everything you discovered this year." },
            { type: "Build", icon: "🎨", title: "Draw your body explorer badge", desc: "Design what your own \"Body Explorer\" badge would look like." },
            { type: "Reflect", icon: "💭", title: "A message to Std 7 you", desc: "Write a message to yourself for next year, about what you'd like to explore next." }
          ]}
        ]
      },
      "7": {
        band: "Explorer",
        bandTagline: "Systems start working together — still playful, slightly more connected thinking.",
        months: [
          { label: "Digestion Detective", tasks: [
            { engine: "tap-discover", icon: "🍽️", title: "Follow your food's journey", data: { visual: "🍽️", hotspots: [
              { label: "Stomach", fact: "Your stomach churns food and mixes it with acid to break it down!" },
              { label: "Small intestine", fact: "This is where most nutrients get absorbed into your blood!" },
              { label: "Large intestine", fact: "This absorbs water and prepares waste to leave your body!" }
            ]}},
            { engine: "build-match", icon: "🍽️", title: "Match food to its journey stop", data: { noStakes: true, zones: [
              { id: "mouth", label: "First stop: chewing" }, { id: "stomach", label: "Next: churning" }, { id: "intestine", label: "Last: absorbing" }
            ], chips: ["mouth","stomach","intestine"], facts: { mouth: "Your mouth starts digestion!", stomach: "Your stomach churns it up!", intestine: "Your intestines absorb the good stuff!" }}},
            { type: "Quiz", icon: "📝", title: "Digestion basics", desc: "Quiz on how your body breaks down food." },
            { type: "Reflect", icon: "💭", title: "Food journey", desc: "What surprised you about where your food actually goes?" }
          ]},
          { label: "Skin: Your Body's Shield", tasks: [
            { engine: "tap-discover", icon: "🧴", title: "Explore your skin", data: { visual: "🧴", hotspots: [
              { label: "Protection", fact: "Your skin is your body's biggest organ and its first line of defense!" },
              { label: "Temperature", fact: "Sweating through your skin helps cool your whole body down!" },
              { label: "Healing", fact: "Skin can heal itself after small cuts and scrapes!" }
            ]}},
            { engine: "build-match", icon: "🧴", title: "Match skin layer to job", data: { noStakes: true, zones: [
              { id: "outer", label: "Keeps germs out" }, { id: "middle", label: "Feels touch & pain" }, { id: "inner", label: "Stores fat for warmth" }
            ], chips: ["outer","middle","inner"], facts: { outer: "Outer layer!", middle: "Middle layer!", inner: "Inner layer!" }}},
            { type: "Quiz", icon: "📝", title: "Skin basics", desc: "Quiz on what your skin does for you." },
            { type: "Reflect", icon: "💭", title: "Skin care", desc: "What's one way you take care of your skin?" }
          ]},
          { label: "Muscles at Work", tasks: [
            { engine: "tap-discover", icon: "💪", title: "Explore your muscles", data: { visual: "💪", hotspots: [
              { label: "Moving", fact: "Muscles pull on your bones to help you move!" },
              { label: "Heart muscle", fact: "Your heart is actually a muscle that never gets tired!" },
              { label: "Getting stronger", fact: "Muscles grow stronger the more you use them!" }
            ]}},
            { engine: "build-match", icon: "💪", title: "Match action to muscle group", data: { noStakes: true, zones: [
              { id: "legs", label: "Running" }, { id: "arms", label: "Lifting" }, { id: "core", label: "Sitting up straight" }
            ], chips: ["legs","arms","core"], facts: { legs: "Leg muscles!", arms: "Arm muscles!", core: "Core muscles!" }}},
            { type: "Quiz", icon: "📝", title: "Muscle basics", desc: "Quiz on how muscles help you move." },
            { type: "Reflect", icon: "💭", title: "Your favorite movement", desc: "What's your favorite way to move your body?" }
          ]},
          { label: "Blood's Journey", tasks: [
            { engine: "tap-discover", icon: "🩸", title: "Trace blood's path", data: { visual: "🩸", hotspots: [
              { label: "Leaving the heart", fact: "Fresh, oxygen-rich blood leaves your heart to travel your whole body!" },
              { label: "Delivering oxygen", fact: "Blood drops off oxygen everywhere your body needs energy!" },
              { label: "Returning home", fact: "Used blood travels back to the heart and lungs to refill with oxygen!" }
            ]}},
            { engine: "build-match", icon: "🩸", title: "Match blood part to job", data: { noStakes: true, zones: [
              { id: "rbc", label: "Carries oxygen" }, { id: "wbc", label: "Fights germs" }, { id: "platelets", label: "Stops bleeding" }
            ], chips: ["rbc","wbc","platelets"], facts: { rbc: "Red blood cells!", wbc: "White blood cells!", platelets: "Platelets!" }}},
            { type: "Quiz", icon: "📝", title: "Blood basics", desc: "Quiz on what blood does for your body." },
            { type: "Reflect", icon: "💭", title: "Blood, amazing", desc: "What's the most surprising thing about blood you learned today?" }
          ]},
          { label: "Sleep & the Repairing Body", tasks: [
            { engine: "tap-discover", icon: "😴", title: "Explore sleep", data: { visual: "😴", hotspots: [
              { label: "Growing", fact: "Your body releases growth hormones mostly while you sleep!" },
              { label: "Memory", fact: "Sleep helps your brain file away everything you learned that day!" },
              { label: "Repair", fact: "Your body repairs muscles and cells while you rest!" }
            ]}},
            { engine: "build-match", icon: "😴", title: "Match habit to sleep benefit", data: { noStakes: true, zones: [
              { id: "routine", label: "Falls asleep faster" }, { id: "noscreen", label: "Sleeps more deeply" }, { id: "consistent", label: "Wakes up refreshed" }
            ], chips: ["routine","noscreen","consistent"], facts: { routine: "A bedtime routine!", noscreen: "No screens before bed!", consistent: "A consistent sleep time!" }}},
            { type: "Quiz", icon: "📝", title: "Sleep basics", desc: "Quiz on why sleep matters for your body." },
            { type: "Reflect", icon: "💭", title: "Your sleep routine", desc: "What does your bedtime routine look like?" }
          ]},
          { label: "Kidneys: The Body's Filter", tasks: [
            { engine: "tap-discover", icon: "🫘", title: "Explore your kidneys", data: { visual: "🫘", hotspots: [
              { label: "Filtering", fact: "Your kidneys filter your entire blood supply many times a day!" },
              { label: "Waste removal", fact: "Kidneys turn filtered waste into urine to leave your body!" },
              { label: "Balance", fact: "Kidneys help keep the right amount of water in your body!" }
            ]}},
            { engine: "build-match", icon: "🫘", title: "Match habit to kidney health", data: { noStakes: true, zones: [
              { id: "water", label: "Helps kidneys filter well" }, { id: "checkup", label: "Catches problems early" }
            ], chips: ["water","checkup"], facts: { water: "Drinking enough water!", checkup: "Regular checkups!" }}},
            { type: "Quiz", icon: "📝", title: "Kidney basics", desc: "Quiz on what your kidneys do." },
            { type: "Reflect", icon: "💭", title: "Staying hydrated", desc: "How much water do you think you drink in a day?" }
          ]},
          { label: "Meet the Hospital Team", tasks: [
            { engine: "tap-discover", icon: "🏥", title: "Meet the hospital team", data: { visual: "🏥", hotspots: [
              { label: "Nurse", fact: "Nurses spend the most time directly caring for patients!" },
              { label: "Surgeon", fact: "Surgeons perform operations to fix problems inside the body!" },
              { label: "Radiologist", fact: "Radiologists read X-rays and scans to find what's wrong!" }
            ]}},
            { engine: "build-match", icon: "🏥", title: "Match role to task", data: { noStakes: true, zones: [
              { id: "nurse", label: "Checks on patients often" }, { id: "surgeon", label: "Performs operations" }, { id: "radiologist", label: "Reads scans" }
            ], chips: ["nurse","surgeon","radiologist"], facts: { nurse: "Nurses!", surgeon: "Surgeons!", radiologist: "Radiologists!" }}},
            { type: "Quiz", icon: "📝", title: "Hospital roles", desc: "Quiz on who does what in a hospital." },
            { type: "Reflect", icon: "💭", title: "A role that interests you", desc: "Which hospital role sounds most interesting to you and why?" }
          ]},
          { label: "First Aid Basics", tasks: [
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
            { type: "Reflect", icon: "💭", title: "Being prepared", desc: "Why do you think it helps to know basic first aid?" }
          ]},
          { label: "Nutrition Detective", tasks: [
            { engine: "build-match", icon: "🥗", title: "Match food to food group", data: { noStakes: true, zones: [
              { id: "fruit", label: "Vitamins" }, { id: "protein", label: "Muscle building" }, { id: "grains", label: "Energy" }
            ], chips: ["fruit","protein","grains"], facts: { fruit: "Fruits & vegetables!", protein: "Proteins!", grains: "Grains!" }}},
            { engine: "tap-discover", icon: "🥗", title: "Explore nutrition", data: { visual: "🥗", hotspots: [
              { label: "Energy", fact: "Food gives your body the energy to think, move, and grow!" },
              { label: "Variety", fact: "Eating different colors of food gives you different nutrients!" },
              { label: "Water", fact: "Water is just as important as food for your body!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Nutrition basics", desc: "Quiz on balanced eating." },
            { type: "Reflect", icon: "💭", title: "Your favorite healthy food", desc: "What's a healthy food you actually enjoy eating?" }
          ]},
          { label: "Vaccines & Prevention", tasks: [
            { engine: "tap-discover", icon: "💉", title: "Explore vaccines", data: { visual: "💉", hotspots: [
              { label: "Practice run", fact: "Vaccines teach your immune system to recognize germs before you ever get sick!" },
              { label: "Community protection", fact: "When many people are vaccinated, it helps protect everyone!" },
              { label: "Prevention", fact: "Preventing illness is often easier than treating it!" }
            ]}},
            { engine: "build-match", icon: "💉", title: "Match prevention habit to benefit", data: { noStakes: true, zones: [
              { id: "vaccine", label: "Prepares your immune system" }, { id: "wash", label: "Removes germs" }, { id: "rest", label: "Keeps you strong" }
            ], chips: ["vaccine","wash","rest"], facts: { vaccine: "Vaccines!", wash: "Handwashing!", rest: "Rest!" }}},
            { type: "Quiz", icon: "📝", title: "Prevention basics", desc: "Quiz on how vaccines and prevention work." },
            { type: "Reflect", icon: "💭", title: "Prevention matters", desc: "Why do you think preventing illness is important?" }
          ]},
          { label: "Bones & Muscles Together", tasks: [
            { engine: "build-match", icon: "🏃", title: "Match movement to body parts working together", data: { noStakes: true, zones: [
              { id: "jump", label: "Jumping" }, { id: "grip", label: "Gripping something" }, { id: "bend", label: "Bending your arm" }
            ], chips: ["jump","grip","bend"], facts: { jump: "Leg bones and muscles together!", grip: "Hand bones and muscles together!", bend: "Arm bones and muscles together!" }}},
            { engine: "tap-discover", icon: "🏃", title: "How they work together", data: { visual: "🏃", hotspots: [
              { label: "Joints", fact: "Joints are where bones meet, letting your body bend and move!" },
              { label: "Tendons", fact: "Tendons connect your muscles to your bones!" },
              { label: "Teamwork", fact: "Bones give you structure, muscles give you movement!" }
            ]}},
            { type: "Quiz", icon: "📝", title: "Movement basics", desc: "Quiz on how bones and muscles work as a team." },
            { type: "Reflect", icon: "💭", title: "Your body in motion", desc: "What's something your body does today that needs both bones and muscles?" }
          ]},
          { label: "Design-a-Healthy-Day", tasks: [
            { type: "Build", icon: "🎨", title: "Design your healthy day", desc: "Plan out a full healthy day — meals, movement, sleep, and one fun activity." },
            { type: "Quiz", icon: "📝", title: "Healthy habits recap", desc: "A fun recap quiz of everything you explored this year." },
            { type: "Reflect", icon: "💭", title: "Systems working together", desc: "What's one way your body's systems work together that you didn't know before this year?" },
            { type: "Reflect", icon: "💭", title: "A message to Std 8 you", desc: "Write a message to yourself for next year." }
          ]}
        ]
      },
      // "8": { band: "Builder", months: [ ... ] },  -- TODO next
      // "9": { band: "Builder", months: [ ... ] },  -- TODO next
      // "10": { band: "Decision-Prep", months: [ ... ] },  -- TODO next
      // "11": { band: "Specialist", months: [ ... ] },  -- TODO next
      // "12": { band: "Specialist", months: [ ... ] }  -- TODO next
    }
  }
};
