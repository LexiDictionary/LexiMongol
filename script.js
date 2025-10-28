function isMongolian(text) {
  return /[\u0400-\u04FF]/.test(text);
}

// obviously when we publish it the lemmas will be on sql
const dictionary = {
  en: {
    "apple": {
      canonical: "apple",
      pronunciation: "/ˈæp.əl/",
      topic: "food",
      forms: ["apple", "apples"],
      senses: [
        {
          pos: "noun",
          definition: "a round fruit with red or green skin",
          translation: "алим",
          examples: [
            { en: "She ate an apple for lunch.", mn: "Тэр өдрийн хоолондоо алим идсэн." },
            { en: "Apples grow on trees.", mn: "Алим модонд ургадаг." }
          ],
          derivatives: [
            { word: "apple pie", translation: "алимны бялуу" },
            { word: "applesauce", translation: "алимны нухаш" }
          ],
          grammar: { plural: "apples" }
        }
      ]
    },
    "fire": {
      canonical: "fire",
      pronunciation: "/faɪər/",
      senses: [
        {
          pos: "noun",
          topic: "nature",
          definition: "burning material",
          translation: "гал",
          examples: [
            { en: "Be careful with the fire.", mn: "Галтай болгоомжтой бай." },
            { en: "The campfire kept us warm.", mn: "Кемпийн гал биднийг дулаацуулсан." }
          ],
          derivatives: [
            { word: "fiery", translation: "галын шинжтэй" },
            { word: "fireplace", translation: "галын зуух" }
          ],
          grammar: { plural: "fires" }
        },
        {
          pos: "verb",
          topic: "employment",
          definition: "dismiss from job",
          translation: "халах",
          examples: [
            { en: "They fired him for being late.", mn: "Тэр хожимдсоны улмаас халагдсан." },
            { en: "She was fired last week.", mn: "Тэр өнгөрсөн долоо хоногт халагдсан." }
          ],
          derivatives: [
            { word: "firing", translation: "халах үйлдэл" },
            { word: "fireable", translation: "халагдаж болох" }
          ],
          grammar: {
            past: "fired",
            pastParticiple: "fired",
            presentParticiple: "firing",
            thirdPerson: "fires"
          }
        }
      ]
    },
    "drink": {
      canonical: "drink",
      pronunciation: "/drɪŋk/",
      topic: "food",
      forms: ["drink", "drinks", "drank", "drunk", "drinking"],
      senses: [
        {
          pos: "verb",
          definition: "consume liquid",
          translation: "уух",
          examples: [
            { en: "Drink more water.", mn: "Илүү их ус уу." },
            { en: "He drinks coffee every day.", mn: "Тэр өдөр бүр кофе уудаг." }
          ],
          derivatives: [
            { word: "drinker", translation: "уугч" },
            { word: "drinkable", translation: "ууж болох" }
          ],
          grammar: {
            past: "drank",
            pastParticiple: "drunk",
            presentParticiple: "drinking",
            thirdPerson: "drinks"
          }
        }
      ]
    },
    "eat": {
      canonical: "eat",
      pronunciation: "/iːt/",
      topic: "food",
      forms: ["eat", "eats", "ate", "eaten", "eating"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "идэх",
          examples: [
            { en: "I eat breakfast at 8 AM.", mn: "Би өглөө 8 цагт өглөөний хоол иддэг." },
            { en: "We eat dinner together.", mn: "Бид хамтдаа оройн хоол иддэг." }
          ],
          derivatives: [
            { word: "eater", translation: "идэгч" },
            { word: "edible", translation: "идэж болох" }
          ],
          grammar: {
            past: "ate",
            pastParticiple: "eaten",
            presentParticiple: "eating",
            thirdPerson: "eats"
          }
        }
      ]
    },
    "house": {
      canonical: "house",
      pronunciation: "/haʊs/",
      topic: "housing",
      forms: ["house", "houses"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "гэр",
          examples: [
            { en: "They built a new house.", mn: "Тэд шинэ гэр барьсан." },
            { en: "Home is where the house is.", mn: "Гэр бол гэрийн байрладаг газар юм." }
          ],
          derivatives: [
            { word: "household", translation: "гэр бүл" },
            { word: "housing", translation: "орон сууц" }
          ],
          grammar: { plural: "houses" }
        }
      ]
    },
    "learn": {
      canonical: "learn",
      pronunciation: "/lɜːrn/",
      topic: "education",
      forms: ["learn", "learns", "learned", "learning"],
      senses: [
        {
          pos: "verb",
          definition: "acquire knowledge",
          translation: "сурчих",
          examples: [
            { en: "She learns quickly.", mn: "Тэр хурдан сурчихаж байна." },
            { en: "I’m learning Mongolian.", mn: "Би Монгол хэл сурчихаж байна." }
          ],
          derivatives: [
            { word: "learner", translation: "сурчигч" },
            { word: "learning", translation: "сургалт" }
          ],
          grammar: {
            past: "learned",
            pastParticiple: "learned",
            presentParticiple: "learning",
            thirdPerson: "learns"
          }
        }
      ]
    },
    "run": {
      canonical: "run",
      pronunciation: "/rʌn/",
      topic: "action",
      forms: ["run", "runs", "ran", "running"],
      senses: [
        {
          pos: "verb",
          definition: "move quickly on foot",
          translation: "гуйх",
          examples: [
            { en: "She runs every morning.", mn: "Тэр өглөө бүр гүйдэг." },
            { en: "Don’t run near the pool.", mn: "Усан сангийн ойролцоо гүйж болохгүй." }
          ],
          derivatives: [
            { word: "runner", translation: "гуйгч" },
            { word: "running", translation: "гуйлт" }
          ],
          grammar: {
            past: "ran",
            pastParticiple: "run",
            presentParticiple: "running",
            thirdPerson: "runs"
          }
        }
      ]
    },
    "water": {
      canonical: "water",
      pronunciation: "/ˈwɔː.tər/",
      topic: "nature",
      forms: ["water"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid",
          translation: "ус",
          examples: [
            { en: "Drink more water every day.", mn: "Өдөр бүр илүү их ус уу." },
            { en: "The water in this lake is clean.", mn: "Эндэх нуурын ус цэвэр байна." }
          ],
          derivatives: [
            { word: "watery", translation: "услаг" },
            { word: "watering", translation: "услалт" }
          ],
          grammar: { plural: "water" }
        }
      ]
    },
    "school": {
      canonical: "school",
      pronunciation: "/skuːl/",
      topic: "education",
      forms: ["school", "schools"],
      senses: [
        {
          pos: "noun",
          definition: "place for education",
          translation: "сургууль",
          examples: [
            { en: "She goes to school every day.", mn: "Тэр өдөр бүр сургуульдаа явдаг." },
            { en: "The school is near the park.", mn: "Сургууль цэцэрлэгийн ойролцоо байна." }
          ],
          derivatives: [
            { word: "schoolmate", translation: "сургуулийн найз" },
            { word: "schooling", translation: "сургуулийн сургалт" }
          ],
          grammar: { plural: "schools" }
        }
      ]
    },
    "dog": {
      canonical: "dog",
      pronunciation: "/dɒɡ/",
      topic: "animal",
      forms: ["dog", "dogs"],
      senses: [
        {
          pos: "noun",
          definition: "domesticated canine",
          translation: "нохой",
          examples: [
            { en: "The dog barked at strangers.", mn: "Нохой танихгүй хүмүүст хуцсан." },
            { en: "Dogs are loyal pets.", mn: "Нохой бол үнэнч гэрийн тэжээвэр амьтад юм." }
          ],
          derivatives: [
            { word: "puppy", translation: "нохойн зулзага" },
            { word: "doghouse", translation: "нохойн байшин" }
          ],
          grammar: { plural: "dogs" }
        }
      ]
    },
    "write": {
      canonical: "write",
      pronunciation: "/raɪt/",
      topic: "education",
      forms: ["write", "writes", "wrote", "written", "writing"],
      senses: [
        {
          pos: "verb",
          definition: "form letters or symbols",
          translation: "бичих",
          examples: [
            { en: "She writes beautiful letters.", mn: "Тэр сайхан захидал бичдэг." },
            { en: "Write your name here.", mn: "Энд нэрээ бич." }
          ],
          derivatives: [
            { word: "writer", translation: "зохиолч" },
            { word: "writing", translation: "бичих үйлдэл" }
          ],
          grammar: {
            past: "wrote",
            pastParticiple: "written",
            presentParticiple: "writing",
            thirdPerson: "writes"
          }
        }
      ]
    },
    "read": {
      canonical: "read",
      pronunciation: "/riːd/",
      topic: "education",
      forms: ["read", "reads", "reading"],
      senses: [
        {
          pos: "verb",
          definition: "look at and comprehend text",
          translation: "унших",
          examples: [
            { en: "I read books every night.", mn: "Би шөнө бүр ном уншдаг." },
            { en: "Read this carefully.", mn: "Үүнийг анхааралтай унш." }
          ],
          derivatives: [
            { word: "reader", translation: "уншигч" },
            { word: "readable", translation: "уншигдаж болох" }
          ],
          grammar: {
            past: "read",
            pastParticiple: "read",
            presentParticiple: "reading",
            thirdPerson: "reads"
          }
        }
      ]
    },
    "tree": {
      canonical: "tree",
      pronunciation: "/triː/",
      topic: "nature",
      forms: ["tree", "trees"],
      senses: [
        {
          pos: "noun",
          definition: "tall plant with trunk",
          translation: "мод",
          examples: [
            { en: "The tree is very old.", mn: "Мод маш хөгшин байна." },
            { en: "Birds live in trees.", mn: "Шувууд модонд амьдардаг." }
          ],
          derivatives: [
            { word: "treetop", translation: "модны орой" },
            { word: "treehouse", translation: "модон дээрх байшин" }
          ],
          grammar: { plural: "trees" }
        }
      ]
    },
    "car": {
      canonical: "car",
      pronunciation: "/kɑːr/",
      topic: "transport",
      forms: ["car", "cars"],
      senses: [
        {
          pos: "noun",
          definition: "vehicle with four wheels",
          translation: "машин",
          examples: [
            { en: "He drives a fast car.", mn: "Тэр хурдан машин жолооддог." },
            { en: "The car is parked outside.", mn: "Машин гадаа зогсож байна." }
          ],
          derivatives: [
            { word: "carpool", translation: "машины хамтын ашиглалт" },
            { word: "carmaker", translation: "машин үйлдвэрлэгч" }
          ],
          grammar: { plural: "cars" }
        }
      ]
    }
  },
  mn: {
    "алим": {
      canonical: "алим",
      pronunciation: "/alim/",
      topic: "food",
      cefr: "A1",
      forms: ["алим", "алимны", "алимыг"],
      senses: [
        {
          pos: "noun",
          definition: "round fruit with red or green skin",
          translation: "apple",
          examples: [
            { en: "I ate an apple.", mn: "Би алим идсэн." },
            { en: "Apples are sweet.", mn: "Алим амттай байдаг." }
          ],
          derivatives: [
            { word: "алимны жүүс", translation: "apple juice" },
            { word: "алимны мод", translation: "apple tree" }
          ],
          grammar: {
            accusative: "алимыг",
            genitive: "алимны"
          }
        }
      ]
    },
    "ном": {
      canonical: "ном",
      pronunciation: "/nom/",
      topic: "education",
      cefr: "A1",
      forms: ["ном", "номын", "номыг"],
      senses: [
        {
          pos: "noun",
          definition: "collection of pages",
          translation: "book",
          examples: [
            { en: "I read a book.", mn: "Би ном уншсан." },
            { en: "The book is on the table.", mn: "Ном ширээн дээр байна." }
          ],
          derivatives: [
            { word: "номын сан", translation: "library" },
            { word: "номын хавтас", translation: "book cover" }
          ],
          grammar: {
            accusative: "номыг",
            genitive: "номын"
          }
        }
      ]
    },
    "гал": {
      canonical: "гал",
      pronunciation: "/gal/",
      topic: "nature",
      cefr: "A1",
      forms: ["гал", "галыг", "галын"],
      senses: [
        {
          pos: "noun",
          definition: "burning material",
          translation: "fire",
          examples: [
            { en: "The fire is warm.", mn: "Гал дулаан байна." },
            { en: "Don’t touch the fire.", mn: "Галд хүрч болохгүй." }
          ],
          derivatives: [
            { word: "галын дөл", translation: "flame" },
            { word: "галын аюул", translation: "fire hazard" }
          ],
          grammar: {
            accusative: "галыг",
            genitive: "галын"
          }
        }
      ]
    },
    "уух": {
      canonical: "уух",
      pronunciation: "/uux/",
      topic: "food",
      cefr: "A1",
      forms: ["уух", "уусан", "ууж", "уудаг"],
      senses: [
        {
          pos: "verb",
          definition: "consume liquid",
          translation: "drink",
          examples: [
            { en: "I drink water.", mn: "Би ус уудаг." },
            { en: "He drank tea.", mn: "Тэр цай уусан." }
          ],
          derivatives: [
            { word: "уусан", translation: "drunk" },
            { word: "уулт", translation: "drinking" }
          ],
          grammar: {
            past: "уусан",
            presentParticiple: "ууж",
            thirdPerson: "уудаг"
          }
        }
      ]
    },
    "идэх": {
      canonical: "идэх",
      pronunciation: "/idex/",
      topic: "food",
      cefr: "A1",
      forms: ["идэх", "идсэн", "идэж", "иддэг"],
      senses: [
        {
          pos: "verb",
          definition: "consume food",
          translation: "eat",
          examples: [
            { en: "I eat rice.", mn: "Би будаа иддэг." },
            { en: "She ate an apple.", mn: "Тэр алим идсэн." }
          ],
          derivatives: [
            { word: "идэгч", translation: "eater" },
            { word: "идэш", translation: "food" }
          ],
          grammar: {
            past: "идсэн",
            presentParticiple: "идэж",
            thirdPerson: "иддэг"
          }
        }
      ]
    },
    "гэр": {
      canonical: "гэр",
      pronunciation: "/ger/",
      topic: "housing",
      cefr: "A1",
      forms: ["гэр", "гэрийг", "гэрийн"],
      senses: [
        {
          pos: "noun",
          definition: "building for living",
          translation: "house",
          examples: [
            { en: "My house is big.", mn: "Миний гэр том байна." },
            { en: "We live in a house.", mn: "Бид гэрт амьдардаг." }
          ],
          derivatives: [
            { word: "гэрийн тавилга", translation: "household furniture" },
            { word: "гэрийн хэрэглэл", translation: "household items" }
          ],
          grammar: {
            accusative: "гэрийг",
            genitive: "гэрийн"
          }
        }
      ]
    },
    "сурчих": {
      canonical: "сурчих",
      pronunciation: "/surčix/",
      topic: "education",
      cefr: "A2",
      forms: ["сурчих", "сурчихсан", "сурчихаж", "сурчихаж байна"],
      senses: [
        {
          pos: "verb",
          definition: "acquire knowledge",
          translation: "learn",
          examples: [
            { en: "I learned Mongolian.", mn: "Би Монгол хэл сурчихсан." },
            { en: "She is learning fast.", mn: "Тэр хурдан сурчихаж байна." }
          ],
          derivatives: [
            { word: "сурчигч", translation: "learner" },
            { word: "сургалт", translation: "learning" }
          ],
          grammar: {
            past: "сурчихсан",
            presentParticiple: "сурчихаж",
            thirdPerson: "сурчихаж байна"
          }
        }
      ]
    },
    "гуйх": {
      canonical: "гуйх",
      pronunciation: "/guix/",
      topic: "action",
      cefr: "A2",
      forms: ["гуйх", "гуйсан", "гуйж", "гуйдаг"],
      senses: [
        {
          pos: "verb",
          definition: "move quickly on foot",
          translation: "run",
          examples: [
            { en: "I run every morning.", mn: "Би өглөө бүр гүйдэг." },
            { en: "He ran to school.", mn: "Тэр сургууль руу гүйсэн." }
          ],
          derivatives: [
            { word: "гуйгч", translation: "runner" },
            { word: "гуйлт", translation: "running" }
          ],
          grammar: {
            past: "гуйсан",
            presentParticiple: "гуйж",
            thirdPerson: "гуйдаг"
          }
        }
      ]
    },
    "ус": {
      canonical: "ус",
      pronunciation: "/us/",
      topic: "nature",
      cefr: "A1",
      forms: ["ус", "усыг", "усны"],
      senses: [
        {
          pos: "noun",
          definition: "clear liquid",
          translation: "water",
          examples: [
            { en: "Water is essential.", mn: "Ус зайлшгүй чухал." },
            { en: "I drink water daily.", mn: "Би өдөр бүр ус уудаг." }
          ],
          derivatives: [
            { word: "усны сав", translation: "water container" },
            { word: "усан", translation: "watery" }
          ],
          grammar: {
            accusative: "усыг",
            genitive: "усны"
          }
        }
      ]
    },
    "сургууль": {
      canonical: "сургууль",
      pronunciation: "/surguul/",
      topic: "education",
      cefr: "A1",
      forms: ["сургууль", "сургуулийг", "сургуулийн"],
      senses: [
        {
          pos: "noun",
          definition: "place for education",
          translation: "school",
          examples: [
            { en: "I go to school.", mn: "Би сургуульдаа явдаг." },
            { en: "The school is new.", mn: "Сургууль шинэ байна." }
          ],
          derivatives: [
            { word: "сургуулийн багш", translation: "school teacher" },
            { word: "сургуулийн барилга", translation: "school building" }
          ],
          grammar: {
            accusative: "сургуулийг",
            genitive: "сургуулийн"
          }
        }
      ]
    },
    "нохой": {
      canonical: "нохой",
      pronunciation: "/noxoi/",
      topic: "animal",
      cefr: "A1",
      forms: ["нохой", "нохойг", "нохойн"],
      senses: [
        {
          pos: "noun",
          definition: "domesticated canine",
          translation: "dog",
          examples: [
            { en: "The dog is friendly.", mn: "Нохой эелдэг байна." },
            { en: "Dogs bark at night.", mn: "Нохой шөнө хуцдаг." }
          ],
          derivatives: [
            { word: "нохойн зулзага", translation: "puppy" },
            { word: "нохойн хоол", translation: "dog food" }
          ],
          grammar: {
            accusative: "нохойг",
            genitive: "нохойн"
          }
        }
      ]
    },
    "бичих": {
      canonical: "бичих",
      pronunciation: "/bičix/",
      topic: "education",
      cefr: "A2",
      forms: ["бичих", "бичсэн", "биччих", "бичдэг"],
      senses: [
        {
          pos: "verb",
          definition: "form letters or symbols",
          translation: "write",
          examples: [
            { en: "I write a letter.", mn: "Би захидал бичдэг." },
            { en: "She wrote a book.", mn: "Тэр ном бичсэн." }
          ],
          derivatives: [
            { word: "бичээч", translation: "writer" },
            { word: "бичлэг", translation: "writing" }
          ],
          grammar: {
            past: "бичсэн",
            presentParticiple: "биччих",
            thirdPerson: "бичдэг"
          }
        }
      ]
    },
    "унших": {
      canonical: "унших",
      pronunciation: "/unšix/",
      topic: "education",
      cefr: "A2",
      forms: ["унших", "уншсан", "уншиж", "уншдаг"],
      senses: [
        {
          pos: "verb",
          definition: "look at and comprehend text",
          translation: "read",
          examples: [
            { en: "I read a book.", mn: "Би ном уншдаг." },
            { en: "Read this page.", mn: "Эндэх хуудсыг унш." }
          ],
          derivatives: [
            { word: "уншигч", translation: "reader" },
            { word: "уншлага", translation: "reading" }
          ],
          grammar: {
            past: "уншсан",
            presentParticiple: "уншиж",
            thirdPerson: "уншдаг"
          }
        }
      ]
    },
    "мод": {
      canonical: "мод",
      pronunciation: "/mod/",
      topic: "nature",
      cefr: "A1",
      forms: ["мод", "модыг", "модны"],
      senses: [
        {
          pos: "noun",
          definition: "tall plant with trunk",
          translation: "tree",
          examples: [
            { en: "The tree is tall.", mn: "Мод өндөр байна." },
            { en: "Trees grow slowly.", mn: "Мод удаан ургадаг." }
          ],
          derivatives: [
            { word: "модны хальс", translation: "tree bark" },
            { word: "модны сүүдэр", translation: "tree shade" }
          ],
          grammar: {
            accusative: "модыг",
            genitive: "модны"
          }
        }
      ]
    },
    "машин": {
      canonical: "машин",
      pronunciation: "/mašin/",
      topic: "transport",
      cefr: "A1",
      forms: ["машин", "машиныг", "машины"],
      senses: [
        {
          pos: "noun",
          definition: "vehicle with four wheels",
          translation: "car",
          examples: [
            { en: "I have a car.", mn: "Би машинтай." },
            { en: "The car is red.", mn: "Машин улаан байна." }
          ],
          derivatives: [
            { word: "машины дугуй", translation: "car tire" },
            { word: "машины жолоо", translation: "car steering" }
          ],
          grammar: {
            accusative: "машиныг",
            genitive: "машины"
          }
        }
      ]
    }
  }
};

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const directionBtns = document.querySelectorAll('.direction-btn');
const randomBtn = document.getElementById('randomBtn');
const exerciseBtn = document.getElementById('exerciseBtn');
const filterModal = document.getElementById('filterModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const exerciseModal = document.getElementById('exerciseModal');
const closeExerciseModal = document.getElementById('closeExerciseModal');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const keyboardToggleBtn = document.getElementById('keyboardToggleBtn');
let currentDirection = 'en-mn';

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getRandomWord() {
  const dict = currentDirection === 'en-mn' ? dictionary.en : dictionary.mn;
  const words = Object.keys(dict);
  return words[Math.floor(Math.random() * words.length)];
}

function hasLemma(word, direction) {
  const dict = direction === 'en-mn' ? dictionary.en : dictionary.mn;
  return !!dict[word];
}

function searchExamples(query, direction) {
  const dict = direction === 'en-mn' ? dictionary.en : dictionary.mn;
  const results = [];
  for (let word in dict) {
    const entry = dict[word];
    (entry.senses || [entry]).forEach(sense => {
      sense.examples.forEach(example => {
        const textToSearch = direction === 'en-mn' ? example.en : example.mn;
        if (textToSearch.toLowerCase().includes(query)) {
          results.push({
            lemma: word,
            exampleText: example[direction === 'en-mn' ? 'en' : 'mn'],
            translationText: example[direction === 'en-mn' ? 'mn' : 'en']
          });
        }
      });
    });
  }
  return results;
}

function renderEntry(lemma, entry, direction) {
  const isHeadwordMongolian = isMongolian(entry.canonical);
  let sensesHtml = '';

  if (entry.senses && entry.senses.length > 1) {
    sensesHtml = entry.senses.map((sense, index) => {
      const senseData = sense;
      let examplesHtml = sense.examples.map(example => {
        return `
          <li class="example-item">
            <span class="example-original">${escapeHtml(example.en)}</span>
            <span class="example-translation">${escapeHtml(example.mn)}</span>
          </li>
        `;
      }).join('');

      let grammarHtml = '';
      if (sense.grammar) {
        grammarHtml = `<ul class="grammar-list">`;
        for (let key in sense.grammar) {
          grammarHtml += `
            <li class="grammar-item">
              <span class="grammar-label">${key}:</span>
              ${escapeHtml(sense.grammar[key])}
            </li>
          `;
        }
        grammarHtml += `</ul>`;
      }

      let derivativesHtml = sense.derivatives.map(derivative => {
        const hasEntry = hasLemma(derivative.word, direction);
        const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
        const translationClass = isMongolian(derivative.translation) ? 'mongolian' : '';
        return `
          <div class="derivative-item">
            <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
            <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
          </div>
        `;
      }).join('');

      const translationClass = isMongolian(senseData.translation) ? 'mongolian' : '';

      const sensePos = senseData.pos || (entry.senses ? entry.senses[0]?.pos : entry.pos);
      const senseTopic = senseData.topic || entry.topic;

      let senseTagsHtml = '';
      if (sensePos) {
        senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
      }
      if (senseTopic) {
        senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
      }

      return `
        <div class="sense-item">
          <div class="tags-container">${senseTagsHtml}</div>
          <span class="sense-number">${index + 1}.</span>
          <span class="sense-definition">${escapeHtml(senseData.definition)}</span>
          <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
          <div class="section-title">Examples</div>
          <ul class="examples-list">
            ${examplesHtml}
          </ul>
          <div class="section-title">Grammar</div>
          ${grammarHtml}
          <div class="section-title">Derivatives</div>
          <div class="derivatives-list">
            ${derivativesHtml}
          </div>
        </div>
      `;
    }).join('');
  } else {
    const senseData = entry.senses ? entry.senses[0] : entry;
    let examplesHtml = senseData.examples.map(example => {
      return `
        <li class="example-item">
          <span class="example-original">${escapeHtml(example.en)}</span>
          <span class="example-translation">${escapeHtml(example.mn)}</span>
        </li>
      `;
    }).join('');

    let grammarHtml = '';
    if (senseData.grammar) {
      grammarHtml = `<ul class="grammar-list">`;
      for (let key in senseData.grammar) {
        grammarHtml += `
          <li class="grammar-item">
            <span class="grammar-label">${key}:</span>
            ${escapeHtml(senseData.grammar[key])}
          </li>
        `;
      }
      grammarHtml += `</ul>`;
    }

    let derivativesHtml = senseData.derivatives.map(derivative => {
      const hasEntry = hasLemma(derivative.word, direction);
      const wordClass = hasEntry ? 'derivative-word linkable' : 'derivative-word';
      const translationClass = isMongolian(derivative.translation) ? 'mongolian' : '';
      return `
        <div class="derivative-item">
          <span class="${wordClass}" ${hasEntry ? `data-word="${derivative.word}"` : ''}>${escapeHtml(derivative.word)}</span>
          <div class="derivative-translation ${translationClass}">${escapeHtml(derivative.translation)}</div>
        </div>
      `;
    }).join('');

    const translationClass = isMongolian(senseData.translation) ? 'mongolian' : '';

    const sensePos = senseData.pos || entry.pos;
    const senseTopic = senseData.topic || entry.topic;

    let senseTagsHtml = '';
    if (sensePos) {
      senseTagsHtml += `<button class="pos" onclick="showFilterList('pos', '${sensePos}')">${sensePos}</button>`;
    }
    if (senseTopic) {
      senseTagsHtml += `<button class="topic-tag" onclick="showFilterList('topic', '${senseTopic}')">${senseTopic}</button>`;
    }

    sensesHtml = `
      <div class="sense-item">
        <div class="tags-container">${senseTagsHtml}</div>
        <div class="translation ${translationClass}" onclick="handleTranslationClick('${senseData.translation.replace(/'/g, "\\'")}')"">${escapeHtml(senseData.translation)}</div>
        <div class="section-title">Examples</div>
        <ul class="examples-list">
          ${examplesHtml}
        </ul>
        <div class="section-title">Grammar</div>
        ${grammarHtml}
        <div class="section-title">Derivatives</div>
        <div class="derivatives-list">
          ${derivativesHtml}
        </div>
      </div>
    `;
  }

  let frequencyHtml = '';
  if (isHeadwordMongolian) {
    frequencyHtml = '<div class="frequency-placeholder">Frequency: top 1000</div>';
  }

  let cefrHtml = '';
  if (isHeadwordMongolian && entry.cefr) {
    cefrHtml = `<div class="tags-container" style="position:absolute; right:0; top:0;"><button class="level-tag" onclick="showFilterList('cefr', '${entry.cefr}')">${entry.cefr.toUpperCase()}</button></div>`;
  }

  return `
    <div class="entry" style="position:relative;">
      ${cefrHtml}
      <div class="headword ${isHeadwordMongolian ? 'mongolian' : ''}">${escapeHtml(entry.canonical)}</div>
      <div class="pronunciation">${escapeHtml(entry.pronunciation)}</div>
      ${frequencyHtml}
      ${sensesHtml}
    </div>
  `;
}

function handleTranslationClick(translationWord) {
  const newDirection = currentDirection === 'en-mn' ? 'mn-en' : 'en-mn';
  showResult(translationWord, newDirection);
  directionBtns.forEach(btn => {
    if (btn.getAttribute('data-direction') === newDirection) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  currentDirection = newDirection;
  searchInput.value = translationWord;
  resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showResult(lemma, forcedDirection = null) {
  const direction = forcedDirection || currentDirection;
  const query = lemma.toLowerCase().trim();

  let entry = null;
  if (direction === 'en-mn') {
    entry = dictionary.en[query];
  } else {
    entry = dictionary.mn[query];
  }

  if (entry) {
    resultsContainer.innerHTML = renderEntry(lemma, entry, direction);
    attachEventListeners();
    return;
  }

  const dict = direction === 'en-mn' ? dictionary.en : dictionary.mn;
  let foundLemma = null;

  for (let word in dict) {
    const wordEntry = dict[word];
    if (wordEntry && wordEntry.forms && Array.isArray(wordEntry.forms)) {
      if (wordEntry.forms.includes(query)) {
        foundLemma = word;
        entry = wordEntry;
        break;
      }
    }
  }

  if (foundLemma) {
    resultsContainer.innerHTML = renderEntry(foundLemma, entry, direction);
    attachEventListeners();
    return;
  }

  const foundInExamples = searchExamples(query, direction);

  if (foundInExamples.length > 0) {
    let examplesHtml = foundInExamples.map(item => {
      const escapedQuery = escapeHtml(query);
      const escapedExample = escapeHtml(item.exampleText);
      const highlightedExample = escapedExample.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<span class="lemma-highlight">$1</span>');
      return `
        <div class="example-match-item">
          <div class="example-original">${highlightedExample}</div>
          <div class="example-translation">${escapeHtml(item.translationText)}</div>
          <button class="goto-lemma-btn" data-word="${item.lemma}"> → View "${item.lemma}" entry</button>
        </div>
      `;
    }).join('');

    resultsContainer.innerHTML = `
      <div class="no-result">
        <p>No lemma found for "${escapeHtml(lemma)}", but it appears in the following example(s):</p>
        <div class="examples-in-context">${examplesHtml}</div>
      </div>
    `;
    attachExampleMatchListeners();
  } else {
    resultsContainer.innerHTML = `<div class="no-result">No entry found for "${escapeHtml(lemma)}"</div>`;
  }
}

function attachEventListeners() {
  document.querySelectorAll('.lemma-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const word = link.getAttribute('data-word');
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.derivative-word.linkable').forEach(wordEl => {
    wordEl.addEventListener('click', (e) => {
      e.preventDefault();
      const word = wordEl.getAttribute('data-word');
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function attachExampleMatchListeners() {
  document.querySelectorAll('.goto-lemma-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const word = btn.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function showFilterList(type, value) {
  filterModal.style.display = 'block';
  modalTitle.textContent = value.toUpperCase();

  const dict = currentDirection === 'en-mn' ? dictionary.en : dictionary.mn;

  const matchingWords = Object.keys(dict).filter(word => {
    const entry = dict[word];
    if (type === 'pos') return entry.pos === value || (entry.senses && entry.senses.some(s => s.pos === value));
    if (type === 'topic') return entry.topic === value || (entry.senses && entry.senses.some(s => s.topic === value));
    if (type === 'cefr') return entry.cefr === value;
  }).sort((a, b) => a.localeCompare(b));

  let listHtml = '<ul class="filter-word-list">';
  matchingWords.forEach(word => {
    listHtml += `<li class="filter-word-item" data-word="${word}">${word}</li>`;
  });
  listHtml += '</ul>';

  modalBody.innerHTML = listHtml;

  document.querySelectorAll('.filter-word-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const word = e.target.getAttribute('data-word');
      searchInput.value = word;
      showResult(word);
      filterModal.style.display = 'none';
      resultsContainer.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

function generateExercise() {
  const dict = currentDirection === 'en-mn' ? dictionary.en : dictionary.mn;
  const words = Object.keys(dict);
  const correctWord = words[Math.floor(Math.random() * words.length)];
  const entry = dict[correctWord];
  const sense = entry.senses ? entry.senses[0] : entry;
  const question = currentDirection === 'en-mn' ? sense.translation : correctWord;
  const correctAnswer = currentDirection === 'en-mn' ? correctWord : sense.translation;

  const incorrectWords = [];
  while (incorrectWords.length < 3) {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    if (randomWord === correctWord) continue;

    const randomEntry = dict[randomWord];
    const randomSense = randomEntry.senses ? randomEntry.senses[0] : randomEntry;
    const randomAnswer = currentDirection === 'en-mn' ? randomWord : randomSense.translation;

    if (!incorrectWords.includes(randomAnswer)) {
      incorrectWords.push(randomAnswer);
    }
  }

  const allAnswers = [correctAnswer, ...incorrectWords].sort(() => Math.random() - 0.5);

  let answersHtml = '';
  allAnswers.forEach(answer => {
    answersHtml += `
      <div class="answer-option" data-answer="${escapeHtml(answer)}">
        ${escapeHtml(answer)}
      </div>
    `;
  });

  const questionText = currentDirection === 'en-mn'
    ? `What is the English word for: "${question}"?`
    : `What is the Mongolian word for: "${question}"?`;

  exerciseModal.querySelector('.modal-body').innerHTML = `
    <div class="exercise-question">${escapeHtml(questionText)}</div>
    <div class="answer-options">${answersHtml}</div>
    <div class="exercise-feedback" style="display:none;"></div>
    <div class="exercise-buttons">
      <button class="exercise-btn-modal next-btn">Next Question</button>
      <button class="exercise-btn-modal close-btn">Close</button>
    </div>
  `;

  exerciseModal.style.display = 'block';

  document.querySelectorAll('.answer-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.answer-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
      });
      option.classList.add('selected');
      const isCorrect = option.textContent.trim() === correctAnswer.trim();
      if (isCorrect) {
        option.classList.add('correct');
      } else {
        option.classList.add('incorrect');
        document.querySelectorAll('.answer-option').forEach(opt => {
          if (opt.textContent.trim() === correctAnswer.trim()) {
            opt.classList.add('correct');
          }
        });
      }

      const feedback = document.querySelector('.exercise-feedback');
      feedback.style.display = 'block';
      feedback.innerHTML = isCorrect
        ? `<h4>Correct!</h4><p>Well done!</p>`
        : `<h4>Incorrect</h4><p>The correct answer is: <strong>${escapeHtml(correctAnswer)}</strong></p>`;

      document.querySelector('.next-btn').onclick = generateExercise;
      document.querySelector('.close-btn').onclick = () => {
        exerciseModal.style.display = 'none';
      };
    });
  });
}

directionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    directionBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDirection = btn.getAttribute('data-direction');
    searchInput.value = '';
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  });
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim();
  if (query) {
    showResult(query);
  } else {
    resultsContainer.innerHTML = `<div class="about-section" id="aboutSection">
      <div class="section-title">About</div>
      <p class="about-content">bla blabla bla</p>
    </div>`;
  }
});

randomBtn.addEventListener('click', () => {
  const word = getRandomWord();
  searchInput.value = word;
  showResult(word);
});

exerciseBtn.addEventListener('click', () => {
  generateExercise();
});

closeModal.addEventListener('click', () => {
  filterModal.style.display = 'none';
});

closeExerciseModal.addEventListener('click', () => {
  exerciseModal.style.display = 'none';
});

keyboardToggleBtn.addEventListener('click', () => {
  virtualKeyboard.style.display = virtualKeyboard.style.display === 'none' ? 'block' : 'none';
  keyboardToggleBtn.textContent = virtualKeyboard.style.display === 'none' ? '⌨️ Show Keyboard' : '⌨️ Hide Keyboard';
});

document.querySelectorAll('.key').forEach(key => {
  key.addEventListener('click', () => {
    const action = key.getAttribute('data-action');
    const input = searchInput;
    if (action === 'backspace') {
      input.value = input.value.slice(0, -1);
    } else if (action === 'space') {
      input.value += ' ';
    } else {
      input.value += key.textContent.trim();
    }
    input.focus();
    if (input.value.trim()) {
      showResult(input.value);
    }
  });
});
