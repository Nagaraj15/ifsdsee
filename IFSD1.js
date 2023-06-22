const prompt = require('prompt-sync')();

class Politician {
  constructor(name, voteCount) {
    this.name = name;
    this.voteCount = voteCount;
  }
}

class NPartyPolitician {
  constructor(name) {
    this.name = name;
    this.politicians = [];
  }

  addPolitician(politician) {
    this.politicians.push(politician);
  }

  getMaxVoteCount() {
    let maxVoteCount = 0;
    let maxVotePolitician = null;

    for (const politician of this.politicians) {
      if (politician.voteCount > maxVoteCount) {
        maxVoteCount = politician.voteCount;
        maxVotePolitician = politician;
      }
    }

    return maxVotePolitician;
  }

  8
  getMinVoteCount() {
    let minVoteCount = Infinity;
    let minVotePolitician = null;

    for (const politician of this.politicians) {
      if (politician.voteCount < minVoteCount) {
        minVoteCount = politician.voteCount;
        minVotePolitician = politician;
      }
    }

    return minVotePolitician;
  }
}

function main() {
  const n = parseInt(prompt("Enter the number of party-politicians: "));
  const nPartyPolitician = new NPartyPolitician('N Party');

  for (let i = 0; i < n; i++) {
    const politicianName = prompt(`Enter politician's name ${i + 1}: `);
    const voteCount = parseInt(prompt(`Enter vote count for ${politicianName}: `));
    const politician = new Politician(politicianName, voteCount);
    nPartyPolitician.addPolitician(politician);
  }

  const maxVotePolitician = nPartyPolitician.getMaxVoteCount();
  const minVotePolitician = nPartyPolitician.getMinVoteCount();

  console.log(`Party-politician with the maximum vote count: ${maxVotePolitician.name}`);
  console.log(`Party-politician with the minimum vote count: ${minVotePolitician.name}`);
}

main();
