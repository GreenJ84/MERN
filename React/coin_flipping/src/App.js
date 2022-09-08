

function App() {
  function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
  }

  function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if(result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
        if (attempts > 100){
          return null;
        }
      }
    return `It took ${attempts} tries to flip five "heads"`;
  }

  let attempts = 0;

  function fiveHeads() {
    return new Promise( (resolve, reject) => {
        attempts = fiveHeadsSync();
        if (attempts == null){
          attempts = "It has been over 100 attempts with no success!";
          reject(attempts);
        }
        else { resolve( attempts )}
    });
}
  fiveHeads()
      .then( res => console.log(res+"1") )
      .catch( err => console.log(err+"2") );
  console.log( "When does this run now?" );

  return (
    <div className="App">
      <h1>{attempts}</h1>
    </div>
  );
}

export default App;
