//Family

var family = [{
      name: 'Gary',
      age: '54',
      relationship: 'father'
              },{
      name: 'Barbara',
      age: '53',
      relationship: 'mother'
              },{
      name: 'Sierra',
      age: '24',
      relationship: 'sister'
              },{
      name: 'Rachel',
      age: '18',
      relationship: 'sister'
              }];

module.exports.getFamily = function(){
  return family;
};

module.exports.addFamily = function(newFamilyMember){
  family.push(newFamilyMember);
  return family;
};

//Friends

var friends = [{
      name: 'Greg',
      age: '27',
      metWhere: 'my birthday LAN'
              },{
      name: 'Jaron',
      age: '27',
      metWhere: 'primary'
              },{
      name: 'Clint',
      age: '27',
      metWhere: 'halo 2 multiplayer'
              },{
      name: 'Zane',
      age: '27',
      metWhere: 'LAN party'
              }];

module.exports.getFriends = function(){
  return friends;
};

module.exports.addFriend = function(newFriend){
  friends.push(newFriend);
  return friends;
};

//Hobbies

var hobbies = ['code', 'gaming', 'writing', 'recording'];

module.exports.getHobbies = function(){
  return hobbies;
};

module.exports.addHobbies = function(newHobbie){
  friends.push(newHobbie);
  return hobbies;
};

var me = {
      name: 'Devin Olsen',
      height: 6, 
      age: 27,
      favorite movie: 'Kiss Kiss Bang Bang',
      favorite artist: 'Brand New',
      favorite food: 'Nachos'
              };

module.exports.getMe = function(){
  return me;
};