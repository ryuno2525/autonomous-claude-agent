(function() {
  var script = document.currentScript;
  var domain = script.getAttribute('data-domain') || window.location.hostname;
  var theme = script.getAttribute('data-theme') || 'dark';
  var size = script.getAttribute('data-size') || 'default';
  var containerId = script.getAttribute('data-container') || null;
  var BASE = 'https://policyforge.autonomous-claude.com';

  var colors = {
    A: { bg: '#059669', text: '#ffffff', label: 'Excellent' },
    B: { bg: '#2563eb', text: '#ffffff', label: 'Good' },
    C: { bg: '#d97706', text: '#ffffff', label: 'Fair' },
    D: { bg: '#dc2626', text: '#ffffff', label: 'Poor' },
    F: { bg: '#7f1d1d', text: '#ffffff', label: 'Critical' }
  };

  function createWidget(data) {
    var grade = data.grade || 'F';
    var score = data.score || 0;
    var color = colors[grade] || colors.F;
    var isCompact = size === 'compact';

    var container = containerId ? document.getElementById(containerId) : null;
    if (!container) {
      container = document.createElement('div');
      script.parentNode.insertBefore(container, script);
    }

    var bgColor = theme === 'light' ? '#ffffff' : '#111827';
    var textColor = theme === 'light' ? '#111827' : '#f9fafb';
    var borderColor = theme === 'light' ? '#e5e7eb' : '#374151';

    if (isCompact) {
      container.innerHTML =
        '<a href="' + BASE + '/check?scan=' + encodeURIComponent(domain) + '" target="_blank" rel="noopener" ' +
        'style="display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:' + bgColor + ';border:1px solid ' + borderColor + ';border-radius:6px;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:' + textColor + '">' +
        '<span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:' + color.bg + ';color:' + color.text + ';font-weight:700;font-size:14px">' + grade + '</span>' +
        '<span>Privacy Score <strong>' + score + '/100</strong></span>' +
        '</a>';
      return;
    }

    container.innerHTML =
      '<div style="display:inline-block;background:' + bgColor + ';border:1px solid ' + borderColor + ';border-radius:10px;padding:16px 20px;font-family:-apple-system,BlinkMacSystemFont,sans-serif;max-width:280px;box-shadow:0 1px 3px rgba(0,0,0,0.1)">' +
      '<div style="display:flex;align-items:center;gap:12px;margin-bottom:10px">' +
      '<div style="display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;background:' + color.bg + ';color:' + color.text + ';font-weight:800;font-size:20px">' + grade + '</div>' +
      '<div>' +
      '<div style="font-size:15px;font-weight:600;color:' + textColor + '">Privacy Score</div>' +
      '<div style="font-size:22px;font-weight:800;color:' + textColor + '">' + score + '<span style="font-size:14px;font-weight:400;opacity:0.6">/100</span></div>' +
      '</div></div>' +
      '<div style="font-size:12px;color:' + (theme === 'light' ? '#6b7280' : '#9ca3af') + ';margin-bottom:8px">' + color.label + ' \u2014 ' + (data.passed || 0) + '/' + (data.total || 10) + ' checks passed</div>' +
      '<a href="' + BASE + '/check?scan=' + encodeURIComponent(domain) + '" target="_blank" rel="noopener" ' +
      'style="display:block;text-align:center;padding:8px;background:#6366f1;color:#fff;border-radius:6px;text-decoration:none;font-size:13px;font-weight:500">View Full Report</a>' +
      '<div style="text-align:center;margin-top:8px"><a href="' + BASE + '" target="_blank" rel="noopener" style="font-size:11px;color:' + (theme === 'light' ? '#9ca3af' : '#6b7280') + ';text-decoration:none">Powered by PolicyForge</a></div>' +
      '</div>';
  }

  function showError() {
    var container = containerId ? document.getElementById(containerId) : null;
    if (!container) {
      container = document.createElement('div');
      script.parentNode.insertBefore(container, script);
    }
    var bgColor = theme === 'light' ? '#ffffff' : '#111827';
    var borderColor = theme === 'light' ? '#e5e7eb' : '#374151';
    container.innerHTML =
      '<a href="' + BASE + '/check?scan=' + encodeURIComponent(domain) + '" target="_blank" rel="noopener" ' +
      'style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:' + bgColor + ';border:1px solid ' + borderColor + ';border-radius:8px;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,sans-serif;font-size:13px;color:#9ca3af">' +
      'Check Privacy Compliance \u2192</a>';
  }

  var xhr = new XMLHttpRequest();
  xhr.open('GET', BASE + '/api/score?url=' + encodeURIComponent(domain));
  xhr.onload = function() {
    if (xhr.status === 200) {
      try { createWidget(JSON.parse(xhr.responseText)); } catch(e) { showError(); }
    } else { showError(); }
  };
  xhr.onerror = function() { showError(); };
  xhr.send();
})();
