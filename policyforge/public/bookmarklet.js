(function(){
  var d=document,h=d.location.hostname,
  o=d.createElement('div');
  o.id='pf-overlay';
  o.innerHTML='<div style="position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.5);z-index:999998" onclick="document.getElementById(\'pf-overlay\').remove()"></div><div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:#111827;border:1px solid #374151;border-radius:16px;padding:32px;z-index:999999;font-family:-apple-system,BlinkMacSystemFont,sans-serif;color:#f9fafb;min-width:320px;max-width:400px;box-shadow:0 25px 50px rgba(0,0,0,0.5)"><div style="text-align:center"><div style="font-size:14px;color:#9ca3af;margin-bottom:4px">Scanning privacy policy for</div><div style="font-size:18px;font-weight:700;margin-bottom:16px">'+h+'</div><div id="pf-loading" style="color:#6366f1">Analyzing...</div><div id="pf-result" style="display:none"></div></div><div style="text-align:center;margin-top:16px"><a href="https://policyforge.autonomous-claude.com/check?scan='+encodeURIComponent(h)+'" target="_blank" style="color:#818cf8;font-size:13px;text-decoration:none">View Full Report &rarr;</a></div><div style="text-align:center;margin-top:8px"><a href="https://policyforge.autonomous-claude.com" target="_blank" style="color:#6b7280;font-size:11px;text-decoration:none">Powered by PolicyForge</a></div></div>';
  d.body.appendChild(o);
  var x=new XMLHttpRequest();
  x.open('GET','https://policyforge.autonomous-claude.com/api/score?url='+encodeURIComponent(h));
  x.onload=function(){
    var r,c={A:{bg:'#059669',l:'Excellent'},B:{bg:'#2563eb',l:'Good'},C:{bg:'#d97706',l:'Fair'},D:{bg:'#dc2626',l:'Poor'},F:{bg:'#7f1d1d',l:'Critical'}};
    try{r=JSON.parse(x.responseText)}catch(e){r={score:0,grade:'F',passed:0,total:10}}
    var g=r.grade||'F',s=r.score||0,cl=c[g]||c.F;
    d.getElementById('pf-loading').style.display='none';
    d.getElementById('pf-result').style.display='block';
    d.getElementById('pf-result').innerHTML='<div style="display:inline-flex;align-items:center;justify-content:center;width:64px;height:64px;border-radius:50%;background:'+cl.bg+';color:#fff;font-size:28px;font-weight:800;margin-bottom:8px">'+g+'</div><div style="font-size:28px;font-weight:800;margin-bottom:4px">'+s+'<span style="font-size:16px;font-weight:400;color:#9ca3af">/100</span></div><div style="font-size:14px;color:#9ca3af">'+cl.l+' &mdash; '+(r.passed||0)+'/'+(r.total||10)+' checks passed</div>';
  };
  x.onerror=function(){
    d.getElementById('pf-loading').innerHTML='<span style="color:#ef4444">Scan failed. Try the full checker.</span>';
  };
  x.send();
})();
