function userDatabaseModel(JsonplaceholderUser){
    const filter = { email: JsonplaceholderUser.email };
    const update = { id: JsonplaceholderUser.id, email: JsonplaceholderUser.email };
    const options = { new: true, upsert: true };

    return { filter, update, options };
}

export { userDatabaseModel }