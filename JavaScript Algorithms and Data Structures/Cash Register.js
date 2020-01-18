function moneyInDrawer(cid) {
    let money = {};
    for (let n in cid) {
        switch(cid[n][0]) {
            case 'PENNY':
                money['PENNY'] = cid[n][1];
                break;
            case 'NICKEL':
                money['NICKEL'] = cid[n][1];
                break;
            case 'DIME':
                money['DIME'] = cid[n][1];
                break;
            case 'QUARTER':
                money['QUARTER'] = cid[n][1];
                break;
            case 'ONE':
                money['ONE'] = cid[n][1];
                break;
            case 'FIVE':
                money['FIVE'] = cid[n][1];
                break;
            case 'TEN':
                money['TEN'] = cid[n][1];
                break;
            case 'TWENTY':
                money['TWENTY'] = cid[n][1];
                break;
            case 'ONE HUNDRED':
                money['ONE HUNDRED'] = cid[n][1];
                break;
        }
    }
return money;
}

function moneyChange(drawer, change) {

    return change
}

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    // money in the drawer
    let drawer = {
        'ONE HUNDRED': 0,
        'TWENTY': 0,
        'TEN': 0,
        'FIVE': 0,
        'ONE': 0,
        'QUARTER': 0,
        'DIME': 0,
        'NICKEL': 0,
        'PENNY': 0  
    };
    // how many coins or notes for change
    let notes = {
        'ONE HUNDRED': 0,
        'TWENTY': 0,
        'TEN': 0,
        'FIVE': 0,
        'ONE': 0,
        'QUARTER': 0,
        'DIME': 0,
        'NICKEL': 0,
        'PENNY': 0  
    };

    if (change < 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        }
    } else if (change === 0) {
        return {
            status: "CLOSE",
            change: []
        }
    } else {
        drawer = moneyInDrawer(cid);
        while (change > 0) {
            if ((change.toFixed(2) - 100 >= 0) && (drawer['ONE HUNDRED'].toFixed(2) - 100 >= 0)) {
                change -= 100;
                drawer['ONE HUNDRED'] -= 100;
                notes['ONE HUNDRED'] += 100;
            } else if ((change.toFixed(2) - 20 >= 0) && (drawer['TWENTY'].toFixed(2) - 20 >= 0)) {
                change -= 20;
                drawer['TWENTY'] -= 20;
                notes['TWENTY'] += 20;
            } else if ((change.toFixed(2) - 10 >= 0) && (drawer['TEN'].toFixed(2) - 10 >= 0)) {
                change -= 10;
                drawer['TEN'] -= 10;
                notes['TEN'] += 10;
            } else if ((change.toFixed(2) - 5 >= 0) && (drawer['FIVE'].toFixed(2) - 5 >= 0)) {
                change -= 5;
                drawer['FIVE'] -= 5;
                notes['FIVE'] += 5;
            } else if ((change.toFixed(2) - 1 >= 0) && (drawer['ONE'].toFixed(2) - 1 >= 0)) {
                change -= 1;
                drawer['ONE'] -= 1;
                notes['ONE'] += 1;
            } else if ((change.toFixed(2) - 0.25 >= 0) && (drawer['QUARTER'].toFixed(2) - 0.25 >= 0)) {
                change -= 0.25;
                drawer['QUARTER'] -= 0.25;
                notes['QUARTER'] += 0.25;
            } else if ((change.toFixed(2) - 0.1 >= 0) && (drawer['DIME'].toFixed(2) - 0.1 >= 0)) {
                change -= 0.1;
                drawer['DIME'] -= 0.1;
                notes['DIME'] += 0.1;
            } else if ((change.toFixed(2) - 0.05 >= 0) && (drawer['NICKEL'].toFixed(2) - 0.05 >= 0)) {
                change -= 0.05;
                drawer['NICKEL'] -= 0.05;
                notes['NICKEL'] += 0.05;
            } else if ((change.toFixed(2) - 0.01 >= 0) && (drawer['PENNY'].toFixed(2) - 0.01 >= 0)) {
                change -= 0.01;
                drawer['PENNY'] -= 0.01;
                notes['PENNY'] += 0.01;
            } else if (drawer['PENNY'].toFixed(2) == 0) {
              return {status: "INSUFFICIENT_FUNDS", change: []}
            } else if (change == 0) {
              break;
            }
        }
        let return_note = []
        let num = 0;
        for (let i of Object.keys(notes)) {
            if (notes[i].toFixed(2) > 0) {
                return_note[num] = [i, Number(notes[i].toFixed(2))];
                num += 1;
            }
        }
        let close_return = []
        let close_num = 0;
        for (let i of Object.keys(notes)) {
            close_return[close_num] = [i, Number(notes[i].toFixed(2))];
            close_num += 1;
        }
        let check = [];
        let check_num = 0;
        for (let i of Object.keys(drawer)) {
            if (drawer[i] <= 0) {
                check[check_num] = true;
              check_num += 1;
            }
        }
        if (check.length == 9) {
            let close_return_reorder = []
            let count = 0;
            for (let i = 8; i >= 0; i--) {
              close_return_reorder[count] = close_return[i]
              count += 1;
            }
            return {status: "CLOSED", change: close_return_reorder}
        }
        return {status: "OPEN", change: return_note};
        }
    }

    console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
    console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))