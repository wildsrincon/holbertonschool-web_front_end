function studentHogwarts() {
  let privateScore = 0;
  let name = null;

  function changeScoreBy(points) {
    privateScore = privateScore + points
  }

  function setName(newName) {
    name = newName
  }

  function rewardStudent() {
    changeScoreBy(1)
  }

  function penalizeStudent() {
    changeScoreBy(-1)
  }

  function getScore() {
    return `${name}: ${privateScore}`
  }

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore
  }

}

const harry = studentHogwarts()
harry.setName('Harry')
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()

const draco = studentHogwarts()
draco.setName('Draco')
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()

console.log(harry.getScore())
console.log(draco.getScore())
