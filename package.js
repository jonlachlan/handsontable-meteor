Package.describe({
  name: 'awsp:handsontable',
  version: '0.5.1',
  summary: 'Quote from origin: Handsontable is a minimalist Excel-like data grid editor for HTML & JavaScript',
  git: 'https://github.com/awsp/handsontable-meteor',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('awsp:handsontable.js');
  api.use('jquery', 'client');

  api.addFiles([
    'bower_components/pikaday/css/pikaday.css',
    'bower_components/pikaday/pikaday.js',
    'bower_components/moment/min/moment.min.js',
    'lib/handsontable.meteor.0.14.1.css',
    'lib/handsontable.meteor.0.14.1.js',
    'styles/custom.css'
  ], 'client');

  api.export('Handsontable', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('awsp:handsontable');
  api.addFiles('awsp:handsontable-tests.js');
});
