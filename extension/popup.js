const ratingChips = document.querySelectorAll('#rating-chips .chip');
const yesnoChips = document.querySelectorAll('#yesno-chips .chip');
const commentEl = document.getElementById('comment');
const autoEl = document.getElementById('autosubmit');
const fillBtn = document.getElementById('fill-btn');
const statusEl = document.getElementById('status');

let selectedRating = 'agree';
let selectedYesNo = 'yes';

function activate(chips, value, attr) {
  chips.forEach(c => c.classList.toggle('active', c.dataset[attr] === value));
}

ratingChips.forEach(c => c.addEventListener('click', () => {
  selectedRating = c.dataset.rating;
  activate(ratingChips, selectedRating, 'rating');
  save();
}));
yesnoChips.forEach(c => c.addEventListener('click', () => {
  selectedYesNo = c.dataset.yesno;
  activate(yesnoChips, selectedYesNo, 'yesno');
  save();
}));

function save() {
  chrome.storage.local.set({
    selectedRating,
    selectedYesNo,
    comment: commentEl.value,
    autoSubmit: autoEl.checked,
  });
}
commentEl.addEventListener('input', save);
autoEl.addEventListener('change', save);

chrome.storage.local.get(['selectedRating', 'selectedYesNo', 'comment', 'autoSubmit'], (data) => {
  selectedRating = data.selectedRating || 'agree';
  selectedYesNo = data.selectedYesNo || 'yes';
  commentEl.value = data.comment || 'Good';
  autoEl.checked = data.autoSubmit !== false;
  activate(ratingChips, selectedRating, 'rating');
  activate(yesnoChips, selectedYesNo, 'yesno');
});

function setStatus(msg, isError) {
  statusEl.textContent = msg;
  statusEl.classList.toggle('error', !!isError);
}

fillBtn.addEventListener('click', async () => {
  setStatus('Filling...', false);
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab?.id) throw new Error('No active tab');

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      args: [{
        rating: selectedRating,
        yesno: selectedYesNo,
        comment: commentEl.value || '',
        autoSubmit: autoEl.checked,
      }],
      func: (cfg) => {
        const ratingMap = {
          'strongly agree': ['strongly agree'],
          'agree': ['agree'],
          'neutral': ['neutral', 'neither agree nor disagree', 'undecided'],
          'disagree': ['disagree'],
          'strongly disagree': ['strongly disagree'],
        };
        const yesnoMap = {
          'yes': ['yes'],
          'no': ['no'],
        };
        const ratingTargets = ratingMap[cfg.rating] || [cfg.rating];
        const yesnoTargets = yesnoMap[cfg.yesno] || [cfg.yesno];

        // Avoid ambiguous matches: 'agree' shouldn't match 'strongly agree' or 'disagree'
        const matches = (text, list) => list.some(t => text === t);

        let radioCount = 0;
        document.querySelectorAll('label, td, th, span, div').forEach(el => {
          const text = (el.innerText || '').trim().toLowerCase();
          if (!text) return;
          if (matches(text, ratingTargets) || matches(text, yesnoTargets)) {
            const radio = el.querySelector('input[type="radio"]');
            if (radio && !radio.checked) {
              radio.click();
              radioCount++;
            }
          }
        });

        let textareaCount = 0;
        if (cfg.comment) {
          document.querySelectorAll('textarea').forEach(t => {
            t.value = cfg.comment;
            t.dispatchEvent(new Event('input', { bubbles: true }));
            t.dispatchEvent(new Event('change', { bubbles: true }));
            textareaCount++;
          });
        }

        if (cfg.autoSubmit) {
          const submitBtn = document.querySelector('button[type="submit"], input[type="submit"]');
          if (submitBtn) submitBtn.click();
        }

        return { radioCount, textareaCount };
      },
    });
    setStatus('Done! Form filled ✨', false);
  } catch (e) {
    setStatus('Error: ' + (e?.message || 'failed'), true);
  }
});