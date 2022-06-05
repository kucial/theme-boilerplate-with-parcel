const fs = require('fs');
const path = require('path');

const partialExists = (name) => {
  return fs.existsSync(
    path.resolve('./src/partials', name + '.html')
  );
};

module.exports = {
  description: 'Add a page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      validate: (value) => {
        if (/.+/.test(value)) {
          return partialExists(value)
            ? 'A partial with this name already exists'
            : true;
        }
        return 'The name is required';
      },
      default: 'index',
    },
    {
      type: 'confirm',
      name: 'hasStyle',
      default: false,
      message: 'Do you want to generate partial styles?',
    },
  ],
  actions: (data) => {
    const actions = [
      {
        type: 'add',
        path: '../src/partials/{{dashCase name}}.html',
        templateFile: './partialGenerator/index.html.hbs',
        abortOnFail: true,
      },
    ];
    if (data.hasStyle) {
      actions.push({
        type: 'add',
        path: '../src/css/partials/{{dashCase name}}.scss',
        templateFile: './partialGenerator/index.scss.hbs',
        abortOnFail: true,
      });
    }
    return actions;
  },
};
