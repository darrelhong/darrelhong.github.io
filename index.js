// Create sortable for each semester
for (i = 1; i < 9; i++) {
  let el = document.getElementById('simpleList' + i);
  Sortable.create(el, {
    group: {
      name: 'shared',
      put: function(to) {
        return to.el.children.length < 7;
      }
      /*
      pull: function(to, from) {
        return from.el.children.length > 1;
      }
      */
    },
    animation: 150,
    ghostClass: 'ghost',
    onAdd: function(evt) {
      handleAddEvent(evt.item);
    }
  });
}
// Create sortable for buffer
Sortable.create(buffer, {
  group: 'shared',
  animation: 150,
  ghostClass: 'ghost',
  onAdd: function(evt) {
    evt.item.classList.remove('error');
    let modstr = evt.item.innerText.split(/\s/)[0];
    removeModule(modstr);
    console.log(activeModules);
    recheckAll();
  }
});

function handleAddEvent(eventItem) {
  let moduleStr = eventItem.innerText.split(/\s/)[0];
  activeModules.push(moduleStr);
  if (!prereqV2(moduleStr)) {
    eventItem.classList.add('error');
  }
  recheckAll();
  console.log(activeModules);
}
// Recheck prereq
function recheckAll() {
  console.log('recheck all');
  activeModules.forEach(activeMod => {
    if (!prereqV2(activeMod)) {
      document.querySelector(`#${activeMod}`).classList.add('error');
    } else {
      document.querySelector(`#${activeMod}`).classList.remove('error');
    }
  });
}

function removeModule(modStr) {
  activeModules.splice(activeModules.indexOf(modStr), 1);
}
// Helper function
function hasPrereq(module) {
  let contains = false;
  let prereq = moduleData.get(module);
  if (prereq && prereq.length !== 0) {
    prereq.forEach(mod => {
      if (activeModules.includes(mod)) {
        contains = true;
      }
    });
    if (contains) {
      return true;
    }
    return false;
  }
  return true;
}

function prereqV2(module) {
  let contains = false;
  if (!moduleObjs.get(module).prereqTree) {
    contains = true;
  } else {
    activeModules.forEach(amod => {
      if (moduleObjs.get(amod).fulfillRequirements) {
        let fulfillRequirements = moduleObjs.get(amod).fulfillRequirements;
        if (fulfillRequirements.includes(module)) {
          contains = true;
        }
      }
    });
  }
  return contains;
}

async function getModData(module) {
  const url = `https://api.nusmods.com/v2/2018-2019/modules/${module}.json`;
  const cache = await caches.open('modcache');
  let res = await cache.match(url);
  if (!res) {
    await cache.add(url);
    res = await cache.match(url);
    let data = await res.json();
    return data;
  } else {
    let data = await res.json();
    return data;
  }
}

// getModData('CS2040').then(data => console.log(data));

const colors = ['blue', 'teal', 'yellow', 'orange', 'red'];
const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const moduleObjs = new Map();

const activeModules = [];
const moduleData = new Map([
  ['CS1101S', []],
  ['CS1231', []],
  ['IS1103', []],
  ['ES2660', []],
  ['MA1521', []],
  ['MA1101R', []],
  ['CS2101', []],
  [
    'CS2030',
    ['CS1010E', 'CS1010J', 'CS1010S', 'CS1010X', 'CS1010XCP', 'CS1101S']
  ],
  [
    'CS2040',
    ['CS1010E', 'CS1010J', 'CS1010S', 'CS1010X', 'CS1010XCP', 'CS1101S']
  ],
  [
    'CS2100',
    ['CS1010E', 'CS1010J', 'CS1010S', 'CS1010X', 'CS1010XCP', 'CS1101S']
  ],
  ['CS2103T', ['CS1020', 'CS1020E', 'CS2020', 'CS2030', 'CS2040', 'CS2040C']],
  ['CS2105', ['CS1020', 'CS1020E', 'CS2020', 'CS2030', 'CS2040', 'CS2040C']],
  ['CS2106', ['CS2100', 'EE2007', 'EE2024']],
  ['CS3230', ['CS2010', 'CS2020', 'CS2040', 'CS2040C', 'CS1231', 'MA1100']],
  ['ST2334', ['MA1102R', 'MA1312', 'MA1505', 'MA1507', 'MA1521']]
]);

