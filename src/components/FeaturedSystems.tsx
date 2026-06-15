import { motion } from "motion/react";
import SplitText from "./SplitText";

// Vector Screen 1: Email Lead Qualification & Follow-Up System
const CRM_PIPELINE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="20" width="750" height="60" rx="10" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <circle cx="50" cy="50" r="6" fill="%2310B981" />
  <text x="68" y="55" fill="%23FFFFFF" font-size="14" font-weight="600">LIVE LEAD DESK</text>
  
  <text x="320" y="55" fill="%238C8EFF" font-size="13" font-weight="500">Auto Engaged: <tspan fill="%23FFF" font-weight="700">98.4%</tspan></text>
  <text x="540" y="55" fill="%238C8EFF" font-size="13" font-weight="500">Avg Response: <tspan fill="%23FFF" font-weight="700">12s</tspan></text>
  <text x="730" y="55" fill="%2310B981" font-size="12" font-weight="bold" text-anchor="end">READY</text>
  
  <rect x="25" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="40" y="125" fill="%2394A3B8" font-size="11" font-weight="800" letter-spacing="1">INCOMING LEADS</text>
  <circle cx="178" cy="121" r="9" fill="%231E1C3F" />
  <text x="178" y="125" fill="%23FFF" font-size="10" font-weight="bold" text-anchor="middle">2</text>
  
  <rect x="35" y="145" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="45" y="165" fill="%23FFF" font-size="11" font-weight="700">Marcus Chen</text>
  <text x="45" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Real Estate Buyer</text>
  <rect x="45" y="195" width="75" height="18" rx="4" fill="%233B82F6" fill-opacity="0.2" />
  <text x="50" y="207" fill="%2360A5FA" font-size="8" font-weight="bold">WEB_INQUIRY</text>
  <text x="135" y="207" fill="%2394A3B8" font-size="9" text-anchor="middle">1m ago</text>

  <rect x="35" y="240" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="45" y="260" fill="%23FFF" font-size="11" font-weight="700">Sarah Jenkins</text>
  <text x="45" y="275" fill="%238C8EFF" font-size="9" font-weight="600">Commercial Tenant</text>
  <rect x="45" y="290" width="70" height="18" rx="4" fill="%23EAB308" fill-opacity="0.15" />
  <text x="50" y="302" fill="%23FACC15" font-size="8" font-weight="bold">ZILLOW_API</text>
  <text x="135" y="302" fill="%2394A3B8" font-size="9" text-anchor="middle">5m ago</text>

  <rect x="215" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="230" y="125" fill="%235F62FF" font-size="11" font-weight="800" letter-spacing="1">AI ENGAGEMENT</text>
  <circle cx="368" cy="121" r="9" fill="%231E1C3F" />
  <text x="368" y="125" fill="%235F62FF" font-size="10" font-weight="bold" text-anchor="middle">1</text>
  
  <rect x="225" y="145" width="155" height="95" rx="6" fill="%2314132F" stroke="%235F62FF" stroke-width="1" />
  <text x="235" y="165" fill="%23FFF" font-size="11" font-weight="700">Derrick Watson</text>
  <text x="235" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Budget: $1.2M</text>
  <rect x="235" y="195" width="115" height="18" rx="4" fill="%2310B981" fill-opacity="0.15" />
  <circle cx="242" cy="204" r="3" fill="%2310B981" />
  <text x="250" y="207" fill="%2334D399" font-size="8" font-weight="bold">AI CHAT ENGAGED</text>
  <text x="235" y="228" fill="%2394A3B8" font-size="8" font-style="italic">Asking timing requirements...</text>

  <rect x="405" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="420" y="125" fill="%2310B981" font-size="11" font-weight="800" letter-spacing="1">QUALIFIED LEADS</text>
  
  <rect x="415" y="145" width="155" height="95" rx="6" fill="%2314132F" stroke="%2310B981" stroke-width="1" />
  <text x="425" y="165" fill="%23FFF" font-size="11" font-weight="700">Alice Vance</text>
  <text x="425" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Pre-approved: Yes</text>
  <rect x="425" y="195" width="105" height="18" rx="4" fill="%2310B981" fill-opacity="0.2" />
  <text x="430" y="207" fill="%2334D399" font-size="8" font-weight="bold">READY FOR CALENDAR</text>
  <text x="425" y="228" fill="%23F59E0B" font-size="9" font-weight="700">★ Hot Opportunity</text>

  <rect x="595" y="100" width="175" height="370" rx="8" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="610" y="125" fill="%23EC4899" font-size="11" font-weight="800" letter-spacing="1">CRM SYNCED</text>
  
  <rect x="605" y="145" width="155" height="85" rx="6" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="615" y="165" fill="%23FFF" font-size="11" font-weight="700">Elena Rostova</text>
  <text x="615" y="180" fill="%238C8EFF" font-size="9" font-weight="600">Synced to HubSpot</text>
  <rect x="615" y="195" width="75" height="18" rx="4" fill="%23EC4899" fill-opacity="0.15" />
  <text x="620" y="207" fill="%23F472B6" font-size="8" font-weight="bold">COMPLETED</text>
  <text x="705" y="207" fill="%2394A3B8" font-size="9" text-anchor="middle">12m ago</text>
