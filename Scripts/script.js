//import { pasteRole } from './Modules/DisplayStats.js';

const RANK_LIST = new Map([
    ['Bronze', 'Bronze.svg'],
    ['Silver', 'Silver.svg'],
    ['Gold', 'Gold.svg'],
    ['Platinum', 'Platinum.svg'],
    ['Diamond', 'Diamond.svg'],
    ['Master', 'Master.svg'],
    ['Grand Master', 'GM.svg'],
    ['Top500', 'Top.svg']
]);

var CREATED_VARIABLES = [];

createInterface();


console.log(CREATED_VARIABLES);

function createInterface(){
    pasteRole("Support", 1);
    pasteRole("Tank", 2);
    pasteRole("DPS", 3);
    createVariablesForDisplay("Support", 1);
    createVariablesForDisplay("Tank", 2);
    createVariablesForDisplay("DPS", 3);
}

function createVariablesForDisplay(roleName, index){

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
        </select>
        <div class="wins container">
            <div class="text">Wins</div>
            <input type="text" name="" id="win-input-${index}" placeholder="ass" class="small-numbers">
            <div class="text">/5</div>
        </div>
        <div class="played container">
            <div class="text">Played</div>
            <input type="text" name="" id="" placeholder="ass" class="small-numbers">
        </div>   
    </div>
    <div class="container">
        <button class="stat-button" id="win-button-${index}">Win</button>
        <button class="stat-button" id="lost-button-${index}">Lost</button>
    </div>
    </div>`;
    b.innerHTML += a;
    //Tier, rank
    CREATED_VARIABLES.push(
        {
            "Tier" : document.getElementById(`rank-tier-dropdown-${index}`),
            "Division" : document.getElementById(`rank-division-dropdown-${index}`),
            "InputField" : document.getElementById(`win-input-${index}`),
            "WinButton" : document.getElementById(`win-button-${index}`),
            "lostButton" : document.getElementById(`lost-button-${index}`)
        }
    );
}

function pasteRole(roleName, index){
    let a = document.getElementById('Display');
    // console.log('Before: ' + a.innerHTML);
    let htmlBlock = `<div class="content">
    <div class="role-name">${roleName}</div>
    <div class="status" id='status-${index}'>
        <img src="src/rank-icons/GM.svg" alt="rank" class="icon" id="icon-${index}">
        <div class="rank-name text" id="rank-name-${index}">RankName</div>
        <div class="stats text" id="stats-${index}">win 0/5</div>
        <div class="total text" id="total-${index}">Played 0</div>
    </div>
    </div>`;
    a.innerHTML = a.innerHTML + htmlBlock;
}

const MAX_WIN = 5;

const WINS_TEXT_FIELD = null;
const WIN_TEXT = null;

// let win_button = document.getElementById('win-button-1');
// win_button.onclick = () => winClick();

function winResetter(){
    WINS_TEXT_FIELD >= MAX_WIN ? WINS_TEXT_FIELD = 0 : WINS_TEXT_FIELD = self;
}
let index = 0;
function winClick(){
    index++;
    pasteRole('Support', index.toString());
}