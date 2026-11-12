// Skills, each with where it was actually used. No proficiency levels.
// The value column only names real projects or coursework; leave it empty when unknown.

export const SKILL_GROUPS = [
  {
    name: 'Frontend',
    colour: 'blue',
    items: [
      ['HTML and CSS', 'Aso & Thread, CocoaCare'],
      ['JavaScript', 'Aso & Thread, CocoaCare'],
      ['React', 'Aso & Thread'],
      ['Vite and React Router', 'Aso & Thread'],
      ['Responsive, accessible layouts', 'Aso & Thread'],
    ],
  },
  {
    name: 'Backend',
    colour: 'green',
    items: [
      ['Python', 'CocoaCare'],
      ['Flask', 'CocoaCare'],
      ['FastAPI', 'Exito Engineering'],
    ],
  },
  {
    name: 'Databases',
    colour: 'yellow',
    items: [
      ['SQL and MySQL', 'University coursework'],
      ['SQLite', 'Exito Engineering'],
      ['SQL Server', ''],
    ],
  },
  {
    name: 'AI and machine learning',
    colour: 'green',
    items: [
      ['TensorFlow and Keras', 'CocoaCare'],
      ['CNNs and transfer learning', 'CocoaCare'],
      ['Computer vision', 'CocoaCare'],
    ],
  },
  {
    name: 'Engineering',
    colour: 'red',
    items: [
      ['Arduino and C / C++', 'Both robots'],
      ['ESP32', 'Arduino side projects'],
      ['Sensors, motor drivers, Bluetooth', 'Both robots'],
      ['Circuit design in Fritzing', 'Both robots'],
    ],
  },
]

export const SERVICES = [
  ['Business websites', 'A clear, fast site that says what you do, shows your work and makes it easy for customers to reach you.'],
  ['Website redesigns', 'Keep what works and fix what doesn’t: layout, speed, mobile and how the content is organised.'],
  ['Landing pages', 'One focused page for a product, an event or a campaign, built around a single clear action.'],
  ['Frontend development', 'Turning a design into responsive, accessible HTML, CSS, JavaScript or React.'],
  ['Simple web apps', 'Small tools with real logic, like a filterable catalogue or an order form that writes the message for you.'],
]
