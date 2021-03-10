const chalk = require('chalk')
const figlet = require('figlet')

const initCreateProject = (type) => {
  console.log()
  console.log(`Certo, vamos criar um ${type}!`)
  console.log()
}

const showWelcome = () => {
  console.log(chalk.hex('#FF6B19')(figlet.textSync('Starbem CLI')))
  console.log(`${chalk.green('Bem-Vindo a CLI da Starbem!, com ela você pode:')}`)
  console.log()
  console.log('* Criar um novo projeto com templates pré-definidos')
  console.log()
}

module.exports = {
  initCreateProject,
  showWelcome
}