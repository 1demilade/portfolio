// Every fact here comes from the project itself: the Exemplar and Aso & Thread sources, the old
// portfolio's case studies, the Fritzing diagrams and the B.Eng project report (June 2025).

import exHome800 from '../assets/img/exemplar-home-800.webp'
import exHome1440 from '../assets/img/exemplar-home-1440.webp'
import exGround800 from '../assets/img/exemplar-ground-800.webp'
import exGround1440 from '../assets/img/exemplar-ground-1440.webp'
import exProjects800 from '../assets/img/exemplar-projects-800.webp'
import exProjects1440 from '../assets/img/exemplar-projects-1440.webp'
import exProject800 from '../assets/img/exemplar-project-800.webp'
import exProject1440 from '../assets/img/exemplar-project-1440.webp'
import exContact800 from '../assets/img/exemplar-contact-800.webp'
import exContact1440 from '../assets/img/exemplar-contact-1440.webp'
import asoHome800 from '../assets/img/aso-home-800.webp'
import asoHome1440 from '../assets/img/aso-home-1440.webp'
import asoProduct800 from '../assets/img/aso-product-800.webp'
import asoProduct1440 from '../assets/img/aso-product-1440.webp'
import asoCollections800 from '../assets/img/aso-collections-800.webp'
import asoCollections1440 from '../assets/img/aso-collections-1440.webp'
import asoAbout800 from '../assets/img/aso-about-800.webp'
import asoAbout1440 from '../assets/img/aso-about-1440.webp'
import asoContact800 from '../assets/img/aso-contact-800.webp'
import asoContact1440 from '../assets/img/aso-contact-1440.webp'
import cocoa800 from '../assets/img/cocoa-home-800.webp'
import cocoa1440 from '../assets/img/cocoa-home-1440.webp'
import obstacle800 from '../assets/img/obstacle-wiring-800.webp'
import obstacle1360 from '../assets/img/obstacle-wiring-1360.webp'
import bluetooth800 from '../assets/img/bluetooth-wiring-800.webp'
import bluetooth1100 from '../assets/img/bluetooth-wiring-1100.webp'
import uno800 from '../assets/img/photo-uno-800.webp'
import uno1400 from '../assets/img/photo-uno-1400.webp'
import hcsr800 from '../assets/img/photo-hcsr04-800.webp'
import hcsr1400 from '../assets/img/photo-hcsr04-1400.webp'
import bt800 from '../assets/img/photo-bluetooth-800.webp'
import bt1400 from '../assets/img/photo-bluetooth-1400.webp'
import leaves800 from '../assets/img/photo-cocoa-leaves-800.webp'
import leaves1400 from '../assets/img/photo-cocoa-leaves-1400.webp'
import pod800 from '../assets/img/photo-cocoa-pod-800.webp'
import pod1400 from '../assets/img/photo-cocoa-pod-1400.webp'
import videoCocoa from '../assets/img/video-cocoa-1280.webp'
import videoObstacle from '../assets/img/video-obstacle-480.webp'

// Photographs of the parts and plants from Wikimedia Commons: they show the kind of thing
// each project works with, never David's own robot or farm, and carry their credit.
const photo = (small, large, width, height, alt, caption, credit, href) => ({
  ...img(small, large, width, height, alt),
  caption,
  credit,
  href,
})

const img = (small, large, width, height, alt) => ({
  src: large,
  srcSet: `${small} 800w, ${large} ${width}w`,
  width,
  height,
  alt,
})

