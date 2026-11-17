import { categories, instructors } from './site'

const catalog = [
  {
    id: 'interface-systems',
    title: 'Interface Systems',
    category: 'Design',
    level: 'Intermediate',
    duration: '6 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 24,
    price: 240,
    rating: 4.9,
    reviews: 312,
    featured: true,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Build a visual language you can defend: type, color, components, and the critique habits that hold them together.',
    overview: [
      'Interface Systems is a studio for people who already design screens and want the work to hold together as a system. You will set type, spacing, and color with intention, then document the parts so someone else can extend them.',
      'Each week mixes a short seminar with a critique of work in progress. You will practice talking about hierarchy, state, and tradeoffs without hiding behind a moodboard.',
    ],
    outcomes: [
      'Pair type and set a spacing scale you can reuse',
      'Define color, components, and empty, error, and loading states',
      'Write a short rationale another designer can follow',
      'Present a small system in a live critique',
    ],
    capstone: 'A documented interface system for a product you already care about, shown in desktop and mobile states.',
    syllabus: [
      {
        title: 'Looking before arranging',
        topics: ['Hierarchy and contrast', 'Type as structure', 'How a critique is run'],
      },
      {
        title: 'A language of parts',
        topics: ['Color with a job to do', 'Spacing and layout', 'Naming components'],
      },
      {
        title: 'Flows and states',
        topics: ['Empty, loading, and error', 'Forms people can finish', 'Mobile without shrinking the desktop'],
      },
      {
        title: 'Handoff',
        topics: ['Documentation that gets read', 'Writing the rationale', 'Final critique'],
      },
    ],
    instructorId: 'leila',
  },
  {
    id: 'react-product-teams',
    title: 'React for Product Teams',
    category: 'Software',
    level: 'Intermediate',
    duration: '8 weeks',
    weekly: '5 to 7 hours a week',
    lessons: 32,
    price: 280,
    rating: 4.8,
    reviews: 428,
    featured: true,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Design and ship interface logic with React, from component boundaries to routing, data, and accessible UI.',
    overview: [
      'This course is for people who can write JavaScript and want React to feel like a craft, not a pile of hooks. You will draw component boundaries, keep state near the work it describes, and build screens a keyboard user can finish.',
      'The cohort builds one product surface together in pieces, then each student takes a slice through to a reviewable demo.',
    ],
    outcomes: [
      'Split a screen into components with clear props',
      'Model state, events, and derived data without extra libraries first',
      'Add routing and forms that fail in useful ways',
      'Check keyboard access, names, and focus before you call it done',
    ],
    capstone: 'A small multi-view React app with routing, a validated form, and a short note on the component boundaries.',
    syllabus: [
      {
        title: 'Boundaries',
        topics: ['What belongs in a component', 'Props and composition', 'Reading someone else’s JSX'],
      },
      {
        title: 'State and events',
        topics: ['Local and lifted state', 'Events and updates', 'Derived values'],
      },
      {
        title: 'Pages and data',
        topics: ['Routing', 'Loading and error views', 'Lists with stable keys'],
      },
      {
        title: 'Shipping the UI',
        topics: ['Labels, focus, and contrast', 'Form validation', 'Demo and review'],
      },
    ],
    instructorId: 'jonah',
  },
  {
    id: 'data-stories',
    title: 'Data Stories',
    category: 'Data',
    level: 'Beginner',
    duration: '7 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 28,
    price: 260,
    rating: 4.8,
    reviews: 267,
    featured: true,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Turn messy tables into narratives people trust: charts, argument, and the ethics of what you leave out.',
    overview: [
      'Data Stories starts with the question, not the chart type. You will clean a table without losing the plot, choose visuals that match the claim, and write the sentence the graphic is there to support.',
      'No statistics degree is required. You should be comfortable with spreadsheets and curious about how numbers get used in public.',
    ],
    outcomes: [
      'Frame a question a dataset can actually answer',
      'Clean and document the steps you took',
      'Choose charts that match a comparison, trend, or part-to-whole',
      'Write a caption and a caveat a reader deserves',
    ],
    capstone: 'A three-chart story with a written argument, source notes, and one limitation you refuse to hide.',
    syllabus: [
      {
        title: 'The question first',
        topics: ['Claims versus topics', 'What the table can hold', 'Audience and stakes'],
      },
      {
        title: 'Cleaning in public',
        topics: ['Missing values', 'Units and dates', 'A changelog for the data'],
      },
      {
        title: 'Visual argument',
        topics: ['Comparison, trend, composition', 'Annotation', 'Title as the point'],
      },
      {
        title: 'What you leave out',
        topics: ['Uncertainty', 'Harm and omission', 'Final story critique'],
      },
    ],
    instructorId: 'mateo',
  },
  {
    id: 'operators-finance',
    title: "Operator's Finance",
    category: 'Business',
    level: 'Beginner',
    duration: '5 weeks',
    weekly: '3 to 5 hours a week',
    lessons: 20,
    price: 190,
    rating: 4.7,
    reviews: 198,
    featured: false,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Read a small business the way an operator does: margins, cash, pricing, and the decisions inside a spreadsheet.',
    overview: [
      'This is not a course in investment banking. It is a practical reading class for founders, producers, and managers who need to see how money moves through a small operation.',
      'You will build a simple model of a real or fictional studio and practice the sentences you would say in a Monday meeting.',
    ],
    outcomes: [
      'Read revenue, cost, and margin without a glossary nearby',
      'Trace cash separately from profit',
      'Test a price change on paper before you try it in public',
      'Brief a decision in one page',
    ],
    capstone: 'A one-page operating brief with a tiny model and a recommendation you can defend.',
    syllabus: [
      {
        title: 'The shape of a business',
        topics: ['Revenue and cost', 'Gross margin', 'What “small” still has to track'],
      },
      {
        title: 'Cash is a clock',
        topics: ['Profit versus cash', 'Timing of payments', 'A 12-week view'],
      },
      {
        title: 'Price and mix',
        topics: ['What a price is for', 'Discounts and scope', 'A simple sensitivity'],
      },
      {
        title: 'The Monday brief',
        topics: ['One decision', 'The number that matters', 'What you would not do'],
      },
    ],
    instructorId: 'amira',
  },
  {
    id: 'long-essay',
    title: 'The Long Essay',
    category: 'Writing',
    level: 'All levels',
    duration: '6 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 18,
    price: 160,
    rating: 4.9,
    reviews: 154,
    featured: false,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
    summary:
      'A studio for essays that think. Structure, voice, reporting, and revision with a working editor.',
    overview: [
      'The Long Essay is for people who want a piece of writing to do more than announce an opinion. You will report, structure, cut, and read your work aloud to a small room.',
      'Bring a subject you can stay with for six weeks. The point is not speed. The point is a draft that knows what it is trying to understand.',
    ],
    outcomes: [
      'Find a question an essay can carry',
      'Report beyond your first memory of the topic',
      'Revise structure, not only sentences',
      'Read work aloud and use the room’s notes',
    ],
    capstone: 'An essay of 1,800 to 2,500 words, revised twice, with a short note on what you cut.',
    syllabus: [
      {
        title: 'A question, not a topic',
        topics: ['Stakes and curiosity', 'The first page', 'Reading models'],
      },
      {
        title: 'Reporting',
        topics: ['Interviews and documents', 'Scene and summary', 'Notes you can trust'],
      },
      {
        title: 'Structure',
        topics: ['Turns in the argument', 'Endings that earn their place', 'Cutting a favorite paragraph'],
      },
      {
        title: 'Voice on the page',
        topics: ['Sentence rhythm', 'Reading aloud', 'Final edit'],
      },
    ],
    instructorId: 'helen',
  },
  {
    id: 'field-biology',
    title: 'Field Biology',
    category: 'Science',
    level: 'Beginner',
    duration: '8 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 24,
    price: 210,
    rating: 4.6,
    reviews: 121,
    featured: false,
    format: 'Live seminar, local fieldwork, and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Learn to observe living systems carefully: field notes, identification, and the questions a walk can hold.',
    overview: [
      'Field Biology trains attention. You will keep a notebook, learn to describe what you see before you name it, and practice the difference between a guess and a claim.',
      'Local walks are part of the course. Online students complete the same observations in a park, garden, or campus green near them and bring the notes to seminar.',
    ],
    outcomes: [
      'Keep field notes someone else can follow',
      'Describe form, habitat, and behavior before naming a species',
      'Use a simple guide without pretending certainty',
      'Pose a question a short study could answer',
    ],
    capstone: 'A field notebook excerpt and a one-page study proposal rooted in a place you visited.',
    syllabus: [
      {
        title: 'How to look',
        topics: ['Notes versus impressions', 'Sketching what you see', 'Place and weather'],
      },
      {
        title: 'Form and name',
        topics: ['Plants and common animals', 'Using a guide', 'Confidence and doubt'],
      },
      {
        title: 'Relationships',
        topics: ['Habitat', 'Season', 'Who depends on whom'],
      },
      {
        title: 'A small question',
        topics: ['What you can count', 'What you should not claim', 'Sharing the notebook'],
      },
    ],
    instructorId: 'nia',
  },
  {
    id: 'python-analysts',
    title: 'Python for Analysts',
    category: 'Software',
    level: 'Beginner',
    duration: '6 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 24,
    price: 220,
    rating: 4.7,
    reviews: 356,
    featured: false,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Write clear Python for real questions: cleaning tables, small scripts, and explanations your team can rerun.',
    overview: [
      'Python for Analysts assumes you have opened a spreadsheet more often than a code editor. You will learn enough Python to clean a file, answer a question, and leave a script a colleague can run.',
      'The emphasis is readability. Clever one-liners lose to code someone can check on a Thursday afternoon.',
    ],
    outcomes: [
      'Read and write small Python scripts with confidence',
      'Load, filter, and summarize a table',
      'Handle missing values without silent mistakes',
      'Leave a README another person can follow',
    ],
    capstone: 'A short script and a one-page finding, written so a teammate can rerun the analysis.',
    syllabus: [
      {
        title: 'The language, slowly',
        topics: ['Values, lists, and dictionaries', 'Functions', 'Reading errors'],
      },
      {
        title: 'Tables',
        topics: ['Loading a file', 'Filtering rows', 'Summaries'],
      },
      {
        title: 'Trustworthy steps',
        topics: ['Missing data', 'Types and dates', 'Checks you write yourself'],
      },
      {
        title: 'Handing it over',
        topics: ['Names and structure', 'A README', 'Review with a partner'],
      },
    ],
    instructorId: 'jonah',
  },
  {
    id: 'brand-narrative',
    title: 'Brand Narrative',
    category: 'Design',
    level: 'Beginner',
    duration: '4 weeks',
    weekly: '3 to 5 hours a week',
    lessons: 16,
    price: 175,
    rating: 4.6,
    reviews: 143,
    featured: false,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Shape a voice, a story, and a visual point of view that a young organization can actually use.',
    overview: [
      'Brand Narrative is a short studio for founders, editors, and designers who need a point of view before they need a fifty-page guideline. You will write the words and set a small visual system that matches them.',
      'You can bring a real organization or a fictional one. Either way, the work has to sound like a specific place, not a template.',
    ],
    outcomes: [
      'Name the audience and the promise in plain language',
      'Write a voice a colleague can imitate',
      'Set type, color, and a simple mark direction',
      'Apply the story to three real surfaces',
    ],
    capstone: 'A short brand narrative with sample lines and a one-page visual direction.',
    syllabus: [
      {
        title: 'Who it is for',
        topics: ['Audience and promise', 'What you will not say', 'Competitors in their own words'],
      },
      {
        title: 'Voice',
        topics: ['Diction and rhythm', 'Sample lines', 'A voice others can use'],
      },
      {
        title: 'A visual point of view',
        topics: ['Type and color', 'Image direction', 'Restraint'],
      },
      {
        title: 'In use',
        topics: ['A page, a post, a letter', 'Consistency', 'Final review'],
      },
    ],
    instructorId: 'leila',
  },
  {
    id: 'evidence-decisions',
    title: 'Evidence and Decisions',
    category: 'Data',
    level: 'Intermediate',
    duration: '6 weeks',
    weekly: '4 to 6 hours a week',
    lessons: 22,
    price: 250,
    rating: 4.8,
    reviews: 176,
    featured: false,
    format: 'Live seminar and studio hours',
    language: 'English',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
    summary:
      'Ask better questions of numbers. Experiments, uncertainty, and how to brief a decision without overclaiming.',
    overview: [
      'Evidence and Decisions is for people who already work with data and want to be more careful about what a result allows them to say. You will plan a comparison, talk about uncertainty in ordinary language, and brief a choice.',
      'Spreadsheets are enough. The hard part is the claim, not the formula.',
    ],
    outcomes: [
      'Separate a decision from a dashboard',
      'Design a comparison that could change your mind',
      'Explain uncertainty without hiding behind jargon',
      'Write a brief that states what you would do and why',
    ],
    capstone: 'A decision brief: the question, the comparison, the uncertainty, and a recommendation.',
    syllabus: [
      {
        title: 'Decisions, not dashboards',
        topics: ['The choice on the table', 'What would change your mind', 'Vanity metrics'],
      },
      {
        title: 'Comparisons',
        topics: ['Baselines', 'Groups and time', 'What you did not measure'],
      },
      {
        title: 'Uncertainty in plain speech',
        topics: ['Ranges', 'Sample size in words', 'When to wait'],
      },
      {
        title: 'The brief',
        topics: ['One recommendation', 'The objection you respect', 'Final review'],
      },
    ],
    instructorId: 'mateo',
  },
]

export const courses = catalog.map((course) => ({
  ...course,
  instructor: instructors[course.instructorId],
}))

export function getCourse(id) {
  return courses.find((course) => course.id === id)
}

export function getFeaturedCourses() {
  return courses.filter((course) => course.featured)
}

export function getCategories() {
  return categories
    .map((category) => {
      const list = courses.filter((course) => course.category === category.name)
      const reviews = list.reduce((sum, course) => sum + course.reviews, 0)
      return { ...category, count: list.length, reviews }
    })
    .sort((a, b) => b.reviews - a.reviews)
}
