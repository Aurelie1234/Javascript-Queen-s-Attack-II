

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    
  let numberOfSquares = 0;


    let obs = new Set();
    obstacles.forEach(v => obs.add(v[0] + ':' + v[1]))


    const direction = (rowDir, colDir) => {
        let row = r_q + rowDir;
        let col = c_q + colDir;
        while (row <= n && row > 0 && col <= n && col > 0) {
            if (obs.has(row + ':' + col)) break;
            numberOfSquares++;
            row += rowDir;
            col += colDir;
        }
    }


    direction(1, 1);
    direction(1, -1);
    direction(-1, 1);
    direction(-1, -1);
    direction(0, 1);
    direction(1, 0);
    direction(0, -1);
    direction(-1, 0);


    return numberOfSquares;
}




}


return arr


}
