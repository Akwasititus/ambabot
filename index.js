// require('dotenv').config();
// const TelegramBot = require('node-telegram-bot-api');
// const cron = require('node-cron');

// const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
// const prayerRequests = [];

// const quizQuestions = [
//     {
//       question: "Who led the Israelites out of Egypt?",
//       options: ["A. Abraham", "B. Moses", "C. Joshua", "D. David"],
//       correct: "B"
//     },
//     {
//       question: "How many books are in the Bible?",
//       options: ["A. 66", "B. 72", "C. 60", "D. 70"],
//       correct: "A"
//     },
//     {
//       question: "What is the first book of the New Testament?",
//       options: ["A. Matthew", "B. Mark", "C. Luke", "D. John"],
//       correct: "A"
//     }
//   ];
  

// // Handle /start command
// bot.onText(/\/start/, (msg) => {
//     const name = msg.from.first_name;
  
//     const welcomeMessage = `
//   👋 *Welcome ${name} to the Ambassadors Bot!*
  
//   Here’s what I can do for you:
  
//   📖 *Daily Devotionals*  
//   ➡️ Type /subscribe to receive a devotional every morning  
//   ➡️ Type /unsubscribe to stop receiving them
  
//   🙏 *Prayer Requests*  
//   ➡️ Type /prayer followed by your request  
//      _Example: /prayer I'm preparing for an exam_
  
//   🙌 *More coming soon...*
  
//   Let the peace of Christ rule in your heart. 💒  
//     `;
  
//     bot.sendMessage(msg.chat.id, welcomeMessage, { parse_mode: "Markdown" });


//     bot.sendMessage(msg.chat.id, "What would you like to do today?", {
//         reply_markup: {
//           keyboard: [
//             ["🙏 Send Prayer Request", "📖 Subscribe Devotional"],
//             ["pay dues","quiz","pastorword"]
//           ],
//           resize_keyboard: true,
//           one_time_keyboard: true
//         }
//       });

//       bot.on("message", (msg) => {
//         const text = msg.text;
//         const chatId = msg.chat.id;
//         const name = msg.from.first_name;
      
//         if (text === "🙏 Send Prayer Request") {
//           bot.sendMessage(chatId, "Please type your prayer request like this:\n\n/prayer I need strength in school");
//         }
      
//         else if (text === "📖 Subscribe Devotional") {
//           // Simulate the /subscribe command
//           if (!subscribers.includes(chatId)) {
//             subscribers.push(chatId);
//             bot.sendMessage(chatId, "✅ You’ve subscribed to daily devotionals!");
//           } else {
//             bot.sendMessage(chatId, "🔔 You’re already subscribed.");
//           }
//         }
      

//         else if (text === "pay dues") {
//             bot.sendMessage(chatId, "💰 Please pay your dues using the link below:\n\n[Pay Dues](https://example.com/pay-dues)");
//             const index = subscribers.indexOf(chatId);
//             if (index !== -1) {
//               subscribers.splice(index, 1);
//               bot.sendMessage(chatId, "Thanks that you will pay your dues. God bless you.");
//             } else {
//               bot.sendMessage(chatId, "Dont worry, you can pay your dues later. God bless you.");
//             }
//           }
//       });
      
//   });

//   bot.onText(/\/quiz/, (msg) => {
//     const chatId = msg.chat.id;
    
//     const randomIndex = Math.floor(Math.random() * quizQuestions.length);
//     const q = quizQuestions[randomIndex];
  
//     const questionText = `📘 *Bible Quiz Time!*\n\n${q.question}\n\n${q.options.join('\n')}`;
  
//     // Store the current question for this user (we'll use a Map for now)
//     currentQuizzes.set(chatId, q.correct);
  
//     bot.sendMessage(chatId, questionText, {
//       parse_mode: "Markdown",
//       reply_markup: {
//         inline_keyboard: [
//           q.options.map((opt) => ({
//             text: opt,
//             callback_data: opt.charAt(0) // send just "A", "B", etc.
//           }))
//         ]
//       }
//     });
//   });

  
// // Handle quiz answer callback
// bot.on("callback_query", (callbackQuery) => {
//     const msg = callbackQuery.message;
//     const chatId = msg.chat.id;
//     const userAnswer = callbackQuery.data;
//     const correctAnswer = currentQuizzes.get(chatId);
  
//     if (!correctAnswer) {
//       return bot.answerCallbackQuery(callbackQuery.id, {
//         text: "No quiz in progress.",
//         show_alert: true
//       });
//     }
  
//     const responseText = userAnswer === correctAnswer
//       ? "✅ Correct! Well done!"
//       : `❌ Oops! The correct answer was *${correctAnswer}*`;
  
