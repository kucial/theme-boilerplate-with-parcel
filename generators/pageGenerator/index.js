// page generator
// generate {page}.html, js/pages/{page}.js & css/pages/{page}.scss
const fs = require('fs');
const path = require('path');

const pageExists = (name) => {
  return fs.existsSync(path.resolve('./src', name + '.html'));
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
          return pageExists(value)
            ? 'A page with this name already exists'
            : true;
        }
        return 'The name is required';
      },
      default: 'index',
    },
  ],
  actions: () => {
    const actions = [
      {
        type: 'add',
        path: '../src/{{dashCase name}}.html',
        templateFile: './pageGenerator/index.html.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/css/pages/{{dashCase name}}.scss',
        templateFile: './pageGenerator/index.scss.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: '../src/js/pages/{{dashCase name}}.js',
        templateFile: './pageGenerator/index.js.hbs',
        abortOnFail: true,
      },
    ];
    return actions;
  },
};
