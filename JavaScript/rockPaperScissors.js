const getUserChoice = (userInput) => {
  if (userInput === null) {
    console.log('User input is null. Please provide a valid input.');
    return null;
  }

  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log(`Did not enter a valid option. Rock, paper, and scissors are the only valid options. You have entered ${userInput}.`);
    return userInput = 'Invalid'
  }
};

const getComputerChoice = () => {
  const ComputerChoice = Math.floor(Math.random() * 3);
  if (ComputerChoice === 0) {
    return 'rock';
  }else if(ComputerChoice === 1) {
    return 'paper';
  }else if(ComputerChoice === 2) {
    return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!';
    } else {
      return 'User wins!';
    }
  } else if (userChoice === 'Invalid' || userChoice === null) {
      return 'Computer wins by default!';
  //Cheat code to always win =)
  } else if (userChoice === 'bomb') {
      return 'User wins!';
  }
};

const playGame = () => {
console.log('User choice:', userChoice);
console.log('Computer choice:', computerChoice);
console.log(determineWinner(userChoice, computerChoice));
};

const userChoice = getUserChoice('Matt');
const computerChoice = getComputerChoice();
playGame()