//     // Clear the question
//     currentQuizzes.delete(chatId);
  
//     bot.sendMessage(chatId, responseText, { parse_mode: "Markdown" });
//   });
  


  

  
  
  

// const subscribers = new Set(); // Add users here to receive devotionals

// bot.onText(/\/help/, (msg) => {
//     bot.sendMessage(msg.chat.id, `
//   🙏 *Church Bot Commands*:
//   • /devotional - Get today’s Bible verse
//   • /prayer - Submit a prayer request
//   • /services - View service schedule
//   • /quiz - Take a quick Bible quiz
//   • /paydues - Pay your dues
//   • /pastorword - Word from Pastor
//     `, { parse_mode: "Markdown" });
//   });

// bot.onText(/\/subscribe/, (msg) => {
//   subscribers.add(msg.chat.id);
//   bot.sendMessage(msg.chat.id, '✅ You’re now subscribed to daily devotionals!');
// });

// bot.onText(/\/unsubscribe/, (msg) => {
//   subscribers.delete(msg.chat.id);
//   bot.sendMessage(msg.chat.id, '❌ You’ve been unsubscribed from daily devotionals.');
// });

// cron.schedule('0 7 * * *', () => {
//   const verse = "📖 *Psalm 118:24* — *This is the day the Lord has made; let us rejoice and be glad in it.*";
//   subscribers.forEach(chatId => {
//     bot.sendMessage(chatId, `🌞 *Good Morning!* \n${verse}`, { parse_mode: "Markdown" });
//   });
// }, {
//   timezone: "Africa/Accra"
// });



// // Submit a prayer request
// bot.onText(/\/prayer (.+)/, (msg, match) => {
//     const user = msg.from.first_name;
//     const request = match[1];
  
//     const savedRequest = {
//       user,
//       chatId: msg.chat.id,
//       request,
//       date: new Date().toLocaleString("en-GB", { timeZone: "Africa/Accra" }),
//     };
  
//     prayerRequests.push(savedRequest);
  
//     // Send confirmation
//     bot.sendMessage(msg.chat.id, "🙏 Your prayer request has been received. We'll lift it up before the Lord.");
  
//     // Send short prayer reply (basic matching or random)
//     const prayerReply = getShortPrayer(request, user);
//     bot.sendMessage(msg.chat.id, `📖 ${prayerReply}`);
//   });
  
  
//   function getShortPrayer(request, name) {
//     const text = request.toLowerCase();
  
//     if (text.includes("exam") || text.includes("study")) {
//       return `Dear ${name}, I am sofo OP may God grant you wisdom, peace, and remembrance as you prepare. 🙏📘`;
//     }
  
//     if (text.includes("healing") || text.includes("sick") || text.includes("health")) {
//       return `May the Lord's healing hand rest upon you, ${name}. By His stripes, you are healed. 🕊️💊`;
//     }
  
//     if (text.includes("family") || text.includes("marriage")) {
//       return `Father, bless ${name}’s I am Pastor Ike family with unity, love, and peace. What You have joined, let no one separate. ❤️🏡`;
//     }
  
//     if (text.includes("strength") || text.includes("tired")) {
//       return `Lord, renew ${name}’s strength. May they rise on wings like eagles. 🦅💪`;
//     }
  
//     // Default fallback
//     const general = [
//       `God is with you, ${name}. Trust in Him, and He will direct your path. ✨`,
//       `The Lord hears your prayer, ${name}. Stand firm in faith. 🙏`,
//       `Peace be upon you, ${name}. May your heart be still before the Lord. 🌿`,
//     ];
  
//     return general[Math.floor(Math.random() * general.length)];
//   }
  





require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const cron = require('node-cron');

// Constants and Configurations
const BOT_CONFIG = {
  timezone: "Africa/Accra",
  dailyVerse: "📖 *Psalm 118:24* — *This is the day the Lord has made; let us rejoice and be glad in it.*"
};

// Initialize bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Data Stores
const subscribers = new Set();
const prayerRequests = [];
const currentQuizzes = new Map();

// Quiz Questions
const QUIZ_QUESTIONS = [
  {
    question: "Who led the Israelites out of Egypt?",
    options: ["A. Abraham", "B. Moses", "C. Joshua", "D. David"],
    correct: "B"
  },
  {
    question: "How many books are in the Bible?",
    options: ["A. 66", "B. 72", "C. 60", "D. 70"],
    correct: "A"
  },
  {
    question: "What is the first book of the New Testament?",
    options: ["A. Matthew", "B. Mark", "C. Luke", "D. John"],
    correct: "A"
  }
];

