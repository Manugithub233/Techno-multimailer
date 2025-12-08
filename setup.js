const fs = require('fs');
const path = require('path');

// ---------------------------------------------------------
// 1. DATA FROM EXCEL (UPDATED: MEMPHIS IS NOW COMPLEX)
// ---------------------------------------------------------
const marketData = {
    "ARIZONA": {
        "type": "simple",
        "to": "alik@texasmobilepcs.com",
        "cc": "alik@texasmobilepcs.com, varun@techno-communications.com"
    },
    "ARKHANSAS": {
        "type": "simple",
        "to": "amirmuhammad@activewirelessllc.com",
        "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
    },
    "ATLANTA": {
        "type": "simple",
        "to": "ayan@texasmobilepcs.com",
        "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
    },
    "BAY AREA": {
        "type": "simple",
        "to": "Aous@techno-communications.com",
        "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
    },
    "BOSTON": {
        "type": "simple",
        "to": "afzal@texasmobilepcs.com",
        "cc": "varun@techno-communications.com"
    },
    "CALIFORNIA": {
        "type": "simple",
        "to": "ahad@texasmobilepcs.com",
        "cc": ""
    },
    "CHARLOTTE": {
        "type": "simple",
        "to": "Namir@Techno-Communications.com",
        "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
    },
    "COLORADO": {
        "type": "simple",
        "to": "shahnoor@texasmobilepcs.com",
        "cc": "varun@techno-communications.com"
    },
    "DALLAS": {
        "type": "complex",
        "districts": {
            "SALIM THANAWALA (DISTRICT MANAGER)": {
                "to": "salimthanawala@texasmobilepcs.com",
                "cc": "nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com"
            },
            "SHAIK MAZHAR UDDIN (DISTRICT MANAGER)": {
                "to": "imranshaikh@texasmobilepcs.com",
                "cc": "nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com"
            },
            "IMRAN AHMED MOHAMMED (DISTRICT MANAGER)": {
                "to": "Ahmedimran@texasmobilepcs.com",
                "cc": "nazim@texasmobilepcs.com, varun@techno-communications.com, adrian@texasmobilepcs.com"
            },
            "ADRIAN (CAMS TECHNICIAN)": {
                "to": "adrian@texasmobilepcs.com",
                "cc": ""
            }
        }
    },
    "DALLAS/OK": {
        "type": "simple",
        "to": "nazim@texasmobilepcs.com",
        "cc": ""
    },
    "EAST BAY AREA": {
        "type": "simple",
        "to": "saad@activewirelessllc.com",
        "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
    },
    "EL PASO": {
        "type": "simple",
        "to": "haroon@texasmobilepcs.com",
        "cc": "adnan@texasmobilepcs.com, varun@techno-communications.com"
    },
    "HOUSTON": {
        "type": "complex",
        "districts": {
            "SAAD NADEEM (COMPLIANCE MANAGER)": {
                "to": "snadeem@texasmobilepcs.com",
                "cc": ""
            },
            "ADNAN BARRI (MARKET MANAGER)": {
                "to": "adnan@texasmobilepcs.com",
                "cc": "adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com"
            },
            "ZUBAIR HUSSAIN (DISTRICT MANAGER)": {
                "to": "zubair@texasmobilepcs.com",
                "cc": ""
            },
            "Shahrukh Khalid (DISTRICT MANAGER)": {
                "to": "shahrukh@texasmobilepcs.com",
                "cc": "adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com"
            },
            "SALMAN SHAREEF (DISTRICT MANAGER)": {
                "to": "smohammed@texasmobilepcs.com",
                "cc": "adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com"
            },
            "HASEEB (COMPLIANCE MANAGER)": {
                "to": "haseeb@techno-communications.com",
                "cc": ""
            },
            "SALMAN RIAZ (DISTRICT MANAGER)": {
                "to": "salman@texasmobilepcs.com",
                "cc": "adnan@texasmobilepcs.com, varun@techno-communications.com, snadeem@texasmobilepcs.com, haseeb@techno-communications.com"
            }
        }
    },

    "LOS ANGELES": {
        "type": "complex",
        "districts": {
            "FAIZAN SYED (COMPLIANCE MANAGER)": {
                "to": "faizansyed@texasmobilepcs.com",
                "cc": ""
            },
            "SUBHAN ANSARI (MARKET MANAGER)": {
                "to": "subhan@techno-communications.com",
                "cc": ""
            },
            "ABDUL RAFAY ASHRAF (MARKET MANAGER)": {
                "to": "rafay@techno-communications.com",
                "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
            },
            "SHARIK THOBANI (MARKET MANAGER)": {
                "to": "sharik@texasmobilepcs.com",
                "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
            },
            "MAAZ KHAN (MARKET MANAGER)": {
                "to": "maaz@texasmobilepcs.com",
                "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
            }
        }
    },
    "MEMPHIS": {
        "type": "complex",
        "districts": {
            "AMIR MUHAMMAD (District MANAGER)": {
                "to": "amirmuhammad@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            },
             "SHOAIB SHEERAZ (District MANAGER)": {
                "to": "shoaib@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            },
             "ZAID WASEEM (District MANAGER)": {
                "to": "zaid@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            },
        }
    },
   
    "NASHVILLE": {
        "type": "simple",
        "to": "anas@texasmobilepcs.com",
        "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
    },
    "NORTH BAY AREA": {
        "type": "simple",
        "to": "sumair@texasmobilepcs.com",
        "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
    },
    "NORTH CAROLINA": {
        "type": "complex",
        "districts": {
            "UZAIR UDDIN (MARKET MANAGER)": {
                "to": "uzair@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            },
            "HASSAN TANVEER (DISTRICT MANAGER)": {
                "to": "Tanveer@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            },
            "ALI RIZVI (DISTRICT MANAGER)": {
                "to": "Rizvi@activewirelessllc.com",
                "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
            }
        }
    },
    "OREGON": {
        "type": "simple",
        "to": "prabhakar@techno-communications.com",
        "cc": "varun@techno-communications.com"
    },
    "OXNARD/PALMDALE": {
        "type": "simple",
        "to": "aslam@techno-communications.com",
        "cc": ""
    },
    "PHILLY": {
        "type": "simple",
        "to": "anas@texasmobilepcs.com",
        "cc": "mohamad@activewirelessllc.com, varun@techno-communications.com"
    },
    "SACRAMENTO": {
        "type": "complex",
        "districts": {
            "TALHA QURESHI (MARKET MANAGER)": {
                "to": "tqureshi@texasmobilepcs.com",
                "cc": ""
            },
            "HAFIZ ASAD BURGEES (DISTRICT MANAGER)": {
                "to": "asad@technocallc.com",
                "cc": "tqureshi@texasmobilepcs.com, varun@techno-communications.com"
            },
            "SYED JAFFER ADNAN (DISTRICT MANAGER)": {
                "to": "JafferAdnan@technocallc.com",
                "cc": "tqureshi@texasmobilepcs.com, varun@techno-communications.com"
            }
        }
    },
    "SAN DIEGO": {
        "type": "simple",
        "to": "saleem@texasmobilepcs.com",
        "cc": "ahad@texasmobilepcs.com, faizansyed@texasmobilepcs.com, varun@techno-communications.com"
    },
    "UTAH": {
        "type": "simple",
        "to": "Abdullah@technocommunicationsllc.com",
        "cc": ""
    }
};

// ---------------------------------------------------------
// 2. NEW HTML (Multi-Select Interface)
// ---------------------------------------------------------
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camera Report Automator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style> 
        body { background-color: #f3f4f6; } 
        /* Custom scrollbar for checklist */
        .checklist-container { max-height: 200px; overflow-y: auto; border: 1px solid #dee2e6; border-radius: 0.375rem; background: white; padding: 10px; }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen">

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
                
                <div class="card p-5 rounded-3xl bg-white shadow-lg border-0">
                    <div class="text-center mb-4">
                        <div class="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <i class="fa-solid fa-envelope-open-text fa-2x text-blue-600"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-gray-800">Daily Camera Report</h2>
                        <p class="text-gray-500 text-sm">Multi-Select enabled for complex markets.</p>
                    </div>

                    <div class="mb-3">
                        <label class="form-label font-semibold text-gray-700">Select Market</label>
                        <select class="form-select form-select-lg" id="marketSelect">
                            <option selected disabled value="">Choose a market...</option>
                        </select>
                    </div>

                    <div class="mb-4 hidden" id="checkboxArea">
                        <label class="form-label font-semibold text-gray-700 flex justify-between">
                            <span>Select Recipients</span>
                            <span class="text-sm text-blue-600 cursor-pointer hover:underline" onclick="selectAll()">Select All</span>
                        </label>
                        <div class="checklist-container" id="checklistContainer">
                            </div>
                    </div>

                    <div id="infoBox" class="bg-gray-50 p-3 rounded mb-4 hidden border border-gray-200">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <span class="badge bg-success mb-1">TO (Combined)</span>
                                <p id="displayTo" class="text-sm text-gray-800 font-mono break-all leading-tight">...</p>
                            </div>
                            <div class="col-12">
                                <span class="badge bg-secondary mb-1">CC (Combined)</span>
                                <p id="displayCc" class="text-sm text-gray-800 font-mono break-all leading-tight">...</p>
                            </div>
                        </div>
                    </div>

                    <div class="d-grid gap-2">
                        <button onclick="generateEmail()" id="sendBtn" class="btn btn-primary btn-lg py-3 hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                            <i class="fa-brands fa-google me-2"></i> Open in Gmail
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>`;

// ---------------------------------------------------------
// 3. NEW JAVASCRIPT (Handle Multiple Selections)
// ---------------------------------------------------------
const jsContent = `
const marketData = ${JSON.stringify(marketData, null, 4)};

// DOM Elements
const marketSelect = document.getElementById('marketSelect');
const checkboxArea = document.getElementById('checkboxArea');
const checklistContainer = document.getElementById('checklistContainer');
const infoBox = document.getElementById('infoBox');
const displayTo = document.getElementById('displayTo');
const displayCc = document.getElementById('displayCc');

// State
let currentRecipients = { to: [], cc: [] };

// Initialize Market Dropdown
Object.keys(marketData).sort().forEach(market => {
    const opt = document.createElement('option');
    opt.value = market;
    opt.textContent = market;
    marketSelect.appendChild(opt);
});

// Handle Market Change
marketSelect.addEventListener('change', function() {
    const data = marketData[this.value];
    
    // Reset UI
    checklistContainer.innerHTML = '';
    checkboxArea.classList.add('hidden');
    infoBox.classList.add('hidden');
    currentRecipients = { to: [], cc: [] };

    if (data.type === 'complex') {
        // Show Checkboxes
        checkboxArea.classList.remove('hidden');
        
        Object.keys(data.districts).forEach(distName => {
            const row = document.createElement('div');
            row.className = 'form-check mb-2';
            
            const checkbox = document.createElement('input');
            checkbox.className = 'form-check-input district-checkbox';
            checkbox.type = 'checkbox';
            checkbox.value = distName;
            checkbox.id = 'check-' + distName.replace(/[^a-zA-Z0-9]/g, ''); // fixed ID for spaces
            
            // Add listener to update preview on click
            checkbox.addEventListener('change', updateComplexPreview);

            const label = document.createElement('label');
            label.className = 'form-check-label text-sm text-gray-700';
            label.htmlFor = checkbox.id;
            label.textContent = distName;

            row.appendChild(checkbox);
            row.appendChild(label);
            checklistContainer.appendChild(row);
        });

    } else {
        // Simple Market - Just set it
        updateSimplePreview(data);
    }
});

// Helper: Simple Market Preview
function updateSimplePreview(data) {
    infoBox.classList.remove('hidden');
    displayTo.textContent = data.to;
    displayCc.textContent = data.cc;
    currentRecipients = { to: [data.to], cc: [data.cc] };
}

// Helper: Complex Market Preview (Loop through checkboxes)
function updateComplexPreview() {
    const marketName = marketSelect.value;
    const checkboxes = document.querySelectorAll('.district-checkbox:checked');
    
    if (checkboxes.length === 0) {
        infoBox.classList.add('hidden');
        currentRecipients = { to: [], cc: [] };
        return;
    }

    let toList = [];
    let ccSet = new Set(); // Use Set to avoid duplicates

    checkboxes.forEach(box => {
        const distData = marketData[marketName].districts[box.value];
        
        // Add To
        if(distData.to) toList.push(distData.to);
        
        // Add CC (Split by comma, trim, add to Set)
        if(distData.cc) {
            distData.cc.split(',').forEach(email => {
                const clean = email.trim();
                if(clean) ccSet.add(clean);
            });
        }
    });

    // Update UI
    const finalTo = toList.join(', ');
    const finalCc = Array.from(ccSet).join(', ');

    infoBox.classList.remove('hidden');
    displayTo.textContent = finalTo;
    displayCc.textContent = finalCc;
    
    currentRecipients = { to: [finalTo], cc: [finalCc] };
}

// Helper: Select All Button
function selectAll() {
    const boxes = document.querySelectorAll('.district-checkbox');
    boxes.forEach(box => box.checked = true);
    updateComplexPreview();
}

// Generate Email
function generateEmail() {
    if (currentRecipients.to.length === 0 && currentRecipients.to[0] !== "") {
        alert("Please select at least one recipient.");
        return;
    }

    const marketName = marketSelect.value;
    const today = new Date();
    const dateStr = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
    const subject = \`\${marketName} Camera Not Working Report - \${dateStr}\`;
    
    const body = \`Hi Team,\\n\\nPlease Find Camera Not Working Report as on \${dateStr}.\\n\\n[PASTE TABLE HERE]\\n\\nThanks,\`;

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

console.log('✅ Updated MEMPHIS to complex mode (Checkboxes enabled).');
console.log('✅ Run "node server.js" to start.');