// Autocomplete module search
const moduleListURL = 'https://api.nusmods.com/v2/2018-2019/moduleList.json';
let moduleList;
cachedFetch(moduleListURL)
  .then(resp => resp.json())
  .then(data => {
    moduleList = data;
    // console.log(moduleList);
    return moduleList;
  })
  .then(ml => {
    var input = document.getElementById('module-code');
    autocomplete({
      input: input,
      fetch: function(text, update) {
        text = text.toLowerCase();
        // you can also use AJAX requests instead of preloaded data
        var suggestions = ml.filter(n =>
          n.moduleCode.toLowerCase().includes(text)
        );
        update(suggestions);
      },
      render: function(item, value) {
        const itemElement = document.createElement('div');
        var regex = new RegExp(value, 'gi');
        var inner = item.moduleCode.replace(regex, function(match) {
          return '<strong>' + match + '</strong>';
        });
        itemElement.innerHTML = inner;
        itemElement.innerHTML += ` ${item.title}`;
        return itemElement;
      },
      onSelect: function(item) {
        input.value = item.moduleCode;
      },
      minLength: 1
    });
  });

// prettier-ignore
const csCoreModules = ['CS1010', 'CS1231', 'CS2030', 'CS2040', 'CS2100',
  'CS2103T', 'CS2105', 'CS2106', 'CS3230', 'IS1103', 'CS2101', 'ES2660', 'MA1521',
  'MA1101R', 'ST2334'];

const baCoreModules = [
  'BT1101',
  'CS1010',
  'EC1301',
  'IS1103',
  'MA1101R',
  'MA1521',
  'MKT1705X',
  'BT2101',
  'BT2102',
  'CS2030',
  'CS2040',
  'IS2101',
  'ST2334',
  'BT3102',
  'BT3102',
  'BT3103',
  'IS3103'
];

const isCoreModules = [
  'CS1010',
  'CS1231',
  'IS1103',
  'CS2030',
  'CS2040',
  'CS2102',
  'CS2105',
  'IS2101',
  'IS2102',
  'IS2103',
  'IS3103',
  'IS3106',
  'IS4100',
  'IS4103',
  'MA1301',
  'MA1312',
  'MA1521',
  'ST2334'
];

function generateRandomCard() {
  let color = getRandomItem(colors);
  // let color = '';
  let alphabet = getRandomItem(alphabets);
  let result = `<div class="list-group-item ${color}">
      Module ${alphabet} <span class='text-muted'>4 MCs</span>
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>`;
  return result;
}