</svg>`;

// Vector Screen 2: AI Voice Receptionist System
const VOICE_AGENT_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="345" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">AI VOICE INTERFACE</text>
  <rect x="280" y="40" width="70" height="20" rx="10" fill="%2310B981" fill-opacity="0.15" />
  <circle cx="290" cy="50" r="3" fill="%2310B981" />
  <text x="298" y="54" fill="%2334D399" font-size="9" font-weight="bold">ACTIVE 24/7</text>
  
  <circle cx="197" cy="210" r="85" fill="none" stroke="%2325244C" stroke-width="2" />
  <circle cx="197" cy="210" r="65" fill="none" stroke="%235F62FF" stroke-width="1" stroke-dasharray="4 6" opacity="0.6" />
  <path d="M 100,210 Q 125,110 150,210 T 200,210 T 250,210 T 300,210" fill="none" stroke="%235F62FF" stroke-width="3" opacity="0.8" />
  <path d="M 110,210 Q 140,270 170,210 T 230,210 T 290,210" fill="none" stroke="%23EC4899" stroke-width="2" opacity="0.5" />
  <circle cx="197" cy="210" r="24" fill="%235F62FF" />
  <path d="M 191,202 L 191,218 M 197,198 L 197,222 M 203,202 L 203,218" stroke="%23FFF" stroke-width="3" stroke-linecap="round" />
  
  <text x="197" y="340" fill="%2394A3B8" font-size="11" font-weight="600" text-anchor="middle">SESSION DURATION: 1m 42s</text>
  <text x="197" y="365" fill="%23FFF" font-size="14" font-weight="bold" text-anchor="middle">+1 (415) 555-0192</text>
  <text x="197" y="385" fill="%238C8EFF" font-size="11" text-anchor="middle">Incoming Call Connected...</text>

  <rect x="390" y="25" width="385" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="410" y="55" fill="%2394A3B8" font-size="11" font-weight="800" letter-spacing="1">LIVE CONVERSATION TRANSCRIPT</text>
  
  <path d="M 410,85 h 250 r 6,0 0,6 v 40 r 0,6 -6,0 h -250 r -6,0 0,-6 v -40 r 0,-6 6,0 Z" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="420" y="105" fill="%238C8EFF" font-size="10" font-weight="bold">Caller [Inbound Customer]</text>
  <text x="420" y="122" fill="%23FFF" font-size="11">"Hi, I'd like to book an appointment for tomorrow afternoon."</text>
  
  <path d="M 505,155 h 250 r 6,0 0,6 v 45 r 0,6 -6,0 h -250 r -6,0 0,-6 v -45 r 0,-6 6,0 Z" fill="%231B1944" stroke="%235F62FF" stroke-width="1" />
  <text x="515" y="175" fill="%238C8EFF" font-size="10" font-weight="bold">AI Virtual Receptionist</text>
  <text x="515" y="192" fill="%23FFF" font-size="11">"Certainly! I have 3:30 PM open. May I get your name?"</text>

  <rect x="410" y="235" width="345" height="215" rx="8" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <text x="425" y="260" fill="%23FFF" font-size="13" font-weight="700">VOICE PERFORMANCE ANALYTICS</text>
  
  <text x="425" y="295" fill="%2394A3B8" font-size="11">First Contact Resolution Rate</text>
  <text x="740" y="295" fill="%2310B981" font-size="12" font-weight="bold" text-anchor="end">92.6%</text>
  <rect x="425" y="305" width="315" height="6" rx="3" fill="%231E1C3F" />
  <rect x="425" y="305" width="291" height="6" rx="3" fill="%2310B981" />
  
  <text x="425" y="345" fill="%2394A3B8" font-size="11">WhatsApp / GCal CRM Sync</text>
  <text x="740" y="345" fill="%235F62FF" font-size="12" font-weight="bold" text-anchor="end">Instant</text>
  
  <text x="425" y="380" fill="%2394A3B8" font-size="11">Average Call Handler Duration</text>
  <text x="740" y="380" fill="%23FFF" font-size="12" font-weight="bold" text-anchor="end">1m 15s</text>
</svg>`;

