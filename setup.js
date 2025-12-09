const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------
// 1. DATA CONFIGURATION
// ---------------------------------------------------------
const commonCC = "harish@techno-communications.com";

function addCC(existingCC) {
    if (!existingCC || existingCC === "") return commonCC;
    return existingCC + ", " + commonCC;
}

const marketData = {
    "ARIZONA": {
        "type": "simple",
        "to": "alik@texasmobilepcs.com",
        "cc": addCC("alik@texasmobilepcs.com, varun@techno-communications.com")
    },
    "ARKHANSAS": {
        "type": "simple",
        "to": "amirmuhammad@activewirelessllc.com",
        "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
    },
    "ATLANTA": {
        "type": "simple",
        "to": "ayan@texasmobilepcs.com",
        "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
    },
    "BAY AREA": {
        "type": "simple",
        "to": "Aous@techno-communications.com",
        "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
    },
    "BOSTON": {
        "type": "simple",
        "to": "afzal@texasmobilepcs.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "CALIFORNIA": {
        "type": "simple",
        "to": "ahad@texasmobilepcs.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "CHARLOTTE": {
        "type": "simple",
        "to": "Namir@Techno-Communications.com",
        "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
    },
    "COLORADO": {
        "type": "simple",
        "to": "shahnoor@texasmobilepcs.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "DALLAS": {
        "type": "complex",
        "districts": {
            "SALIM THANAWALA (DISTRICT MANAGER)": {
                "to": "salimthanawala@texasmobilepcs.com",
                "cc": addCC("nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com")
            },
            "SHAIK MAZHAR UDDIN (DISTRICT MANAGER)": {
                "to": "imranshaikh@texasmobilepcs.com",
                "cc": addCC("nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com")
            },
            "IMRAN AHMED MOHAMMED (DISTRICT MANAGER)": {
                "to": "Ahmedimran@texasmobilepcs.com",
                "cc": addCC("nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com")
            },
            "ADRIAN (CAMS TECHNICIAN)": {
                "to": "adrian@texasmobilepcs.com",
                "cc": addCC("nazim@texasmobilepcs.com, varun@techno-communications.com")
            }
        }
    },
    "DALLAS/OK": {
        "type": "simple",
        "to": "nazim@texasmobilepcs.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "EAST BAY AREA": {
        "type": "simple",
        "to": "saad@activewirelessllc.com",
        "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
    },
    "EL PASO": {
        "type": "simple",
        "to": "haroon@texasmobilepcs.com",
        "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com")
    },
    "HOUSTON": {
        "type": "complex",
        "districts": {
            "SAAD NADEEM (COMPLIANCE MANAGER)": {
                "to": "snadeem@texasmobilepcs.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, haseeb@techno-communications.com")
            },
            "ADNAN BARRI (MARKET MANAGER)": {
                "to": "adnan@texasmobilepcs.com",
                "cc": addCC("varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com")
            },
            "ZUBAIR HUSSAIN (DISTRICT MANAGER)": {
                "to": "zubair@texasmobilepcs.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com")
            },
            "Shahrukh Khalid (DISTRICT MANAGER)": {
                "to": "shahrukh@texasmobilepcs.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com")
            },
            "SALMAN SHAREEF (DISTRICT MANAGER)": {
                "to": "smohammed@texasmobilepcs.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com")
            },
            "HASEEB (COMPLIANCE MANAGER)": {
                "to": "haseeb@techno-communications.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com")
            },
            "SALMAN RIAZ (DISTRICT MANAGER)": {
                "to": "salman@texasmobilepcs.com",
                "cc": addCC("adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com")
            }
        }
    },
    "INDIA": {
        "type": "simple",
        "to": "varun@techno-communications.com",
        "cc": addCC("")
    },
    "LOS ANGELES": {
        "type": "complex",
        "districts": {
            "FAIZAN SYED (COMPLIANCE MANAGER)": {
                "to": "faizansyed@texasmobilepcs.com",
                "cc": addCC("ahad@texasmobilepcs.com, varun@techno-communications.com")
            },
            "SUBHAN ANSARI (MARKET MANAGER)": {
                "to": "subhan@techno-communications.com",
                "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
            },
            "ABDUL RAFAY ASHRAF (MARKET MANAGER)": {
                "to": "rafay@techno-communications.com",
                "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
            },
            "SHARIK THOBANI (MARKET MANAGER)": {
                "to": "sharik@texasmobilepcs.com",
                "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
            },
            "MAAZ KHAN (MARKET MANAGER)": {
                "to": "maaz@texasmobilepcs.com",
                "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
            }
        }
    },
    "MEMPHIS": {
        "type": "complex",
        "districts": {
            "AMIR MUHAMMAD (DISTRICT MANAGER)": {
                "to": "amirmuhammad@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            },
            "SHOAIB SHEERAZ (DISTRICT MANAGER)": {
                "to": "shoaib@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            },
            "ZAID WASEEM (DISTRICT MANAGER)": {
                "to": "zaid@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            }
        }
    },
    "NASHVILLE": {
        "type": "simple",
        "to": "anas@texasmobilepcs.com",
        "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
    },
    "NORTH BAY AREA": {
        "type": "simple",
        "to": "sumair@texasmobilepcs.com",
        "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
    },
    "NORTH CAROLINA": {
        "type": "complex",
        "districts": {
            "UZAIR UDDIN (MARKET MANAGER)": {
                "to": "uzair@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            },
            "HASSAN TANVEER (DISTRICT MANAGER)": {
                "to": "Tanveer@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            },
            "ALI RIZVI (DISTRICT MANAGER)": {
                "to": "Rizvi@activewirelessllc.com",
                "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
            }
        }
    },
    "OREGON": {
        "type": "simple",
        "to": "prabhakar@techno-communications.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "OXNARD/PALMDALE": {
        "type": "simple",
        "to": "aslam@techno-communications.com",
        "cc": addCC("varun@techno-communications.com")
    },
    "PHILLY": {
        "type": "simple",
        "to": "anas@texasmobilepcs.com",
        "cc": addCC("mohamad@activewirelessllc.com, varun@techno-communications.com")
    },
    "SACRAMENTO": {
        "type": "complex",
        "districts": {
            "TALHA QURESHI (MARKET MANAGER)": {
                "to": "tqureshi@texasmobilepcs.com",
                "cc": addCC("varun@techno-communications.com")
            },
            "HAFIZ ASAD BURGEES (DISTRICT MANAGER)": {
                "to": "asad@technocallc.com",
                "cc": addCC("tqureshi@texasmobilepcs.com, varun@techno-communications.com")
            },
            "SYED JAFFER ADNAN (DISTRICT MANAGER)": {
                "to": "JafferAdnan@technocallc.com",
                "cc": addCC("tqureshi@texasmobilepcs.com, varun@techno-communications.com")
            }
        }
    },
    "SAN DIEGO": {
        "type": "simple",
        "to": "saleem@texasmobilepcs.com",
        "cc": addCC("ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com")
    },
    "UTAH": {
        "type": "simple",
        "to": "Abdullah@technocommunicationsllc.com",
        "cc": addCC("varun@techno-communications.com")
    }
};

// ---------------------------------------------------------
// 2. HTML: UI with POPPINS Font & Wide Grid
// ---------------------------------------------------------
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Techno Communications | Report Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Poppins', sans-serif; /* Applied Globally */
            margin: 0;
            background: #f8fafc;
            overflow-x: hidden;
            overflow-y: auto;
        }

        /* 1. Canvas Behind UI */
        #bgCanvas {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
            opacity: 0.8;
        }

        /* 2. Logo Watermark Background */
        .logo-watermark {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            height: 80vw;
            max-width: 900px;
            max-height: 900px;
            opacity: 0.04;
            z-index: 1;
            pointer-events: none;
            background-image: url('https://technocommunicationsglobal.com/logo.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            animation: slowPulse 8s ease-in-out infinite;
        }

        @keyframes slowPulse { 0%, 100% { opacity: 0.04; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.07; transform: translate(-50%, -50%) scale(1.05); } }

        /* 3. Glass Card */
        .glass-card {
            background: rgba(255, 255, 255, 0.5);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255, 255, 255, 0.7);
            box-shadow: 0 15px 50px -10px rgba(0, 0, 0, 0.1);
        }

        /* 4. Inputs & Tiles */
        .glass-input {
            background: rgba(255, 255, 255, 0.65);
            border: 1px solid rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
        }
        .glass-input:hover { background: rgba(255, 255, 255, 0.9); }

        .tile {
            background: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.7);
            transition: all 0.2s ease;
        }
        .tile:hover { transform: translateY(-2px); background: #fff; border-color: #6366f1; }
        .tile.selected {
            background: #ffffff;
            border-color: #6366f1;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
        }

        /* Scrollbar */
        .custom-scroll::-webkit-scrollbar { width: 6px; }
        .custom-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.2); border-radius: 10px; }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen relative py-12 px-4">

    <canvas id="bgCanvas"></canvas>
    <div class="logo-watermark"></div>

    <div class="w-full max-w-5xl glass-card rounded-[2.5rem] p-8 md:p-12 relative z-10 animate-[fadeIn_0.5s_ease-out]">
        
        <div class="flex flex-col items-center justify-center mb-10 gap-4">
            <div class="w-28 h-28 bg-white/50 rounded-3xl flex items-center justify-center p-5 shadow-sm backdrop-blur-sm">
                <img src="https://technocommunicationsglobal.com/logo.png" alt="Techno Communications Logo" class="w-full h-full object-contain">
            </div>
            <div class="text-center">
                <h1 class="text-3xl font-bold text-slate-800 tracking-tight">Daily Camera Report</h1>
                <p class="text-slate-500 font-medium">Techno Communications Global</p>
            </div>
        </div>

        <div class="mb-8">
            <label class="block text-slate-500 text-xs font-bold uppercase tracking-widest mb-2 ml-1">Select Market</label>
            <div class="relative">
                <select id="marketSelect" class="w-full glass-input text-slate-800 text-lg rounded-2xl px-6 py-4 focus:outline-none appearance-none cursor-pointer">
                    <option selected disabled value="">Choose a location...</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-slate-400">
                    <i class="fa-solid fa-chevron-down text-sm"></i>
                </div>
            </div>
        </div>

        <div id="selectionArea" class="hidden mb-8">
            <div class="flex justify-between items-center mb-4 px-1">
                <label class="text-slate-500 text-xs font-bold uppercase tracking-widest">Recipients</label>
                <span id="toggleAllBtn" onclick="toggleSelectAll()" class="text-xs font-bold text-indigo-600 cursor-pointer hover:underline bg-white/50 px-3 py-1.5 rounded-lg border border-white/60">
                    SELECT ALL
                </span>
            </div>
            
            <div id="tileContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[500px] overflow-y-auto custom-scroll pr-2 pb-2">
                </div>
        </div>

        <div id="previewConsole" class="hidden glass-input rounded-2xl p-6 mb-10 border border-slate-200 bg-white/40">
            <div class="grid gap-4 font-mono text-sm">
                <div class="flex flex-col md:flex-row md:gap-4">
                    <span class="text-indigo-600 font-bold uppercase text-xs w-8 pt-2 md:text-right">To</span>
                    <span id="displayTo" class="text-slate-600 break-all bg-white/60 px-3 py-2 rounded-lg border-0 flex-1 shadow-sm"></span>
                </div>
                <div class="flex flex-col md:flex-row md:gap-4">
                    <span class="text-pink-600 font-bold uppercase text-xs w-8 pt-2 md:text-right">Cc</span>
                    <span id="displayCc" class="text-slate-600 break-all bg-white/60 px-3 py-2 rounded-lg border-0 flex-1 shadow-sm"></span>
                </div>
            </div>
        </div>

        <button onclick="generateEmail()" id="launchBtn" class="w-full bg-slate-900 hover:bg-black text-white text-xl font-bold py-5 rounded-2xl shadow-xl shadow-slate-900/10 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
            <span class="flex items-center justify-center gap-3">
                <i class="fa-regular fa-paper-plane"></i>
                <span>Draft Email</span>
            </span>
        </button>

    </div>

    <script src="script.js"></script>

    <script>
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let orbs = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Orb {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.8;
                this.vy = (Math.random() - 0.5) * 0.8;
                this.radius = Math.random() * 120 + 50;
                const colors = [
                    'rgba(99, 102, 241, 0.15)', 'rgba(168, 85, 247, 0.15)', 
                    'rgba(59, 130, 246, 0.15)', 'rgba(236, 72, 153, 0.15)'
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if(this.x < -150) this.x = width + 150;
                if(this.x > width + 150) this.x = -150;
                if(this.y < -150) this.y = height + 150;
                if(this.y > height + 150) this.y = -150;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        for(let i=0; i<12; i++) orbs.push(new Orb());

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(0,0,width,height);
            orbs.forEach(orb => { orb.update(); orb.draw(); });
            requestAnimationFrame(animate);
        }
        animate();
    </script>
</body>
</html>`;

// ---------------------------------------------------------
// 3. CORE LOGIC (Signature Automation Added)
// ---------------------------------------------------------
const jsContent = `
const marketData = ${JSON.stringify(marketData, null, 4)};

// DOM Elements
const marketSelect = document.getElementById('marketSelect');
const selectionArea = document.getElementById('selectionArea');
const tileContainer = document.getElementById('tileContainer');
const toggleAllBtn = document.getElementById('toggleAllBtn');
const previewConsole = document.getElementById('previewConsole');
const displayTo = document.getElementById('displayTo');
const displayCc = document.getElementById('displayCc');
const launchBtn = document.getElementById('launchBtn');

let currentRecipients = { to: [], cc: [] };

// Initialize Dropdown
Object.keys(marketData).sort().forEach(market => {
    const opt = document.createElement('option');
    opt.value = market;
    opt.textContent = market;
    marketSelect.appendChild(opt);
});

// Market Change Event
marketSelect.addEventListener('change', function() {
    const data = marketData[this.value];
    
    // Reset UI
    tileContainer.innerHTML = '';
    selectionArea.classList.add('hidden');
    previewConsole.classList.add('hidden');
    currentRecipients = { to: [], cc: [] };
    launchBtn.disabled = true;

    if (data.type === 'complex') {
        selectionArea.classList.remove('hidden');
        renderTiles(data.districts);
        updateToggleBtnText();
    } else {
        previewConsole.classList.remove('hidden');
        launchBtn.disabled = false;
        updatePreview(data.to, data.cc);
    }
});

function renderTiles(districts) {
    Object.keys(districts).forEach(distName => {
        const tile = document.createElement('div');
        tile.className = 'tile rounded-xl p-4 cursor-pointer flex items-center justify-between group h-full'; 
        tile.dataset.value = distName;
        
        tile.innerHTML = \`
            <div class="flex items-center gap-3 overflow-hidden">
                <div class="w-10 h-10 rounded-full bg-slate-100 flex-shrink-0 flex items-center justify-center text-slate-400 group-[.selected]:bg-indigo-100 group-[.selected]:text-indigo-600 transition-colors">
                    <i class="fa-solid fa-user"></i>
                </div>
                <span class="text-sm font-semibold text-slate-700 break-words leading-tight group-[.selected]:text-indigo-700">\${distName}</span>
            </div>
            <div class="w-6 h-6 flex-shrink-0 rounded-full border-2 border-slate-300 group-[.selected]:border-indigo-500 group-[.selected]:bg-indigo-500 flex items-center justify-center transition-all ml-2">
                <i class="fa-solid fa-check text-white text-[10px] opacity-0 group-[.selected]:opacity-100"></i>
            </div>
        \`;

        tile.addEventListener('click', () => {
            tile.classList.toggle('selected');
            calculateComplexRecipients();
        });
        tileContainer.appendChild(tile);
    });
}

function calculateComplexRecipients() {
    const marketName = marketSelect.value;
    const selectedTiles = document.querySelectorAll('.tile.selected');
    
    updateToggleBtnText();

    if (selectedTiles.length === 0) {
        previewConsole.classList.add('hidden');
        currentRecipients = { to: [], cc: [] };
        launchBtn.disabled = true;
        return;
    }

    let toList = [];
    let ccSet = new Set();

    selectedTiles.forEach(tile => {
        const distData = marketData[marketName].districts[tile.dataset.value];
        if(distData.to) toList.push(distData.to);
        if(distData.cc) {
            distData.cc.split(',').forEach(email => {
                const clean = email.trim();
                if(clean) ccSet.add(clean);
            });
        }
    });

    launchBtn.disabled = false;
    updatePreview(toList.join(', '), Array.from(ccSet).join(', '));
}

function updatePreview(to, cc) {
    previewConsole.classList.remove('hidden');
    displayTo.textContent = to || "No Recipient";
    displayCc.textContent = cc || "No CC";
    currentRecipients = { to: [to], cc: [cc] };
}

function toggleSelectAll() {
    const tiles = document.querySelectorAll('.tile');
    const selectedTiles = document.querySelectorAll('.tile.selected');
    const isAllSelected = tiles.length === selectedTiles.length;

    tiles.forEach(tile => {
        if (isAllSelected) tile.classList.remove('selected');
        else tile.classList.add('selected');
    });
    calculateComplexRecipients();
}

function updateToggleBtnText() {
    const tiles = document.querySelectorAll('.tile');
    const selectedTiles = document.querySelectorAll('.tile.selected');
    const btn = document.getElementById('toggleAllBtn');
    
    if (tiles.length > 0 && tiles.length === selectedTiles.length) {
        btn.textContent = 'DESELECT ALL';
    } else {
        btn.textContent = 'SELECT ALL';
    }
}

function generateEmail() {
    if (!currentRecipients.to[0]) return;

    const marketName = marketSelect.value;
    const today = new Date();
    const dateStr = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    const subject = \`\${marketName} Camera Not Working Report - \${dateStr}\`;
    
    // STRUCTURED BODY WITH SIGNATURE
    const body = 
\`Hi Team,

Please Find Camera Not Working Report as on \${dateStr}.

[ PASTE YOUR TABLE HERE ]

Thanks & Regards,

Boragala Bharadwaj
Techno Communications\`;

    const safeSubject = encodeURIComponent(subject);
    const safeBody = encodeURIComponent(body);
    const safeTo = encodeURIComponent(currentRecipients.to[0]); 
    const safeCc = encodeURIComponent(currentRecipients.cc[0]);

    const gmailUrl = \`https://mail.google.com/mail/?view=cm&fs=1&to=\${safeTo}&cc=\${safeCc}&su=\${safeSubject}&body=\${safeBody}\`;
    
    window.open(gmailUrl, '_blank');
}
`;

// ---------------------------------------------------------
// 4. WRITE FILES
// ---------------------------------------------------------
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);

fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);
fs.writeFileSync(path.join(publicDir, 'script.js'), jsContent);

console.log('✅ SIGNATURE ADDED: "Boragala Bharadwaj" auto-inserted.');
console.log('✅ BODY FORMATTED: Well structured text with spacing.');
console.log('✅ LAYOUT: Horizontal Grid preserved.');