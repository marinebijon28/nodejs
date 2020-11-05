const axios = require('axios')

async function test_create(ressources) {
    const result = await axios.post('http://', ressources)
    return result.data
}
test_create('localhost:4021/ressources/2')