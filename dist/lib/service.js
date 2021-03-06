"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const getData = async (userID) =>{
    try
    {
        const {data:users} = await _axios2.default.get(`https://jsonplaceholder.typicode.com/users/${userID}`);
        const {data:posts} = await _axios2.default.get(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`);

        return {
            users,
            posts
        }
    }
    catch(err)
    {
        console.log(err.message);
    }
    
}

exports. default = getData;