const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema,
} = require('graphql');

const users =[
  {id:'1', firstName:'asd', age: 32},
  {id:'2', firstName:'qwe', age: 34},
  {id:'3', firstName:'aszxcd', age: 35},
];
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: GraphQLString},
    firstName: {type: GraphQLString},
    age: {type: GraphQLInt},
  }
});

const RootQuery =new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    user:{
      type: UserType,
      args:{id: {type: GraphQLString}    },
      resolve(parentValue, args){
        const {id} = args;
        return _.find(users, {id})
      }
    }
  }
});
module.exports =new GraphQLSchema({
  query: RootQuery
});

