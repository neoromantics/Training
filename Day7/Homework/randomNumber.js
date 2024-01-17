const randomNumberGenerator = () =>
  new Promise((resolve, reject) => {
    return setTimeout(resolve, 1600);
  });

randomNumberGenerator().then(() => console.log(Math.random()));