const pastorsWords = [
    {
      title: "🔥 Stay On Fire",
      word: "Don't let the fire of your passion for God go out. Stir it daily with prayer and the Word!",
      verse: "Romans 12:11 – 'Never be lacking in zeal, but keep your spiritual fervor, serving the Lord.'"
    },
    {
      title: "💡 You’re Light!",
      word: "Even in darkness, you're the light God planted there. Shine without apology.",
      verse: "Matthew 5:14 – 'You are the light of the world. A city set on a hill cannot be hidden.'"
    },
    {
      title: "🛡️ Built to Last",
      word: "Storms don’t break those built on Christ. Stay rooted.",
      verse: "Matthew 7:25 – '...it did not fall, because it had its foundation on the rock.'"
    }
  ];
  

// Prayer Responses
const PRAYER_RESPONSES = {
  exam: (name) => `Dear ${name}, may God grant you wisdom, peace, and remembrance as you prepare. 🙏📘`,
  healing: (name) => `May the Lord's healing hand rest upon you, ${name}. By His stripes, you are healed. 🕊️💊`,
  family: (name) => `Father, bless ${name}'s family with unity, love, and peace. What You have joined, let no one separate. ❤️🏡`,
  strength: (name) => `Lord, renew ${name}'s strength. May they rise on wings like eagles. 🦅💪`,
  default: [
    `God is with you, {name}. Trust in Him, and He will direct your path. ✨`,
    `The Lord hears your prayer, {name}. Stand firm in faith. 🙏`,
    `Peace be upon you, {name}. May your heart be still before the Lord. 🌿`,
  ]
};

// Helper Functions
const getRandomPrayerResponse = (name) => {
  const randomIndex = Math.floor(Math.random() * PRAYER_RESPONSES.default.length);
  return PRAYER_RESPONSES.default[randomIndex].replace('{name}', name);
};

const getShortPrayer = (request, name) => {
  const text = request.toLowerCase();
  
  if (text.includes("exam") || text.includes("study")) return PRAYER_RESPONSES.exam(name);
  if (text.includes("healing") || text.includes("sick") || text.includes("health")) return PRAYER_RESPONSES.healing(name);
  if (text.includes("family") || text.includes("marriage")) return PRAYER_RESPONSES.family(name);
  if (text.includes("strength") || text.includes("tired")) return PRAYER_RESPONSES.strength(name);
  
  return getRandomPrayerResponse(name);
};

const sendWelcomeMessage = (chatId, name) => {
  const welcomeMessage = `
👋 *Welcome ${name} to the Ambassadors Bot!*

Here's what I can do for you:

📖 *Daily Devotionals*  
➡️ Type /subscribe to receive a devotional every morning  
➡️ Type /unsubscribe to stop receiving them

🙏 *Prayer Requests*  
➡️ Type /prayer followed by your request  
   _Example: /prayer I'm preparing for an exam_

🙌 *More coming soon...*

Let the peace of Christ rule in your heart. 💒  
  `;

  bot.sendMessage(chatId, welcomeMessage, { parse_mode: "Markdown" });
};

const showMainMenu = (chatId) => {
  bot.sendMessage(chatId, "What would you like to do today?", {
    reply_markup: {
      keyboard: [
        ["🙏 Send Prayer Request", "📖 Subscribe Devotional"],
        ["pay dues", "quiz", "pastorword"]
      ],
      inline_keyboard: [
        [{ text: "🙏 Amen", callback_data: "amen" }],
        [{ text: "💬 Share This", callback_data: "share" }]
      ],
      resize_keyboard: true,
      one_time_keyboard: false,
      remove_keyboard: true
    }
  });
};

const handleQuizCommand = (chatId) => {
  const randomIndex = Math.floor(Math.random() * QUIZ_QUESTIONS.length);
  const q = QUIZ_QUESTIONS[randomIndex];
  
  const questionText = `📘 *Bible Quiz Time!*\n\n${q.question}\n\n${q.options.join('\n')}`;
  
  currentQuizzes.set(chatId, q.correct);
  
  bot.sendMessage(chatId, questionText, {
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        q.options.map((opt) => ({
          text: opt,
          callback_data: opt.charAt(0)
        }))
      ]
    }
  });
};

// Command Handlers
const handleStartCommand = (msg) => {
  const name = msg.from.first_name;
  sendWelcomeMessage(msg.chat.id, name);
  showMainMenu(msg.chat.id);
};

