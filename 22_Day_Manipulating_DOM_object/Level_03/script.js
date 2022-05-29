// EXERCISES

// Level 3
// 1
import { asabenehChallenges2020 } from './challenges_info.js';
/* Setting up font family */
document.body.style.fontFamily = 'Roboto';

const wrapper = document.querySelector('.wrapper');
/* wrapper style */
wrapper.style.width = '1200px';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'center';
wrapper.style.gap = '20px';
wrapper.style.padding = '40px 0';
wrapper.style.margin = '0 auto';

const year = document.createElement('span');
/* year style */
year.textContent = asabenehChallenges2020.challengeYear;
year.style.fontSize = '84px';

const randomColor = function (element) {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  element.style.color = `rgb(${arr.join(', ')})`;
};
setInterval(() => randomColor(year), 1000);

const description = document.createElement('h1');
description.textContent = asabenehChallenges2020.description + ' ';
description.appendChild(year);
wrapper.appendChild(description);

const challengeSubtitle = document.createElement('h3');
/* challengeSubtitle style */
challengeSubtitle.textContent = asabenehChallenges2020.challengeSubtitle;
challengeSubtitle.style.textDecoration = 'underline';
challengeSubtitle.style.textDecorationThickness = '2px';
challengeSubtitle.style.fontWeight = '400';
wrapper.appendChild(challengeSubtitle);

const timeParagraph = document.createElement('p');
timeParagraph.style.fontSize = '18px';
timeParagraph.style.padding = '12px 30px';

const getTime = function (paragraph) {
  const now = new Date();
  const year = String(now.getFullYear());
  const month = now.toLocaleDateString('default', { month: 'long' });
  const date = String(now.getDate());
  const hour = String(now.getHours());
  const minute = String(now.getMinutes());
  const second = String(now.getSeconds());

  const addZero = function (time) {
    if (time.length == 1) {
      time = '0'.concat(time);
      return time;
    } else {
      return time;
    }
  };
  return (paragraph.textContent = `${month} ${addZero(date)}, ${year} ${addZero(
    hour
  )}:${addZero(minute)}:${addZero(second)}`);
};
setInterval(() => getTime(timeParagraph), 1000);
setInterval(() => {
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }

  timeParagraph.style.backgroundColor = `rgb(${arr.join(', ')})`;
}, 1000);

wrapper.appendChild(timeParagraph);

const challengesContainer = document.createElement('div');
challengesContainer.style.width = '900px';
challengesContainer.style.margin = '0 auto';
challengesContainer.style.display = 'flex';
challengesContainer.style.flexDirection = 'column';
challengesContainer.style.gap = '5px';
asabenehChallenges2020.challenges.forEach((item) => {
  const challenge = document.createElement('div');
  challenge.style.display = 'grid';
  challenge.style.alignItems = 'center';
  challenge.style.gridTemplateColumns = '4fr 2fr 2fr';
  challenge.style.padding = '30px';
  challenge.style.letterSpacing = '1px';

  const title = document.createElement('a');
  title.textContent = item.name;

  if (item.githubUrl.startsWith('https')) {
    title.href = item.githubUrl;
  }

  const details = document.createElement('details');
  const language = document.createElement('summary');
  language.textContent = item.name.slice(
    item.name.lastIndexOf('Of') + 3,
    item.name.length
  );
  language.style.fontWeight = '500';

  const description = document.createElement('span');
  description.style.display = 'flex';
  description.style.flexDirection = 'column';
  item.topics.forEach((topic) => {
    const p = document.createElement('p');
    p.textContent = topic;
    description.appendChild(p);
    p.style.margin = '5px 0';
  });
  details.appendChild(language);
  details.appendChild(description);

  const status = document.createElement('span');
  status.textContent = item.status;
  status.style.textAlign = 'right';
  status.style.justifySelf = 'end';

  if (status.textContent == 'Done') {
    challenge.style.backgroundColor = '#21BF73';
  } else if (status.textContent == 'Ongoing') {
    challenge.style.backgroundColor = '#FDDB3A';
  } else if (status.textContent == 'Coming') {
    challenge.style.backgroundColor = '#FD5E53';
  }

  challenge.appendChild(title);
  challenge.appendChild(details);
  challenge.appendChild(status);
  challengesContainer.append(challenge);
});

wrapper.appendChild(challengesContainer);

const authorTitle = document.createElement('h1');
authorTitle.textContent =
  asabenehChallenges2020.author.firstName +
  ' ' +
  asabenehChallenges2020.author.lastName;

authorTitle.style.marginTop = '15px';
wrapper.appendChild(authorTitle);

const socialLinksContainer = document.createElement('div');
socialLinksContainer.style.display = 'flex';
socialLinksContainer.style.gap = '10px';
socialLinksContainer.style.marginBottom = '30px';

