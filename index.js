const line1 = ["In the morning light,", "You’re so cute, but why", "Music on, windows down,",
                "I love you so much,", "To end this poem,", "The T-Rex likes you,", 
                "I’d go to yoga,", "I love my pillow.", "That’s too much bacon.", "I hid a twenty"];

const line2 = ["You sleep despite my meow.", "Should I write a haiku for you?", "We’re not even late yet, but...", 
                "But your love of cheese is wrong.", "I need one more magic line:", "But he can’t give you a hug.",
                "But they don’t serve donuts there.", "My alarm clock is beeping.", "Please just bring me some kale chips.",
                "In your messy room somewhere."];

const line3 = ["I stand on your face.","You can’t even read.","Someone has to pee.","The smell makes me gag.",
                "Abracadabra!","His arms are too short.","Namaste right here.","No, no, no, no, no.",
                "Said no one ever.","Just clean to find it."];

const getLineOne = () => {
    return line1[Math.floor(Math.random() * line1.length)];
}

const getLineTwo = () => {
    return line2[Math.floor(Math.random() * line2.length)];
}

const getLineThree = () => {
    return line3[Math.floor(Math.random() * line3.length)];
}

console.log(getLineOne());
console.log(getLineTwo());
console.log(getLineThree());