// Vector Screen 3: Invoice Automation System
const INVOICE_SOFTWARE_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="295" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">BILLING DESK STATUS</text>
  
  <rect x="40" y="85" width="265" height="75" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="40" y="80" fill="%235F62FF" font-size="8" font-weight="bold">ENGINE STATUS: ACTIVE</text>
  <text x="50" y="110" fill="%23FFF" font-size="12" font-weight="700">Month-to-Date Billings</text>
  <text x="50" y="132" fill="%2310B981" font-size="20" font-weight="950">$34,500.00</text>
  <text x="285" y="110" fill="%2310B981" font-size="10" font-weight="bold" text-anchor="end">↑ 14.5%</text>

  <rect x="40" y="175" width="265" height="150" rx="8" fill="%2311102A" stroke="%231F1D3D" stroke-width="1" />
  <text x="50" y="200" fill="%2394A3B8" font-size="11" font-weight="700">ENGINE EVENT TRACKER</text>
  
  <text x="50" y="230" fill="%23F59E0B" font-size="10" font-weight="bold">● SCHEDULED RUN</text>
  <text x="50" y="245" fill="%238C8EFF" font-size="11">n8n: Check pending contracts</text>
  
  <text x="50" y="280" fill="%2310B981" font-size="10" font-weight="bold">✔ CLIENT_RECURRING</text>
  <text x="50" y="295" fill="%23EEF2F6" font-size="11">Gmail: INV-12345-1 auto generated</text>
  <circle cx="280" cy="285" r="5" fill="%2310B981" />

  <rect x="40" y="340" width="265" height="115" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <text x="55" y="365" fill="%23FFF" font-size="12" font-weight="bold">Outstanding invoices</text>
  <text x="55" y="385" fill="%23F43F5E" font-size="11" font-style="italic">0 Delayed Invoices</text>
  <text x="55" y="415" fill="%2394A3B8" font-size="11">All clients auto-billed on 1st</text>
  
  <g transform="translate(345, 25)">
    <rect width="430" height="450" rx="12" fill="%23FFFFFF" stroke="%23CBD5E1" stroke-width="1" />
    
    <path d="M 0,0 L 430,0 L 430,90 Q 320,110 215,90 T 0,110 Z" fill="%230F52BA" />
    <text x="25" y="55" fill="%23FFFFFF" font-size="24" font-weight="bold" letter-spacing="1">INVOICE</text>
    <text x="405" y="50" fill="%23FFFFFF" font-size="10" text-anchor="end">NO: INV-12345-1</text>
    
    <text x="25" y="140" fill="%231E293B" font-size="11" font-weight="bold">Bill To:</text>
    <text x="25" y="155" fill="%23475569" font-size="10">Estelle Darcy</text>
    <text x="25" y="170" fill="%23475569" font-size="10">123 Anywhere St., Any City</text>
    
    <text x="250" y="140" fill="%231E293B" font-size="11" font-weight="bold">From:</text>
    <text x="250" y="155" fill="%23475569" font-size="10">Samira Hadid</text>
    <text x="250" y="170" fill="%23475569" font-size="10">123 Anywhere St., Any City</text>
    
    <text x="25" y="210" fill="%23475569" font-size="10" font-weight="bold">Date: 26 June 2022</text>
    
    <rect x="25" y="230" width="380" height="25" fill="%230F52BA" rx="3" />
    <text x="35" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold">Description</text>
    <text x="220" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Qty</text>
    <text x="280" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Price</text>
    <text x="385" y="246" fill="%23FFFFFF" font-size="9" font-weight="bold" text-anchor="middle">Total</text>
    
    <text x="35" y="280" fill="%23475569" font-size="9" font-weight="500">Intelligent Automation Setup</text>
    <text x="220" y="280" fill="%23475569" font-size="9" text-anchor="middle">1</text>
    <text x="280" y="280" fill="%23475569" font-size="9" text-anchor="middle">$1,250.00</text>
    <text x="385" y="280" fill="%23475569" font-size="9" text-anchor="middle">$1,250.00</text>
    <line x1="25" y1="295" x2="405" y2="295" stroke="%23E2E8F0" stroke-width="1" />
    
    <text x="35" y="320" fill="%23475569" font-size="9" font-weight="500">n8n Custom integration workflow</text>
    <text x="220" y="320" fill="%23475569" font-size="9" text-anchor="middle">1</text>
    <text x="280" y="320" fill="%23475569" font-size="9" text-anchor="middle">$1,750.00</text>
    <text x="385" y="320" fill="%23475569" font-size="9" text-anchor="middle">$1,750.00</text>
    <line x1="25" y1="335" x2="405" y2="335" stroke="%23E2E8F0" stroke-width="1" />
    
    <rect x="250" y="355" width="155" height="30" fill="%230F52BA" rx="3" />
    <text x="260" y="374" fill="%23FFFFFF" font-size="10" font-weight="bold">Total Due</text>
    <text x="395" y="374" fill="%23FFFFFF" font-size="10" font-weight="bold" text-anchor="end">$3,000.00</text>
    
    <text x="25" y="420" fill="%230F52BA" font-size="16" font-weight="bold">Thank You!</text>
  </g>
