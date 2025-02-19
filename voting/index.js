const userName = document.querySelector('.user-name');
const userId = document.querySelector('.user-id');
const votingForm = document.querySelector('.voting-form');
const voteOptions = document.querySelector('.vote-options');

const voteResults = document.querySelector('.vote-results');

const validUserIDs = new Map([
  ['user1', '12345678'],
  ['user2', '45678901'],
  ['user3', '78901234'],
  ['user4', '23456789'],
  ['user5', '56789012'],
]);

const votes = new Map();
votes.set('Opcja1', 0);
votes.set('Opcja2', 0);
votes.set('Opcja3', 0);

const usersVoted = new Set();

const voting = (e) => {
  e.preventDefault();
  const user = userName.value;
  const id = userId.value;
  const vote = voteOptions.value;
  if (validUserIDs.get(user) === id) {
    if (usersVoted.has(user)) {
      alert('Już oddałeś głos!');
      return;
    } else {
      usersVoted.add(user);
      votes.set(vote, votes.get(vote) + 1);
    }
  } else {
    alert('Nie masz uprawnień do głosowania!');
    return;
  }

  updateResults();
};

const updateResults = () => {
  let output = '';
  for (const [option, count] of votes) {
    output += `${option}: ${count} głosów.<br/>`;
  }
  voteResults.innerHTML = output;
};

votingForm.addEventListener('submit', voting);
