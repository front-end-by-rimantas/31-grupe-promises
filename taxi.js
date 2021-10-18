async function taksistas(time) {
    const price = 5;
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(time * price);
        }, time * 1000);
    });
}

function printAccount(time, cash) {
    console.log(`Vaziavo: ${time}s; Saskaitoje: ${cash} Eur;`);
}

(async () => {
    try {
        let saskaita = 0;
        const trips = [2, 3, 1, 1, 4];

        for (const trip of trips) {
            saskaita += await taksistas(trip);
            printAccount(trip, saskaita);
        }

    } catch (error) {
        console.log(error);
    }
})();