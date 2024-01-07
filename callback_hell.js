//nesting call back hell

getData = (dataId, getNextData) => {
  //2s

  setTimeout(() => {
    if (getNextData) {
      getNextData();
    }
    console.log(dataId);
  }, 2000);
};

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4);
    });
  });
});