function generateCourseCards(array) {
  array.forEach(mod => {
    getModData(mod)
      .then(data => {
        moduleObjs.set(data.moduleCode, data);
        return data;
      })
      .then(data => {
        let color = getRandomItem(colors);
        let card = `<div class="list-group-item ${color}" id="${
          data.moduleCode
        }">
      <a href="https://nusmods.com/modules/${
        data.moduleCode
      }" target="_blank">${data.moduleCode}</a>
      <span class='text-muted'>${data.moduleCredit} MCs</span>
      <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
        addToBuffer(card);
      });
  });
}
// Helper function
function getRandomItem(collection) {
  return collection[Math.floor(Math.random() * collection.length)];
}

// Global variables
const bufferEl = document.querySelector('#buffer');

function addToBuffer(htmlText) {
  let element = document.createElement('div');
  element.innerHTML = htmlText;
  bufferEl.insertBefore(element.firstChild, bufferEl.firstChild);
}
/*
// Generate random cards
for (i = 0; i < 5; i++) {
  addToBuffer(generateRandomCard());
}
*/

// Listen for '.close' events
document.addEventListener('click', function(e) {
  if (e.target.parentNode) {
    if (e.target.parentNode.matches('.close')) {
      removeModule(e.target.parentNode.parentNode.id);
      e.target.parentNode.parentNode.remove();
      recheckAll();
    }
  }
});

//Add module button. Creates module card
const moduleForm = document.querySelector('#module-form');
moduleForm.addEventListener('submit', function(e) {
  e.preventDefault();
  let moduleCode = document.querySelector('#module-code').value;
  if (moduleCode) {
    getModData(moduleCode)
      .then(data => {
        moduleObjs.set(data.moduleCode, data);
        return data;
      })
      .then(data => {
        let elChild = document.createElement('div');
        let color = getRandomItem(colors);
        elChild.innerHTML = `
      <div class="list-group-item ${color}" id="${data.moduleCode}">
      <a href="https://nusmods.com/modules/${
        data.moduleCode
      }" target="_blank">${data.moduleCode}</a>
      <span class='text-muted'>${data.moduleCredit} MCs</span>
      <button type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
      </button>
      </div>`;
        bufferEl.insertBefore(elChild, buffer.firstChild);
        document.querySelector('#module-code').value = '';
      });
  }
});
// Course selector.
const courseForm = document.querySelector('#course-select');
courseForm.addEventListener('submit', function(e) {
  e.preventDefault();
  document.querySelector('#course-button').disabled = true;
  let course = document.querySelector('#course').value;
  console.log(course);
  switch (course) {
    case 'Computer Science':
      generateCourseCards(csCoreModules);
      break;
    case 'Business Analytics':
      generateCourseCards(baCoreModules);
      break;
    case 'Information Systems':
      generateCourseCards(isCoreModules);
      break;
  }
});

function enableGenButton() {
  document.querySelector('#course-button').disabled = false;
}

// Toggle button 'active' class
const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', function() {
  this.classList.toggle('active');
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', function() {
  this.classList.toggle('active');
});

// Add year 5
function addYear() {
  document.getElementById('add-year').remove();
  let el = document.createElement('div');
  let content = `
    <div class="col-md-3" id="yr5">
      <div class="card border-info mb-3 bg-light">
        <div class="card-header bg-info">Year 5 Sem 1</div>
        <div id="simpleList9" class="list-group"></div>
       </div>
    </div>
    <div class="col-md-3" id="yr5">
    <div class="card border-info mb-3 bg-light">
      <div class="card-header bg-info">Year 5 Sem 2</div>
      <div id="simpleList10" class="list-group"></div>
    </div>
  </div>`;
  document.getElementById('collapse2').innerHTML += content;
  for (i = 1; i < 11; i++) {
    let str = 'simpleList' + i;
    let el = document.getElementById('simpleList' + i);
    Sortable.create(el, {
      group: {
        name: 'shared',
        put: function(to) {
          return to.el.children.length < 7;
        }
        /*
        pull: function(to, from) {
          return from.el.children.length > 1;
        }
        */
      },
      animation: 150,
      ghostClass: 'ghost',
      onAdd: function(evt) {
        handleAddEvent(evt.item);
      }
    });
  }
}

function cachedFetch(url, options) {
  let expiry = 24 * 60 * 60; // 1 day expiry
  if (typeof options === 'number') {
    expiry = options;
    options = undefined;
  } else if (typeof options === 'object') {
    // I hope you didn't set it to 0 seconds
    expiry = options.seconds || expiry;
  }
  // Use the URL as the cache key to sessionStorage
  let cacheKey = url;
  let cached = localStorage.getItem(cacheKey);
  let whenCached = localStorage.getItem(cacheKey + ':ts');
  if (cached !== null && whenCached !== null) {
    // it was in sessionStorage! Yay!
    // Even though 'whenCached' is a string, this operation
    // works because the minus sign converts the
    // string to an integer and it will work.
    let age = (Date.now() - whenCached) / 1000;
    if (age < expiry) {
      let response = new Response(new Blob([cached]));
      return Promise.resolve(response);
    } else {
      // We need to clean up this old key
      localStorage.removeItem(cacheKey);
      localStorage.removeItem(cacheKey + ':ts');
    }
  }

  return fetch(url, options).then(response => {
    // let's only store in cache if the content-type is
    // JSON or something non-binary
    if (response.status === 200) {
      let ct = response.headers.get('Content-Type');
      if (ct && (ct.match(/application\/json/i) || ct.match(/text\//i))) {
        // There is a .json() instead of .text() but
        // we're going to store it in sessionStorage as
        // string anyway.
        // If we don't clone the response, it will be
        // consumed by the time it's returned. This
        // way we're being un-intrusive.
        response
          .clone()
          .text()
          .then(content => {
            localStorage.setItem(cacheKey, content);
            localStorage.setItem(cacheKey + ':ts', Date.now());
          });
      }
    }
    return response;
  });
}