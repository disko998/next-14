export const getRandom = () => {
    // generate random number between 0 and 100
    const val = Math.floor(Math.random() * 100);
    // console.log('getRandom:', val);
    return val;
};
