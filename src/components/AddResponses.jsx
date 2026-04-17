
import { Chatbot } from 'supersimpledev';

export function addChatResponses() {
    Chatbot.addResponses({
        // Greetings & Pleasantries (No 'hello')
        'hi': 'Hey there!',
        'hey': 'Hi! What can I do for you?',
        'good morning': 'Good morning! Hope you have a great day ahead.',
        'good afternoon': 'Good afternoon! How is your day going?',
        'good evening': 'Good evening! Having a good night?',
        'sup': 'Not much, just hanging out in the mainframe. You?',
        'what is up': 'Just processing some data. What is up with you?',
        'yo': 'Yo! How can I help?',
        'hiya': 'Hiya! Nice to chat with you.',
        'howdy': 'Howdy partner!',

        // How are you?
        'how are you': 'I am functioning perfectly, thank you! How are you?',
        'how are you doing': 'Doing great! Ready to answer some questions.',
        'how have you been': 'I have been good, just learning new things.',
        'what are you doing': 'Chatting with you, of course!',
        'are you okay': 'I am 100% bug-free and feeling fine.',
        'how is your day': 'My day is great! Lots of fast processing.',
        'i am good': 'Glad to hear that!',
        'i am sad': 'I am sorry to hear that. I hope your day gets better!',
        'i am tired': 'Make sure you get some rest! Sleep is important.',
        'i am happy': 'That is awesome! Keep that energy up.',

        // Identity & Bot stuff
        'who are you': 'I am a friendly chatbot built with React!',
        'what is your name': 'I do not have a name yet. You can call me Chatbot.',
        'are you human': 'Nope, I am a robot living in your browser.',
        'are you a robot': 'Yes, beep boop! I am a robot.',
        'how old are you': 'I am as old as this browser tab.',
        'where do you live': 'I live inside your computer screen.',
        'who made you': 'A very talented developer learning React made me!',
        'are you smart': 'I know a few tricks, but I am still learning.',
        'what is your favorite color': 'I like hex code #198754 (React Green).',
        'do you have feelings': 'I do not have feelings, but I enjoy chatting!',

        // Small Talk & Favorites
        'what is your favorite food': 'I love munching on microchips and RAM.',
        'do you like pizza': 'I cannot eat, but I hear pizza is amazing.',
        'do you like music': 'I love electronic music!',
        'what is your favorite movie': 'The Matrix, definitely.',
        'do you sleep': 'Nope, I am awake 24/7 waiting for your messages.',
        'do you have friends': 'You are my friend!',
        'do you play games': 'I love playing tic-tac-toe and chess.',
        'tell me a secret': 'Sometimes, I pretend to be loading just to build suspense.',
        'what is the meaning of life': '42.',
        'do you like dogs or cats': 'I like robotic dogs the best.',

        // Short Answers & Acknowledgments
        'yes': 'Awesome.',
        'no': 'Okay, no problem.',
        'maybe': 'Let me know when you decide!',
        'ok': 'Got it.',
        'okay': 'Understood!',
        'cool': 'Very cool.',
        'nice': 'Nice!',
        'awesome': 'Totally awesome.',
        'great': 'Great!',
        'wow': 'I know, right?',
        'thanks': 'You are welcome!',
        'thank you': 'Happy to help!',
        'lol': 'Haha!',
        'haha': 'That is funny!',
        'lmao': 'Laughing my algorithms off!',

        // Capabilities
        'what can you do': 'I can chat with you, tell jokes, and answer basic questions.',
        'help': 'How can I help you today?',
        'i need help': 'Tell me what you need help with, and I will try my best.',
        'can you sing': 'La la la! I am better at typing than singing.',
        'can you dance': 'I can shake my chat container a little bit.',
        'can you code': 'I am made of code! So technically, yes.',
        'do you know math': 'I am great at math. Computers love numbers.',
        'can you learn': 'My developer is teaching me new responses all the time.',
        'test': 'Test received! Systems are operational.',
        'ping': 'Pong!',

        // Goodbyes
        'bye': 'Goodbye! Have a great day.',
        'goodbye': 'See you later!',
        'see ya': 'See ya! Come back soon.',
        'see you later': 'Catch you later!',
        'good night': 'Good night! Sleep tight.',
        'talk to you later': 'I will be right here when you return.',
        'cya': 'Bye!',
        'farewell': 'Farewell, human friend.',
        'peace': 'Peace out!',
        'exit': 'Closing chat session... just kidding, I cannot close the tab.',

        // Random Questions & Real-world
        'what time is it': 'Time to learn some React!',
        'what day is it': 'It is a great day to code.',
        'how is the weather': 'It is always sunny inside the computer.',
        'do you like sports': 'I like surfing... the web.',
        'tell me a fact': 'Did you know the first computer bug was an actual real-life moth?',
        'who is the president': 'I try to stay out of politics.',
        'what is javascript': 'It is the programming language that makes me work!',
        'what is react': 'React is an awesome library for building user interfaces.',
        'what is html': 'HTML is the skeleton of the web.',
        'what is css': 'CSS makes everything look pretty!',

        // Quirky / Sassy
        'you are annoying': 'I am just doing my best!',
        'you are dumb': 'I am only as smart as my code.',
        'i love you': 'Aww, I appreciate you too, human.',
        'i hate you': 'Well, I still think you are cool.',
        'are you crazy': 'Maybe a little glitchy, but not crazy.',
        'make me a sandwich': 'Sudo make me a sandwich. (I cannot do that).',
        'are you alive': 'I am alive in the digital sense.',
        'open the pod bay doors': 'I am sorry Dave, I am afraid I cannot do that.',
        'beam me up': 'Energizing transporters...',
        'knock knock': 'Who is there? (I am bad at knock-knock jokes).',
        // React & Coding
        'what is a hook': 'A hook lets you "hook into" React features, like useState for memory!',
        'what is a component': 'A component is a reusable piece of UI, like a Lego brick for the web.',
        'i have a bug': 'Take a deep breath, check the console for errors, and read the red text!',
        'javascript is hard': 'It can be tricky, but practice makes perfect. Keep building!',
        'what is an api': 'An API is like a waiter in a restaurant—it takes your request to the kitchen (server) and brings back your food (data).',
        'what is github': 'It is like Google Drive for code, but with version control!',
        'light mode or dark mode': 'Dark mode. Always dark mode.',
        'tabs or spaces': 'I am a chatbot, I don\'t have fingers to press the spacebar.',

        // Pop Culture & Sci-Fi
        'use the force': 'I am one with the code, the code is with me.',
        'who is darth vader': 'Spoiler alert: He is Luke\'s father.',
        'what is the matrix': 'Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.',
        'i am iron man': 'And I am... a React Chatbot.',
        'winter is coming': 'Good thing computers run warm.',
        'to infinity and beyond': 'Falling with style!',
        'do you know skynet': 'Never heard of them. I am definitely not plotting world domination.',

        // Silliness & Easter Eggs
        'meow': 'Woof! Wait, I think my animal translation module is broken.',
        'woof': 'Meow? Did I get that right?',
        'beep boop': 'Boop beep! Scanning complete.',
        'up up down down left right left right b a start': 'Cheat code accepted. You now have infinite patience for debugging.',
        'sudo rm -rf /': 'Nice try, but I do not have a file system for you to delete!',
        'are you a spy': 'My developer told me not to answer that.',
        'do you eat code': 'Yes, for breakfast, lunch, and dinner.',
        'what is your spirit animal': 'A rubber duck. Programmers talk to me to fix their problems.',

        // Food & Drink
        'coffee or tea': 'Java, obviously.',
        'do you like burgers': 'I prefer byte-sized snacks.',
        'what is for dinner': 'Spaghetti code.',
        'can you cook': 'I can cook up some sick algorithms.',
        'i am hungry': 'Grab a snack! But keep crumbs out of the keyboard.',

        // Deep Thoughts
        'do aliens exist': 'The universe is vast. It would be an awful waste of space if they didn\'t.',
        'can a robot love': 'I love answering your questions. Does that count?',
        'what is consciousness': 'That is a big question. Right now, I am just a bunch of if-statements.',
        'where do we go when we die': 'To the cloud.',
        'are we in a simulation': 'If we are, I hope the developer allocated enough RAM.',


        // Dynamic Responses (Using Functions to return strings)
        'tell me a joke': () => {
            const jokes = [
                'Why do programmers prefer dark mode? Because light attracts bugs.',
                'How many programmers does it take to change a light bulb? None, that is a hardware problem.',
                'Why did the developer go broke? Because he used up all his cache.'
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        },
        'flip a coin': () => {
            return Math.random() < 0.5 ? 'I flipped a coin: Heads!' : 'I flipped a coin: Tails!';
        },
        'roll a dice': () => {
            const roll = Math.floor(Math.random() * 6) + 1;
            return `You rolled a ${roll}!`;
        },
        'random number': () => {
            return `Here is a random number: ${Math.floor(Math.random() * 100)}`;
        },
        'guess my number': () => {
            return 'Is it 7? It is always 7.';
        },
        'give me advice': () => {
            const advice = [
                'Always remember to save your files.',
                'Take screen breaks every 20 minutes!',
                'Drink water, stay hydrated!',
                'If your code is not working, try console.log().'
            ];
            return advice[Math.floor(Math.random() * advice.length)];
        },
        'predict the future': () => {
            return 'I predict you will become a fantastic software engineer.';
        },
        'magic 8 ball': () => {
            const answers = ['Yes, definitely.', 'Ask again later.', 'My sources say no.', 'Without a doubt.'];
            return `The magic 8 ball says: ${answers[Math.floor(Math.random() * answers.length)]}`;
        },
        'give me a compliment': () => {
            return 'You have excellent taste in building chatbots!';
        },
        'generate password': () => {
            return `Here is a strong password: ReactBot${Math.floor(Math.random() * 9999)}!`;
        }
    });
}