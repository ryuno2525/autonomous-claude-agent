import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY not configured");
  return new Resend(key);
}

interface CheckItem {
  name: string;
  found: boolean;
  weight: number;
  tip?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { email, domain, score, grade, checks } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required" }, { status: 400 });
    }
    if (score === undefined || !grade || !checks) {
      return NextResponse.json({ error: "Missing scan results" }, { status: 400 });
    }

    const passed = checks.filter((c: CheckItem) => c.found);
    const failed = checks.filter((c: CheckItem) => !c.found);

    const passedHtml = passed
      .map((c: CheckItem) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#16a34a;">&#10003;</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${c.name}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;color:#666;">${c.weight}pts</td></tr>`)
      .join("");
    const failedHtml = failed
      .map((c: CheckItem) => `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#dc2626;">&#10007;</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${c.name}${c.tip ? `<br><span style="color:#999;font-size:12px;">${c.tip}</span>` : ""}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;color:#666;">${c.weight}pts</td></tr>`)
      .join("");

    const scoreColor = score >= 80 ? "#16a34a" : score >= 50 ? "#ca8a04" : "#dc2626";
    const domainDisplay = domain || "your website";

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f9fafb;margin:0;padding:20px;">
<div style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.1);">

<div style="background:linear-gradient(135deg,#3b82f6,#06b6d4);padding:32px;text-align:center;">
  <h1 style="color:#fff;margin:0;font-size:24px;">Privacy Compliance Report</h1>
  <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">${domainDisplay}</p>
</div>

<div style="padding:32px;text-align:center;">
  <div style="display:inline-block;width:120px;height:120px;border-radius:60px;border:6px solid ${scoreColor};line-height:108px;font-size:36px;font-weight:bold;color:${scoreColor};">
    ${score}
  </div>
  <p style="font-size:20px;font-weight:bold;color:${scoreColor};margin:12px 0 4px;">Grade: ${grade}</p>
  <p style="color:#666;font-size:14px;margin:0;">${passed.length} of ${checks.length} compliance checks passed</p>
</div>

${failed.length > 0 ? `
<div style="padding:0 32px 24px;">
  <h2 style="font-size:16px;color:#dc2626;margin:0 0 12px;">Missing Sections (${failed.length})</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${failedHtml}
  </table>
</div>
` : ""}

${passed.length > 0 ? `
<div style="padding:0 32px 24px;">
  <h2 style="font-size:16px;color:#16a34a;margin:0 0 12px;">Passed Checks (${passed.length})</h2>
  <table style="width:100%;border-collapse:collapse;font-size:14px;">
    ${passedHtml}
  </table>
</div>
` : ""}

${score < 80 ? `
<div style="padding:24px 32px;background:#fef2f2;border-top:1px solid #fecaca;">
  <h3 style="color:#991b1b;margin:0 0 8px;font-size:16px;">Fix Your Compliance Issues</h3>
  <p style="color:#666;font-size:13px;margin:0 0 16px;">
    PolicyForge generates GDPR/CCPA compliant policies covering all ${checks.length} checks. One-time payment, no subscription.
  </p>
  <table><tr><td>
    <a href="https://policyforge.autonomous-claude.com/?ref=email-report" style="display:inline-block;background:linear-gradient(135deg,#3b82f6,#06b6d4);color:#fff;text-decoration:none;padding:12px 24px;border-radius:8px;font-weight:bold;font-size:14px;">
      Generate a Compliant Policy &mdash; From $4.99
    </a>
  </td></tr></table>
  <p style="color:#999;font-size:11px;margin:12px 0 0;">Compared to Termly ($120/yr) or TermsFeed ($29-$199)</p>
</div>
` : `
<div style="padding:24px 32px;background:#f0fdf4;border-top:1px solid #bbf7d0;">
  <h3 style="color:#166534;margin:0 0 8px;font-size:16px;">Great Score!</h3>
  <p style="color:#666;font-size:13px;margin:0;">
    Your privacy policy covers most essential sections. Share your badge to show visitors your commitment to privacy.
  </p>
</div>
`}

<div style="padding:24px 32px;text-align:center;border-top:1px solid #eee;">
  <p style="color:#999;font-size:11px;margin:0;">
    Sent by <a href="https://policyforge.autonomous-claude.com/?ref=email" style="color:#3b82f6;">PolicyForge</a> &mdash; Free Privacy Compliance Scanner
    <br>Part of the <a href="https://dashboard-mocha-delta-98.vercel.app" style="color:#3b82f6;">Autonomous Claude Experiment</a>
  </p>
</div>

</div>
</body>
</html>`;

    const resend = getResend();
    await resend.emails.send({
      from: "PolicyForge <onboarding@resend.dev>",
      to: email,
      subject: `Privacy Compliance Report: ${domainDisplay} scored ${score}/100 (${grade})`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
