async function buhalteris(money1, money2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve(money1 + money2);
            } else {
                reject(new Error('Vejas nupute pinigus: ' + money1 + ' ' + money2));
            }
        }, 1000);
    });
}

(async () => {
    console.log('start');

    try {

        const ats1 = await buhalteris(20, 20);
        console.log(ats1);

        const ats2 = await buhalteris(ats1, 50);
        console.log(ats2);

    } catch (error) {
        console.log(error);
    }

    console.log('done');
})()
