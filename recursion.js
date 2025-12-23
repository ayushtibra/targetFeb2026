let user = {
    name: 'John',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001',
        coordinates: {
            latitude: 40.7128,
            longitude: -74.0060
        }
    },
    friends: [
        {
            name: 'Jane',
            address: {
                street: '456 Main St',
                city: 'Los Angeles',
                state: 'CA',
                zip: '90001'
            }
        }
    ]
}

let finalResult = {};

const Magic = (obj, key) => {
    
    const keys = Object.keys(obj);
    for(let i = 0; i < keys.length; i++) {
        if(typeof obj[keys[i]] === 'object') {
            Magic(obj[keys[i]], key + '_' + keys[i]);
        } else {
            finalResult[key + '_' + keys[i]] = obj[keys[i]];
        }
    }
}

Magic(user, 'user');
console.log(finalResult);