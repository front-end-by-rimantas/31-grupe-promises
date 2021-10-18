async function spausdinkLaika(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time + 's');
        }, 1000);
    });
}

(async () => {
    console.log('start');

    const ats1 = await spausdinkLaika(1);
    console.log(ats1);

    const ats2 = await spausdinkLaika(2);
    console.log(ats2);

    const ats3 = await spausdinkLaika(3);
    console.log(ats3);

    console.log('done');
})()
