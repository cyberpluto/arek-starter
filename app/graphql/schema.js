import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
} from 'graphql'
import {queries as buttonQueries, mutations as buttonMutations} from './button'

export const schema = new GraphQLSchema({
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
