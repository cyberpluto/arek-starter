const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLNonNull,
	GraphQLBoolean,
	GraphQLString,
} = require('graphql')

const ButtonType = new GraphQLObjectType({
	name: 'Button',
	fields: () => ({
		id: {type: GraphQLID},
		message: {type: GraphQLString},
		isActive: {type: GraphQLBoolean},
	}),
})

const queries = {
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

const mutations = {
	clickButton: {
		type: ButtonType,
		args: {
			id: {type: new GraphQLNonNull(GraphQLID)},
			isActive: {type: GraphQLBoolean},
		},
		resolve(parentValue, {id, isActive}, {db}) {
			db.run('UPDATE myTable SET isActive = $isActive WHERE id = $id', {
				$id: id,
				$isActive: isActive,
			})
		},
	},
}

module.exports = {ButtonType, queries, mutations}
