const db = require("../config/dbConfig");

module.exports.getAllUsers = async(count) => {
    try {
        const response = await new Promise((resolve, reject) => {
            db.execute('SELECT * FROM `user` LIMIT ?', 
            [count], (err, results) => {
                if (err) reject(new Error(err.message));
                resolve(results);
            })
        });
        return response;
      } catch (error) {
        console.log(error);
      }
}
module.exports.getUser = async(usernameORemail) => {
    try {
      const user = await new Promise((resolve, reject) => {
        db.execute('SELECT * FROM `users` WHERE `username`=? OR `email`=?',
        [usernameORemail, usernameORemail],
        (err, results) => {
          if(err) reject (err.message);
          resolve(results);
        })
      });
      return user;
    } catch (error) {
      throw error;
    }
}
  
  module.exports.addUser = async(username, email, password) => {
    try {
      const response = await new Promise((resolve, reject) => {
        db.execute(
          'INSERT INTO `users` (`username`, `email`, `password`) VALUES (?, ?, ?)',
          [username, email, password], 
          (err, results) => {
          if (err) {
              reject(err.message);
          }
          resolve(results);
        })
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

module.exports.fetchAllPackges = async(count) => {
  try{
    const response = await new Promise((resolve,reject) => {
      db.execute(
        'SELECT * FROM `travel_packages_data`',
        (err, results) => {
          if(err) {
            reject(err.message);
          }
          resolve(results);
        })
    });
    return response; 
  } catch(error) {
     throw error;
  }
}
module.exports.fetchAllPins = async(id) => {
  try{
    const response = await new Promise((resolve,reject) => {
      db.execute(
        'SELECT * FROM `pins` where `p_id` = ?',
        [id],
        (err, results) => {
          if(err) {
            reject(err.message);
          }
          resolve(results);
        })
    });
    return response; 
  } catch(error) {
     throw error;
  }
}
module.exports.fetchAllCities = async(count) => {
  try{
    const response = await new Promise((resolve,reject) => {
      db.execute(
        'SELECT * FROM `Countries`',
        (err, results) => {
          if(err) {
            reject(err.message);
          }
          resolve(results);
        })
    });
    return response; 
  } catch(error) {
     throw error;
  }
}


module.exports.fetchAllItems = async() => {
  try{
    const response = await new Promise((resolve,reject) => {
      db.execute(
        'SELECT * FROM `shop_view`',
        (err, results) => {
          if(err) {
            reject(err.message);
          }
          resolve(results);
        })
    });
    return response; 
  } catch(error) {
     throw error;
  }
}

module.exports.fetchReqCities = async() => {
  try{
    const response = await new Promise((resolve,reject) => {
      db.execute(
        'SELECT * FROM `pins`',
        (err, results) => {
          if(err) {
            reject(err.message);
          }
          resolve(results);
        })
    });
    return response; 
  } catch(error) {
     throw error;
  }
}