function getGCDTable(m, n) {
    const mToInt = parseInt(m, 10)
    const nToInt = parseInt(n, 10)
    return calculateTable(mToInt, nToInt)
}

function calculateTable(m, n) {
    let tableArray = []

    let d = m
    let d_prime = n
    let d_prime_temp

    let s = 1
    let s_prime = 0
    let s_prime_temp

    let t = 0
    let t_prime = 1
    let t_prime_temp

    let q = Math.floor(d / d_prime)

    while (d_prime !== 0) {
        addCurrentRowToArray(tableArray, d, d_prime, s, s_prime, t, t_prime, q)

        d_prime_temp = d_prime
        d_prime = d - q * d_prime
        d = d_prime_temp

        s_prime_temp = s_prime
        s_prime = s - s_prime * q
        s = s_prime_temp

        t_prime_temp = t_prime
        t_prime = t - t_prime * q
        t = t_prime_temp

        q = Math.floor(d / d_prime)
    }
    addCurrentRowToArray(tableArray, d, d_prime, s, s_prime, t, t_prime, null)

    return tableArray
}

class TableRow {
    constructor(d, d_prime, s, s_prime, t, t_prime, q) {
        this.d = d
        this.d_prime = d_prime
        this.s = s
        this.s_prime = s_prime
        this.t = t
        this.t_prime = t_prime
        this.q = q
    }
}

function addCurrentRowToArray(tableArray, d, d_prime, s, s_prime, t, t_prime, q) {
    const currentRow = new TableRow(d, d_prime, s, s_prime, t, t_prime, q)
    tableArray.push(currentRow)
}