</svg>`;

// Vector Screen 4: WhatsApp Automation System For Businesses
const WHATSAPP_AUTOMATION_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%" style="background-color:%23080718; font-family:'Inter', system-ui, sans-serif;">
  <g stroke="%23ffffff" stroke-width="1" opacity="0.02">
    <path d="M0,50 H800 M0,100 H800 M0,150 H800 M0,200 H800 M0,250 H800 M0,300 H800 M0,350 H800 M0,400 H800 M0,450 H800" />
    <path d="M100,0 V500 M200,0 V500 M300,0 V500 M400,0 V500 M500,0 V500 M600,0 V500 M700,0 V500" />
  </g>
  
  <rect x="25" y="25" width="275" height="450" rx="12" fill="%230E0D25" stroke="%231F1D3D" stroke-width="1" />
  <text x="45" y="55" fill="%23FFF" font-size="14" font-weight="700">WHATSAPP ACTIVE RUNS</text>
  
  <rect x="35" y="80" width="255" height="60" rx="8" fill="%2314132F" stroke="%2310B981" stroke-width="1" />
  <circle cx="65" cy="110" r="16" fill="%23128C7E" />
  <text x="65" y="114" fill="%23FFF" font-size="14" font-weight="950" text-anchor="middle">W</text>
  <text x="95" y="105" fill="%23FFF" font-size="11" font-weight="bold">Global Group Logistics</text>
  <text x="95" y="122" fill="%2310B981" font-size="10" font-weight="bold">ACTIVE CHATFLOW</text>
  <circle cx="265" cy="110" r="5" fill="%2310B981" />

  <rect x="35" y="150" width="255" height="60" rx="8" fill="%2314132F" stroke="%2322214E" stroke-width="1" />
  <circle cx="65" cy="180" r="16" fill="%233B82F6" />
  <text x="65" y="184" fill="%23FFF" font-size="14" font-weight="950" text-anchor="middle">J</text>
  <text x="95" y="175" fill="%23FFF" font-size="11" font-weight="bold">James Sterling</text>
  <text x="95" y="192" fill="%238C8EFF" font-size="10">Session Standby</text>
  
  <rect x="35" y="235" width="255" height="215" rx="8" fill="%2311102A" stroke="%2325244C" stroke-width="1" />
  <text x="45" y="260" fill="%2394A3B8" font-size="10" font-weight="800" letter-spacing="0.5">MESSAGING ENGINE METRICS</text>
  
  <text x="45" y="295" fill="%23FFF" font-size="11">Total Automated Conversations</text>
  <text x="45" y="315" fill="%2310B981" font-size="15" font-weight="bold">12,480 sessions</text>
  
  <text x="45" y="350" fill="%23FFF" font-size="11">Chatbot Click-Through-Rate</text>
  <text x="45" y="370" fill="%235F62FF" font-size="15" font-weight="bold">42.8% conversion</text>

  <rect x="45" y="400" width="235" height="35" rx="4" fill="%2310B981" fill-opacity="0.1" stroke="%2310B981" stroke-opacity="0.2" />
  <text x="55" y="421" fill="%2334D399" font-size="9" font-weight="bold">✔ WhatsApp Cloud API Active</text>

  <rect x="315" y="25" width="460" height="450" rx="12" fill="%23050E0C" stroke="%231F3D2A" stroke-width="1" />
  
  <rect x="315" y="25" width="460" height="50" rx="12" fill="%23075E54" />
  <circle cx="345" cy="50" r="14" fill="%23128C7E" />
  <text x="345" y="54" fill="%23FFF" font-size="12" font-weight="bold" text-anchor="middle">WA</text>
  <text x="375" y="52" fill="%23FFF" font-size="12" font-weight="bold">Automated WhatsApp Receptionist</text>
  <text x="375" y="66" fill="%2334D399" font-size="9" font-weight="600">Online &amp; Instant</text>

  <path d="M 335,110 h 200 r 6,0 0,6 v 45 r 0,6 -6,0 h -200 r -6,0 0,-6 v -45 r 0,-6 6,0 Z" fill="%23262D31" />
  <text x="345" y="130" fill="%23ECEFF1" font-size="11">"Hi, I saw your advertisement. Are you guys currently available for real estate booking?"</text>
  <text x="525" y="152" fill="%2390A4AE" font-size="8" text-anchor="end">14:02</text>

  <path d="M 525,180 h 200 r 6,0 0,6 v 85 r 0,6 -6,0 h -200 r -6,0 0,-6 v -85 r 0,-6 6,0 Z" fill="%23056162" />
  <text x="535" y="200" fill="%23FFF" font-size="11" font-weight="600">Smart Automation Bot</text>
  <text x="535" y="217" fill="%23E0F2F1" font-size="11">"Hi there! Yes we are! 📅 Here are available real estate consultation spots today:"</text>
  <text x="535" y="234" fill="%23E0F2F1" font-size="11">"1. 2:00 PM"</text>
  <text x="535" y="251" fill="%23E0F2F1" font-size="11">"2. 4:30 PM"</text>
  <text x="535" y="268" fill="%2390A4AE" font-size="8">14:02 - Auto Response</text>

  <path d="M 335,295 h 50 r 6,0 0,6 v 25 r 0,6 -6,0 h -50 r -6,0 0,-6 v -25 r 0,-6 6,0 Z" fill="%23262D31" />
  <text x="345" y="315" fill="%23ECEFF1" font-size="11">"1"</text>
  <text x="375" y="322" fill="%2390A4AE" font-size="8" text-anchor="end">14:03</text>

  <path d="M 505,340 h 240 r 6,0 0,6 v 65 r 0,6 -6,0 h -240 r -6,0 0,-6 v -65 r 0,-6 6,0 Z" fill="%23056162" />
  <text x="515" y="360" fill="%23FFF" font-size="11" font-weight="600">Smart Automation Bot</text>
  <text x="515" y="377" fill="%23E0F2F1" font-size="11">"Fantastic! You're booked for 2:00 PM today! I've sent confirmation to your email."</text>
  <text x="515" y="394" fill="%23E0F2F1" font-size="11">"Talk soon!"</text>
  <text x="515" y="411" fill="%2390A4AE" font-size="8">14:03 - Auto Response</text>
</svg>`;

