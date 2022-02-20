export default function regex( json ) {
  // const rules = /^Class[1-3]{1}/;
  const rules = /^Class/;
  
  const list = new Set(json.map((item, index) => {
    for(const [key, value] of Object.entries(item)) {
      if( rules.test(key) )
        return value;
    }
    return null;
  }));
  console.log( list )
}