asabenehChallenges2020.author.socialLinks.forEach((link) => {
  const span = document.createElement('span');
  const a = document.createElement('a');
  a.href = link.url;
  const social = link.fontawesomeIcon;
  a.innerHTML = social;
  span.appendChild(a);

  socialLinksContainer.appendChild(span);
});

const allLinks = socialLinksContainer.getElementsByClassName('fab');
for (const link of allLinks) {
  link.style.fontSize = '32px';
  link.style.color = 'black';
}
wrapper.appendChild(socialLinksContainer);

const authorBio = document.createElement('p');
authorBio.textContent = asabenehChallenges2020.author.bio;
authorBio.style.textAlign = 'center';
authorBio.style.width = '800px';
authorBio.style.fontSize = '18px';
authorBio.style.marginBottom = '50px';
wrapper.appendChild(authorBio);

const authorAbout = document.createElement('div');
authorAbout.style.display = 'flex';
authorAbout.style.gap = '100px';

const titleBlock = document.createElement('div');
titleBlock.innerHTML = '<h2>Titles</h2>';
titleBlock.childNodes[0].style.marginBottom = '10px';
titleBlock.childNodes[0].style.fontWeight = '500';

const allTitles = asabenehChallenges2020.author.titles;
allTitles.forEach((title) => {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.alignItems = 'center';

  div.style.gap = '7px';
  div.style.marginBottom = '10px';
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span1.style.width = '24px';
  span1.style.display = 'flex';
  span1.style.justifyContent = 'center';
  span1.textContent = title[0];
  span1.style.marginBottom = '1px';
  span2.textContent = title[1];

  div.appendChild(span1);
  div.appendChild(span2);

  titleBlock.appendChild(div);
});
authorAbout.appendChild(titleBlock);

const skillBlock = document.createElement('div');
skillBlock.innerHTML = '<h2>Skills</h2>';
skillBlock.childNodes[0].style.marginBottom = '10px';
skillBlock.childNodes[0].style.fontWeight = '500';

const allSkills = asabenehChallenges2020.author.skills;
allSkills.forEach((skill) => {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.alignItems = 'center';

  div.style.gap = '7px';
  div.style.marginBottom = '10px';
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  span1.textContent = `✅`;
  span1.style.marginBottom = '1px';
  span2.textContent = skill;

  div.appendChild(span1);
  div.appendChild(span2);

  skillBlock.appendChild(div);
});
authorAbout.appendChild(skillBlock);

const qualificationsBlock = document.createElement('div');
qualificationsBlock.innerHTML = '<h2>Qualifications</h2>';
qualificationsBlock.childNodes[0].style.marginBottom = '10px';
qualificationsBlock.childNodes[0].style.fontWeight = '500';

const allQualifications = asabenehChallenges2020.author.qualifications;
allQualifications.forEach((qualification) => {
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.gap = '7px';
  div.style.marginBottom = '10px';

  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  span1.style.marginBottom = '1px';
  span1.style.width = '24px';
  span1.style.display = 'flex';
  span1.style.justifyContent = 'center';

  if (qualification.includes('Ongoing')) {
    span1.textContent = '📖';
    div.appendChild(span1);
  } else {
    span1.textContent = '👨‍🎓';
    div.appendChild(span1);
  }

  span2.textContent = qualification;

  div.appendChild(span1);
  div.appendChild(span2);

  qualificationsBlock.appendChild(div);
});
authorAbout.appendChild(qualificationsBlock);

wrapper.appendChild(authorAbout);
const keywordsContainer = document.createElement('div');
keywordsContainer.style.width = '800px';
const keyword = document.createElement('h2');
keyword.textContent = 'Keywords';
keyword.style.fontWeight = '500';
keyword.style.margin = '15px 0';
keywordsContainer.appendChild(keyword);

const keywordContainer = document.createElement('div');
keywordContainer.style.display = 'flex';
keywordContainer.style.flexWrap = 'wrap';
keywordContainer.style.margin = '0 auto';

keywordContainer.style.width = '720px';
keywordContainer.style.rowGap = '10px';
keywordContainer.style.columnGap = '15px';

const allKeywords = asabenehChallenges2020.keywords;
allKeywords.forEach((keyword) => {
  const span = document.createElement('span');
  span.style.flexGrow = '1';
  const arr = [];
  for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 256);
    arr.push(random);
  }
  span.style.backgroundColor = `rgb(${arr.join(', ')})`;
  span.style.borderRadius = '20px';
  span.style.fontSize = '18px';
  span.style.fontWeight = '500';
  span.style.padding = '5px';
  span.textContent = '# ' + keyword;
  keywordContainer.appendChild(span);
});

keywordsContainer.appendChild(keywordContainer);
wrapper.appendChild(keywordsContainer);

// END OF THE EXERCISES