interface AutomationCard {
  title: string;
  image: string;
  description: string;
  tools: string[];
  resultBadge: string;
}

export default function FeaturedSystems() {
  const cards: AutomationCard[] = [
    {
      title: "Email Lead Qualification & Follow-Up System",
      image: CRM_PIPELINE_SVG,
      description: "Automatically captures, qualifies, and follows up with leads without manual intervention.",
      tools: ["n8n", "OpenAI", "Google Sheets", "Gmail"],
      resultBadge: "Never Miss A Lead",
    },
    {
      title: "AI Voice Receptionist System",
      image: VOICE_AGENT_SVG,
      description: "Answers incoming calls, gathers customer information, and handles appointment inquiries automatically.",
      tools: ["Vapi", "OpenAI", "Google Calendar"],
      resultBadge: "24/7 Call Handling",
    },
    {
      title: "Invoice Automation System",
      image: INVOICE_SOFTWARE_SVG,
      description: "Automatically generates and delivers invoices while reducing repetitive administrative work.",
      tools: ["n8n", "Gmail", "Google Sheets"],
      resultBadge: "Faster Payments",
    },
    {
      title: "WhatsApp Automation System For Businesses",
      image: WHATSAPP_AUTOMATION_SVG,
      description: "Automates customer conversations, lead responses, and follow-up communication.",
      tools: ["n8n", "WhatsApp", "OpenAI", "Google Sheets"],
      resultBadge: "Instant Customer Response",
    },
  ];

  return (
    <section
      id="featured-systems"
      className="relative w-full overflow-hidden py-24 bg-[#03020D]/40 border-t border-b border-white/5"
    >
      {/* Dynamic Background Glow Layer to harmonize deep dark design - Optimized blurs for mobile graphics performance */}
      <div className="absolute inset-y-0 left-1/4 -z-10 h-[500px] w-full max-w-5xl bg-gradient-to-tr from-violet-900/10 via-[#5F62FF]/10 to-indigo-900/5 blur-[60px] lg:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-10 -z-10 h-[350px] w-full max-w-2xl bg-[#5F62FF]/5 blur-[50px] lg:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Headline & Pitch */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <SplitText
            text="Featured Automation Systems"
            tag="h2"
            splitType="words"
            delay={45}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-white tracking-[-0.04em] font-sans leading-tight"
          />
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-body max-w-2xl mx-auto">
            Real automation systems built to eliminate repetitive work and simplify daily operations.
          </p>
        </div>

        {/* 2x2 Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#090818]/90 border border-white/5 hover:border-[#5F62FF]/40 transition-colors duration-500 p-4 md:p-5 w-full max-w-[580px] mx-auto shadow-2xl shadow-indigo-950/40"
            >
              <div className="space-y-4">
                
                {/* Header of the Display Card: Title & Outcome Badge */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-base md:text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-[#8082FF] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <span className="shrink-0 text-[10px] font-medium tracking-wide uppercase px-2.5 py-1 rounded-full bg-[#5F62FF]/10 text-[#8C8EFF] border border-[#5F62FF]/20 select-none">
                    {card.resultBadge}
                  </span>
                </div>

                {/* Main Showcase Image (Takes up 75-80% height of the card focus, zoomed inside screen) */}
                <div className="relative aspect-[16/10] sm:aspect-[1.5] w-full overflow-hidden rounded-xl border border-white/[0.05] bg-black select-none">
                  {/* Subtle vignette/gradient overlays to add tech atmosphere */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020108]/40 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(95,98,255,0.02),rgba(255,255,255,0.01),rgba(95,98,255,0.02))] bg-[size:100%_4px,3px_100%] opacity-25 pointer-events-none" opacity-30 />

                  <motion.img
                    src={card.image}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center origin-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                  />
                </div>

                {/* Description Text (Constrained to max 2 lines, crisp summary) */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-body line-clamp-2">
                  {card.description}
                </p>
              </div>

              {/* Tools row (highly minimal premium badges with subtle borders) */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.04] flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-zinc-500 uppercase mr-1 tracking-wider">
                  Engineered With:
                </span>
                {card.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono text-zinc-300 bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.05]"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Delicate back glow reflecting hover state */}
              <div className="absolute bottom-[-20px] right-[-20px] -z-10 h-28 w-28 bg-[#5F62FF]/0 group-hover:bg-[#5F62FF]/5 blur-[40px] rounded-full transition-all duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
