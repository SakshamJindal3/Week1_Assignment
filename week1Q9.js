function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds(1000);
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();
  console.log(10)
  console.log(10)
  console.log(10)
  console.log(10)
  