export const PROJECTS = [
  {
    slug: 'exemplar-engineering',
    title: 'Exemplar Engineering',
    kind: 'Engineering firm website',
    status: 'Self-initiated concept project',
    year: '2026',
    field: 'red',
    lead: 'A website for a fictional Lagos structural engineering and construction firm, with filterable projects and a picker that explains the ground under each part of the city.',
    role: 'Design and front-end development',
    stack: ['React 19', 'Vite', 'React Router', 'JavaScript', 'Plain CSS', 'Lucide icons'],
    links: [
      { label: 'Live site', href: 'https://1demilade.github.io/exemplar/' },
      { label: 'Code on GitHub', href: 'https://github.com/1demilade/exemplar' },
    ],
    hero: img(exHome800, exHome1440, 1440, 900, 'The Exemplar Engineering home page: “Engineering you can stand on.” in tall white capitals over a photograph of a steel frame under construction, with an orange Explore projects button'),
    detail: {
      ...img(exGround800, exGround1440, 1440, 900, 'The “First, the ground” picker: four Lagos areas as tabs, notes on the ground and what to check first, and a coloured soil profile with the water table marked'),
      caption: 'First, the ground: choose an area of Lagos to see its soil and what an engineer checks first.',
    },
    gallery: [
      img(exProjects800, exProjects1440, 1440, 900, 'The Projects page, filtered by Residential, Commercial, Industrial and Structural, with large photo cards'),
      img(exProject800, exProject1440, 1440, 900, 'A project page for Lekki Courtyard Residences, with a full-bleed photograph and an orange notice that the project is conceptual'),
      img(exContact800, exContact1440, 1440, 900, 'The Contact form, showing an error summary and a message under each field that needs fixing'),
    ],
    overview: [
      'Exemplar Engineering is a website I designed and built for an imaginary firm that designs, builds and repairs concrete and steel structures in Lagos. The brief I set myself was to make it read like a credible engineering consultancy: image-led, typographically confident, and written to explain engineering reasoning rather than make claims.',
      'It has a Home page, About, Services, a filterable Projects page with eight conceptual projects and a detail page for each, Contact, and an Image credits page.',
    ],
    features: [
      ['Lagos ground picker', 'Choose an area of Lagos to see its typical ground, what that means for a building and what an engineer checks first, beside a soil profile drawn in HTML and CSS. It is a keyboard-operable tablist.'],
      ['Filterable projects', 'Filter by Residential, Commercial, Industrial or Structural. The filter lives in the URL, and cards animate into place with the View Transitions API where the browser supports it.'],
      ['Project pages', 'A data sheet, scope of work, gallery and engineering considerations for each project. The card’s photo morphs into the hero of the page you open.'],
      ['Services that lead somewhere', 'Five services, each with a plain explanation, typical scope and when you need it. Each call to action preselects the matching project type on the contact form.'],
      ['Honest contact form', 'Errors appear as you leave a field and in a focused summary on submit. A valid message says plainly that nothing was sent.'],
      ['Accessible and quick', 'Skip link, visible focus, a focus-trapped mobile menu, a pausable hero slideshow, reduced-motion support, responsive WebP images and about 128 KB of gzipped JavaScript.'],
    ],
    approach: [
      'The look comes from a building site: a concrete off-white ground, graphite ink, concrete-grey steps between them and one safety-orange accent kept for actions and active states. Headlines are set in Barlow Condensed and text in Barlow, corners are square, and filled bars stand in for hairline rules.',
      'Motion is restrained: short ease-out transitions, a small press response on buttons and hover effects only for a mouse or trackpad. Every page was checked at 1440, 768, 390 and 360 pixels wide for layout, contrast, keyboard use and reduced motion.',
    ],
    honesty: 'Exemplar Engineering is fictional. Its projects are conceptual demonstrations, not completed contracts, its contact details are placeholders and the form sends nothing. The photographs are licensed third-party images from Wikimedia Commons and other open collections, credited on the site, and none shows the firm’s own work.',
  },
  {
    slug: 'aso-and-thread',
    title: 'Aso & Thread',
    kind: 'Fashion brand website',
    status: 'Self-initiated concept project',
    year: '2026',
    field: 'etu',
    lead: 'A five-page website for a fictional Lagos fashion label, from a filterable collection to a WhatsApp order that writes itself.',
    role: 'Design and front-end development',
    stack: ['React 19', 'Vite', 'React Router', 'JavaScript', 'Plain CSS'],
    links: [
      { label: 'Live site', href: 'https://1demilade.github.io/aso-thread/' },
      { label: 'Code on GitHub', href: 'https://github.com/1demilade/aso-thread' },
    ],
    hero: img(asoHome800, asoHome1440, 1440, 900, 'The Aso & Thread home page: four tall strips of fashion photography beside the line “Ready-to-wear, contemporary and traditional Nigerian dress, cut in Lagos”, over the name in giant capitals'),
    detail: {
      ...img(asoProduct800, asoProduct1440, 1440, 900, 'An Aso & Thread product page for the Ọlá Agbada Set with colour swatches, size buttons, a quantity stepper and the WhatsApp message panel'),
      caption: 'Product page: colour, size and quantity build the order.',
    },
    gallery: [
      img(asoCollections800, asoCollections1440, 1440, 900, 'The Collections page with filters for collection, audience and sort order'),
      img(asoAbout800, asoAbout1440, 1440, 900, 'The About page, headed “Cut in Lagos”'),
      img(asoContact800, asoContact1440, 1440, 900, 'The Contact page, headed “Talk to the studio”'),
    ],
    overview: [
      'Aso & Thread is a website I designed and built for an imaginary Lagos label that cuts Nigerian cloth (aso-oke, adire, ankara and lace) into everyday and occasion wear. I set myself a real client’s brief: it had to feel like a confident, premium independent brand, work first on a phone, and let people order the way many Nigerian shoppers already do, by WhatsApp.',
      'It has five pages: Home, Collections, a reusable Product page, About and Contact, with a sample catalogue of 19 pieces.',
    ],
    features: [
      ['Filterable collection', 'Filter by collection and by who it is for, and sort by price or newest. The filters live in the URL, so a filtered view can be shared or bookmarked.'],
      ['Product details', 'One reusable page per piece: photo gallery, colour and size selection, unavailable sizes shown as such, and a quantity stepper.'],
      ['WhatsApp ordering', 'The exact message is shown as you choose, then opens in WhatsApp ready to send. No payment gateway, no surprises.'],
      ['A bag for several pieces', 'Add pieces to a bag that is saved in the browser and sent as one combined message.'],
      ['Honest contact form', 'Validated in the browser. With no message service connected, it says so and hands the message to your email app or WhatsApp.'],
      ['Accessible by default', 'Keyboard-operable selectors and filters, visible focus, self-hosted fonts and reduced-motion support.'],
    ],
    approach: [
      '“Aso” is Yoruba for cloth, so I built the site the way aso-oke is made: in narrow strips, woven separately and sewn edge to edge. Photographs sit side by side in tall strips with thin seams between them.',
      'The colours come from three classic aso-oke cloths: sanyan beige for the ground, etu indigo-black for the type and alaari red for the one action on each screen. Headlines are set in a tall condensed face, corners are square, and there is no decoration that is not cloth.',
    ],
    honesty: 'Aso & Thread is fictional. Products, prices and studio details are sample content, the WhatsApp number is a placeholder, and the photography is from Unsplash, credited on the site. No customers or sales are claimed.',
  },
  {
    slug: 'cocoacare',
    title: 'CocoaCare',
    kind: 'AI cocoa disease detection',
    status: 'B.Eng final-year project, Covenant University',
    year: '2025',
    field: 'green',
    lead: 'Photograph a cocoa leaf and get a diagnosis (healthy, swollen shoot virus or anthracnose) with a confidence score and advice on what to do next.',
    role: 'Machine learning, back end and front end',
    stack: ['Python', 'TensorFlow / Keras', 'DenseNet121', 'Flask', 'HTML, CSS, JavaScript', 'Kaggle', 'ngrok', 'Vercel'],
    links: [
      { label: 'Live app', href: 'https://cocoa-cnn-classify-webapp.vercel.app/index.html' },
      { label: 'Demo video', href: 'https://www.youtube.com/watch?v=FKKUPCdVE6s' },
      { label: 'Code on GitHub', href: 'https://github.com/1demilade/cocoa-cnn-classify-webapp' },
      { label: 'Project report (PDF)', href: 'cocoa-disease-classification-report.pdf', local: true },
    ],
    hero: img(cocoa800, cocoa1440, 1440, 900, 'The CocoaCare home page: “Welcome to CocoaCare”, a Start Analysis button and three panels for Easy Upload, AI Powered and Expert Advice'),
    overview: [
      'Cocoa is a major cash crop for West African farmers, and two diseases threaten it badly: Cocoa Swollen Shoot Virus Disease (CSSVD) and anthracnose. Spotting them early usually depends on trained inspectors, who are scarce in rural farming communities.',
      'For my final-year project I trained a convolutional neural network to classify cocoa leaf photographs and put it behind a simple web app. A farmer uploads or snaps a picture of a leaf and gets the most likely class, a confidence score and recommendations.',
    ],
    method: [
      'I fine-tuned three pre-trained networks, DenseNet121, ResNet50 and EfficientNetB0, with transfer learning on a balanced subset of the public KaraAgro AI Cocoa Dataset: 2,584 images for each of the three classes after preprocessing.',
      'Images were resized, normalised and augmented. Training used the Adam optimiser at a learning rate of 0.001 with early stopping, and every model was checked with accuracy, precision, recall, F1-score and 5-fold cross-validation.',
    ],
    results: {
      summary: 'DenseNet121 performed best: 90% accuracy on 776 test images, and 87% under 5-fold cross-validation.',
      // Table 4.1 of the report: DenseNet121, transfer learning.
      perClass: [
        { name: 'Anthracnose', precision: 0.95, recall: 0.88, f1: 0.91 },
        { name: 'CSSVD', precision: 0.89, recall: 0.89, f1: 0.89 },
        { name: 'Healthy', precision: 0.88, recall: 0.94, f1: 0.91 },
      ],
      // Table 4.8: ten photographs per class sent through the deployed app.
      deployed: [
        { name: 'Anthracnose', correct: 9, of: 10 },
        { name: 'CSSVD', correct: 8, of: 10 },
        { name: 'Healthy', correct: 10, of: 10 },
      ],
    },
    build: [
      ['Model service', 'A Flask API in a Kaggle notebook loads the trained DenseNet121 model, resizes each upload to 224 × 224, and returns the class and confidence as JSON with recommendations for that disease.'],
      ['Tunnel', 'ngrok exposes the notebook’s API to the internet for testing and demonstration.'],
      ['Web app', 'HTML, CSS and vanilla JavaScript hosted on Vercel: upload or camera capture, results with advice, a light and dark theme, and a history of the last ten diagnoses.'],
      ['Testing', 'Tested in Chrome on phone and desktop. A prediction took about 4 to 6 seconds on a fast connection.'],
    ],
    video: { id: 'FKKUPCdVE6s', title: 'CocoaCare demo, final-year project', poster: videoCocoa },
    photos: [
      photo(leaves800, leaves1400, 1400, 1400, 'Large green cocoa leaves hanging from a branch, one with a browned tip', 'Cocoa leaves, the kind of photo the model classifies. Taken at the University of Ilorin, Nigeria.', 'Ridzaina, CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Cocoa_Tree_Leaves.jpg'),
      photo(pod800, pod1400, 1400, 1960, 'A ridged red cocoa pod hanging from a branch among yellow-green leaves', 'A cocoa pod on the tree. Both diseases the model detects threaten this harvest.', 'Bernard Gagnon, CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Theobroma_cacao_fruit.jpg'),
    ],
    honesty: 'The model service ran on Kaggle behind ngrok, so analysis in the live app is only available while that service is running. I am working on a mobile version to make it more reliable.',
  },
  {
    slug: 'obstacle-avoidance-robot',
    title: 'Obstacle Avoidance Robot',
    kind: 'Embedded systems and robotics',
    status: 'Personal project',
    field: 'yellow',
    lead: 'An Arduino robot that measures the distance ahead with an ultrasonic sensor and steers away before it hits anything.',
    role: 'Circuit design, wiring and firmware',
    stack: ['Arduino Uno', 'C / C++', 'Arduino IDE', 'HC-SR04', 'L298N', 'Fritzing'],
    links: [
      { label: 'Demo video', href: 'https://www.youtube.com/shorts/8Pg4W7Nr47Q' },
      { label: 'Code on GitHub', href: 'https://github.com/1demilade/Arduino-Projects' },
    ],
    hero: img(obstacle800, obstacle1360, 1360, 794, 'Fritzing wiring diagram: an Arduino Uno connected to an HC-SR04 ultrasonic sensor, an L298N motor driver, a servo, four yellow DC gear motors and two battery packs'),
    overview: [
      'This robot drives itself. It keeps measuring the distance to whatever is in front of it and decides, on its own, whether to keep going, reverse or turn.',
      'It can also be switched to manual control over Bluetooth from a phone app.',
    ],
    steps: [
      'The HC-SR04 ultrasonic sensor measures the distance to the nearest object ahead.',
      'The Arduino Uno reads that distance continuously and compares it with a safe limit.',
      'If the way is clear it drives forward. If something is too close it reverses or turns left or right.',
      'The L298N motor driver turns those decisions into power for the four DC motors.',
    ],
    parts: [
      ['Microcontroller', 'Arduino Uno'],
      ['Distance sensor', 'HC-SR04 ultrasonic'],
      ['Motor driver', 'L298N'],
      ['Motors', 'Four DC gear motors and a servo'],
      ['Wireless', 'Bluetooth, for manual mode'],
      ['Power', 'Two battery packs'],
    ],
    video: { id: '8Pg4W7Nr47Q', title: 'Obstacle avoidance demo', poster: videoObstacle, vertical: true },
    photos: [
      photo(uno800, uno1400, 1400, 933, 'An Arduino Uno R3 board photographed from above on a pale background', 'An Arduino Uno R3, the board that runs the robot.', 'Suyash Dwivedi, CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Arduino_Uno_R3_development_board_(3).jpg'),
      photo(hcsr800, hcsr1400, 1400, 933, 'The back of an HC-SR04 ultrasonic sensor board with its four pins', 'An HC-SR04 ultrasonic sensor, the robot’s eyes.', 'Suyash Dwivedi, CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:HC-SR04_ultrasonic_distance_sensor_module_pcb.jpg'),
    ],
    honesty: 'Much of the work was getting sensor readings and motor actions to work together quickly, so the robot reacts without lag.',
  },
  {
    slug: 'bluetooth-controlled-robot',
    title: 'Bluetooth Controlled Robot',
    kind: 'Wireless robotics',
    status: 'Personal project',
    field: 'blue',
    lead: 'A four-wheel robot driven from a smartphone over Bluetooth: forward, back, left and right, with no cables.',
    role: 'Circuit design, wiring and firmware',
    stack: ['Arduino Uno', 'C / C++', 'Arduino IDE', 'HC-05', 'L298N', 'Fritzing'],
    links: [{ label: 'Code on GitHub', href: 'https://github.com/1demilade/Arduino-Projects' }],
    hero: img(bluetooth800, bluetooth1100, 1098, 756, 'Fritzing wiring diagram: an Arduino Uno connected to an HC-05 Bluetooth module, an L298N motor driver, four DC gear motors, three LEDs, a buzzer and a battery pack'),
    overview: [
      'A phone app sends simple commands over Bluetooth. The robot receives them and drives its motors straight away, which shows real-time communication between a mobile device and an embedded system.',
      'It is a foundation for bigger ideas such as smart vehicles, surveillance robots and Internet of Things control.',
    ],
    steps: [
      'A smartphone app sends a command, such as forward or turn left, over Bluetooth.',
      'The HC-05 module receives it and passes it to the Arduino Uno over serial.',
      'The Uno decodes the command and sets the L298N motor driver.',
      'The L298N drives the four DC motors in the chosen direction.',
    ],
    parts: [
      ['Microcontroller', 'Arduino Uno'],
      ['Wireless', 'HC-05 Bluetooth module'],
      ['Motor driver', 'L298N'],
      ['Motors', 'Four DC gear motors'],
      ['Signals', 'Three LEDs and a buzzer'],
      ['Power', 'Battery pack'],
    ],
    photos: [
      photo(bt800, bt1400, 1400, 933, 'A green serial Bluetooth module board with four pins labelled 5V, GND, RX and TX', 'A serial Bluetooth module like the HC-05 the robot uses: four pins, power and two data lines.', 'Suyash Dwivedi, CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Bluetooth_trans-receiver_module_(1).jpg'),
      photo(uno800, uno1400, 1400, 933, 'An Arduino Uno R3 board photographed from above on a pale background', 'An Arduino Uno R3, the board that decodes each command.', 'Suyash Dwivedi, CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Arduino_Uno_R3_development_board_(3).jpg'),
    ],
    honesty: 'I focused on reliable Bluetooth communication and smooth motor response, keeping the delay between a tap and movement as short as possible.',
  },
]

export const getProject = (slug) => PROJECTS.find((p) => p.slug === slug)
