const RANK_LIST = new Map([
    ['Bronze', 'Bronze.svg'],
    ['Silver', 'Silver.svg'],
    ['Gold', 'Gold.svg'],
    ['Platinum', 'Platinum.svg'],
    ['Diamond', 'Diamond.svg'],
    ['Master', 'Master.svg'],
    ['Grand master', 'GM.svg'],
    ['Top500', 'Top.svg']
]); //Enumerator like map


const MAX_WIN = 5;
var CREATED_VARIABLES = []; //Object like arrays of variables for #displayStatusSettings

createInterface();

function createInterface(){
    pasteDisplayRole("Support", 1);
    pasteDisplayRole("Tank", 2);
    pasteDisplayRole("DPS", 3);
    createVariablesForDisplayRole("Support", 1);
    createVariablesForDisplayRole("Tank", 2);
    createVariablesForDisplayRole("DPS", 3);
    for (let index = 1; index < 4; index++) {
        variablesLinking(index);
        switchRank(index)
    }
    
}

function createVariablesForDisplayRole(roleName, index){

    let b = document.getElementById('role-settings');
    let a = `<div class="role">
    <div class="role-name">${roleName}</div>
    <div class="container">
        <select name="rank-tier" id="rank-tier-dropdown-${index}" class="dropdown">
            <option value="Bronze">Bronze</option>
            <option value="Silver">Silver</option>
            <option value="Gold">Gold</option>
            <option value="Platinum">Platinum</option>
            <option value="Diamond">Diamond</option>
            <option value="Master">Master</option>
            <option value="GrandMaster">Grand master</option>
            <option value="Top">Top500</option>
        </select>
        <select name="rank-state" id="rank-division-dropdown-${index}" class="dropdown small-numbers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6"></option>
        </select>
        <div class="wins container">
            <div class="text">Wins</div>
            <input type="text" name="" id="win-input-${index}" placeholder="0" class="small-numbers" value="">
            <div class="text">/${MAX_WIN}</div>
        </div>
        <div class="played container">
            <div class="text">Played</div>
            <input type="text" name="" id="total-played-${index}" placeholder="0" class="small-numbers">
        </div>   
    </div>
    <div class="container">
        <button class="stat-button" id="win-button-${index}">Win</button>
        <button class="stat-button" id="lost-button-${index}">Lost</button>
    </div>
    </div>`;
    b.innerHTML += a;
    CREATED_VARIABLES.push(
        {
            "Tier" : document.getElementById(`rank-tier-dropdown-${index}`),
            "Division" : document.getElementById(`rank-division-dropdown-${index}`),
            "WinField" : document.getElementById(`win-input-${index}`),
            "WinButton" : document.getElementById(`win-button-${index}`),
            "LostButton" : document.getElementById(`lost-button-${index}`),
            "TotalGames" : document.getElementById(`total-played-${index}`)
        }
    );
}

function pasteDisplayRole(roleName, index){
    let a = document.getElementById('Display');
    let htmlBlock = `<div class="content">
    <div class="role-name">${roleName}</div>
    <div class="status" id='status-${index}'>
        <img src="src/rank-icons/GM.svg" alt="rank" class="icon" id="icon-${index}">
        <div class="rank-name text" id="rank-name-${index}">RankName</div>
        <div class="stats text" id="stats-${index}">Win 0/${MAX_WIN}</div>
        <div class="total text" id="total-${index}">Played 0</div>
    </div>
    </div>`;
    a.innerHTML = a.innerHTML + htmlBlock;
}

function assignFunctions(index){

    return null;
}

//=======TEMP=======
// const temp = document.getElementById('rank-tier-dropdown-1');
// temp.onchange = () => switchRank(1);
//=======TEMP=======

//Assigned to Role Rank DropDown
function switchRank(index){
    let rankName = document.getElementById(`rank-name-${index}`);
    
    let activeRank = document.getElementById(`rank-tier-dropdown-${index}`);
    let icon = document.getElementById(`icon-${index}`);
    var text = activeRank.options[activeRank.selectedIndex].text;
    icon.src = '../src/rank-icons/' + RANK_LIST.get(`${text}`);

    let rankDivision = document.getElementById(`rank-division-dropdown-${index}`);
    rankName.textContent = `${activeRank.options[activeRank.selectedIndex].text} ${rankDivision[rankDivision.selectedIndex].text}`;
}



function variablesLinking(index){
    // RankDropDownLinking
    let temp = document.getElementById(`rank-tier-dropdown-${index}`);
    temp.onchange = () => switchRank(index);

    let rankDivision = document.getElementById(`rank-division-dropdown-${index}`)
    rankDivision.onchange = () => switchRank(index);

    // ================

    // WinStatusLinking
        let winInput = document.getElementById(`win-input-${index}`);

        let winLabel = document.getElementById(`stats-${index}`);
        
        winInput.oninput = () => winInput.value = winInput.value.replace(/[^0-9]/g, '');

        winInput.onchange = () => {
            winInput.value < MAX_WIN ? winInput.value : winInput.value = 0;
            winLabel.textContent = `Win ${winInput.value}/${MAX_WIN}`;
        }
    // =================

    // TotalPlayedLinking
        let totalInput = document.getElementById(`total-played-${index}`);

        let totalLabel = document.getElementById(`total-${index}`);

        totalInput.oninput = () => totalInput.value = totalInput.value.replace(/[^0-9]/g, '');

        totalInput.onchange = () => totalLabel.textContent = 'Played ' + totalInput.value;
    // =================

    // WinLostButtons linking
        let winButton = document.getElementById(`win-button-${index}`);

        winButton.onclick = () => addGameToPlayed(index, 'win');

        let lostButton = document.getElementById(`lost-button-${index}`);

        lostButton.onclick = () => addGameToPlayed(index, null);
    // =================
}

//TODO
function addGameToPlayed(index, state){
    // WinStatusLinking
    let winInput = document.getElementById(`win-input-${index}`);

    let winLabel = document.getElementById(`stats-${index}`);
// =================

// TotalPlayedLinking
    let totalInput = document.getElementById(`total-played-${index}`);

    let totalLabel = document.getElementById(`total-${index}`);
// =================

    totalInput.value++;
    totalLabel.textContent = 'Played ' + totalInput.value;

    
    if(state == 'win'){
        winInput.value < MAX_WIN ? winInput.value++ : winInput.value = 0;
        winLabel.textContent = `Win ${winInput.value}/${MAX_WIN}`;
    }


}