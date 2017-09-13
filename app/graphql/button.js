import {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull,
	GraphQLBoolean,
} from 'graphql'

export const ButtonType = new GraphQLObjectType({
	name: 'Button',
	fields: () => ({
		id: {type: GraphQLID},
		isActive: {type: GraphQLBoolean},
	}),
})

export const queries = {
	button: {
		type: ButtonType,
		args: {
			id: {type: new GraphQLNonNull(GraphQLID)},
		},
		resolve(parent, {id}, {db}) {
			return db.get('SELECT * FROM myTable WHERE id = $id', {$id: id})
		},
	},
}

export const mutations = {
	clickButton: {
		type: ButtonType,
		args: {
			id: {type: new GraphQLNonNull(GraphQLID)},
			isActive: {type: GraphQLBoolean},
		},
		resolve(parentValue, {id, isActive}, {db}) {
			db.run(
				`INSERT INTO myTable(id, isActive) VALUES(null, $isActive) WHERE id = $id`,
				{$id: id, $idActive: isActive}
			)
		},
	},
}