const handleHelpCommand = (msg) => {
  bot.sendMessage(msg.chat.id, `
🙏 *Church Bot Commands*:
• /devotional - Get today's Bible verse
• /prayer - Submit a prayer request
• /services - View service schedule
• /quiz - Take a quick Bible quiz
• /paydues - Pay your dues
• /pastorword - Word from Pastor
  `, { parse_mode: "Markdown" });
};

const handleSubscribeCommand = (msg) => {
  subscribers.add(msg.chat.id);
  bot.sendMessage(msg.chat.id, "✅ You're now subscribed to daily devotionals!");
};

const handleUnsubscribeCommand = (msg) => {
  subscribers.delete(msg.chat.id);
  bot.sendMessage(msg.chat.id, "❌ You've been unsubscribed from daily devotionals.");
};

const handlePrayerCommand = (msg, match) => {
  const user = msg.from.first_name;
  const request = match[1];
  
  prayerRequests.push({
    user,
    chatId: msg.chat.id,
    request,
    date: new Date().toLocaleString("en-GB", { timeZone: "Africa/Accra" }),
  });
  
  bot.sendMessage(msg.chat.id, "🙏 Your prayer request has been received. We'll lift it up before the Lord.");
  bot.sendMessage(msg.chat.id, `📖 ${getShortPrayer(request, user)}`);
};

const handleTextMessage = (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  const name = msg.from.first_name;
  
  switch(text) {
    case "🙏 Send Prayer Request":
      bot.sendMessage(chatId, "Please type your prayer request like this:\n\n/prayer I need strength in school");
      break;
      
    case "📖 Subscribe Devotional":
      if (!subscribers.has(chatId)) {
        subscribers.add(chatId);
        bot.sendMessage(chatId, "✅ You've subscribed to daily devotionals!");
      } else {
        bot.sendMessage(chatId, "🔔 You're already subscribed.");
      }
      break;
      
    case "pay dues":
      bot.sendMessage(chatId, "💰 Please pay your dues using the link below:\n\n[Pay Dues](https://example.com/pay-dues)");
      if (subscribers.has(chatId)) {
        subscribers.delete(chatId);
        bot.sendMessage(chatId, "Thanks that you will pay your dues. God bless you.");
      } else {
        bot.sendMessage(chatId, "Don't worry, you can pay your dues later. God bless you.");
      }
      break;

      case "quiz":
        handleQuizCommand(chatId);
        break;

    case "pastorword":
        const chatId = msg.chat.id;
        const randomIndex = Math.floor(Math.random() * pastorsWords.length);
        const word = pastorsWords[randomIndex];
      
        const message = `*📢 Pastor's Word: ${word.title}*\n\n_${word.word}_\n\n📖 *${word.verse}*`;
      
        bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
        break;
  }
};

bot.onText(/\/pastorword/, (msg) => {
    const chatId = msg.chat.id;
    const randomIndex = Math.floor(Math.random() * pastorsWords.length);
    const word = pastorsWords[randomIndex];
  
    const message = `*📢 Pastor's Word: ${word.title}*\n\n_${word.word}_\n\n📖 *${word.verse}*`;
  
    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  });
  

const handleQuizAnswer = (callbackQuery) => {
  const msg = callbackQuery.message;
  const chatId = msg.chat.id;
  const userAnswer = callbackQuery.data;
  const correctAnswer = currentQuizzes.get(chatId);
  
  if (!correctAnswer) {
    return bot.answerCallbackQuery(callbackQuery.id, {
      text: "No quiz in progress.",
      show_alert: true
    });
  }
  
  const responseText = userAnswer === correctAnswer
    ? "✅ Correct! Well done!"
    : `❌ Oops! The correct answer was *${correctAnswer}*`;
  
  currentQuizzes.delete(chatId);
  bot.sendMessage(chatId, responseText, { parse_mode: "Markdown" });
};

// Scheduled Tasks
cron.schedule('0 7 * * *', () => {
  subscribers.forEach(chatId => {
    bot.sendMessage(chatId, `🌞 *Good Morning!* \n${BOT_CONFIG.dailyVerse}`, { 
      parse_mode: "Markdown" 
    });
  });
}, {
  timezone: BOT_CONFIG.timezone
});

// Event Listeners
bot.onText(/\/start/, handleStartCommand);
bot.onText(/\/help/, handleHelpCommand);
bot.onText(/\/subscribe/, handleSubscribeCommand);
bot.onText(/\/unsubscribe/, handleUnsubscribeCommand);
bot.onText(/\/prayer (.+)/, handlePrayerCommand);
bot.onText(/\/quiz/, (msg) => handleQuizCommand(msg.chat.id));
bot.on("message", handleTextMessage);
bot.on("callback_query", handleQuizAnswer);