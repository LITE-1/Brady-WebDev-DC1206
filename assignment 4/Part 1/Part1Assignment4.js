// Brady Cousins
// 2024-04-04
// 1206-1
// Part 1 Assignment 4

//Define variables
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}
// raw text
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const xInsert = ['Willy the Goblin',
    'Big Daddy',
    'Father Christmas'];

const yInsert = ['the soup kitchen',
    'Disneyland',
    'the White House'];

const zInsert = ['spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'];


randomize.addEventListener('click', result);


function result() {
    let newStory = storyText;

    //gets random value from array
    const xItem = randomValueFromArray(xInsert);
    const yItem = randomValueFromArray(yInsert);
    const zItem = randomValueFromArray(zInsert);

    //inserts value into story text
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        const weight = Math.round(300);
        const temperature = Math.round(94);
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}