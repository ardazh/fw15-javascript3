const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat']
            let cek = dataDay.find((item) => {
                return item == day
            })
            if (cek){
                resolve(cek)
            }else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

async function getHari() {
    try {
      // "await" will wait for the promise to resolve or reject
      // if it rejects, an error will be thrown, which you can
      // catch with a regular try/catch block
      const someValue = await cekHariKerja('Sabtu');
      console.log(someValue);
    } catch (error) {
      console.log(error.message);
    }
  }
  getHari();