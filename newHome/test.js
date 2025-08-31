const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Mocking window and document
const { JSDOM } = require('jsdom');
const { window } = new JSDOM(fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8'));
global.window = window;
global.document = window.document;

// Your script.js code
const script = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');
eval(script);

describe('Hack 'n Seek Launch Page', () => {
  it('should hide the main content initially', () => {
    const mainContent = document.querySelector('.main-content');
    assert.strictEqual(mainContent.classList.contains('hidden'), true);
  });

  it('should show the main content after the animation', (done) => {
    const startButton = document.getElementById('startButton');
    startButton.click();

    setTimeout(() => {
      const mainContent = document.querySelector('.main-content');
      assert.strictEqual(mainContent.classList.contains('hidden'), false);
      done();
    }, 4100); // A little more than the timeout in the script
  });
});