$(document).ready(function () {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === 'childList') {
        const sectionSelectors = [
          'section[aria-labelledby="accessible-list-0"]',
          'section[aria-labelledby="accessible-list-1"]',
          'section[aria-labelledby="accessible-list-2"]'
        ];

        sectionSelectors.forEach(selector => {
          const section = document.querySelector(selector);
          if (section) {
            section.style.visibility = 'hidden';
          }
        });
      }
    });
  });

  // body以下を監視する
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

