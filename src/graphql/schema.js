const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
} = require('graphql')
const {queries: buttonQueries, mutations: buttonMutations} = require('./button')

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'RootQueryType',
		fields: () => ({
			...buttonQueries,
		}),
	}),
	mutation: new GraphQLObjectType({
		name: 'RootMutationType',
		fields: {
			...buttonMutations,
		},
	}),
})

module.exports = {schema}
