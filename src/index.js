const messages =[
    "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistenly.",
    "Your hardest times often lead to the greatest moments of your life. Keep going. Tough situations build strong people in the end",
    "Do not fear failure but ratgher fear not trying.",
    "Never lose hope. Storms make people stronger and never last forever.",
    "When the going gets tough, put one foot in front of the other and just keep going. Don't give up.",
    "It does not matter how slow you go so long as you do not stop",
    "You can dance in the storm. Don't wait for the rain to be over before because it might take too long.You can do it now. Wherever you are, right now, you can start, right now; this very moment.",
    "One of the most powerful lessons in life is to recognize that no one can give you power, and many people don't want you to have it. You have to find the courage to seize it, own it and hold on."
];

const randomMsg = () =>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log (message);
}

module.exports = {randomMsg}