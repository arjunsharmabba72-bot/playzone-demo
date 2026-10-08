let balance = 70818;
function addCoins(){balance += 100; document.getElementById('balance').textContent=balance.toLocaleString(); alert('+100 virtual coins added.');}
function play(name){
  if(balance < 10){alert('Not enough virtual coins.');return;}
  balance -= 10;
  document.getElementById('balance').textContent=balance.toLocaleString();
  const win = Math.random() > .5;
  if(win){balance += 20; alert(name + '\\nDemo result: WIN +20 virtual coins');}
  else alert(name + '\\nDemo result: LOSE -10 virtual coins');
  document.getElementById('balance').textContent=balance.toLocaleString();
}
function showHistory(){alert('Demo History\\n\\nFortune Tiger — -10 / +20 virtual coins\\nLucky Cat — -10 virtual coins\\nBonus — +100 virtual coins');}
