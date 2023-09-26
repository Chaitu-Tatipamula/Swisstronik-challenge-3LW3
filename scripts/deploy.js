const {ethers} = require("ethers")
require('dotenv').config()

const contractAddress = process.env.CONTRACT;
const url = process.env.INFURA_KEY;

async function main(){
// create a JsonRpc call using ethers js
   const provider = new ethers.providers.JsonRpcProvider(url)
// use the method getStorageAt("" , 0) for retreiving the slot #0 
   const storageValue = await provider.getStorageAt(contractAddress,0)
// log the retrieved value
    console.log(storageValue);  //0x0000000000000000000000000000000000000000000000000000000000000000
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
  console.error(error);
  process.exit(1);
})