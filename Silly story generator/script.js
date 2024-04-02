document.getElementById('generateButton').addEventListener('click', generateStory);

function generateStory() {
  const customName = document.getElementById('customName').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const storyContainer = document.getElementById('story');

  let story = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.';
  let xItems = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
  let yItems = ['the soup kitchen', 'Disneyland', 'the White House'];
  let zItems = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

  let insertX = randomValueFromArray(xItems);
  let insertY = randomValueFromArray(yItems);
  let insertZ = randomValueFromArray(zItems);

  story = story.replace(/:insertX:/g, customName ? customName : insertX);

  if (unit === 'uk') {
    story = story.replace('94 fahrenheit', Math.round((94 - 32) * 5 / 9) + ' centigrade');
    story = story.replace('300 pounds', Math.round(300 / 14) + ' stone');
  }

  story = story.replace(':insertY:', insertY);
  story = story.replace(':insertZ:', insertZ);

  storyContainer.textContent = story;
}

function randomValueFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
